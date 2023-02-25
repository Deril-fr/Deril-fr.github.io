<script lang="ts">
import { animesStore } from '@/stores/animeStore';
import type Anime from '@/types/Anime';
import type EpisodeReal from '@/types/EpisodeReal';
import { getSynopsisAndEpisodes } from '@/utils/animehelper';
import NavBarComponent from '@/components/NavBarComponent.vue';

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
    <NavBarComponentVue />
    <br />
    <br />
    <div v-if="anime && datas?.coverURL">

        <div class="z-20 relative px-[10vw] lg:px-[20vw] py-10 grid lg:grid-cols-2 gap-5">
            <img class="w-full rounded" :src="anime.url_image.replace('/2/', '/1/')" alt="">

            <div class="flex flex-col gap-5">
                <div>
                    <h1 class="font-bold text-lg lg:text-3xl">{{ anime.title }}</h1>
                    <h2 class="lg:text-xl">{{ anime.start_date_year }} - {{ datas.episodes.length }} eps</h2>
                </div>

                <p class="lg:text-lg">{{ datas.synopsis }}</p>

                <div class="grid 2xl:grid-cols-2 gap-5">
                <div class="flex flex-col gap-2 hover:cursor-pointer group" @click="$router.push('/anime/' + language + '/' + animeId + '/episode/' + episode.episode)" v-for="episode in datas.episodes">
                        <div class="aspect-[16/9] w-full relative">
                            <div class="w-full h-full bg-zinc-900 opacity-0 group-hover:opacity-100 bg-opacity-60 transition absolute top-0 left-0 grid items-center justify-center">
                                <p class="font-bold text-lg">PLAY</p>
                            </div>
                            <img class="w-full h-full object-cover" v-lazy="{ src: episode.url_image, loading: '/default_thumbnail.png' }" alt="">
                        </div>
                        <div>
                            <h5 class="whitespace-nowrap overflow-hidden text-ellipsis text-lg font-semibold">{{ episode.title }}</h5>
                            <h6>EP. {{ episode.episode }}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="w-full h-[80vh] z-0 absolute top-0">
            <img :src="datas?.coverURL" class="h-full w-full object-cover opacity-20" alt="">
            <div class="absolute bg-gradient-to-t top-0 from-zinc-900 w-full h-full z-10"></div>
        </div>

    </div>
</template>
