<template>
  <div class="main-layout">
    <Navbar />
    <main class="content">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
}
</style>
