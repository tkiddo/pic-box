import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '../pages/login';
import Index from '../pages/index';
import Home from '../pages/home';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'homepage'
    }
  },
  {
    path: '/index',
    component: Index,
    children: [
      {
        name: 'homepage',
        path: 'home',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes // `routes: routes` 的缩写
});

export default router;
