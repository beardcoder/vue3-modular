import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw = {
  path: '/dashboard',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      component: () => import('./pages/Dashboard.vue'),
    },
  ],
}
