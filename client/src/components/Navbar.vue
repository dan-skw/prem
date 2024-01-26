<template>
  <nav class="card">
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
  </nav>
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
        label: "PREM",
        icon: "pi pi-fw pi-chart-bar",
        route: "/protected",
      },
      {
        label: "Pracownicy",
        icon: "pi pi-fw pi-users",
        route: "/protected/employees",
      },
      {
        label: "Rezerwacje",
        icon: "pi pi-fw pi-book",
        route: "/protected/reservations",
      },
      {
        label: "Grafik",
        icon: "pi pi-fw pi-calendar",
        route: "/protected/schedule",
      },
      // {
      //   label: "User Panel",
      //   icon: "pi pi-fw pi-user",
      //   route: "/protected/user-panel",
      // },
      {
        label: "Wyloguj",
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
<style scoped>
@media screen and (max-width: 768px) {
  .p-tabmenu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .p-menuitem-text {
    display: none;
  }

  .p-menuitem-link {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .p-menuitem-icon {
    margin-right: 0;
  }
}
</style>
