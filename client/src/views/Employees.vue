<template>
  <div class="wrapper">
    <h1>Employee Manager</h1>
    <div>
      <RouterLink to="/protected/employees/add"
        ><Button icon="pi pi-user-plus"
      /></RouterLink>
      <RouterLink to="/protected/employees/list"
        ><Button icon="pi pi-user-edit"
      /></RouterLink>
    </div>
    <RouterView />
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import Button from "primevue/button";
</script>
