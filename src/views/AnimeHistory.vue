<script setup lang="ts">
import AnimeViewedComponent from '@/components/AnimeViewedComponent.vue';
import { animesStore } from '@/stores/animeStore';
import type { AnimeWatched } from '@/types/Anime';
import type Anime from '@/types/Anime';
import { getLastViewed, convertEpisodeToNumber} from '@/utils/animehelper';
import { getAnimeList } from '@/utils/storage';
import { ref } from 'vue';

let animeChunks = ref<{
    animes: Anime;
    lastEpisodes: AnimeWatched;
    asNew: boolean;
}[]>();
const animeList = getAnimeList();
getLastViewed().then((lastEpisodes) => {
    let animes = animesStore.all.filter((anime) => animeList.find((lastEpisode) => lastEpisode.id === anime.id && lastEpisode.lang === anime.lang));
    animeChunks.value = animes.map((anime) => {
        let lastStreamed = lastEpisodes.find((lastEpisode) => lastEpisode.anime_url === anime.url);
        return {
            animes: anime,
            lastEpisodes: animeList.find((lastEpisode) => lastEpisode.id === anime.id) as AnimeWatched,
            asNew: lastStreamed ? (animeList.find((lastEpisode) => lastEpisode.id === anime.id) as AnimeWatched).episode < convertEpisodeToNumber(lastStreamed.episode)  : false,
        };
    });
});
</script>

<template>
    <section v-if="animeChunks" class="px-10">
        <div class="flex justify-between py-5">
            <div @click="$router.push('/')" class="cursor-pointer">
                <h1 class="text-3xl font-bold">Acceuil</h1>
            </div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-10">
            <div v-for="anime in animeChunks" :key="anime.lastEpisodes.id + (anime.lastEpisodes.lang as string)">
                <AnimeViewedComponent :animeReal="anime.animes" :anime="anime.lastEpisodes" :asNew="anime.asNew" />
            </div>
        </div>
    </section>
</template>