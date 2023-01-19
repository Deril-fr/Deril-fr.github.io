<script setup lang="ts">
    import type Anime from '@/types/Anime';

    const props = defineProps<{
        anime: Anime
    }>();
</script>

<template>
    <div class="w-full">
        <img class="w-full rounded object-cover aspect-[9/13]" :src="props.anime.url_image" alt=""/>

        <div class="mt-5 grid">
            <h5 class="text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden">{{ props.anime.title }}</h5>
            <h6>{{ props.anime.start_date_year }} - {{ props.anime.nb_eps }}</h6>
        </div>
    </div>
</template>