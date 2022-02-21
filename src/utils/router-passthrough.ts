import { h, Component } from 'vue'
import { RouterView } from 'vue-router'

const routerPassComponent: Component = () => h(RouterView)

routerPassComponent.displayName = 'router-passthrough'
export default routerPassComponent
