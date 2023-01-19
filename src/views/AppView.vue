<template>
    <v-layout>
      <v-app-bar
        color="primary"
        density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>JapanWatch</v-app-bar-title>

        <template v-slot:append>
          <v-btn icon="mdi-magnify"></v-btn>
        </template>
      </v-app-bar>
      <v-main>
        <v-container justify="center">
          <v-row>
            <v-col
              v-for="anime in animeList"
              :key="anime.id"
              cols="12"
              sm="6"
              md="4"
              lg="2"
            >
              <v-container 
                class="pa-0"
                justify="center"
              >
                <v-card
                  class="mx-auto"
                  max-width="300"
                  outlined
                >
                  <v-img
                    :src="anime.url_image"
                    height="300"
                  ></v-img>
                  <v-card-title class="justify-center">
                    {{ anime.title }}
                  </v-card-title>
                </v-card>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
</template>

<script>

import { ref, onMounted } from 'vue'
export default {
  name: 'App',
  setup() {
    const animeList = ref([])
    onMounted(async () => {
      const response = await fetch('https://neko-sama.fr/animes-search-vf.json?4f0132ead4638d44be1bde76eedfdcec')
      const data = await response.json()
      animeList.value = data;
    })
    return {
      animeList
    }
  }
}

</script>