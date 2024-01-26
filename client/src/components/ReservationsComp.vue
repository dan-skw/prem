<template>
  <div>
    <h2>Reservations</h2>
    <Calendar v-model="date" placeholder="Data rezerwacji" />
    <Button label="Szukaj" @click="fetchReservations" />

    <Panel v-show="reservationsFetched">
      <DataTable :value="flattenedReservations">
        <Column field="time" header="Godzina"></Column>
        <Column field="fullName" header="Dane"></Column>
        <Column field="numberOfGuests" header="Liczba gości"></Column>
        <Column field="table.name" header="Stolik"></Column>
      </DataTable>
    </Panel>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { getReservations } from "@/api/reservations/reservationService";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Panel from "primevue/panel";
import ColumnGroup from "primevue/columngroup"; // optional
import Row from "primevue/row";

const reservations = ref({});

const date = ref("");
const reservationsFetched = computed(
  () => Object.keys(reservations.value).length > 0
);

const fetchReservations = async () => {
  try {
    const formattedDate = date.value.toISOString();
    reservations.value = await getReservations(formattedDate);
  } catch (error) {
    console.error("Error fetching reservations:", error);
  }
};

const flattenedReservations = computed(() => {
  const result = [];
  for (const [time, timeslot] of Object.entries(reservations.value)) {
    for (const reservation of timeslot) {
      result.push({
        time,
        ...reservation,
      });
    }
  }
  return result;
});
</script>
