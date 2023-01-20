<script setup lang="ts">
import AnimeCardComponent from './components/AnimeCardComponent.vue';
import SpinnerComponent from './components/SpinnerComponent.vue';
import HomeSkeleton from "./components/HomeSkeleton.vue";
import { animesStore } from './stores/animeStore';
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

        <HomeSkeleton v-if="animesStore.all.length <= 0"/>

        <div v-if="isNoCorsInstalled && animesStore.all.length > 0">
            <RouterView />
        </div>
    </main>
</template>
