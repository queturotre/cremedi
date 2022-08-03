<template>
<div class="container">
  <h1 class="title"><b>Solicitar crédito</b></h1>
  <div class="menu" v-if="data.menu">
    <p>
      Bienvenido, tenemos para ti las mejores opciones para que cumplas tus metas y tus sueños. 
      Actualmente tenemos los siguientes créditos:
    </p>
    <button class="btn btn-primary" @click="freeInvestment">Libre Inversión</button><br><br>
    <button class="btn btn-primary" @click="moneyAdvance">Adelanta tu nómina</button>
  </div>

  <div class="investment" v-if="data.freeIn">
    <h2 class="sub-title">{{ data.subTitle }}</h2>
    <p>
      Puedes {{ data.request }} para cumplir tus metas. Tienes pre aprobado un cupo de <b>${{ data.maxAmount }}</b>.
      Este dinero se te descontará de tu salario mensual.
    </p>
    <form action="">
      <label for="">¿Cuánto dinero necesitas?</label><br>
      <input type="number" id="" class="input" v-model="state.moneyRequested"><br>
      <span v-if="v$.moneyRequested.$error" class="error">{{ v$.moneyRequested.$errors[0].$message }}</span><br>

      <label for="">Plazo a pagar (meses)</label><br>
      <input type="number" id="" class="input" v-model="state.termRequested"><br>
      <span v-if="v$.termRequested.$error" class="error">{{ v$.termRequested.$errors[0].$message }}</span><br>
      
      <button type="button" class="btn btn-primary" @click="submitForm">Estimar</button>
    </form>
  </div>

  <div v-if="data.estimate">
    <div class="simulation">
      <h2 class="title">Simulación de tu solicitud</h2>
      <table class="table-simulate-result" cellspacing="0" align="center">
        <tr>
          <td class="black-label label">Interés (EA):</td>
          <td class="gray-label value">10%</td>
        </tr>
        <tr>
          <td class="black-label label"><span>*</span>Manejo aplicación:</td>
          <td class="gray-label value"><b>${{ data.serviceFee }}</b></td>
        </tr>
        <tr>
          <td class="purple-label label">Total a pagar mensual:</td>
          <td class="purple-label value">$80000</td>
        </tr>
        <tr>
          <td class="black-label label"><span>*</span>Pago primer mes:</td>
          <td class="gray-label value">$104000</td>
        </tr>
        <tr>
          <td class="black-label label">Pago total:</td>
          <td class="gray-label value">$1750000</td>
        </tr>
        <tr>
          <td class="black-label label">Pago intereses:</td>
          <td class="gray-label value">$50000</td>
        </tr>
      </table>
    </div>
    <p><span>*</span>El valor del manejo de la aplicación se incluye en el primer pago, para mayor información haz <a class="green-label" target="_blank" href="https://finewapp.com/terminos-condiciones">clic acá</a>.</p>
    <button class="btn btn-primary">Solicitar</button><br>
  </div>

  <div class="greet">

  </div>
</div>
</template>

<script>
import CreditService from '@/services/CreditService.js'

import useValidate from '@vuelidate/core'
import { required, maxValue, minValue } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  name: 'HomeView',
  setup(){
    const state = reactive({
      moneyRequested: '',
      termRequested: ''
    })
    const rules = computed(() => {
      return{
        moneyRequested: { required, maxValue: maxValue(1700000), minValue: minValue(500000) },
        termRequested: { required, maxValue: maxValue(48), minValue: minValue(12) }
      }
    })
    const v$ = useValidate(rules, state) // v$ now has tons of properties included in vuelidate/core like v$.error .
    return{
      state,
      v$
    }
  },

  data(){
    return{
      freeInvestmentData: [],
      moneyAdvanceData: [],
      data: {
        menu: true,
        freeIn: false,
        estimate: false,
        subtitle: '',
        request: '',
        maxAmount: 0,
        serviceFee: 0
      }
    }
  },

  created(){
    CreditService.getCredits()
      .then(response => {
        this.freeInvestmentData = response.data[0]
        this.moneyAdvanceData = response.data[1]
      })
      .catch(error => {
        console.log(error)
      })
  },

  methods:{
    submitForm(){
      this.v$.$validate()
      if(!this.v$.$error){
        this.data.estimate = true
        console.log("Form submitted" + this.v$)
      } else {
        console.log("Form failed" + this.v$)
      }
    },
    freeInvestment(){
      this.data.menu = false
      this.data.freeIn = true
      this.data.request = "pedir el crédito de libre inversión"
      this.data.subTitle = this.freeInvestmentData.creditName
      this.data.maxAmount = this.freeInvestmentData.maxAmount
      this.data.serviceFee = this.freeInvestmentData.serviceFee
    },
    moneyAdvance(){
      this.data.menu = false
      this.data.freeIn = true
      this.data.subTitle = this.moneyAdvanceData.creditName
      this.data.request = "adelantar tu nómina"
      this.data.maxAmount = this.moneyAdvanceData.maxAmount
      this.data.serviceFee = this.moneyAdvanceData.serviceFee
    }
  }
}
</script>

<style scoped>
.title{
  color: #76226D;
}
.sub-title{
  color: #E6BCE3;
}
.btn {
  height: 45px;
  width: 220px;
  max-width: 320px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
}
.btn-primary{
  background-color: #88E1B2;
  border-radius: 30px;
  color: white;
}
.input{
  border: solid 1px gray;
  border-radius: 30px;
  height: 45px;
  text-align: center;
  width: 220px;
}
.error{
  color: #FAB001;
  font-size: 14px;
}
.simulation {
  margin: 2em 0;
}
.table-simulate-result {
  width: 280px;
}
.label {
    text-align: left;
  }
.value {
  text-align: right;
}
</style>
