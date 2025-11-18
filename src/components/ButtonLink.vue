<template>
  <div class="buttonWrapper" @click="goTo()">
    <slot></slot>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  href: String,
});
const router = useRouter();
const goTo = () => {
  router.push(props.href);
};
</script>
<style scoped>
.buttonWrapper {
  display: inline-flex;
  color: white;
  cursor: pointer;
  padding: 0.6rem 1.4rem;
  background: transparent;
  border-radius: 12px 12px 0 0; /* tylko górne rogi */
  transition: all 200ms ease;
  margin-bottom: -3px; /* klucz – zakładka styka się z dołem */
}

.buttonWrapper:hover {
  background: white;
  color: black;
  transform: translateY(-3px);
  box-shadow: 0px -4px 10px rgba(255, 255, 255, 0.5);
}
</style>
