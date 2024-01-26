<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
  <Toast />
</template>

<script setup>
import MainLayout from "@/components/MainLayout.vue";
import Toast from "primevue/toast";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
authStore.initializeAuthListener();
</script>
