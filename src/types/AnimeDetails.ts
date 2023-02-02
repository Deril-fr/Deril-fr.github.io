import EpisodeReal from '@/types/EpisodeReal';

export default interface AnimeDetails {
    synopsis: string;
    episodes: EpisodeReal[];
    coverURL: string;
}
