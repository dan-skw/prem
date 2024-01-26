<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
  <Toast position="bottom-center" />
</template>

<script setup>
import MainLayout from "@/components/MainLayout.vue";
import Toast from "primevue/toast";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
authStore.initializeAuthListener();
</script>
