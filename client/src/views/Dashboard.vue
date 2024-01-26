<template>
  <div class="wrapper">
    <h1>Dashboard</h1>
    <p>This is a protected route. You can only see this if you're signed in.</p>
    <div>
      <RouterLink to="/protected/reservations"
        ><Button icon="pi pi-book"
      /></RouterLink>
    </div>
    <RouterView />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import Button from "primevue/button";
import { RouterLink, RouterView } from "vue-router";
</script>
