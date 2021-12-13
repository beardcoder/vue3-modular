import { Router } from 'vue-router'
import router from '../router'
import menuService, { MenuServiceInterface } from './menuService'

type Module = {
  router: (router: Router) => void
  menu: (menuService: MenuServiceInterface) => void
}

const registerModule = (module: Module) => {
  if (module.router) {
    module.router(router)
  }

  if (module.menu) {
    module.menu(menuService)
  }
}

export const registerModules = (modules: Module[]) => {
  Object.values(modules).every((module) => registerModule(module))
}
