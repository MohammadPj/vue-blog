import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home-layout",
      component: () => import("@/layout/HomeLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/HomeView.vue"),
          name: "home",
        },
        {
          path: "/article/:title",
          name: "single-article",
          component: () => import("../views/article/single-article/SingleArticleView.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
