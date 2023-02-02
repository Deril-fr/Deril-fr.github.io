<script lang="ts">
import AnimeCardComponent from '@/components/AnimeCardComponent.vue';
import { animesStore } from '@/stores/animeStore';
import type AnimeWatched from '@/types/AnimeWatched';

export default {
    name: 'ResumeHP',
    methods: {
        getAnime(a: AnimeWatched) {
            return animesStore[a.lang].find((b) => b.id == a.id);
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
            <h2 class="font-semibold text-xl">Reprendre</h2>
            <router-link v-if="watchListStore.length > 8" to="/history">Tout voir</router-link>
        </p>

        <div class="grid md:grid-cols-4 xl:grid-cols-8 gap-5 mt-5" id="resumeHomePage">
            <AnimeCardComponent v-for="anime in watchListStore.slice(0, 8)" :key="anime.id" :anime="getAnime(anime)"/>
        </div>
            
    </section>
</template>

<style scoped>
    #resumeHomePage>*:hover #resumeHomePage {
        opacity: 0;
    }
</style>