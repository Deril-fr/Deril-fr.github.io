<script lang="ts">
    import Fuse from "fuse.js";
    import { animeVostFr, animesVostFr } from "../stores/animeStore";

    let input: string;

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
</script>

<input on:keyup={search} bind:value={input} type="text" class="w-full p-3 bg-zinc-800 focus:outline-none mb-5" placeholder="rechercher un anime...">