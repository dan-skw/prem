<template>
  <form @submit.prevent="handleSubmit" class="wrapper">
    <h1>Sign Up</h1>

    <div class="message">
      <Message
        severity="error"
        icon="pi pi-envelope"
        :closable="false"
        :sticky="sticky"
        :life="3000"
        v-if="emailInvalid"
      >
        Emaile nie pasują do siebie.
      </Message>
      <Message
        severity="error"
        icon="pi pi-lock"
        :closable="false"
        :sticky="sticky"
        :life="3000"
        v-if="passwordInvalid"
      >
        Hasła nie pasują do siebie.
      </Message>
    </div>
    <div class="input-area">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Imie" v-model="firstName" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-user"></i>
        </InputGroupAddon>
        <InputText placeholder="Nazwisko" v-model="lastName" />
      </InputGroup>
    </div>
    <div class="input-area">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </InputGroupAddon>
        <InputText type="email" placeholder="Email" v-model="email" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </InputGroupAddon>
        <InputText placeholder="Potwierdź email" v-model="confirmedEmail" />
      </InputGroup>
    </div>
    <div class="input-area">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-lock"></i>
        </InputGroupAddon>
        <InputText type="password" placeholder="Hasło" v-model="password" />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-lock"></i>
        </InputGroupAddon>
        <InputText
          type="password"
          placeholder="Potwierdź hasło"
          v-model="confirmedPassword"
        />
      </InputGroup>
    </div>
    <Button type="submit" label="Submit" />
    <p>
      If you already have an account
      <RouterLink to="/signin">Sign in</RouterLink>
    </p>
  </form>
</template>
<script setup>
import { ref } from "vue";
import router from "../../router";
import { useToast } from "primevue/usetoast";

import { createUser } from "../../firebase/auth/userAuth";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputGroup from "primevue/inputgroup";
import InputNumber from "primevue/inputnumber";
import InputGroupAddon from "primevue/inputgroupaddon";
import Message from "primevue/message";

const toast = useToast();
// const sticky = ref(false);

const show = () => {
  toast.add({
    severity: "info",
    summary: "Info",
    detail: "Message Content",
    life: 3000,
  });
};

const email = ref("");
const confirmedEmail = ref("");
const password = ref("");
const confirmedPassword = ref("");
const firstName = ref("");
const lastName = ref("");

const passwordInvalid = ref(false);
const emailInvalid = ref(false);

const handleSubmit = () => {
  if (password.value !== confirmedPassword.value) {
    passwordInvalid.value = true;
    return;
  }

  if (email.value !== confirmedEmail.value) {
    emailInvalid.value = true;
    return;
  }
  passwordInvalid.value = false;
  emailInvalid.value = false;

  const userData = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
  };
  createUser(userData);
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.input-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.message {
  display: absolute;
  top: 0;
  opacity: 0.5;
}
</style>
