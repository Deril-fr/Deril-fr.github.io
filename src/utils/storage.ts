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
        const childRef = child(ref(database), `users/${user.uid}`);
        get(childRef).then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                tempData = Object.values(data.animeList);
                /**
                * Compare watchListStore with tempData
                * If watchListStore is empty, set watchListStore to tempData
                * If watchListStore is not empty, compare watchListStore with tempData and check if there are more anime in tempData than watchListStore
                * If there are more anime in tempData than watchListStore, set watchListStore to tempData by checking if the anime is already in watchListStore and the episode or the time is greater than the one in watchListStore
                * If there are less anime in tempData than watchListStore, set watchListStore to tempData by checking if the anime is already in watchListStore and the episode or the time is greater than the one in watchListStore and remove the anime that is not in tempData
                **/

                if (watchListStore.length === 0) {
                    watchListStore.push(...tempData);
                } else {
                    // check if there are more anime in tempData than watchListStore
                    if (tempData.length > watchListStore.length) {
                        // check if the anime is already in watchListStore and the episode or the time is greater than the one in watchListStore
                        tempData.forEach((anime) => {
                            if (watchListStore.find((e) => e.id === anime.id && e.lang === anime.lang)) {
                                const index = watchListStore.indexOf(watchListStore.find((e) => e.id === anime.id && e.lang === anime.lang) as AnimeWatched);
                                if (watchListStore[index].episode < anime.episode) {
                                    watchListStore[index] = anime;
                                }
                            } else {
                                watchListStore.push(anime);
                            }
                        });
                    } else {
                        // check if the anime is already in watchListStore and the episode or the time is greater than the one in watchListStore
                        console.log("tempData is less than watchListStore");
                        watchListStore.forEach((anime) => {
                            if (tempData.find((e) => e.id === anime.id && e.lang === anime.lang)) {
                                const index = tempData.indexOf(tempData.find((e) => e.id === anime.id && e.lang === anime.lang) as AnimeWatched);
                                if (tempData[index].episode < anime.episode) {
                                    tempData[index] = anime;
                                }
                            } else {
                                removeAnime(anime.id, anime.lang);
                            }
                        });
                        watchListStore.push(...tempData);
                    }
                }
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

