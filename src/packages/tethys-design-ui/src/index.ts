import ThButton from './components/th-button/src/index'
import ThIcon from './components/th-icon/src/index'
import type { App, Component } from 'vue'
const components: { [name: string]: Component } = { ThButton, ThIcon }
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
