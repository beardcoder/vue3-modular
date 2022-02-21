import { defineModule } from '../../utils/define-module'

export default defineModule({
  id: 'user',
  routes: [
    {
      path: '',
      component: () => import('./pages/User.vue'),
    },
  ],
  navigation: [
    {
      to: '/user',
      id: 'user',
      label: 'User',
    },
  ],
})
