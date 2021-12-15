import type { RouteLocationRaw } from 'vue-router'

export interface Navigation {
  to: RouteLocationRaw
  id: string
  icon?: string
  name?: string
  label?: string
  position?: number
  parent?: string
}

const navigation: Map<string, Navigation> = new Map()

function getNavigation() {
  return navigation
}

function addNavigation(navigationArray: Navigation[]) {
  navigationArray.forEach((item) => navigation.set(item.to.toString(), item))
}

export { getNavigation, addNavigation }
