<script lang="ts">
import FavoriteAnimeComponent from '@/components/FavoriteAnimeComponent.vue';
import ResumeHomePageComponent from '@/components/ResumeHomePageComponent.vue';
import NavBarComponent from '@/components/NavBarComponent.vue';

export default { components: { FavoriteAnimeComponent, ResumeHomePageComponent, NavBarComponent } };
</script>

<script setup lang="ts">
import { watchListStore } from '@/stores/watchListStore';
</script>

<template>
    <section class="pb-20">
        <NavBarComponent />
        <FavoriteAnimeComponent />
        <ResumeHomePageComponent v-if="watchListStore.length > 0" />
    </section>
</template>
