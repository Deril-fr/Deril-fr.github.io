function Yo(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Qo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=ve(s)?Gf(s):Qo(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(ve(t))return t;if(ce(t))return t}}const zf=/;(?![^(]*\))/g,Kf=/:([^]+)/,qf=/\/\*.*?\*\//gs;function Gf(t){const e={};return t.replace(qf,"").split(zf).forEach(n=>{if(n){const s=n.split(Kf);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Jo(t){let e="";if(ve(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Jo(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qf=Yo(Yf);function pu(t){return!!t||t===""}const QC=t=>ve(t)?t:t==null?"":H(t)||ce(t)&&(t.toString===vu||!$(t.toString))?JSON.stringify(t,_u,2):String(t),_u=(t,e)=>e&&e.__v_isRef?_u(t,e.value):Bn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:gu(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!H(e)&&!yu(e)?String(e):e,le={},Un=[],tt=()=>{},Jf=()=>!1,Xf=/^on[^a-z]/,ur=t=>Xf.test(t),Xo=t=>t.startsWith("onUpdate:"),Pe=Object.assign,Zo=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zf=Object.prototype.hasOwnProperty,Q=(t,e)=>Zf.call(t,e),H=Array.isArray,Bn=t=>hr(t)==="[object Map]",gu=t=>hr(t)==="[object Set]",$=t=>typeof t=="function",ve=t=>typeof t=="string",ea=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",mu=t=>ce(t)&&$(t.then)&&$(t.catch),vu=Object.prototype.toString,hr=t=>vu.call(t),ep=t=>hr(t).slice(8,-1),yu=t=>hr(t)==="[object Object]",ta=t=>ve(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Si=Yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},tp=/-(\w)/g,_t=dr(t=>t.replace(tp,(e,n)=>n?n.toUpperCase():"")),np=/\B([A-Z])/g,os=dr(t=>t.replace(np,"-$1").toLowerCase()),fr=dr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wr=dr(t=>t?`on${fr(t)}`:""),Ds=(t,e)=>!Object.is(t,e),Ri=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fi=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ui=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let dl;const sp=()=>dl||(dl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ct;class ip{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ct,!e&&ct&&(this.index=(ct.scopes||(ct.scopes=[])).push(this)-1)}run(e){if(this.active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){ct=this}off(){ct=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function rp(t,e=ct){e&&e.active&&e.effects.push(t)}const na=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Eu=t=>(t.w&Jt)>0,bu=t=>(t.n&Jt)>0,op=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Jt},ap=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Eu(i)&&!bu(i)?i.delete(t):e[n++]=i,i.w&=~Jt,i.n&=~Jt}e.length=n}},co=new WeakMap;let Is=0,Jt=1;const uo=30;let Je;const _n=Symbol(""),ho=Symbol("");class sa{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,rp(this,s)}run(){if(!this.active)return this.fn();let e=Je,n=zt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Je,Je=this,zt=!0,Jt=1<<++Is,Is<=uo?op(this):fl(this),this.fn()}finally{Is<=uo&&ap(this),Jt=1<<--Is,Je=this.parent,zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(fl(this),this.onStop&&this.onStop(),this.active=!1)}}function fl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let zt=!0;const wu=[];function as(){wu.push(zt),zt=!1}function ls(){const t=wu.pop();zt=t===void 0?!0:t}function He(t,e,n){if(zt&&Je){let s=co.get(t);s||co.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=na()),Iu(i)}}function Iu(t,e){let n=!1;Is<=uo?bu(t)||(t.n|=Jt,n=!Eu(t)):n=!t.has(Je),n&&(t.add(Je),Je.deps.push(t))}function Rt(t,e,n,s,i,r){const o=co.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Ui(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?ta(n)&&a.push(o.get("length")):(a.push(o.get(_n)),Bn(t)&&a.push(o.get(ho)));break;case"delete":H(t)||(a.push(o.get(_n)),Bn(t)&&a.push(o.get(ho)));break;case"set":Bn(t)&&a.push(o.get(_n));break}if(a.length===1)a[0]&&fo(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);fo(na(l))}}function fo(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&pl(s);for(const s of n)s.computed||pl(s)}function pl(t,e){(t!==Je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const lp=Yo("__proto__,__v_isRef,__isVue"),Cu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ea)),cp=ia(),up=ia(!1,!0),hp=ia(!0),_l=dp();function dp(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=X(this);for(let r=0,o=this.length;r<o;r++)He(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(X)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){as();const s=X(this)[e].apply(this,n);return ls(),s}}),t}function ia(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Ap:ku:e?Au:Ru).get(s))return s;const o=H(s);if(!t&&o&&Q(_l,i))return Reflect.get(_l,i,r);const a=Reflect.get(s,i,r);return(ea(i)?Cu.has(i):lp(i))||(t||He(s,"get",i),e)?a:Se(a)?o&&ta(i)?a:a.value:ce(a)?t?Nu(a):ti(a):a}}const fp=Tu(),pp=Tu(!0);function Tu(t=!1){return function(n,s,i,r){let o=n[s];if(Gn(o)&&Se(o)&&!Se(i))return!1;if(!t&&(!Bi(i)&&!Gn(i)&&(o=X(o),i=X(i)),!H(n)&&Se(o)&&!Se(i)))return o.value=i,!0;const a=H(n)&&ta(s)?Number(s)<n.length:Q(n,s),l=Reflect.set(n,s,i,r);return n===X(r)&&(a?Ds(i,o)&&Rt(n,"set",s,i):Rt(n,"add",s,i)),l}}function _p(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Rt(t,"delete",e,void 0),s}function gp(t,e){const n=Reflect.has(t,e);return(!ea(e)||!Cu.has(e))&&He(t,"has",e),n}function mp(t){return He(t,"iterate",H(t)?"length":_n),Reflect.ownKeys(t)}const Su={get:cp,set:fp,deleteProperty:_p,has:gp,ownKeys:mp},vp={get:hp,set(t,e){return!0},deleteProperty(t,e){return!0}},yp=Pe({},Su,{get:up,set:pp}),ra=t=>t,pr=t=>Reflect.getPrototypeOf(t);function _i(t,e,n=!1,s=!1){t=t.__v_raw;const i=X(t),r=X(e);n||(e!==r&&He(i,"get",e),He(i,"get",r));const{has:o}=pr(i),a=s?ra:n?la:Ms;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function gi(t,e=!1){const n=this.__v_raw,s=X(n),i=X(t);return e||(t!==i&&He(s,"has",t),He(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function mi(t,e=!1){return t=t.__v_raw,!e&&He(X(t),"iterate",_n),Reflect.get(t,"size",t)}function gl(t){t=X(t);const e=X(this);return pr(e).has.call(e,t)||(e.add(t),Rt(e,"add",t,t)),this}function ml(t,e){e=X(e);const n=X(this),{has:s,get:i}=pr(n);let r=s.call(n,t);r||(t=X(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Ds(e,o)&&Rt(n,"set",t,e):Rt(n,"add",t,e),this}function vl(t){const e=X(this),{has:n,get:s}=pr(e);let i=n.call(e,t);i||(t=X(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Rt(e,"delete",t,void 0),r}function yl(){const t=X(this),e=t.size!==0,n=t.clear();return e&&Rt(t,"clear",void 0,void 0),n}function vi(t,e){return function(s,i){const r=this,o=r.__v_raw,a=X(o),l=e?ra:t?la:Ms;return!t&&He(a,"iterate",_n),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function yi(t,e,n){return function(...s){const i=this.__v_raw,r=X(i),o=Bn(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?ra:e?la:Ms;return!e&&He(r,"iterate",l?ho:_n),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Mt(t){return function(...e){return t==="delete"?!1:this}}function Ep(){const t={get(r){return _i(this,r)},get size(){return mi(this)},has:gi,add:gl,set:ml,delete:vl,clear:yl,forEach:vi(!1,!1)},e={get(r){return _i(this,r,!1,!0)},get size(){return mi(this)},has:gi,add:gl,set:ml,delete:vl,clear:yl,forEach:vi(!1,!0)},n={get(r){return _i(this,r,!0)},get size(){return mi(this,!0)},has(r){return gi.call(this,r,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:vi(!0,!1)},s={get(r){return _i(this,r,!0,!0)},get size(){return mi(this,!0)},has(r){return gi.call(this,r,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:vi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=yi(r,!1,!1),n[r]=yi(r,!0,!1),e[r]=yi(r,!1,!0),s[r]=yi(r,!0,!0)}),[t,n,e,s]}const[bp,wp,Ip,Cp]=Ep();function oa(t,e){const n=e?t?Cp:Ip:t?wp:bp;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(Q(n,i)&&i in s?n:s,i,r)}const Tp={get:oa(!1,!1)},Sp={get:oa(!1,!0)},Rp={get:oa(!0,!1)},Ru=new WeakMap,Au=new WeakMap,ku=new WeakMap,Ap=new WeakMap;function kp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Np(t){return t.__v_skip||!Object.isExtensible(t)?0:kp(ep(t))}function ti(t){return Gn(t)?t:aa(t,!1,Su,Tp,Ru)}function Pp(t){return aa(t,!1,yp,Sp,Au)}function Nu(t){return aa(t,!0,vp,Rp,ku)}function aa(t,e,n,s,i){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Np(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Wn(t){return Gn(t)?Wn(t.__v_raw):!!(t&&t.__v_isReactive)}function Gn(t){return!!(t&&t.__v_isReadonly)}function Bi(t){return!!(t&&t.__v_isShallow)}function Pu(t){return Wn(t)||Gn(t)}function X(t){const e=t&&t.__v_raw;return e?X(e):t}function Ou(t){return Fi(t,"__v_skip",!0),t}const Ms=t=>ce(t)?ti(t):t,la=t=>ce(t)?Nu(t):t;function xu(t){zt&&Je&&(t=X(t),Iu(t.dep||(t.dep=na())))}function Du(t,e){t=X(t),t.dep&&fo(t.dep)}function Se(t){return!!(t&&t.__v_isRef===!0)}function Op(t){return Mu(t,!1)}function xp(t){return Mu(t,!0)}function Mu(t,e){return Se(t)?t:new Dp(t,e)}class Dp{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:X(e),this._value=n?e:Ms(e)}get value(){return xu(this),this._value}set value(e){const n=this.__v_isShallow||Bi(e)||Gn(e);e=n?e:X(e),Ds(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ms(e),Du(this))}}function Hn(t){return Se(t)?t.value:t}const Mp={get:(t,e,n)=>Hn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Se(i)&&!Se(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Lu(t){return Wn(t)?t:new Proxy(t,Mp)}var Fu;class Lp{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Fu]=!1,this._dirty=!0,this.effect=new sa(e,()=>{this._dirty||(this._dirty=!0,Du(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=X(this);return xu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Fu="__v_isReadonly";function Fp(t,e,n=!1){let s,i;const r=$(t);return r?(s=t,i=tt):(s=t.get,i=t.set),new Lp(s,i,r||!i,n)}function Kt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){_r(r,e,n)}return i}function nt(t,e,n,s){if($(t)){const r=Kt(t,e,n,s);return r&&mu(r)&&r.catch(o=>{_r(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(nt(t[r],e,n,s));return i}function _r(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Kt(l,null,10,[t,o,a]);return}}Up(t,n,i,s)}function Up(t,e,n,s=!0){console.error(t)}let Ls=!1,po=!1;const Te=[];let dt=0;const $n=[];let yt=null,hn=0;const Uu=Promise.resolve();let ca=null;function Bu(t){const e=ca||Uu;return t?e.then(this?t.bind(this):t):e}function Bp(t){let e=dt+1,n=Te.length;for(;e<n;){const s=e+n>>>1;Fs(Te[s])<t?e=s+1:n=s}return e}function ua(t){(!Te.length||!Te.includes(t,Ls&&t.allowRecurse?dt+1:dt))&&(t.id==null?Te.push(t):Te.splice(Bp(t.id),0,t),Wu())}function Wu(){!Ls&&!po&&(po=!0,ca=Uu.then($u))}function Wp(t){const e=Te.indexOf(t);e>dt&&Te.splice(e,1)}function Hp(t){H(t)?$n.push(...t):(!yt||!yt.includes(t,t.allowRecurse?hn+1:hn))&&$n.push(t),Wu()}function El(t,e=Ls?dt+1:0){for(;e<Te.length;e++){const n=Te[e];n&&n.pre&&(Te.splice(e,1),e--,n())}}function Hu(t){if($n.length){const e=[...new Set($n)];if($n.length=0,yt){yt.push(...e);return}for(yt=e,yt.sort((n,s)=>Fs(n)-Fs(s)),hn=0;hn<yt.length;hn++)yt[hn]();yt=null,hn=0}}const Fs=t=>t.id==null?1/0:t.id,$p=(t,e)=>{const n=Fs(t)-Fs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $u(t){po=!1,Ls=!0,Te.sort($p);const e=tt;try{for(dt=0;dt<Te.length;dt++){const n=Te[dt];n&&n.active!==!1&&Kt(n,null,14)}}finally{dt=0,Te.length=0,Hu(),Ls=!1,ca=null,(Te.length||$n.length)&&$u()}}function jp(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||le;d&&(i=n.map(_=>ve(_)?_.trim():_)),h&&(i=n.map(Ui))}let a,l=s[a=Wr(e)]||s[a=Wr(_t(e))];!l&&r&&(l=s[a=Wr(os(e))]),l&&nt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,nt(c,t,6,i)}}function ju(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!$(t)){const l=c=>{const u=ju(c,e,!0);u&&(a=!0,Pe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ce(t)&&s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):Pe(o,r),ce(t)&&s.set(t,o),o)}function gr(t,e){return!t||!ur(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,os(e))||Q(t,e))}let Ve=null,Vu=null;function Wi(t){const e=Ve;return Ve=t,Vu=t&&t.type.__scopeId||null,e}function Vp(t,e=Ve,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&kl(-1);const r=Wi(e);let o;try{o=t(...i)}finally{Wi(r),s._d&&kl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Hr(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:_,ctx:m,inheritAttrs:w}=t;let P,k;const F=Wi(t);try{if(n.shapeFlag&4){const G=i||s;P=ht(u.call(G,G,h,r,_,d,m)),k=l}else{const G=e;P=ht(G.length>1?G(r,{attrs:l,slots:a,emit:c}):G(r,null)),k=e.props?l:zp(l)}}catch(G){Ts.length=0,_r(G,t,1),P=Me(yn)}let x=P;if(k&&w!==!1){const G=Object.keys(k),{shapeFlag:_e}=x;G.length&&_e&7&&(o&&G.some(Xo)&&(k=Kp(k,o)),x=Yn(x,k))}return n.dirs&&(x=Yn(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),P=x,Wi(F),P}const zp=t=>{let e;for(const n in t)(n==="class"||n==="style"||ur(n))&&((e||(e={}))[n]=t[n]);return e},Kp=(t,e)=>{const n={};for(const s in t)(!Xo(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function qp(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?bl(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!gr(c,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?bl(s,o,c):!0:!!o;return!1}function bl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!gr(n,r))return!0}return!1}function Gp({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yp=t=>t.__isSuspense;function Qp(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Hp(t)}function Ai(t,e){if(Ie){let n=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===n&&(n=Ie.provides=Object.create(s)),n[t]=e}}function Ct(t,e,n=!1){const s=Ie||Ve;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&$(e)?e.call(s.proxy):e}}const Ei={};function ki(t,e,n){return zu(t,e,n)}function zu(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=le){const a=Ie;let l,c=!1,u=!1;if(Se(t)?(l=()=>t.value,c=Bi(t)):Wn(t)?(l=()=>t,s=!0):H(t)?(u=!0,c=t.some(x=>Wn(x)||Bi(x)),l=()=>t.map(x=>{if(Se(x))return x.value;if(Wn(x))return fn(x);if($(x))return Kt(x,a,2)})):$(t)?e?l=()=>Kt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),nt(t,a,3,[d])}:l=tt,e&&s){const x=l;l=()=>fn(x())}let h,d=x=>{h=k.onStop=()=>{Kt(x,a,4)}},_;if(Bs)if(d=tt,e?n&&nt(e,a,3,[l(),u?[]:void 0,d]):l(),i==="sync"){const x=K_();_=x.__watcherHandles||(x.__watcherHandles=[])}else return tt;let m=u?new Array(t.length).fill(Ei):Ei;const w=()=>{if(k.active)if(e){const x=k.run();(s||c||(u?x.some((G,_e)=>Ds(G,m[_e])):Ds(x,m)))&&(h&&h(),nt(e,a,3,[x,m===Ei?void 0:u&&m[0]===Ei?[]:m,d]),m=x)}else k.run()};w.allowRecurse=!!e;let P;i==="sync"?P=w:i==="post"?P=()=>De(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),P=()=>ua(w));const k=new sa(l,P);e?n?w():m=k.run():i==="post"?De(k.run.bind(k),a&&a.suspense):k.run();const F=()=>{k.stop(),a&&a.scope&&Zo(a.scope.effects,k)};return _&&_.push(F),F}function Jp(t,e,n){const s=this.proxy,i=ve(t)?t.includes(".")?Ku(s,t):()=>s[t]:t.bind(s,s);let r;$(e)?r=e:(r=e.handler,n=e);const o=Ie;Qn(this);const a=zu(i,r.bind(s),n);return o?Qn(o):gn(),a}function Ku(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function fn(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Se(t))fn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)fn(t[n],e);else if(gu(t)||Bn(t))t.forEach(n=>{fn(n,e)});else if(yu(t))for(const n in t)fn(t[n],e);return t}function qu(t){return $(t)?{setup:t,name:t.name}:t}const Ni=t=>!!t.type.__asyncLoader,Gu=t=>t.type.__isKeepAlive;function Xp(t,e){Yu(t,"a",e)}function Zp(t,e){Yu(t,"da",e)}function Yu(t,e,n=Ie){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(mr(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Gu(i.parent.vnode)&&e_(s,e,n,i),i=i.parent}}function e_(t,e,n,s){const i=mr(e,t,s,!0);Qu(()=>{Zo(s[e],i)},n)}function mr(t,e,n=Ie,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;as(),Qn(n);const a=nt(e,n,t,o);return gn(),ls(),a});return s?i.unshift(r):i.push(r),r}}const Ot=t=>(e,n=Ie)=>(!Bs||t==="sp")&&mr(t,(...s)=>e(...s),n),t_=Ot("bm"),n_=Ot("m"),s_=Ot("bu"),i_=Ot("u"),r_=Ot("bum"),Qu=Ot("um"),o_=Ot("sp"),a_=Ot("rtg"),l_=Ot("rtc");function c_(t,e=Ie){mr("ec",t,e)}function JC(t,e){const n=Ve;if(n===null)return t;const s=Er(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=le]=e[r];o&&($(o)&&(o={mounted:o,updated:o}),o.deep&&fn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function on(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(as(),nt(l,n,8,[t.el,a,t,e]),ls())}}const Ju="components",u_="directives";function XC(t,e){return Xu(Ju,t,!0,e)||t}const h_=Symbol();function ZC(t){return Xu(u_,t)}function Xu(t,e,n=!0,s=!1){const i=Ve||Ie;if(i){const r=i.type;if(t===Ju){const a=j_(r,!1);if(a&&(a===e||a===_t(e)||a===fr(_t(e))))return r}const o=wl(i[t]||r[t],e)||wl(i.appContext[t],e);return!o&&s?r:o}}function wl(t,e){return t&&(t[e]||t[_t(e)]||t[fr(_t(e))])}function eT(t,e,n,s){let i;const r=n&&n[s];if(H(t)||ve(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ce(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const _o=t=>t?uh(t)?Er(t)||t.proxy:_o(t.parent):null,Cs=Pe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_o(t.parent),$root:t=>_o(t.root),$emit:t=>t.emit,$options:t=>ha(t),$forceUpdate:t=>t.f||(t.f=()=>ua(t.update)),$nextTick:t=>t.n||(t.n=Bu.bind(t.proxy)),$watch:t=>Jp.bind(t)}),$r=(t,e)=>t!==le&&!t.__isScriptSetup&&Q(t,e),d_={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if($r(s,e))return o[e]=1,s[e];if(i!==le&&Q(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,r[e];if(n!==le&&Q(n,e))return o[e]=4,n[e];go&&(o[e]=0)}}const u=Cs[e];let h,d;if(u)return e==="$attrs"&&He(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==le&&Q(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Q(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return $r(i,e)?(i[e]=n,!0):s!==le&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==le&&Q(t,o)||$r(e,o)||(a=r[0])&&Q(a,o)||Q(s,o)||Q(Cs,o)||Q(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let go=!0;function f_(t){const e=ha(t),n=t.proxy,s=t.ctx;go=!1,e.beforeCreate&&Il(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:_,updated:m,activated:w,deactivated:P,beforeDestroy:k,beforeUnmount:F,destroyed:x,unmounted:G,render:_e,renderTracked:be,renderTriggered:Ue,errorCaptured:qe,serverPrefetch:rt,expose:$e,inheritAttrs:Dt,components:ot,directives:Rn,filters:sn}=e;if(c&&p_(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const ee=o[ie];$(ee)&&(s[ie]=ee.bind(n))}if(i){const ie=i.call(n,n);ce(ie)&&(t.data=ti(ie))}if(go=!0,r)for(const ie in r){const ee=r[ie],Ge=$(ee)?ee.bind(n,n):$(ee.get)?ee.get.bind(n,n):tt,rn=!$(ee)&&$(ee.set)?ee.set.bind(n):tt,Ye=je({get:Ge,set:rn});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:xe=>Ye.value=xe})}if(a)for(const ie in a)Zu(a[ie],s,n,ie);if(l){const ie=$(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(ee=>{Ai(ee,ie[ee])})}u&&Il(u,t,"c");function fe(ie,ee){H(ee)?ee.forEach(Ge=>ie(Ge.bind(n))):ee&&ie(ee.bind(n))}if(fe(t_,h),fe(n_,d),fe(s_,_),fe(i_,m),fe(Xp,w),fe(Zp,P),fe(c_,qe),fe(l_,be),fe(a_,Ue),fe(r_,F),fe(Qu,G),fe(o_,rt),H($e))if($e.length){const ie=t.exposed||(t.exposed={});$e.forEach(ee=>{Object.defineProperty(ie,ee,{get:()=>n[ee],set:Ge=>n[ee]=Ge})})}else t.exposed||(t.exposed={});_e&&t.render===tt&&(t.render=_e),Dt!=null&&(t.inheritAttrs=Dt),ot&&(t.components=ot),Rn&&(t.directives=Rn)}function p_(t,e,n=tt,s=!1){H(t)&&(t=mo(t));for(const i in t){const r=t[i];let o;ce(r)?"default"in r?o=Ct(r.from||i,r.default,!0):o=Ct(r.from||i):o=Ct(r),Se(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Il(t,e,n){nt(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zu(t,e,n,s){const i=s.includes(".")?Ku(n,s):()=>n[s];if(ve(t)){const r=e[t];$(r)&&ki(i,r)}else if($(t))ki(i,t.bind(n));else if(ce(t))if(H(t))t.forEach(r=>Zu(r,e,n,s));else{const r=$(t.handler)?t.handler.bind(n):e[t.handler];$(r)&&ki(i,r,t)}}function ha(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Hi(l,c,o,!0)),Hi(l,e,o)),ce(e)&&r.set(e,l),l}function Hi(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Hi(t,r,n,!0),i&&i.forEach(o=>Hi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=__[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const __={data:Cl,props:ln,emits:ln,methods:ln,computed:ln,beforeCreate:Ae,created:Ae,beforeMount:Ae,mounted:Ae,beforeUpdate:Ae,updated:Ae,beforeDestroy:Ae,beforeUnmount:Ae,destroyed:Ae,unmounted:Ae,activated:Ae,deactivated:Ae,errorCaptured:Ae,serverPrefetch:Ae,components:ln,directives:ln,watch:m_,provide:Cl,inject:g_};function Cl(t,e){return e?t?function(){return Pe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function g_(t,e){return ln(mo(t),mo(e))}function mo(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ae(t,e){return t?[...new Set([].concat(t,e))]:e}function ln(t,e){return t?Pe(Pe(Object.create(null),t),e):e}function m_(t,e){if(!t)return e;if(!e)return t;const n=Pe(Object.create(null),t);for(const s in e)n[s]=Ae(t[s],e[s]);return n}function v_(t,e,n,s=!1){const i={},r={};Fi(r,yr,1),t.propsDefaults=Object.create(null),eh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Pp(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function y_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=X(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(gr(t.emitsOptions,d))continue;const _=e[d];if(l)if(Q(r,d))_!==r[d]&&(r[d]=_,c=!0);else{const m=_t(d);i[m]=vo(l,a,m,_,t,!1)}else _!==r[d]&&(r[d]=_,c=!0)}}}else{eh(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!Q(e,h)&&((u=os(h))===h||!Q(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=vo(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!Q(e,h))&&(delete r[h],c=!0)}c&&Rt(t,"set","$attrs")}function eh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Si(l))continue;const c=e[l];let u;i&&Q(i,u=_t(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:gr(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=X(n),c=a||le;for(let u=0;u<r.length;u++){const h=r[u];n[h]=vo(i,l,h,c[h],t,!Q(c,h))}}return o}function vo(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&$(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(Qn(i),s=c[n]=l.call(null,e),gn())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===os(n))&&(s=!0))}return s}function th(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!$(t)){const u=h=>{l=!0;const[d,_]=th(h,e,!0);Pe(o,d),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ce(t)&&s.set(t,Un),Un;if(H(r))for(let u=0;u<r.length;u++){const h=_t(r[u]);Tl(h)&&(o[h]=le)}else if(r)for(const u in r){const h=_t(u);if(Tl(h)){const d=r[u],_=o[h]=H(d)||$(d)?{type:d}:Object.assign({},d);if(_){const m=Al(Boolean,_.type),w=Al(String,_.type);_[0]=m>-1,_[1]=w<0||m<w,(m>-1||Q(_,"default"))&&a.push(h)}}}const c=[o,a];return ce(t)&&s.set(t,c),c}function Tl(t){return t[0]!=="$"}function Sl(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Rl(t,e){return Sl(t)===Sl(e)}function Al(t,e){return H(e)?e.findIndex(n=>Rl(n,t)):$(e)&&Rl(e,t)?0:-1}const nh=t=>t[0]==="_"||t==="$stable",da=t=>H(t)?t.map(ht):[ht(t)],E_=(t,e,n)=>{if(e._n)return e;const s=Vp((...i)=>da(e(...i)),n);return s._c=!1,s},sh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(nh(i))continue;const r=t[i];if($(r))e[i]=E_(i,r,s);else if(r!=null){const o=da(r);e[i]=()=>o}}},ih=(t,e)=>{const n=da(e);t.slots.default=()=>n},b_=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=X(e),Fi(e,"_",n)):sh(e,t.slots={})}else t.slots={},e&&ih(t,e);Fi(t.slots,yr,1)},w_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(Pe(i,e),!n&&a===1&&delete i._):(r=!e.$stable,sh(e,i)),o=e}else e&&(ih(t,e),o={default:1});if(r)for(const a in i)!nh(a)&&!(a in o)&&delete i[a]};function rh(){return{app:null,config:{isNativeTag:Jf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let I_=0;function C_(t,e){return function(s,i=null){$(s)||(s=Object.assign({},s)),i!=null&&!ce(i)&&(i=null);const r=rh(),o=new Set;let a=!1;const l=r.app={_uid:I_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:q_,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&$(c.install)?(o.add(c),c.install(l,...u)):$(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const d=Me(s,i);return d.appContext=r,u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,Er(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function yo(t,e,n,s,i=!1){if(H(t)){t.forEach((d,_)=>yo(d,e&&(H(e)?e[_]:e),n,s,i));return}if(Ni(s)&&!i)return;const r=s.shapeFlag&4?Er(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===le?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ve(c)?(u[c]=null,Q(h,c)&&(h[c]=null)):Se(c)&&(c.value=null)),$(l))Kt(l,a,12,[o,u]);else{const d=ve(l),_=Se(l);if(d||_){const m=()=>{if(t.f){const w=d?Q(h,l)?h[l]:u[l]:l.value;i?H(w)&&Zo(w,r):H(w)?w.includes(r)||w.push(r):d?(u[l]=[r],Q(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Q(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,De(m,n)):m()}}}const De=Qp;function T_(t){return S_(t)}function S_(t,e){const n=sp();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:_=tt,insertStaticContent:m}=t,w=(f,p,g,v=null,E=null,T=null,A=!1,C=null,S=!!p.dynamicChildren)=>{if(f===p)return;f&&!ms(f,p)&&(v=R(f),xe(f,E,T,!0),f=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:b,ref:M,shapeFlag:O}=p;switch(b){case vr:P(f,p,g,v);break;case yn:k(f,p,g,v);break;case Pi:f==null&&F(p,g,v,A);break;case Et:ot(f,p,g,v,E,T,A,C,S);break;default:O&1?_e(f,p,g,v,E,T,A,C,S):O&6?Rn(f,p,g,v,E,T,A,C,S):(O&64||O&128)&&b.process(f,p,g,v,E,T,A,C,S,Y)}M!=null&&E&&yo(M,f&&f.ref,T,p||f,!p)},P=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const E=p.el=f.el;p.children!==f.children&&c(E,p.children)}},k=(f,p,g,v)=>{f==null?s(p.el=l(p.children||""),g,v):p.el=f.el},F=(f,p,g,v)=>{[f.el,f.anchor]=m(f.children,p,g,v,f.el,f.anchor)},x=({el:f,anchor:p},g,v)=>{let E;for(;f&&f!==p;)E=d(f),s(f,g,v),f=E;s(p,g,v)},G=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=d(f),i(f),f=g;i(p)},_e=(f,p,g,v,E,T,A,C,S)=>{A=A||p.type==="svg",f==null?be(p,g,v,E,T,A,C,S):rt(f,p,E,T,A,C,S)},be=(f,p,g,v,E,T,A,C)=>{let S,b;const{type:M,props:O,shapeFlag:L,transition:W,dirs:K}=f;if(S=f.el=o(f.type,T,O&&O.is,O),L&8?u(S,f.children):L&16&&qe(f.children,S,null,v,E,T&&M!=="foreignObject",A,C),K&&on(f,null,v,"created"),O){for(const te in O)te!=="value"&&!Si(te)&&r(S,te,null,O[te],T,f.children,v,E,N);"value"in O&&r(S,"value",null,O.value),(b=O.onVnodeBeforeMount)&&lt(b,v,f)}Ue(S,f,f.scopeId,A,v),K&&on(f,null,v,"beforeMount");const re=(!E||E&&!E.pendingBranch)&&W&&!W.persisted;re&&W.beforeEnter(S),s(S,p,g),((b=O&&O.onVnodeMounted)||re||K)&&De(()=>{b&&lt(b,v,f),re&&W.enter(S),K&&on(f,null,v,"mounted")},E)},Ue=(f,p,g,v,E)=>{if(g&&_(f,g),v)for(let T=0;T<v.length;T++)_(f,v[T]);if(E){let T=E.subTree;if(p===T){const A=E.vnode;Ue(f,A,A.scopeId,A.slotScopeIds,E.parent)}}},qe=(f,p,g,v,E,T,A,C,S=0)=>{for(let b=S;b<f.length;b++){const M=f[b]=C?Ut(f[b]):ht(f[b]);w(null,M,p,g,v,E,T,A,C)}},rt=(f,p,g,v,E,T,A)=>{const C=p.el=f.el;let{patchFlag:S,dynamicChildren:b,dirs:M}=p;S|=f.patchFlag&16;const O=f.props||le,L=p.props||le;let W;g&&an(g,!1),(W=L.onVnodeBeforeUpdate)&&lt(W,g,p,f),M&&on(p,f,g,"beforeUpdate"),g&&an(g,!0);const K=E&&p.type!=="foreignObject";if(b?$e(f.dynamicChildren,b,C,g,v,K,T):A||ee(f,p,C,null,g,v,K,T,!1),S>0){if(S&16)Dt(C,p,O,L,g,v,E);else if(S&2&&O.class!==L.class&&r(C,"class",null,L.class,E),S&4&&r(C,"style",O.style,L.style,E),S&8){const re=p.dynamicProps;for(let te=0;te<re.length;te++){const pe=re[te],Qe=O[pe],kn=L[pe];(kn!==Qe||pe==="value")&&r(C,pe,Qe,kn,E,f.children,g,v,N)}}S&1&&f.children!==p.children&&u(C,p.children)}else!A&&b==null&&Dt(C,p,O,L,g,v,E);((W=L.onVnodeUpdated)||M)&&De(()=>{W&&lt(W,g,p,f),M&&on(p,f,g,"updated")},v)},$e=(f,p,g,v,E,T,A)=>{for(let C=0;C<p.length;C++){const S=f[C],b=p[C],M=S.el&&(S.type===Et||!ms(S,b)||S.shapeFlag&70)?h(S.el):g;w(S,b,M,null,v,E,T,A,!0)}},Dt=(f,p,g,v,E,T,A)=>{if(g!==v){if(g!==le)for(const C in g)!Si(C)&&!(C in v)&&r(f,C,g[C],null,A,p.children,E,T,N);for(const C in v){if(Si(C))continue;const S=v[C],b=g[C];S!==b&&C!=="value"&&r(f,C,b,S,A,p.children,E,T,N)}"value"in v&&r(f,"value",g.value,v.value)}},ot=(f,p,g,v,E,T,A,C,S)=>{const b=p.el=f?f.el:a(""),M=p.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:W}=p;W&&(C=C?C.concat(W):W),f==null?(s(b,g,v),s(M,g,v),qe(p.children,g,M,E,T,A,C,S)):O>0&&O&64&&L&&f.dynamicChildren?($e(f.dynamicChildren,L,g,E,T,A,C),(p.key!=null||E&&p===E.subTree)&&oh(f,p,!0)):ee(f,p,g,M,E,T,A,C,S)},Rn=(f,p,g,v,E,T,A,C,S)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?E.ctx.activate(p,g,v,A,S):sn(p,g,v,E,T,A,S):_s(f,p,S)},sn=(f,p,g,v,E,T,A)=>{const C=f.component=U_(f,v,E);if(Gu(f)&&(C.ctx.renderer=Y),B_(C),C.asyncDep){if(E&&E.registerDep(C,fe),!f.el){const S=C.subTree=Me(yn);k(null,S,p,g)}return}fe(C,f,p,g,E,T,A)},_s=(f,p,g)=>{const v=p.component=f.component;if(qp(f,p,g))if(v.asyncDep&&!v.asyncResolved){ie(v,p,g);return}else v.next=p,Wp(v.update),v.update();else p.el=f.el,v.vnode=p},fe=(f,p,g,v,E,T,A)=>{const C=()=>{if(f.isMounted){let{next:M,bu:O,u:L,parent:W,vnode:K}=f,re=M,te;an(f,!1),M?(M.el=K.el,ie(f,M,A)):M=K,O&&Ri(O),(te=M.props&&M.props.onVnodeBeforeUpdate)&&lt(te,W,M,K),an(f,!0);const pe=Hr(f),Qe=f.subTree;f.subTree=pe,w(Qe,pe,h(Qe.el),R(Qe),f,E,T),M.el=pe.el,re===null&&Gp(f,pe.el),L&&De(L,E),(te=M.props&&M.props.onVnodeUpdated)&&De(()=>lt(te,W,M,K),E)}else{let M;const{el:O,props:L}=p,{bm:W,m:K,parent:re}=f,te=Ni(p);if(an(f,!1),W&&Ri(W),!te&&(M=L&&L.onVnodeBeforeMount)&&lt(M,re,p),an(f,!0),O&&j){const pe=()=>{f.subTree=Hr(f),j(O,f.subTree,f,E,null)};te?p.type.__asyncLoader().then(()=>!f.isUnmounted&&pe()):pe()}else{const pe=f.subTree=Hr(f);w(null,pe,g,v,f,E,T),p.el=pe.el}if(K&&De(K,E),!te&&(M=L&&L.onVnodeMounted)){const pe=p;De(()=>lt(M,re,pe),E)}(p.shapeFlag&256||re&&Ni(re.vnode)&&re.vnode.shapeFlag&256)&&f.a&&De(f.a,E),f.isMounted=!0,p=g=v=null}},S=f.effect=new sa(C,()=>ua(b),f.scope),b=f.update=()=>S.run();b.id=f.uid,an(f,!0),b()},ie=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,y_(f,p.props,v,g),w_(f,p.children,g),as(),El(),ls()},ee=(f,p,g,v,E,T,A,C,S=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,O=p.children,{patchFlag:L,shapeFlag:W}=p;if(L>0){if(L&128){rn(b,O,g,v,E,T,A,C,S);return}else if(L&256){Ge(b,O,g,v,E,T,A,C,S);return}}W&8?(M&16&&N(b,E,T),O!==b&&u(g,O)):M&16?W&16?rn(b,O,g,v,E,T,A,C,S):N(b,E,T,!0):(M&8&&u(g,""),W&16&&qe(O,g,v,E,T,A,C,S))},Ge=(f,p,g,v,E,T,A,C,S)=>{f=f||Un,p=p||Un;const b=f.length,M=p.length,O=Math.min(b,M);let L;for(L=0;L<O;L++){const W=p[L]=S?Ut(p[L]):ht(p[L]);w(f[L],W,g,null,E,T,A,C,S)}b>M?N(f,E,T,!0,!1,O):qe(p,g,v,E,T,A,C,S,O)},rn=(f,p,g,v,E,T,A,C,S)=>{let b=0;const M=p.length;let O=f.length-1,L=M-1;for(;b<=O&&b<=L;){const W=f[b],K=p[b]=S?Ut(p[b]):ht(p[b]);if(ms(W,K))w(W,K,g,null,E,T,A,C,S);else break;b++}for(;b<=O&&b<=L;){const W=f[O],K=p[L]=S?Ut(p[L]):ht(p[L]);if(ms(W,K))w(W,K,g,null,E,T,A,C,S);else break;O--,L--}if(b>O){if(b<=L){const W=L+1,K=W<M?p[W].el:v;for(;b<=L;)w(null,p[b]=S?Ut(p[b]):ht(p[b]),g,K,E,T,A,C,S),b++}}else if(b>L)for(;b<=O;)xe(f[b],E,T,!0),b++;else{const W=b,K=b,re=new Map;for(b=K;b<=L;b++){const Be=p[b]=S?Ut(p[b]):ht(p[b]);Be.key!=null&&re.set(Be.key,b)}let te,pe=0;const Qe=L-K+1;let kn=!1,cl=0;const gs=new Array(Qe);for(b=0;b<Qe;b++)gs[b]=0;for(b=W;b<=O;b++){const Be=f[b];if(pe>=Qe){xe(Be,E,T,!0);continue}let at;if(Be.key!=null)at=re.get(Be.key);else for(te=K;te<=L;te++)if(gs[te-K]===0&&ms(Be,p[te])){at=te;break}at===void 0?xe(Be,E,T,!0):(gs[at-K]=b+1,at>=cl?cl=at:kn=!0,w(Be,p[at],g,null,E,T,A,C,S),pe++)}const ul=kn?R_(gs):Un;for(te=ul.length-1,b=Qe-1;b>=0;b--){const Be=K+b,at=p[Be],hl=Be+1<M?p[Be+1].el:v;gs[b]===0?w(null,at,g,hl,E,T,A,C,S):kn&&(te<0||b!==ul[te]?Ye(at,g,hl,2):te--)}}},Ye=(f,p,g,v,E=null)=>{const{el:T,type:A,transition:C,children:S,shapeFlag:b}=f;if(b&6){Ye(f.component.subTree,p,g,v);return}if(b&128){f.suspense.move(p,g,v);return}if(b&64){A.move(f,p,g,Y);return}if(A===Et){s(T,p,g);for(let O=0;O<S.length;O++)Ye(S[O],p,g,v);s(f.anchor,p,g);return}if(A===Pi){x(f,p,g);return}if(v!==2&&b&1&&C)if(v===0)C.beforeEnter(T),s(T,p,g),De(()=>C.enter(T),E);else{const{leave:O,delayLeave:L,afterLeave:W}=C,K=()=>s(T,p,g),re=()=>{O(T,()=>{K(),W&&W()})};L?L(T,K,re):re()}else s(T,p,g)},xe=(f,p,g,v=!1,E=!1)=>{const{type:T,props:A,ref:C,children:S,dynamicChildren:b,shapeFlag:M,patchFlag:O,dirs:L}=f;if(C!=null&&yo(C,null,g,f,!0),M&256){p.ctx.deactivate(f);return}const W=M&1&&L,K=!Ni(f);let re;if(K&&(re=A&&A.onVnodeBeforeUnmount)&&lt(re,p,f),M&6)y(f.component,g,v);else{if(M&128){f.suspense.unmount(g,v);return}W&&on(f,null,p,"beforeUnmount"),M&64?f.type.remove(f,p,g,E,Y,v):b&&(T!==Et||O>0&&O&64)?N(b,p,g,!1,!0):(T===Et&&O&384||!E&&M&16)&&N(S,p,g),v&&An(f)}(K&&(re=A&&A.onVnodeUnmounted)||W)&&De(()=>{re&&lt(re,p,f),W&&on(f,null,p,"unmounted")},g)},An=f=>{const{type:p,el:g,anchor:v,transition:E}=f;if(p===Et){pi(g,v);return}if(p===Pi){G(f);return}const T=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:A,delayLeave:C}=E,S=()=>A(g,T);C?C(f.el,T,S):S()}else T()},pi=(f,p)=>{let g;for(;f!==p;)g=d(f),i(f),f=g;i(p)},y=(f,p,g)=>{const{bum:v,scope:E,update:T,subTree:A,um:C}=f;v&&Ri(v),E.stop(),T&&(T.active=!1,xe(A,f,p,g)),C&&De(C,p),De(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(f,p,g,v=!1,E=!1,T=0)=>{for(let A=T;A<f.length;A++)xe(f[A],p,g,v,E)},R=f=>f.shapeFlag&6?R(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),D=(f,p,g)=>{f==null?p._vnode&&xe(p._vnode,null,null,!0):w(p._vnode||null,f,p,null,null,null,g),El(),Hu(),p._vnode=f},Y={p:w,um:xe,m:Ye,r:An,mt:sn,mc:qe,pc:ee,pbc:$e,n:R,o:t};let ue,j;return e&&([ue,j]=e(Y)),{render:D,hydrate:ue,createApp:C_(D,ue)}}function an({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function oh(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Ut(i[r]),a.el=o.el),n||oh(o,a)),a.type===vr&&(a.el=o.el)}}function R_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const A_=t=>t.__isTeleport,Et=Symbol(void 0),vr=Symbol(void 0),yn=Symbol(void 0),Pi=Symbol(void 0),Ts=[];let Ze=null;function k_(t=!1){Ts.push(Ze=t?null:[])}function N_(){Ts.pop(),Ze=Ts[Ts.length-1]||null}let Us=1;function kl(t){Us+=t}function ah(t){return t.dynamicChildren=Us>0?Ze||Un:null,N_(),Us>0&&Ze&&Ze.push(t),t}function tT(t,e,n,s,i,r){return ah(ch(t,e,n,s,i,r,!0))}function P_(t,e,n,s,i){return ah(Me(t,e,n,s,i,!0))}function Eo(t){return t?t.__v_isVNode===!0:!1}function ms(t,e){return t.type===e.type&&t.key===e.key}const yr="__vInternal",lh=({key:t})=>t??null,Oi=({ref:t,ref_key:e,ref_for:n})=>t!=null?ve(t)||Se(t)||$(t)?{i:Ve,r:t,k:e,f:!!n}:t:null;function ch(t,e=null,n=null,s=0,i=null,r=t===Et?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&lh(e),ref:e&&Oi(e),scopeId:Vu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ve};return a?(fa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=ve(n)?8:16),Us>0&&!o&&Ze&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ze.push(l),l}const Me=O_;function O_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===h_)&&(t=yn),Eo(t)){const a=Yn(t,e,!0);return n&&fa(a,n),Us>0&&!r&&Ze&&(a.shapeFlag&6?Ze[Ze.indexOf(t)]=a:Ze.push(a)),a.patchFlag|=-2,a}if(V_(t)&&(t=t.__vccOpts),e){e=x_(e);let{class:a,style:l}=e;a&&!ve(a)&&(e.class=Jo(a)),ce(l)&&(Pu(l)&&!H(l)&&(l=Pe({},l)),e.style=Qo(l))}const o=ve(t)?1:Yp(t)?128:A_(t)?64:ce(t)?4:$(t)?2:0;return ch(t,e,n,s,i,o,r,!0)}function x_(t){return t?Pu(t)||yr in t?Pe({},t):t:null}function Yn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?M_(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&lh(a),ref:e&&e.ref?n&&i?H(i)?i.concat(Oi(e)):[i,Oi(e)]:Oi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Et?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function D_(t=" ",e=0){return Me(vr,null,t,e)}function nT(t,e){const n=Me(Pi,null,t);return n.staticCount=e,n}function sT(t="",e=!1){return e?(k_(),P_(yn,null,t)):Me(yn,null,t)}function ht(t){return t==null||typeof t=="boolean"?Me(yn):H(t)?Me(Et,null,t.slice()):typeof t=="object"?Ut(t):Me(vr,null,String(t))}function Ut(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yn(t)}function fa(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),fa(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(yr in e)?e._ctx=Ve:i===3&&Ve&&(Ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:Ve},n=32):(e=String(e),s&64?(n=16,e=[D_(e)]):n=8);t.children=e,t.shapeFlag|=n}function M_(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Jo([e.class,s.class]));else if(i==="style")e.style=Qo([e.style,s.style]);else if(ur(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function lt(t,e,n,s=null){nt(t,e,7,[n,s])}const L_=rh();let F_=0;function U_(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||L_,r={uid:F_++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:th(s,i),emitsOptions:ju(s,i),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=jp.bind(null,r),t.ce&&t.ce(r),r}let Ie=null;const Qn=t=>{Ie=t,t.scope.on()},gn=()=>{Ie&&Ie.scope.off(),Ie=null};function uh(t){return t.vnode.shapeFlag&4}let Bs=!1;function B_(t,e=!1){Bs=e;const{props:n,children:s}=t.vnode,i=uh(t);v_(t,n,i,e),b_(t,s);const r=i?W_(t,e):void 0;return Bs=!1,r}function W_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ou(new Proxy(t.ctx,d_));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?$_(t):null;Qn(t),as();const r=Kt(s,t,0,[t.props,i]);if(ls(),gn(),mu(r)){if(r.then(gn,gn),e)return r.then(o=>{Nl(t,o,e)}).catch(o=>{_r(o,t,0)});t.asyncDep=r}else Nl(t,r,e)}else hh(t,e)}function Nl(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Lu(e)),hh(t,n)}let Pl;function hh(t,e,n){const s=t.type;if(!t.render){if(!e&&Pl&&!s.render){const i=s.template||ha(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Pe(Pe({isCustomElement:r,delimiters:a},o),l);s.render=Pl(i,c)}}t.render=s.render||tt}Qn(t),as(),f_(t),ls(),gn()}function H_(t){return new Proxy(t.attrs,{get(e,n){return He(t,"get","$attrs"),e[n]}})}function $_(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=H_(t))},slots:t.slots,emit:t.emit,expose:e}}function Er(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Lu(Ou(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Cs)return Cs[n](t)},has(e,n){return n in e||n in Cs}}))}function j_(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function V_(t){return $(t)&&"__vccOpts"in t}const je=(t,e)=>Fp(t,e,Bs);function dh(t,e,n){const s=arguments.length;return s===2?ce(e)&&!H(e)?Eo(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Eo(n)&&(n=[n]),Me(t,e,n))}const z_=Symbol(""),K_=()=>Ct(z_),q_="3.2.45",G_="http://www.w3.org/2000/svg",dn=typeof document<"u"?document:null,Ol=dn&&dn.createElement("template"),Y_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?dn.createElementNS(G_,t):dn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>dn.createTextNode(t),createComment:t=>dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{Ol.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ol.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Q_(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function J_(t,e,n){const s=t.style,i=ve(n);if(n&&!i){for(const r in n)bo(s,r,n[r]);if(e&&!ve(e))for(const r in e)n[r]==null&&bo(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const xl=/\s*!important$/;function bo(t,e,n){if(H(n))n.forEach(s=>bo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=X_(t,e);xl.test(n)?t.setProperty(os(s),n.replace(xl,""),"important"):t[s]=n}}const Dl=["Webkit","Moz","ms"],jr={};function X_(t,e){const n=jr[e];if(n)return n;let s=_t(e);if(s!=="filter"&&s in t)return jr[e]=s;s=fr(s);for(let i=0;i<Dl.length;i++){const r=Dl[i]+s;if(r in t)return jr[e]=r}return e}const Ml="http://www.w3.org/1999/xlink";function Z_(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ml,e.slice(6,e.length)):t.setAttributeNS(Ml,e,n);else{const r=Qf(e);n==null||r&&!pu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function eg(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=pu(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xn(t,e,n,s){t.addEventListener(e,n,s)}function tg(t,e,n,s){t.removeEventListener(e,n,s)}function ng(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=sg(e);if(s){const c=r[e]=og(s,i);xn(t,a,c,l)}else o&&(tg(t,a,o,l),r[e]=void 0)}}const Ll=/(?:Once|Passive|Capture)$/;function sg(t){let e;if(Ll.test(t)){e={};let s;for(;s=t.match(Ll);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let Vr=0;const ig=Promise.resolve(),rg=()=>Vr||(ig.then(()=>Vr=0),Vr=Date.now());function og(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;nt(ag(s,n.value),e,5,[s])};return n.value=t,n.attached=rg(),n}function ag(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Fl=/^on[a-z]/,lg=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?Q_(t,s,i):e==="style"?J_(t,n,s):ur(e)?Xo(e)||ng(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cg(t,e,s,i))?eg(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Z_(t,e,s,i))};function cg(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Fl.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Fl.test(e)&&ve(n)?!1:e in t}const Ul=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Ri(e,n):e};function ug(t){t.target.composing=!0}function Bl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const iT={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ul(i);const r=s||i.props&&i.props.type==="number";xn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ui(a)),t._assign(a)}),n&&xn(t,"change",()=>{t.value=t.value.trim()}),e||(xn(t,"compositionstart",ug),xn(t,"compositionend",Bl),xn(t,"change",Bl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ul(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ui(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},hg=Pe({patchProp:lg},Y_);let Wl;function dg(){return Wl||(Wl=T_(hg))}const rT=(...t)=>{const e=dg().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=fg(s);if(!i)return;const r=e._component;!$(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function fg(t){return ve(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw cs(e)},cs=function(t){return new Error("Firebase Database ("+fh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},br={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(d=64)),s.push(n[u],n[h],n[d],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ph(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const d=r<<2|a>>4;if(s.push(d),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},_h=function(t){const e=ph(t);return br.encodeByteArray(e,!0)},$i=function(t){return _h(t).replace(/\./g,"")},ji=function(t){try{return br.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t){return gh(void 0,t)}function gh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!gg(n)||(t[n]=gh(t[n],e[n]));return t}function gg(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg=()=>mh().__FIREBASE_DEFAULTS__,vg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ji(t[1]);return e&&JSON.parse(e)},pa=()=>{try{return mg()||vg()||yg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vh=t=>{var e,n;return(n=(e=pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Eg=t=>{const e=vh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},bg=()=>{var t;return(t=pa())===null||t===void 0?void 0:t.config},yh=t=>{var e;return(e=pa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$i(JSON.stringify(n)),$i(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _a(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Ig(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cg(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bh(){return fh.NODE_ADMIN===!0}function ga(){try{return typeof indexedDB=="object"}catch{return!1}}function Tg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="FirebaseError";class nn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Sg,Object.setPrototypeOf(this,nn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Rg(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new nn(i,a,s)}}function Rg(t,e){return t.replace(Ag,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Ag=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Ws(ji(r[0])||""),n=Ws(ji(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},kg=function(t){const e=wh(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Ng=function(t){const e=wh(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Jn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function wo(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vi(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function zi(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Hl(r)&&Hl(o)){if(!zi(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Hl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Og(t,e){const n=new xg(t,e);return n.subscribe.bind(n)}class xg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Dg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=zr),i.error===void 0&&(i.error=zr),i.complete===void 0&&(i.complete=zr);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zr(){}function wr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,I(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ir=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=1e3,Ug=2,Bg=4*60*60*1e3,Wg=.5;function Hg(t,e=Fg,n=Ug){const s=e*Math.pow(n,t),i=Math.round(Wg*s*(Math.random()-.5)*2);return Math.min(Bg,s+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t){return t&&t._delegate?t._delegate:t}class kt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new At;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vg(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jg(t){return t===cn?void 0:t}function Vg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $g(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const Kg={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},qg=se.INFO,Gg={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Yg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Gg[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cr{constructor(e){this.name=e,this._logLevel=qg,this._logHandler=Yg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Qg=(t,e)=>e.some(n=>t instanceof n);let $l,jl;function Jg(){return $l||($l=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Xg(){return jl||(jl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ih=new WeakMap,Io=new WeakMap,Ch=new WeakMap,Kr=new WeakMap,ma=new WeakMap;function Zg(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(qt(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ih.set(n,t)}).catch(()=>{}),ma.set(e,t),e}function em(t){if(Io.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Io.set(t,e)}let Co={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Io.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ch.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tm(t){Co=t(Co)}function nm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(qr(this),e,...n);return Ch.set(s,e.sort?e.sort():[e]),qt(s)}:Xg().includes(t)?function(...e){return t.apply(qr(this),e),qt(Ih.get(this))}:function(...e){return qt(t.apply(qr(this),e))}}function sm(t){return typeof t=="function"?nm(t):(t instanceof IDBTransaction&&em(t),Qg(t,Jg())?new Proxy(t,Co):t)}function qt(t){if(t instanceof IDBRequest)return Zg(t);if(Kr.has(t))return Kr.get(t);const e=sm(t);return e!==t&&(Kr.set(t,e),ma.set(e,t)),e}const qr=t=>ma.get(t);function im(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=qt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(qt(o.result),l.oldVersion,l.newVersion,qt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const rm=["get","getKey","getAll","getAllKeys","count"],om=["put","add","delete","clear"],Gr=new Map;function Vl(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gr.get(e))return Gr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=om.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||rm.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Gr.set(e,r),r}tm(t=>({...t,get:(e,n,s)=>Vl(e,n)||t.get(e,n,s),has:(e,n)=>!!Vl(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function lm(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const To="@firebase/app",zl="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new Cr("@firebase/app"),cm="@firebase/app-compat",um="@firebase/analytics-compat",hm="@firebase/analytics",dm="@firebase/app-check-compat",fm="@firebase/app-check",pm="@firebase/auth",_m="@firebase/auth-compat",gm="@firebase/database",mm="@firebase/database-compat",vm="@firebase/functions",ym="@firebase/functions-compat",Em="@firebase/installations",bm="@firebase/installations-compat",wm="@firebase/messaging",Im="@firebase/messaging-compat",Cm="@firebase/performance",Tm="@firebase/performance-compat",Sm="@firebase/remote-config",Rm="@firebase/remote-config-compat",Am="@firebase/storage",km="@firebase/storage-compat",Nm="@firebase/firestore",Pm="@firebase/firestore-compat",Om="firebase",xm="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="[DEFAULT]",Dm={[To]:"fire-core",[cm]:"fire-core-compat",[hm]:"fire-analytics",[um]:"fire-analytics-compat",[fm]:"fire-app-check",[dm]:"fire-app-check-compat",[pm]:"fire-auth",[_m]:"fire-auth-compat",[gm]:"fire-rtdb",[mm]:"fire-rtdb-compat",[vm]:"fire-fn",[ym]:"fire-fn-compat",[Em]:"fire-iid",[bm]:"fire-iid-compat",[wm]:"fire-fcm",[Im]:"fire-fcm-compat",[Cm]:"fire-perf",[Tm]:"fire-perf-compat",[Sm]:"fire-rc",[Rm]:"fire-rc-compat",[Am]:"fire-gcs",[km]:"fire-gcs-compat",[Nm]:"fire-fst",[Pm]:"fire-fst-compat","fire-js":"fire-js",[Om]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new Map,Ro=new Map;function Mm(t,e){try{t.container.addComponent(e)}catch(n){En.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xt(t){const e=t.name;if(Ro.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Ro.set(e,t);for(const n of Ki.values())Mm(n,t);return!0}function ni(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Gt=new us("app","Firebase",Lm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=xm;function Um(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:So,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(n||(n=bg()),!n)throw Gt.create("no-options");const r=Ki.get(i);if(r){if(zi(n,r.options)&&zi(s,r.config))return r;throw Gt.create("duplicate-app",{appName:i})}const o=new zg(i);for(const l of Ro.values())o.addComponent(l);const a=new Fm(n,s,o);return Ki.set(i,a),a}function va(t=So){const e=Ki.get(t);if(!e&&t===So)return Um();if(!e)throw Gt.create("no-app",{appName:t});return e}function Tt(t,e,n){var s;let i=(s=Dm[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(a.join(" "));return}Xt(new kt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="firebase-heartbeat-database",Wm=1,Hs="firebase-heartbeat-store";let Yr=null;function Th(){return Yr||(Yr=im(Bm,Wm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hs)}}}).catch(t=>{throw Gt.create("idb-open",{originalErrorMessage:t.message})})),Yr}async function Hm(t){try{return(await Th()).transaction(Hs).objectStore(Hs).get(Sh(t))}catch(e){if(e instanceof nn)En.warn(e.message);else{const n=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(n.message)}}}async function Kl(t,e){try{const s=(await Th()).transaction(Hs,"readwrite");return await s.objectStore(Hs).put(e,Sh(t)),s.done}catch(n){if(n instanceof nn)En.warn(n.message);else{const s=Gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});En.warn(s.message)}}}function Sh(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=1024,jm=30*24*60*60*1e3;class Vm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Km(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ql();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=jm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ql(),{heartbeatsToSend:n,unsentEntries:s}=zm(this._heartbeatsCache.heartbeats),i=$i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ql(){return new Date().toISOString().substring(0,10)}function zm(t,e=$m){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Gl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Km{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ga()?Tg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gl(t){return $i(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t){Xt(new kt("platform-logger",e=>new am(e),"PRIVATE")),Xt(new kt("heartbeat",e=>new Vm(e),"PRIVATE")),Tt(To,zl,t),Tt(To,zl,"esm2017"),Tt("fire-js","")}qm("");var Gm="firebase",Ym="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tt(Gm,Ym,"app");function ya(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Rh(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qm=Rh,Ah=new us("auth","Firebase",Rh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl=new Cr("@firebase/auth");function xi(t,...e){Yl.logLevel<=se.ERROR&&Yl.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,...e){throw Ea(t,...e)}function ft(t,...e){return Ea(t,...e)}function kh(t,e,n){const s=Object.assign(Object.assign({},Qm()),{[e]:n});return new us("auth","Firebase",s).create(e,{appName:t.name})}function Jm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&gt(t,"argument-error"),kh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ea(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ah.create(t,...e)}function B(t,e,...n){if(!t)throw Ea(e,...n)}function bt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xi(e),new Error(e)}function Nt(t,e){t||bt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=new Map;function wt(t){Nt(t instanceof Function,"Expected a class definition");let e=Ql.get(t);return e?(Nt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ql.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(t,e){const n=ni(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(zi(r,e??{}))return i;gt(i,"already-initialized")}return n.initialize({options:e})}function Zm(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(wt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ev(){return Jl()==="http:"||Jl()==="https:"}function Jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ev()||Ig()||"connection"in navigator)?navigator.onLine:!0}function nv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nt(n>e,"Short delay should be less than long delay!"),this.isMobile=_a()||Eh()}get(){return tv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(t,e){Nt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=new ii(3e4,6e4);function rv(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Tr(t,e,n,s,i={}){return Ph(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=hs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Nh.fetch()(Oh(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ph(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},sv),e);try{const i=new av(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw bi(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw bi(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw bi(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw bi(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw kh(t,u,c);gt(t,u)}}catch(i){if(i instanceof nn)throw i;gt(t,"network-request-failed")}}async function ov(t,e,n,s,i={}){const r=await Tr(t,e,n,s,i);return"mfaPendingCredential"in r&&gt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Oh(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?ba(t.config,i):`${t.config.apiScheme}://${i}`}class av{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ft(this.auth,"network-request-failed")),iv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=ft(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(t,e){return Tr(t,"POST","/v1/accounts:delete",e)}async function cv(t,e){return Tr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uv(t,e=!1){const n=Fe(t),s=await n.getIdToken(e),i=wa(s);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ss(Qr(i.auth_time)),issuedAtTime:Ss(Qr(i.iat)),expirationTime:Ss(Qr(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Qr(t){return Number(t)*1e3}function wa(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return xi("JWT malformed, contained fewer than 3 sections"),null;try{const i=ji(n);return i?JSON.parse(i):(xi("Failed to decode base64 JWT payload"),null)}catch(i){return xi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hv(t){const e=wa(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof nn&&dv(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function dv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ss(this.lastLoginAt),this.creationTime=Ss(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){var e;const n=t.auth,s=await t.getIdToken(),i=await $s(t,cv(n,{idToken:s}));B(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?gv(r.providerUserInfo):[],a=_v(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new xh(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function pv(t){const e=Fe(t);await qi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _v(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function gv(t){return t.map(e=>{var{providerId:n}=e,s=ya(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t,e){const n=await Ph(t,{},async()=>{const s=hs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Oh(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Nh.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await mv(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new js;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(B(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new js,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ya(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new xh(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await $s(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uv(this,e)}reload(){return pv(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await qi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $s(this,lv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,P=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,F=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:x,emailVerified:G,isAnonymous:_e,providerData:be,stsTokenManager:Ue}=n;B(x&&Ue,e,"internal-error");const qe=js.fromJSON(this.name,Ue);B(typeof x=="string",e,"internal-error"),Lt(h,e.name),Lt(d,e.name),B(typeof G=="boolean",e,"internal-error"),B(typeof _e=="boolean",e,"internal-error"),Lt(_,e.name),Lt(m,e.name),Lt(w,e.name),Lt(P,e.name),Lt(k,e.name),Lt(F,e.name);const rt=new mn({uid:x,auth:e,email:d,emailVerified:G,displayName:h,isAnonymous:_e,photoURL:m,phoneNumber:_,tenantId:w,stsTokenManager:qe,createdAt:k,lastLoginAt:F});return be&&Array.isArray(be)&&(rt.providerData=be.map($e=>Object.assign({},$e))),P&&(rt._redirectEventId=P),rt}static async _fromIdTokenResponse(e,n,s=!1){const i=new js;i.updateFromServerResponse(n);const r=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await qi(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dh.type="NONE";const Xl=Dh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t,e,n){return`firebase:${t}:${e}:${n}`}class jn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Di(this.userKey,i.apiKey,r),this.fullPersistenceKey=Di("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new jn(wt(Xl),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||wt(Xl);const o=Di(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=mn._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new jn(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new jn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bh(e))return"Blackberry";if(Wh(e))return"Webos";if(Ia(e))return"Safari";if((e.includes("chrome/")||Lh(e))&&!e.includes("edge/"))return"Chrome";if(Uh(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Mh(t=Re()){return/firefox\//i.test(t)}function Ia(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lh(t=Re()){return/crios\//i.test(t)}function Fh(t=Re()){return/iemobile/i.test(t)}function Uh(t=Re()){return/android/i.test(t)}function Bh(t=Re()){return/blackberry/i.test(t)}function Wh(t=Re()){return/webos/i.test(t)}function Sr(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vv(t=Re()){var e;return Sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yv(){return Cg()&&document.documentMode===10}function Hh(t=Re()){return Sr(t)||Uh(t)||Wh(t)||Bh(t)||/windows phone/i.test(t)||Fh(t)}function Ev(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t,e=[]){let n;switch(t){case"Browser":n=Zl(Re());break;case"Worker":n=`${Zl(Re())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ec(this),this.idTokenSubscription=new ec(this),this.beforeStateQueue=new bv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ah,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await jn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Fe(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await jn.create(this,[wt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$h(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function ri(t){return Fe(t)}class ec{constructor(e){this.auth=e,this.observer=null,this.addObserver=Og(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Iv(t,e,n){const s=ri(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=jh(e),{host:o,port:a}=Cv(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Tv()}function jh(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Cv(t){const e=jh(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:tc(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:tc(o)}}}function tc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Tv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(e){return bt("not implemented")}_linkToIdToken(e,n){return bt("not implemented")}_getReauthenticationResolver(e){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t,e){return ov(t,"POST","/v1/accounts:signInWithIdp",rv(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="http://localhost";class bn extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ya(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new bn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Vn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vn(e,n)}buildRequest(){const e={requestUri:Sv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Ca{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt extends oi{constructor(){super("facebook.com")}static credential(e){return bn._fromParams({providerId:Wt.PROVIDER_ID,signInMethod:Wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wt.credentialFromTaggedObject(e)}static credentialFromError(e){return Wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wt.credential(e.oauthAccessToken)}catch{return null}}}Wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return bn._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ht.credentialFromTaggedObject(e)}static credentialFromError(e){return Ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ht.credential(n,s)}catch{return null}}}Ht.GOOGLE_SIGN_IN_METHOD="google.com";Ht.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends oi{constructor(){super("github.com")}static credential(e){return bn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $t.credential(e.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends oi{constructor(){super("twitter.com")}static credential(e,n){return bn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return jt.credential(n,s)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await mn._fromIdTokenResponse(e,s,i),o=nc(s);return new Xn({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=nc(s);return new Xn({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function nc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends nn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Gi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Gi(e,n,s,i)}}function zh(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Gi._fromErrorAndOperation(t,r,e,s):r})}async function Rv(t,e,n=!1){const s=await $s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xn._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Av(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await $s(t,zh(s,i,e,t),n);B(r.idToken,s,"internal-error");const o=wa(r.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),Xn._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&gt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(t,e,n=!1){const s="signIn",i=await zh(t,s,e),r=await Xn._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Nv(t,e,n,s){return Fe(t).onIdTokenChanged(e,n,s)}function Pv(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function oT(t){return Fe(t).signOut()}const Yi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yi,"1"),this.storage.removeItem(Yi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){const t=Re();return Ia(t)||Sr(t)}const xv=1e3,Dv=10;class qh extends Kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ov()&&Ev(),this.fallbackToPolling=Hh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);yv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Dv):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},xv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qh.type="LOCAL";const Mv=qh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh extends Kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gh.type="SESSION";const Yh=Gh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Rr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await Lv(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ta("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return window}function Uv(t){pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(){return typeof pt().WorkerGlobalScope<"u"&&typeof pt().importScripts=="function"}async function Bv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wv(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hv(){return Qh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh="firebaseLocalStorageDb",$v=1,Qi="firebaseLocalStorage",Xh="fbase_key";class ai{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ar(t,e){return t.transaction([Qi],e?"readwrite":"readonly").objectStore(Qi)}function jv(){const t=indexedDB.deleteDatabase(Jh);return new ai(t).toPromise()}function ko(){const t=indexedDB.open(Jh,$v);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Qi,{keyPath:Xh})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Qi)?e(s):(s.close(),await jv(),e(await ko()))})})}async function sc(t,e,n){const s=Ar(t,!0).put({[Xh]:e,value:n});return new ai(s).toPromise()}async function Vv(t,e){const n=Ar(t,!1).get(e),s=await new ai(n).toPromise();return s===void 0?null:s.value}function ic(t,e){const n=Ar(t,!0).delete(e);return new ai(n).toPromise()}const zv=800,Kv=3;class Zh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ko(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Kv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rr._getInstance(Hv()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bv(),!this.activeServiceWorker)return;this.sender=new Fv(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ko();return await sc(e,Yi,"1"),await ic(e,Yi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>sc(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Vv(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ic(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ar(i,!1).getAll();return new ai(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zh.type="LOCAL";const qv=Zh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Yv(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=ft("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Gv().appendChild(s)})}function Qv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ii(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(t,e){return e?wt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa extends Vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jv(t){return kv(t.auth,new Sa(t),t.bypassAuthState)}function Xv(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Av(n,new Sa(t),t.bypassAuthState)}async function Zv(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Rv(n,new Sa(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jv;case"linkViaPopup":case"linkViaRedirect":return Zv;case"reauthViaPopup":case"reauthViaRedirect":return Xv;default:gt(this.auth,"internal-error")}}resolve(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new ii(2e3,1e4);class Mn extends td{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Nt(this.filter.length===1,"Popup operations only handle one event");const e=Ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,ey.get())};e()}}Mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="pendingRedirect",Mi=new Map;class ny extends td{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mi.get(this.auth._key());if(!e){try{const s=await sy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mi.set(this.auth._key(),e)}return this.bypassAuthState||Mi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sy(t,e){const n=sd(e),s=nd(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}async function iy(t,e){return nd(t)._set(sd(e),"true")}function ry(t,e){Mi.set(t._key(),e)}function nd(t){return wt(t._redirectPersistence)}function sd(t){return Di(ty,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e,n){return oy(t,e,n)}async function oy(t,e,n){const s=ri(t);Jm(t,e,Ca),await s._initializationPromise;const i=ed(s,n);return await iy(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function lT(t,e){return await ri(t)._initializationPromise,id(t,e,!1)}async function id(t,e,n=!1){const s=ri(t),i=ed(s,e),o=await new ny(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay=10*60*1e3;class ly{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cy(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rd(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ft(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ay&&this.cachedEventUids.clear(),this.cachedEventUids.has(rc(e))}saveEventToCache(e){this.cachedEventUids.add(rc(e)),this.lastProcessedEventTime=Date.now()}}function rc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cy(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t,e={}){return Tr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dy=/^https?/;async function fy(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uy(t);for(const n of e)try{if(py(n))return}catch{}gt(t,"unauthorized-domain")}function py(t){const e=Ao(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!dy.test(n))return!1;if(hy.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=new ii(3e4,6e4);function oc(){const t=pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gy(t){return new Promise((e,n)=>{var s,i,r;function o(){oc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{oc(),n(ft(t,"network-request-failed"))},timeout:_y.get()})}if(!((i=(s=pt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=pt().gapi)===null||r===void 0)&&r.load)o();else{const a=Qv("iframefcb");return pt()[a]=()=>{gapi.load?o():n(ft(t,"network-request-failed"))},Yv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Li=null,e})}let Li=null;function my(t){return Li=Li||gy(t),Li}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new ii(5e3,15e3),yy="__/auth/iframe",Ey="emulator/auth/iframe",by={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Iy(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ba(e,Ey):`https://${t.config.authDomain}/${yy}`,s={apiKey:e.apiKey,appName:t.name,v:si},i=wy.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${hs(s).slice(1)}`}async function Cy(t){const e=await my(t),n=pt().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Iy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:by,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=ft(t,"network-request-failed"),a=pt().setTimeout(()=>{r(o)},vy.get());function l(){pt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sy=500,Ry=600,Ay="_blank",ky="http://localhost";class ac{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ny(t,e,n,s=Sy,i=Ry){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ty),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Re().toLowerCase();n&&(a=Lh(c)?Ay:n),Mh(c)&&(e=e||ky,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[_,m])=>`${d}${_}=${m},`,"");if(vv(c)&&a!=="_self")return Py(e||"",a),new ac(null);const h=window.open(e||"",a,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new ac(h)}function Py(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="__/auth/handler",xy="emulator/auth/handler";function lc(t,e,n,s,i,r){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:si,eventId:i};if(e instanceof Ca){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wo(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof oi){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Dy(t)}?${hs(a).slice(1)}`}function Dy({config:t}){return t.emulator?ba(t,xy):`https://${t.authDomain}/${Oy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="webStorageSupport";class My{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yh,this._completeRedirectFn=id,this._overrideRedirectResult=ry}async _openPopup(e,n,s,i){var r;Nt((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=lc(e,n,s,Ao(),i);return Ny(e,o,Ta())}async _openRedirect(e,n,s,i){return await this._originValidation(e),Uv(lc(e,n,s,Ao(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(Nt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Cy(e),s=new ly(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jr,{type:Jr},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Jr];o!==void 0&&n(!!o),gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fy(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hh()||Ia()||Sr()}}const Ly=My;var cc="@firebase/auth",uc="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function By(t){Xt(new kt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{B(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$h(t)},u=new wv(a,l,c);return Zm(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Xt(new kt("auth-internal",e=>{const n=ri(e.getProvider("auth").getImmediate());return(s=>new Fy(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(cc,uc,Uy(t)),Tt(cc,uc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=5*60,Hy=yh("authIdTokenMaxAge")||Wy;let hc=null;const $y=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Hy)return;const i=n==null?void 0:n.token;hc!==i&&(hc=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cT(t=va()){const e=ni(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Xm(t,{popupRedirectResolver:Ly,persistence:[qv,Mv,Yh]}),s=yh("authTokenSyncURL");if(s){const r=$y(s);Pv(n,r,()=>r(n.currentUser)),Nv(n,o=>r(o))}const i=vh("auth");return i&&Iv(n,`http://${i}`),n}By("Browser");const dc="@firebase/database",fc="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od="";function jy(t){od=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ws(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return mt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Vy(e)}}catch{}return new zy},pn=ad("localStorage"),No=ad("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Cr("@firebase/database"),Ky=function(){let t=1;return function(){return t++}}(),ld=function(t){const e=Mg(t),n=new Pg;n.update(e);const s=n.digest();return br.encodeByteArray(s)},li=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=li.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let vn=null,pc=!0;const qy=function(t,e){I(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(zn.logLevel=se.VERBOSE,vn=zn.log.bind(zn),e&&No.set("logging_enabled",!0)):typeof t=="function"?vn=t:(vn=null,No.remove("logging_enabled"))},we=function(...t){if(pc===!0&&(pc=!1,vn===null&&No.get("logging_enabled")===!0&&qy(!0)),vn){const e=li.apply(null,t);vn(e)}},ci=function(t){return function(...e){we(t,...e)}},Po=function(...t){const e="FIREBASE INTERNAL ERROR: "+li(...t);zn.error(e)},Pt=function(...t){const e=`FIREBASE FATAL ERROR: ${li(...t)}`;throw zn.error(e),new Error(e)},Ne=function(...t){const e="FIREBASE WARNING: "+li(...t);zn.warn(e)},Gy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ra=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Yy=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Zn="[MIN_NAME]",wn="[MAX_NAME]",Tn=function(t,e){if(t===e)return 0;if(t===Zn||e===wn)return-1;if(e===Zn||t===wn)return 1;{const n=_c(t),s=_c(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Qy=function(t,e){return t===e?0:t<e?-1:1},vs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Aa=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=Aa(t[e[s]]);return n+="}",n},cd=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ce(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ud=function(t){I(!Ra(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Jy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Xy=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Zy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const eE=new RegExp("^-?(0*)\\d{1,10}$"),tE=-2147483648,nE=2147483647,_c=function(t){if(eE.test(t)){const e=Number(t);if(e>=tE&&e<=nE)return e}return null},ds=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ne("Exception was thrown by user callback.",n),e},Math.floor(0))}},sE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Rs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Ne(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(we("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ne(e)}}class Kn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Kn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka="5",hd="v",dd="s",fd="r",pd="f",_d=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gd="ls",md="p",Oo="ac",vd="websocket",yd="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,n,s,i,r=!1,o="",a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function oE(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function bd(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let s;if(e===vd)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===yd)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oE(t)&&(n.ns=t.namespace);const i=[];return Ce(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(){this.counters_={}}incrementCounter(e,n=1){mt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _g(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr={},Zr={};function Na(t){const e=t.toString();return Xr[e]||(Xr[e]=new aE),Xr[e]}function lE(t,e){const n=t.toString();return Zr[n]||(Zr[n]=e()),Zr[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ds(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="start",uE="close",hE="pLPCommand",dE="pRTLPCB",wd="id",Id="pw",Cd="ser",fE="cb",pE="seg",_E="ts",gE="d",mE="dframe",Td=1870,Sd=30,vE=Td-Sd,yE=25e3,EE=3e4;class Ln{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ci(e),this.stats_=Na(n),this.urlFn=l=>(this.appCheckToken&&(l[Oo]=this.appCheckToken),bd(n,yd,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new cE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(EE)),Yy(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Pa((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===gc)this.id=a,this.password=l;else if(o===uE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[gc]="t",s[Cd]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[fE]=this.scriptTagHolder.uniqueCallbackIdentifier),s[hd]=ka,this.transportSessionId&&(s[dd]=this.transportSessionId),this.lastSessionId&&(s[gd]=this.lastSessionId),this.applicationId&&(s[md]=this.applicationId),this.appCheckToken&&(s[Oo]=this.appCheckToken),typeof location<"u"&&location.hostname&&_d.test(location.hostname)&&(s[fd]=pd);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ln.forceAllow_=!0}static forceDisallow(){Ln.forceDisallow_=!0}static isAvailable(){return Ln.forceAllow_?!0:!Ln.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Jy()&&!Xy()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_h(n),i=cd(s,vE);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[mE]="t",s[wd]=e,s[Id]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Pa{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ky(),window[hE+this.uniqueCallbackIdentifier]=e,window[dE+this.uniqueCallbackIdentifier]=n,this.myIFrame=Pa.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){we("frame writing exception"),a.stack&&we(a.stack),we(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||we("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[wd]=this.myID,e[Id]=this.myPW,e[Cd]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sd+s.length<=Td;){const o=this.pendingSegs.shift();s=s+"&"+pE+i+"="+o.seg+"&"+_E+i+"="+o.ts+"&"+gE+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(yE)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{we("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE=16384,wE=45e3;let Ji=null;typeof MozWebSocket<"u"?Ji=MozWebSocket:typeof WebSocket<"u"&&(Ji=WebSocket);class Xe{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ci(this.connId),this.stats_=Na(n),this.connURL=Xe.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[hd]=ka,typeof location<"u"&&location.hostname&&_d.test(location.hostname)&&(o[fd]=pd),n&&(o[dd]=n),s&&(o[gd]=s),i&&(o[Oo]=i),r&&(o[md]=r),bd(e,vd,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pn.set("previous_websocket_failure",!0);try{let s;bh(),this.mySock=new Ji(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Xe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ji!==null&&!Xe.forceDisallow_}static previouslyFailed(){return pn.isInMemoryStorage||pn.get("previous_websocket_failure")===!0}markConnectionHealthy(){pn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Ws(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=cd(n,bE);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(wE))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xe.responsesRequiredToBeHealthy=2;Xe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ln,Xe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Xe&&Xe.isAvailable();let s=n&&!Xe.previouslyFailed();if(e.webSocketOnly&&(n||Ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Xe];else{const i=this.transports_=[];for(const r of Vs.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Vs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Vs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IE=6e4,CE=5e3,TE=10*1024,SE=100*1024,eo="t",mc="d",RE="s",vc="r",AE="e",yc="o",Ec="a",bc="n",wc="p",kE="h";class NE{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ci("c:"+this.id+":"),this.transportManager_=new Vs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Rs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>SE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>TE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(eo in e){const n=e[eo];n===Ec?this.upgradeIfSecondaryHealthy_():n===vc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===yc&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=vs("t",e),s=vs("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:wc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Ec,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=vs("t",e),s=vs("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=vs(eo,e);if(mc in e){const s=e[mc];if(n===kE)this.onHandshake_(s);else if(n===bc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===RE?this.onConnectionShutdown_(s):n===vc?this.onReset_(s):n===AE?Po("Server Error: "+s):n===yc?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Po("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ka!==s&&Ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Rs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(IE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(CE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:wc,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends Ad{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!_a()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xi}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=32,Cc=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function J(){return new ne("")}function q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zt(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function Oa(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function PE(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zs(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function kd(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function he(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ne)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ne(n,0)}function z(t){return t.pieceNum_>=t.pieces_.length}function ke(t,e){const n=q(t),s=q(e);if(n===null)return e;if(n===s)return ke(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function OE(t,e){const n=zs(t,0),s=zs(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Tn(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Nd(t,e){if(Zt(t)!==Zt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function ze(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Zt(t)>Zt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class xE{constructor(e,n){this.errorPrefix_=n,this.parts_=zs(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ir(this.parts_[s]);Pd(this)}}function DE(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ir(e),Pd(t)}function ME(t){const e=t.parts_.pop();t.byteLength_-=Ir(e),t.parts_.length>0&&(t.byteLength_-=1)}function Pd(t){if(t.byteLength_>Cc)throw new Error(t.errorPrefix_+"has a key path longer than "+Cc+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ic)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ic+") or object contains a cycle "+un(t))}function un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa extends Ad{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new xa}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=1e3,LE=60*5*1e3,Tc=30*1e3,FE=1.3,UE=3e4,BE="server_kill",Sc=3;class St extends Rd{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=St.nextPersistentConnectionId_++,this.log_=ci("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ys,this.maxReconnectDelay_=LE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!bh())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");xa.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new At,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;St.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&mt(e,"w")){const s=Jn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ng(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Tc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=kg(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Po("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ys,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ys,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UE&&(this.reconnectDelay_=ys),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*FE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+St.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?we("getToken() completed but was canceled"):(we("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new NE(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{Ne(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(BE)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ne(h),l())}}}interrupt(e){we("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){we("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wo(this.interruptReasons_)&&(this.reconnectDelay_=ys,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Aa(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ne(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){we("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sc&&(this.reconnectDelay_=Tc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){we("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+od.replace(/\./g,"-")]=1,_a()?e["framework.cordova"]=1:Eh()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xi.getInstance().currentlyOnline();return wo(this.interruptReasons_)&&e}}St.nextPersistentConnectionId_=0;St.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new V(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new V(Zn,e),i=new V(Zn,n);return this.compare(s,i)!==0}minPost(){return V.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi;class Od extends kr{static get __EMPTY_NODE(){return wi}static set __EMPTY_NODE(e){wi=e}compare(e,n){return Tn(e.name,n.name)}isDefinedOn(e){throw cs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return V.MIN}maxPost(){return new V(wn,wi)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new V(e,wi)}toString(){return".key"}}const qn=new Od;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ee{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ee.RED,this.left=i??Le.EMPTY_NODE,this.right=r??Le.EMPTY_NODE}copy(e,n,s,i,r){return new Ee(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Le.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ee.RED=!0;Ee.BLACK=!1;class WE{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ee(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ee.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ii(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ii(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ii(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ii(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new WE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e){return Tn(t.name,e.name)}function Da(t,e){return Tn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo;function $E(t){xo=t}const xd=function(t){return typeof t=="number"?"number:"+ud(t):"string:"+t},Dd=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&mt(e,".sv"),"Priority must be a string or number.")}else I(t===xo||t.isEmpty(),"priority of unexpected type.");I(t===xo||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rc;class ye{constructor(e,n=ye.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Dd(this.priorityNode_)}static set __childrenNodeConstructor(e){Rc=e}static get __childrenNodeConstructor(){return Rc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ye(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return z(e)?this:q(e)===".priority"?this.priorityNode_:ye.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ye.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(I(s!==".priority"||Zt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ye.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+xd(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ud(this.value_):e+=this.value_,this.lazyHash_=ld(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ye.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ye.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=ye.VALUE_TYPE_ORDER.indexOf(n),r=ye.VALUE_TYPE_ORDER.indexOf(s);return I(i>=0,"Unknown leaf type: "+n),I(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ye.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Md,Ld;function jE(t){Md=t}function VE(t){Ld=t}class zE extends kr{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return V.MIN}maxPost(){return new V(wn,new ye("[PRIORITY-POST]",Ld))}makePost(e,n){const s=Md(e);return new V(n,new ye("[PRIORITY-POST]",s))}toString(){return".priority"}}const de=new zE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=Math.log(2);class qE{constructor(e){const n=r=>parseInt(Math.log(r)/KE,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zi=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=t[l],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,null,null);{const _=parseInt(u/2,10)+l,m=i(l,_),w=i(_+1,c);return h=t[_],d=n?n(h):h,new Ee(d,h.node,Ee.BLACK,m,w)}},r=function(l){let c=null,u=null,h=t.length;const d=function(m,w){const P=h-m,k=h;h-=m;const F=i(P+1,k),x=t[P],G=n?n(x):x;_(new Ee(G,x.node,w,null,F))},_=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),P=Math.pow(2,l.count-(m+1));w?d(P,Ee.BLACK):(d(P,Ee.BLACK),d(P,Ee.RED))}return u},o=new qE(t.length),a=r(o);return new Le(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to;const Nn={};class It{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Nn&&de,"ChildrenNode.ts has not been loaded"),to=to||new It({".priority":Nn},{".priority":de}),to}get(e){const n=Jn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return mt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==qn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(V.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Zi(s,e.getCompare()):a=Nn;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new It(u,c)}addToIndexes(e,n){const s=Vi(this.indexes_,(i,r)=>{const o=Jn(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),i===Nn)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(V.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Zi(a,o.getCompare())}else return Nn;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new V(e.name,a))),l.insert(e,e.node)}});return new It(s,this.indexSet_)}removeFromIndexes(e,n){const s=Vi(this.indexes_,i=>{if(i===Nn)return i;{const r=n.get(e.name);return r?i.remove(new V(e.name,r)):i}});return new It(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es;class U{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Dd(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Es||(Es=new U(new Le(Da),null,It.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Es}updatePriority(e){return this.children_.isEmpty()?this:new U(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Es:n}}getChild(e){const n=q(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new V(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Es:this.priorityNode_;return new U(i,o,r)}}updateChild(e,n){const s=q(e);if(s===null)return n;{I(q(e)!==".priority"||Zt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(de,(o,a)=>{n[o]=a.val(e),s++,r&&U.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+xd(this.getPriority().val())+":"),this.forEachChild(de,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ld(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new V(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new V(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new V(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,V.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ui?-1:0}withIndex(e){if(e===qn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new U(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===qn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(de),i=n.getIterator(de);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===qn?null:this.indexMap_.get(e.toString())}}U.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class GE extends U{constructor(){super(new Le(Da),U.EMPTY_NODE,It.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return U.EMPTY_NODE}isEmpty(){return!1}}const ui=new GE;Object.defineProperties(V,{MIN:{value:new V(Zn,U.EMPTY_NODE)},MAX:{value:new V(wn,ui)}});Od.__EMPTY_NODE=U.EMPTY_NODE;ye.__childrenNodeConstructor=U;$E(ui);VE(ui);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=!0;function ge(t,e=null){if(t===null)return U.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ye(n,ge(e))}if(!(t instanceof Array)&&YE){const n=[];let s=!1;if(Ce(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ge(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new V(o,l)))}}),n.length===0)return U.EMPTY_NODE;const r=Zi(n,HE,o=>o.name,Da);if(s){const o=Zi(n,de.getCompare());return new U(r,ge(e),new It({".priority":o},{".priority":de}))}else return new U(r,ge(e),It.Default)}else{let n=U.EMPTY_NODE;return Ce(t,(s,i)=>{if(mt(t,s)&&s.substring(0,1)!=="."){const r=ge(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ge(e))}}jE(ge);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE extends kr{constructor(e){super(),this.indexPath_=e,I(!z(e)&&q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Tn(e.name,n.name):r}makePost(e,n){const s=ge(e),i=U.EMPTY_NODE.updateChild(this.indexPath_,s);return new V(n,i)}maxPost(){const e=U.EMPTY_NODE.updateChild(this.indexPath_,ui);return new V(wn,e)}toString(){return zs(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE extends kr{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Tn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return V.MIN}maxPost(){return V.MAX}makePost(e,n){const s=ge(e);return new V(n,s)}toString(){return".value"}}const XE=new JE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){return{type:"value",snapshotNode:t}}function es(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ks(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ZE(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Ks(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(es(n,s)):o.trackChildChange(qs(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(de,(i,r)=>{n.hasChild(i)||s.trackChildChange(Ks(i,r))}),n.isLeafNode()||n.forEachChild(de,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(qs(i,r,o))}else s.trackChildChange(es(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?U.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.indexedFilter_=new Ma(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Gs.getStartPost_(e),this.endPost_=Gs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new V(n,s))||(s=U.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=U.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(U.EMPTY_NODE);const r=this;return n.forEachChild(de,(o,a)=>{r.matches(new V(o,a))||(i=i.updateImmediateChild(o,U.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Gs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new V(n,s))||(s=U.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=U.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=U.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(U.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,U.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,_)=>h(_,d)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new V(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===n||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const _=d==null?1:o(d,l);if(u&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(qs(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Ks(n,h));const w=a.updateImmediateChild(n,U.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(es(d.name,d.node)),w.updateImmediateChild(d.name,d.node)):w}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Ks(c.name,c.node)),r.trackChildChange(es(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,U.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=de}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Zn}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===de}copy(){const e=new La;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tb(t){return t.loadsAllData()?new Ma(t.getIndex()):t.hasLimit()?new eb(t):new Gs(t)}function Ac(t){const e={};if(t.isDefault())return e;let n;if(t.index_===de?n="$priority":t.index_===XE?n="$value":t.index_===qn?n="$key":(I(t.index_ instanceof QE,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kc(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==de&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Rd{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ci("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=er.getListenId_(e,s),a={};this.listens_[o]=a;const l=Ac(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Jn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,n){const s=er.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Ac(e._queryParams),s=e._path.toString(),i=new At;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ws(a.responseText)}catch{Ne("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Ne("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this.rootNode_=U.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return{value:null,children:new Map}}function Ud(t,e,n){if(z(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=q(e);t.children.has(s)||t.children.set(s,tr());const i=t.children.get(s);e=ae(e),Ud(i,e,n)}}function Do(t,e,n){t.value!==null?n(e,t.value):sb(t,(s,i)=>{const r=new ne(e.toString()+"/"+s);Do(i,r,n)})}function sb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ce(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc=10*1e3,rb=30*1e3,ob=5*60*1e3;class ab{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ib(e);const s=Nc+(rb-Nc)*Math.random();Rs(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ce(e,(i,r)=>{r>0&&mt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Rs(this.reportStats_.bind(this),Math.floor(Math.random()*2*ob))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(et||(et={}));function Fa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ua(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ba(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=et.ACK_USER_WRITE,this.source=Fa()}operationForChild(e){if(z(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new nr(J(),n,this.revert)}}else return I(q(this.path)===e,"operationForChild called for unrelated child."),new nr(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,n){this.source=e,this.path=n,this.type=et.LISTEN_COMPLETE}operationForChild(e){return z(this.path)?new Ys(this.source,J()):new Ys(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=et.OVERWRITE}operationForChild(e){return z(this.path)?new In(this.source,J(),this.snap.getImmediateChild(e)):new In(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=et.MERGE}operationForChild(e){if(z(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new In(this.source,J(),n.value):new ts(this.source,J(),n)}else return I(q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ts(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(z(e))return this.isFullyInitialized()&&!this.filtered_;const n=q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function cb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(ZE(o.childName,o.snapshotNode))}),bs(t,i,"child_removed",e,s,n),bs(t,i,"child_added",e,s,n),bs(t,i,"child_moved",r,s,n),bs(t,i,"child_changed",e,s,n),bs(t,i,"value",e,s,n),i}function bs(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>hb(t,a,l)),o.forEach(a=>{const l=ub(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ub(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function hb(t,e,n){if(e.childName==null||n.childName==null)throw cs("Should only compare child_ events.");const s=new V(e.childName,e.snapshotNode),i=new V(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(t,e){return{eventCache:t,serverCache:e}}function As(t,e,n,s){return Nr(new en(e,n,s),t.serverCache)}function Bd(t,e,n,s){return Nr(t.eventCache,new en(e,n,s))}function sr(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Cn(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let no;const db=()=>(no||(no=new Le(Qy)),no);class oe{constructor(e,n=db()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Ce(e,(s,i)=>{n=n.set(new ne(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:J(),value:this.value};if(z(e))return null;{const s=q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ae(e),n);return r!=null?{path:he(new ne(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(z(e))return this;{const n=q(e),s=this.children.get(n);return s!==null?s.subtree(ae(e)):new oe(null)}}set(e,n){if(z(e))return new oe(n,this.children);{const s=q(e),r=(this.children.get(s)||new oe(null)).set(ae(e),n),o=this.children.insert(s,r);return new oe(this.value,o)}}remove(e){if(z(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=q(e),s=this.children.get(n);if(s){const i=s.remove(ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new oe(null):new oe(this.value,r)}else return this}}get(e){if(z(e))return this.value;{const n=q(e),s=this.children.get(n);return s?s.get(ae(e)):null}}setTree(e,n){if(z(e))return n;{const s=q(e),r=(this.children.get(s)||new oe(null)).setTree(ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new oe(this.value,o)}}fold(e){return this.fold_(J(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(he(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,J(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(z(e))return null;{const r=q(e),o=this.children.get(r);return o?o.findOnPath_(ae(e),he(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,J(),n)}foreachOnPath_(e,n,s){if(z(e))return this;{this.value&&s(n,this.value);const i=q(e),r=this.children.get(i);return r?r.foreachOnPath_(ae(e),he(n,i),s):new oe(null)}}foreach(e){this.foreach_(J(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(he(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.writeTree_=e}static empty(){return new st(new oe(null))}}function ks(t,e,n){if(z(e))return new st(new oe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ke(i,e);return r=r.updateChild(o,n),new st(t.writeTree_.set(i,r))}else{const i=new oe(n),r=t.writeTree_.setTree(e,i);return new st(r)}}}function Mo(t,e,n){let s=t;return Ce(n,(i,r)=>{s=ks(s,he(e,i),r)}),s}function Pc(t,e){if(z(e))return st.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new st(n)}}function Lo(t,e){return Sn(t,e)!=null}function Sn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ke(n.path,e)):null}function Oc(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(de,(s,i)=>{e.push(new V(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new V(s,i.value))}),e}function Yt(t,e){if(z(e))return t;{const n=Sn(t,e);return n!=null?new st(new oe(n)):new st(t.writeTree_.subtree(e))}}function Fo(t){return t.writeTree_.isEmpty()}function ns(t,e){return Wd(J(),t.writeTree_,e)}function Wd(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Wd(he(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(he(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t,e){return Vd(e,t)}function fb(t,e,n,s,i){I(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ks(t.visibleWrites,e,n)),t.lastWriteId=s}function pb(t,e,n,s){I(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Mo(t.visibleWrites,e,n),t.lastWriteId=s}function _b(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function gb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&mb(a,s.path)?i=!1:ze(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return vb(t),!0;if(s.snap)t.visibleWrites=Pc(t.visibleWrites,s.path);else{const a=s.children;Ce(a,l=>{t.visibleWrites=Pc(t.visibleWrites,he(s.path,l))})}return!0}else return!1}function mb(t,e){if(t.snap)return ze(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ze(he(t.path,n),e))return!0;return!1}function vb(t){t.visibleWrites=Hd(t.allWrites,yb,J()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function yb(t){return t.visible}function Hd(t,e,n){let s=st.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)ze(n,o)?(a=ke(n,o),s=ks(s,a,r.snap)):ze(o,n)&&(a=ke(o,n),s=ks(s,J(),r.snap.getChild(a)));else if(r.children){if(ze(n,o))a=ke(n,o),s=Mo(s,a,r.children);else if(ze(o,n))if(a=ke(o,n),z(a))s=Mo(s,J(),r.children);else{const l=Jn(r.children,q(a));if(l){const c=l.getChild(ae(a));s=ks(s,J(),c)}}}else throw cs("WriteRecord should have .snap or .children")}}return s}function $d(t,e,n,s,i){if(!s&&!i){const r=Sn(t.visibleWrites,e);if(r!=null)return r;{const o=Yt(t.visibleWrites,e);if(Fo(o))return n;if(n==null&&!Lo(o,J()))return null;{const a=n||U.EMPTY_NODE;return ns(o,a)}}}else{const r=Yt(t.visibleWrites,e);if(!i&&Fo(r))return n;if(!i&&n==null&&!Lo(r,J()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ze(c.path,e)||ze(e,c.path))},a=Hd(t.allWrites,o,e),l=n||U.EMPTY_NODE;return ns(a,l)}}}function Eb(t,e,n){let s=U.EMPTY_NODE;const i=Sn(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(de,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Yt(t.visibleWrites,e);return n.forEachChild(de,(o,a)=>{const l=ns(Yt(r,new ne(o)),a);s=s.updateImmediateChild(o,l)}),Oc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Yt(t.visibleWrites,e);return Oc(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function bb(t,e,n,s,i){I(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=he(e,n);if(Lo(t.visibleWrites,r))return null;{const o=Yt(t.visibleWrites,r);return Fo(o)?i.getChild(n):ns(o,i.getChild(n))}}function wb(t,e,n,s){const i=he(e,n),r=Sn(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Yt(t.visibleWrites,i);return ns(o,s.getNode().getImmediateChild(n))}else return null}function Ib(t,e){return Sn(t.visibleWrites,e)}function Cb(t,e,n,s,i,r,o){let a;const l=Yt(t.visibleWrites,e),c=Sn(l,J());if(c!=null)a=c;else if(n!=null)a=ns(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=d.getNext();for(;_&&u.length<i;)h(_,s)!==0&&u.push(_),_=d.getNext();return u}else return[]}function Tb(){return{visibleWrites:st.empty(),allWrites:[],lastWriteId:-1}}function ir(t,e,n,s){return $d(t.writeTree,t.treePath,e,n,s)}function Wa(t,e){return Eb(t.writeTree,t.treePath,e)}function xc(t,e,n,s){return bb(t.writeTree,t.treePath,e,n,s)}function rr(t,e){return Ib(t.writeTree,he(t.treePath,e))}function Sb(t,e,n,s,i,r){return Cb(t.writeTree,t.treePath,e,n,s,i,r)}function Ha(t,e,n){return wb(t.writeTree,t.treePath,e,n)}function jd(t,e){return Vd(he(t.treePath,e),t.writeTree)}function Vd(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,qs(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Ks(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,es(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,qs(s,e.snapshotNode,i.oldSnap));else throw cs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const zd=new Ab;class $a{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new en(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ha(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Cn(this.viewCache_),r=Sb(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){return{filter:t}}function Nb(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Pb(t,e,n,s,i){const r=new Rb;let o,a;if(n.type===et.OVERWRITE){const c=n;c.source.fromUser?o=Uo(t,e,c.path,c.snap,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!z(c.path),o=or(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===et.MERGE){const c=n;c.source.fromUser?o=xb(t,e,c.path,c.children,s,i,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Bo(t,e,c.path,c.children,s,i,a,r))}else if(n.type===et.ACK_USER_WRITE){const c=n;c.revert?o=Lb(t,e,c.path,s,i,r):o=Db(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===et.LISTEN_COMPLETE)o=Mb(t,e,n.path,s,r);else throw cs("Unknown operation type: "+n.type);const l=r.getChanges();return Ob(e,o,l),{viewCache:o,changes:l}}function Ob(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=sr(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Fd(sr(e)))}}function Kd(t,e,n,s,i,r){const o=e.eventCache;if(rr(s,n)!=null)return e;{let a,l;if(z(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Cn(e),u=c instanceof U?c:U.EMPTY_NODE,h=Wa(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=ir(s,Cn(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=q(n);if(c===".priority"){I(Zt(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=xc(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=ae(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=xc(s,n,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Ha(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return As(e,a,o.isFullyInitialized()||z(n),t.filter.filtersNodes())}}function or(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(z(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),_,null)}else{const _=q(n);if(!l.isCompleteForPath(n)&&Zt(n)>1)return e;const m=ae(n),P=l.getNode().getImmediateChild(_).updateChild(m,s);_===".priority"?c=u.updatePriority(l.getNode(),P):c=u.updateChild(l.getNode(),_,P,m,zd,null)}const h=Bd(e,c,l.isFullyInitialized()||z(n),u.filtersNodes()),d=new $a(i,h,r);return Kd(t,h,n,i,d,a)}function Uo(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new $a(i,e,r);if(z(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=As(e,c,!0,t.filter.filtersNodes());else{const h=q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=As(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=ae(n),_=a.getNode().getImmediateChild(h);let m;if(z(d))m=s;else{const w=u.getCompleteChild(h);w!=null?Oa(d)===".priority"&&w.getChild(kd(d)).isEmpty()?m=w:m=w.updateChild(d,s):m=U.EMPTY_NODE}if(_.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),h,m,d,u,o);l=As(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Dc(t,e){return t.eventCache.isCompleteForChild(e)}function xb(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=he(n,l);Dc(e,q(u))&&(a=Uo(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=he(n,l);Dc(e,q(u))||(a=Uo(t,a,u,c,i,r,o))}),a}function Mc(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Bo(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;z(n)?c=s:c=new oe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),m=Mc(t,_,d);l=or(t,l,new ne(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const _=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!_){const m=e.serverCache.getNode().getImmediateChild(h),w=Mc(t,m,d);l=or(t,l,new ne(h),w,i,r,o,a)}}),l}function Db(t,e,n,s,i,r,o){if(rr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(z(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return or(t,e,n,l.getNode().getChild(n),i,r,a,o);if(z(n)){let c=new oe(null);return l.getNode().forEachChild(qn,(u,h)=>{c=c.set(new ne(u),h)}),Bo(t,e,n,c,i,r,a,o)}else return e}else{let c=new oe(null);return s.foreach((u,h)=>{const d=he(n,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Bo(t,e,n,c,i,r,a,o)}}function Mb(t,e,n,s,i){const r=e.serverCache,o=Bd(e,r.getNode(),r.isFullyInitialized()||z(n),r.isFiltered());return Kd(t,o,n,s,zd,i)}function Lb(t,e,n,s,i,r){let o;if(rr(s,n)!=null)return e;{const a=new $a(s,e,i),l=e.eventCache.getNode();let c;if(z(n)||q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ir(s,Cn(e));else{const h=e.serverCache.getNode();I(h instanceof U,"serverChildren would be complete if leaf node"),u=Wa(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=q(n);let h=Ha(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,ae(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,U.EMPTY_NODE,ae(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ir(s,Cn(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||rr(s,J())!=null,As(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Ma(s.getIndex()),r=tb(s);this.processor_=kb(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(U.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(U.EMPTY_NODE,a.getNode(),null),u=new en(l,o.isFullyInitialized(),i.filtersNodes()),h=new en(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Nr(h,u),this.eventGenerator_=new lb(this.query_)}get query(){return this.query_}}function Ub(t){return t.viewCache_.serverCache.getNode()}function Bb(t){return sr(t.viewCache_)}function Wb(t,e){const n=Cn(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!z(e)&&!n.getImmediateChild(q(e)).isEmpty())?n.getChild(e):null}function Lc(t){return t.eventRegistrations_.length===0}function Hb(t,e){t.eventRegistrations_.push(e)}function Fc(t,e,n){const s=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Uc(t,e,n,s){e.type===et.MERGE&&e.source.queryId!==null&&(I(Cn(t.viewCache_),"We should always have a full cache before handling merges"),I(sr(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=Pb(t.processor_,i,e,n,s);return Nb(t.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,qd(t,r.changes,r.viewCache.eventCache.getNode(),null)}function $b(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(de,(r,o)=>{s.push(es(r,o))}),n.isFullyInitialized()&&s.push(Fd(n.getNode())),qd(t,s,n.getNode(),e)}function qd(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return cb(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar;class Gd{constructor(){this.views=new Map}}function jb(t){I(!ar,"__referenceConstructor has already been defined"),ar=t}function Vb(){return I(ar,"Reference.ts has not been loaded"),ar}function zb(t){return t.views.size===0}function ja(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return I(r!=null,"SyncTree gave us an op for an invalid query."),Uc(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Uc(o,e,n,s));return r}}function Yd(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=ir(n,i?s:null),l=!1;a?l=!0:s instanceof U?(a=Wa(n,s),l=!1):(a=U.EMPTY_NODE,l=!1);const c=Nr(new en(a,l,!1),new en(s,i,!1));return new Fb(e,c)}return o}function Kb(t,e,n,s,i,r){const o=Yd(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Hb(o,n),$b(o,n)}function qb(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=tn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Fc(c,n,s)),Lc(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Fc(l,n,s)),Lc(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!tn(t)&&r.push(new(Vb())(e._repo,e._path)),{removed:r,events:o}}function Qd(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Qt(t,e){let n=null;for(const s of t.views.values())n=n||Wb(s,e);return n}function Jd(t,e){if(e._queryParams.loadsAllData())return Or(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Xd(t,e){return Jd(t,e)!=null}function tn(t){return Or(t)!=null}function Or(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lr;function Gb(t){I(!lr,"__referenceConstructor has already been defined"),lr=t}function Yb(){return I(lr,"Reference.ts has not been loaded"),lr}let Qb=1;class Bc{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=Tb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Zd(t,e,n,s,i){return fb(t.pendingWriteTree_,e,n,s,i),i?fs(t,new In(Fa(),e,n)):[]}function Jb(t,e,n,s){pb(t.pendingWriteTree_,e,n,s);const i=oe.fromObject(n);return fs(t,new ts(Fa(),e,i))}function Vt(t,e,n=!1){const s=_b(t.pendingWriteTree_,e);if(gb(t.pendingWriteTree_,e)){let r=new oe(null);return s.snap!=null?r=r.set(J(),!0):Ce(s.children,o=>{r=r.set(new ne(o),!0)}),fs(t,new nr(s.path,r,n))}else return[]}function hi(t,e,n){return fs(t,new In(Ua(),e,n))}function Xb(t,e,n){const s=oe.fromObject(n);return fs(t,new ts(Ua(),e,s))}function Zb(t,e){return fs(t,new Ys(Ua(),e))}function ew(t,e,n){const s=za(t,n);if(s){const i=Ka(s),r=i.path,o=i.queryId,a=ke(r,e),l=new Ys(Ba(o),a);return qa(t,r,l)}else return[]}function ef(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Xd(o,e))){const l=qb(o,e,n,s);zb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,_)=>tn(_));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const _=iw(d);for(let m=0;m<_.length;++m){const w=_[m],P=w.query,k=rf(t,w);t.listenProvider_.startListening(Ns(P),Qs(t,P),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ns(e),null):c.forEach(d=>{const _=t.queryToTagMap.get(xr(d));t.listenProvider_.stopListening(Ns(d),_)}))}rw(t,c)}return a}function tf(t,e,n,s){const i=za(t,s);if(i!=null){const r=Ka(i),o=r.path,a=r.queryId,l=ke(o,e),c=new In(Ba(a),l,n);return qa(t,o,c)}else return[]}function tw(t,e,n,s){const i=za(t,s);if(i){const r=Ka(i),o=r.path,a=r.queryId,l=ke(o,e),c=oe.fromObject(n),u=new ts(Ba(a),l,c);return qa(t,o,u)}else return[]}function nw(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,_)=>{const m=ke(d,i);r=r||Qt(_,m),o=o||tn(_)});let a=t.syncPointTree_.get(i);a?(o=o||tn(a),r=r||Qt(a,J())):(a=new Gd,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=U.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,m)=>{const w=Qt(m,J());w&&(r=r.updateImmediateChild(_,w))}));const c=Xd(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=xr(e);I(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const _=ow();t.queryToTagMap.set(d,_),t.tagToQueryMap.set(_,d)}const u=Pr(t.pendingWriteTree_,i);let h=Kb(a,e,n,u,r,l);if(!c&&!o&&!s){const d=Jd(a,e);h=h.concat(aw(t,e,d))}return h}function Va(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ke(o,e),c=Qt(a,l);if(c)return c});return $d(i,e,r,n,!0)}function sw(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const h=ke(c,n);s=s||Qt(u,h)});let i=t.syncPointTree_.get(n);i?s=s||Qt(i,J()):(i=new Gd,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new en(s,!0,!1):null,a=Pr(t.pendingWriteTree_,e._path),l=Yd(i,e,a,r?o.getNode():U.EMPTY_NODE,r);return Bb(l)}function fs(t,e){return nf(e,t.syncPointTree_,null,Pr(t.pendingWriteTree_,J()))}function nf(t,e,n,s){if(z(t.path))return sf(t,e,n,s);{const i=e.get(J());n==null&&i!=null&&(n=Qt(i,J()));let r=[];const o=q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=jd(s,o);r=r.concat(nf(a,l,c,u))}return i&&(r=r.concat(ja(i,t,s,n))),r}}function sf(t,e,n,s){const i=e.get(J());n==null&&i!=null&&(n=Qt(i,J()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=jd(s,o),u=t.operationForChild(o);u&&(r=r.concat(sf(u,a,l,c)))}),i&&(r=r.concat(ja(i,t,s,n))),r}function rf(t,e){const n=e.query,s=Qs(t,n);return{hashFn:()=>(Ub(e)||U.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?ew(t,n._path,s):Zb(t,n._path);{const r=Zy(i,n);return ef(t,n,null,r)}}}}function Qs(t,e){const n=xr(e);return t.queryToTagMap.get(n)}function xr(t){return t._path.toString()+"$"+t._queryIdentifier}function za(t,e){return t.tagToQueryMap.get(e)}function Ka(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function qa(t,e,n){const s=t.syncPointTree_.get(e);I(s,"Missing sync point for query tag that we're tracking");const i=Pr(t.pendingWriteTree_,e);return ja(s,n,i,null)}function iw(t){return t.fold((e,n,s)=>{if(n&&tn(n))return[Or(n)];{let i=[];return n&&(i=Qd(n)),Ce(s,(r,o)=>{i=i.concat(o)}),i}})}function Ns(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Yb())(t._repo,t._path):t}function rw(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=xr(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function ow(){return Qb++}function aw(t,e,n){const s=e._path,i=Qs(t,e),r=rf(t,n),o=t.listenProvider_.startListening(Ns(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)I(!tn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!z(c)&&u&&tn(u))return[Or(u).query];{let d=[];return u&&(d=d.concat(Qd(u).map(_=>_.query))),Ce(h,(_,m)=>{d=d.concat(m)}),d}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ns(u),Qs(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Ga(n)}node(){return this.node_}}class Ya{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=he(this.path_,e);return new Ya(this.syncTree_,n)}node(){return Va(this.syncTree_,this.path_)}}const lw=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Wc=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return cw(t[".sv"],e,n);if(typeof t[".sv"]=="object")return uw(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},cw=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},uw=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&I(!1,"Unexpected increment value: "+s);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},of=function(t,e,n,s){return Qa(e,new Ya(n,t),s)},af=function(t,e,n){return Qa(t,new Ga(e),n)};function Qa(t,e,n){const s=t.getPriority().val(),i=Wc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Wc(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ye(a,ge(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new ye(i))),o.forEachChild(de,(a,l)=>{const c=Qa(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Xa(t,e){let n=e instanceof ne?e:new ne(e),s=t,i=q(n);for(;i!==null;){const r=Jn(s.node.children,i)||{children:{},childCount:0};s=new Ja(i,s,r),n=ae(n),i=q(n)}return s}function ps(t){return t.node.value}function lf(t,e){t.node.value=e,Wo(t)}function cf(t){return t.node.childCount>0}function hw(t){return ps(t)===void 0&&!cf(t)}function Dr(t,e){Ce(t.node.children,(n,s)=>{e(new Ja(n,t,s))})}function uf(t,e,n,s){n&&!s&&e(t),Dr(t,i=>{uf(i,e,!0,s)}),n&&s&&e(t)}function dw(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function di(t){return new ne(t.parent===null?t.name:di(t.parent)+"/"+t.name)}function Wo(t){t.parent!==null&&fw(t.parent,t.name,t)}function fw(t,e,n){const s=hw(n),i=mt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Wo(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Wo(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw=/[\[\].#$\/\u0000-\u001F\u007F]/,_w=/[\[\].#$\u0000-\u001F\u007F]/,so=10*1024*1024,Za=function(t){return typeof t=="string"&&t.length!==0&&!pw.test(t)},hf=function(t){return typeof t=="string"&&t.length!==0&&!_w.test(t)},gw=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),hf(t)},mw=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ra(t)||t&&typeof t=="object"&&mt(t,".sv")},vw=function(t,e,n,s){s&&e===void 0||Mr(wr(t,"value"),e,n)},Mr=function(t,e,n){const s=n instanceof ne?new xE(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+un(s));if(typeof e=="function")throw new Error(t+"contains a function "+un(s)+" with contents = "+e.toString());if(Ra(e))throw new Error(t+"contains "+e.toString()+" "+un(s));if(typeof e=="string"&&e.length>so/3&&Ir(e)>so)throw new Error(t+"contains a string greater than "+so+" utf8 bytes "+un(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ce(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Za(o)))throw new Error(t+" contains an invalid key ("+o+") "+un(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);DE(s,o),Mr(t,a,s),ME(s)}),i&&r)throw new Error(t+' contains ".value" child '+un(s)+" in addition to actual children.")}},yw=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=zs(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Za(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(OE);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&ze(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Ew=function(t,e,n,s){if(s&&e===void 0)return;const i=wr(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Ce(e,(o,a)=>{const l=new ne(o);if(Mr(i,a,he(n,l)),Oa(l)===".priority"&&!mw(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),yw(i,r)},df=function(t,e,n,s){if(!(s&&n===void 0)&&!hf(n))throw new Error(wr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bw=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),df(t,e,n,s)},ww=function(t,e){if(q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Iw=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Za(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!gw(n))throw new Error(wr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function el(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Nd(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ke(t,e,n){el(t,n),Tw(t,s=>ze(s,e)||ze(e,s))}function Tw(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(Sw(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Sw(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();vn&&we("event: "+n.toString()),ds(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw="repo_interrupt",Aw=25;class kw{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Cw,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tr(),this.transactionQueueTree_=new Ja,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Nw(t,e,n){if(t.stats_=Na(t.repoInfo_),t.forceRestClient_||sE())t.server_=new er(t.repoInfo_,(s,i,r,o)=>{Hc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>$c(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new St(t.repoInfo_,e,(s,i,r,o)=>{Hc(t,s,i,r,o)},s=>{$c(t,s)},s=>{Ow(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=lE(t.repoInfo_,()=>new ab(t.stats_,t.server_)),t.infoData_=new nb,t.infoSyncTree_=new Bc({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=hi(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),tl(t,"connected",!1),t.serverSyncTree_=new Bc({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ke(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Pw(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Lr(t){return lw({timestamp:Pw(t)})}function Hc(t,e,n,s,i){t.dataUpdateCount++;const r=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Vi(n,c=>ge(c));o=tw(t.serverSyncTree_,r,l,i)}else{const l=ge(n);o=tf(t.serverSyncTree_,r,l,i)}else if(s){const l=Vi(n,c=>ge(c));o=Xb(t.serverSyncTree_,r,l)}else{const l=ge(n);o=hi(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=ss(t,r)),Ke(t.eventQueue_,a,o)}function $c(t,e){tl(t,"connected",e),e===!1&&Lw(t)}function Ow(t,e){Ce(e,(n,s)=>{tl(t,n,s)})}function tl(t,e,n){const s=new ne("/.info/"+e),i=ge(n);t.infoData_.updateSnapshot(s,i);const r=hi(t.infoSyncTree_,s,i);Ke(t.eventQueue_,s,r)}function nl(t){return t.nextWriteId_++}function xw(t,e,n){const s=sw(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=ge(i).withIndex(e._queryParams.getIndex());nw(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=hi(t.serverSyncTree_,e._path,r);else{const a=Qs(t.serverSyncTree_,e);o=tf(t.serverSyncTree_,e._path,r,a)}return Ke(t.eventQueue_,e._path,o),ef(t.serverSyncTree_,e,n,null,!0),r},i=>(fi(t,"get for query "+me(e)+" failed: "+i),Promise.reject(new Error(i))))}function Dw(t,e,n,s,i){fi(t,"set",{path:e.toString(),value:n,priority:s});const r=Lr(t),o=ge(n,s),a=Va(t.serverSyncTree_,e),l=af(o,a,r),c=nl(t),u=Zd(t.serverSyncTree_,e,l,c,!0);el(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,_)=>{const m=d==="ok";m||Ne("set at "+e+" failed: "+d);const w=Vt(t.serverSyncTree_,c,!m);Ke(t.eventQueue_,e,w),Ho(t,i,d,_)});const h=il(t,e);ss(t,h),Ke(t.eventQueue_,h,[])}function Mw(t,e,n,s){fi(t,"update",{path:e.toString(),value:n});let i=!0;const r=Lr(t),o={};if(Ce(n,(a,l)=>{i=!1,o[a]=of(he(e,a),ge(l),t.serverSyncTree_,r)}),i)we("update() called with empty data.  Don't do anything."),Ho(t,s,"ok",void 0);else{const a=nl(t),l=Jb(t.serverSyncTree_,e,o,a);el(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const h=c==="ok";h||Ne("update at "+e+" failed: "+c);const d=Vt(t.serverSyncTree_,a,!h),_=d.length>0?ss(t,e):e;Ke(t.eventQueue_,_,d),Ho(t,s,c,u)}),Ce(n,c=>{const u=il(t,he(e,c));ss(t,u)}),Ke(t.eventQueue_,e,[])}}function Lw(t){fi(t,"onDisconnectEvents");const e=Lr(t),n=tr();Do(t.onDisconnect_,J(),(i,r)=>{const o=of(i,r,t.serverSyncTree_,e);Ud(n,i,o)});let s=[];Do(n,J(),(i,r)=>{s=s.concat(hi(t.serverSyncTree_,i,r));const o=il(t,i);ss(t,o)}),t.onDisconnect_=tr(),Ke(t.eventQueue_,J(),s)}function Fw(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Rw)}function fi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),we(n,...e)}function Ho(t,e,n,s){e&&ds(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function ff(t,e,n){return Va(t.serverSyncTree_,e,n)||U.EMPTY_NODE}function sl(t,e=t.transactionQueueTree_){if(e||Fr(t,e),ps(e)){const n=_f(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Uw(t,di(e),n)}else cf(e)&&Dr(e,n=>{sl(t,n)})}function Uw(t,e,n){const s=n.map(c=>c.currentWriteId),i=ff(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=ke(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{fi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Vt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Fr(t,Xa(t.transactionQueueTree_,e)),sl(t,t.transactionQueueTree_),Ke(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)ds(h[d])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ne("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}ss(t,e)}},o)}function ss(t,e){const n=pf(t,e),s=di(n),i=_f(t,n);return Bw(t,i,s),s}function Bw(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ke(n,l.path);let u=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Vt(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Aw)u=!0,h="maxretry",i=i.concat(Vt(t.serverSyncTree_,l.currentWriteId,!0));else{const d=ff(t,l.path,o);l.currentInputSnapshot=d;const _=e[a].update(d.val());if(_!==void 0){Mr("transaction failed: Data returned ",_,l.path);let m=ge(_);typeof _=="object"&&_!=null&&mt(_,".priority")||(m=m.updatePriority(d.getPriority()));const P=l.currentWriteId,k=Lr(t),F=af(m,d,k);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=F,l.currentWriteId=nl(t),o.splice(o.indexOf(P),1),i=i.concat(Zd(t.serverSyncTree_,l.path,F,l.currentWriteId,l.applyLocally)),i=i.concat(Vt(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(Vt(t.serverSyncTree_,l.currentWriteId,!0))}Ke(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Fr(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ds(s[a]);sl(t,t.transactionQueueTree_)}function pf(t,e){let n,s=t.transactionQueueTree_;for(n=q(e);n!==null&&ps(s)===void 0;)s=Xa(s,n),e=ae(e),n=q(e);return s}function _f(t,e){const n=[];return gf(t,e,n),n.sort((s,i)=>s.order-i.order),n}function gf(t,e,n){const s=ps(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Dr(e,i=>{gf(t,i,n)})}function Fr(t,e){const n=ps(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,lf(e,n.length>0?n:void 0)}Dr(e,s=>{Fr(t,s)})}function il(t,e){const n=di(pf(t,e)),s=Xa(t.transactionQueueTree_,e);return dw(s,i=>{io(t,i)}),io(t,s),uf(s,i=>{io(t,i)}),n}function io(t,e){const n=ps(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lf(e,void 0):n.length=r+1,Ke(t.eventQueue_,di(e),i);for(let o=0;o<s.length;o++)ds(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Hw(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Ne(`Invalid query segment '${n}' in query '${t}'`)}return e}const jc=function(t,e){const n=$w(t),s=n.namespace;n.domain==="firebase.com"&&Pt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Pt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Gy();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ed(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ne(n.pathString)}},$w=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=Ww(t.substring(u,h)));const d=Hw(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class Vw{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return z(this._path)?null:Oa(this._path)}get ref(){return new xt(this._repo,this._path)}get _queryIdentifier(){const e=kc(this._queryParams),n=Aa(e);return n==="{}"?"default":n}get _queryObject(){return kc(this._queryParams)}isEqual(e){if(e=Fe(e),!(e instanceof rl))return!1;const n=this._repo===e._repo,s=Nd(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+PE(this._path)}}class xt extends rl{constructor(e,n){super(e,n,new La,!1)}get parent(){const e=kd(this._path);return e===null?null:new xt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Js{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),s=$o(this.ref,e);return new Js(this._node.getChild(n),s,de)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Js(i,$o(this.ref,s),de)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function uT(t,e){return t=Fe(t),t._checkNotDeleted("ref"),e!==void 0?$o(t._root,e):t._root}function $o(t,e){return t=Fe(t),q(t._path)===null?bw("child","path",e,!1):df("child","path",e,!1),new xt(t._repo,he(t._path,e))}function hT(t,e){t=Fe(t),ww("set",t._path),vw("set",e,t._path,!1);const n=new At;return Dw(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function dT(t,e){Ew("update",e,t._path,!1);const n=new At;return Mw(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function fT(t){t=Fe(t);const e=new zw(()=>{}),n=new ol(e);return xw(t._repo,t,n).then(s=>new Js(s,new xt(t._repo,t._path),t._queryParams.getIndex()))}class ol{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new jw("value",this,new Js(e.snapshotNode,new xt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Vw(this,e,n):null}matches(e){return e instanceof ol?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}jb(xt);Gb(xt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="FIREBASE_DATABASE_EMULATOR_HOST",jo={};let qw=!1;function Gw(t,e,n,s){t.repoInfo_=new Ed(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function Yw(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Pt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),we("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=jc(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Kw]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=jc(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Kn(Kn.OWNER):new rE(t.name,t.options,e);Iw("Invalid Firebase Database URL",o),z(o.path)||Pt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Jw(a,t,u,new iE(t.name,n));return new Xw(h,t)}function Qw(t,e){const n=jo[e];(!n||n[t.key]!==t)&&Pt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),Fw(t),delete n[t.key]}function Jw(t,e,n,s){let i=jo[e.name];i||(i={},jo[e.name]=i);let r=i[t.toURLString()];return r&&Pt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new kw(t,qw,n,s),i[t.toURLString()]=r,r}class Xw{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Nw(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xt(this._repo,J())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Qw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pt("Cannot call "+e+" on a deleted database.")}}function pT(t=va(),e){const n=ni(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Eg("database");s&&Zw(n,...s)}return n}function Zw(t,e,n,s={}){t=Fe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Pt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Pt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Kn(Kn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:wg(s.mockUserToken,t.app.options.projectId);r=new Kn(o)}Gw(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(t){jy(si),Xt(new kt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Yw(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Tt(dc,fc,t),Tt(dc,fc,"esm2017")}St.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};St.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};eI();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,mf={activated:!1,tokenObservers:[]},tI={initialized:!1,enabled:!1};function Oe(t){return Vo.get(t)||Object.assign({},mf)}function nI(t,e){return Vo.set(t,e),Vo.get(t)}function Ur(){return tI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="https://content-firebaseappcheck.googleapis.com/v1",sI="exchangeRecaptchaV3Token",iI="exchangeDebugToken",Vc={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},rI=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new At,await aI(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new At,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function aI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},We=new us("appCheck","AppCheck",lI);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function yf(t){if(!Oe(t).activated)throw We.create("use-before-activation",{appName:t.name})}function Ef(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),s=Math.floor((e-n*3600*24)/3600),i=Math.floor((e-n*3600*24-s*3600)/60),r=e-n*3600*24-s*3600-i*60;let o="";return n&&(o+=Ci(n)+"d:"),s&&(o+=Ci(s)+"h:"),o+=Ci(i)+"m:"+Ci(r)+"s",o}function Ci(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bf({url:t,body:e},n){const s={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&(s["X-Firebase-Client"]=h)}const r={method:"POST",body:JSON.stringify(e),headers:s};let o;try{o=await fetch(t,r)}catch(h){throw We.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(o.status!==200)throw We.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(h){throw We.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const l=a.ttl.match(/^([\d.]+)(s)$/);if(!l||!l[2]||isNaN(Number(l[1])))throw We.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const c=Number(l[1])*1e3,u=Date.now();return{token:a.token,expireTimeMillis:u+c,issuedAtTimeMillis:u}}function cI(t,e){const{projectId:n,appId:s,apiKey:i}=t.options;return{url:`${vf}/projects/${n}/apps/${s}:${sI}?key=${i}`,body:{recaptcha_v3_token:e}}}function uI(t,e){const{projectId:n,appId:s,apiKey:i}=t.options;return{url:`${vf}/projects/${n}/apps/${s}:${iI}?key=${i}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="firebase-app-check-database",dI=1,Xs="firebase-app-check-store",wf="debug-token";let Ti=null;function If(){return Ti||(Ti=new Promise((t,e)=>{try{const n=indexedDB.open(hI,dI);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(We.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Xs,{keyPath:"compositeKey"})}}}catch(n){e(We.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ti)}function fI(t){return Tf(Sf(t))}function pI(t,e){return Cf(Sf(t),e)}function _I(t){return Cf(wf,t)}function gI(){return Tf(wf)}async function Cf(t,e){const s=(await If()).transaction(Xs,"readwrite"),r=s.objectStore(Xs).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(We.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}async function Tf(t){const n=(await If()).transaction(Xs,"readonly"),i=n.objectStore(Xs).get(t);return new Promise((r,o)=>{i.onsuccess=a=>{const l=a.target.result;r(l?l.value:void 0)},n.onerror=a=>{var l;o(We.create("storage-get",{originalErrorMessage:(l=a.target.error)===null||l===void 0?void 0:l.message}))}})}function Sf(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=new Cr("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(t){if(ga()){let e;try{e=await fI(t)}catch(n){Zs.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function ro(t,e){return ga()?pI(t,e).catch(n=>{Zs.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function vI(){let t;try{t=await gI()}catch{}if(t)return t;{const e=Lg();return _I(e).catch(n=>Zs.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rf(){return Ur().enabled}async function Af(){const t=Ur();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function yI(){const t=mh(),e=Ur();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new At;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(vI())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI={error:"UNKNOWN_ERROR"};function bI(t){return br.encodeString(JSON.stringify(t),!1)}async function zo(t,e=!1){const n=t.app;yf(n);const s=Oe(n);let i=s.token,r;if(i&&!Fn(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(Fn(l)?i=l:await ro(n,void 0))}if(!e&&i&&Fn(i))return{token:i.token};let o=!1;if(Rf()){s.exchangeTokenPromise||(s.exchangeTokenPromise=bf(uI(n,await Af()),t.heartbeatServiceProvider).finally(()=>{s.exchangeTokenPromise=void 0}),o=!0);const l=await s.exchangeTokenPromise;return await ro(n,l),s.token=l,{token:l.token}}try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await Oe(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Zs.warn(l.message):Zs.error(l),r=l}let a;return i?r?Fn(i)?a={token:i.token,internalError:r}:a=qc(r):(a={token:i.token},s.token=i,await ro(n,i)):a=qc(r),o&&Pf(n,a),a}function kf(t,e,n,s){const{app:i}=t,r=Oe(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&Fn(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Kc(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Kc(t))}function Nf(t,e){const n=Oe(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Kc(t){const{app:e}=t,n=Oe(e);let s=n.tokenRefresher;s||(s=wI(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function wI(t){const{app:e}=t;return new oI(async()=>{const n=Oe(e);let s;if(n.token?s=await zo(t,!0):s=await zo(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=Oe(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Vc.RETRIAL_MIN_WAIT,Vc.RETRIAL_MAX_WAIT)}function Pf(t,e){const n=Oe(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Fn(t){return t.expireTimeMillis-Date.now()>0}function qc(t){return{token:bI(EI),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=Oe(this.app);for(const n of e)Nf(this.app,n.next);return Promise.resolve()}}function CI(t,e){return new II(t,e)}function TI(t){return{getToken:e=>zo(t,e),addTokenListener:e=>kf(t,"INTERNAL",e),removeTokenListener:e=>Nf(t.app,e)}}const SI="@firebase/app-check",RI="0.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="https://www.google.com/recaptcha/api.js";function kI(t,e){const n=new At,s=Oe(t);s.reCAPTCHAState={initialized:n};const i=NI(t),r=zc(!1);return r?Gc(t,e,r,i,n):xI(()=>{const o=zc(!1);if(!o)throw new Error("no recaptcha");Gc(t,e,o,i,n)}),n.promise}function Gc(t,e,n,s,i){n.ready(()=>{OI(t,e,n,s),i.resolve(n)})}function NI(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function PI(t){yf(t);const n=await Oe(t).reCAPTCHAState.initialized.promise;return new Promise((s,i)=>{const r=Oe(t).reCAPTCHAState;n.ready(()=>{s(n.execute(r.widgetId,{action:"fire_app_check"}))})})}function OI(t,e,n,s){const i=n.render(s,{sitekey:e,size:"invisible"}),r=Oe(t);r.reCAPTCHAState=Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:i})}function xI(t){const e=document.createElement("script");e.src=AI,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n;MI(this._throttleData);const s=await PI(this._app).catch(r=>{throw We.create("recaptcha-error")});let i;try{i=await bf(cI(this._app,s),this._heartbeatServiceProvider)}catch(r){throw!((e=r.code)===null||e===void 0)&&e.includes("fetch-status-error")?(this._throttleData=DI(Number((n=r.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),We.create("throttled",{time:Ef(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):r}return this._throttleData=null,i}initialize(e){this._app=e,this._heartbeatServiceProvider=ni(e,"heartbeat"),kI(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Of?this._siteKey===e._siteKey:!1}}function DI(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+rI,httpStatus:t};{const n=e?e.backoffCount:0,s=Hg(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+s,httpStatus:t}}}function MI(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw We.create("throttled",{time:Ef(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t=va(),e){t=Fe(t);const n=ni(t,"app-check");if(Ur().initialized||yI(),Rf()&&Af().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(r.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&r.provider.isEqual(e.provider))return i;throw We.create("already-initialized",{appName:t.name})}const s=n.initialize({options:e});return LI(t,e.provider,e.isTokenAutoRefreshEnabled),Oe(t).isTokenAutoRefreshEnabled&&kf(s,"INTERNAL",()=>{}),s}function LI(t,e,n){const s=nI(t,Object.assign({},mf));s.activated=!0,s.provider=e,s.cachedTokenPromise=mI(t).then(i=>(i&&Fn(i)&&(s.token=i,Pf(t,{token:i.token})),i)),s.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,s.provider.initialize(t)}const FI="app-check",Yc="app-check-internal";function UI(){Xt(new kt(FI,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return CI(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Yc).initialize()})),Xt(new kt(Yc,t=>{const e=t.getProvider("app-check").getImmediate();return TI(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Tt(SI,RI)}UI();var ut=(t=>(t.LOADING="loading",t.LOADED="loaded",t.ERROR="error",t))(ut||{});const BI=typeof window<"u"&&window!==null,WI=VI(),HI=Object.prototype.propertyIsEnumerable,Qc=Object.getOwnPropertySymbols;function Ps(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function $I(t){return typeof t=="object"?t===null:typeof t!="function"}function jI(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function VI(){return BI&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function zI(t,...e){if(!Ps(t))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof Qc!="function")return t;for(const n of e){const s=Qc(n);for(const i of s)HI.call(n,i)&&(t[i]=n[i])}return t}function xf(t,...e){let n=0;for($I(t)&&(t=e[n++]),t||(t={});n<e.length;n++)if(Ps(e[n])){for(const s of Object.keys(e[n]))jI(s)&&(Ps(t[s])&&Ps(e[n][s])?xf(t[s],e[n][s]):t[s]=e[n][s]);zI(t,e[n])}return t}const Jc="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",KI="",qI={rootMargin:"0px",threshold:0},Pn="data-lazy-timeout-id";class GI{constructor(e){this.options={loading:Jc,error:KI,observerOptions:qI,log:!0,lifecycle:{}},this._images=new WeakMap,this.config(e)}config(e={}){xf(this.options,e)}mount(e,n){if(!e)return;const{src:s,loading:i,error:r,lifecycle:o,delay:a}=this._valueFormatter(typeof n=="string"?n:n.value);this._lifecycle(ut.LOADING,o,e),e.setAttribute("src",i||Jc),WI||(this.loadImages(e,s,r,o),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,s,r,o,a)}update(e,n){var a;if(!e)return;(a=this._realObserver(e))==null||a.unobserve(e);const{src:s,error:i,lifecycle:r,delay:o}=this._valueFormatter(typeof n=="string"?n:n.value);this._initIntersectionObserver(e,s,i,r,o)}unmount(e){var n;e&&((n=this._realObserver(e))==null||n.unobserve(e),this._images.delete(e))}loadImages(e,n,s,i){this._setImageSrc(e,n,s,i)}_setImageSrc(e,n,s,i){e.tagName.toLowerCase()==="img"?(n&&e.getAttribute("src")!==n&&e.setAttribute("src",n),this._listenImageStatus(e,()=>{this._lifecycle(ut.LOADED,i,e)},()=>{var r;e.onload=null,this._lifecycle(ut.ERROR,i,e),(r=this._realObserver(e))==null||r.disconnect(),s&&e.getAttribute("src")!==s&&e.setAttribute("src",s),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${n} `)})})):e.style.backgroundImage=`url('${n}')`}_initIntersectionObserver(e,n,s,i,r){var a;const o=this.options.observerOptions;this._images.set(e,new IntersectionObserver(l=>{Array.prototype.forEach.call(l,c=>{r&&r>0?this._delayedIntersectionCallback(e,c,r,n,s,i):this._intersectionCallback(e,c,n,s,i)})},o)),(a=this._realObserver(e))==null||a.observe(e)}_intersectionCallback(e,n,s,i,r){var o;n.isIntersecting&&((o=this._realObserver(e))==null||o.unobserve(n.target),this._setImageSrc(e,s,i,r))}_delayedIntersectionCallback(e,n,s,i,r,o){if(n.isIntersecting){if(n.target.hasAttribute(Pn))return;const a=setTimeout(()=>{this._intersectionCallback(e,n,i,r,o),n.target.removeAttribute(Pn)},s);n.target.setAttribute(Pn,String(a))}else n.target.hasAttribute(Pn)&&(clearTimeout(Number(n.target.getAttribute(Pn))),n.target.removeAttribute(Pn))}_listenImageStatus(e,n,s){e.onload=n,e.onerror=s}_valueFormatter(e){let n=e,s=this.options.loading,i=this.options.error,r=this.options.lifecycle,o=this.options.delay;return Ps(e)&&(n=e.src,s=e.loading||this.options.loading,i=e.error||this.options.error,r=e.lifecycle||this.options.lifecycle,o=e.delay||this.options.delay),{src:n,loading:s,error:i,lifecycle:r,delay:o}}_log(e){this.options.log&&e()}_lifecycle(e,n,s){switch(e){case ut.LOADING:s==null||s.setAttribute("lazy",ut.LOADING),n!=null&&n.loading&&n.loading(s);break;case ut.LOADED:s==null||s.setAttribute("lazy",ut.LOADED),n!=null&&n.loaded&&n.loaded(s);break;case ut.ERROR:s==null||s.setAttribute("lazy",ut.ERROR),n!=null&&n.error&&n.error(s);break}}_realObserver(e){return this._images.get(e)}}const gT={install(t,e){const n=new GI(e);t.config.globalProperties.$Lazyload=n,t.provide("Lazyload",n),t.directive("lazy",{mounted:n.mount.bind(n),updated:n.update.bind(n),unmounted:n.unmount.bind(n)})}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Dn=typeof window<"u";function YI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function oo(t,e){const n={};for(const s in e){const i=e[s];n[s]=it(i)?i.map(t):t(i)}return n}const Os=()=>{},it=Array.isArray,QI=/\/$/,JI=t=>t.replace(QI,"");function ao(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=tC(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function XI(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xc(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ZI(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&is(e.matched[s],n.matched[i])&&Df(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function is(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Df(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!eC(t[n],e[n]))return!1;return!0}function eC(t,e){return it(t)?Zc(t,e):it(e)?Zc(e,t):t===e}function Zc(t,e){return it(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function tC(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var ei;(function(t){t.pop="pop",t.push="push"})(ei||(ei={}));var xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xs||(xs={}));function nC(t){if(!t)if(Dn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),JI(t)}const sC=/^[^#]+#/;function iC(t,e){return t.replace(sC,"#")+e}function rC(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Br=()=>({left:window.pageXOffset,top:window.pageYOffset});function oC(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=rC(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function eu(t,e){return(history.state?history.state.position-e:-1)+t}const Ko=new Map;function aC(t,e){Ko.set(t,e)}function lC(t){const e=Ko.get(t);return Ko.delete(t),e}let cC=()=>location.protocol+"//"+location.host;function Mf(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Xc(l,"")}return Xc(n,t)+s+i}function uC(t,e,n,s){let i=[],r=[],o=null;const a=({state:d})=>{const _=Mf(t,location),m=n.value,w=e.value;let P=0;if(d){if(n.value=_,e.value=d,o&&o===m){o=null;return}P=w?d.position-w.position:0}else s(_);i.forEach(k=>{k(n.value,m,{delta:P,type:ei.pop,direction:P?P>0?xs.forward:xs.back:xs.unknown})})};function l(){o=n.value}function c(d){i.push(d);const _=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return r.push(_),_}function u(){const{history:d}=window;d.state&&d.replaceState(Z({},d.state,{scroll:Br()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function tu(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Br():null}}function hC(t){const{history:e,location:n}=window,s={value:Mf(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:cC()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),i.value=c}catch(_){console.error(_),n[u?"replace":"assign"](d)}}function o(l,c){const u=Z({},e.state,tu(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Z({},i.value,e.state,{forward:l,scroll:Br()});r(u.current,u,!0);const h=Z({},tu(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function mT(t){t=nC(t);const e=hC(t),n=uC(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Z({location:"",base:t,go:s,createHref:iC.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function dC(t){return typeof t=="string"||t&&typeof t=="object"}function Lf(t){return typeof t=="string"||typeof t=="symbol"}const Ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ff=Symbol("");var nu;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(nu||(nu={}));function rs(t,e){return Z(new Error,{type:t,[Ff]:!0},e)}function vt(t,e){return t instanceof Error&&Ff in t&&(e==null||!!(t.type&e))}const su="[^/]+?",fC={sensitive:!1,strict:!1,start:!0,end:!0},pC=/[.+*?^${}()[\]/\\]/g;function _C(t,e){const n=Z({},fC,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const d=c[h];let _=40+(n.sensitive?.25:0);if(d.type===0)h||(i+="/"),i+=d.value.replace(pC,"\\$&"),_+=40;else if(d.type===1){const{value:m,repeatable:w,optional:P,regexp:k}=d;r.push({name:m,repeatable:w,optional:P});const F=k||su;if(F!==su){_+=10;try{new RegExp(`(${F})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${m}" (${F}): `+G.message)}}let x=w?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(x=P&&c.length<2?`(?:/${x})`:"/"+x),P&&(x+="?"),i+=x,_+=20,P&&(_+=-8),w&&(_+=-20),F===".*"&&(_+=-50)}u.push(_)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const _=u[d]||"",m=r[d-1];h[m.name]=_&&m.repeatable?_.split("/"):_}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of d)if(_.type===0)u+=_.value;else if(_.type===1){const{value:m,repeatable:w,optional:P}=_,k=m in c?c[m]:"";if(it(k)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const F=it(k)?k.join("/"):k;if(!F)if(P)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=F}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function gC(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function mC(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=gC(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(iu(s))return 1;if(iu(i))return-1}return i.length-s.length}function iu(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const vC={type:0,value:""},yC=/[a-zA-Z0-9_]/;function EC(t){if(!t)return[[]];if(t==="/")return[[vC]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:l==="("?n=2:yC.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function bC(t,e,n){const s=_C(EC(t.path),n),i=Z(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function wC(t,e){const n=[],s=new Map;e=au({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,d){const _=!d,m=IC(u);m.aliasOf=d&&d.record;const w=au(e,u),P=[m];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const G of x)P.push(Z({},m,{components:d?d.record.components:m.components,path:G,aliasOf:d?d.record:m}))}let k,F;for(const x of P){const{path:G}=x;if(h&&G[0]!=="/"){const _e=h.record.path,be=_e[_e.length-1]==="/"?"":"/";x.path=h.record.path+(G&&be+G)}if(k=bC(x,h,w),d?d.alias.push(k):(F=F||k,F!==k&&F.alias.push(k),_&&u.name&&!ou(k)&&o(u.name)),m.children){const _e=m.children;for(let be=0;be<_e.length;be++)r(_e[be],k,d&&d.children[be])}d=d||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&l(k)}return F?()=>{o(F)}:Os}function o(u){if(Lf(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&mC(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Uf(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!ou(u)&&s.set(u.record.name,u)}function c(u,h){let d,_={},m,w;if("name"in u&&u.name){if(d=s.get(u.name),!d)throw rs(1,{location:u});w=d.record.name,_=Z(ru(h.params,d.keys.filter(F=>!F.optional).map(F=>F.name)),u.params&&ru(u.params,d.keys.map(F=>F.name))),m=d.stringify(_)}else if("path"in u)m=u.path,d=n.find(F=>F.re.test(m)),d&&(_=d.parse(m),w=d.record.name);else{if(d=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!d)throw rs(1,{location:u,currentLocation:h});w=d.record.name,_=Z({},h.params,u.params),m=d.stringify(_)}const P=[];let k=d;for(;k;)P.unshift(k.record),k=k.parent;return{name:w,path:m,params:_,matched:P,meta:TC(P)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function ru(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function IC(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:CC(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function CC(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ou(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function TC(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function au(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Uf(t,e){return e.children.some(n=>n===t||Uf(t,n))}const Bf=/#/g,SC=/&/g,RC=/\//g,AC=/=/g,kC=/\?/g,Wf=/\+/g,NC=/%5B/g,PC=/%5D/g,Hf=/%5E/g,OC=/%60/g,$f=/%7B/g,xC=/%7C/g,jf=/%7D/g,DC=/%20/g;function al(t){return encodeURI(""+t).replace(xC,"|").replace(NC,"[").replace(PC,"]")}function MC(t){return al(t).replace($f,"{").replace(jf,"}").replace(Hf,"^")}function qo(t){return al(t).replace(Wf,"%2B").replace(DC,"+").replace(Bf,"%23").replace(SC,"%26").replace(OC,"`").replace($f,"{").replace(jf,"}").replace(Hf,"^")}function LC(t){return qo(t).replace(AC,"%3D")}function FC(t){return al(t).replace(Bf,"%23").replace(kC,"%3F")}function UC(t){return t==null?"":FC(t).replace(RC,"%2F")}function cr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function BC(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Wf," "),o=r.indexOf("="),a=cr(o<0?r:r.slice(0,o)),l=o<0?null:cr(r.slice(o+1));if(a in e){let c=e[a];it(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function lu(t){let e="";for(let n in t){const s=t[n];if(n=LC(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(it(s)?s.map(r=>r&&qo(r)):[s&&qo(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function WC(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=it(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const HC=Symbol(""),cu=Symbol(""),ll=Symbol(""),Vf=Symbol(""),Go=Symbol("");function ws(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Bt(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(rs(4,{from:n,to:e})):h instanceof Error?a(h):dC(h)?a(rs(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function lo(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if($C(a)){const c=(a.__vccOpts||a)[e];c&&i.push(Bt(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=YI(c)?c.default:c;r.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Bt(d,n,s,r,o)()}))}}return i}function $C(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function uu(t){const e=Ct(ll),n=Ct(Vf),s=je(()=>e.resolve(Hn(t.to))),i=je(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(is.bind(null,u));if(d>-1)return d;const _=hu(l[c-2]);return c>1&&hu(u)===_&&h[h.length-1].path!==_?h.findIndex(is.bind(null,l[c-2])):d}),r=je(()=>i.value>-1&&KC(n.params,s.value.params)),o=je(()=>i.value>-1&&i.value===n.matched.length-1&&Df(n.params,s.value.params));function a(l={}){return zC(l)?e[Hn(t.replace)?"replace":"push"](Hn(t.to)).catch(Os):Promise.resolve()}return{route:s,href:je(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const jC=qu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uu,setup(t,{slots:e}){const n=ti(uu(t)),{options:s}=Ct(ll),i=je(()=>({[du(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[du(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:dh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),VC=jC;function zC(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function KC(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!it(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function hu(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const du=(t,e,n)=>t??e??n,qC=qu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ct(Go),i=je(()=>t.route||s.value),r=Ct(cu,0),o=je(()=>{let c=Hn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=je(()=>i.value.matched[o.value]);Ai(cu,je(()=>o.value+1)),Ai(HC,a),Ai(Go,i);const l=Op();return ki(()=>[l.value,a.value,t.name],([c,u,h],[d,_,m])=>{u&&(u.instances[h]=c,_&&_!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),c&&u&&(!_||!is(u,_)||!d)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return fu(n.default,{Component:d,route:c});const _=h.props[u],m=_?_===!0?c.params:typeof _=="function"?_(c):_:null,P=dh(d,Z({},m,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return fu(n.default,{Component:P,route:c})||P}}});function fu(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const GC=qC;function vT(t){const e=wC(t.routes,t),n=t.parseQuery||BC,s=t.stringifyQuery||lu,i=t.history,r=ws(),o=ws(),a=ws(),l=xp(Ft);let c=Ft;Dn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oo.bind(null,y=>""+y),h=oo.bind(null,UC),d=oo.bind(null,cr);function _(y,N){let R,D;return Lf(y)?(R=e.getRecordMatcher(y),D=N):D=y,e.addRoute(D,R)}function m(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function w(){return e.getRoutes().map(y=>y.record)}function P(y){return!!e.getRecordMatcher(y)}function k(y,N){if(N=Z({},N||l.value),typeof y=="string"){const f=ao(n,y,N.path),p=e.resolve({path:f.path},N),g=i.createHref(f.fullPath);return Z(f,p,{params:d(p.params),hash:cr(f.hash),redirectedFrom:void 0,href:g})}let R;if("path"in y)R=Z({},y,{path:ao(n,y.path,N.path).path});else{const f=Z({},y.params);for(const p in f)f[p]==null&&delete f[p];R=Z({},y,{params:h(y.params)}),N.params=h(N.params)}const D=e.resolve(R,N),Y=y.hash||"";D.params=u(d(D.params));const ue=XI(s,Z({},y,{hash:MC(Y),path:D.path})),j=i.createHref(ue);return Z({fullPath:ue,hash:Y,query:s===lu?WC(y.query):y.query||{}},D,{redirectedFrom:void 0,href:j})}function F(y){return typeof y=="string"?ao(n,y,l.value.path):Z({},y)}function x(y,N){if(c!==y)return rs(8,{from:N,to:y})}function G(y){return Ue(y)}function _e(y){return G(Z(F(y),{replace:!0}))}function be(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let D=typeof R=="function"?R(y):R;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=F(D):{path:D},D.params={}),Z({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function Ue(y,N){const R=c=k(y),D=l.value,Y=y.state,ue=y.force,j=y.replace===!0,f=be(R);if(f)return Ue(Z(F(f),{state:typeof f=="object"?Z({},Y,f.state):Y,force:ue,replace:j}),N||R);const p=R;p.redirectedFrom=N;let g;return!ue&&ZI(s,D,R)&&(g=rs(16,{to:p,from:D}),rn(D,D,!0,!1)),(g?Promise.resolve(g):rt(p,D)).catch(v=>vt(v)?vt(v,2)?v:Ge(v):ie(v,p,D)).then(v=>{if(v){if(vt(v,2))return Ue(Z({replace:j},F(v.to),{state:typeof v.to=="object"?Z({},Y,v.to.state):Y,force:ue}),N||p)}else v=Dt(p,D,!0,j,Y);return $e(p,D,v),v})}function qe(y,N){const R=x(y,N);return R?Promise.reject(R):Promise.resolve()}function rt(y,N){let R;const[D,Y,ue]=YC(y,N);R=lo(D.reverse(),"beforeRouteLeave",y,N);for(const f of D)f.leaveGuards.forEach(p=>{R.push(Bt(p,y,N))});const j=qe.bind(null,y,N);return R.push(j),On(R).then(()=>{R=[];for(const f of r.list())R.push(Bt(f,y,N));return R.push(j),On(R)}).then(()=>{R=lo(Y,"beforeRouteUpdate",y,N);for(const f of Y)f.updateGuards.forEach(p=>{R.push(Bt(p,y,N))});return R.push(j),On(R)}).then(()=>{R=[];for(const f of y.matched)if(f.beforeEnter&&!N.matched.includes(f))if(it(f.beforeEnter))for(const p of f.beforeEnter)R.push(Bt(p,y,N));else R.push(Bt(f.beforeEnter,y,N));return R.push(j),On(R)}).then(()=>(y.matched.forEach(f=>f.enterCallbacks={}),R=lo(ue,"beforeRouteEnter",y,N),R.push(j),On(R))).then(()=>{R=[];for(const f of o.list())R.push(Bt(f,y,N));return R.push(j),On(R)}).catch(f=>vt(f,8)?f:Promise.reject(f))}function $e(y,N,R){for(const D of a.list())D(y,N,R)}function Dt(y,N,R,D,Y){const ue=x(y,N);if(ue)return ue;const j=N===Ft,f=Dn?history.state:{};R&&(D||j?i.replace(y.fullPath,Z({scroll:j&&f&&f.scroll},Y)):i.push(y.fullPath,Y)),l.value=y,rn(y,N,R,j),Ge()}let ot;function Rn(){ot||(ot=i.listen((y,N,R)=>{if(!pi.listening)return;const D=k(y),Y=be(D);if(Y){Ue(Z(Y,{replace:!0}),D).catch(Os);return}c=D;const ue=l.value;Dn&&aC(eu(ue.fullPath,R.delta),Br()),rt(D,ue).catch(j=>vt(j,12)?j:vt(j,2)?(Ue(j.to,D).then(f=>{vt(f,20)&&!R.delta&&R.type===ei.pop&&i.go(-1,!1)}).catch(Os),Promise.reject()):(R.delta&&i.go(-R.delta,!1),ie(j,D,ue))).then(j=>{j=j||Dt(D,ue,!1),j&&(R.delta&&!vt(j,8)?i.go(-R.delta,!1):R.type===ei.pop&&vt(j,20)&&i.go(-1,!1)),$e(D,ue,j)}).catch(Os)}))}let sn=ws(),_s=ws(),fe;function ie(y,N,R){Ge(y);const D=_s.list();return D.length?D.forEach(Y=>Y(y,N,R)):console.error(y),Promise.reject(y)}function ee(){return fe&&l.value!==Ft?Promise.resolve():new Promise((y,N)=>{sn.add([y,N])})}function Ge(y){return fe||(fe=!y,Rn(),sn.list().forEach(([N,R])=>y?R(y):N()),sn.reset()),y}function rn(y,N,R,D){const{scrollBehavior:Y}=t;if(!Dn||!Y)return Promise.resolve();const ue=!R&&lC(eu(y.fullPath,0))||(D||!R)&&history.state&&history.state.scroll||null;return Bu().then(()=>Y(y,N,ue)).then(j=>j&&oC(j)).catch(j=>ie(j,y,N))}const Ye=y=>i.go(y);let xe;const An=new Set,pi={currentRoute:l,listening:!0,addRoute:_,removeRoute:m,hasRoute:P,getRoutes:w,resolve:k,options:t,push:G,replace:_e,go:Ye,back:()=>Ye(-1),forward:()=>Ye(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:_s.add,isReady:ee,install(y){const N=this;y.component("RouterLink",VC),y.component("RouterView",GC),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Hn(l)}),Dn&&!xe&&l.value===Ft&&(xe=!0,G(i.location).catch(Y=>{}));const R={};for(const Y in Ft)R[Y]=je(()=>l.value[Y]);y.provide(ll,N),y.provide(Vf,ti(R)),y.provide(Go,l);const D=y.unmount;An.add(y),y.unmount=function(){An.delete(y),An.size<1&&(c=Ft,ot&&ot(),ot=null,l.value=Ft,xe=!1,fe=!1),D()}}};return pi}function On(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function YC(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>is(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>is(c,l))||i.push(l))}return[n,s,i]}export{hT as A,rT as B,gT as C,iT as D,Op as E,ki as F,Et as G,eT as H,Ht as I,aT as J,oT as K,Of as R,sT as a,ch as b,tT as c,nT as d,ti as e,pT as f,cT as g,_T as h,Um as i,qu as j,XC as k,P_ as l,Me as m,lT as n,k_ as o,D_ as p,vT as q,ZC as r,mT as s,QC as t,Hn as u,$o as v,JC as w,uT as x,fT as y,dT as z};
