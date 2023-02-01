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
            title: '',
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth,
        };
    },

    async mounted() {
        if (this.language != "vf" && this.language != "vostfr") return this.$router.push("/");
        let animeExist = animesStore[this.language].find((a) => a.id.toString() === this.animeId);
        const setVideoPlayer = async (anime: Anime) => {
            document.title = "Episode " + this.currentEpisode + " - " + anime.title;

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
            const animeWatched = getAnime(parseInt(this.animeId.toString()), parseInt(this.currentEpisode.toString()), this.language)
            // dynamic import plyr
            const { default: Plyr } = await import('plyr');
            const player = new Plyr('#playme', {
                storage: {
                    enabled: true,
                    key: 'videoPlayer'
                },
                autoplay: true,
            });
            this.title = anime.title;
            (this.$refs.player as HTMLMediaElement).style.aspectRatio = `${this.innerWidth}/${this.innerHeight}`;

            window.addEventListener("resize", () => {
                (this.$refs.player as HTMLMediaElement).style.aspectRatio = `${this.innerWidth}/${this.innerHeight}`;
            });


            document.addEventListener("keypress", (event) => {
                // if user press spacebar then pause or play the video
                switch (event.code) {
                    case "Space":
                        if (player.paused) {
                            player.play();
                        } else {
                            player.pause();
                        }
                        break;
                    case "KeyF":
                        player.fullscreen.toggle();
                        break;
                    case "KeyM":
                        player.muted = !player.muted;
                        break;
                }

            });
            if (this.video && this.video.available) {
                let hlsPlayer = new hls();

                hlsPlayer.loadSource(this.video.uri);
                hlsPlayer.attachMedia(this.$refs.player as HTMLMediaElement);
                setTimeout(() => {
                    if (animeWatched) {
                        (this.$refs.player as HTMLMediaElement).currentTime = animeWatched.time;
                    } else {
                        (this.$refs.player as HTMLMediaElement).currentTime = 0;
                        (this.$refs.player as HTMLMediaElement).play();
                    }
                    if (this.$refs.player as HTMLMediaElement && (this.$refs.player as HTMLMediaElement).paused) {
                        (this.$refs.player as HTMLMediaElement).play();
                    }
                }, 1000);
                // setup a listener when the video time is updated 
                player.on('timeupdate', () => {
                    setAnime({
                        id: parseInt(this.animeId.toString()),
                        episode: parseInt(this.currentEpisode.toString()),
                        time: (this.$refs.player as HTMLMediaElement).currentTime,
                        lang: this.language,
                    });
                });
                player.on('ended', async () => {
                    // check if user is focused on the player with the cursor
                    // if yes return  and don't play the next episode
                    if (document.activeElement == this.$refs.player) {
                        return;
                    }
                    (this.$refs.player as HTMLMediaElement).currentTime = 0;
                    this.$router.replace(`/anime/${this.language}/${this.animeId}/episode/${parseInt(this.currentEpisode.toString()) + 1}`);
                    this.currentEpisode = (parseInt(this.currentEpisode.toString()) + 1).toString();
                    // check if the next episode exist in the anime data 
                    let nb_eps = parseInt(anime.nb_eps.replace(" Eps", ""));
                    let currentEpisode = parseInt(this.currentEpisode.toString());
                    let animeId = parseInt(this.animeId.toString());

                    if (!isNaN(nb_eps) && anime.type == "m0v1e") {
                        removeAnime(animeId, this.language);
                        this.$router.back();
                        return;
                    }

                    if (nb_eps < currentEpisode) {
                        removeAnime(animeId, this.language);
                        this.$router.back();
                        return
                    }

                    await setVideoPlayer(anime);
                });
            }
        }
        await setVideoPlayer(animeExist as Anime);
    },
};

</script>

<template>
    <div>
        <video ref="player" id="playme" autoplay="true" data-plyr-config='{ "title": "{{ this.title }}" }'> </video>
    </div>
</template>

