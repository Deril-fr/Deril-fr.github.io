<script lang="ts">
import type Anime from '@/types/Anime';
import type { PropType } from 'vue';

export default {
    name: 'AnimeCard',
    props: {
        anime: Object as PropType<Anime>,
    },
};
</script>

<template>
    <div class="w-full" @click="$router.push('/anime/' + anime?.lang + '/' + anime?.id)">
        <div class="w-full relative">
            <img v-if="anime?.lang == 'vf'" src="/flag_france.png" class="w-5 absolute top-3 left-3" alt="" />
            <img class="w-full rounded-t-lg object-cover aspect-[9/13]" v-lazy="{ src: anime?.url_image, loading: '/default_thumbnail.png' }" alt="" />
        </div>

        <div class="mt-5 grid">
            <h5 class="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">{{ anime?.title }}</h5>
            <h6>{{ anime?.start_date_year }} - {{ anime?.nb_eps }}</h6>
        </div>
    </div>
</template>
