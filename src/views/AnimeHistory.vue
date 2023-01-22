<script setup lang="ts">
import AnimeViewedComponent from '@/components/AnimeViewedComponent.vue';
import LatestCardComponent from '@/components/LatestCardComponent.vue';
import { animesStore } from '@/stores/animeStore';
import type { AnimeWatched, LastEpisodes } from '@/types/Anime';
import type Anime from '@/types/Anime';
import { getLastViewed } from '@/utils/animehelper';
import { removeDuplicates } from '@/utils/removeDuplicates';
import { getAnimeList } from '@/utils/storage';
import { ref } from 'vue';

let animeChunks = ref<{
    animes: Anime;
    lastEpisodes: AnimeWatched;
}[]>();
const animeList = getAnimeList();
console.log(animeList.length);
    let animes = animesStore.all.filter((anime) => animeList.find((lastEpisode) => lastEpisode.id === anime.id && lastEpisode.lang === anime.lang));
    console.log(animes.length);
    animeChunks.value = animes.map((anime) => {
        return {
            animes: anime,
            lastEpisodes: animeList.find((lastEpisode) => lastEpisode.id === anime.id) as AnimeWatched
        };
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
                <AnimeViewedComponent :animeReal="anime.animes" :anime="anime.lastEpisodes"/>
            </div>
        </div>
    </section>
</template>