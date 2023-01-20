<script setup lang="ts">
  import { ref } from 'vue';
  import { animesStore } from '@/stores/animeStore';

  let isNoCorsInstalled = ref(false);
  loadAnimesAndCheckCors();

  async function loadAnimesAndCheckCors() {
    animesStore.vf = await (await fetch("https://neko-sama.fr/animes-search-vf.json")).json();
    isNoCorsInstalled.value = true;

    if (isNoCorsInstalled) {
      animesStore.vostfr = await (await fetch("https://neko-sama.fr/animes-search-vostfr.json")).json();
    }
  }
</script>

<template>
  
  <main class="bg-zinc-900 text-white min-h-screen px-10">

    <div class="w-screen h-screen grid justify-items-center items-center" v-if="isNoCorsInstalled == false">
      <div class="bg-red-900 bg-opacity-50 p-5 rounded">
        <h1>L'extension <span class="text-red-500">Allow CORS</span> est requise pour utiliser notre site web</h1>
      </div>
    </div>

    <div v-if="isNoCorsInstalled && animesStore.vostfr.length > 0">
      <RouterView />
    </div>
  </main>

</template>