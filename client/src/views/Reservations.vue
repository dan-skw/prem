<template>
  <section class="wrapper">
    <AddReservation />
    <ReservationsComp />
  </section>
</template>

<script setup>
import AddReservation from "@/components/reservations/AddReservation.vue";
import ReservationsComp from "@/components/reservations/ReservationsComp.vue";
</script>
<style scoped>
.wrapper {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h3 {
  margin-top: 0;
}

@media (min-width: 768px) {
  form {
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (min-width: 1024px) {
  form {
    max-width: 600px;
  }
}
</style>
``
