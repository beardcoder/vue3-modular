import { shallowRef, Ref } from 'vue'
import { ModuleConfig } from '../utils/define-module'

const modules: Ref<ModuleConfig[]> = shallowRef([])

export function getModules(): {
  modules: Ref<ModuleConfig[]>
} {
  return { modules }
}
