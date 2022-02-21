import { RouteLocationRaw, RouteRecordRaw } from 'vue-router'

export interface NavigationItem {
  to: RouteLocationRaw
  id: string
  label: string
}

export interface ModuleConfig {
  id: string
  color?: string

  routes: RouteRecordRaw[]
  navigation: NavigationItem[]
}

export function defineModule(config: ModuleConfig): ModuleConfig {
  return config
}
