import { createApp } from 'vue';
import App from './App.vue';

import api from './plugins/api';

const app = createApp(App);
app.mount('#app');

app.use(api);
