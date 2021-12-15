import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { registerModules } from './services/register-module.service'
import router from './router'
import dashboard from './modules/dashboard'

registerModules({
  dashboard,
})

createApp(App).use(router).mount('#app')
