<template>
  <div class="card">
    <TabMenu :model="items">
      <template #item="{ item }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a
            v-ripple
            :href="href"
            @click="navigate"
            class="p-menuitem-link"
            :class="{ 'p-disabled': item.disabled }"
          >
            <i v-if="item.icon" :class="item.icon" class="p-menuitem-icon"></i>
            <span class="p-menuitem-text">{{ item.label }}</span>
          </a>
        </router-link>
        <a
          v-else-if="item.command"
          v-ripple
          href="#"
          @click="item.command"
          class="p-menuitem-link"
        >
          <i v-if="item.icon" :class="item.icon" class="p-menuitem-icon"></i>
          <span class="p-menuitem-text">{{ item.label }}</span>
        </a>
        <a
          v-else
          v-ripple
          :href="item.url"
          :target="item.target"
          class="p-menuitem-link"
        >
          <i v-if="item.icon" :class="item.icon" class="p-menuitem-icon"></i>
          <span class="p-menuitem-text">{{ item.label }}</span>
        </a>
      </template>
    </TabMenu>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, watch, computed } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { signUserOut } from "@/firebase/auth/userAuth";
import TabMenu from "primevue/tabmenu";

const authStore = useAuthStore();

const isLoggedIn = computed(() => authStore.user);

const items = computed(() => {
  const menuItems = [];

  if (isLoggedIn.value) {
    menuItems.push(
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-chart-bar",
        route: "/protected",
      },
      {
        label: "Employees",
        icon: "pi pi-fw pi-users",
        route: "/protected/employees",
      },
      {
        label: "Reservations",
        icon: "pi pi-fw pi-book",
        route: "/protected/reservations",
      },
      {
        label: "User Panel",
        icon: "pi pi-fw pi-user",
        route: "/protected/user-panel",
      },
      {
        label: "Sign Out",
        icon: "pi pi-fw pi-sign-out",
        command: logout,
      }
    );
  } else {
    menuItems.push(
      {
        label: "Sign In",
        icon: "pi pi-fw pi-sign-in",
        route: "/signin",
      },
      {
        label: "Sign Up",
        icon: "pi pi-fw pi-user-plus",
        route: "/signup",
      }
    );
  }

  return menuItems;
});

const router = useRouter();

const logout = async () => {
  await signUserOut();
  authStore.clearUser();
  router.push("/signin");
};
</script>

<style>
/* Your styles for Navbar */
nav {
  /* Example styles */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
</style>
