<template>
  <nav>
    <h1><i class="pi pi-users"></i>prem</h1>
    <RouterLink v-if="!isLoggedIn" to="/signup">Signup</RouterLink>
    <RouterLink v-if="!isLoggedIn" to="/signin">Signin</RouterLink>
    <RouterLink v-if="isLoggedIn" to="/protected">Dashboard</RouterLink>
    <RouterLink v-if="isLoggedIn" :to="`/userpanel/${authStore.user.uid}`"
      >User Panel</RouterLink
    >
    <button v-if="isLoggedIn" @click="logout">Sign Out</button>
  </nav>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, watch } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { signUserOut } from "@/firebase/auth/userAuth"; // Adjust the path as necessary

const authStore = useAuthStore();
const isLoggedIn = ref(authStore.user !== null);
const router = useRouter(); // Import and use the useRouter function

const logout = async () => {
  await signUserOut();
  authStore.clearUser(); // Call clearUser instead of setUser(null)
  router.push("/signin");
};

watch(
  () => authStore.user,
  (user) => {
    isLoggedIn.value = user !== null;
  }
);
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
