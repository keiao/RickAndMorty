import { createRouter, createWebHistory } from 'vue-router'
import Home from '../modules/home/index.vue'
import principal from '../modules/character/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'principal',
    component: principal,
  },
  {
    path: '/principal',
    name: 'primary',
    component: () => import('../modules/character/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router