<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <Toast />
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/signup">Signup</RouterLink>
      <RouterLink to="/signin">Signin</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
