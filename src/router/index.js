import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/satzung",
      name: "satzung",
      component: () => import("../views/SatzungView.vue"),
    },
    {
      path: "/impressum",
      name: "impressum",
      component: () => import("../views/ImpressumView.vue"),
    },
    {
      path: "/datenschutz",
      name: "datenschutz",
      component: () => import("../views/DatenschutzView.vue"),
    },
    {
      path: "/spenden",
      name: "spenden",
      component: () => import("../views/SpendenView.vue"),
    },
    {
      path: "/ocelot",
      name: "ocelot",
      component: () => import("../views/projekte/OcelotView.vue"),
    },
  ],
});

export default router;
