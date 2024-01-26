<template>
  <div class="wrapper">
    <TabMenu :model="items">
      <template #item="{ item, props }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate }"
          :to="item.route"
          custom
        >
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span v-bind="props.icon" />
            <span v-bind="props.label">{{ item.label }}</span>
          </a>
        </router-link>
        <a
          v-else
          v-ripple
          :href="item.url"
          :target="item.target"
          v-bind="props.action"
        >
          <span v-bind="props.icon" />
          <span v-bind="props.label">{{ item.label }}</span>
        </a>
      </template>
    </TabMenu>

    <RouterView />
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import router from "@/router";

import TabMenu from "primevue/tabmenu";

const items = ref([
  {
    label: "Dodaj pracownika",
    icon: "pi pi-user-edit",
    command: () => {
      router.push("/protected/employees/add");
    },
  },
  {
    label: "Lista pracowników",
    icon: "pi pi-list",
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
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
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
