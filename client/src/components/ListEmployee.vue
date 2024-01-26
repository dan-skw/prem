<template>
  <div>
    <h2>Employee List</h2>
    <Loader v-if="loading" />
    <DataTable :value="employees" v-else>
      <Column field="name" header="Name"></Column>
      <Column field="surname" header="Surname"></Column>
      <Column field="position.name" header="Position"></Column>
      <Column header="Birthdate">
        <template #body="slotProps">
          {{ formatDate(slotProps.data.birthdate) }}
        </template>
      </Column>
      <Column field="sex" header="Sex"></Column>
      <Column field="hourlyRate" header="Hourly Rate"></Column>
      <Column header="Edit">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" @click="editEmployee(slotProps.data)" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getEmployees } from "@/api/employees/employeeService";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Loader from "./Loader.vue";
import { useRouter } from "vue-router";

const employees = ref([]);
const router = useRouter();
const loading = ref(true);

onMounted(async () => {
  employees.value = await getEmployees();
  loading.value = false;
});

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const editEmployee = (employee) => {
  router.push({ name: "Edit Employee", params: { id: employee.id } });
};
</script>
