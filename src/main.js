import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta';

import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(Meta);

app.mount('#app')
