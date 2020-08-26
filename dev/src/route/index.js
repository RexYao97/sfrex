import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/home/route';
import vue3API from '../views/vue3API/route';

const routerHistory = createWebHistory();
console.log([...Home, ...vue3API]);
const router = createRouter({
  history: routerHistory,
  routes: [...Home, ...vue3API],
});

export default router;
