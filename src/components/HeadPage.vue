<template>
  <header class="headline-main">
    <div class="links">
      <ButtonLink :href="'/home'">Home</ButtonLink>
      <ButtonLink :href="'/about'">O mnie</ButtonLink>
      <ButtonLink :href="'/projects'">Projekty</ButtonLink>
      <ButtonLink :href="'/contacts'">Kontakt</ButtonLink>
    </div>
  </header>
</template>
<script setup>
import ButtonLink from "./ButtonLink.vue";
</script>
<style scoped>
.headline-main {
  display: flex;

  background-color: var(--primary-background-color);
  flex-direction: column;
  align-items: center;
}
.headline-text {
  margin: 1vh;
  color: var(--headline-text-color);
  text-align: center;
}
.links {
  display: flex;
  flex-direction: row;
  gap: 4vw;
}
</style>
