import { ModuleDefinition, registerModule } from '../factory/mdule.factory'

export const registerModules = (modules: {
  [name: string]: ModuleDefinition
}) => {
  Object.keys(modules).forEach((moduleName) => {
    const module = modules[moduleName]
    registerModule(moduleName, module)
  })
}
