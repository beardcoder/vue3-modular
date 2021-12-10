import { Router } from 'vue-router'
import router from '../router'

type Module = {
  router: (router: Router) => void
}

const registerModule = (module: Module) => {
  if (module.router) {
    module.router(router)
  }
}

export const registerModules = (modules: Module[]) => {
  Object.values(modules).every((module) => registerModule(module))
}
