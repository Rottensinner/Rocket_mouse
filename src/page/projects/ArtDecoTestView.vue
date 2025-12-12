<template>
  <div class="container">
    <div class="card-AD">
      <div class="left-side">
        <img class="portrait"></img>
       
  
      <p class="golden-bold-text"></p>
          </div>
          <div class="center-side"></div>
          <div class="right-side"></div>
    </div>
    <div class="buttons"></div>
  </div>
</template>
<style scoped>

.container {
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.card-AD {
  width: 85%;
  height: 85%;
  background-color: hsl(0, 0%, 5%);
  text-align: center;
  border: 3px solid silver;
  padding: 2%;
  display:flex;
  flex-direction: row;
  gap: 3%;
}
.left-side,.center-side,.right-side{
  /* Ważne: usuwamy standardowe obramowanie */
  border: none; 
  /* Upewniamy się, że tło elementu jest zdefiniowane */
  background-color: hsl(0, 0%, 5%); 
  padding: 5px;
  
  box-shadow: 
    /* 1. Ramka Wewnętrzna (Linia 1) - Szerokość 3px, kolor złoty */
    inset 0 0 0 1px gold, 
    
    /* 2. Przerwa (Odstęp) - Szerokość 12px, kolor tła (hsl(0, 0%, 5%))
       *Zauważ, że jest to 12px od krawędzi elementu*
       *Efektywna przerwa to: 12px - 3px = 9px* */
    inset 0 0 0 20px hsl(0, 0%, 5%), 
    
    /* 3. Ramka Zewnętrzna (Linia 2) - Szerokość 15px, kolor złoty
       *Efektywna szerokość linii to: 15px - 12px = 3px* */
    inset 0 0 0 21px gold;
    width: 33%;
    height: 100%;
}
.golden-bold-text {
  /* Tworzymy szerszy gradient, żeby móc go przesuwać */
  background: linear-gradient(
    120deg,
    hsl(40, 60%, 30%) 0%,
    hsl(43, 74%, 49%) 20%,
    hsl(48, 80%, 85%) 45%,
    hsl(48, 80%, 85%) 55%,
    hsl(43, 74%, 49%) 80%,
    hsl(40, 60%, 30%) 100%
  );
  background-size: 200% auto; /* Rozciągamy tło dwukrotnie */

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;

  animation: shine 5s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
