<template>
  <div class="wrapper">
    <h1>Employee Manager</h1>
    <p>This is a protected route. You can only see this if you're signed in.</p>
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
