<script lang="ts">
    import type { Anime } from "../types/Anime";


    export let anime: Anime;
</script>

<div class="w-full grid">
    <img class="w-full aspect-[9/15] object-cover" src="{anime.url_image}" alt="">
    <h5 class="text-xl font-semibold mt-4 text-ellipsis whitespace-nowrap overflow-hidden">{anime.title}</h5>
    <h6>{anime.start_date_year} - {anime.nb_eps}</h6>
</div>