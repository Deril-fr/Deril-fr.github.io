<script lang="ts">
import router from '@/router';
import { animesStore } from '@/stores/animeStore';
import { languageStore } from '@/stores/languageStore';
import getM3U8, { getSynopsisAndEpisodes } from '@/utils/animehelper';
import { ref, type Ref } from 'vue';
import hls from 'hls.js';

export default {
    data() {
        return {
            currentEpisode: router.currentRoute.value.params.episode,
            id: router.currentRoute.value.params.id,
            video: ref() as Ref<{
                mp4: boolean;
                uri: string;
                available: boolean;
                baseurl: string;
            }>,
        };
    },

    async mounted() {
        let anime = animesStore[languageStore.language].find((anime) => anime.id.toString() == this.id);
        if (!anime) return router.push('/');

        let data = await getSynopsisAndEpisodes(anime.url);
        let episode = data.episodes.find((episode) => episode.episode.toString() == this.currentEpisode);
        if (!episode) return router.push('/');

        let m3u8 = await getM3U8('https://neko-sama.fr' + episode.url);
        if (!m3u8) return router.push('/');

        console.log(m3u8);

        this.video = {
            mp4: false,
            uri: m3u8.uri,
            available: true,
            baseurl: m3u8.baseurl,
        };

        console.log(this.video);

        if (this.video && this.video.available) {
            let hlsPlayer = new hls();

            hlsPlayer.loadSource(this.video.uri);
            hlsPlayer.attachMedia(this.$refs.player as HTMLMediaElement);

            console.log(this.$refs.player as HTMLMediaElement);
        }
    },
};
</script>

<template>
    <div>
        <video ref="player" controls class="w-full h-full"></video>
    </div>
</template>
