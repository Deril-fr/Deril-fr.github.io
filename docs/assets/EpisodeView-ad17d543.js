import{a as i,b as o}from"./index-fa9ab936.js";import{g as u,a as n}from"./animehelper-424990e7.js";import{n as l,s as d,c as p,b as c,o as h}from"./vendor-ca0e2a6b.js";const f={data(){return{currentEpisode:this.$router.currentRoute.value.params.episode,language:this.$router.currentRoute.value.params.lang,animeId:this.$router.currentRoute.value.params.id,player:{volume:100,currentTime:0,duration:0,paused:!0,controls:!0,muted:!1,src:"",video:null},video:l()}},async mounted(){if(this.language!="vf"&&this.language!="vostfr")return this.$router.push("/");let r=i[this.language].find(e=>e.id.toString()===this.animeId);if(!r)return this.$router.push("/");let s=(await u(r.url)).episodes.find(e=>e.episode.toString()==this.currentEpisode);if(!s)return this.$router.push("/");let t=await n("https://neko-sama.fr"+s.url);if(!t)return this.$router.push("/");if(this.video={mp4:!1,uri:t.uri,available:!0,baseurl:t.baseurl},this.video&&this.video.available){let e=new d;e.loadSource(this.video.uri),e.attachMedia(this.$refs.player),console.log(this.$refs.player)}}},m={ref:"player",controls:"",class:"w-full h-screen"};function v(r,a,s,t,e,g){return h(),p("div",null,[c("video",m,null,512)])}const b=o(f,[["render",v]]);export{b as default};
