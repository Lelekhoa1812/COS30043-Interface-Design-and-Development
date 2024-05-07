import { createRouter, createWebHashHistory } from 'vue-router';
import HomeComp from '../components/HomeComp.vue';
import TasksComp from '../components/TasksComp.vue';
import UnitsComp from '../components/UnitsComp.vue';

const routes = [
  { path: '/', component: HomeComp },
  { path: '/tasks', component: TasksComp },
  { path: '/units', component: UnitsComp }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
