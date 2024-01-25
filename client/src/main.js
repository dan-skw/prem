import "./assets/main.css";
import "primevue/resources/themes/aura-dark-green/theme.css";
import { createApp } from "vue";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(PrimeVue);
app.use(ToastService);
app.use(router);

app.mount("#app");
