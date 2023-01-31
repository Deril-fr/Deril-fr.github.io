import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
import router from './router'

import './assets/main.css'
import '../node_modules/plyr/dist/plyr.css'
import { getAnimeList } from './utils/storage'

const app = createApp(App)
document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'hidden') {
        const animeList = await getAnimeList();
    }
})
app.use(router)
app.use(VueLazyLoad)

app.mount('#app')
