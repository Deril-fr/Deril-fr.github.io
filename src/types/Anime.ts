export default interface Anime {
    id: number;
    title: string;
    title_english: string;
    title_romanji: string;
    title_french: null;
    others: string;
    type: string;
    status: string;
    popularity: number;
    url: string;
    genres: string[];
    url_image: string;
    score: string;
    start_date_year: string;
    nb_eps: string;
}

export interface PstreamData {
    enableTextTrackSettings: boolean
    enableTextTrackResize: boolean
    enableTextTrackExternal: boolean
    playerLogoInVideoUrl: any
    playerTitle: any
    enableAAB: boolean
    enableADI: boolean
    subtitlesvtt: Subtitlesvtt[]
    mmmmmmmmmmmmmmmmmmmm: string
}

export interface Subtitlesvtt {
    default: boolean
    file: string
    kind: string
    label: string
    lang: string
}

export interface EpisodeReal {
    episode: number;
    time: string;
    title: string;
    url: string;
    url_image: string;
}