import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'
const history = createWebHistory()

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../../pages/Home.vue'),
  },
]

const router = createRouter({ history, routes })
export default router
