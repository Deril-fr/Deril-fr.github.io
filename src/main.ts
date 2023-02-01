import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
import router from './router'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

import './assets/main.css'
import { getAnimeList } from './utils/storage'

const app = createApp(App)
document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'hidden') {
        const animeList = await getAnimeList();
    }
})

app.use(router)
app.use(VueLazyLoad)
app.use(VuePlyr)

app.mount('#app')
