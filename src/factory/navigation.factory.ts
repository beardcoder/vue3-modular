import { App } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface NavigationItem {
  to: RouteLocationRaw
  id: string
  label: string
  position: number
}

export interface Navigation {
  items: NavigationItem[]
  addNavigation: (items: NavigationItem[]) => void
  install: (app: App) => void
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $navigation: Navigation
  }
}

function createNavigation(items: NavigationItem[] = []) {
  const navigation: Navigation = {
    items,
    addNavigation(items) {
      items.forEach((item) => this.items.push(item))
    },
    install(app: App) {
      app.config.globalProperties.$navigation = this
      app.provide('navigation', this)
    },
  }
  return navigation
}

export { createNavigation }
