<template>
  <EmployeeForm
    :initialEmployeeData="employee"
    buttonText="Zaaktualizuj dane"
    @submit="handleUpdateEmployee"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import EmployeeForm from "./EmployeeForm.vue";
import { getEmployee, updateEmployee } from "@/api/employees/employeeService";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";
import router from "@/router";

const route = useRoute();
const employee = ref({});
const toast = useToast();

onMounted(async () => {
  try {
    employee.value = await getEmployee(route.params.id);
  } catch (error) {
    // Handle error
  }
});

const handleUpdateEmployee = async (updatedEmployeeData) => {
  try {
    await updateEmployee(route.params.id, updatedEmployeeData);
    toast.add({
      severity: "success",
      summary: "Sukces",
      detail: "Dane pracownika zostały zaktualizowane",
      life: 3000,
    });
    router.push("/protected/employees/list");
  } catch (error) {}
};
</script>
