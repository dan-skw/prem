<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/signup">Signup</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
