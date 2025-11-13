import { createRouter, createWebHistory } from "vue-router";
import ProjectView from "@/page/ProjectView.vue";
import ToDoListView from "@/page/ToDoListView.vue";

const routes = [
  { path: "/projects", name: "home", component: ProjectView },
  { path: "/todo-list", name: "todo-list", component: ToDoListView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
