import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from './plugins/router'
import { loadModules, register as registerModules } from './modules/register'

init()

async function init() {
  const app = createApp(App)
  app.use(router)

  await Promise.all([loadModules()])

  registerModules()

  app.mount('#app')
}
