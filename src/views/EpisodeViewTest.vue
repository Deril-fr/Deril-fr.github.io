<script lang="ts">
import { animesStore } from '@/stores/animeStore';
import getM3U8, { getSynopsisAndEpisodes } from '@/utils/animehelper';
import { ref, type Ref } from 'vue';
import hls from 'hls.js';

export default {
    data() {
        return {
            currentEpisode: this.$router.currentRoute.value.params.episode,
            language: this.$router.currentRoute.value.params.lang as string,
            animeId: this.$router.currentRoute.value.params.id,
            video: ref() as Ref<{
                mp4: boolean;
                uri: string;
                available: boolean;
                baseurl: string;
            }>,
            player: {
                videoSrc: 'path/to/video.mp4',
                videoType: 'video/mp4',
                playing: false,
                currentTime: '0:00',
                duration: '0:00',
                progress: 0,
                fullscreen: false,
                controls: true,
                userActivity: true,
            }
        }
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

        if (this.video && this.video.available) {
            let hlsPlayer = new hls();

            hlsPlayer.loadSource(this.video.uri);
            hlsPlayer.attachMedia(this.$refs.video as HTMLMediaElement);
            setTimeout(() => {
                this.player.duration = this.formatTime((this.$refs.video as HTMLMediaElement).duration);
                this.player.videoType = 'application/x-mpegURL';
                // check if user as interacted with the video player
            }, 500);
            let controls = (this.$refs.videoControls as HTMLDivElement);
            // play/pause video on click on video
            (this.$refs.video as HTMLMediaElement).addEventListener('click', () => {
                this.playPauseVideo();
            });
            // on double click on video, toggle fullscreen
            (this.$refs.video as HTMLMediaElement).addEventListener('dblclick', () => {
                this.fullScreen();
            });
           let activityCheck = setInterval(() => {
  // Check to see if the mouse has been moved
  if (this.player.userActivity) {
    // Reset the activity tracker
    this.player.userActivity = false;

    // If the user state was inactive, set the state to active
    if (this.userActive() === false) {
      this.userActive(true);
    }
    var inactivityTimeout = setTimeout(() => {
      // Protect against the case where the inactivity timeout can trigger
      // before the next user activity is picked up  by the
      // activityCheck loop.
      if (!this.player.userActivity) {
        this.userActive(false);
      }
    }, 2000);
    // Clear any existing inactivity timeout to start the timer over
    clearTimeout(inactivityTimeout);

    // In X seconds, if no more activity has occurred
    // the user will be considered inactive

  }
}, 250);

            //  handle click on key controls (play/pause with spacebar, fullscreen with f, +10s with right arrow, -10s with left arrow and mute with m etc.)
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Space') {
                    this.playPauseVideo();
                } else if (e.code === 'KeyF') {
                    this.fullScreen();
                } else if (e.code === 'ArrowRight') {
                    (this.$refs.video as HTMLMediaElement).currentTime += 10;
                } else if (e.code === 'ArrowLeft') {
                    (this.$refs.video as HTMLMediaElement).currentTime -= 10;
                } else if (e.code === 'KeyM') {
                    (this.$refs.video as HTMLMediaElement).muted = !(this.$refs.video as HTMLMediaElement).muted;
                }else if (e.code === 'KeyC') {
                    this.player.controls = !this.player.controls;
                    if(this.player.controls) controls.style.display = 'block';
                    else controls.style.display = 'none';
                }
            });
        }

    },
    methods: {
        playPauseVideo() {
            if (this.player.playing) {
                (this.$refs.video as HTMLMediaElement).pause();
                this.player.playing = false;
            } else {
                (this.$refs.video as HTMLMediaElement).play();
                this.player.playing = true;
            }
        },
        updateProgress() {
            this.player.currentTime = this.formatTime((this.$refs.video as HTMLMediaElement).currentTime);
            this.player.progress = ((this.$refs.video as HTMLMediaElement).currentTime / (this.$refs.video as HTMLMediaElement).duration) * 100;
        },
        updateVideoProgress() {
            (this.$refs.video as HTMLMediaElement).currentTime = (this.player.progress / 100) * (this.$refs.video as HTMLMediaElement).duration;
        },
        endedVideo() {
            this.player.playing = false;
            this.player.currentTime = '0:00';
            this.player.progress = 0;
        },
        formatTime(time: number) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        },
        fullScreen() {
            const eleme = this.$refs.videoContainer as HTMLElement;
            // check if fullscreen mode is available or not
            // and check if it's already in fullscreen mode or not
            if (this.player.fullscreen) {
                document.exitFullscreen();
                this.player.fullscreen = false;
            } else {
                if (eleme.requestFullscreen) {
                    eleme.requestFullscreen();
                    this.player.fullscreen = true;
                } else {
                    alert("Impossible de mettre en plein écran");
                }
            }
        },
        userActive(state?: boolean) {
            if(!state){
                return this.player.userActivity;
            }else{
            if(state) {
                this.player.userActivity = true;
                this.player.controls = true;
                (this.$refs.videoControls as HTMLDivElement).style.display = 'block';
            } else {
                this.player.userActivity = false;
                this.player.controls = false;
                (this.$refs.videoControls as HTMLDivElement).style.display = 'none';
            }
            }
            
        },
        showControls() {
            this.player.userActivity = true;
        },
    },
}

</script>
<template>
    <div class="relative rounded-lg overflow-hidden" ref="videoContainer">
        <video class="w-full h-screen" ref="video" @timeupdate="updateProgress" @ended="endedVideo"
            @mouseup="showControls"></video>
        <div class="absolute bottom-0 left-0 right-0 py-2 bg-gray-900" ref="videoControls">
            <div class="flex justify-between items-center px-4">
                <div class="flex items-center">
                    <button class="text-white hover:text-gray-500" @click="playPauseVideo">
                        <template v-if="!player.playing">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 60 60"
                                xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path
                                        d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30   c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15   C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z" />
                                    <path
                                        d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30   S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z" />
                                </g>
                            </svg>
                        </template>
                        <template v-else>
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.5 7V18" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
                                <path d="M15.5 7V12.5V18" stroke="currentColor" stroke-width="3"
                                    stroke-linecap="round" />
                            </svg>
                        </template>
                    </button>
                    <div class="ml-3">
                        <button class="text-white" title="Plein écran" @click="fullScreen">
                            <template v-if="player.fullscreen">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor">
                                    <path
                                        d="M7 9.5C8.38071 9.5 9.5 8.38071 9.5 7V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H7.5C6.94772 1.5 6.5 1.94772 6.5 2.5V6.5H2.5C1.94772 6.5 1.5 6.94772 1.5 7.5V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H7Z"
                                        fill="#000000" />
                                    <path
                                        d="M17 9.5C15.6193 9.5 14.5 8.38071 14.5 7V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H16.5C17.0523 1.5 17.5 1.94772 17.5 2.5V6.5H21.5C22.0523 6.5 22.5 6.94772 22.5 7.5V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H17Z"
                                        fill="#000000" />
                                    <path
                                        d="M17 14.5C15.6193 14.5 14.5 15.6193 14.5 17V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H16.5C17.0523 22.5 17.5 22.0523 17.5 21.5V17.5H21.5C22.0523 17.5 22.5 17.0523 22.5 16.5V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H17Z"
                                        fill="#000000" />
                                    <path
                                        d="M9.5 17C9.5 15.6193 8.38071 14.5 7 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V16.5C1.5 17.0523 1.94772 17.5 2.5 17.5H6.5V21.5C6.5 22.0523 6.94772 22.5 7.5 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V17Z"
                                        fill="#000000" />
                                </svg>
                            </template>
                            <template v-else>
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor">
                                    <path
                                        d="M4 1.5C2.61929 1.5 1.5 2.61929 1.5 4V8.5C1.5 9.05228 1.94772 9.5 2.5 9.5H3.5C4.05228 9.5 4.5 9.05228 4.5 8.5V4.5H8.5C9.05228 4.5 9.5 4.05228 9.5 3.5V2.5C9.5 1.94772 9.05228 1.5 8.5 1.5H4Z"
                                        fill="#000000" />
                                    <path
                                        d="M20 1.5C21.3807 1.5 22.5 2.61929 22.5 4V8.5C22.5 9.05228 22.0523 9.5 21.5 9.5H20.5C19.9477 9.5 19.5 9.05228 19.5 8.5V4.5H15.5C14.9477 4.5 14.5 4.05228 14.5 3.5V2.5C14.5 1.94772 14.9477 1.5 15.5 1.5H20Z"
                                        fill="#000000" />
                                    <path
                                        d="M20 22.5C21.3807 22.5 22.5 21.3807 22.5 20V15.5C22.5 14.9477 22.0523 14.5 21.5 14.5H20.5C19.9477 14.5 19.5 14.9477 19.5 15.5V19.5H15.5C14.9477 19.5 14.5 19.9477 14.5 20.5V21.5C14.5 22.0523 14.9477 22.5 15.5 22.5H20Z"
                                        fill="#000000" />
                                    <path
                                        d="M1.5 20C1.5 21.3807 2.61929 22.5 4 22.5H8.5C9.05228 22.5 9.5 22.0523 9.5 21.5V20.5C9.5 19.9477 9.05228 19.5 8.5 19.5H4.5V15.5C4.5 14.9477 4.05228 14.5 3.5 14.5H2.5C1.94772 14.5 1.5 14.9477 1.5 15.5V20Z"
                                        fill="#000000" />
                                </svg>
                            </template>
                        </button>
                    </div>
                    <div class="ml-3">
                        <p class="text-sm text-white">{{ player.currentTime }} / {{ player.duration }}</p>
                    </div>

                </div>
                <input class="w-full bg-transparent text-white border-none p-0" type="range" v-model="player.progress"
                    @input="updateVideoProgress" />
            </div>
        </div>
    </div>
</template>