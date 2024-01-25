<template>
  <div class="main-layout">
    <Navbar />
    <main class="content">
      <slot></slot>
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}
</style>
