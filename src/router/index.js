import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "@/page/MainView.vue";
import projectList from "@/utility/projectsList.js";

const routes = [
  { path: "/", name: "home", component: HomeView },
  ...projectList.map()
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
