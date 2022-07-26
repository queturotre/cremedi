<template>
  <h1 class="tittle" @click="start">Empezar</h1>
  <div class="menu" v-if="currentPage == PAGES.MENU">
    <h1 class="tittle">Solicitar crédito</h1>
    <p>
      Bienvenido, tenemos para ti las mejores opciones para que cumplas tus metas y tus sueños. 
      Actualmente tenemos los siguientes créditos:
    </p>
    <button class="btn btn-primary" @click="freeInvestment">Libre Inversión</button>
    <button class="btn btn-primary">Adelanta tu nómina</button>
  </div>
  <div class="investment">
    <h2 class="sub-title">Libre Inversión</h2>
    <p>
      Puedes {{ request }} para cumplir tus metas. Tienes pre aprobado un cupo de $2’500,000.
      Este dinero se te descontará de tu salario mensual.
    </p>
    <form action="" method="get"></form>
  </div>
</template>

<script>
import CreditService from '@/services/CreditService.js'

export default {
  name: 'HomeView',
  data(){
    return{
      credits: null,
      PAGES: {
        MENU: 'menu',
        INVESTMENT: 'free-investment',
        ADVANCE: 'money-advance'
      },
      currentPage: '',
      request: "pedir el crédito de libre inversión"
    }
  },
  created(){
    CreditService.getCredits()
      .then(response => {
        this.credits = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods:{
    start(){
      this.currentPage = this.PAGES.MENU
    },
    freeInvestment(){
      this.currentPage = this.PAGES.INVESTMENT
    },
    moneyAdvance(){
      this.currentPage = this.PAGES.ADVANCE
      this.request = "adelantar tu nómina"
    }
  }
}
</script>

<style scoped>
.tittle{
  color: #76226D;
}
.btn {
    height: 45px;
    width: 100%;
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
.sub-title{
  color: #E6BCE3;
}
</style>
