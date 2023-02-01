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
    localStorage.setItem("lastUpdated", String(Date.now()));
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

export function removeAnime(id: number, lang: string) {
    // get Anime from localStorage
    const animeList = localStorage.getItem("animeList");
    // if animeList is null, return undefined   
    const animeListArray: AnimeWatched[] = animeList ? JSON.parse(animeList) : [];
    // remove anime if found
    const newAnimeList = animeListArray.filter((a: AnimeWatched) => a.id !== id || a.lang !== lang);
    localStorage.setItem("lastUpdated", String(Date.now()));
    localStorage.setItem("animeList", JSON.stringify(newAnimeList));
}


export async function getAnimeList(remote: boolean = true): Promise<AnimeWatched[]> {
    // get Anime from localStorage 
    let animeList = localStorage.getItem("animeList");
    const lastUpdated = localStorage.getItem("lastUpdated");
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
                                if(lastUpdated && data.updatedAt) {
                                    if (Number(lastUpdated) < data.updatedAt) {
                                        localStorage.setItem("animeList", JSON.stringify(data.animeList));
                                        animeList = JSON.stringify(data.animeList);
                                    } else {
                                        await updateDoc(docRef, {
                                            animeList: JSON.parse(animeList),
                                            updatedAt: Date.now(),
                                        });
                                        localStorage.setItem("lastUpdated", String(Date.now()));
                                    }
                                } else {
                                    await updateDoc(docRef, {
                                        animeList: JSON.parse(animeList),
                                        updatedAt: Date.now(),
                                    });
                                    localStorage.setItem("lastUpdated", String(data.updatedAt));
                                }
                            }
                        } 

                    }else {
                            tempData = data.animeList ? data.animeList as AnimeWatched : [] as unknown as AnimeWatched;
                            localStorage.setItem("animeList", JSON.stringify(tempData));
                    }

                }else {
                    if (animeList) {
                        setDoc(docRef, {
                            animeList: JSON.parse(animeList),
                            updatedAt: Date.now(),
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

