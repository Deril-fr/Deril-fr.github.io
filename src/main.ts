import { createApp } from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
import router from './router'

import './assets/main.css'
import '../node_modules/plyr/dist/plyr.css'
import { getAnimeList } from './utils/storage'
import { enableIndexedDbPersistence } from 'firebase/firestore'
import { db } from './utils/database'

const app = createApp(App)
document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'hidden') {
        const animeList = await getAnimeList();
    }
})

enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

app.use(router)
app.use(VueLazyLoad)

app.mount('#app')
