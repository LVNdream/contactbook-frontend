import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';
// them thu vien bootstrap va fontawesome
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


//them thuvien cua router
import router from "./router";
//createApp(App).mount('#app');

createApp(App)
.use(router).mount("#app");
