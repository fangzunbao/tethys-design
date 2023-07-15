import { createApp } from 'vue'
import Component from '@/packages/tethys-design-ui/src/index'
import App from './App.vue'
import 'virtual:svg-icons-register'
import '@/packages/tethys-design-ui/src/styles/index.scss'

const app = createApp(App)
app.use(Component)
app.mount('#app')
