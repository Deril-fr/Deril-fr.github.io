import { reactive, watch } from 'vue';
import type AnimeWatched from '../types/AnimeWatched';

export const watchListStore: AnimeWatched[] = reactive(JSON.parse(localStorage.getItem('animeList') || '[]') as AnimeWatched[]);

watch(watchListStore, () => {
    localStorage.setItem('animeList', JSON.stringify(watchListStore));
});
