import Language from '@/types/Language';
import { reactive } from 'vue';

export const languageStore: {language: Language} = reactive({
    language: Language.vostfr
})