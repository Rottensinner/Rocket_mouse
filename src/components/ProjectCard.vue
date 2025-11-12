<template>
  <div class="card-container">
    <div class="card-inner">
      <div class="card-front">
        <div class="card-picture"></div>
        <div class="card-info">
          <h5>{{ id }}. {{ name }}</h5>
        </div>
      </div>

      <div class="card-back">
        <div class="card-info">
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  id: Number,
  name: String,
  description: String,
});
</script>
<style scoped>
.card-container {
  /* umożliwia to efekty 3d */
  perspective: 1000px;
}
.card-inner {
  /* ustawiamy wysokość, szerokość, dodajemy czas animacji i jej rodzaj */
  position: relative;
  background-color: bisque;
  width: 200px;
  height: 250px;
  margin: 20px;
  transition: transform 1s;
  transform-style: preserve-3d;
}
.card-container:hover .card-inner {
  /* po najechaniu będzie się obracać wokół osi Y */
  transform: rotateY(180deg);
}
.card-front,
.card-back {
  position: absolute;
  width: 200px;
  height: 250px;
  border-radius: 5%;
  backface-visibility: hidden;
  overflow: hidden;
}
.card-front {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.card-picture {
  background-color: blue;
  border-radius: 5% 5% 0 0;
  width: 200px;
  height: 200px;
  padding: 0;
  margin: 0;
}
.card-info {
  /* height: 50px; */
  color: black;
  font-size: 1.4rem;
  /* padding-bottom: 20px; */
  padding-left: 10px;
}
.card-back {
  /* ustawienie dla pleców karty aby były obrucone  */
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 1.1rem;
  transform: rotateY(180deg);
}
p {
  font-size: 16px;
}
</style>
