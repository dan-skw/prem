<template>
  <section class="wrapper">
    <h3>Dodaj pracownika</h3>
    <EmployeeForm @submit="handelAddEmployee" buttonText="Dodaj pracownika" />
  </section>
</template>

<script setup>
import EmployeeForm from "./EmployeeForm.vue";
import { addEmployee } from "@/services/employeeService";
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
<style scoped>
.wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
</style>
