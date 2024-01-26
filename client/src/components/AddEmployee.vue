<template>
  <EmployeeForm @submit="handelAddEmployee" buttonText="Dodaj pracownika" />
</template>

<script setup>
import EmployeeForm from "./EmployeeForm.vue";
import { addEmployee } from "@/api/employees/employeeService";
import router from "@/router";
import { useToast } from "primevue/usetoast";

const toast = useToast();

// Define the function to add an employee
const handelAddEmployee = async (employeeData) => {
  try {
    await addEmployee(employeeData);
    toast.add({
      severity: "success",
      summary: "Sukces!",
      detail: "Pracownik został dodany.",
      life: 3000,
    });
    router.push("/protected/employees/list");
  } catch (error) {
    // Handle the error, e.g., show an error message
    console.error(error);
  }
};
</script>
