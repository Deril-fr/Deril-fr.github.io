import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      component: import('../views/AnimeView.vue')
    },
    {
      path: '/anime/:id/episode/:episode',
      name: 'episode',
      component: import('../views/EpisodeView.vue')
    }
  ]
})

export default router
