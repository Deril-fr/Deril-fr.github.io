import { reactive, watch } from 'vue';
import type { AnimeWatched } from '../types/Anime';

export const watchListStore: AnimeWatched[] = reactive(JSON.parse(localStorage.getItem('jw_watchlist') || '[]') as AnimeWatched[]);

watch(watchListStore, () => {
    console.log(watchListStore);
    localStorage.setItem('jw_watchlist', JSON.stringify(watchListStore));
});
