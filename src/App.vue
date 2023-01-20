<script setup lang="ts">
  import { ref } from 'vue';
  import { animesStore } from '@/stores/animeStore';

  let isNoCorsInstalled = ref(false);

  fetch("https://neko-sama.fr/animes-search-vf.json").then(data => data.json()).then(animes => {
    animesStore.vf = animes
    isNoCorsInstalled.value = true;
  });

  if (isNoCorsInstalled) {
    fetch("https://neko-sama.fr/animes-search-vostfr.json").then(data => data.json()).then(animes => {
      animesStore.vostfr = animes
    });
  }
</script>

<template>
  
  <main class="bg-zinc-900 text-white min-h-screen px-10">
    <div class="w-screen h-screen grid justify-items-center items-center" v-if="isNoCorsInstalled == false">
      <div class="bg-red-900 bg-opacity-50 p-5 rounded">
        <h1>L'extension <span class="text-red-500">Allow CORS</span> est requise pour utiliser notre site web</h1>
      </div>
    </div>
    <div v-else>
    <RouterView />
    </div>
  </main>

</template>