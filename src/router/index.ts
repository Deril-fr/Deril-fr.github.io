import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimeView from '../views/AnimeView.vue'
import EpisodeView from '../views/EpisodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/anime/:id',
      name: 'anime',
      component: AnimeView
    },
    {
      path: '/anime/:id/episode/:episode',
      name: 'episode',
      component: EpisodeView
    }
  ]
})

export default router
