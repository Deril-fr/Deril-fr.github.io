<script lang="ts">
import type Anime from '@/types/Anime';
import type { AnimeWatched } from '@/types/Anime';
import { convertEpisodeToNumber } from '@/utils/animehelper';
import type { PropType } from 'vue';
import { getDuration } from '@/utils/timer';
export default {
    props: {
        anime: Object as PropType<AnimeWatched>,
        animeReal: Object as PropType<Anime>,
    },
    methods: {
        convertEpisodeToNumber,
        getDuration
    }
}
</script>

<template>
    <div v-if="anime">
    <div class="w-full" @click="$router.push('/anime/' + anime?.lang + '/' + animeReal?.id + '/episode/' + anime?.episode.toString())"> 
        <p v-if="anime?.lang == 'vf'" class="bg-red-500 p-3 rounded absolute">VF</p>
        <img class="w-full rounded object-cover aspect-[9/13]" v-lazy="{ src: animeReal?.url_image, loading: '/default_thumbnail.png' }" alt="" />

        <div class="mt-5 grid">
            <h5 class="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">{{ animeReal?.title }}</h5>
            <h6>Episode {{ anime.episode }} - {{ getDuration(anime.time) }}</h6>
        </div>
    </div>
    </div>
    <div v-else>
    <div class="w-full animate-pulse grid gap-5">
                <div class="w-full rounded object-cover aspect-[9/13] bg-zinc-800"></div>
                <div class="grid gap-2">
                    <h1 class="bg-zinc-800 text-zinc-800">lorem ipsum sin dolores</h1>
                    <h1 class="bg-zinc-800 text-zinc-800 w-[40%]">l</h1>
                </div>
            </div>
        </div>
</template>
