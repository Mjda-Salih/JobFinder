import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/src/jquery.js";
import "popper.js/dist/popper.min.js";
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";

store.dispatch("fetchUser").then(() => {
  createApp(App).use(store).use(Antd).use(router).mount("#app");
});

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase"; // Adjust the path if necessary

// Log Firebase configuration for debugging
console.log("Firebase Config:", firebaseConfig);

// Initialize Firebase App
initializeApp(firebaseConfig);
