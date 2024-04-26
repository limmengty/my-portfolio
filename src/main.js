import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueScrollTo from 'vue-scrollto'
import { createPinia } from 'pinia' 
const app = createApp(App);
const pinia =  createPinia();

AOS.init();
app.use(router);
app.use(VueScrollTo);
app.use(pinia)
app.mount('#app');
