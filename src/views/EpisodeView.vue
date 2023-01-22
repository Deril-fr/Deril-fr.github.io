<script lang="ts">
import { animesStore } from '@/stores/animeStore';
import getM3U8, { getSynopsisAndEpisodes } from '@/utils/animehelper';
import { ref, type Ref } from 'vue';
import hls from 'hls.js';
import { getAnime, setAnime } from '@/utils/storage';
import Plyr from 'plyr';

export default {
    data() {
        return {
            currentEpisode: this.$router.currentRoute.value.params.episode,
            language: this.$router.currentRoute.value.params.lang as string,
            animeId: this.$router.currentRoute.value.params.id,
            player: {
                volume: 100,
                currentTime: 0,
                duration: 0,
                paused: true,
                controls: true,
                muted: false,
                src: '',
                video: null,
            },
            video: ref() as Ref<{
                mp4: boolean;
                uri: string;
                available: boolean;
                baseurl: string;
            }>,
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        };
    },

    async mounted() {
        if (this.language != "vf" && this.language != "vostfr") return this.$router.push("/");
        let anime = animesStore[this.language].find((a) => a.id.toString() === this.animeId);
        
        if (!anime) return this.$router.push('/');

        let data = await getSynopsisAndEpisodes(anime.url);
        let episode = data.episodes.find((episode) => episode.episode.toString() == this.currentEpisode);
        if (!episode) return this.$router.push('/');

        let m3u8 = await getM3U8('https://neko-sama.fr' + episode.url);
        if (!m3u8) return this.$router.push('/');

        this.video = {
            mp4: false,
            uri: m3u8.uri,
            available: true,
            baseurl: m3u8.baseurl,
        };
        // check if anime is already in the storage
       const animeWatched = getAnime(parseInt(this.animeId.toString()), parseInt(this.currentEpisode.toString()), this.language)

       const player = new Plyr('#playme',{
        storage: {
            enabled: true,
            key: 'videoPlayer'
        },
       });
       window.addEventListener("resize", () => {
              this.innerHeight = window.innerHeight;
              this.innerWidth = window.innerWidth;
            });

        if (this.video && this.video.available) {
            let hlsPlayer = new hls();

            hlsPlayer.loadSource(this.video.uri);
            hlsPlayer.attachMedia(this.$refs.player as HTMLMediaElement);
            setTimeout(() => {
                if (animeWatched) {
                    (this.$refs.player as HTMLMediaElement).currentTime = animeWatched.time;
                }
                if (this.$refs.player as HTMLMediaElement && (this.$refs.player as HTMLMediaElement).paused) {
                    (this.$refs.player as HTMLMediaElement).play();
                }
            }, 1000);
            // setup a listener when the video time is updated 
            (this.$refs.player as HTMLMediaElement).addEventListener('timeupdate', () => {
                setAnime({
                    id:parseInt(this.animeId.toString()),
                    episode:parseInt(this.currentEpisode.toString()),
                    time: (this.$refs.player as HTMLMediaElement).currentTime,
                    lang: this.language,
                });
            });
        }
    },
};

</script>

<template>
    <div>
        <video ref="player" id="playme" autoplay="true"> </video>
    </div>
</template>
