import { createApp } from 'vue';

import router from './router';
import App from './App.vue';

import * as api from './api';

const app = createApp(App);

app.config.globalProperties.$api = api;

app.use(router);
app.mount('#app');
