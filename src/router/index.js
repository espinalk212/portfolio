import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import SkillsView from '../pages/SkillsView.vue'
import ProjectsView from '../pages/ProjectsView.vue'
import ResumeView from '../pages/ResumeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/skills',
    name: 'SkillsView',
    component: SkillsView,
  },
  {
    path: '/projects',
    name: 'ProjectsView',
    component: ProjectsView,
  },
  {
    path: '/resume',
    name: 'ResumeView',
    component: ResumeView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
