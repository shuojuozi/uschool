import { createRouter, createWebHashHistory } from 'vue-router';
import Main from '@/views/UschoolMain.vue'
import Me from '@/views/UschoolMe.vue'
import Resources from '@/views/UschoolResources.vue'
import Forum from '@/views/UschoolForum.vue'
import Assess from '@/views/UschoolAssess.vue'
import Assess2 from '@/views/UschoolAssess2.vue'
import Wrongs from '@/views/UschoolWrongs.vue'
import Analyse from '@/views/UschoolAnalyse.vue'
import Quiz from '@/views/UschoolQuiz.vue'

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
  },
  {
    path: '/assess',
    component: Assess
  },
  {
    path: '/assess2',
    component: Assess2
  },
  {
    path: '/wrongs',
    component: Wrongs
  },
  {
    path: '/analyse',
    component: Analyse
  },
  {
    path: '/quiz',
    component: Quiz
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;