<script setup>
import { getItems } from "../api/getItems";
import { ref, onMounted } from "vue";

const items = ref([]);

onMounted(async () => {
  items.value = await getItems();
  console.log(items.value);
});
</script>

<template>
  <main>
    <h1>Home</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </main>
</template>
<style scoped>
main {
  padding: 1rem;
  color: white;
}
</style>
```
