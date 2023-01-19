import '@mdi/font/css/materialdesignicons.css'
import '@vime/core/themes/default.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const Vuetify = createVuetify({
  theme: {
    themes: {
      dark: {
        colors: {
          primary: '#8F1313',
          secondary: '#5CBBF6',
        },
      },
    },
      defaultTheme: 'dark'  
  },
})
const app = createApp(App)

app.use(router)
app.use(Vuetify)

app.mount('#app')
