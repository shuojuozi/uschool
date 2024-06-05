import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '@/views/UschoolMain.vue'
import Me from '@/views/UschoolMe.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/me',
    component: Me
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;