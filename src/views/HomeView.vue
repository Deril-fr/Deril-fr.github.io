<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script>

const site_name = 'Japan Watch'
const site_description = 'Le seul site pour regardez vos anime préférés en streaming sans aucune publicité.'
const site_url = 'https://deril-fr.github.io/'
const site_image = 'https://deril-fr.github.io/favicon.ico'


export default {
  metaInfo: {
    // Les enfants peuvent remplacer le titre.
    title: 'Japan Watch',
    // Résultat : Titre de ma page ← Mon site
    // Si un enfant change le titre en "Mon autre titre de page",
    // il deviendra : Mon autre titre de page ← Mon site
    titleTemplate: '%s ← Mon Site',
    // Définissez les métabalises ici.
    meta: [
      {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: site_description},
      {name: 'og:title', content: site_name},
      {name: 'og:description', content: site_description},
      {name: 'og:image', content: site_image},
      {name: 'og:url', content: site_url},
      {name: 'og:site_name', content: site_name},
      {name: 'og:locale', content: 'fr_FR'},
      {name: 'og:type', content: 'website'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:site', content: '@deril_fr'},
      {name: 'twitter:creator', content: '@deril_fr'},
      {name: 'twitter:title', content: site_name},
      {name: 'twitter:description', content: site_description},
      {name: 'twitter:image', content: site_image},
      {name: 'twitter:url', content: site_url},
      {name: 'twitter:domain', content: 'deril-fr.github.io'},
    ]
  }
}
</script>