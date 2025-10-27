<template>
  <section>
    <h1>To będzie główne menu</h1>
    <p>
      Tu będa wszystkie miniprojekty jako kafelki. To będzie odpowiednik mojego
      portfolio / listy projektów do nauki
    </p>
    <p>Obecnie mamy {{ projectCount }}</p>
  </section>
  <section>
    <h2>Lista projektów:</h2>
    <ProjectCard
      v-for="item in projects"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :description="item.description"
    />
  </section>
</template>
<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { ref, computed } from "vue";
import { projectsData } from "@/utility/projectsList";

const projects = ref(projectsData);

const projectCount = computed(() => projects.value.length);
</script>
<style>
section {
  margin-bottom: 2rem;
}
</style>
