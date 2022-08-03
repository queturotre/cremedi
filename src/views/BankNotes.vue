<template>
  <div class="container">
    <h1>BankNotes</h1>
    <p>In this problem you have to read an integer value and calculate the smallest possible number of banknotes in which the value may be decomposed. The possible banknotes are 100, 50, 20, 10, 5, 2 and 1. Print the read value and the list of banknotes.</p>
    <h2>Input</h2>
    <p>The input file contains an integer value N (0 less than N less than 1000000).</p>
    <h2>Output</h2>
    <p>Print the read number and the minimum quantity of each necessary banknotes, as the given example. Do not forget to print the end of line after each line, otherwise you will receive “Presentation Error”.</p>
    <h3>Development</h3>
    <input type="number" id="plata" placeholder="Quantity" v-model="dinero" class="input"><br><button @click="calcular" class="btn btn-primary">Submit</button><br>

    <div class="resultado" v-if="show">
      <p>Para ${{ plata.value }}, se necesitan</p>
      <p v-if="cien !== 0">{{ cien }} Billete(s) de $100</p>
      <p v-if="cincuenta !== 0">{{ cincuenta }} Billete(s) de $50</p>
      <p v-if="veinte !== 0">{{ veinte }} Billete(s) de $20</p>
      <p v-if="diez !== 0">{{ diez }} Billete(s) de $10</p>
      <p v-if="cinco !== 0">{{ cinco }} Billete(s) de $5</p>
      <p v-if="dos !== 0">{{ dos }} Billete(s) de $2</p>
      <p v-if="uno !== 0">{{ uno }} Billete(s) de $1</p>
    </div><br>
    <div class="billetes">
      <img src="../assets/img/100.png" alt="Billete de 100 dólares" class="billete" v-for="billete in cien" :key="billete">
      <img src="../assets/img/50.png" alt="Billete de 50 dólares" class="billete" v-for="billete in cincuenta" :key="billete">
      <img src="../assets/img/20.png" alt="Billete de 20 dólares" class="billete" v-for="billete in veinte" :key="billete">
      <img src="../assets/img/10.png" alt="Billete de 10 dólares" class="billete" v-for="billete in diez" :key="billete">
      <img src="../assets/img/5.png" alt="Billete de 5 dólares" class="billete" v-for="billete in cinco" :key="billete">
      <img src="../assets/img/2.png" alt="Billete de 2 dólares" class="billete" v-for="billete in dos" :key="billete">
      <img src="../assets/img/1.png" alt="Billete de 1 dólar" class="billete" v-for="billete in uno" :key="billete">
    </div>
  </div>
</template>

<script>
export default {
  name: 'BankNotes',
  data(){
    return{
      show: false,
      uno: 0, dos: 0, cinco: 0, diez: 0, veinte: 0, cincuenta: 0, cien: 0,
      numero: 0, plata: 0, dinero: '',
      errors:[]
    }
  },
  methods: {
    calcular(){
      this.plata = document.getElementById("plata")
      this.numero = parseInt(this.plata.value)
      
      this.cien = parseInt(this.numero / 100)
      this.numero -= this.cien * 100
      
      this.cincuenta = parseInt(this.numero / 50)
      this.numero -= this.cincuenta * 50
      
      this.veinte = parseInt(this.numero / 20)
      this.numero -= this.veinte * 20

      this.diez = parseInt(this.numero / 10)
      this.numero -= this.diez * 10
      
      this.cinco = parseInt(this.numero / 5)
      this.numero -= this.cinco * 5

      this.dos = parseInt(this.numero / 2)
      this.numero -= this.dos * 2

      this.uno = parseInt(this.numero / 1)
      this.numero -= this.uno * 1

      this.show = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.billete{  height: 150px;  width: 300px;}
.input{
  border: solid 1px gray;
  border-radius: 30px;
  height: 45px;
  text-align: center;
  width: 220px;
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
.error{
  color: #FAB001;
  font-size: 14px;
}
</style>
