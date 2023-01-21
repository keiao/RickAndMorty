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
    component: () => import('../modules/pages/PagePrincipal.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../modules/pages/NoPageFound.vue')

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router