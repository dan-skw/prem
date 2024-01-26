import { createRouter, createWebHistory } from "vue-router";
import { watch } from "vue";
import { useAuthStore } from "@/stores/authStore";

import HomeView from "../views/HomeView.vue";
import SignUpView from "../views/auth/SignUpView.vue";
import SignInView from "../views/auth/SignInView.vue";
const routes = [
  {
    path: "/signup",
    name: "Sign Up",
    component: SignUpView,
  },
  {
    path: "/signin",
    name: "Sign In",
    component: SignInView,
  },
  {
    path: "/protected",
    name: "Protected",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "reservations",
        name: "Reservations",
        component: () => import("../views/Reservations.vue"),
      },
      {
        path: "schedule",
        name: "Schedule",
        component: () => import("../views/Schedule.vue"),
      },
      {
        path: "employees",
        name: "Employees",
        component: () => import("../views/Employees.vue"),
        children: [
          {
            path: "add",
            name: "Add Employee",
            component: () => import("../components/employees/AddEmployee.vue"),
          },
          {
            path: "list",
            name: "List of Employees",
            component: () => import("../components/employees/ListEmployee.vue"),
          },
          {
            path: "edit/:id",
            name: "Edit Employee",
            component: () => import("../components/employees/EditEmployee.vue"),
          },
        ],
      },
    ],
  },
  // {
  //   path: "/userpanel/:id",
  //   name: "User Panel",
  //   component: () => import("../views/UserPanel.vue"),
  //   meta: {
  //     requiresAuth: true,
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Wait for loading to finish
  if (authStore.isLoading) {
    const unwatch = watch(
      () => authStore.isLoading,
      (isLoading) => {
        if (!isLoading) {
          unwatch();
          if (to.meta.requiresAuth && !authStore.user) {
            next({ path: "/signin" });
          } else {
            next();
          }
        }
      }
    );
  } else if (to.meta.requiresAuth && !authStore.user) {
    next({ path: "/signin" });
  } else {
    next();
  }
});
export default router;
