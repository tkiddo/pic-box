import { createApp } from 'vue';
import { create, NButton, NForm, NFormItem, NSpace, NLayout, NInput } from 'naive-ui';

import router from './router';
import App from './App.vue';

import * as api from './api';

const app = createApp(App);

app.config.globalProperties.$api = api;

const naive = create({
  components: [NButton, NForm, NFormItem, NSpace, NLayout, NInput]
});
app.use(naive);

app.use(router);
app.mount('#app');
