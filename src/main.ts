/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import VueRouter from './router/index';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(VueRouter);

app.mount('#app');
