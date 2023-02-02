import type Anime from '@/types/Anime';
import { reactive } from 'vue';

export const animesStore: { vf: Anime[]; vostfr: Anime[]; all: Anime[]; result: Anime[][] } = reactive({
    vf: [],
    vostfr: [],
    all: [],
    result: [],
});
