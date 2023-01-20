import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/Principal',
    component: () => import('../modules/pages/PagePrincipal.vue')
  },
  {
    path: '/:patMatch(.*)*',
    component: () => import('../modules/pages/NoPageFound.vue')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router