<script lang="ts">
import FavoriteAnimeComponent from '@/components/FavoriteAnimeComponent.vue';
import ResumeHomePageComponent from '@/components/ResumeHomePageComponent.vue';

export default { components: { FavoriteAnimeComponent, ResumeHomePageComponent } };
</script>

<script setup lang="ts">
import { watchListStore } from '@/stores/watchListStore';
</script>

<template>
    <FavoriteAnimeComponent />
    <ResumeHomePageComponent v-if="watchListStore.length > 0" />
</template>
