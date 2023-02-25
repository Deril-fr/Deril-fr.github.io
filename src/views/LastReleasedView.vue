<script setup lang="ts">
import LatestCardComponent from '@/components/LatestCardComponent.vue';
import { animesStore } from '@/stores/animeStore';
import type LastEpisodes from '@/types/LastEpisodes';
import type Anime from '@/types/Anime';
import { getLastViewed } from '@/utils/animehelper';
import { ref } from 'vue';
import NavBarComponentVue from '@/components/NavBarComponent.vue';

let animeChunks = ref<
    {
        animes: Anime;
        lastEpisodes: LastEpisodes;
    }[]
>();
getLastViewed().then((lastEpisodes) => {
    let animes = animesStore.all.filter((anime) => lastEpisodes.find((lastEpisode) => lastEpisode.anime_url === anime.url));
    animeChunks.value = animes
        .map((anime) => {
            return {
                animes: anime,
                lastEpisodes: lastEpisodes.find((lastEpisode) => lastEpisode.anime_url === anime.url) as LastEpisodes,
            };
        })
        .sort((a, b) => {
            return b.lastEpisodes.timestamp - a.lastEpisodes.timestamp;
        });
});
</script>

<template>
    <NavBarComponentVue />
    <br/>
    <br/>
    <section class="px-20 py-10">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-10">
            <div v-for="anime in animeChunks" :key="anime.animes.id + (anime.animes.lang as string)">
                <LatestCardComponent :animeReal="anime.animes" :anime="anime.lastEpisodes" />
            </div>
        </div>
    </section>
</template>
