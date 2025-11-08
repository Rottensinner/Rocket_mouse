<template>
  <div class="card-wrapper">
    <div class="card-picture"></div>
    <div class="card-info">
      <p>{{ id }}. {{ name }}</p>
    </div>
    <!-- <div class="card-back-info">
      <p>{{ description }}</p>
    </div> -->
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
.card-wrapper {
  background-color: bisque;
  width: 200px;
  height: 250px;
  margin: 20px;
  border-radius: 5%;
}
.card-picture {
  background-color: blue;
  border-radius: 5% 5% 0 0;

  width: 200px;
  height: 200px;
}
.card-info {
  padding: 10px;
  color: black;
  font-size: 1.4rem;
}
.card-back-info {
}
</style>
