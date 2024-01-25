<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink v-if="!authStore.user" to="/signup">Signup</RouterLink>
    <RouterLink v-if="!authStore.user" to="/signin">Signin</RouterLink>
    <RouterLink v-if="authStore.user" to="/protected">Dashboard</RouterLink>
    <button v-if="authStore.user" @click="logout">Sign Out</button>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { signUserOut } from "@/firebase/auth/userAuth"; // Adjust the path as necessary

const authStore = useAuthStore();

const logout = async () => {
  await signUserOut();
};
</script>

<style>
/* Your styles for Navbar */
nav {
  /* Example styles */
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>
