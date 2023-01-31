<script setup lang="ts">
import AnimeCardComponent from './components/AnimeCardComponent.vue';
import SpinnerComponent from './components/SpinnerComponent.vue';
import HomeSkeleton from "./components/HomeSkeleton.vue";
import { animesStore } from './stores/animeStore';
import { ref } from 'vue';
import { auth } from './utils/database';
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
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
                animesStore.vf = await (await fetch("https://neko-sama.fr/animes-search-vf.json")).json();
                animesStore.vostfr = await (await fetch("https://neko-sama.fr/animes-search-vostfr.json")).json();
            } catch (e) {
                this.isNoCorsInstalled = false;
            }
        },
    },

    async mounted() {
        await this.loadAnimesAndCheckCors();
        if(!this.isNoCorsInstalled) return;        
        const result = await getRedirectResult(auth);
        if (result && result.user) {
            // User is signed in.
            const user = result.user;
            console.log(user);
        }
        if(!auth.currentUser){
            const provider = new GoogleAuthProvider();
            // display a message to the user to sign in with google
            await signInWithRedirect(auth, provider);
        }

        let animesVf = animesStore.vf.map((anime) => {
            anime.lang = "vf";
            return anime;
        });
        let animesVostfr = animesStore.vostfr.map((anime) => {
            anime.lang = "vostfr";
            return anime;
        });
        animesStore.all = [...animesVf, ...animesVostfr];
        animesStore.result = [...animesStore.all];
    },
    components: { SpinnerComponent, AnimeCardComponent, HomeSkeleton }
};
</script>

<template>
    <main class="bg-zinc-900 text-white min-h-screen">

        <HomeSkeleton v-if="animesStore.all.length <= 0 && isNoCorsInstalled" />

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
