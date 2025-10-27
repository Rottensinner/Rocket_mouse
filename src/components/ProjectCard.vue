<template>
  <section>
    <h1>{{ id }} {{ name }}</h1>
    <p>{{ description }}</p>
    <p>Link</p>
  </section>
</template>
<script setup>
defineProps({
  id: Number,
  name: String,
  description: String,
});
</script>
