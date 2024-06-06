import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '@/views/UschoolMain.vue'
import Me from '@/views/UschoolMe.vue'
import Resources from '@/views/UschoolResources.vue'
import Forum from '@/views/UschoolForum.vue'

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
  },
  {
    path: '/forum',
    component: Forum
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;