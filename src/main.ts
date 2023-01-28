import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
import router from './router'

import './assets/main.css'
import '../node_modules/plyr/dist/plyr.css'

const app = createApp(App)

app.use(router)
app.use(VueLazyLoad)

app.mount('#app')
