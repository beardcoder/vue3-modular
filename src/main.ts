import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { registerModules } from './helper/register-modules'
import router from './router'
import modules from './modules'

registerModules(modules)

createApp(App).use(router).mount('#app')
