import { Router, RouteRecordRaw } from 'vue-router'

const Module = () => import('./Module.vue')
const Dashboard = () => import('./pages/Dashboard.vue')

const moduleRoute: RouteRecordRaw = {
  path: '/dashboard',
  component: Module,
  children: [
    {
      name: 'dashboard',
      path: '/',
      component: Dashboard,
    },
  ],
}

export default (router: Router) => {
  router.addRoute(moduleRoute)

  console.log(router.getRoutes())
}
