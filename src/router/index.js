import { createRouter, createMemoryHistory } from "vue-router";
import HomeView from "@/page/MainView.vue";

const routes = [{ path: "/", name: "home", component: HomeView }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
