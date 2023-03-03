<script setup lang="ts">
import AnimeCardComponent from './components/AnimeCardComponent.vue';
import SpinnerComponent from './components/SpinnerComponent.vue';
import HomeSkeleton from './components/HomeSkeleton.vue';
import { animesStore } from './stores/animeStore';
import { auth } from './utils/database';
import {onAuthStateChanged } from 'firebase/auth';
import { getAnimeList } from './utils/storage';
import chunkify from './utils/chunkify';
</script>

<script lang="ts">
export default {
    data() {
        return {
            isNoCorsInstalled: true,
        };
    },

    methods: {
        loadAnimesAndCheckCors: async function () {
            try {
                animesStore.vf = await (await fetch('http://185.146.232.127/animes-search-vf.json')).json();
                animesStore.vostfr = await (await fetch('http://185.146.232.127/animes-search-vostfr.json')).json();
            } catch (e) {
                this.isNoCorsInstalled = false;
            }
        },
    },
    async mounted() {
        // set title of the page
        document.title = 'JapanWatch';
        await this.loadAnimesAndCheckCors();
        if (!this.isNoCorsInstalled) return;
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                await getAnimeList();
            }
        });
        let animesVf = animesStore.vf.map((anime) => {
            anime.lang = 'vf';
            return anime;
        });
        let animesVostfr = animesStore.vostfr.map((anime) => {
            anime.lang = 'vostfr';
            return anime;
        });
        animesStore.all = [...animesVf, ...animesVostfr];
        animesStore.result = chunkify(animesStore.all, 30);
        // handle if user leave the page or close the tab
    },
    components: { SpinnerComponent, AnimeCardComponent, HomeSkeleton },
};
</script>

<template>
    <main class="text-white min-h-screen">
        <div v-if="isNoCorsInstalled && animesStore.all.length > 0">
            <RouterView />
        </div>

        <div v-else-if="!isNoCorsInstalled">
            <div class="flex flex-col items-center justify-center h-screen">
                <h1 class="text-4xl font-bold">JapanWatch</h1>
                <p class="text-xl">Please install the <a href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf" target="_blank" class="text-blue-500">No-Cors</a> extension for Chrome</p>
            </div>
        </div>
    </main>
</template>
