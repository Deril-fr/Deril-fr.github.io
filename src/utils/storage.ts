import type AnimeWatched from "@/types/AnimeWatched";
import { removeDuplicates } from "./removeDuplicates";
import { auth, database } from "./database";
import { set, ref, get, update, child, remove } from "firebase/database";
import { watchListStore } from "@/stores/watchListStore";

export async function setAnime(episode: AnimeWatched) {
    if (watchListStore.find((e) => e.id === episode.id && e.lang === episode.lang)) {
        // update anime
        const index = watchListStore.indexOf(watchListStore.find((e) => e.id === episode.id && e.lang === episode.lang) as AnimeWatched);
        // check current episode is not greater than the new one 
        if (watchListStore[index].episode > episode.episode) {
            return;
        }
        watchListStore[index] = episode;
    } else {
        // add anime
        watchListStore.push(episode);
    }

    const user = auth.currentUser;
    if (user) {
        const childRef = child(ref(database), `users/${user.uid}/animeList/${episode.id}`);
        set(childRef, episode);
    }
}

export function getAnime(id: number, episode: number, lang: string): AnimeWatched | undefined {
    return watchListStore.find((a: AnimeWatched) => a.id === id && a.episode === episode && a.lang === lang);
}

export function removeAnime(id: number, lang: string) {
    watchListStore.splice(watchListStore.indexOf(watchListStore.find((a: AnimeWatched) => a.id === id && a.lang === lang) as AnimeWatched));
    const user = auth.currentUser;
    if (user) {
        const childRef = child(ref(database), `users/${user.uid}/animeList/${id}`);
        remove(childRef);
    }
}


export async function getAnimeList(): Promise<AnimeWatched[]> {
    // get Anime from localStorage 
    let tempData: AnimeWatched[] = [];
    const user = auth.currentUser;
    if (user) {
        console.log("user is logged in");
        const childRef = child(ref(database), `users/${user.uid}`);
        get(childRef).then((snapshot) => {
            console.log(snapshot.val());
            if (snapshot.exists()) {
                const data = snapshot.val();
                tempData = Object.values(data.animeList);
                // merge localStorage and firebase data
                tempData.forEach((anime) => {
                    setAnime(anime);
                });
            }else{
                watchListStore.forEach((anime) => {
                     setAnime(anime);
                });
            }
        });
    }else{
        console.log("user is not logged in");
    }
    // if animeList is null, return undefined
    const animeListArray = watchListStore.length > 0 ? watchListStore : tempData;
    // return animeListArray
    return animeListArray;
}

