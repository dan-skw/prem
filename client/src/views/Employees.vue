<template>
  <div class="wrapper">
    <div class="card">
      <PanelMenu :model="items" class="w-full md:w-20rem">
        <template #item="{ item }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a
              v-ripple
              class="flex align-items-center cursor-pointer text-color px-3 py-2"
              :href="href"
              @click="navigate"
            >
              <span :class="item.icon" />
              <span class="ml-2 text-color">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            v-ripple
            class="flex align-items-center cursor-pointer text-color px-3 py-2"
            :href="item.url"
            :target="item.target"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span
              v-if="item.items"
              class="pi pi-angle-down text-primary ml-auto"
            />
          </a>
        </template>
      </PanelMenu>
    </div>

    <RouterView />
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import router from "@/router";
import PanelMenu from "primevue/panelmenu";

import Button from "primevue/button";

const items = ref([
  {
    label: "Dodaj pracownika",
    icon: "pi pi-link",
    command: () => {
      router.push("/protected/employees/add");
    },
  },
  {
    label: "Lista pracowników",
    icon: "pi pi-user-edit",
    command: () => {
      router.push("/protected/employees/list");
    },
  },
]);
</script>
<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
}

.card {
  display: flex;
  width: 33%;
  flex-direction: column;
}

.view {
  flex: 1;
}
</style>
