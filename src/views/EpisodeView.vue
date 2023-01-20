<script setup lang="ts">
import { animesStore } from '@/stores/animeStore';
import { languageStore } from '@/stores/languageStore';
import router from '@/router';
import getM3U8, { getSynopsisAndEpisodes } from '@/utils/animehelper';
import { ref, onUpdated, onBeforeMount, onMounted } from 'vue';
import hls from 'hls.js';

let currentEpisode = router.currentRoute.value.params.episode;
let id = router.currentRoute.value.params.id;
let player: HTMLVideoElement;

const video = ref<{
    mp4: boolean;
    uri: string;
    available: boolean;
    baseurl: string;
}>();

onMounted(async () => {

    let anime = animesStore[languageStore.language].find((anime) => anime.id.toString() == id);
    if (!anime) return router.push('/');

    let data = await getSynopsisAndEpisodes(anime.url);
    let episode = data.episodes.find((episode) => episode.episode.toString() == currentEpisode);
    if (!episode) return router.push('/');

    let m3u8 = await getM3U8('https://neko-sama.fr' + episode.url);
    if (!m3u8) return router.push('/');

    console.log(m3u8)

    video.value = {
        mp4: false,
        uri: m3u8.uri,
        available: true,
        baseurl: m3u8.baseurl,
    };

    console.log(video.value)

    if (video.value && video.value.available) {
        let hlsPlayer = new hls();

        hlsPlayer.loadSource(video.value.uri);
        hlsPlayer.attachMedia(player);

        console.log(player)
    }
});
</script>

<template>
    <div>
        <video ref="player" controls class="w-full h-full"></video>
    </div>
</template>
