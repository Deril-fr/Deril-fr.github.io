<script setup lang="ts">
import type Anime from '@/types/Anime';
import type { PstreamData } from '@/types/Anime';
import { animesStore, languageStore } from '@/stores/animeStore';
import router from '@/router';
import getM3U8, { getSynopsisAndEpisodes } from '@/utils/animehelper';
import { ref, onMounted, onUpdated} from 'vue';
import hls from 'hls.js';

let episode = router.currentRoute.value.params.episode;
let id = router.currentRoute.value.params.id;

const video = ref<{
            mp4: boolean,
            uri: string,
            available: boolean,
            baseurl: string,
        }>();
if(typeof episode == "string" && typeof id == "string")
{
    let currentId = parseInt(id);
    let currentEpisode = parseInt(episode);
    let anime = animesStore.vostfr.find(anime => anime.id == currentId);
    if(anime)
    {
        getSynopsisAndEpisodes(anime.url).then(data => {
            let episode = data.episodes.find(episode => episode.episode == currentEpisode);
            if(episode)
            {
                getM3U8("https://neko-sama.fr"+episode.url).then(data => {
                    if(data){
                        video.value = {
                            mp4: false,
                            uri: data.uri,
                            available: true,
                            baseurl: data.baseurl
                        };
                    }else{
                        $:{
                            console.log("Video not found");
                        }
                        router.push("/");
                    }
                });
            }else{
                $:{
                    console.log("Episode not found");
                }
                router.push("/");
            }
        });
    }else{
        $:{
            console.log("Anime not found");
        }
    }
}


onUpdated(() => {
        if(video.value && video.value.available)
    {
        console.log(video.value.uri);
        let player = document.getElementById("player") as HTMLVideoElement;
        let hlsPlayer = new hls();
        hlsPlayer.loadSource(video.value.uri);
        hlsPlayer.attachMedia(player);
    }
});
</script>

<template>
    <div v-if="video">
        <video id="player" controls class="w-full h-full"></video>
    </div>
</template>