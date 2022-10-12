import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElContainer from '@components/container'
import ElButton from '@components/button'

// global config
import elementConfig from '@src/config/element'

const app = createApp(App)

// config
app.config.globalProperties.$AILEMENT = elementConfig

app.use(ElContainer).use(ElButton).mount('#app')
