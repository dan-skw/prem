<template>
  <div class="employee-schedule">
    <!-- ... -->
    <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.name }}</td>
        <td v-for="day in days" :key="day">
          <input type="checkbox" v-model="employee.schedule[day]" />
        </td>
      </tr>
    </tbody>
    <p v-for="e in employees">{{ e.name }} - {{ e.schedule }}</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { getEmployees } from "@/services/employeeService";

const days = ref(Array.from({ length: 30 }, (_, i) => i + 1));
const employees = ref([]);

onMounted(async () => {
  const fetchedEmployees = await getEmployees();
  // Initialize a schedule for each employee
  employees.value = fetchedEmployees.map((employee) => ({
    ...employee,
    schedule: days.value.reduce((acc, day) => {
      acc[day] = false;
      return acc;
    }, {}),
  }));
});

const saveSchedule = () => {
  employees.value.forEach((employee) => {
    console.log(`Zapisany grafik dla ${employee.name}:`, employee.schedule);
  });
  // Tutaj dodaj logikę zapisywania grafiku do bazy danych
};
</script>

<style scoped>
.employee-schedule table {
  width: 100%;
  border-collapse: collapse;
}

.employee-schedule th,
.employee-schedule td {
  border: 1px solid #ddd;
  text-align: center;
  padding: 8px;
}

.employee-schedule th {
  background-color: #f4f4f4;
}
</style>
