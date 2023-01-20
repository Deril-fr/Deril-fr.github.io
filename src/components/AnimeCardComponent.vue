<script lang="ts">
import type Anime from '@/types/Anime';
import type { PropType } from 'vue';

export default {
    props: {
        anime: Object as PropType<Anime>
    }
}
</script>

<template>
    <div class="w-full" @click="$router.push('/anime/' + anime?.lang + '/' + anime?.id)">
        <p v-if="anime?.lang == 'vf'" class="bg-red-500 p-3 rounded absolute">VF</p>
        <img class="w-full rounded object-cover aspect-[9/13]" v-lazy="{ src: anime?.url_image, loading: '/default_thumbnail.png' }" alt="" />

        <div class="mt-5 grid">
            <h5 class="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">{{ anime?.title }}</h5>
            <h6>{{ anime?.start_date_year }} - {{ anime?.nb_eps }}</h6>
        </div>
    </div>
</template>
