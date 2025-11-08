<template>
  <header class="headline-main">
    <h1 class="headline-text">Lista projektów</h1>
    <div class="links">
      <a href="" class="link">Home</a>
      <a href="" class="link">O mnie</a>
      <a href="" class="link">Kontakt</a>
      <a href="" class="link">Projekty</a>
    </div>
  </header>

  <div class="project-card-wrapper">
    <ProjectCard
      v-for="item in projects"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :description="item.description"
    />
  </div>
  <p>Liczba projektów {{ projectCount }}</p>
</template>
<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { ref, computed } from "vue";
import { projectsData } from "@/utility/projectsList";

const projects = ref(projectsData);

const projectCount = computed(() => projects.value.length);
</script>
<style>
:root {
  --primary-background-color: hsl(0, 0%, 0%);
  --headline-text-color: hsl(0, 0%, 100%);
}
html,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
section {
  margin-bottom: 2rem;
}
.headline-main {
  display: flex;
  width: 100%;
  height: 10vh;
  min-height: 80px;
  background-color: var(--primary-background-color);
  flex-direction: column;
}
.headline-text {
  margin: 1vh;
  color: var(--headline-text-color);
  text-align: center;
  border: 1px dotted rgb(194, 90, 90);
}
.links {
  text-align: end;
  border: 1px dotted rgb(56, 125, 37);
}
.link {
  padding: 1vw;
  color: var(--headline-text-color);
}
.project-card-wrapper {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

@media (max-width: 700px) {
  .links {
    text-align: center;
  }
}
</style>
