<template>
  <MainLayout>
    <RouterView />
    <Toast />
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/components/MainLayout.vue";
import { useAuthStore } from "@/stores/authStore";

const authStore = useAuthStore();
authStore.initializeAuthListener();
</script>
