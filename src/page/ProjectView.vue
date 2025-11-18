<template>
  <HeadPage>Lista projektów</HeadPage>

  <div class="project-card-wrapper">
    <ProjectCard
      v-for="item in projects"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :description="item.description"
      :img="item.img"
      :site="item.site"
    />
  </div>
  <p>Liczba projektów {{ projectCount }}</p>
</template>
<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { ref, computed } from "vue";
import { projectsData } from "@/utility/projectsList";
import HeadPage from "@/components/HeadPage.vue";

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
