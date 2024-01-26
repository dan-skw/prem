<template>
  <EmployeeForm @submit="handelAddEmployee" buttonText="Dodaj pracownika" />
</template>

<script setup>
import EmployeeForm from "./EmployeeForm.vue";
import { addEmployee } from "@/api/employees/employeeService";

// Define the function to add an employee
const handelAddEmployee = async (employeeData) => {
  try {
    console.log(1);
    await addEmployee(employeeData);
    // Handle success, e.g., navigate back to the employee list or show a success message
  } catch (error) {
    // Handle the error, e.g., show an error message
    console.error(error);
  }
};
</script>
