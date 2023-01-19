<script lang="ts">
    import { animesVostFr, animeVostFr } from "../stores/animeStore";

    let hasNoCors: Boolean;

    fetch("https://neko-sama.fr/animes-search-vostfr.json").then(data => data.json()).then(animes => {
        $animeVostFr = animes;
        $animesVostFr = animes;
        console.log(animes);

        hasNoCors = true;
    }).catch(() => {
        hasNoCors = false;
    });
</script>

{#if hasNoCors == false}
    <div class="w-screen h-screen grid justify-center items-center">
        <div class="flex items-center gap-5">
            <div class="text-lg bg-red-900 px-5 py-10 rounded bg-opacity-40">
                <div class="grid w-full place-items-center">
                    <img src="./no.svg" class="w-20 mb-5" alt="">
                </div>

                Pour le bon fonctionnement du site<br>
                installez l'extension <span class="text-red-600 font-semibold">Allow CORS</span>

                <ul class="mt-5">
                    <li class="flex items-center gap-3">
                        <img class="w-5" src="./chrome.svg" alt="">
                        <a target="_blank" rel="noreferrer" href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">Installer pour chrome</a>
                    </li>

                    <li class="flex items-center gap-3">
                        <img class="w-5" src="./firefox.svg" alt="">
                        <a target="_blank" rel="noreferrer" href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf">Installer pour firefox</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
{/if}

{#if hasNoCors == true}
    <slot/>
{/if}