import type { PstreamData, EpisodeReal } from "@/types/Anime";
import { load } from "cheerio";

export default async function getM3U8(episodeUrl: string) {
    const neko_data = await (await fetch(episodeUrl)).text();
    const pstream_url = /(else {\n(.*)video\[0] = ')(.*)(';)/gm.exec(neko_data)?.[3] as string;
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



export async function getStreamtapeMP4(episodeUrl: string) {
    const neko_data = await (await fetch(episodeUrl)).text();
    console.log("Neko was fetched");
    const streamtape_url = /(else {\n(.*)video\[0] = ')(.*)(';)/gm.exec(neko_data)?.[3] as string;

    console.log("Streamtape url was fetched", streamtape_url);
    const streamtape_data = await (await fetch(streamtape_url)).text();
    const cloudflare_bypass = load(streamtape_data);
    const form_url = cloudflare_bypass("#challenge-form").attr("action");
    if (!form_url) return eval(/(document\.getElementById\(\'robotlink\'\)\.innerHTML = )(.*)(;)/gm.exec(streamtape_data)?.[2] as string);
    const form_data = cloudflare_bypass("#challenge-form").serialize();
    const streamtape_data2 = await (await fetch("https://streamtape.com/" + form_url, {
        method: "POST",
        headers: {
            "UserAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36 Edg/108.0.1462.46",
            "accept-encoding": " identity;q=1, *;q=0",
            "content-type": "application/x-www-form-urlencoded",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9,fr;q=0.8",
            "cache-control": "max-age=0",
            "upgrade-insecure-requests": "1",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "sec-gpc": "1",
            "te": "trailers"
        },
        body: form_data
    })).text();

    const cloudflare_bypass2 = eval(/(document\.getElementById\(\'robotlink\'\)\.innerHTML = )(.*)(;)/gm.exec(streamtape_data2)?.[2] as string);
    return cloudflare_bypass2;
}

function convertHtmlToText(html: string) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}


function convertEpisodeToNumber(episode: string) {
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

