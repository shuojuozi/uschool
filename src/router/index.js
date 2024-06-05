import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '@/views/UschoolMain.vue'

const routes = [
  {
    path: '/',
    component: Main
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;