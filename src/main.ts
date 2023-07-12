import { createApp } from 'vue'
import Component from './components/index'
import App from './App.vue'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'

const app = createApp(App)
app.use(Component)
app.mount('#app')
