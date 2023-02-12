import{c as b,a as x}from"./animehelper-ed8785b0.js";import{a as y}from"./timer-a538d2fe.js";import{_ as k,a as N,w as c}from"./index-8714788b.js";import{r as E,o as t,c as i,a,b as v,w as z,t as r,O as V,n as j,P as C,u as w,G as R,H as S,q as $}from"./vendor-4224693f.js";const D={props:{anime:Object,animeReal:Object,asNew:Boolean},methods:{convertEpisodeToNumber:b,getDuration:y}},A={key:0},B={key:0,class:"bg-green-500 p-3 ml-16 rounded absolute"},L={key:1,class:"bg-red-500 p-3 rounded absolute"},O={class:"w-full rounded object-cover aspect-[9/13]",alt:""},q={class:"mt-5 grid"},F={class:"text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden"},H={key:1},G=V('<div class="w-full animate-pulse grid gap-5"><div class="w-full rounded object-cover aspect-[9/13] bg-zinc-800"></div><div class="grid gap-2"><h1 class="bg-zinc-800 text-zinc-800">lorem ipsum sin dolores</h1><h1 class="bg-zinc-800 text-zinc-800 w-[40%]">l</h1></div></div>',1),P=[G];function T(u,l,s,d,e,o){var _,m,h;const n=E("lazy");return s.anime?(t(),i("div",A,[a("div",{class:"w-full",onClick:l[0]||(l[0]=Z=>{var g,f,p;return u.$router.push("/anime/"+((g=s.anime)==null?void 0:g.lang)+"/"+((f=s.animeReal)==null?void 0:f.id)+"/episode/"+((p=s.anime)==null?void 0:p.episode.toString()))})},[s.asNew?(t(),i("p",B,"NEW épisodes dispo ! ")):v("",!0),((_=s.anime)==null?void 0:_.lang)=="vf"?(t(),i("p",L,"VF")):v("",!0),z(a("img",O,null,512),[[n,{src:(m=s.animeReal)==null?void 0:m.url_image,loading:"/default_thumbnail.png"}]]),a("div",q,[a("h5",F,r((h=s.animeReal)==null?void 0:h.title),1),a("h6",null,"Episode "+r(s.anime.episode)+" - "+r(o.getDuration(s.anime.time)),1)])])])):(t(),i("div",H,P))}const W=k(D,[["render",T]]),I={class:"px-10"},J={class:"flex justify-between py-5"},K=a("h1",{class:"text-3xl font-bold"},"Accueil",-1),M=[K],Q={key:0,class:"grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-10"},U={key:1,class:"flex justify-center items-center h-[80vh]"},X=a("h1",{class:"text-3xl font-bold"},"Aucun anime dans l'historique",-1),Y=[X],ae=j({__name:"AnimeHistory",setup(u){let l=C();return x().then(s=>{let d=N.all.filter(e=>c.find(o=>o.id===e.id&&o.lang===e.lang));l.value=d.map(e=>{let o=s.find(n=>n.anime_url===e.url);return{animes:e,lastEpisodes:c.find(n=>n.id===e.id),asNew:o?c.find(n=>n.id===e.id).episode<b(o.episode):!1}})}),(s,d)=>(t(),i("section",I,[a("div",J,[a("div",{onClick:d[0]||(d[0]=e=>s.$router.push("/")),class:"cursor-pointer"},M)]),w(l)?(t(),i("div",Q,[(t(!0),i(R,null,S(w(l),e=>(t(),i("div",{key:e.lastEpisodes.id+e.lastEpisodes.lang},[$(W,{animeReal:e.animes,anime:e.lastEpisodes,asNew:e.asNew},null,8,["animeReal","anime","asNew"])]))),128))])):(t(),i("div",U,Y))]))}});export{ae as default};