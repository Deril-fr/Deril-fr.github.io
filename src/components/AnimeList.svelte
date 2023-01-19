<script lang="ts">
    import { animeVostFr } from "../stores/animeStore";
    import type { Anime } from "../types/Anime";
    import chunk from "../utils/chunkify";
    import AnimeCard from "./AnimeCard.svelte";


    let animeChunks: Anime[][] = [];
    $: {
        animeChunks = chunk($animeVostFr, 20);
        console.log($animeVostFr);
    }

    let page = 0;

    function changePage(p: number) {
        window.scrollTo(0, 0);

        if (p == -1) {
            page = animeChunks.length - 1;
            return;
        }

        if (p == animeChunks.length) {
            page = 0
            return;
        }

        page = p;
    }

</script>

{#if $animeVostFr.length > 0}
<section class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-10">
    {#each animeChunks[page] as anime}
        <AnimeCard bind:anime/>
    {/each}
</section>

<div class="flex justify-between mt-10">
    <button on:click={() => changePage(page - 1)}>previous</button>
    <p>{page+1}/{animeChunks.length}</p>
    <button on:click={() => changePage(page + 1)}>next</button>
</div>
{/if}