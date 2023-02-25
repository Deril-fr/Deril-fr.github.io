<script lang="ts">
import { animesStore } from '@/stores/animeStore';
import getM3U8, { getSynopsisAndEpisodes } from '@/utils/animehelper';
import { ref, type Ref } from 'vue';
import hls from 'hls.js';
import { getAnime, removeAnime, setAnime } from '@/utils/storage';

import type EpisodeReal from '@/types/EpisodeReal';
import type Anime from '@/types/Anime';
import type Subtitlesvtt from '@/types/Subtitlesvtt';
export default {
    data() {
        return {
            currentEpisode: this.$router.currentRoute.value.params.episode.toString(),
            language: this.$router.currentRoute.value.params.lang as string,
            animeId: this.$router.currentRoute.value.params.id,
            anime: undefined as { synopsis: string; episodes: EpisodeReal[]; coverURL: string } | undefined,
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
                subtitles: Subtitlesvtt[];
            }>,
            title: '',
            lastTime: 0,
        };
    },
    methods: {
        update: function (e: any) {
            if (this.anime && this.anime.episodes.length < parseInt(this.currentEpisode)) return;
            setAnime({
                id: parseInt(this.animeId.toString()),
                episode: parseInt(this.currentEpisode.toString()),
                time: (this.$refs.player as HTMLMediaElement).currentTime,
                lang: this.language as 'vf' | 'vostfr',
                duration: (this.$refs.player as HTMLMediaElement).duration,
            });
        },
        hideControls: function () {
            let hiddens = document.getElementsByClassName('hidden')
            for (let i = 0; i < hiddens.length; i++) {
                (hiddens[i] as HTMLElement).style.display = 'none';
            }
        },
        showControls: function () {
            let hiddens = document.getElementsByClassName('hidden')
            for (let i = 0; i < hiddens.length; i++) {
                (hiddens[i] as HTMLElement).style.display = 'block';
            }
        },
    },
    async mounted() {
        if (this.language != 'vf' && this.language != 'vostfr') return this.$router.push('/');
        let animeExist = animesStore[this.language].find((a) => a.id.toString() === this.animeId);
        const player = this.$refs.player as HTMLMediaElement;
        if (animeExist) {
            let PlayerContainer = document.querySelector('.plyr');
            let ControlContainer = document.querySelector('.plyr__controls');
            // add Button on the top right of the player to go to the Home page
            let homeButton = document.createElement('button');
            homeButton.classList.add('home-button');
            homeButton.classList.add('hidden');
            // add the class for get the icon
            homeButton.classList.add('plyr__control');
            homeButton.innerHTML = `<span class="material-symbols-outlined">home</span> ${animeExist.title}`;
            homeButton.style.position = 'absolute';
            // set the position of the button on the top left of the player
            homeButton.style.top = '0';
            homeButton.style.left = '0';
            homeButton.style.zIndex = '100';
            homeButton.style.padding = '0.5rem';
            homeButton.style.backgroundColor = 'rgba(0,0,0,0.5)';
            homeButton.style.color = 'white';
            homeButton.style.borderRadius = '0 0 0 0.5rem';
            homeButton.style.display = 'flex';
            homeButton.style.alignItems = 'center';
            homeButton.style.justifyContent = 'center';
            homeButton.onclick = () => {
                this.$router.push('/');
            };
            PlayerContainer?.appendChild(homeButton);

            // add a button to go to the next episode on the bottom right of the player
            let nextButton = document.createElement('button');
            nextButton.classList.add('next-button');
            nextButton.classList.add('hidden');
            // add the class for get the icon
            nextButton.classList.add('plyr__controls__item');
            nextButton.innerHTML = `<span class="material-symbols-outlined">skip_next</span>`;
            nextButton.style.position = 'relative';
            // set the position of the button on the bottom right of the player
            nextButton.style.bottom = '0';
            nextButton.style.right = '0';
            nextButton.style.zIndex = '100';
            nextButton.style.padding = '0.5rem';
            nextButton.style.backgroundColor = 'rgba(0,0,0,0.5)';
            nextButton.style.color = 'white';
            nextButton.style.borderRadius = '0.5rem 0 0 0';
            nextButton.style.display = 'flex';
            nextButton.style.alignItems = 'center';
            nextButton.style.justifyContent = 'center';
            nextButton.onclick = async () => {
                player.currentTime = 0;
                this.$router.replace(`/anime/${this.language}/${this.animeId}/episode/${parseInt(this.currentEpisode.toString()) + 1}`);
                this.currentEpisode = (parseInt(this.currentEpisode.toString()) + 1).toString();
                // check if the next episode exist in the anime data
                if (!animeExist) return;
                let nb_eps = parseInt(animeExist.nb_eps.replace(' Eps', ''));
                let currentEpisode = parseInt(this.currentEpisode.toString());
                let animeId = parseInt(this.animeId.toString());
                if (!isNaN(nb_eps) && animeExist.type == 'm0v1e') {
                    removeAnime(animeId, this.language);
                    this.$router.back();
                    return;
                }
                if (nb_eps < currentEpisode) {
                    removeAnime(animeId, this.language);
                    this.$router.back();
                    return;
                }
                await setVideoPlayer(animeExist);
            }
            ControlContainer?.appendChild(nextButton);
        };
        const setVideoPlayer = async (anime: Anime) => {
            document.title = 'Episode ' + this.currentEpisode + ' - ' + anime.title;
            const plyr = this.$refs.plyr as any;
            if (!anime) {
                // check if the route before was the history page or the home page
                this.$router.back();
                return;
            }
            this.anime = await getSynopsisAndEpisodes(anime.url);
            let episode = this.anime.episodes.find((episode) => episode.episode.toString() == this.currentEpisode);
            if (!episode) {
                setAnime({
                    id: parseInt(this.animeId.toString()),
                    episode: parseInt(this.currentEpisode.toString()) - 1,
                    time: 0,
                    lang: this.language as 'vf' | 'vostfr',
                    duration: (this.$refs.player as HTMLMediaElement).duration,
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
                subtitles: m3u8.subtitlesvtt,
                baseurl: m3u8.baseurl,
            };
            // check if anime is already in the storage
            const animeWatched = getAnime(parseInt(this.animeId.toString()), parseInt(this.currentEpisode.toString()), this.language);
            // dynamic import plyr
            this.title = anime.title;

            if (this.video && this.video.available) {
                if(this.video.subtitles.length > 0){
                   let videoPlayer = (document.querySelector(".playme") as HTMLMediaElement);
                   if(videoPlayer){
                    videoPlayer.innerHTML = `<track kind="captions" label="English captions" src="${this.video.subtitles[0].file}" srclang="fr" crossorigin="anonymous" default>`;
                   }
                }
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
                        lang: this.language as 'vf' | 'vostfr',
                        duration: (this.$refs.player as HTMLMediaElement).duration,
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
        <vue-plyr :options="options" ref="plyr" @controlshidden="hideControls" @controlsshown="showControls">
            <video ref="player" id="playme" controls @timeupdate="update">
                        <track v-if="video && video.available" kind="subtitles" :src="video.subtitles[0].file" :label="video.subtitles[0].lang"
                            :default="true" />
            </video>
        </vue-plyr>
    </div>
</template>
