<template>
  <div class="page">
    <HeadPage />
    <HelloMySweety></HelloMySweety>
  </div>
</template>
<script setup>
import HeadPage from "@/components/HeadPage.vue";
import HelloMySweety from "@/components/HelloMySweety.vue";
</script>
<style scoped>
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* pełny ekran */
}
</style>
