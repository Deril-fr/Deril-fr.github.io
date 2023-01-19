<script setup lang="ts">
import AnimeCardComponent from '@/components/AnimeCardComponent.vue';
import { animesStore } from '@/stores/animeStore';
import type Anime from '@/types/Anime';
import chunkify from "@/utils/chunkify";
import { onMounted, ref } from 'vue';

let animeChunks = ref<Anime[][]>([]);
let page = ref(0);
onMounted(() => {
   let a=  setInterval(() => {
        animeChunks.value = chunkify(animesStore.vostfr, 20);
    }, 100);
    if(animeChunks.value.length > 0) {
        clearInterval(a);
    }
});
</script>

<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-10" v-if="animeChunks">
        <div v-for="anime in animeChunks[page]" :key="anime.id">
            <AnimeCardComponent :anime="anime" />
        </div>

        <button @click="page--">prev</button>
        <button @click="page++">next</button>
    </div>
</template>