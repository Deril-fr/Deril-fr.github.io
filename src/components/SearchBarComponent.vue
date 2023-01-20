<script lang="ts">
import { animesStore } from '@/stores/animeStore';
import { removeDuplicates } from "@/utils/removeDuplicates";

export default {
    data() {
        return {
            query: '',
        };
    },

    methods: {
        async search() {
            console.log("test");
            let oldQuery = this.query;

            await new Promise(function (ok) {
                setTimeout(function () {
                    ok(null);
                }, 500);
            });

            if (oldQuery !== this.query) return;
            const Fuse = (await import('fuse.js')).default;
            const fuse = new Fuse(animesStore.all, {
                keys: ['title', 'title_english', 'title_romanji', 'genres', 'others', 'id'],
            });
            const result = fuse.search(this.query);
            const finaLResult = removeDuplicates(result.map((a) => a.item));
            animesStore.result = finaLResult.length > 0 ? finaLResult : animesStore.all;
        },
    },
};
</script>

<template>
    <input type="text" @input="search" v-model="query" placeholder="rechercher un anime..." class="w-full p-5 bg-zinc-800 rounded my-5 focus:outline-none">
</template>