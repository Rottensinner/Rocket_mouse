import { createRouter, createWebHistory } from "vue-router";
import ProjectView from "@/page/ProjectView.vue";
import ToDoListView from "@/page/projects/ToDoListView.vue";
import MainView from "@/page/MainView.vue";
import AboutView from "@/page/AboutView.vue";
import ContactView from "@/page/ContactView.vue";
import ArtDecoTestView from "@/page/projects/ArtDecoTestView.vue";
import CalculatorViwe from "@/page/projects/CalculatorViwe.vue";

const routes = [
  { path: "/", name: "home", component: MainView },
  { path: "/projects", name: "projects", component: ProjectView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/contacts", name: "contacts", component: ContactView },
  { path: "/todo-list", name: "todo-list", component: ToDoListView },
  { path: "/artDeco", name: "artDeco", component: ArtDecoTestView },
  { path: "/calculator", name: "calculator", component: CalculatorViwe },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
