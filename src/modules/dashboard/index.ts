import { routes } from './routes'
import { navigationItems } from './navigation'
import { registerModule } from '../../factory/mdule.factory'

export default registerModule(({ router, navigation }) => {
  router.addRoute(routes)
  navigation.addNavigation(navigationItems)
})
