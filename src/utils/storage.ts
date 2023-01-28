import type { AnimeWatched } from "@/types/Anime";
import { removeDuplicates } from "./removeDuplicates";

export function setAnime(episode: AnimeWatched) {
    // if animeList is null, create a new array
    let currentEpisodes: AnimeWatched[] = getAnimeList();
    // if animeListArray contains anime, return
    if (currentEpisodes.find((e) => e.id === episode.id && e.lang === episode.lang)) {
        currentEpisodes = currentEpisodes.filter((e) => e.id !== episode.id || e.lang !== episode.lang);
        currentEpisodes.push(episode);
      }else{
        currentEpisodes.push(episode);
        }
      
    // set animeListArray to localStorage
    localStorage.setItem("animeList", JSON.stringify(removeDuplicates(currentEpisodes)));
}

export function getAnime(id: number, episode: number, lang: string): AnimeWatched | undefined {
    // get Anime from localStorage 
    const animeList = localStorage.getItem("animeList");
    // if animeList is null, return undefined
    const animeListArray: AnimeWatched[]  = animeList ? JSON.parse(animeList) : [];
    // return anime if found
    return animeListArray.find((a: AnimeWatched) => a.id === id && a.episode === episode && a.lang === lang);
}

export function removeAnime(id: number) {
    // get Anime from localStorage 
    const animeList = localStorage.getItem("animeList");
    // if animeList is null, return undefined
    const animeListArray: AnimeWatched[]  = animeList ? JSON.parse(animeList) : [];
    // remove anime if found
    animeListArray.splice(animeListArray.findIndex((a: AnimeWatched) => a.id === id), 1);
    // set animeListArray to localStorage
    localStorage.setItem("animeList", JSON.stringify(animeListArray));
}

export function getAnimeList(): AnimeWatched[] {
    // get Anime from localStorage 
    const animeList = localStorage.getItem("animeList");
    // if animeList is null, return undefined
    const animeListArray: AnimeWatched[]  = animeList ? JSON.parse(animeList) : [];
    // return animeListArray
    return animeListArray;
}
