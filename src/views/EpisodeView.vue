<script setup lang="ts">
import type Anime from '@/types/Anime';
import type { PstreamData } from '@/types/Anime';
import { animesStore, languageStore } from '@/stores/animeStore';
import router from '@/router';
import getM3U8, { getSynopsisAndEpisodes } from '@/utils/animehelper';
import { ref } from 'vue';

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
    let anime = animesStore[languageStore.language].find(anime => anime.id == currentId);
    if(anime)
    {
        getSynopsisAndEpisodes(anime.url).then(data => {
            let episode = data.episodes.find(episode => episode.episode == currentEpisode);
            if(episode)
            {
                console.log(episode);
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
        router.push("/");
    }
}

</script>

<template>
    <div v-if="video">
        <video controls :src="video.uri" class="w-full h-full"></video>
    </div>
</template>

