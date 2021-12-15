import type { RouteRecordRaw } from 'vue-router'
import router from '../router'
import { Navigation, addNavigation } from './navigation.factory'

export interface ModuleDefinition {
  navigation?: Navigation[]
  routes?: RouteRecordRaw
}

/**
 * Registry for modules
 * @type {Map<String, Object>}
 */
const modules: Map<string, ModuleDefinition> = new Map()

/**
 * Returns the registry of all modules mounted in the application.
 */
function getModuleRegistry(): Map<string, ModuleDefinition> {
  return modules
}

function registerModule(name: string, moduleDefinition: ModuleDefinition) {
  if (moduleDefinition.navigation) {
    addNavigation(moduleDefinition.navigation)
  }

  if (moduleDefinition.routes) {
    router.addRoute(moduleDefinition.routes)
  }

  modules.set(name, moduleDefinition)
}

export { getModuleRegistry, registerModule }
