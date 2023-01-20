<script lang="ts">
import { animesStore } from '@/stores/animeStore';
import type Anime from '@/types/Anime';
import type { EpisodeReal } from '@/types/Anime';
import { getSynopsisAndEpisodes } from '@/utils/animehelper';

export default {
    data() {
        return {
            animeId: this.$router.currentRoute.value.params.id,
            language: this.$router.currentRoute.value.params.lang as string,

            anime: undefined as Anime | undefined,
            datas: undefined as { synopsis: string; coverURL: string; episodes: EpisodeReal[] } | undefined,
        };
    },

    async beforeMount() {
        if (this.language != 'vf' && this.language != 'vostfr') return this.$router.push('/');

        this.anime = animesStore[this.language].find((a) => a.id.toString() === this.animeId);
        this.datas = await getSynopsisAndEpisodes(this.anime?.url as string);
    },
};
</script>

<template>
    <div v-if="anime && datas?.coverURL" class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="flex flex-col">
            <img class="w-full rounded object-cover aspect-[13/9]" :src="datas?.coverURL" alt="" />
            <div class="mt-5">
                <h5 class="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">{{ anime.title }}</h5>
                <h6>{{ anime.start_date_year }} - {{ anime.nb_eps }}</h6>
            </div>
        </div>

        <div class="flex flex-col">
            <h1 class="text-2xl font-bold">Synopsis</h1>
            <p class="mt-5">{{ datas?.synopsis }}</p>
            <div class="mt-5">
                <h1 class="text-2xl font-bold">Episodes</h1>
                <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div v-for="episode in datas?.episodes" :key="episode.episode">
                        <div class="w-full" @click="anime && $router.push('/anime/' + language + '/' + anime.id + '/episode/' + episode.episode)">
                            <img class="w-full rounded object-cover aspect-[13/9]" :src="episode.url_image" alt="" />
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
