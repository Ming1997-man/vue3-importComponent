import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import importComponent from "./importcomponents";

const app = createApp(App);
importComponent(app);
app.use(store).use(router).mount("#app");
