<script lang="ts">
import AnimeCardComponent from '@/components/AnimeCardComponent.vue';
import { animesStore } from '@/stores/animeStore';
import type AnimeWatched from '@/types/AnimeWatched';
import type Anime from '@/types/Anime';

export default {
    name: 'ResumeHP',
    data() {
        return {
            watchList: watchListStore.slice(0, 8).map(a => {return {anime: this.getAnime(a), details: a}}),
            hovered: undefined as string | undefined,
        }
    },
    methods: {
        getAnime(a: AnimeWatched) {
            return animesStore[a.lang].find((b) => b.id == a.id);
        },
        test(animeId: number | undefined, lang: 'vf' | 'vostfr' | undefined) {
            if (!animeId || !lang) return this.hovered = undefined;
            this.hovered = animeId + lang;
        }
    },
    components: {AnimeCardComponent}
};
</script>

<script lang="ts" setup>
import { watchListStore } from '@/stores/watchListStore';
</script>

<template>
    <section class="px-20 mt-10">
        <p class="flex justify-between w-full">
            <h2 class="text-xl uppercase">Continuer de regarder <span class="font-bold">{{ watchListStore.length }} animes</span></h2>
            <router-link v-if="watchListStore.length > 8" to="/history" class="uppercase">Tout voir</router-link>
        </p>

        <div class="grid md:grid-cols-4 xl:grid-cols-8 gap-5 mt-5" id="resumeHomePage">
            <div v-for="anime in watchList" class="transition delay-100" :class="hovered ? (anime.anime.id + anime.anime.lang) == hovered ? 'opacity-100' : 'opacity-50' : 'opacity-100'" :key="anime.anime.id" @mouseenter="test(anime.anime.id, anime.anime.lang)" @mouseleave="test(undefined, undefined)" @click="$router.push('/anime/' + anime?.anime.lang + '/' + anime?.anime.id + '/episode/' + anime.details.episode)">
                <div class="w-fit relative">
                    <img v-if="anime.details.lang == 'vf'" src="/flag_france.png" class="w-5 absolute top-3 left-3" alt=""> 

                    <img class="w-full rounded-t-lg object-cover aspect-[9/13]" v-lazy="{ src: anime?.anime.url_image, loading: '/default_thumbnail.png' }" alt="" />
                    <div class="absolute w-full bg-zinc-800 h-1.5 bottom-0">
                        <div style="transition: all 1s;" :style="'width: ' + (hovered ? ((anime.anime.id + anime.anime.lang) == hovered) ? `${(anime.details.time/anime.details.duration)*100}%` : `0%` : `0%`)" class="bg-rose-500 h-1.5"></div>
                    </div>
                </div>

                <div class="mt-5 grid">
                    <h5 class="flex gap-2 text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">{{ anime?.anime.title }}</h5>
                    <h6>Episode {{ anime.details.episode }}</h6>
                </div>
            </div>
        
        </div>
            
    </section>
</template>