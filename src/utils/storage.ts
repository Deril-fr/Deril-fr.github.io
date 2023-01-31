import type { AnimeWatched } from "@/types/Anime";
import { removeDuplicates } from "./removeDuplicates";
import { db, auth } from "./database";
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function setAnime(episode: AnimeWatched) {
    // if animeList is null, create a new array
    let currentEpisodes: AnimeWatched[] = await getAnimeList(false);
    // if animeListArray contains anime, return
    if (currentEpisodes.find((e) => e.id === episode.id && e.lang === episode.lang)) {
        currentEpisodes = currentEpisodes.filter((e) => e.id !== episode.id || e.lang !== episode.lang);
        currentEpisodes.push(episode);
    } else {
        currentEpisodes.push(episode);
    }

    localStorage.setItem("animeList", JSON.stringify(removeDuplicates(currentEpisodes)));
    // set animeListArray to localStorage

}

export function getAnime(id: number, episode: number, lang: string): AnimeWatched | undefined {
    // get Anime from localStorage 
    const animeList = localStorage.getItem("animeList");
    // if animeList is null, return undefined
    const animeListArray: AnimeWatched[] = animeList ? JSON.parse(animeList) : [];
    // return anime if found
    return animeListArray.find((a: AnimeWatched) => a.id === id && a.episode === episode && a.lang === lang);
}

export function removeAnime(id: number) {
    // get Anime from localStorage 
    const animeList = localStorage.getItem("animeList");
    // if animeList is null, return undefined
    const animeListArray: AnimeWatched[] = animeList ? JSON.parse(animeList) : [];
    // remove anime if found
    animeListArray.splice(animeListArray.findIndex((a: AnimeWatched) => a.id === id), 1);
    // set animeListArray to localStorage
    localStorage.setItem("animeList", JSON.stringify(animeListArray));
}


export async function getAnimeList(remote: boolean = true): Promise<AnimeWatched[]> {
    // get Anime from localStorage 
    const animeList = localStorage.getItem("animeList");
    let tempData: AnimeWatched = [] as unknown as AnimeWatched;
    if (remote) {
        const user = auth.currentUser;
        if (user) {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap) {
                const data = docSnap.data();
                if (data) {
                    // check if at least one anime is in the list as changed from the remote one
                    if (animeList) {
                        if (data.animeList && data.animeList.length > 0) {
                            let animesWatched = JSON.parse(animeList) as AnimeWatched[];
                            let changed = false;
                            if (animesWatched.length !== data.animeList.length) {
                                changed = true;
                            } else {
                                for (let i = 0; i < data.animeList.length; i++) {
                                    const anime = data.animeList[i] as AnimeWatched;
                                    const animeWatched = animesWatched.find((a) => a.id === anime.id && a.lang === anime.lang);
                                    if (animeWatched) {
                                        if (animeWatched.episode !== anime.episode || animeWatched.time !== anime.time) {
                                            changed = true;
                                            break;
                                        }
                                    }
                                }
                            }
                            if (changed) {
                                updateDoc(docRef, {
                                    animeList: animesWatched
                                });
                            }
                        } 

                    }else {
                            tempData = data.animeList ? data.animeList as AnimeWatched : [] as unknown as AnimeWatched;
                            localStorage.setItem("animeList", JSON.stringify(tempData));
                    }

                }else {
                    if (animeList) {
                        setDoc(docRef, {
                            animeList: JSON.parse(animeList)
                        });
                    }
                }
            }
        }
    }
        // if animeList is null, return undefined
        const animeListArray: AnimeWatched[] = animeList ? JSON.parse(animeList) : tempData;
        // return animeListArray
        return animeListArray;
    }

