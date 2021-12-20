import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './plugins/router'
import navigation from './plugins/navigation'
import moduleLoader from './plugins/modules'

const app = createApp(App)
app.use(router)
app.use(navigation)
app.use(moduleLoader)
app.mount('#app')
