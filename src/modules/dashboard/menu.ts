import { MenuServiceInterface } from '../../services/menuService'

const menu: MenuItem[] = [
  {
    to: '/dashboard',
    id: 'dashboard',
    label: 'Dashboard',
    position: 5,
  },
]

export default (menuService: MenuServiceInterface) => {
  menuService.addMenuItems(menu)
}
