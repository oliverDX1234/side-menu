import { createApp } from "vue";
import App from "./App.vue";

import "./assets/styles/app.css";

import Unicon from "vue-unicons";
import { uniAngleDown, uniAngleUp, uniBars } from "vue-unicons/dist/icons";

Unicon.add([uniAngleDown, uniAngleUp, uniBars]);

createApp(App).use(Unicon).mount("#app");
