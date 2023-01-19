<script lang="ts">
    import { ActualAnime } from "../stores/animeStore";
    import type { Anime } from "../types/Anime";
    let currentAnime = $ActualAnime;
    $: {
        currentAnime = $ActualAnime;
        console.log($ActualAnime);
    }
</script>

<div>
    {#if currentAnime}
        <h1>{currentAnime.title}</h1>
    {:else}
        <h1>404</h1>
        <p>Not found</p>
    {/if}
</div>
