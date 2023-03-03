import type Anime from "@/types/Anime";
import type PstreamData from "@/types/PstreamData";
import type FuseVideoData from "@/types/FuseVideoData";
import type EpisodeReal from "@/types/EpisodeReal";
import type LastEpisodes from "@/types/LastEpisodes";
import { load } from "cheerio";
import type Subtitlesvtt from "@/types/Subtitlesvtt";

export default async function getM3U8(episodeUrl: string) {
    const neko_data = await (await fetch(episodeUrl)).text();
    const pstream_url = /(\n(.*)video\[0] = ')(.*)(';)/gm.exec(neko_data)?.[3] as string;
    const pstream_data = await (await fetch(pstream_url)).text();
    // extract base url from pstream_url to extract online the origine of the url. It's the base url of the video 
    const baseurl = pstream_url.split("/").slice(0, 3).join("/");
    const loadedHTML = load(pstream_data);
    // get every script tag in the page
    const scripts = loadedHTML("script");
    // Map every script tag to get online the src attribute 
    const scriptsSrc = scripts.map((i, el) => loadedHTML(el).attr("src")).get();
    let m3u8_url: string = "", subtitlesvtt: Subtitlesvtt[] = [];
    for (const scriptSrc of scriptsSrc) {
        const pstream_script = await (await fetch(scriptSrc)).text();
        // check if the script contains the m3u8 url
        let m3u8_url_B64 = /e.parseJSON\(atob\(t\).slice\(2\)\)\}\(\"([^;]*)"\),/gm.exec(pstream_script)?.[1] as string;
        if (m3u8_url_B64) {
            console.log(m3u8_url_B64);
            const b64 = JSON.parse(atob(m3u8_url_B64).slice(2));
            const pstream: PstreamData = b64;
            m3u8_url = Object.values(pstream).find((data: any) => {
                // check if data is a string
                if (typeof data === "string") {
                    return data.startsWith("https://");
                }
            });
            // check if the script contains the subtitles
            subtitlesvtt = pstream.subtitlesvtt;
            break;
        } else {
            m3u8_url_B64 = /e.parseJSON\(n\)}\(\"([^;]*)"\),/gm.exec(pstream_script)?.[1] as string;
            if (m3u8_url_B64) {
                console.log(m3u8_url_B64);
                const b64 = JSON.parse(atob(m3u8_url_B64).slice(2));
                const pstream: PstreamData = b64;
                m3u8_url = Object.values(pstream).find((data: any) => {
                    // check if data is a string
                    if (typeof data === "string") {
                        return data.startsWith("https://");
                    }
                });
                // check if the script contains the subtitles
                subtitlesvtt = pstream.subtitlesvtt;
                break;
            } else {
                m3u8_url_B64 = /n=atob\("([^"]+)"/gm.exec(pstream_script)?.[1] as string;
                if (m3u8_url_B64) {
                    console.log(m3u8_url_B64);
                    const b64 = JSON.parse(atob(m3u8_url_B64).replace(/\|\|\|/,"").slice(29));
                    const pstream: PstreamData = b64;
                    m3u8_url = Object.values(pstream).find((data: any) => {
                        // check if data is a string
                        if (typeof data === "string") {
                            return data.startsWith("https://");
                        }
                    });
                    // check if the script contains the subtitles
                    subtitlesvtt = pstream.subtitlesvtt;
                    break;
                }
            }
        }
    }
    if (m3u8_url !== "") {
        return {
            uri: m3u8_url,
            subtitlesvtt: subtitlesvtt,
            baseurl: baseurl
        }
    } else {
        return false;
    }
}

function convertHtmlToText(html: string) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
}


export function convertEpisodeToNumber(episode: string) {
    return Number(episode.replace("Ep. ", ""));
}

export async function getSynopsisAndEpisodes(url: string) {
    const res = await fetch("https://185.146.232.127" + url)
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
    const res = await fetch("https://185.146.232.127")
    const data = await res.text();
    let lastEpisode: LastEpisodes[] = [];
    const parsedData = /var lastEpisodes = (.+)\;/gm.exec(data);
    if (parsedData) {
        lastEpisode = JSON.parse(parsedData[1]);
    }
    return lastEpisode;
}