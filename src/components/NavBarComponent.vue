<script lang="ts">
export default {
    data() {
        return {
            darken: false,
        };
    },

    methods: {
        handleScroll() {
            if (window.scrollY > 10) return (this.darken = true);
            else return (this.darken = false);
        },

        signIn() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider);
        },

        logOut() {
            signOut(auth);
            location.reload();
        },
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },

    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
};
</script>

<script setup lang="ts">
import { auth } from '@/utils/database';
import { GoogleAuthProvider, signInWithPopup, signOut } from '@firebase/auth';
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="fixed z-50 px-20 py-10 uppercase w-full transition" :class="darken ? 'bg-zinc-900' : ''">
        <ul class="flex justify-between items-center">
            <li>
                <ul class="flex gap-10 w-full">
                    <router-link to="/" :class="$router.currentRoute.value.path == '/' ? 'font-bold' : ''">Accueil</router-link>
                    <router-link to="/latest" :class="$router.currentRoute.value.path == '/latest' ? 'font-bold' : ''">Dernières mises à jour</router-link>
                    <router-link to="/history" :class="$router.currentRoute.value.path == '/history' ? 'font-bold' : ''">Historique</router-link>
                </ul>
            </li>

            <li>
                <ul class="flex gap-5">
                    <li>
                        <router-link to="/search"><span class="material-symbols-outlined">search</span></router-link>
                    </li>
                    <li>
                        <button class="font-semibold uppercase" v-if="!auth.currentUser" @click="signIn()">connexion</button>
                        <button class="font-semibold uppercase" v-else @click="logOut()">
                            déconnexion <span class="font-normal">de {{ auth.currentUser.displayName }}</span>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
