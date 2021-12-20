import { App } from 'vue'
import type { Router } from 'vue-router'
import router from '../plugins/router'
import { Navigation } from './navigation.factory'
import navigation from '../plugins/navigation'

export interface ModuleContext {
  app: App
  router: Router
  navigation: Navigation
}

export interface Module<
  Injections extends Record<string, any> = Record<string, any>
> {
  (context: ModuleContext):
    | Promise<void>
    | Promise<{ provide?: Injections }>
    | void
    | { provide?: Injections }
}

function registerModule(module: Module) {
  return module
}

function createModuleLoader(modules: Module[] = []) {
  async function applyModule(app: App, module: Module) {
    if (typeof module !== 'function') {
      return
    }

    const { provide } = (await module({ app, router, navigation })) || {}
    if (provide && typeof provide === 'object') {
      for (const key in provide) {
        app.provide(key, provide[key])
      }
    }
  }
  return {
    modules,
    async install(app: App) {
      for (const module of modules) {
        await applyModule(app, module)
      }
    },
  }
}

export { createModuleLoader, registerModule }
