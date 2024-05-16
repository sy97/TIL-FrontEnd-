import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes/index"

createApp(App)
.use(router) //router를 쓰겠다고 등록해주기.
.mount('#app')
