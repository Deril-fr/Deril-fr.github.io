<script setup lang="ts">
import AnimeCardComponent from '@/components/AnimeCardComponent.vue';
import { animesStore } from '@/stores/animeStore';
import type Anime from '@/types/Anime';
import chunkify from '@/utils/chunkify';
import { onBeforeMount, ref } from 'vue';

let animeChunks = ref<Anime[][]>(chunkify(animesStore.all, 30));
let page = ref(0);

function changePage(n: number) {
    console.log(n);
    scrollTo(0, 0);

    if (n == -1) {
        page.value = animeChunks.value.length - 1;
        return;
    }

    if (n == animeChunks.value.length) {
        page.value = 0;
        return;
    }

    page.value = n;
}
</script>

<template>
    <section v-if="animeChunks">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-10">
            <div v-for="anime in animeChunks.at(page)" :key="anime.id">
                <AnimeCardComponent :anime="anime" />
            </div>
        </div>

        <div class="flex justify-between py-5">
            <button @click="changePage(page-1)">prev</button>
            <p>{{ page + 1 }}/{{ animeChunks.length }}</p>
            <button @click="changePage(page+1)">next</button>
        </div>
    </section>
</template>