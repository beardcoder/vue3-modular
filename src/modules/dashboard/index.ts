import { defineModule } from '../../utils/define-module'

export default defineModule({
  id: 'dashboard',
  routes: [
    {
      path: '',
      component: () => import('./pages/Dashboard.vue'),
    },
  ],
  navigation: [
    {
      to: '/dashboard',
      id: 'dashboard',
      label: 'Dashboard',
    },
  ],
})
