import { shallowRef, Ref } from 'vue'
import { ModuleConfig, NavigationItem } from '../utils/define-module'

const modules: Ref<ModuleConfig[]> = shallowRef([])
const navigation: Ref<NavigationItem[]> = shallowRef([])

/**
 * It returns a module config array
 * @returns A function that returns a ref to an array of module configs.
 */
export function getModules(): {
  modules: Ref<ModuleConfig[]>
} {
  return { modules }
}

/**
 * It iterates over all registered modules and adds their navigation items to the navigation array
 * @returns The navigation array is being returned.
 */
export function getNavigation(): {
  navigation: Ref<NavigationItem[]>
} {
  return { navigation }
}
