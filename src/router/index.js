import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '@/views/UschoolMain.vue'
import Me from '@/views/UschoolMe.vue'
import Resources from '@/views/UschoolResources.vue'

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/me',
    component: Me
  },
  {
    path: '/resources',
    component: Resources
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;