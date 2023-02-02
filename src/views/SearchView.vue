<template>
    <section>
        <div class="fixed z-10 top-0 px-20 py-10 w-full flex gap-5 bg-zinc-900">
            <input v-model="query" type="text" class="w-full p-3 bg-zinc-800 rounded focus:outline-none" @input="resetTimeout()" placeholder="Rechercher un anime.." />
            <button @click="$router.replace('/')" class="material-symbols-outlined bg-zinc-800 w-20">close</button>
        </div>

        <div class="mx-20 mt-36 grid grid-cols-6 gap-10">
            <AnimeCardComponent v-for="anime in animesStore.result.slice(0, nb_showed).reduce((a, b) => a.concat(b))" :anime="anime" />
        </div>
    </section>
</template>

<script lang="ts">
import AnimeCardComponent from '@/components/AnimeCardComponent.vue';
import Fuse from 'fuse.js';
import chunkify from '@/utils/chunkify';

export default {
    data() {
        return {
            query: '',
            nb_showed: 1,
            timeout: null as null | NodeJS.Timeout,
        };
    },

    methods: {
        resetTimeout() {
            if (this.timeout) clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                this.search();
            }, 1000);
        },

        search() {
            window.scrollTo(0, 0);
            this.nb_showed = 1;

            const options = {
                includeStore: true,
                keys: ['title', 'id', 'title_romanji', 'title_english', 'others'],
            };

            const fuse = new Fuse(animesStore.all, options);
            const result = fuse.search(this.query).map((a) => a.item);

            if (result.length <= 0) {
                animesStore.result = chunkify(animesStore.all, 30);
                return;
            }

            animesStore.result = chunkify(result, 30);
        },
    },

    mounted() {
        animesStore.result = chunkify(animesStore.all, 30);
        window.onscroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                this.nb_showed += 1;
            }
        };
    },

    components: { AnimeCardComponent },
};
</script>

<script setup lang="ts">
import { animesStore } from '@/stores/animeStore';
</script>
