<script setup lang="ts">
import { ref } from 'vue';
import { animesStore, languageStore } from '@/stores/animeStore';
import type Anime from '@/types/Anime';
import type { EpisodeReal } from '@/types/Anime';
import router from '@/router';
import { getSynopsisAndEpisodes } from '@/utils/animehelper';
// get id from url params
const id = router.currentRoute.value.params.id;
const anime = ref<Anime | undefined>(undefined);
const datas = ref<{
    synopsis: string;
    episodes: EpisodeReal[];
    coverURL: string
}>
    ({
        synopsis: "",
        episodes: [],
        coverURL: ""
    });
// get anime from store
if (typeof id == "string") {
    let animeFind = animesStore[languageStore.language].find(anime => anime.id == parseInt(id));
    if (animeFind) {
        anime.value = animeFind;
        getSynopsisAndEpisodes(animeFind.url).then(data => {
            datas.value = data;
        });
    } else {
        router.push("/");
    }
}
</script>
<template>
    <div v-if="anime" class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="flex flex-col">
            <img class="w-full rounded object-cover aspect-[13/9]" :src="datas.coverURL" alt=""/>
            <div class="mt-5">
                <h5 class="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">{{ anime.title }}</h5>
                <h6>{{ anime.start_date_year }} - {{ anime.nb_eps }}</h6>
            </div>
        </div>
        <div class="flex flex-col">
            <h1 class="text-2xl font-bold">Synopsis</h1>
            <p class="mt-5">{{ datas.synopsis }}</p>
            <div class="mt-5">
                <h1 class="text-2xl font-bold">Episodes</h1>
                <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div v-for="episode in datas.episodes" :key="episode.episode">
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