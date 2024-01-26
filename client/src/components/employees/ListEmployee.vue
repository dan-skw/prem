<template>
  <section class="wrapper">
    <h2>Lista obecnych pracowników</h2>
    <Loader v-if="loading" />
    <DataTable :value="employees" v-else>
      <Column field="name" header="Imię"></Column>
      <Column field="surname" header="Nazwisko"></Column>
      <Column field="position.name" header="Stanowisko"></Column>
      <Column header="Data urodzenia">
        <template #body="slotProps">
          {{ formatDate(slotProps.data.birthdate) }}
        </template>
      </Column>
      <Column field="sex" header="Płeć"></Column>
      <Column field="hourlyRate" header="Stawka godzinowa"></Column>
      <Column header="Edytuj">
        <template #body="slotProps">
          <Button icon="pi pi-pencil" @click="editEmployee(slotProps.data)" />
        </template>
      </Column>
    </DataTable>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getEmployees } from "@/services/employeeService";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";
import Loader from "../Loader.vue";
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
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
</style>
