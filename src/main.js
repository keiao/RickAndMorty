import { createApp } from 'vue'
import './style.css'
import App from './Home.vue'
import router from './router/router'

createApp(App)
.use(router)
.mount('#app')

