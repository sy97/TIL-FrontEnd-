import { createApp } from 'vue'
import App from './step5/App.vue'

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

const app = createApp(App)
app.component("header-component", HeaderComponent) 
app.component("footer-component", FooterComponent)
app.mount("#app") 
