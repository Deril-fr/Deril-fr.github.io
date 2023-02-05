import type Anime from "@/types/Anime";
import type PstreamData from "@/types/PstreamData";
import type EpisodeReal from "@/types/EpisodeReal";
import type LastEpisodes from "@/types/LastEpisodes";
import { load } from "cheerio";

export default async function getM3U8(episodeUrl: string) {
    const neko_data = await (await fetch(episodeUrl)).text();
    const pstream_url = /(\n(.*)video\[0] = ')(.*)(';)/gm.exec(neko_data)?.[3] as string;
    const pstream_data = await (await fetch(pstream_url)).text();
    let pstream_script_url = /(https:\/\/www\.pstream\.net\/u\/player-script.*)(" type)/gm.exec(pstream_data)?.[1] as string;
    let baseurl = "https://www.pstream.net";
    if (!pstream_script_url) {
        pstream_script_url = /(https:\/\/veestream\.net\/u\/player-script.*)(" type)/gm.exec(pstream_data)?.[1] as string;
        baseurl = "https://veestream.net";
    }

    if (!pstream_script_url) {
        pstream_script_url = /(https:\/\/fusevideo\.net\/u\/player-script.*)(" type)/gm.exec(pstream_data)?.[1] as string;
        baseurl = "https://fusevideo.net";
    }
    console.log(neko_data);
    if (!pstream_script_url) return false;
    const pstream_script = await (await fetch(pstream_script_url)).text();

    const m3u8_url_B64 = /e.parseJSON\(atob\(t\).slice\(2\)\)\}\(\"([^;]*)"\),/gm.exec(pstream_script)?.[1] as string;

    const pstream: PstreamData = JSON.parse(atob(m3u8_url_B64).slice(2));

    const m3u8_url = pstream.mmmmmmmmmmmmmmmmmmmm;

    const subtitlesvtt = pstream.subtitlesvtt;


    return {
        uri: m3u8_url,
        subtitles: subtitlesvtt,
        baseurl: baseurl
    };
}

function convertHtmlToText(html: string) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}


export function convertEpisodeToNumber(episode: string) {
    return Number(episode.replace("Ep. ", ""));
}

export async function getSynopsisAndEpisodes(url: string) {
    const res = await fetch("https://neko-sama.fr" + url)
    const data = await res.text();
    const parsedData = /var episodes = (.+)\;/gm.exec(data);
    let episodes: EpisodeReal[] = [], synopsis: string = "", coverURL: string = "";
    if (parsedData) {
        const parsedEpisodes = JSON.parse(parsedData[1]);
        episodes = parsedEpisodes.map((episode: EpisodeReal) => {
            return {
                episode: convertEpisodeToNumber(episode.episode.toString()),
                time: episode.time,
                title: episode.title,
                url: episode.url,
                url_image: episode.url_image,
            };
        });
      }
    const parsedSynopsis = /(<div class="synopsis">\n<p>\n)(.*)/gm.exec(data)?.[2]
    if (parsedSynopsis) {
        synopsis = parsedSynopsis
    }
    const parsedCoverURL = /(<div id="head" style="background-image: url\()(.*)(\);)/gm.exec(data)?.[2]
    if (parsedCoverURL) {
        coverURL = parsedCoverURL
    }
    return {
        synopsis: convertHtmlToText(synopsis.replace("<br/>", "\n").replace("<br />", "\n").replace("<br>", "\n")),
        episodes: episodes,
        coverURL: coverURL
    }
}

export async function getLastViewed(): Promise<LastEpisodes[]> {
    const res = await fetch("https://neko-sama.fr")
    const data = await res.text();
    let lastEpisode: LastEpisodes[]= [];
    const parsedData = /var lastEpisodes = (.+)\;/gm.exec(data);
    if (parsedData) {
       lastEpisode = JSON.parse(parsedData[1]);
    }
    return lastEpisode;
}