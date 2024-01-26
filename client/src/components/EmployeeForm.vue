<template>
  <form @submit.prevent="handleSubmit">
    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-user"></i>
      </InputGroupAddon>
      <InputText v-model="employeeData.name" placeholder="Imię" />
    </InputGroup>
    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-user"></i>
      </InputGroupAddon>
      <InputText v-model="employeeData.surname" placeholder="Nazwisko" />
    </InputGroup>

    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-calendar"></i>
      </InputGroupAddon>
      <Calendar v-model="employeeData.birthdate" placeholder="Data urodzenia" />
    </InputGroup>
    <InputGroup>
      <SelectButton
        v-model="employeeData.sex"
        :options="sexOptions"
        aria-labelledby="basic"
      />
    </InputGroup>
    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-dollar"></i>
      </InputGroupAddon>
      <InputMask
        v-model="employeeData.hourlyRate"
        mask="99.99"
        placeholder="Stawka godzinowa"
      />
    </InputGroup>

    <InputGroup>
      <InputGroupAddon>
        <i class="pi pi-align-justify"></i>
      </InputGroupAddon>
      <CascadeSelect
        v-model="employeeData.position"
        :options="positions"
        optionLabel="name"
        optionGroupLabel="name"
        :optionGroupChildren="['subpositions']"
        placeholder="Wybierz stanowisko"
      />
    </InputGroup>
    <Button :label="buttonText" type="submit" />
  </form>
</template>

<script setup>
import { ref, watch } from "vue";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import SelectButton from "primevue/selectbutton";
import InputMask from "primevue/inputmask";
import CascadeSelect from "primevue/cascadeselect";
import Button from "primevue/button";

const props = defineProps({
  initialEmployeeData: Object,
  buttonText: String,
});
const emits = defineEmits(["submit"]);

const employeeData = ref(
  props.initialEmployeeData || {
    name: "",
    surname: "",
    birthdate: "",
    sex: "",
    hourlyRate: "",
    position: null,
  }
);

watch(
  () => props.initialEmployeeData,
  (newVal) => {
    if (newVal) {
      employeeData.value = { ...newVal };
    }
  }
);

const handleSubmit = () => {
  emits("submit", employeeData.value);
};

const positions = ref([
  {
    name: "Kelner",
    code: "KEL",
    subpositions: [
      {
        name: "Kierownik Sali",
        code: "KIS",
      },
      {
        name: "Kelner",
        code: "KELN",
      },
    ],
  },
  {
    name: "Kucharz",
    code: "KUCH",
    subpositions: [
      {
        name: "Szef Kuchni",
        code: "SKUCH",
      },
      {
        name: "Kucharz",
        code: "KUCH",
      },
      {
        name: "Pomoc Kuchenna",
        code: "PK",
      },
    ],
  },
]);

const sexOptions = ref(["Mężczyzna", "Kobieta"]);
</script>
