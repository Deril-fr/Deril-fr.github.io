import type Anime from "@/types/Anime";
import { language } from "@/types/Anime";
import { reactive } from "vue";

export const animesStore: {vf: Anime[], vostfr: Anime[]} = reactive({
    vf: [],
    vostfr: []
})

export const languageStore: {language: language} = reactive<{
    language: language}>({
    language: language.vf
})