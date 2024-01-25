<template>
  <form @submit.prevent="handleSubmit" class="wrapper">
    <h1>Sign in to your account</h1>

    <div class="input-area">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-envelope"></i>
        </InputGroupAddon>
        <InputText type="email" placeholder="Email" v-model="email" />
      </InputGroup>
    </div>
    <div class="input-area">
      <InputGroup>
        <InputGroupAddon>
          <i class="pi pi-lock"></i>
        </InputGroupAddon>
        <InputText type="password" placeholder="Hasło" v-model="password" />
      </InputGroup>
    </div>
    <Button type="submit" label="Sign in" />
    <p>
      If you do not have an account
      <RouterLink to="/signup">Sign Up</RouterLink>
    </p>
  </form>
</template>
<script setup>
import { ref } from "vue";
import router from "../../router";

import { signUserIn } from "../../firebase/auth/userAuth";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputGroup from "primevue/inputgroup";
import InputGroupAddon from "primevue/inputgroupaddon";

const email = ref("");
const password = ref("");

const handleSubmit = async () => {
  await signUserIn({
    email: email.value,
    password: password.value,
  });
  router.push("/protected");
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
