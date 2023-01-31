import type { AnimeWatched } from "@/types/Anime";
import { removeDuplicates } from "./removeDuplicates";
import { db, auth } from "./database";
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function setAnime(episode: AnimeWatched) {
    // if animeList is null, create a new array
    let currentEpisodes: AnimeWatched[] = await getAnimeList();
    // if animeListArray contains anime, return
    if (currentEpisodes.find((e) => e.id === episode.id && e.lang === episode.lang)) {
        currentEpisodes = currentEpisodes.filter((e) => e.id !== episode.id || e.lang !== episode.lang);
        currentEpisodes.push(episode);
      }else{
        currentEpisodes.push(episode);
        } 
        
        localStorage.setItem("animeList", JSON.stringify(removeDuplicates(currentEpisodes)));
       
        const user = auth.currentUser;
        if (user) {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap) {
                setDoc(docRef, {
                    animeList: currentEpisodes
                });
            } else {
                updateDoc(docRef, {
                    animeList: currentEpisodes
                });
            }
        }
        // set animeListArray to localStorage
   
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


export async function getAnimeList(): Promise<AnimeWatched[]> {
    // get Anime from localStorage 
    const animeList = localStorage.getItem("animeList");
    let tempData: AnimeWatched = [] as unknown as AnimeWatched;

    if(animeList === null){
        const user = auth.currentUser;
        if (user) {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap) {
                const data = docSnap.data();
                if(data){
                    tempData = data.animeList ? data.animeList as AnimeWatched : [] as unknown as AnimeWatched;
                    localStorage.setItem("animeList", JSON.stringify(data.animeList));
                }else{
                    localStorage.setItem("animeList", JSON.stringify([]));
                }
            } else {
                localStorage.setItem("animeList", JSON.stringify([]));
            }
        }
    }
    // if animeList is null, return undefined
    const animeListArray: AnimeWatched[]  = animeList ? JSON.parse(animeList) : tempData;
    // return animeListArray
    return animeListArray;
}

