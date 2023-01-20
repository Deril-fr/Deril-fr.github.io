<script setup lang="ts">
import { ref, onUpdated, onBeforeMount } from 'vue';
import { animesStore } from '@/stores/animeStore';
import type Anime from '@/types/Anime';
import router from '@/router';
import { languageStore } from '@/stores/languageStore';
import type { EpisodeReal } from '@/types/Anime';
import { getSynopsisAndEpisodes } from '@/utils/animehelper';

// get id from url params
const id = router.currentRoute.value.params.id;

const anime = ref<Anime | undefined>(undefined);

let synopsis = ref<string | undefined>(undefined);
let cover = ref<string | undefined>(undefined); 
let episodes = ref<EpisodeReal[] | undefined>(undefined); 

onBeforeMount(async () => {
    anime.value = animesStore[languageStore.language].find(function (a) {
        return a.id.toString() === id;
    });

    let informations = await getSynopsisAndEpisodes(anime.value?.url as string);

    synopsis.value = informations.synopsis;
    cover.value = informations.coverURL;
    episodes.value = informations.episodes;
})

</script>

<template>
    <div v-if="anime && cover" class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div class="flex flex-col">
            <img class="w-full rounded object-cover aspect-[13/9]" :src="cover" alt=""/>
            <div class="mt-5">
                <h5 class="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">{{ anime.title }}</h5>
                <h6>{{ anime.start_date_year }} - {{ anime.nb_eps }}</h6>
            </div>
        </div>

        <div class="flex flex-col">
            <h1 class="text-2xl font-bold">Synopsis</h1>
            <p class="mt-5">{{ synopsis }}</p>
            <div class="mt-5">
                <h1 class="text-2xl font-bold">Episodes</h1>
                <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div v-for="episode in episodes" :key="episode.episode">
                            <div class="w-full" @click="anime && router.push('/anime/'+anime.id+'/episode/'+episode.episode)">
                                <img class="w-full rounded object-cover aspect-[13/9]" :src="episode.url_image" alt=""/>
                                <div class="mt-5 grid">
                                    <h5 class="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">{{ episode.title }}</h5>
                                    <h6>Ep. {{ episode.episode }}</h6>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>