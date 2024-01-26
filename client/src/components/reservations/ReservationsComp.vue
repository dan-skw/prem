<template>
  <section class="wrapper">
    <h4>...lub znajdź zapisane.</h4>
    <Calendar v-model="date" placeholder="Data rezerwacji" />
    <Button label="Szukaj" @click="fetchReservations" />

    <ScrollPanel v-if="reservationsFetched">
      <DataTable :value="flattenedReservations">
        <Column field="time" header="Godzina"></Column>
        <Column field="fullName" header="Dane"></Column>
        <Column field="numberOfGuests" header="Liczba gości"></Column>
        <Column field="table.name" header="Stolik"></Column>
      </DataTable>
    </ScrollPanel>
    <Loader v-else />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { getReservations } from "@/services/reservationService";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ScrollPanel from "primevue/scrollpanel";
import Loader from "../Loader.vue";

const reservations = ref({});

const date = ref("");
const reservationsFetched = ref(true);

const fetchReservations = async () => {
  reservationsFetched.value = false;
  try {
    const formattedDate = date.value.toISOString();
    reservations.value = await getReservations(formattedDate);
    reservationsFetched.value = true;
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
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
