import { router } from '../plugins/router'
import { ModuleConfig } from '../utils/define-module'
import routerPassComponent from '../utils/router-passthrough'
import { getModules, getNavigation } from './index'

const { modules } = getModules()
const { navigation } = getNavigation()

let queuedModules: ModuleConfig[] = []

export async function loadModules(): Promise<void> {
  const moduleModules = import.meta.globEager('./*/index.ts')
  const modules: ModuleConfig[] = Object.values(moduleModules).map(
    (module) => module.default
  )

  queuedModules = modules
}

export async function register(): Promise<void> {
  const registeredModules = []

  for (const mod of queuedModules) {
    registeredModules.push(mod)
  }

  for (const module of registeredModules) {
    router.addRoute({
      name: module.id,
      path: `/${module.id}`,
      component: routerPassComponent,
      children: module.routes,
    })

    module.navigation.forEach((item) => {
      navigation.value.push(item)
    })
  }

  modules.value = registeredModules
}

export function unregister(): void {
  for (const module of modules.value) {
    router.removeRoute(module.id)
  }

  modules.value = []
}
