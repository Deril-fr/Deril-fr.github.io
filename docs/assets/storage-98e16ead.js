import{r as s}from"./removeDuplicates-4a376775.js";function l(t){let i=r();i.find(n=>n.id===t.id&&n.lang===t.lang)&&(i=i.filter(n=>n.id!==t.id||n.lang!==t.lang),i.push(t),console.log("Updated episode")),localStorage.setItem("animeList",JSON.stringify(s(i)))}function g(t,i,n){const a=localStorage.getItem("animeList");return(a?JSON.parse(a):[]).find(e=>e.id===t&&e.episode===i&&e.lang===n)}function r(){const t=localStorage.getItem("animeList");return t?JSON.parse(t):[]}export{r as a,g,l as s};
