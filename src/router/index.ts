import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Register.vue"),
    },
    {
      name: 'recover',
      path: '/recover',
      component: () => import('../views/Recover.vue'),
    },
    {
      path: "/app",
      component: () => import("../components/layout/DefaultLayout.vue"),
      children: [
        {
          path: "/dashboard",
          name: "Dashboard",
          component: () => import("../views/Dashboard.vue"),
        },
        {
          path: "/clients",
          name: "Clients",
          component: () => import("../views/Clients.vue"),
        },
        {
          path: "/service-history",
          name: "Service History",
          component: () => import("../views/ServiceHistory.vue"),
        },
        {
          path: "/feedback",
          name: "Feedback",
          component: () => import("../views/Feedback.vue"),
        },
        {
          path: "/audits",
          name: "Audits",
          component: () => import("../views/Audits.vue"),
        },
        {
          path: "/tracking",
          name: "Tracking",
          component: () => import("../views/Tracking.vue"),
        },
        {
          path: "/reports",
          name: "Reports",
          component: () => import("../views/Reports.vue"),
        },
        {
          path: "/settings",
          name: "Settings",
          component: () => import("../views/Settings.vue"),
        },
      ],
    },
  ],
});

export default router;
