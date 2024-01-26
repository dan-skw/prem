<template>
  <EmployeeForm
    :initialEmployeeData="employee"
    buttonText="Zaaktualizuj dane"
    @submit="handleUpdateEmployee"
  />
  <Button
    label="Delete Employee"
    @click="deleteCurrentEmployee"
    class="p-button-danger"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import EmployeeForm from "./EmployeeForm.vue";
import {
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "@/api/employees/employeeService";
import { useRoute } from "vue-router";
import { useToast } from "primevue/usetoast";
import router from "@/router";
import Button from "primevue/button";

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
    toast.add(
      {
        severity: "success",
        summary: "Sukces!",
        detail: "Dane pracownika zostały zaaktualizowane.",
        life: 3000,
      },
      {}
    );
    router.push("/protected/employees/list");
  } catch (error) {}
};

const deleteCurrentEmployee = async () => {
  try {
    await deleteEmployee(route.params.id);
    toast.add(
      {
        severity: "success",
        summary: "Sukces!",
        detail: "Pracownik został usunięty.",
        life: 3000,
      },
      {}
    );
    router.push("/protected/employees/list");
  } catch (error) {
    // Handle error
  }
};
</script>
