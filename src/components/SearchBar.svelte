<script lang="ts">
    import Fuse from "fuse.js";
    import { animeVostFr, animesVostFr } from "../stores/animeStore";

    let input: string;

    let isVf = false;
    let isVostfr = true;

    const fuse = new Fuse($animeVostFr, {
        keys: ["title", "id", "title_english", "title_romanji", "others"]
    });

    async function search() {
        let lastInput = input;
        let isOk = false;
        
        await new Promise((resolve) => {
            setTimeout(() => {
                if (lastInput == input) isOk = true;
                resolve(null)
            }, 300);
        });

        if (isOk) {
            const result = fuse.search(input).map(result => result.item);

            if (result.length <= 0) {
                $animeVostFr = $animesVostFr;
                return;
            }

            $animeVostFr = result;
        }
    }

    async function toggleVf() {
        isVostfr = false;
        isVf = true;

        $animeVostFr = await (await fetch("https://neko-sama.fr/animes-search-vf.json")).json();
        $animesVostFr = $animeVostFr;

        search();
    }

    async function toggleVostfr() {
        isVostfr = true;
        isVf = false;

        $animeVostFr = await (await fetch("https://neko-sama.fr/animes-search-vostfr.json")).json();
        $animesVostFr = $animeVostFr;

        search();
    }
</script>

<input on:keyup={search} bind:value={input} type="text" class="w-full p-3 bg-zinc-800 focus:outline-none mb-5" placeholder="rechercher un anime...">

<div class="grid grid-cols-2 mb-5 bg-zinc-800">
    <button class="{isVf?"bg-white text-zinc-900":""} px-10 py-5 w-full" on:click={toggleVf}>VF</button>
    <button class="{isVostfr?"bg-white text-zinc-900":""} px-10 py-5 w-full" on:click={toggleVostfr}>VOSTFR</button>
</div>