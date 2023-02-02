<script lang="ts">
import { animesStore } from '@/stores/animeStore';
import getM3U8, { getSynopsisAndEpisodes } from '@/utils/animehelper';
import { ref, type Ref } from 'vue';
import hls from 'hls.js';
import { getAnime, removeAnime, setAnime } from '@/utils/storage';
import type Anime from '@/types/Anime';
export default {
    data() {
        return {
            currentEpisode: this.$router.currentRoute.value.params.episode.toString(),
            language: this.$router.currentRoute.value.params.lang as string,
            animeId: this.$router.currentRoute.value.params.id,
            options: {
                storage: {
                    enabled: true,
                    key: 'videoPlayer',
                },
            },
            video: ref() as Ref<{
                mp4: boolean;
                uri: string;
                available: boolean;
                baseurl: string;
            }>,
            title: '',
            lastTime: 0,
        };
    },
    methods: {
        update: function (e: any) {
            setAnime({
                id: parseInt(this.animeId.toString()),
                episode: parseInt(this.currentEpisode.toString()),
                time: (this.$refs.player as HTMLMediaElement).currentTime,
                lang: this.language,
                duration: (this.$refs.player as HTMLMediaElement).duration,
            });
        },
    },
    async mounted() {
        if (this.language != 'vf' && this.language != 'vostfr') return this.$router.push('/');
        let animeExist = animesStore[this.language].find((a) => a.id.toString() === this.animeId);
        const setVideoPlayer = async (anime: Anime) => {
            document.title = 'Episode ' + this.currentEpisode + ' - ' + anime.title;
            const player = this.$refs.player as HTMLMediaElement;
            const plyr = this.$refs.plyr as any;
            if (!anime) {
                // check if the route before was the history page or the home page
                this.$router.back();
                return;
            }
            let data = await getSynopsisAndEpisodes(anime.url);
            let episode = data.episodes.find((episode) => episode.episode.toString() == this.currentEpisode);
            if (!episode) {
                setAnime({
                    id: parseInt(this.animeId.toString()),
                    episode: parseInt(this.currentEpisode.toString()) - 1,
                    time: 0,
                    lang: this.language,
                });
                this.$router.back();
                return;
            }
            let m3u8 = await getM3U8('https://neko-sama.fr' + episode.url);
            if (!m3u8) return this.$router.back();
            this.video = {
                mp4: false,
                uri: m3u8.uri,
                available: true,
                baseurl: m3u8.baseurl,
            };
            // check if anime is already in the storage
            const animeWatched = getAnime(parseInt(this.animeId.toString()), parseInt(this.currentEpisode.toString()), this.language);
            // dynamic import plyr
            this.title = anime.title;

            if (this.video && this.video.available) {
                let hlsPlayer = new hls();
                hlsPlayer.loadSource(this.video.uri);
                hlsPlayer.attachMedia(player);
                setTimeout(() => {
                    if (animeWatched) {
                        player.currentTime = animeWatched.time;
                    } else {
                        player.currentTime = 0;
                        player.play();
                    }
                    if (player && player.paused) {
                        player.play();
                    }
                    setAnime({
                        id: parseInt(this.animeId.toString()),
                        episode: parseInt(this.currentEpisode.toString()),
                        time: player.currentTime,
                        lang: this.language,
                    });
                }, 1000);
                let isEnded = false;
                player.onended = async () => {
                    if (isEnded) return;
                    isEnded = true;
                    player.currentTime = 0;
                    this.$router.replace(`/anime/${this.language}/${this.animeId}/episode/${parseInt(this.currentEpisode.toString()) + 1}`);
                    this.currentEpisode = (parseInt(this.currentEpisode.toString()) + 1).toString();
                    // check if the next episode exist in the anime data
                    let nb_eps = parseInt(anime.nb_eps.replace(' Eps', ''));
                    let currentEpisode = parseInt(this.currentEpisode.toString());
                    let animeId = parseInt(this.animeId.toString());
                    if (!isNaN(nb_eps) && anime.type == 'm0v1e') {
                        removeAnime(animeId, this.language);
                        this.$router.back();
                        return;
                    }
                    if (nb_eps < currentEpisode) {
                        removeAnime(animeId, this.language);
                        this.$router.back();
                        return;
                    }
                    await setVideoPlayer(anime);
                };
            }
        };
        await setVideoPlayer(animeExist as Anime);
    },
};
</script>

<template>
    <div class="h-screen">
        <vue-plyr :options="options" ref="plyr">
            <video ref="player" id="playme" controls @timeupdate="update"></video>
        </vue-plyr>
    </div>
</template>
