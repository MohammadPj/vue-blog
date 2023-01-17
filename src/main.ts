import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const app = createApp(App);

app.use(VueQueryPlugin);
app.use(router);
app.use(createPinia());
app.use(vuetify);

app.mount("#app");
