<template>
  <div class="background">
    <div class="wrapper">
      <div class="display">{{wynik}}</div>
      <div class="numbers">
        <div class="numberRow">
          <button class="btn-function" v-on:click="delAll()">ce</button>
          <button class="btn-function"  v-on:click="delOne()">⌫</button>
          <button class="btn-function" v-on:click="setMathSign('%')">%</button>
          <button class="btn-function">:</button>
        </div>
        <div class="numberRow">
          <button v-on:click="addNumbers('7')">7</button>
          <button v-on:click="addNumbers('8')">8</button>
          <button v-on:click="addNumbers('9')">9</button>
          <button class="btn-function">*</button>
        </div>
        <div class="numberRow">
          <button v-on:click="addNumbers('4')">4</button>
          <button v-on:click="addNumbers('5')">5</button>
          <button v-on:click="addNumbers('6')">6</button>
          <button class="btn-function">-</button>
        </div>
        <div class="numberRow">
          <button v-on:click="addNumbers('1')">1</button>
          <button v-on:click="addNumbers('2')">2</button>
          <button v-on:click="addNumbers('3')">3</button>
          <button class="btn-function">+</button>
        </div>
        <div class="numberRow">
          <button>.</button>
          <button v-on:click="addNumbers('0')" class="btn-zero">0</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const wynik = ref("");
const maths = ref()

const addNumbers = (a) => {

  if (wynik.value === 0 && a === "0") return;
  else wynik.value = wynik.value === 0 ? a : wynik.value + a;
};
const setMathSign = (a) =>{
  if(!maths){
  maths.value = a; 
  addNumbers(maths)
  }
}
const sign = () =>{
  wynik.value = wynik.value.charAt(0) ===  '-'
}
const delOne = () => {
  if (wynik.value.length <= 1) {
    wynik.value = 0;
  } else wynik.value = wynik.value.slice(0, -1);
};
const delAll = ()=>{
  if (!wynik.value==0){
        wynik.value = 0;
  }
}
const makeCalculation = ()=>{

}
</script>
<style scoped>
.background {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-background-color);
}
.wrapper {
  background-color: hsl(0, 0%, 12%);
  padding: 2%;
  width: 40%;
  height: 70%;
}
.display {
  color: hsl(0, 0%, 100%);
  text-align: end;
  font-size: 5rem;
  border-bottom: 2px solid white;
  padding: 0.5rem;
  background-color: hsl(0, 0%, 15%);
}
.numberRow {
  background-color: hsl(0, 0%, 10%);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  margin: 0.5rem 0 0.5rem 0;
}
button {
  padding: 20px 1px;
  border: none;
  border-radius: 0.5rem;
  font-size: 30px;
  cursor: pointer;
  border: 1px solid hsl(0, 0%, 5%);
  transition: 100ms;
  background-color: hsl(23, 15%, 69%);
}
button:active {
  background-color: hsl(0, 0%, 30%);
  color: white;
  transition: 200ms;
}
.btn-function {
  background-color: hsl(23, 74%, 39%);
  color: hsl(0, 0%, 84%);
}
.btn-zero {
  grid-column: span 3;
}
</style>
