<template>
  <section class="wrapper">
    <h3>Dodaj rezerwację do stolika.</h3>
    <form @submit.prevent="handleSubmit">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText
          v-model="reservation.fullName"
          placeholder="Imię i nazwisko"
        />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-calendar"></i>
        </InputGroupAddon>
        <Calendar v-model="reservation.date" placeholder="Data" />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-clock"></i>
        </InputGroupAddon>
        <InputMask
          v-model="reservation.hour"
          mask="99:99"
          placeholder="Godzina"
        />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-users"></i>
        </InputGroupAddon>
        <InputText
          v-model="reservation.numberOfGuests"
          placeholder="Ilość osób"
        />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-map-marker"></i>
        </InputGroupAddon>
        <CascadeSelect
          v-model="reservation.table"
          :options="tables"
          optionLabel="name"
          optionGroupLabel="name"
          :optionGroupChildren="['tables']"
          placeholder="Wybierz stół"
        />
      </InputGroup>

      <Button label="Dodaj rezerwację" type="submit" />
    </form>
  </section>
</template>

<script setup>
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Button from "primevue/button";
import CascadeSelect from "primevue/cascadeselect";
import InputMask from "primevue/inputmask";

import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import addReservation from "@/services/reservationService";

const toast = useToast();
const reservation = ref({
  fullName: "",
  date: "",
  hour: "",
  numberOfGuests: "",
  table: null,
});

const tables = ref([
  {
    name: "Biblioteka",
    code: "BIB",
    tables: [
      {
        name: "B1",
        code: "B1",
      },
      {
        name: "B2",
        code: "B2",
      },
      {
        name: "B3",
        code: "B3",
      },
      {
        name: "B4",
        code: "B4",
      },
    ],
  },
  {
    name: "Wejście",
    code: "WEJ",
    tables: [
      {
        name: "Okno",
        code: "OKN",
      },
      {
        name: "Wejście",
        code: "WJS",
      },
      {
        name: "Schody",
        code: "SCH",
      },
      {
        name: "Piec",
        code: "PIC",
      },
    ],
  },
  {
    name: "Środek",
    code: "SRD",
    tables: [
      {
        name: "Rynna",
        code: "RYN",
      },
      {
        name: "WC",
        code: "WC",
      },
      {
        name: "Wrota",
        code: "WRT",
      },
      {
        name: "Szafa",
        code: "SZF",
      },
      {
        name: "Ogórki",
        code: "OGR",
      },
    ],
  },
  {
    name: "Ogródek",
    code: "OGD",
    tables: [
      {
        name: "O1",
        code: "O1",
      },
      {
        name: "O2",
        code: "O2",
      },
      {
        name: "Długi",
        code: "DLG",
      },
      {
        name: "Ława",
        code: "LAW",
      },
      {
        name: "Filar",
        code: "FIL",
      },
      {
        name: "Słup",
        code: "SLP",
      },
    ],
  },
]);

const handleSubmit = async () => {
  try {
    await addReservation(reservation.value);
    reservation.value = {};
    toast.add({
      severity: "success",
      summary: "Sukces!",
      detail: "Rezerwacja została dodana.",
      life: 3000,
    });
  } catch (error) {
    console.error("Error adding reservation:", error);
  }
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}
</style>
