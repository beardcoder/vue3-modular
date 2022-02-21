import { Ref, shallowRef } from 'vue'
import { getModules } from '../modules'
import { NavigationItem } from './define-module'

const { modules } = getModules()

const navigation: Ref<NavigationItem[]> = shallowRef([])

export function getNavigation(): {
  navigation: Ref<NavigationItem[]>
} {
  modules.value.forEach((registeredModule) => {
    registeredModule.navigation.forEach((item) => navigation.value.push(item))
  })

  return { navigation }
}
