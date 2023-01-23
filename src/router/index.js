import { createRouter, createWebHistory } from 'vue-router'
import Home from '../modules/home/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/principal',
    name: 'primary',
    component: () => import('../modules/home/PagePrincipal.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router