import{r as S,o as m,c as h,a as i,b as R,w as N,t as y,d as V,i as P,g as D,e as j,f as B,R as T,h as U,j as w,k as A,s as q,l as z,m as J,n as W,p as F,u as M,q as Z,v as G,x as E,y as H,z as Q,A as X,B as K,C as Y}from"./vendor-1e31e0d3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const ee={name:"AnimeCard",props:{anime:Object}},te="/flag_france.png",b=(t,s)=>{const e=t.__vccOpts||t;for(const[n,a]of s)e[n]=a;return e},se={class:"w-full relative"},ne={key:0,src:te,class:"w-5 absolute top-3 left-3",alt:""},oe={class:"w-full rounded-t-lg object-cover aspect-[9/13]",alt:""},ae={class:"mt-5 grid"},re={class:"text-lg font-bold whitespace-nowrap text-ellipsis overflow-hidden"};function ie(t,s,e,n,a,o){var p,C,l,d,f;const c=S("lazy");return m(),h("div",{class:"w-full",onClick:s[0]||(s[0]=Pe=>{var L,$;return t.$router.push("/anime/"+((L=e.anime)==null?void 0:L.lang)+"/"+(($=e.anime)==null?void 0:$.id))})},[i("div",se,[((p=e.anime)==null?void 0:p.lang)=="vf"?(m(),h("img",ne)):R("",!0),N(i("img",oe,null,512),[[c,{src:(C=e.anime)==null?void 0:C.url_image,loading:"/default_thumbnail.png"}]])]),i("div",ae,[i("h5",re,y((l=e.anime)==null?void 0:l.title),1),i("h6",null,y((d=e.anime)==null?void 0:d.start_date_year)+" - "+y((f=e.anime)==null?void 0:f.nb_eps),1)])])}const ce=b(ee,[["render",ie]]),le={},de={role:"status"},ue=i("svg",{"aria-hidden":"true",class:"w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[i("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),i("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})],-1),fe=i("span",{class:"sr-only"},"Loading...",-1),me=[ue,fe];function he(t,s){return m(),h("div",de,me)}const _e=b(le,[["render",he]]),pe={},ge={class:"absolute h-screen w-screen top-0 left-0"},ve=i("div",{class:"w-full h-full transition bg-rose-500"},null,-1),Ce=[ve];function ye(t,s){return m(),h("div",ge,Ce)}const we=b(pe,[["render",ye]]),u=V({vf:[],vostfr:[],all:[],result:[]}),Ae={apiKey:"AIzaSyBs1bApZLJc5GBFxfEO673uvV5h8SpOqUw",authDomain:"animaflix-53e15.firebaseapp.com",databaseURL:"https://animaflix-53e15-default-rtdb.europe-west1.firebasedatabase.app",projectId:"animaflix-53e15",storageBucket:"animaflix-53e15.appspot.com",messagingSenderId:"143798438113",appId:"1:143798438113:web:763555c2a6ae9f0fc50fa0",measurementId:"G-MT3VL4G2VY"},x=P(Ae),g=D(x),k=j(x);B(x,{provider:new T("6LdgX0EkAAAAAHQb4oD9X6IquPQcXWiFO_Q8-erj"),isTokenAutoRefreshEnabled:!0});const r=V(JSON.parse(localStorage.getItem("animeList")||"[]"));U(r,()=>{localStorage.setItem("animeList",JSON.stringify(r))});async function O(t){if(r.find(e=>e.id===t.id&&e.lang===t.lang)){const e=r.indexOf(r.find(n=>n.id===t.id&&n.lang===t.lang));if(r[e].episode>t.episode)return;r[e]=t}else r.push(t);const s=g.currentUser;if(s){const e=w(A(k),`users/${s.uid}/animeList/${t.id}`);q(e,t)}}function je(t,s,e){return r.find(n=>n.id===t&&n.episode===s&&n.lang===e)}function Be(t,s){r.splice(r.indexOf(r.find(n=>n.id===t&&n.lang===s)));const e=g.currentUser;if(e){const n=w(A(k),`users/${e.uid}/animeList/${t}`);z(n)}}async function be(){let t=[];const s=g.currentUser;if(s){const n=w(A(k),`users/${s.uid}`);J(n).then(a=>{if(a.exists()){const o=a.val();t=Object.values(o.animeList),t.forEach(c=>{O(c)})}else r.forEach(o=>{O(o)})})}else console.log("user is not logged in");return r.length>0?r:t}function xe(t,s){const e=[];for(let n=0;n<t.length;n+=s)e.push(t.slice(n,n+s));return e}const ke={class:"text-white min-h-screen"},Le={key:0},$e={key:1},Ee=i("div",{class:"flex flex-col items-center justify-center h-screen"},[i("h1",{class:"text-4xl font-bold"},"JapanWatch"),i("p",{class:"text-xl"},[E("Please install the "),i("a",{href:"https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf",target:"_blank",class:"text-blue-500"},"No-Cors"),E(" extension for Chrome")])],-1),Oe=[Ee],Ie={data(){return{isNoCorsInstalled:!0}},methods:{loadAnimesAndCheckCors:async function(){try{u.vf=await(await fetch("https://deril.ketsuna.workers.dev/animes-search-vf.json")).json(),u.vostfr=await(await fetch("https://deril.ketsuna.workers.dev/animes-search-vostfr.json")).json()}catch{this.isNoCorsInstalled=!1}}},async mounted(){if(document.title="JapanWatch",await this.loadAnimesAndCheckCors(),!this.isNoCorsInstalled)return;G(g,async e=>{e&&await be()});let t=u.vf.map(e=>(e.lang="vf",e)),s=u.vostfr.map(e=>(e.lang="vostfr",e));u.all=[...t,...s],u.result=xe(u.all,30)},components:{SpinnerComponent:_e,AnimeCardComponent:ce,HomeSkeleton:we}},Re=W({...Ie,__name:"App",setup(t){return(s,e)=>{const n=F("RouterView");return m(),h("main",ke,[s.isNoCorsInstalled&&M(u).all.length>0?(m(),h("div",Le,[Z(n)])):s.isNoCorsInstalled?R("",!0):(m(),h("div",$e,Oe))])}}}),Ve="modulepreload",Se=function(t){return"/"+t},I={},_=function(s,e,n){if(!e||e.length===0)return s();const a=document.getElementsByTagName("link");return Promise.all(e.map(o=>{if(o=Se(o),o in I)return;I[o]=!0;const c=o.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(!!n)for(let d=a.length-1;d>=0;d--){const f=a[d];if(f.href===o&&(!c||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${p}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":Ve,c||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),c)return new Promise((d,f)=>{l.addEventListener("load",d),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>s())},Ne=H({history:Q("/"),routes:[{path:"/",name:"home",component:()=>_(()=>import("./HomeView-d0e007cc.js"),["assets/HomeView-d0e007cc.js","assets/animehelper-7c765e1a.js","assets/vendor-1e31e0d3.js","assets/NavBarComponent.vue_vue_type_script_setup_true_lang-7e6b0083.js"])},{path:"/latest",name:"latest",component:()=>_(()=>import("./LastReleasedView-3c13dcf4.js"),["assets/LastReleasedView-3c13dcf4.js","assets/animehelper-7c765e1a.js","assets/timer-a538d2fe.js","assets/vendor-1e31e0d3.js","assets/NavBarComponent.vue_vue_type_script_setup_true_lang-7e6b0083.js"])},{path:"/anime/:lang/:id",name:"anime",component:()=>_(()=>import("./AnimeView-bc2a18f8.js"),["assets/AnimeView-bc2a18f8.js","assets/animehelper-7c765e1a.js","assets/vendor-1e31e0d3.js"])},{path:"/anime/:lang/:id/episode/:episode",name:"episode",component:()=>_(()=>import("./EpisodeView-9ff53e73.js"),["assets/EpisodeView-9ff53e73.js","assets/animehelper-7c765e1a.js","assets/vendor-1e31e0d3.js"])},{path:"/history",name:"history",component:()=>_(()=>import("./AnimeHistory-7471ccab.js"),["assets/AnimeHistory-7471ccab.js","assets/animehelper-7c765e1a.js","assets/timer-a538d2fe.js","assets/vendor-1e31e0d3.js","assets/NavBarComponent.vue_vue_type_script_setup_true_lang-7e6b0083.js"])},{path:"/search",name:"search",component:()=>_(()=>import("./SearchView-a69b69b0.js"),["assets/SearchView-a69b69b0.js","assets/vendor-1e31e0d3.js"])}]});const v=X(Re);v.use(Ne);v.use(K);v.use(Y);v.mount("#app");export{ce as A,b as _,u as a,te as b,g as c,xe as d,je as g,Be as r,O as s,r as w};
