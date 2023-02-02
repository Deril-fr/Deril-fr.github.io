import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue'),
        },
        {
            path: '/latest',
            name: 'latest',
            component: () => import('../views/LastReleasedView.vue'),
        },
        {
            path: '/anime/:lang/:id',
            name: 'anime',
            component: () => import('../views/AnimeView.vue'),
        },
        {
            path: '/anime/:lang/:id/episode/:episode',
            name: 'episode',
            component: () => import('../views/EpisodeView.vue'),
        },
        {
            path: '/history',
            name: 'history',
            component: () => import('../views/AnimeHistory.vue'),
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('../views/SearchView.vue'),
        },
    ],
});

export default router;
