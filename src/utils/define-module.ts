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

/**
 * "Define a module."
 *
 * The function takes a single argument, which is a configuration object
 * @param {ModuleConfig} config - The configuration object for the module.
 * @returns The config object
 */
export function defineModule(config: ModuleConfig): ModuleConfig {
  return config
}
