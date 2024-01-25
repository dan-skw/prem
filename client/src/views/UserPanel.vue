<template>
  <h1>User Panel</h1>
  <form @submit.prevent="updateUser">
    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-user"></i>
      </InputGroupAddon>
      <InputText v-model="user.name" placeholder="Name" />
    </InputGroup>

    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-user-edit"></i>
      </InputGroupAddon>
      <InputText v-model="user.surname" placeholder="Surname" />
    </InputGroup>

    <InputGroup>
      <Calendar v-model="user.birthDate" placeholder="Birth Date"></Calendar>
    </InputGroup>

    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-money-bill"></i>
      </InputGroupAddon>
      <InputText v-model="user.hourlyRate" placeholder="Hourly Rate" />
    </InputGroup>

    <Button label="Update" type="submit" />
  </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/authStore";
import { getUserData, updateUserData } from "@/services/userService";

import MainLayout from "@/components/MainLayout.vue";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import InputMask from "primevue/inputmask";
import Button from "primevue/button";

const router = useRouter();
const authStore = useAuthStore();
const user = ref({});

onMounted(async () => {
  try {
    user.value = await getUserData(authStore.user.uid);
  } catch (error) {}
});

const updateUser = async () => {
  try {
    await updateUserData(authStore.user.uid, user.value);
    // router.push("/some-success-page"); // Redirect after success
  } catch (error) {}
};
</script>
