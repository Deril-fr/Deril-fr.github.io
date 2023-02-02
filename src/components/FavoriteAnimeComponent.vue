<script lang="ts">
import { animesStore } from '@/stores/animeStore';
import type Anime from '@/types/Anime';
import type AnimeDetails from '@/types/AnimeDetails';
import { getSynopsisAndEpisodes } from '@/utils/animehelper';

export default {
    name: 'FavoriteAnime',

    data() {
        return {
            favoriteAnime: undefined as { anime: Anime; details: AnimeDetails } | undefined,
        };
    },

    methods: {
        async getFavoriteAnime() {
            let anime = animesStore.vf.sort((b, a) => parseFloat(a.score) - parseFloat(b.score))[0];
            let details = (await getSynopsisAndEpisodes(anime.url)) as AnimeDetails;

            this.favoriteAnime = { anime, details };
        },
    },

    mounted() {
        this.getFavoriteAnime();
    },
};
</script>

<template>
    <section v-if="favoriteAnime" class="h-[80vh] relative">
        <div class="absolute top-0 left-0 w-[50%] z-20 p-20 h-full flex items-center">
            <div class="grid gap-10">
                <div>
                    <h1 class="font-bold text-3xl">{{ favoriteAnime.anime.title }}</h1>
                    <p class="text-lg font-semibold text-green-500">Aimé à {{ parseFloat(favoriteAnime.anime.score) * 20 }} %</p>
                </div>

                <p>{{ favoriteAnime.details.synopsis }}</p>

                <div class="w-full flex gap-5">
                    <router-link class="rounded w-full p-5 text-center bg-white text-zinc-900 font-bold text-lg" :to="'/anime/vf/' + favoriteAnime.anime.id">VF</router-link>
                    <router-link class="rounded w-full p-5 text-center bg-white font-bold text-lg bg-opacity-30" :to="'/anime/vostfr/' + favoriteAnime.anime.id">VOSTFR</router-link>
                </div>
            </div>
        </div>

        <div class="bg-gradient-to-r from-zinc-900 h-full w-full absolute z-10"></div>
        <img :src="favoriteAnime.details.coverURL" class="object-cover h-full w-full absolute opacity-50" alt="" />
    </section>
</template>
