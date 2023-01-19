<script setup lang="ts">
import AnimeCardComponent from '@/components/AnimeCardComponent.vue';
import { animesStore } from '@/stores/animeStore';
import chunkify from "@/utils/chunkify";
import { ref } from 'vue';

let animeChunks = ref(chunkify(animesStore.vostfr, 20));
let page = ref(0);
</script>

<template>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-10" v-if="animeChunks">
        <AnimeCardComponent v-for="anime in animeChunks[page]" :anime="anime"/>
        <button @click="page++">next</button>
    </div>
</template>