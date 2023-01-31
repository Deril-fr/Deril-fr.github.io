function nc(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function sc(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Re(s)?nm(s):sc(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Re(t))return t;if(me(t))return t}}const Zg=/;(?![^(]*\))/g,em=/:([^]+)/,tm=/\/\*.*?\*\//gs;function nm(t){const e={};return t.replace(tm,"").split(Zg).forEach(n=>{if(n){const s=n.split(em);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function rc(t){let e="";if(Re(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=rc(t[n]);s&&(e+=s+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rm=nc(sm);function Fh(t){return!!t||t===""}const oA=t=>Re(t)?t:t==null?"":G(t)||me(t)&&(t.toString===jh||!X(t.toString))?JSON.stringify(t,Vh,2):String(t),Vh=(t,e)=>e&&e.__v_isRef?Vh(t,e.value):rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Bh(e)?{[`Set(${e.size})`]:[...e.values()]}:me(e)&&!G(e)&&!qh(e)?String(e):e,de={},ss=[],pt=()=>{},im=()=>!1,om=/^on[^a-z]/,Gi=t=>om.test(t),ic=t=>t.startsWith("onUpdate:"),Ge=Object.assign,oc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},am=Object.prototype.hasOwnProperty,se=(t,e)=>am.call(t,e),G=Array.isArray,rs=t=>Qi(t)==="[object Map]",Bh=t=>Qi(t)==="[object Set]",X=t=>typeof t=="function",Re=t=>typeof t=="string",ac=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",$h=t=>me(t)&&X(t.then)&&X(t.catch),jh=Object.prototype.toString,Qi=t=>jh.call(t),cm=t=>Qi(t).slice(8,-1),qh=t=>Qi(t)==="[object Object]",cc=t=>Re(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,oi=nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xi=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},um=/-(\w)/g,Dt=Xi(t=>t.replace(um,(e,n)=>n?n.toUpperCase():"")),lm=/\B([A-Z])/g,Cs=Xi(t=>t.replace(lm,"-$1").toLowerCase()),Yi=Xi(t=>t.charAt(0).toUpperCase()+t.slice(1)),Vo=Xi(t=>t?`on${Yi(t)}`:""),tr=(t,e)=>!Object.is(t,e),ai=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ei=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_i=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Nu;const hm=()=>Nu||(Nu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let _t;class fm{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=_t,!e&&_t&&(this.index=(_t.scopes||(_t.scopes=[])).push(this)-1)}run(e){if(this.active){const n=_t;try{return _t=this,e()}finally{_t=n}}}on(){_t=this}off(){_t=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function dm(t,e=_t){e&&e.active&&e.effects.push(t)}const uc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hh=t=>(t.w&fn)>0,Kh=t=>(t.n&fn)>0,pm=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=fn},gm=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];Hh(r)&&!Kh(r)?r.delete(t):e[n++]=r,r.w&=~fn,r.n&=~fn}e.length=n}},la=new WeakMap;let Bs=0,fn=1;const ha=30;let ft;const On=Symbol(""),fa=Symbol("");class lc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dm(this,s)}run(){if(!this.active)return this.fn();let e=ft,n=on;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ft,ft=this,on=!0,fn=1<<++Bs,Bs<=ha?pm(this):Pu(this),this.fn()}finally{Bs<=ha&&gm(this),fn=1<<--Bs,ft=this.parent,on=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ft===this?this.deferStop=!0:this.active&&(Pu(this),this.onStop&&this.onStop(),this.active=!1)}}function Pu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let on=!0;const zh=[];function Rs(){zh.push(on),on=!1}function ks(){const t=zh.pop();on=t===void 0?!0:t}function nt(t,e,n){if(on&&ft){let s=la.get(t);s||la.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=uc()),Wh(r)}}function Wh(t,e){let n=!1;Bs<=ha?Kh(t)||(t.n|=fn,n=!Hh(t)):n=!t.has(ft),n&&(t.add(ft),ft.deps.push(t))}function $t(t,e,n,s,r,i){const o=la.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&G(t)){const c=_i(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":G(t)?cc(n)&&a.push(o.get("length")):(a.push(o.get(On)),rs(t)&&a.push(o.get(fa)));break;case"delete":G(t)||(a.push(o.get(On)),rs(t)&&a.push(o.get(fa)));break;case"set":rs(t)&&a.push(o.get(On));break}if(a.length===1)a[0]&&da(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);da(uc(c))}}function da(t,e){const n=G(t)?t:[...t];for(const s of n)s.computed&&xu(s);for(const s of n)s.computed||xu(s)}function xu(t,e){(t!==ft||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const mm=nc("__proto__,__v_isRef,__isVue"),Gh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ac)),ym=hc(),vm=hc(!1,!0),wm=hc(!0),Mu=Em();function Em(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=oe(this);for(let i=0,o=this.length;i<o;i++)nt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(oe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Rs();const s=oe(this)[e].apply(this,n);return ks(),s}}),t}function hc(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Lm:Zh:e?Jh:Yh).get(s))return s;const o=G(s);if(!t&&o&&se(Mu,r))return Reflect.get(Mu,r,i);const a=Reflect.get(s,r,i);return(ac(r)?Gh.has(r):mm(r))||(t||nt(s,"get",r),e)?a:$e(a)?o&&cc(r)?a:a.value:me(a)?t?ef(a):Tr(a):a}}const _m=Qh(),Im=Qh(!0);function Qh(t=!1){return function(n,s,r,i){let o=n[s];if(fs(o)&&$e(o)&&!$e(r))return!1;if(!t&&(!Ii(r)&&!fs(r)&&(o=oe(o),r=oe(r)),!G(n)&&$e(o)&&!$e(r)))return o.value=r,!0;const a=G(n)&&cc(s)?Number(s)<n.length:se(n,s),c=Reflect.set(n,s,r,i);return n===oe(i)&&(a?tr(r,o)&&$t(n,"set",s,r):$t(n,"add",s,r)),c}}function Tm(t,e){const n=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&$t(t,"delete",e,void 0),s}function bm(t,e){const n=Reflect.has(t,e);return(!ac(e)||!Gh.has(e))&&nt(t,"has",e),n}function Sm(t){return nt(t,"iterate",G(t)?"length":On),Reflect.ownKeys(t)}const Xh={get:ym,set:_m,deleteProperty:Tm,has:bm,ownKeys:Sm},Am={get:wm,set(t,e){return!0},deleteProperty(t,e){return!0}},Cm=Ge({},Xh,{get:vm,set:Im}),fc=t=>t,Ji=t=>Reflect.getPrototypeOf(t);function Wr(t,e,n=!1,s=!1){t=t.__v_raw;const r=oe(t),i=oe(e);n||(e!==i&&nt(r,"get",e),nt(r,"get",i));const{has:o}=Ji(r),a=s?fc:n?gc:nr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Gr(t,e=!1){const n=this.__v_raw,s=oe(n),r=oe(t);return e||(t!==r&&nt(s,"has",t),nt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Qr(t,e=!1){return t=t.__v_raw,!e&&nt(oe(t),"iterate",On),Reflect.get(t,"size",t)}function Lu(t){t=oe(t);const e=oe(this);return Ji(e).has.call(e,t)||(e.add(t),$t(e,"add",t,t)),this}function Uu(t,e){e=oe(e);const n=oe(this),{has:s,get:r}=Ji(n);let i=s.call(n,t);i||(t=oe(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?tr(e,o)&&$t(n,"set",t,e):$t(n,"add",t,e),this}function Fu(t){const e=oe(this),{has:n,get:s}=Ji(e);let r=n.call(e,t);r||(t=oe(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&$t(e,"delete",t,void 0),i}function Vu(){const t=oe(this),e=t.size!==0,n=t.clear();return e&&$t(t,"clear",void 0,void 0),n}function Xr(t,e){return function(s,r){const i=this,o=i.__v_raw,a=oe(o),c=e?fc:t?gc:nr;return!t&&nt(a,"iterate",On),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Yr(t,e,n){return function(...s){const r=this.__v_raw,i=oe(r),o=rs(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?fc:e?gc:nr;return!e&&nt(i,"iterate",c?fa:On),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function Xt(t){return function(...e){return t==="delete"?!1:this}}function Rm(){const t={get(i){return Wr(this,i)},get size(){return Qr(this)},has:Gr,add:Lu,set:Uu,delete:Fu,clear:Vu,forEach:Xr(!1,!1)},e={get(i){return Wr(this,i,!1,!0)},get size(){return Qr(this)},has:Gr,add:Lu,set:Uu,delete:Fu,clear:Vu,forEach:Xr(!1,!0)},n={get(i){return Wr(this,i,!0)},get size(){return Qr(this,!0)},has(i){return Gr.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Xr(!0,!1)},s={get(i){return Wr(this,i,!0,!0)},get size(){return Qr(this,!0)},has(i){return Gr.call(this,i,!0)},add:Xt("add"),set:Xt("set"),delete:Xt("delete"),clear:Xt("clear"),forEach:Xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Yr(i,!1,!1),n[i]=Yr(i,!0,!1),e[i]=Yr(i,!1,!0),s[i]=Yr(i,!0,!0)}),[t,n,e,s]}const[km,Dm,Om,Nm]=Rm();function dc(t,e){const n=e?t?Nm:Om:t?Dm:km;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(se(n,r)&&r in s?n:s,r,i)}const Pm={get:dc(!1,!1)},xm={get:dc(!1,!0)},Mm={get:dc(!0,!1)},Yh=new WeakMap,Jh=new WeakMap,Zh=new WeakMap,Lm=new WeakMap;function Um(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fm(t){return t.__v_skip||!Object.isExtensible(t)?0:Um(cm(t))}function Tr(t){return fs(t)?t:pc(t,!1,Xh,Pm,Yh)}function Vm(t){return pc(t,!1,Cm,xm,Jh)}function ef(t){return pc(t,!0,Am,Mm,Zh)}function pc(t,e,n,s,r){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Fm(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function is(t){return fs(t)?is(t.__v_raw):!!(t&&t.__v_isReactive)}function fs(t){return!!(t&&t.__v_isReadonly)}function Ii(t){return!!(t&&t.__v_isShallow)}function tf(t){return is(t)||fs(t)}function oe(t){const e=t&&t.__v_raw;return e?oe(e):t}function nf(t){return Ei(t,"__v_skip",!0),t}const nr=t=>me(t)?Tr(t):t,gc=t=>me(t)?ef(t):t;function sf(t){on&&ft&&(t=oe(t),Wh(t.dep||(t.dep=uc())))}function rf(t,e){t=oe(t),t.dep&&da(t.dep)}function $e(t){return!!(t&&t.__v_isRef===!0)}function Bm(t){return of(t,!1)}function $m(t){return of(t,!0)}function of(t,e){return $e(t)?t:new jm(t,e)}class jm{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:oe(e),this._value=n?e:nr(e)}get value(){return sf(this),this._value}set value(e){const n=this.__v_isShallow||Ii(e)||fs(e);e=n?e:oe(e),tr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:nr(e),rf(this))}}function os(t){return $e(t)?t.value:t}const qm={get:(t,e,n)=>os(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return $e(r)&&!$e(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function af(t){return is(t)?t:new Proxy(t,qm)}var cf;class Hm{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[cf]=!1,this._dirty=!0,this.effect=new lc(e,()=>{this._dirty||(this._dirty=!0,rf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=oe(this);return sf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}cf="__v_isReadonly";function Km(t,e,n=!1){let s,r;const i=X(t);return i?(s=t,r=pt):(s=t.get,r=t.set),new Hm(s,r,i||!r,n)}function an(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Zi(i,e,n)}return r}function gt(t,e,n,s){if(X(t)){const i=an(t,e,n,s);return i&&$h(i)&&i.catch(o=>{Zi(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(gt(t[i],e,n,s));return r}function Zi(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){an(c,null,10,[t,o,a]);return}}zm(t,n,r,s)}function zm(t,e,n,s=!0){console.error(t)}let sr=!1,pa=!1;const Ve=[];let bt=0;const as=[];let Mt=null,Sn=0;const uf=Promise.resolve();let mc=null;function lf(t){const e=mc||uf;return t?e.then(this?t.bind(this):t):e}function Wm(t){let e=bt+1,n=Ve.length;for(;e<n;){const s=e+n>>>1;rr(Ve[s])<t?e=s+1:n=s}return e}function yc(t){(!Ve.length||!Ve.includes(t,sr&&t.allowRecurse?bt+1:bt))&&(t.id==null?Ve.push(t):Ve.splice(Wm(t.id),0,t),hf())}function hf(){!sr&&!pa&&(pa=!0,mc=uf.then(df))}function Gm(t){const e=Ve.indexOf(t);e>bt&&Ve.splice(e,1)}function Qm(t){G(t)?as.push(...t):(!Mt||!Mt.includes(t,t.allowRecurse?Sn+1:Sn))&&as.push(t),hf()}function Bu(t,e=sr?bt+1:0){for(;e<Ve.length;e++){const n=Ve[e];n&&n.pre&&(Ve.splice(e,1),e--,n())}}function ff(t){if(as.length){const e=[...new Set(as)];if(as.length=0,Mt){Mt.push(...e);return}for(Mt=e,Mt.sort((n,s)=>rr(n)-rr(s)),Sn=0;Sn<Mt.length;Sn++)Mt[Sn]();Mt=null,Sn=0}}const rr=t=>t.id==null?1/0:t.id,Xm=(t,e)=>{const n=rr(t)-rr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function df(t){pa=!1,sr=!0,Ve.sort(Xm);const e=pt;try{for(bt=0;bt<Ve.length;bt++){const n=Ve[bt];n&&n.active!==!1&&an(n,null,14)}}finally{bt=0,Ve.length=0,ff(),sr=!1,mc=null,(Ve.length||as.length)&&df()}}function Ym(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||de;d&&(r=n.map(g=>Re(g)?g.trim():g)),h&&(r=n.map(_i))}let a,c=s[a=Vo(e)]||s[a=Vo(Dt(e))];!c&&i&&(c=s[a=Vo(Cs(e))]),c&&gt(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gt(u,t,6,r)}}function pf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!X(t)){const c=u=>{const l=pf(u,e,!0);l&&(a=!0,Ge(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(me(t)&&s.set(t,null),null):(G(i)?i.forEach(c=>o[c]=null):Ge(o,i),me(t)&&s.set(t,o),o)}function eo(t,e){return!t||!Gi(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,Cs(e))||se(t,e))}let at=null,gf=null;function Ti(t){const e=at;return at=t,gf=t&&t.type.__scopeId||null,e}function Jm(t,e=at,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Qu(-1);const i=Ti(e);let o;try{o=t(...r)}finally{Ti(i),s._d&&Qu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Bo(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:_}=t;let k,R;const P=Ti(t);try{if(n.shapeFlag&4){const Y=r||s;k=Tt(l.call(Y,Y,h,i,g,d,y)),R=c}else{const Y=e;k=Tt(Y.length>1?Y(i,{attrs:c,slots:a,emit:u}):Y(i,null)),R=e.props?c:Zm(c)}}catch(Y){Ks.length=0,Zi(Y,t,1),k=Je(Ln)}let L=k;if(R&&_!==!1){const Y=Object.keys(R),{shapeFlag:pe}=L;Y.length&&pe&7&&(o&&Y.some(ic)&&(R=ey(R,o)),L=ds(L,R))}return n.dirs&&(L=ds(L),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&(L.transition=n.transition),k=L,Ti(P),k}const Zm=t=>{let e;for(const n in t)(n==="class"||n==="style"||Gi(n))&&((e||(e={}))[n]=t[n]);return e},ey=(t,e)=>{const n={};for(const s in t)(!ic(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ty(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?$u(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!eo(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?$u(s,o,u):!0:!!o;return!1}function $u(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!eo(n,i))return!0}return!1}function ny({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const sy=t=>t.__isSuspense;function ry(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):Qm(t)}function ci(t,e){if(Pe){let n=Pe.provides;const s=Pe.parent&&Pe.parent.provides;s===n&&(n=Pe.provides=Object.create(s)),n[t]=e}}function Bt(t,e,n=!1){const s=Pe||at;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&X(e)?e.call(s.proxy):e}}const Jr={};function ui(t,e,n){return mf(t,e,n)}function mf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=de){const a=Pe;let c,u=!1,l=!1;if($e(t)?(c=()=>t.value,u=Ii(t)):is(t)?(c=()=>t,s=!0):G(t)?(l=!0,u=t.some(L=>is(L)||Ii(L)),c=()=>t.map(L=>{if($e(L))return L.value;if(is(L))return Cn(L);if(X(L))return an(L,a,2)})):X(t)?e?c=()=>an(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),gt(t,a,3,[d])}:c=pt,e&&s){const L=c;c=()=>Cn(L())}let h,d=L=>{h=R.onStop=()=>{an(L,a,4)}},g;if(or)if(d=pt,e?n&&gt(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const L=ev();g=L.__watcherHandles||(L.__watcherHandles=[])}else return pt;let y=l?new Array(t.length).fill(Jr):Jr;const _=()=>{if(R.active)if(e){const L=R.run();(s||u||(l?L.some((Y,pe)=>tr(Y,y[pe])):tr(L,y)))&&(h&&h(),gt(e,a,3,[L,y===Jr?void 0:l&&y[0]===Jr?[]:y,d]),y=L)}else R.run()};_.allowRecurse=!!e;let k;r==="sync"?k=_:r==="post"?k=()=>Xe(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),k=()=>yc(_));const R=new lc(c,k);e?n?_():y=R.run():r==="post"?Xe(R.run.bind(R),a&&a.suspense):R.run();const P=()=>{R.stop(),a&&a.scope&&oc(a.scope.effects,R)};return g&&g.push(P),P}function iy(t,e,n){const s=this.proxy,r=Re(t)?t.includes(".")?yf(s,t):()=>s[t]:t.bind(s,s);let i;X(e)?i=e:(i=e.handler,n=e);const o=Pe;ps(this);const a=mf(r,i.bind(s),n);return o?ps(o):Nn(),a}function yf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Cn(t,e){if(!me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),$e(t))Cn(t.value,e);else if(G(t))for(let n=0;n<t.length;n++)Cn(t[n],e);else if(Bh(t)||rs(t))t.forEach(n=>{Cn(n,e)});else if(qh(t))for(const n in t)Cn(t[n],e);return t}function vf(t){return X(t)?{setup:t,name:t.name}:t}const li=t=>!!t.type.__asyncLoader,wf=t=>t.type.__isKeepAlive;function oy(t,e){Ef(t,"a",e)}function ay(t,e){Ef(t,"da",e)}function Ef(t,e,n=Pe){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(to(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wf(r.parent.vnode)&&cy(s,e,n,r),r=r.parent}}function cy(t,e,n,s){const r=to(e,t,s,!0);_f(()=>{oc(s[e],r)},n)}function to(t,e,n=Pe,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Rs(),ps(n);const a=gt(e,n,t,o);return Nn(),ks(),a});return s?r.unshift(i):r.push(i),i}}const Wt=t=>(e,n=Pe)=>(!or||t==="sp")&&to(t,(...s)=>e(...s),n),uy=Wt("bm"),ly=Wt("m"),hy=Wt("bu"),fy=Wt("u"),dy=Wt("bum"),_f=Wt("um"),py=Wt("sp"),gy=Wt("rtg"),my=Wt("rtc");function yy(t,e=Pe){to("ec",t,e)}function aA(t,e){const n=at;if(n===null)return t;const s=ro(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=de]=e[i];o&&(X(o)&&(o={mounted:o,updated:o}),o.deep&&Cn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function _n(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Rs(),gt(c,n,8,[t.el,a,t,e]),ks())}}const If="components",vy="directives";function cA(t,e){return Tf(If,t,!0,e)||t}const wy=Symbol();function uA(t){return Tf(vy,t)}function Tf(t,e,n=!0,s=!1){const r=at||Pe;if(r){const i=r.type;if(t===If){const a=Yy(i,!1);if(a&&(a===e||a===Dt(e)||a===Yi(Dt(e))))return i}const o=ju(r[t]||i[t],e)||ju(r.appContext[t],e);return!o&&s?i:o}}function ju(t,e){return t&&(t[e]||t[Dt(e)]||t[Yi(Dt(e))])}function lA(t,e,n,s){let r;const i=n&&n[s];if(G(t)||Re(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(me(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const ga=t=>t?Mf(t)?ro(t)||t.proxy:ga(t.parent):null,Hs=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ga(t.parent),$root:t=>ga(t.root),$emit:t=>t.emit,$options:t=>vc(t),$forceUpdate:t=>t.f||(t.f=()=>yc(t.update)),$nextTick:t=>t.n||(t.n=lf.bind(t.proxy)),$watch:t=>iy.bind(t)}),$o=(t,e)=>t!==de&&!t.__isScriptSetup&&se(t,e),Ey={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if($o(s,e))return o[e]=1,s[e];if(r!==de&&se(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&se(u,e))return o[e]=3,i[e];if(n!==de&&se(n,e))return o[e]=4,n[e];ma&&(o[e]=0)}}const l=Hs[e];let h,d;if(l)return e==="$attrs"&&nt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==de&&se(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return $o(r,e)?(r[e]=n,!0):s!==de&&se(s,e)?(s[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==de&&se(t,o)||$o(e,o)||(a=i[0])&&se(a,o)||se(s,o)||se(Hs,o)||se(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let ma=!0;function _y(t){const e=vc(t),n=t.proxy,s=t.ctx;ma=!1,e.beforeCreate&&qu(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:_,deactivated:k,beforeDestroy:R,beforeUnmount:P,destroyed:L,unmounted:Y,render:pe,renderTracked:be,renderTriggered:Le,errorCaptured:ct,serverPrefetch:yt,expose:it,inheritAttrs:Qt,components:vt,directives:zn,filters:wn}=e;if(u&&Iy(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const ce=o[le];X(ce)&&(s[le]=ce.bind(n))}if(r){const le=r.call(n,n);me(le)&&(t.data=Tr(le))}if(ma=!0,i)for(const le in i){const ce=i[le],ut=X(ce)?ce.bind(n,n):X(ce.get)?ce.get.bind(n,n):pt,En=!X(ce)&&X(ce.set)?ce.set.bind(n):pt,lt=ot({get:ut,set:En});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>lt.value,set:Qe=>lt.value=Qe})}if(a)for(const le in a)bf(a[le],s,n,le);if(c){const le=X(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ce=>{ci(ce,le[ce])})}l&&qu(l,t,"c");function Ee(le,ce){G(ce)?ce.forEach(ut=>le(ut.bind(n))):ce&&le(ce.bind(n))}if(Ee(uy,h),Ee(ly,d),Ee(hy,g),Ee(fy,y),Ee(oy,_),Ee(ay,k),Ee(yy,ct),Ee(my,be),Ee(gy,Le),Ee(dy,P),Ee(_f,Y),Ee(py,yt),G(it))if(it.length){const le=t.exposed||(t.exposed={});it.forEach(ce=>{Object.defineProperty(le,ce,{get:()=>n[ce],set:ut=>n[ce]=ut})})}else t.exposed||(t.exposed={});pe&&t.render===pt&&(t.render=pe),Qt!=null&&(t.inheritAttrs=Qt),vt&&(t.components=vt),zn&&(t.directives=zn)}function Iy(t,e,n=pt,s=!1){G(t)&&(t=ya(t));for(const r in t){const i=t[r];let o;me(i)?"default"in i?o=Bt(i.from||r,i.default,!0):o=Bt(i.from||r):o=Bt(i),$e(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function qu(t,e,n){gt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function bf(t,e,n,s){const r=s.includes(".")?yf(n,s):()=>n[s];if(Re(t)){const i=e[t];X(i)&&ui(r,i)}else if(X(t))ui(r,t.bind(n));else if(me(t))if(G(t))t.forEach(i=>bf(i,e,n,s));else{const i=X(t.handler)?t.handler.bind(n):e[t.handler];X(i)&&ui(r,i,t)}}function vc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>bi(c,u,o,!0)),bi(c,e,o)),me(e)&&i.set(e,c),c}function bi(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&bi(t,i,n,!0),r&&r.forEach(o=>bi(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Ty[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ty={data:Hu,props:Tn,emits:Tn,methods:Tn,computed:Tn,beforeCreate:ze,created:ze,beforeMount:ze,mounted:ze,beforeUpdate:ze,updated:ze,beforeDestroy:ze,beforeUnmount:ze,destroyed:ze,unmounted:ze,activated:ze,deactivated:ze,errorCaptured:ze,serverPrefetch:ze,components:Tn,directives:Tn,watch:Sy,provide:Hu,inject:by};function Hu(t,e){return e?t?function(){return Ge(X(t)?t.call(this,this):t,X(e)?e.call(this,this):e)}:e:t}function by(t,e){return Tn(ya(t),ya(e))}function ya(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ze(t,e){return t?[...new Set([].concat(t,e))]:e}function Tn(t,e){return t?Ge(Ge(Object.create(null),t),e):e}function Sy(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const s in e)n[s]=ze(t[s],e[s]);return n}function Ay(t,e,n,s=!1){const r={},i={};Ei(i,so,1),t.propsDefaults=Object.create(null),Sf(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Vm(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Cy(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=oe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(eo(t.emitsOptions,d))continue;const g=e[d];if(c)if(se(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const y=Dt(d);r[y]=va(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{Sf(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!se(e,h)&&((l=Cs(h))===h||!se(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=va(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!se(e,h))&&(delete i[h],u=!0)}u&&$t(t,"set","$attrs")}function Sf(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(oi(c))continue;const u=e[c];let l;r&&se(r,l=Dt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:eo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=oe(n),u=a||de;for(let l=0;l<i.length;l++){const h=i[l];n[h]=va(r,c,h,u[h],t,!se(u,h))}}return o}function va(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&X(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(ps(r),s=u[n]=c.call(null,e),Nn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Cs(n))&&(s=!0))}return s}function Af(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!X(t)){const l=h=>{c=!0;const[d,g]=Af(h,e,!0);Ge(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return me(t)&&s.set(t,ss),ss;if(G(i))for(let l=0;l<i.length;l++){const h=Dt(i[l]);Ku(h)&&(o[h]=de)}else if(i)for(const l in i){const h=Dt(l);if(Ku(h)){const d=i[l],g=o[h]=G(d)||X(d)?{type:d}:Object.assign({},d);if(g){const y=Gu(Boolean,g.type),_=Gu(String,g.type);g[0]=y>-1,g[1]=_<0||y<_,(y>-1||se(g,"default"))&&a.push(h)}}}const u=[o,a];return me(t)&&s.set(t,u),u}function Ku(t){return t[0]!=="$"}function zu(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Wu(t,e){return zu(t)===zu(e)}function Gu(t,e){return G(e)?e.findIndex(n=>Wu(n,t)):X(e)&&Wu(e,t)?0:-1}const Cf=t=>t[0]==="_"||t==="$stable",wc=t=>G(t)?t.map(Tt):[Tt(t)],Ry=(t,e,n)=>{if(e._n)return e;const s=Jm((...r)=>wc(e(...r)),n);return s._c=!1,s},Rf=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Cf(r))continue;const i=t[r];if(X(i))e[r]=Ry(r,i,s);else if(i!=null){const o=wc(i);e[r]=()=>o}}},kf=(t,e)=>{const n=wc(e);t.slots.default=()=>n},ky=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=oe(e),Ei(e,"_",n)):Rf(e,t.slots={})}else t.slots={},e&&kf(t,e);Ei(t.slots,so,1)},Dy=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ge(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Rf(e,r)),o=e}else e&&(kf(t,e),o={default:1});if(i)for(const a in r)!Cf(a)&&!(a in o)&&delete r[a]};function Df(){return{app:null,config:{isNativeTag:im,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oy=0;function Ny(t,e){return function(s,r=null){X(s)||(s=Object.assign({},s)),r!=null&&!me(r)&&(r=null);const i=Df(),o=new Set;let a=!1;const c=i.app={_uid:Oy++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:tv,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&X(u.install)?(o.add(u),u.install(c,...l)):X(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Je(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,ro(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function wa(t,e,n,s,r=!1){if(G(t)){t.forEach((d,g)=>wa(d,e&&(G(e)?e[g]:e),n,s,r));return}if(li(s)&&!r)return;const i=s.shapeFlag&4?ro(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===de?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Re(u)?(l[u]=null,se(h,u)&&(h[u]=null)):$e(u)&&(u.value=null)),X(c))an(c,a,12,[o,l]);else{const d=Re(c),g=$e(c);if(d||g){const y=()=>{if(t.f){const _=d?se(h,c)?h[c]:l[c]:c.value;r?G(_)&&oc(_,i):G(_)?_.includes(i)||_.push(i):d?(l[c]=[i],se(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,se(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,Xe(y,n)):y()}}}const Xe=ry;function Py(t){return xy(t)}function xy(t,e){const n=hm();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:g=pt,insertStaticContent:y}=t,_=(f,p,m,v=null,E=null,A=null,O=!1,S=null,C=!!p.dynamicChildren)=>{if(f===p)return;f&&!Us(f,p)&&(v=D(f),Qe(f,E,A,!0),f=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:I,ref:V,shapeFlag:x}=p;switch(I){case no:k(f,p,m,v);break;case Ln:R(f,p,m,v);break;case hi:f==null&&P(p,m,v,O);break;case Lt:vt(f,p,m,v,E,A,O,S,C);break;default:x&1?pe(f,p,m,v,E,A,O,S,C):x&6?zn(f,p,m,v,E,A,O,S,C):(x&64||x&128)&&I.process(f,p,m,v,E,A,O,S,C,ne)}V!=null&&E&&wa(V,f&&f.ref,A,p||f,!p)},k=(f,p,m,v)=>{if(f==null)s(p.el=a(p.children),m,v);else{const E=p.el=f.el;p.children!==f.children&&u(E,p.children)}},R=(f,p,m,v)=>{f==null?s(p.el=c(p.children||""),m,v):p.el=f.el},P=(f,p,m,v)=>{[f.el,f.anchor]=y(f.children,p,m,v,f.el,f.anchor)},L=({el:f,anchor:p},m,v)=>{let E;for(;f&&f!==p;)E=d(f),s(f,m,v),f=E;s(p,m,v)},Y=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),r(f),f=m;r(p)},pe=(f,p,m,v,E,A,O,S,C)=>{O=O||p.type==="svg",f==null?be(p,m,v,E,A,O,S,C):yt(f,p,E,A,O,S,C)},be=(f,p,m,v,E,A,O,S)=>{let C,I;const{type:V,props:x,shapeFlag:B,transition:z,dirs:Z}=f;if(C=f.el=o(f.type,A,x&&x.is,x),B&8?l(C,f.children):B&16&&ct(f.children,C,null,v,E,A&&V!=="foreignObject",O,S),Z&&_n(f,null,v,"created"),x){for(const ue in x)ue!=="value"&&!oi(ue)&&i(C,ue,null,x[ue],A,f.children,v,E,N);"value"in x&&i(C,"value",null,x.value),(I=x.onVnodeBeforeMount)&&Et(I,v,f)}Le(C,f,f.scopeId,O,v),Z&&_n(f,null,v,"beforeMount");const he=(!E||E&&!E.pendingBranch)&&z&&!z.persisted;he&&z.beforeEnter(C),s(C,p,m),((I=x&&x.onVnodeMounted)||he||Z)&&Xe(()=>{I&&Et(I,v,f),he&&z.enter(C),Z&&_n(f,null,v,"mounted")},E)},Le=(f,p,m,v,E)=>{if(m&&g(f,m),v)for(let A=0;A<v.length;A++)g(f,v[A]);if(E){let A=E.subTree;if(p===A){const O=E.vnode;Le(f,O,O.scopeId,O.slotScopeIds,E.parent)}}},ct=(f,p,m,v,E,A,O,S,C=0)=>{for(let I=C;I<f.length;I++){const V=f[I]=S?Zt(f[I]):Tt(f[I]);_(null,V,p,m,v,E,A,O,S)}},yt=(f,p,m,v,E,A,O)=>{const S=p.el=f.el;let{patchFlag:C,dynamicChildren:I,dirs:V}=p;C|=f.patchFlag&16;const x=f.props||de,B=p.props||de;let z;m&&In(m,!1),(z=B.onVnodeBeforeUpdate)&&Et(z,m,p,f),V&&_n(p,f,m,"beforeUpdate"),m&&In(m,!0);const Z=E&&p.type!=="foreignObject";if(I?it(f.dynamicChildren,I,S,m,v,Z,A):O||ce(f,p,S,null,m,v,Z,A,!1),C>0){if(C&16)Qt(S,p,x,B,m,v,E);else if(C&2&&x.class!==B.class&&i(S,"class",null,B.class,E),C&4&&i(S,"style",x.style,B.style,E),C&8){const he=p.dynamicProps;for(let ue=0;ue<he.length;ue++){const _e=he[ue],ht=x[_e],Gn=B[_e];(Gn!==ht||_e==="value")&&i(S,_e,ht,Gn,E,f.children,m,v,N)}}C&1&&f.children!==p.children&&l(S,p.children)}else!O&&I==null&&Qt(S,p,x,B,m,v,E);((z=B.onVnodeUpdated)||V)&&Xe(()=>{z&&Et(z,m,p,f),V&&_n(p,f,m,"updated")},v)},it=(f,p,m,v,E,A,O)=>{for(let S=0;S<p.length;S++){const C=f[S],I=p[S],V=C.el&&(C.type===Lt||!Us(C,I)||C.shapeFlag&70)?h(C.el):m;_(C,I,V,null,v,E,A,O,!0)}},Qt=(f,p,m,v,E,A,O)=>{if(m!==v){if(m!==de)for(const S in m)!oi(S)&&!(S in v)&&i(f,S,m[S],null,O,p.children,E,A,N);for(const S in v){if(oi(S))continue;const C=v[S],I=m[S];C!==I&&S!=="value"&&i(f,S,I,C,O,p.children,E,A,N)}"value"in v&&i(f,"value",m.value,v.value)}},vt=(f,p,m,v,E,A,O,S,C)=>{const I=p.el=f?f.el:a(""),V=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:B,slotScopeIds:z}=p;z&&(S=S?S.concat(z):z),f==null?(s(I,m,v),s(V,m,v),ct(p.children,m,V,E,A,O,S,C)):x>0&&x&64&&B&&f.dynamicChildren?(it(f.dynamicChildren,B,m,E,A,O,S),(p.key!=null||E&&p===E.subTree)&&Of(f,p,!0)):ce(f,p,m,V,E,A,O,S,C)},zn=(f,p,m,v,E,A,O,S,C)=>{p.slotScopeIds=S,f==null?p.shapeFlag&512?E.ctx.activate(p,m,v,O,C):wn(p,m,v,E,A,O,C):Ms(f,p,C)},wn=(f,p,m,v,E,A,O)=>{const S=f.component=zy(f,v,E);if(wf(f)&&(S.ctx.renderer=ne),Wy(S),S.asyncDep){if(E&&E.registerDep(S,Ee),!f.el){const C=S.subTree=Je(Ln);R(null,C,p,m)}return}Ee(S,f,p,m,E,A,O)},Ms=(f,p,m)=>{const v=p.component=f.component;if(ty(f,p,m))if(v.asyncDep&&!v.asyncResolved){le(v,p,m);return}else v.next=p,Gm(v.update),v.update();else p.el=f.el,v.vnode=p},Ee=(f,p,m,v,E,A,O)=>{const S=()=>{if(f.isMounted){let{next:V,bu:x,u:B,parent:z,vnode:Z}=f,he=V,ue;In(f,!1),V?(V.el=Z.el,le(f,V,O)):V=Z,x&&ai(x),(ue=V.props&&V.props.onVnodeBeforeUpdate)&&Et(ue,z,V,Z),In(f,!0);const _e=Bo(f),ht=f.subTree;f.subTree=_e,_(ht,_e,h(ht.el),D(ht),f,E,A),V.el=_e.el,he===null&&ny(f,_e.el),B&&Xe(B,E),(ue=V.props&&V.props.onVnodeUpdated)&&Xe(()=>Et(ue,z,V,Z),E)}else{let V;const{el:x,props:B}=p,{bm:z,m:Z,parent:he}=f,ue=li(p);if(In(f,!1),z&&ai(z),!ue&&(V=B&&B.onVnodeBeforeMount)&&Et(V,he,p),In(f,!0),x&&J){const _e=()=>{f.subTree=Bo(f),J(x,f.subTree,f,E,null)};ue?p.type.__asyncLoader().then(()=>!f.isUnmounted&&_e()):_e()}else{const _e=f.subTree=Bo(f);_(null,_e,m,v,f,E,A),p.el=_e.el}if(Z&&Xe(Z,E),!ue&&(V=B&&B.onVnodeMounted)){const _e=p;Xe(()=>Et(V,he,_e),E)}(p.shapeFlag&256||he&&li(he.vnode)&&he.vnode.shapeFlag&256)&&f.a&&Xe(f.a,E),f.isMounted=!0,p=m=v=null}},C=f.effect=new lc(S,()=>yc(I),f.scope),I=f.update=()=>C.run();I.id=f.uid,In(f,!0),I()},le=(f,p,m)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,Cy(f,p.props,v,m),Dy(f,p.children,m),Rs(),Bu(),ks()},ce=(f,p,m,v,E,A,O,S,C=!1)=>{const I=f&&f.children,V=f?f.shapeFlag:0,x=p.children,{patchFlag:B,shapeFlag:z}=p;if(B>0){if(B&128){En(I,x,m,v,E,A,O,S,C);return}else if(B&256){ut(I,x,m,v,E,A,O,S,C);return}}z&8?(V&16&&N(I,E,A),x!==I&&l(m,x)):V&16?z&16?En(I,x,m,v,E,A,O,S,C):N(I,E,A,!0):(V&8&&l(m,""),z&16&&ct(x,m,v,E,A,O,S,C))},ut=(f,p,m,v,E,A,O,S,C)=>{f=f||ss,p=p||ss;const I=f.length,V=p.length,x=Math.min(I,V);let B;for(B=0;B<x;B++){const z=p[B]=C?Zt(p[B]):Tt(p[B]);_(f[B],z,m,null,E,A,O,S,C)}I>V?N(f,E,A,!0,!1,x):ct(p,m,v,E,A,O,S,C,x)},En=(f,p,m,v,E,A,O,S,C)=>{let I=0;const V=p.length;let x=f.length-1,B=V-1;for(;I<=x&&I<=B;){const z=f[I],Z=p[I]=C?Zt(p[I]):Tt(p[I]);if(Us(z,Z))_(z,Z,m,null,E,A,O,S,C);else break;I++}for(;I<=x&&I<=B;){const z=f[x],Z=p[B]=C?Zt(p[B]):Tt(p[B]);if(Us(z,Z))_(z,Z,m,null,E,A,O,S,C);else break;x--,B--}if(I>x){if(I<=B){const z=B+1,Z=z<V?p[z].el:v;for(;I<=B;)_(null,p[I]=C?Zt(p[I]):Tt(p[I]),m,Z,E,A,O,S,C),I++}}else if(I>B)for(;I<=x;)Qe(f[I],E,A,!0),I++;else{const z=I,Z=I,he=new Map;for(I=Z;I<=B;I++){const Ze=p[I]=C?Zt(p[I]):Tt(p[I]);Ze.key!=null&&he.set(Ze.key,I)}let ue,_e=0;const ht=B-Z+1;let Gn=!1,ku=0;const Ls=new Array(ht);for(I=0;I<ht;I++)Ls[I]=0;for(I=z;I<=x;I++){const Ze=f[I];if(_e>=ht){Qe(Ze,E,A,!0);continue}let wt;if(Ze.key!=null)wt=he.get(Ze.key);else for(ue=Z;ue<=B;ue++)if(Ls[ue-Z]===0&&Us(Ze,p[ue])){wt=ue;break}wt===void 0?Qe(Ze,E,A,!0):(Ls[wt-Z]=I+1,wt>=ku?ku=wt:Gn=!0,_(Ze,p[wt],m,null,E,A,O,S,C),_e++)}const Du=Gn?My(Ls):ss;for(ue=Du.length-1,I=ht-1;I>=0;I--){const Ze=Z+I,wt=p[Ze],Ou=Ze+1<V?p[Ze+1].el:v;Ls[I]===0?_(null,wt,m,Ou,E,A,O,S,C):Gn&&(ue<0||I!==Du[ue]?lt(wt,m,Ou,2):ue--)}}},lt=(f,p,m,v,E=null)=>{const{el:A,type:O,transition:S,children:C,shapeFlag:I}=f;if(I&6){lt(f.component.subTree,p,m,v);return}if(I&128){f.suspense.move(p,m,v);return}if(I&64){O.move(f,p,m,ne);return}if(O===Lt){s(A,p,m);for(let x=0;x<C.length;x++)lt(C[x],p,m,v);s(f.anchor,p,m);return}if(O===hi){L(f,p,m);return}if(v!==2&&I&1&&S)if(v===0)S.beforeEnter(A),s(A,p,m),Xe(()=>S.enter(A),E);else{const{leave:x,delayLeave:B,afterLeave:z}=S,Z=()=>s(A,p,m),he=()=>{x(A,()=>{Z(),z&&z()})};B?B(A,Z,he):he()}else s(A,p,m)},Qe=(f,p,m,v=!1,E=!1)=>{const{type:A,props:O,ref:S,children:C,dynamicChildren:I,shapeFlag:V,patchFlag:x,dirs:B}=f;if(S!=null&&wa(S,null,m,f,!0),V&256){p.ctx.deactivate(f);return}const z=V&1&&B,Z=!li(f);let he;if(Z&&(he=O&&O.onVnodeBeforeUnmount)&&Et(he,p,f),V&6)w(f.component,m,v);else{if(V&128){f.suspense.unmount(m,v);return}z&&_n(f,null,p,"beforeUnmount"),V&64?f.type.remove(f,p,m,E,ne,v):I&&(A!==Lt||x>0&&x&64)?N(I,p,m,!1,!0):(A===Lt&&x&384||!E&&V&16)&&N(C,p,m),v&&Wn(f)}(Z&&(he=O&&O.onVnodeUnmounted)||z)&&Xe(()=>{he&&Et(he,p,f),z&&_n(f,null,p,"unmounted")},m)},Wn=f=>{const{type:p,el:m,anchor:v,transition:E}=f;if(p===Lt){zr(m,v);return}if(p===hi){Y(f);return}const A=()=>{r(m),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:S}=E,C=()=>O(m,A);S?S(f.el,A,C):C()}else A()},zr=(f,p)=>{let m;for(;f!==p;)m=d(f),r(f),f=m;r(p)},w=(f,p,m)=>{const{bum:v,scope:E,update:A,subTree:O,um:S}=f;v&&ai(v),E.stop(),A&&(A.active=!1,Qe(O,f,p,m)),S&&Xe(S,p),Xe(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},N=(f,p,m,v=!1,E=!1,A=0)=>{for(let O=A;O<f.length;O++)Qe(f[O],p,m,v,E)},D=f=>f.shapeFlag&6?D(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,p,m)=>{f==null?p._vnode&&Qe(p._vnode,null,null,!0):_(p._vnode||null,f,p,null,null,null,m),Bu(),ff(),p._vnode=f},ne={p:_,um:Qe,m:lt,r:Wn,mt:wn,mc:ct,pc:ce,pbc:it,n:D,o:t};let ye,J;return e&&([ye,J]=e(ne)),{render:F,hydrate:ye,createApp:Ny(F,ye)}}function In({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Of(t,e,n=!1){const s=t.children,r=e.children;if(G(s)&&G(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=Zt(r[i]),a.el=o.el),n||Of(o,a)),a.type===no&&(a.el=o.el)}}function My(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Ly=t=>t.__isTeleport,Lt=Symbol(void 0),no=Symbol(void 0),Ln=Symbol(void 0),hi=Symbol(void 0),Ks=[];let dt=null;function Uy(t=!1){Ks.push(dt=t?null:[])}function Fy(){Ks.pop(),dt=Ks[Ks.length-1]||null}let ir=1;function Qu(t){ir+=t}function Nf(t){return t.dynamicChildren=ir>0?dt||ss:null,Fy(),ir>0&&dt&&dt.push(t),t}function hA(t,e,n,s,r,i){return Nf(xf(t,e,n,s,r,i,!0))}function Vy(t,e,n,s,r){return Nf(Je(t,e,n,s,r,!0))}function Ea(t){return t?t.__v_isVNode===!0:!1}function Us(t,e){return t.type===e.type&&t.key===e.key}const so="__vInternal",Pf=({key:t})=>t??null,fi=({ref:t,ref_key:e,ref_for:n})=>t!=null?Re(t)||$e(t)||X(t)?{i:at,r:t,k:e,f:!!n}:t:null;function xf(t,e=null,n=null,s=0,r=null,i=t===Lt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pf(e),ref:e&&fi(e),scopeId:gf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:at};return a?(Ec(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Re(n)?8:16),ir>0&&!o&&dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&dt.push(c),c}const Je=By;function By(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===wy)&&(t=Ln),Ea(t)){const a=ds(t,e,!0);return n&&Ec(a,n),ir>0&&!i&&dt&&(a.shapeFlag&6?dt[dt.indexOf(t)]=a:dt.push(a)),a.patchFlag|=-2,a}if(Jy(t)&&(t=t.__vccOpts),e){e=$y(e);let{class:a,style:c}=e;a&&!Re(a)&&(e.class=rc(a)),me(c)&&(tf(c)&&!G(c)&&(c=Ge({},c)),e.style=sc(c))}const o=Re(t)?1:sy(t)?128:Ly(t)?64:me(t)?4:X(t)?2:0;return xf(t,e,n,s,r,o,i,!0)}function $y(t){return t?tf(t)||so in t?Ge({},t):t:null}function ds(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?qy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Pf(a),ref:e&&e.ref?n&&r?G(r)?r.concat(fi(e)):[r,fi(e)]:fi(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function jy(t=" ",e=0){return Je(no,null,t,e)}function fA(t,e){const n=Je(hi,null,t);return n.staticCount=e,n}function dA(t="",e=!1){return e?(Uy(),Vy(Ln,null,t)):Je(Ln,null,t)}function Tt(t){return t==null||typeof t=="boolean"?Je(Ln):G(t)?Je(Lt,null,t.slice()):typeof t=="object"?Zt(t):Je(no,null,String(t))}function Zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function Ec(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Ec(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(so in e)?e._ctx=at:r===3&&at&&(at.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else X(e)?(e={default:e,_ctx:at},n=32):(e=String(e),s&64?(n=16,e=[jy(e)]):n=8);t.children=e,t.shapeFlag|=n}function qy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=rc([e.class,s.class]));else if(r==="style")e.style=sc([e.style,s.style]);else if(Gi(r)){const i=e[r],o=s[r];o&&i!==o&&!(G(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Et(t,e,n,s=null){gt(t,e,7,[n,s])}const Hy=Df();let Ky=0;function zy(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Hy,i={uid:Ky++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new fm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Af(s,r),emitsOptions:pf(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ym.bind(null,i),t.ce&&t.ce(i),i}let Pe=null;const ps=t=>{Pe=t,t.scope.on()},Nn=()=>{Pe&&Pe.scope.off(),Pe=null};function Mf(t){return t.vnode.shapeFlag&4}let or=!1;function Wy(t,e=!1){or=e;const{props:n,children:s}=t.vnode,r=Mf(t);Ay(t,n,r,e),ky(t,s);const i=r?Gy(t,e):void 0;return or=!1,i}function Gy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=nf(new Proxy(t.ctx,Ey));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Xy(t):null;ps(t),Rs();const i=an(s,t,0,[t.props,r]);if(ks(),Nn(),$h(i)){if(i.then(Nn,Nn),e)return i.then(o=>{Xu(t,o,e)}).catch(o=>{Zi(o,t,0)});t.asyncDep=i}else Xu(t,i,e)}else Lf(t,e)}function Xu(t,e,n){X(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=af(e)),Lf(t,n)}let Yu;function Lf(t,e,n){const s=t.type;if(!t.render){if(!e&&Yu&&!s.render){const r=s.template||vc(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=Ge(Ge({isCustomElement:i,delimiters:a},o),c);s.render=Yu(r,u)}}t.render=s.render||pt}ps(t),Rs(),_y(t),ks(),Nn()}function Qy(t){return new Proxy(t.attrs,{get(e,n){return nt(t,"get","$attrs"),e[n]}})}function Xy(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Qy(t))},slots:t.slots,emit:t.emit,expose:e}}function ro(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(af(nf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hs)return Hs[n](t)},has(e,n){return n in e||n in Hs}}))}function Yy(t,e=!0){return X(t)?t.displayName||t.name:t.name||e&&t.__name}function Jy(t){return X(t)&&"__vccOpts"in t}const ot=(t,e)=>Km(t,e,or);function Uf(t,e,n){const s=arguments.length;return s===2?me(e)&&!G(e)?Ea(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ea(n)&&(n=[n]),Je(t,e,n))}const Zy=Symbol(""),ev=()=>Bt(Zy),tv="3.2.45",nv="http://www.w3.org/2000/svg",An=typeof document<"u"?document:null,Ju=An&&An.createElement("template"),sv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?An.createElementNS(nv,t):An.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Ju.innerHTML=s?`<svg>${t}</svg>`:t;const a=Ju.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function rv(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function iv(t,e,n){const s=t.style,r=Re(n);if(n&&!r){for(const i in n)_a(s,i,n[i]);if(e&&!Re(e))for(const i in e)n[i]==null&&_a(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Zu=/\s*!important$/;function _a(t,e,n){if(G(n))n.forEach(s=>_a(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ov(t,e);Zu.test(n)?t.setProperty(Cs(s),n.replace(Zu,""),"important"):t[s]=n}}const el=["Webkit","Moz","ms"],jo={};function ov(t,e){const n=jo[e];if(n)return n;let s=Dt(e);if(s!=="filter"&&s in t)return jo[e]=s;s=Yi(s);for(let r=0;r<el.length;r++){const i=el[r]+s;if(i in t)return jo[e]=i}return e}const tl="http://www.w3.org/1999/xlink";function av(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(tl,e.slice(6,e.length)):t.setAttributeNS(tl,e,n);else{const i=rm(e);n==null||i&&!Fh(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function cv(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Fh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Yn(t,e,n,s){t.addEventListener(e,n,s)}function uv(t,e,n,s){t.removeEventListener(e,n,s)}function lv(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=hv(e);if(s){const u=i[e]=pv(s,r);Yn(t,a,u,c)}else o&&(uv(t,a,o,c),i[e]=void 0)}}const nl=/(?:Once|Passive|Capture)$/;function hv(t){let e;if(nl.test(t)){e={};let s;for(;s=t.match(nl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cs(t.slice(2)),e]}let qo=0;const fv=Promise.resolve(),dv=()=>qo||(fv.then(()=>qo=0),qo=Date.now());function pv(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;gt(gv(s,n.value),e,5,[s])};return n.value=t,n.attached=dv(),n}function gv(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const sl=/^on[a-z]/,mv=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?rv(t,s,r):e==="style"?iv(t,n,s):Gi(e)?ic(e)||lv(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yv(t,e,s,r))?cv(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),av(t,e,s,r))};function yv(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&sl.test(e)&&X(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||sl.test(e)&&Re(n)?!1:e in t}const rl=t=>{const e=t.props["onUpdate:modelValue"]||!1;return G(e)?n=>ai(e,n):e};function vv(t){t.target.composing=!0}function il(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pA={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=rl(r);const i=s||r.props&&r.props.type==="number";Yn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=_i(a)),t._assign(a)}),n&&Yn(t,"change",()=>{t.value=t.value.trim()}),e||(Yn(t,"compositionstart",vv),Yn(t,"compositionend",il),Yn(t,"change",il))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=rl(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&_i(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wv=Ge({patchProp:mv},sv);let ol;function Ev(){return ol||(ol=Py(wv))}const gA=(...t)=>{const e=Ev().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=_v(s);if(!r)return;const i=e._component;!X(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function _v(t){return Re(t)?document.querySelector(t):t}/**
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
 *//**
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
 */const Ff=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Iv=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Vf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ff(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Iv(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Tv=function(t){const e=Ff(t);return Vf.encodeByteArray(e,!0)},Si=function(t){return Tv(t).replace(/\./g,"")},Bf=function(t){try{return Vf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sv=()=>bv().__FIREBASE_DEFAULTS__,Av=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bf(t[1]);return e&&JSON.parse(e)},_c=()=>{try{return Sv()||Av()||Cv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$f=t=>{var e,n;return(n=(e=_c())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rv=t=>{const e=$f(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},kv=()=>{var t;return(t=_c())===null||t===void 0?void 0:t.config},jf=t=>{var e;return(e=_c())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Dv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ov(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Si(JSON.stringify(n)),Si(JSON.stringify(o)),a].join(".")}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function Pv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mv(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Lv(){try{return typeof indexedDB=="object"}catch{return!1}}function Uv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Fv="FirebaseError";class Gt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Fv,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Vv(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Gt(r,a,s)}}function Vv(t,e){return t.replace(Bv,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Bv=/\{\$([^}]+)}/g;function $v(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ai(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(al(i)&&al(o)){if(!Ai(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function al(t){return t!==null&&typeof t=="object"}/**
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
 */function Sr(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function jv(t,e){const n=new qv(t,e);return n.subscribe.bind(n)}class qv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Hv(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ho),r.error===void 0&&(r.error=Ho),r.complete===void 0&&(r.complete=Ho);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ho(){}/**
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
 */function st(t){return t&&t._delegate?t._delegate:t}class Un{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const bn="[DEFAULT]";/**
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
 */class Kv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Dv;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wv(e))try{this.getOrInitializeService({instanceIdentifier:bn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=bn){return this.instances.has(e)}getOptions(e=bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:zv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=bn){return this.component?this.component.multipleInstances?e:bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zv(t){return t===bn?void 0:t}function Wv(t){return t.instantiationMode==="EAGER"}/**
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
 */class Gv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const Qv={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Xv=re.INFO,Yv={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Jv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Yv[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ic{constructor(e){this.name=e,this._logLevel=Xv,this._logHandler=Jv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const Zv=(t,e)=>e.some(n=>t instanceof n);let cl,ul;function ew(){return cl||(cl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tw(){return ul||(ul=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qf=new WeakMap,Ia=new WeakMap,Hf=new WeakMap,Ko=new WeakMap,Tc=new WeakMap;function nw(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cn(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qf.set(n,t)}).catch(()=>{}),Tc.set(e,t),e}function sw(t){if(Ia.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ia.set(t,e)}let Ta={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ia.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rw(t){Ta=t(Ta)}function iw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(zo(this),e,...n);return Hf.set(s,e.sort?e.sort():[e]),cn(s)}:tw().includes(t)?function(...e){return t.apply(zo(this),e),cn(qf.get(this))}:function(...e){return cn(t.apply(zo(this),e))}}function ow(t){return typeof t=="function"?iw(t):(t instanceof IDBTransaction&&sw(t),Zv(t,ew())?new Proxy(t,Ta):t)}function cn(t){if(t instanceof IDBRequest)return nw(t);if(Ko.has(t))return Ko.get(t);const e=ow(t);return e!==t&&(Ko.set(t,e),Tc.set(e,t)),e}const zo=t=>Tc.get(t);function aw(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=cn(o);return s&&o.addEventListener("upgradeneeded",c=>{s(cn(o.result),c.oldVersion,c.newVersion,cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const cw=["get","getKey","getAll","getAllKeys","count"],uw=["put","add","delete","clear"],Wo=new Map;function ll(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wo.get(e))return Wo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=uw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||cw.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Wo.set(e,i),i}rw(t=>({...t,get:(e,n,s)=>ll(e,n)||t.get(e,n,s),has:(e,n)=>!!ll(e,n)||t.has(e,n)}));/**
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
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function hw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ba="@firebase/app",hl="0.9.1";/**
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
 */const Fn=new Ic("@firebase/app"),fw="@firebase/app-compat",dw="@firebase/analytics-compat",pw="@firebase/analytics",gw="@firebase/app-check-compat",mw="@firebase/app-check",yw="@firebase/auth",vw="@firebase/auth-compat",ww="@firebase/database",Ew="@firebase/database-compat",_w="@firebase/functions",Iw="@firebase/functions-compat",Tw="@firebase/installations",bw="@firebase/installations-compat",Sw="@firebase/messaging",Aw="@firebase/messaging-compat",Cw="@firebase/performance",Rw="@firebase/performance-compat",kw="@firebase/remote-config",Dw="@firebase/remote-config-compat",Ow="@firebase/storage",Nw="@firebase/storage-compat",Pw="@firebase/firestore",xw="@firebase/firestore-compat",Mw="firebase",Lw="9.16.0";/**
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
 */const Sa="[DEFAULT]",Uw={[ba]:"fire-core",[fw]:"fire-core-compat",[pw]:"fire-analytics",[dw]:"fire-analytics-compat",[mw]:"fire-app-check",[gw]:"fire-app-check-compat",[yw]:"fire-auth",[vw]:"fire-auth-compat",[ww]:"fire-rtdb",[Ew]:"fire-rtdb-compat",[_w]:"fire-fn",[Iw]:"fire-fn-compat",[Tw]:"fire-iid",[bw]:"fire-iid-compat",[Sw]:"fire-fcm",[Aw]:"fire-fcm-compat",[Cw]:"fire-perf",[Rw]:"fire-perf-compat",[kw]:"fire-rc",[Dw]:"fire-rc-compat",[Ow]:"fire-gcs",[Nw]:"fire-gcs-compat",[Pw]:"fire-fst",[xw]:"fire-fst-compat","fire-js":"fire-js",[Mw]:"fire-js-all"};/**
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
 */const Ci=new Map,Aa=new Map;function Fw(t,e){try{t.container.addComponent(e)}catch(n){Fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gs(t){const e=t.name;if(Aa.has(e))return Fn.debug(`There were multiple attempts to register component ${e}.`),!1;Aa.set(e,t);for(const n of Ci.values())Fw(n,t);return!0}function bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Vw={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},un=new br("app","Firebase",Vw);/**
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
 */class Bw{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw un.create("app-deleted",{appName:this._name})}}/**
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
 */const Ar=Lw;function $w(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Sa,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw un.create("bad-app-name",{appName:String(r)});if(n||(n=kv()),!n)throw un.create("no-options");const i=Ci.get(r);if(i){if(Ai(n,i.options)&&Ai(s,i.config))return i;throw un.create("duplicate-app",{appName:r})}const o=new Gv(r);for(const c of Aa.values())o.addComponent(c);const a=new Bw(n,s,o);return Ci.set(r,a),a}function Kf(t=Sa){const e=Ci.get(t);if(!e&&t===Sa)return $w();if(!e)throw un.create("no-app",{appName:t});return e}function ln(t,e,n){var s;let r=(s=Uw[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fn.warn(a.join(" "));return}gs(new Un(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const jw="firebase-heartbeat-database",qw=1,ar="firebase-heartbeat-store";let Go=null;function zf(){return Go||(Go=aw(jw,qw,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ar)}}}).catch(t=>{throw un.create("idb-open",{originalErrorMessage:t.message})})),Go}async function Hw(t){try{return(await zf()).transaction(ar).objectStore(ar).get(Wf(t))}catch(e){if(e instanceof Gt)Fn.warn(e.message);else{const n=un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Fn.warn(n.message)}}}async function fl(t,e){try{const s=(await zf()).transaction(ar,"readwrite");return await s.objectStore(ar).put(e,Wf(t)),s.done}catch(n){if(n instanceof Gt)Fn.warn(n.message);else{const s=un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Fn.warn(s.message)}}}function Wf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Kw=1024,zw=30*24*60*60*1e3;class Ww{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=dl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=zw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=dl(),{heartbeatsToSend:n,unsentEntries:s}=Gw(this._heartbeatsCache.heartbeats),r=Si(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function dl(){return new Date().toISOString().substring(0,10)}function Gw(t,e=Kw){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),pl(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),pl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Qw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lv()?Uv().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hw(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function pl(t){return Si(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Xw(t){gs(new Un("platform-logger",e=>new lw(e),"PRIVATE")),gs(new Un("heartbeat",e=>new Ww(e),"PRIVATE")),ln(ba,hl,t),ln(ba,hl,"esm2017"),ln("fire-js","")}Xw("");var Yw="firebase",Jw="9.16.0";/**
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
 */ln(Yw,Jw,"app");function Sc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Gf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zw=Gf,Qf=new br("auth","Firebase",Gf());/**
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
 */const gl=new Ic("@firebase/auth");function di(t,...e){gl.logLevel<=re.ERROR&&gl.error(`Auth (${Ar}): ${t}`,...e)}/**
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
 */function Ot(t,...e){throw Ac(t,...e)}function At(t,...e){return Ac(t,...e)}function Xf(t,e,n){const s=Object.assign(Object.assign({},Zw()),{[e]:n});return new br("auth","Firebase",s).create(e,{appName:t.name})}function eE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ot(t,"argument-error"),Xf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ac(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Qf.create(t,...e)}function q(t,e,...n){if(!t)throw Ac(e,...n)}function Ut(t){const e="INTERNAL ASSERTION FAILED: "+t;throw di(e),new Error(e)}function jt(t,e){t||Ut(e)}/**
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
 */const ml=new Map;function Ft(t){jt(t instanceof Function,"Expected a class definition");let e=ml.get(t);return e?(jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ml.set(t,e),e)}/**
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
 */function tE(t,e){const n=bc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ai(i,e??{}))return r;Ot(r,"already-initialized")}return n.initialize({options:e})}function nE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Ft);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Ca(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sE(){return yl()==="http:"||yl()==="https:"}function yl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sE()||Pv()||"connection"in navigator)?navigator.onLine:!0}function iE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Cr{constructor(e,n){this.shortDelay=e,this.longDelay=n,jt(n>e,"Short delay should be less than long delay!"),this.isMobile=Nv()||xv()}get(){return rE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Cc(t,e){jt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Yf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const aE=new Cr(3e4,6e4);function cE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function io(t,e,n,s,r={}){return Jf(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Sr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Yf.fetch()(Zf(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Jf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},oE),e);try{const r=new lE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Zr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Zr(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Xf(t,l,u);Ot(t,l)}}catch(r){if(r instanceof Gt)throw r;Ot(t,"network-request-failed")}}async function uE(t,e,n,s,r={}){const i=await io(t,e,n,s,r);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Zf(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Cc(t.config,r):`${t.config.apiScheme}://${r}`}class lE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(At(this.auth,"network-request-failed")),aE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=At(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function hE(t,e){return io(t,"POST","/v1/accounts:delete",e)}async function fE(t,e){return io(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dE(t,e=!1){const n=st(t),s=await n.getIdToken(e),r=Rc(s);q(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:zs(Qo(r.auth_time)),issuedAtTime:zs(Qo(r.iat)),expirationTime:zs(Qo(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Qo(t){return Number(t)*1e3}function Rc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return di("JWT malformed, contained fewer than 3 sections"),null;try{const r=Bf(n);return r?JSON.parse(r):(di("Failed to decode base64 JWT payload"),null)}catch(r){return di("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function pE(t){const e=Rc(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Gt&&gE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function gE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ri(t){var e;const n=t.auth,s=await t.getIdToken(),r=await cr(t,fE(n,{idToken:s}));q(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wE(i.providerUserInfo):[],a=vE(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ed(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function yE(t){const e=st(t);await Ri(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function wE(t){return t.map(e=>{var{providerId:n}=e,s=Sc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function EE(t,e){const n=await Jf(t,{},async()=>{const s=Sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Zf(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yf.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await EE(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ur;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(q(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(q(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
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
 */function Yt(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ed(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dE(this,e)}reload(){return yE(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ri(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await cr(this,hE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:L,emailVerified:Y,isAnonymous:pe,providerData:be,stsTokenManager:Le}=n;q(L&&Le,e,"internal-error");const ct=ur.fromJSON(this.name,Le);q(typeof L=="string",e,"internal-error"),Yt(h,e.name),Yt(d,e.name),q(typeof Y=="boolean",e,"internal-error"),q(typeof pe=="boolean",e,"internal-error"),Yt(g,e.name),Yt(y,e.name),Yt(_,e.name),Yt(k,e.name),Yt(R,e.name),Yt(P,e.name);const yt=new Pn({uid:L,auth:e,email:d,emailVerified:Y,displayName:h,isAnonymous:pe,photoURL:y,phoneNumber:g,tenantId:_,stsTokenManager:ct,createdAt:R,lastLoginAt:P});return be&&Array.isArray(be)&&(yt.providerData=be.map(it=>Object.assign({},it))),k&&(yt._redirectEventId=k),yt}static async _fromIdTokenResponse(e,n,s=!1){const r=new ur;r.updateFromServerResponse(n);const i=new Pn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ri(i),i}}/**
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
 */class td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}td.type="NONE";const vl=td;/**
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
 */function pi(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=pi(this.userKey,r.apiKey,i),this.fullPersistenceKey=pi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new cs(Ft(vl),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Ft(vl);const o=pi(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=Pn._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cs(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new cs(i,e,s))}}/**
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
 */function wl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(od(e))return"Blackberry";if(ad(e))return"Webos";if(kc(e))return"Safari";if((e.includes("chrome/")||sd(e))&&!e.includes("edge/"))return"Chrome";if(id(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function nd(t=He()){return/firefox\//i.test(t)}function kc(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sd(t=He()){return/crios\//i.test(t)}function rd(t=He()){return/iemobile/i.test(t)}function id(t=He()){return/android/i.test(t)}function od(t=He()){return/blackberry/i.test(t)}function ad(t=He()){return/webos/i.test(t)}function oo(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function _E(t=He()){var e;return oo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IE(){return Mv()&&document.documentMode===10}function cd(t=He()){return oo(t)||id(t)||ad(t)||od(t)||/windows phone/i.test(t)||rd(t)}function TE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ud(t,e=[]){let n;switch(t){case"Browser":n=wl(He());break;case"Worker":n=`${wl(He())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ar}/${s}`}/**
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
 */class bE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class SE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new El(this),this.idTokenSubscription=new El(this),this.beforeStateQueue=new bE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Qf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ft(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ri(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?st(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ft(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ft(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[Ft(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ud(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Rr(t){return st(t)}class El{constructor(e){this.auth=e,this.observer=null,this.addObserver=jv(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function AE(t,e,n){const s=Rr(t);q(s._canInitEmulator,s,"emulator-config-failed"),q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=ld(e),{host:o,port:a}=CE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||RE()}function ld(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function CE(t){const e=ld(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:_l(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:_l(o)}}}function _l(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(e){return Ut("not implemented")}_linkToIdToken(e,n){return Ut("not implemented")}_getReauthenticationResolver(e){return Ut("not implemented")}}/**
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
 */async function us(t,e){return uE(t,"POST","/v1/accounts:signInWithIdp",cE(t,e))}/**
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
 */const kE="http://localhost";class Vn extends hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Sc(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Vn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return us(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,us(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,us(e,n)}buildRequest(){const e={requestUri:kE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sr(n)}return e}}/**
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
 */class Dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class kr extends Dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tn extends kr{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";tn.PROVIDER_ID="facebook.com";/**
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
 */class nn extends kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return nn.credential(n,s)}catch{return null}}}nn.GOOGLE_SIGN_IN_METHOD="google.com";nn.PROVIDER_ID="google.com";/**
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
 */class sn extends kr{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sn.credential(e.oauthAccessToken)}catch{return null}}}sn.GITHUB_SIGN_IN_METHOD="github.com";sn.PROVIDER_ID="github.com";/**
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
 */class rn extends kr{constructor(){super("twitter.com")}static credential(e,n){return Vn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return rn.credential(n,s)}catch{return null}}}rn.TWITTER_SIGN_IN_METHOD="twitter.com";rn.PROVIDER_ID="twitter.com";/**
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
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Pn._fromIdTokenResponse(e,s,r),o=Il(s);return new ms({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Il(s);return new ms({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Il(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ki extends Gt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,ki.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new ki(e,n,s,r)}}function fd(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ki._fromErrorAndOperation(t,i,e,s):i})}async function DE(t,e,n=!1){const s=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",s)}/**
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
 */async function OE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await cr(t,fd(s,r,e,t),n);q(i.idToken,s,"internal-error");const o=Rc(i.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),ms._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(s,"user-mismatch"),i}}/**
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
 */async function NE(t,e,n=!1){const s="signIn",r=await fd(t,s,e),i=await ms._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function PE(t,e,n,s){return st(t).onIdTokenChanged(e,n,s)}function xE(t,e,n){return st(t).beforeAuthStateChanged(e,n)}const Di="__sak";/**
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
 */class dd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Di,"1"),this.storage.removeItem(Di),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ME(){const t=He();return kc(t)||oo(t)}const LE=1e3,UE=10;class pd extends dd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ME()&&TE(),this.fallbackToPolling=cd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);IE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,UE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},LE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pd.type="LOCAL";const FE=pd;/**
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
 */class gd extends dd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gd.type="SESSION";const md=gd;/**
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
 */function VE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ao(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await VE(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ao.receivers=[];/**
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
 */function Oc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class BE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Oc("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ct(){return window}function $E(t){Ct().location.href=t}/**
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
 */function yd(){return typeof Ct().WorkerGlobalScope<"u"&&typeof Ct().importScripts=="function"}async function jE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HE(){return yd()?self:null}/**
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
 */const vd="firebaseLocalStorageDb",KE=1,Oi="firebaseLocalStorage",wd="fbase_key";class Dr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function co(t,e){return t.transaction([Oi],e?"readwrite":"readonly").objectStore(Oi)}function zE(){const t=indexedDB.deleteDatabase(vd);return new Dr(t).toPromise()}function Ra(){const t=indexedDB.open(vd,KE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Oi,{keyPath:wd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Oi)?e(s):(s.close(),await zE(),e(await Ra()))})})}async function Tl(t,e,n){const s=co(t,!0).put({[wd]:e,value:n});return new Dr(s).toPromise()}async function WE(t,e){const n=co(t,!1).get(e),s=await new Dr(n).toPromise();return s===void 0?null:s.value}function bl(t,e){const n=co(t,!0).delete(e);return new Dr(n).toPromise()}const GE=800,QE=3;class Ed{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ra(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>QE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ao._getInstance(HE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jE(),!this.activeServiceWorker)return;this.sender=new BE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ra();return await Tl(e,Di,"1"),await bl(e,Di),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Tl(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>WE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=co(r,!1).getAll();return new Dr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ed.type="LOCAL";const XE=Ed;/**
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
 */function YE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function JE(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=At("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",YE().appendChild(s)})}function ZE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Cr(3e4,6e4);/**
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
 */function _d(t,e){return e?Ft(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nc extends hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return us(e,this._buildIdpRequest())}_linkToIdToken(e,n){return us(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return us(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e_(t){return NE(t.auth,new Nc(t),t.bypassAuthState)}function t_(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),OE(n,new Nc(t),t.bypassAuthState)}async function n_(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),DE(n,new Nc(t),t.bypassAuthState)}/**
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
 */class Id{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e_;case"linkViaPopup":case"linkViaRedirect":return n_;case"reauthViaPopup":case"reauthViaRedirect":return t_;default:Ot(this.auth,"internal-error")}}resolve(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const s_=new Cr(2e3,1e4);class ts extends Id{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,ts.currentPopupAction&&ts.currentPopupAction.cancel(),ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){jt(this.filter.length===1,"Popup operations only handle one event");const e=Oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(At(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(At(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(At(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,s_.get())};e()}}ts.currentPopupAction=null;/**
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
 */const r_="pendingRedirect",gi=new Map;class i_ extends Id{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=gi.get(this.auth._key());if(!e){try{const s=await o_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}gi.set(this.auth._key(),e)}return this.bypassAuthState||gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o_(t,e){const n=bd(e),s=Td(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function a_(t,e){return Td(t)._set(bd(e),"true")}function c_(t,e){gi.set(t._key(),e)}function Td(t){return Ft(t._redirectPersistence)}function bd(t){return pi(r_,t.config.apiKey,t.name)}/**
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
 */function mA(t,e,n){return u_(t,e,n)}async function u_(t,e,n){const s=Rr(t);eE(t,e,Dc),await s._initializationPromise;const r=_d(s,n);return await a_(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function yA(t,e){return await Rr(t)._initializationPromise,Sd(t,e,!1)}async function Sd(t,e,n=!1){const s=Rr(t),r=_d(s,e),o=await new i_(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const l_=10*60*1e3;class h_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ad(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(At(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sl(e))}saveEventToCache(e){this.cachedEventUids.add(Sl(e)),this.lastProcessedEventTime=Date.now()}}function Sl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ad({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ad(t);default:return!1}}/**
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
 */async function d_(t,e={}){return io(t,"GET","/v1/projects",e)}/**
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
 */const p_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g_=/^https?/;async function m_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d_(t);for(const n of e)try{if(y_(n))return}catch{}Ot(t,"unauthorized-domain")}function y_(t){const e=Ca(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!g_.test(n))return!1;if(p_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const v_=new Cr(3e4,6e4);function Al(){const t=Ct().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function w_(t){return new Promise((e,n)=>{var s,r,i;function o(){Al(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Al(),n(At(t,"network-request-failed"))},timeout:v_.get()})}if(!((r=(s=Ct().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ct().gapi)===null||i===void 0)&&i.load)o();else{const a=ZE("iframefcb");return Ct()[a]=()=>{gapi.load?o():n(At(t,"network-request-failed"))},JE(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw mi=null,e})}let mi=null;function E_(t){return mi=mi||w_(t),mi}/**
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
 */const __=new Cr(5e3,15e3),I_="__/auth/iframe",T_="emulator/auth/iframe",b_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A_(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cc(e,T_):`https://${t.config.authDomain}/${I_}`,s={apiKey:e.apiKey,appName:t.name,v:Ar},r=S_.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Sr(s).slice(1)}`}async function C_(t){const e=await E_(t),n=Ct().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:A_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=At(t,"network-request-failed"),a=Ct().setTimeout(()=>{i(o)},__.get());function c(){Ct().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const R_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k_=500,D_=600,O_="_blank",N_="http://localhost";class Cl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function P_(t,e,n,s=k_,r=D_){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},R_),{width:s.toString(),height:r.toString(),top:i,left:o}),u=He().toLowerCase();n&&(a=sd(u)?O_:n),nd(u)&&(e=e||N_,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(_E(u)&&a!=="_self")return x_(e||"",a),new Cl(null);const h=window.open(e||"",a,l);q(h,t,"popup-blocked");try{h.focus()}catch{}return new Cl(h)}function x_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const M_="__/auth/handler",L_="emulator/auth/handler";function Rl(t,e,n,s,r,i){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ar,eventId:r};if(e instanceof Dc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",$v(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof kr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${U_(t)}?${Sr(a).slice(1)}`}function U_({config:t}){return t.emulator?Cc(t,L_):`https://${t.authDomain}/${M_}`}/**
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
 */const Xo="webStorageSupport";class F_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=md,this._completeRedirectFn=Sd,this._overrideRedirectResult=c_}async _openPopup(e,n,s,r){var i;jt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Rl(e,n,s,Ca(),r);return P_(e,o,Oc())}async _openRedirect(e,n,s,r){return await this._originValidation(e),$E(Rl(e,n,s,Ca(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(jt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await C_(e),s=new h_(e);return n.register("authEvent",r=>(q(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xo,{type:Xo},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Xo];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cd()||kc()||oo()}}const V_=F_;var kl="@firebase/auth",Dl="0.21.1";/**
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
 */class B_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function j_(t){gs(new Un("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{q(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ud(t)},l=new SE(a,c,u);return nE(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),gs(new Un("auth-internal",e=>{const n=Rr(e.getProvider("auth").getImmediate());return(s=>new B_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(kl,Dl,$_(t)),ln(kl,Dl,"esm2017")}/**
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
 */const q_=5*60,H_=jf("authIdTokenMaxAge")||q_;let Ol=null;const K_=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>H_)return;const r=n==null?void 0:n.token;Ol!==r&&(Ol=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function vA(t=Kf()){const e=bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=tE(t,{popupRedirectResolver:V_,persistence:[XE,FE,md]}),s=jf("authTokenSyncURL");if(s){const i=K_(s);xE(n,i,()=>i(n.currentUser)),PE(n,o=>i(o))}const r=$f("auth");return r&&AE(n,`http://${r}`),n}j_("Browser");var z_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,Pc=Pc||{},H=z_||self;function Ni(){}function uo(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Or(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function W_(t){return Object.prototype.hasOwnProperty.call(t,Yo)&&t[Yo]||(t[Yo]=++G_)}var Yo="closure_uid_"+(1e9*Math.random()>>>0),G_=0;function Q_(t,e,n){return t.call.apply(t.bind,arguments)}function X_(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=Q_:je=X_,je.apply(null,arguments)}function ei(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function mn(){this.s=this.s,this.o=this.o}var Y_=0;mn.prototype.s=!1;mn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Y_!=0)&&W_(this)};mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Cd=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xc(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Nl(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(uo(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var J_=function(){if(!H.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{H.addEventListener("test",Ni,e),H.removeEventListener("test",Ni,e)}catch{}return t}();function Pi(t){return/^[\s\xa0]*$/.test(t)}var Pl=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Jo(t,e){return t<e?-1:t>e?1:0}function lo(){var t=H.navigator;return t&&(t=t.userAgent)?t:""}function St(t){return lo().indexOf(t)!=-1}function Mc(t){return Mc[" "](t),t}Mc[" "]=Ni;function Z_(t){var e=n0;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var e0=St("Opera"),ys=St("Trident")||St("MSIE"),Rd=St("Edge"),ka=Rd||ys,kd=St("Gecko")&&!(lo().toLowerCase().indexOf("webkit")!=-1&&!St("Edge"))&&!(St("Trident")||St("MSIE"))&&!St("Edge"),t0=lo().toLowerCase().indexOf("webkit")!=-1&&!St("Edge");function Dd(){var t=H.document;return t?t.documentMode:void 0}var xi;e:{var Zo="",ea=function(){var t=lo();if(kd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Rd)return/Edge\/([\d\.]+)/.exec(t);if(ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(t0)return/WebKit\/(\S+)/.exec(t);if(e0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ea&&(Zo=ea?ea[1]:""),ys){var ta=Dd();if(ta!=null&&ta>parseFloat(Zo)){xi=String(ta);break e}}xi=Zo}var n0={};function s0(){return Z_(function(){let t=0;const e=Pl(String(xi)).split("."),n=Pl("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Jo(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Jo(r[2].length==0,i[2].length==0)||Jo(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Da;if(H.document&&ys){var xl=Dd();Da=xl||parseInt(xi,10)||void 0}else Da=void 0;var r0=Da;function lr(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kd){e:{try{Mc(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:i0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&lr.X.h.call(this)}}Me(lr,qe);var i0={2:"touch",3:"pen",4:"mouse"};lr.prototype.h=function(){lr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Nr="closure_listenable_"+(1e6*Math.random()|0),o0=0;function a0(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++o0,this.ba=this.ea=!1}function ho(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Lc(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Od(t){const e={};for(const n in t)e[n]=t[n];return e}const Ml="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nd(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Ml.length;i++)n=Ml[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function fo(t){this.src=t,this.g={},this.h=0}fo.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Na(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new a0(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Oa(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Cd(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ho(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Na(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Uc="closure_lm_"+(1e6*Math.random()|0),na={};function Pd(t,e,n,s,r){if(s&&s.once)return Md(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pd(t,e[i],n,s,r);return null}return n=Bc(n),t&&t[Nr]?t.N(e,n,Or(s)?!!s.capture:!!s,r):xd(t,e,n,!1,s,r)}function xd(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=Or(r)?!!r.capture:!!r,a=Vc(t);if(a||(t[Uc]=a=new fo(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=c0(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)J_||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ud(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function c0(){function t(n){return e.call(t.src,t.listener,n)}const e=u0;return t}function Md(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Md(t,e[i],n,s,r);return null}return n=Bc(n),t&&t[Nr]?t.O(e,n,Or(s)?!!s.capture:!!s,r):xd(t,e,n,!0,s,r)}function Ld(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ld(t,e[i],n,s,r);else s=Or(s)?!!s.capture:!!s,n=Bc(n),t&&t[Nr]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Na(i,n,s,r),-1<n&&(ho(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vc(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Na(e,n,s,r)),(n=-1<t?e[t]:null)&&Fc(n))}function Fc(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Nr])Oa(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ud(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Vc(e))?(Oa(n,t),n.h==0&&(n.src=null,e[Uc]=null)):ho(t)}}}function Ud(t){return t in na?na[t]:na[t]="on"+t}function u0(t,e){if(t.ba)t=!0;else{e=new lr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Fc(t),t=n.call(s,e)}return t}function Vc(t){return t=t[Uc],t instanceof fo?t:null}var sa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bc(t){return typeof t=="function"?t:(t[sa]||(t[sa]=function(e){return t.handleEvent(e)}),t[sa])}function Oe(){mn.call(this),this.i=new fo(this),this.P=this,this.I=null}Me(Oe,mn);Oe.prototype[Nr]=!0;Oe.prototype.removeEventListener=function(t,e,n,s){Ld(this,t,e,n,s)};function xe(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var r=e;e=new qe(s,t),Nd(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ti(o,s,!0,e)&&r}if(o=e.g=t,r=ti(o,s,!0,e)&&r,r=ti(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ti(o,s,!1,e)&&r}Oe.prototype.M=function(){if(Oe.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ho(n[s]);delete t.g[e],t.h--}}this.I=null};Oe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Oe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ti(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Oa(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var $c=H.JSON.stringify;function l0(){var t=Bd;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class h0{constructor(){this.h=this.g=null}add(e,n){const s=Fd.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Fd=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new f0,t=>t.reset());class f0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function d0(t){H.setTimeout(()=>{throw t},0)}function Vd(t,e){Pa||p0(),xa||(Pa(),xa=!0),Bd.add(t,e)}var Pa;function p0(){var t=H.Promise.resolve(void 0);Pa=function(){t.then(g0)}}var xa=!1,Bd=new h0;function g0(){for(var t;t=l0();){try{t.h.call(t.g)}catch(n){d0(n)}var e=Fd;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xa=!1}function po(t,e){Oe.call(this),this.h=t||1,this.g=e||H,this.j=je(this.lb,this),this.l=Date.now()}Me(po,Oe);M=po.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),xe(this,"tick"),this.ca&&(jc(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jc(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){po.X.M.call(this),jc(this),delete this.g};function qc(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:H.setTimeout(t,e||0)}function $d(t){t.g=qc(()=>{t.g=null,t.i&&(t.i=!1,$d(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class m0 extends mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:$d(this)}M(){super.M(),this.g&&(H.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hr(t){mn.call(this),this.h=t,this.g={}}Me(hr,mn);var Ll=[];function jd(t,e,n,s){Array.isArray(n)||(n&&(Ll[0]=n.toString()),n=Ll);for(var r=0;r<n.length;r++){var i=Pd(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function qd(t){Lc(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fc(e)},t),t.g={}}hr.prototype.M=function(){hr.X.M.call(this),qd(this)};hr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function go(){this.g=!0}go.prototype.Aa=function(){this.g=!1};function y0(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function v0(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function ns(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+E0(t,n)+(s?" "+s:"")})}function w0(t,e){t.info(function(){return"TIMEOUT: "+e})}go.prototype.info=function(){};function E0(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return $c(n)}catch{return e}}var qn={},Ul=null;function mo(){return Ul=Ul||new Oe}qn.Pa="serverreachability";function Hd(t){qe.call(this,qn.Pa,t)}Me(Hd,qe);function fr(t){const e=mo();xe(e,new Hd(e))}qn.STAT_EVENT="statevent";function Kd(t,e){qe.call(this,qn.STAT_EVENT,t),this.stat=e}Me(Kd,qe);function We(t){const e=mo();xe(e,new Kd(e,t))}qn.Qa="timingevent";function zd(t,e){qe.call(this,qn.Qa,t),this.size=e}Me(zd,qe);function Pr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return H.setTimeout(function(){t()},e)}var yo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wd={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Hc(){}Hc.prototype.h=null;function Fl(t){return t.h||(t.h=t.i())}function Gd(){}var xr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Kc(){qe.call(this,"d")}Me(Kc,qe);function zc(){qe.call(this,"c")}Me(zc,qe);var Ma;function vo(){}Me(vo,Hc);vo.prototype.g=function(){return new XMLHttpRequest};vo.prototype.i=function(){return{}};Ma=new vo;function Mr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new hr(this),this.O=_0,t=ka?125:void 0,this.T=new po(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Qd}function Qd(){this.i=null,this.g="",this.h=!1}var _0=45e3,La={},Mi={};M=Mr.prototype;M.setTimeout=function(t){this.O=t};function Ua(t,e,n){t.K=1,t.v=Eo(qt(e)),t.s=n,t.P=!0,Xd(t,null)}function Xd(t,e){t.F=Date.now(),Lr(t),t.A=qt(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),rp(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Qd,t.g=Sp(t.l,n?e:null,!t.s),0<t.N&&(t.L=new m0(je(t.La,t,t.g),t.N)),jd(t.S,t.g,"readystatechange",t.ib),e=t.H?Od(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),fr(),y0(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&Vt(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const l=Vt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ka||this.g&&(this.h.h||this.g.fa()||jl(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?fr(3):fr(2)),wo(this);var n=this.g.aa();this.Y=n;t:if(Yd(this)){var s=jl(this.g);t="";var r=s.length,i=Vt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rn(this),Ws(this);var o="";break t}this.h.i=new H.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,v0(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pi(a)){var u=a;break t}}u=null}if(n=u)ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Fa(this,n);else{this.i=!1,this.o=3,We(12),Rn(this),Ws(this);break e}}this.P?(Jd(this,l,o),ka&&this.i&&l==3&&(jd(this.S,this.T,"tick",this.hb),this.T.start())):(ns(this.j,this.m,o,null),Fa(this,o)),l==4&&Rn(this),this.i&&!this.I&&(l==4?_p(this.l,this):(this.i=!1,Lr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,We(12)):(this.o=0,We(13)),Rn(this),Ws(this)}}}catch{}finally{}};function Yd(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Jd(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=I0(t,n),r==Mi){e==4&&(t.o=4,We(14),s=!1),ns(t.j,t.m,null,"[Incomplete Response]");break}else if(r==La){t.o=4,We(15),ns(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else ns(t.j,t.m,r,null),Fa(t,r);Yd(t)&&r!=Mi&&r!=La&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,We(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zc(e),e.K=!0,We(11))):(ns(t.j,t.m,n,"[Invalid Chunked Response]"),Rn(t),Ws(t))}M.hb=function(){if(this.g){var t=Vt(this.g),e=this.g.fa();this.C<e.length&&(wo(this),Jd(this,t,e),this.i&&t!=4&&Lr(this))}};function I0(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Mi:(n=Number(e.substring(n,s)),isNaN(n)?La:(s+=1,s+n>e.length?Mi:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.I=!0,Rn(this)};function Lr(t){t.V=Date.now()+t.O,Zd(t,t.O)}function Zd(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Pr(je(t.gb,t),e)}function wo(t){t.B&&(H.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(w0(this.j,this.A),this.K!=2&&(fr(),We(17)),Rn(this),this.o=2,Ws(this)):Zd(this,this.V-t)};function Ws(t){t.l.G==0||t.I||_p(t.l,t)}function Rn(t){wo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,jc(t.T),qd(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Fa(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Va(n.h,t))){if(!t.J&&Va(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fi(n),To(n);else break e;Jc(n),We(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Pr(je(n.cb,n),6e3));if(1>=ap(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else kn(n,11)}else if((t.J||n.g==t)&&Fi(n),!Pi(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Wc(i,i.h),i.h=null))}if(s.D){const _=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,ge(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=bp(s,s.H?s.ka:null,s.V),o.J){cp(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(wo(a),Lr(a)),s.g=o}else wp(s);0<n.i.length&&bo(n)}else u[0]!="stop"&&u[0]!="close"||kn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?kn(n,7):Yc(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}fr(4)}catch{}}function T0(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(uo(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function b0(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(uo(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function ep(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(uo(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=b0(t),s=T0(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function S0(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function xn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof xn){this.h=e!==void 0?e:t.h,Li(this,t.j),this.s=t.s,this.g=t.g,Ui(this,t.m),this.l=t.l,e=t.i;var n=new dr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vl(this,n),this.o=t.o}else t&&(n=String(t).match(tp))?(this.h=!!e,Li(this,n[1]||"",!0),this.s=$s(n[2]||""),this.g=$s(n[3]||"",!0),Ui(this,n[4]),this.l=$s(n[5]||"",!0),Vl(this,n[6]||"",!0),this.o=$s(n[7]||"")):(this.h=!!e,this.i=new dr(null,this.h))}xn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,Bl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,Bl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?R0:C0,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,D0)),t.join("")};function qt(t){return new xn(t)}function Li(t,e,n){t.j=n?$s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ui(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vl(t,e,n){e instanceof dr?(t.i=e,O0(t.i,t.h)):(n||(e=js(e,k0)),t.i=new dr(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function Eo(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,A0),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function A0(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bl=/[#\/\?@]/g,C0=/[#\?:]/g,R0=/[#\?]/g,k0=/[#\?@]/g,D0=/#/g;function dr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function yn(t){t.g||(t.g=new Map,t.h=0,t.i&&S0(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=dr.prototype;M.add=function(t,e){yn(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function np(t,e){yn(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sp(t,e){return yn(t),e=Ds(t,e),t.g.has(e)}M.forEach=function(t,e){yn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};M.oa=function(){yn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};M.W=function(t){yn(this);let e=[];if(typeof t=="string")sp(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return yn(this),this.i=null,t=Ds(this,t),sp(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function rp(t,e,n){np(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),xc(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function O0(t,e){e&&!t.j&&(yn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(np(this,s),rp(this,r,n))},t)),t.j=e}var N0=class{constructor(e,n){this.h=e,this.g=n}};function ip(t){this.l=t||P0,H.PerformanceNavigationTiming?(t=H.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(H.g&&H.g.Ga&&H.g.Ga()&&H.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var P0=10;function op(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ap(t){return t.h?1:t.g?t.g.size:0}function Va(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wc(t,e){t.g?t.g.add(e):t.h=e}function cp(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ip.prototype.cancel=function(){if(this.i=up(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function up(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xc(t.i)}function Gc(){}Gc.prototype.stringify=function(t){return H.JSON.stringify(t,void 0)};Gc.prototype.parse=function(t){return H.JSON.parse(t,void 0)};function x0(){this.g=new Gc}function M0(t,e,n){const s=n||"";try{ep(t,function(r,i){let o=r;Or(r)&&(o=$c(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function L0(t,e){const n=new go;if(H.Image){const s=new Image;s.onload=ei(ni,n,s,"TestLoadImage: loaded",!0,e),s.onerror=ei(ni,n,s,"TestLoadImage: error",!1,e),s.onabort=ei(ni,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=ei(ni,n,s,"TestLoadImage: timeout",!1,e),H.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function ni(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function Ur(t){this.l=t.ac||null,this.j=t.jb||!1}Me(Ur,Hc);Ur.prototype.g=function(){return new _o(this.l,this.j)};Ur.prototype.i=function(t){return function(){return t}}({});function _o(t,e){Oe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Qc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(_o,Oe);var Qc=0;M=_o.prototype;M.open=function(t,e){if(this.readyState!=Qc)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,pr(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||H).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fr(this)),this.readyState=Qc};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,pr(this)),this.g&&(this.readyState=3,pr(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof H.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lp(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function lp(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Fr(this):pr(this),this.readyState==3&&lp(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,Fr(this))};M.Ua=function(t){this.g&&(this.response=t,Fr(this))};M.ga=function(){this.g&&Fr(this)};function Fr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,pr(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function pr(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var U0=H.JSON.parse;function we(t){Oe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hp,this.K=this.L=!1}Me(we,Oe);var hp="",F0=/^https?$/i,V0=["POST","PUT"];M=we.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ma.g(),this.C=this.u?Fl(this.u):Fl(Ma),this.g.onreadystatechange=je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){$l(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=H.FormData&&t instanceof H.FormData,!(0<=Cd(V0,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pp(this),0<this.B&&((this.K=B0(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.qa,this)):this.A=qc(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){$l(this,i)}};function B0(t){return ys&&s0()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof Pc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,xe(this,"timeout"),this.abort(8))};function $l(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,fp(t),Io(t)}function fp(t){t.D||(t.D=!0,xe(t,"complete"),xe(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,xe(this,"complete"),xe(this,"abort"),Io(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Io(this,!0)),we.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?dp(this):this.fb())};M.fb=function(){dp(this)};function dp(t){if(t.h&&typeof Pc<"u"&&(!t.C[1]||Vt(t)!=4||t.aa()!=2)){if(t.v&&Vt(t)==4)qc(t.Ha,0,t);else if(xe(t,"readystatechange"),Vt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(tp)[1]||null;if(!r&&H.self&&H.self.location){var i=H.self.location.protocol;r=i.substr(0,i.length-1)}s=!F0.test(r?r.toLowerCase():"")}n=s}if(n)xe(t,"complete"),xe(t,"success");else{t.m=6;try{var o=2<Vt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",fp(t)}}finally{Io(t)}}}}function Io(t,e){if(t.g){pp(t);const n=t.g,s=t.C[0]?Ni:null;t.g=null,t.C=null,e||xe(t,"ready");try{n.onreadystatechange=s}catch{}}}function pp(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(H.clearTimeout(t.A),t.A=null)}function Vt(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<Vt(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),U0(e)}};function jl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case hp:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function gp(t){let e="";return Lc(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Xc(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=gp(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function Fs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mp(t){this.Ca=0,this.i=[],this.j=new go,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Fs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Fs("baseRetryDelayMs",5e3,t),this.bb=Fs("retryDelaySeedMs",1e4,t),this.$a=Fs("forwardChannelMaxRetries",2,t),this.ta=Fs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ip(t&&t.concurrentRequestLimit),this.Fa=new x0,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=mp.prototype;M.ma=8;M.G=1;function Yc(t){if(yp(t),t.G==3){var e=t.U++,n=qt(t.F);ge(n,"SID",t.I),ge(n,"RID",e),ge(n,"TYPE","terminate"),Vr(t,n),e=new Mr(t,t.j,e,void 0),e.K=2,e.v=Eo(qt(n)),n=!1,H.navigator&&H.navigator.sendBeacon&&(n=H.navigator.sendBeacon(e.v.toString(),"")),!n&&H.Image&&(new Image().src=e.v,n=!0),n||(e.g=Sp(e.l,null),e.g.da(e.v)),e.F=Date.now(),Lr(e)}Tp(t)}function To(t){t.g&&(Zc(t),t.g.cancel(),t.g=null)}function yp(t){To(t),t.u&&(H.clearTimeout(t.u),t.u=null),Fi(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&H.clearTimeout(t.m),t.m=null)}function bo(t){op(t.h)||t.m||(t.m=!0,Vd(t.Ja,t),t.C=0)}function $0(t,e){return ap(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Pr(je(t.Ja,t,e),Ip(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Mr(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Od(i),Nd(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vp(this,r,e),n=qt(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),Vr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(gp(i)))+"&"+e:this.o&&Xc(n,this.o,i)),Wc(this.h,r),this.Ya&&ge(n,"TYPE","init"),this.O?(ge(n,"$req",e),ge(n,"SID","null"),r.Z=!0,Ua(r,n,null)):Ua(r,n,e),this.G=2}}else this.G==3&&(t?ql(this,t):this.i.length==0||op(this.h)||ql(this))};function ql(t,e){var n;e?n=e.m:n=t.U++;const s=qt(t.F);ge(s,"SID",t.I),ge(s,"RID",n),ge(s,"AID",t.T),Vr(t,s),t.o&&t.s&&Xc(s,t.o,t.s),n=new Mr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=vp(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Wc(t.h,n),Ua(n,s,e)}function Vr(t,e){t.ia&&Lc(t.ia,function(n,s){ge(e,s,n)}),t.l&&ep({},function(n,s){ge(e,s,n)})}function vp(t,e,n){n=Math.min(t.i.length,n);var s=t.l?je(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{M0(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function wp(t){t.g||t.u||(t.Z=1,Vd(t.Ia,t),t.A=0)}function Jc(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Pr(je(t.Ia,t),Ip(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,Ep(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Pr(je(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,We(10),To(this),Ep(this))};function Zc(t){t.B!=null&&(H.clearTimeout(t.B),t.B=null)}function Ep(t){t.g=new Mr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=qt(t.sa);ge(e,"RID","rpc"),ge(e,"SID",t.I),ge(e,"CI",t.L?"0":"1"),ge(e,"AID",t.T),ge(e,"TYPE","xmlhttp"),Vr(t,e),t.o&&t.s&&Xc(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Eo(qt(e)),n.s=null,n.P=!0,Xd(n,t)}M.cb=function(){this.v!=null&&(this.v=null,To(this),Jc(this),We(19))};function Fi(t){t.v!=null&&(H.clearTimeout(t.v),t.v=null)}function _p(t,e){var n=null;if(t.g==e){Fi(t),Zc(t),t.g=null;var s=2}else if(Va(t.h,e))n=e.D,cp(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=mo(),xe(s,new zd(s,n)),bo(t)}else wp(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&$0(t,e)||s==2&&Jc(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:kn(t,5);break;case 4:kn(t,10);break;case 3:kn(t,6);break;default:kn(t,2)}}}function Ip(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function kn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=je(t.kb,t);n||(n=new xn("//www.google.com/images/cleardot.gif"),H.location&&H.location.protocol=="http"||Li(n,"https"),Eo(n)),L0(n.toString(),s)}else We(2);t.G=0,t.l&&t.l.va(e),Tp(t),yp(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function Tp(t){if(t.G=0,t.la=[],t.l){const e=up(t.h);(e.length!=0||t.i.length!=0)&&(Nl(t.la,e),Nl(t.la,t.i),t.h.i.length=0,xc(t.i),t.i.length=0),t.l.ua()}}function bp(t,e,n){var s=n instanceof xn?qt(n):new xn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ui(s,s.m);else{var r=H.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new xn(null,void 0);s&&Li(i,s),e&&(i.g=e),r&&Ui(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&ge(s,n,e),ge(s,"VER",t.ma),Vr(t,s),s}function Sp(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new we(new Ur({jb:!0})):new we(t.ra),e.Ka(t.H),e}function Ap(){}M=Ap.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function Vi(){if(ys&&!(10<=Number(r0)))throw Error("Environmental error: no available transport.")}Vi.prototype.g=function(t,e){return new rt(t,e)};function rt(t,e){Oe.call(this),this.g=new mp(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Pi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pi(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Os(this)}Me(rt,Oe);rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;We(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=bp(t,null,t.V),bo(t)};rt.prototype.close=function(){Yc(this.g)};rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$c(t),t=n);e.i.push(new N0(e.ab++,t)),e.G==3&&bo(e)};rt.prototype.M=function(){this.g.l=null,delete this.j,Yc(this.g),delete this.g,rt.X.M.call(this)};function Cp(t){Kc.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(Cp,Kc);function Rp(){zc.call(this),this.status=1}Me(Rp,zc);function Os(t){this.g=t}Me(Os,Ap);Os.prototype.xa=function(){xe(this.g,"a")};Os.prototype.wa=function(t){xe(this.g,new Cp(t))};Os.prototype.va=function(t){xe(this.g,new Rp)};Os.prototype.ua=function(){xe(this.g,"b")};Vi.prototype.createWebChannel=Vi.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;yo.NO_ERROR=0;yo.TIMEOUT=8;yo.HTTP_ERROR=6;Wd.COMPLETE="complete";Gd.EventType=xr;xr.OPEN="a";xr.CLOSE="b";xr.ERROR="c";xr.MESSAGE="d";Oe.prototype.listen=Oe.prototype.N;we.prototype.listenOnce=we.prototype.O;we.prototype.getLastError=we.prototype.Oa;we.prototype.getLastErrorCode=we.prototype.Ea;we.prototype.getStatus=we.prototype.aa;we.prototype.getResponseJson=we.prototype.Sa;we.prototype.getResponseText=we.prototype.fa;we.prototype.send=we.prototype.da;we.prototype.setWithCredentials=we.prototype.Ka;var j0=function(){return new Vi},q0=function(){return mo()},ra=yo,H0=Wd,K0=qn,Hl={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},z0=Ur,si=Gd,W0=we;const Kl="@firebase/firestore";/**
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
 */class Ue{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ue.UNAUTHENTICATED=new Ue(null),Ue.GOOGLE_CREDENTIALS=new Ue("google-credentials-uid"),Ue.FIRST_PARTY=new Ue("first-party-uid"),Ue.MOCK_USER=new Ue("mock-user");/**
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
 */let Ns="9.16.0";/**
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
 */const Bn=new Ic("@firebase/firestore");function zl(){return Bn.logLevel}function U(t,...e){if(Bn.logLevel<=re.DEBUG){const n=e.map(eu);Bn.debug(`Firestore (${Ns}): ${t}`,...n)}}function Ht(t,...e){if(Bn.logLevel<=re.ERROR){const n=e.map(eu);Bn.error(`Firestore (${Ns}): ${t}`,...n)}}function Ba(t,...e){if(Bn.logLevel<=re.WARN){const n=e.map(eu);Bn.warn(`Firestore (${Ns}): ${t}`,...n)}}function eu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw Ht(e),new Error(e)}function fe(t,e){t||K()}function Q(t,e){return t}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Gt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class hn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class kp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class G0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ue.UNAUTHENTICATED))}shutdown(){}}class Q0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class X0{constructor(e){this.t=e,this.currentUser=Ue.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new hn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new hn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new hn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(fe(typeof s.accessToken=="string"),new kp(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string"),new Ue(e)}}class Y0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ue.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(fe(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class J0{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Y0(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ue.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eI{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(fe(typeof n.token=="string"),this.A=n.token,new Z0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function tI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Dp{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=tI(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function ie(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ae(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ae(0,0))}static max(){return new W(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class gr{constructor(e,n,s){n===void 0?n=0:n>e.length&&K(),s===void 0?s=e.length-n:s>e.length-n&&K(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return gr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof gr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends gr{construct(e,n,s){return new ve(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new j(b.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const nI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends gr{construct(e,n,s){return new Be(e,n,s)}static isValidIdentifier(e){return nI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new j(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new j(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new j(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new j(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ve.fromString(e))}static fromName(e){return new $(ve.fromString(e).popFirst(5))}static empty(){return new $(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ve(e.slice()))}}function sI(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=W.fromTimestamp(s===1e9?new Ae(n+1,0):new Ae(n,s));return new dn(r,$.empty(),e)}function rI(t){return new dn(t.readTime,t.key,-1)}class dn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new dn(W.min(),$.empty(),-1)}static max(){return new dn(W.max(),$.empty(),-1)}}function iI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=$.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const oI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Br(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==oI)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,s)=>{n(e)})}static reject(e){return new T((n,s)=>{s(e)})}static waitFor(e){return new T((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=T.resolve(!1);for(const s of e)n=n.next(r=>r?T.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new T((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new T((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function $r(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class tu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}tu.at=-1;/**
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
 */class cI{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class mr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new mr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof mr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Wl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Op(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function So(t){return t==null}function Bi(t){return t===0&&1/t==-1/0}function uI(t){return typeof t=="number"&&Number.isInteger(t)&&!Bi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ke(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const lI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pn(t){if(fe(!!t),typeof t=="string"){let e=0;const n=lI.exec(t);if(fe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Te(t.seconds),nanos:Te(t.nanos)}}function Te(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function Np(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Pp(t){const e=t.mapValue.fields.__previous_value__;return Np(e)?Pp(e):e}function yr(t){const e=pn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */const ri={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $n(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Np(t)?4:hI(t)?9007199254740991:10:K()}function Nt(t,e){if(t===e)return!0;const n=$n(t);if(n!==$n(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yr(t).isEqual(yr(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=pn(s.timestampValue),o=pn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return ws(s.bytesValue).isEqual(ws(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Te(s.geoPointValue.latitude)===Te(r.geoPointValue.latitude)&&Te(s.geoPointValue.longitude)===Te(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Te(s.integerValue)===Te(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Te(s.doubleValue),o=Te(r.doubleValue);return i===o?Bi(i)===Bi(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],Nt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Wl(i)!==Wl(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Nt(i[a],o[a])))return!1;return!0}(t,e);default:return K()}}function vr(t,e){return(t.values||[]).find(n=>Nt(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=$n(t),s=$n(e);if(n!==s)return ie(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Te(r.integerValue||r.doubleValue),a=Te(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Gl(t.timestampValue,e.timestampValue);case 4:return Gl(yr(t),yr(e));case 5:return ie(t.stringValue,e.stringValue);case 6:return function(r,i){const o=ws(r),a=ws(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=ie(o[c],a[c]);if(u!==0)return u}return ie(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=ie(Te(r.latitude),Te(i.latitude));return o!==0?o:ie(Te(r.longitude),Te(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Es(o[c],a[c]);if(u)return u}return ie(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===ri.mapValue&&i===ri.mapValue)return 0;if(r===ri.mapValue)return 1;if(i===ri.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=ie(a[l],u[l]);if(h!==0)return h;const d=Es(o[a[l]],c[u[l]]);if(d!==0)return d}return ie(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Gl(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=pn(t),s=pn(e),r=ie(n.seconds,s.seconds);return r!==0?r:ie(n.nanos,s.nanos)}function _s(t){return $a(t)}function $a(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=pn(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ws(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,$.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=$a(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${$a(s.fields[a])}`;return i+"}"}(t.mapValue):K();var e,n}function ja(t){return!!t&&"integerValue"in t}function nu(t){return!!t&&"arrayValue"in t}function Ql(t){return!!t&&"nullValue"in t}function Xl(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yi(t){return!!t&&"mapValue"in t}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hn(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Gs(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $i{constructor(e,n){this.position=e,this.inclusive=n}}function Yl(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=$.comparator($.fromName(o.referenceValue),n.key):s=Es(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Jl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xp{}class Se extends xp{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new dI(e,n,s):n==="array-contains"?new mI(e,s):n==="in"?new yI(e,s):n==="not-in"?new vI(e,s):n==="array-contains-any"?new wI(e,s):new Se(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new pI(e,s):new gI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&$n(this.value)===$n(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pt extends xp{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Pt(e,n)}matches(e){return Mp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Mp(t){return t.op==="and"}function Lp(t){return fI(t)&&Mp(t)}function fI(t){for(const e of t.filters)if(e instanceof Pt)return!1;return!0}function qa(t){if(t instanceof Se)return t.field.canonicalString()+t.op.toString()+_s(t.value);if(Lp(t))return t.filters.map(e=>qa(e)).join(",");{const e=t.filters.map(n=>qa(n)).join(",");return`${t.op}(${e})`}}function Up(t,e){return t instanceof Se?function(n,s){return s instanceof Se&&n.op===s.op&&n.field.isEqual(s.field)&&Nt(n.value,s.value)}(t,e):t instanceof Pt?function(n,s){return s instanceof Pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Up(i,s.filters[o]),!0):!1}(t,e):void K()}function Fp(t){return t instanceof Se?function(e){return`${e.field.canonicalString()} ${e.op} ${_s(e.value)}`}(t):t instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(Fp).join(" ,")+"}"}(t):"Filter"}class dI extends Se{constructor(e,n,s){super(e,n,s),this.key=$.fromName(s.referenceValue)}matches(e){const n=$.comparator(e.key,this.key);return this.matchesComparison(n)}}class pI extends Se{constructor(e,n){super(e,"in",n),this.keys=Vp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gI extends Se{constructor(e,n){super(e,"not-in",n),this.keys=Vp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Vp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>$.fromName(s.referenceValue))}class mI extends Se{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nu(n)&&vr(n.arrayValue,this.value)}}class yI extends Se{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vr(this.value.arrayValue,n)}}class vI extends Se{constructor(e,n){super(e,"not-in",n)}matches(e){if(vr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!vr(this.value.arrayValue,n)}}class wI extends Se{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>vr(this.value.arrayValue,s))}}/**
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
 */class Qs{constructor(e,n="asc"){this.field=e,this.dir=n}}function EI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ii(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ii(this.root,e,this.comparator,!1)}getReverseIterator(){return new ii(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ii(this.root,e,this.comparator,!0)}}class ii{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Ne.RED,this.left=r??Ne.EMPTY,this.right=i??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Ne(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Ne.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ne(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ce{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zl(this.data.getIterator())}getIteratorFrom(e){return new Zl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Ce)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ce(this.comparator);return n.data=e,n}}class Zl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class et{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new et([])}unionWith(e){let n=new Ce(Be.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new et(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class Ye{constructor(e){this.value=e}static empty(){return new Ye({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!yi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=Be.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Gs(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());yi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Nt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];yi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){Hn(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Ye(Gs(this.value))}}function Bp(t){const e=[];return Hn(t.fields,(n,s)=>{const r=new Be([n]);if(yi(s)){const i=Bp(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new et(e)}/**
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
 */class Fe{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Fe(e,0,W.min(),W.min(),W.min(),Ye.empty(),0)}static newFoundDocument(e,n,s,r){return new Fe(e,1,n,W.min(),s,r,0)}static newNoDocument(e,n){return new Fe(e,2,n,W.min(),W.min(),Ye.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,W.min(),W.min(),Ye.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ye.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ye.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _I{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function eh(t,e=null,n=[],s=[],r=null,i=null,o=null){return new _I(t,e,n,s,r,i,o)}function su(t){const e=Q(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>qa(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),So(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_s(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_s(s)).join(",")),e.ft=n}return e.ft}function ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!EI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Up(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jl(t.startAt,e.startAt)&&Jl(t.endAt,e.endAt)}function Ha(t){return $.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ao{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function II(t,e,n,s,r,i,o,a){return new Ao(t,e,n,s,r,i,o,a)}function iu(t){return new Ao(t)}function th(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TI(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function bI(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function SI(t){return t.collectionGroup!==null}function ls(t){const e=Q(t);if(e.dt===null){e.dt=[];const n=bI(e),s=TI(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Qs(n)),e.dt.push(new Qs(Be.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Qs(Be.keyField(),i))}}}return e.dt}function Kt(t){const e=Q(t);if(!e._t)if(e.limitType==="F")e._t=eh(e.path,e.collectionGroup,ls(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of ls(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Qs(i.field,o))}const s=e.endAt?new $i(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new $i(e.startAt.position,e.startAt.inclusive):null;e._t=eh(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Ka(t,e,n){return new Ao(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Co(t,e){return ru(Kt(t),Kt(e))&&t.limitType===e.limitType}function $p(t){return`${su(Kt(t))}|lt:${t.limitType}`}function za(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Fp(s)).join(", ")}]`),So(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_s(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_s(s)).join(",")),`Target(${n})`}(Kt(t))}; limitType=${t.limitType})`}function ou(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):$.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of ls(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=Yl(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,ls(n),s)||n.endAt&&!function(r,i,o){const a=Yl(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,ls(n),s))}(t,e)}function AI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function jp(t){return(e,n)=>{let s=!1;for(const r of ls(t)){const i=CI(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function CI(t,e,n){const s=t.field.isKeyField()?$.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?Es(a,c):K()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return K()}}/**
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
 */function qp(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(e)?"-0":e}}function Hp(t){return{integerValue:""+t}}function RI(t,e){return uI(e)?Hp(e):qp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ro{constructor(){this._=void 0}}function kI(t,e,n){return t instanceof ji?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof wr?zp(t,e):t instanceof Er?Wp(t,e):function(s,r){const i=Kp(s,r),o=nh(i)+nh(s.gt);return ja(i)&&ja(s.gt)?Hp(o):qp(s.yt,o)}(t,e)}function DI(t,e,n){return t instanceof wr?zp(t,e):t instanceof Er?Wp(t,e):n}function Kp(t,e){return t instanceof qi?ja(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class ji extends Ro{}class wr extends Ro{constructor(e){super(),this.elements=e}}function zp(t,e){const n=Gp(e);for(const s of t.elements)n.some(r=>Nt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Er extends Ro{constructor(e){super(),this.elements=e}}function Wp(t,e){let n=Gp(e);for(const s of t.elements)n=n.filter(r=>!Nt(r,s));return{arrayValue:{values:n}}}class qi extends Ro{constructor(e,n){super(),this.yt=e,this.gt=n}}function nh(t){return Te(t.integerValue||t.doubleValue)}function Gp(t){return nu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function OI(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof wr&&s instanceof wr||n instanceof Er&&s instanceof Er?vs(n.elements,s.elements,Nt):n instanceof qi&&s instanceof qi?Nt(n.gt,s.gt):n instanceof ji&&s instanceof ji}(t.transform,e.transform)}class NI{constructor(e,n){this.version=e,this.transformResults=n}}class Rt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rt}static exists(e){return new Rt(void 0,e)}static updateTime(e){return new Rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ko{}function Qp(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Yp(t.key,Rt.none()):new jr(t.key,t.data,Rt.none());{const n=t.data,s=Ye.empty();let r=new Ce(Be.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new vn(t.key,s,new et(r.toArray()),Rt.none())}}function PI(t,e,n){t instanceof jr?function(s,r,i){const o=s.value.clone(),a=rh(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof vn?function(s,r,i){if(!vi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=rh(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Xp(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Xs(t,e,n,s){return t instanceof jr?function(r,i,o,a){if(!vi(r.precondition,i))return o;const c=r.value.clone(),u=ih(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof vn?function(r,i,o,a){if(!vi(r.precondition,i))return o;const c=ih(r.fieldTransforms,a,i),u=i.data;return u.setAll(Xp(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return vi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function xI(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Kp(s.transform,r||null);i!=null&&(n===null&&(n=Ye.empty()),n.set(s.field,i))}return n||null}function sh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&vs(n,s,(r,i)=>OI(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class jr extends ko{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class vn extends ko{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function rh(t,e,n){const s=new Map;fe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,DI(o,a,n[r]))}return s}function ih(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,kI(i,o,e))}return s}class Yp extends ko{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class MI extends ko{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LI{constructor(e){this.count=e}}/**
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
 */var Ie,te;function UI(t){switch(t){default:return K();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function Jp(t){if(t===void 0)return Ht("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ie.OK:return b.OK;case Ie.CANCELLED:return b.CANCELLED;case Ie.UNKNOWN:return b.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return b.INTERNAL;case Ie.UNAVAILABLE:return b.UNAVAILABLE;case Ie.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ie.NOT_FOUND:return b.NOT_FOUND;case Ie.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ie.ABORTED:return b.ABORTED;case Ie.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ie.DATA_LOSS:return b.DATA_LOSS;default:return K()}}(te=Ie||(Ie={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Hn(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Op(this.inner)}size(){return this.innerSize}}/**
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
 */const FI=new ke($.comparator);function zt(){return FI}const Zp=new ke($.comparator);function qs(...t){let e=Zp;for(const n of t)e=e.insert(n.key,n);return e}function eg(t){let e=Zp;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Dn(){return Ys()}function tg(){return Ys()}function Ys(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const VI=new ke($.comparator),BI=new Ce($.comparator);function ee(...t){let e=BI;for(const n of t)e=e.add(n);return e}const $I=new Ce(ie);function ng(){return $I}/**
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
 */class Do{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,qr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Do(W.min(),r,ng(),zt(),ee())}}class qr{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new qr(s,n,ee(),ee(),ee())}}/**
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
 */class wi{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class sg{constructor(e,n){this.targetId=e,this.Et=n}}class rg{constructor(e,n,s=Ke.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class oh{constructor(){this.At=0,this.Rt=ch(),this.bt=Ke.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ee(),n=ee(),s=ee();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:K()}}),new qr(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=ch()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class jI{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=zt(),this.qt=ah(),this.Ut=new Ce(ie)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Ha(i))if(s===0){const o=new $(i.path);this.Qt(n,o,Fe.newNoDocument(o,W.min()))}else fe(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Ha(a.target)){const c=new $(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Fe.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ee();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new Do(e,n,this.Ut,this.Lt,s);return this.Lt=zt(),this.qt=ah(),this.Ut=new Ce(ie),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new oh,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ce(ie),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new oh),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function ah(){return new ke($.comparator)}function ch(){return new ke($.comparator)}/**
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
 */const qI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),HI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),KI=(()=>({and:"AND",or:"OR"}))();class zI{constructor(e,n){this.databaseId=e,this.wt=n}}function Hi(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ig(t,e){return t.wt?e.toBase64():e.toUint8Array()}function WI(t,e){return Hi(t,e.toTimestamp())}function kt(t){return fe(!!t),W.fromTimestamp(function(e){const n=pn(e);return new Ae(n.seconds,n.nanos)}(t))}function au(t,e){return function(n){return new ve(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function og(t){const e=ve.fromString(t);return fe(lg(e)),e}function Wa(t,e){return au(t.databaseId,e.path)}function ia(t,e){const n=og(e);if(n.get(1)!==t.databaseId.projectId)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new $(ag(n))}function Ga(t,e){return au(t.databaseId,e)}function GI(t){const e=og(t);return e.length===4?ve.emptyPath():ag(e)}function Qa(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ag(t){return fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uh(t,e,n){return{name:Wa(t,e),fields:n.value.mapValue.fields}}function QI(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(fe(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(fe(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?b.UNKNOWN:Jp(c.code);return new j(u,c.message||"")}(o);n=new rg(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ia(t,s.document.name),i=kt(s.document.updateTime),o=s.document.createTime?kt(s.document.createTime):W.min(),a=new Ye({mapValue:{fields:s.document.fields}}),c=Fe.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new wi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ia(t,s.document),i=s.readTime?kt(s.readTime):W.min(),o=Fe.newNoDocument(r,i),a=s.removedTargetIds||[];n=new wi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ia(t,s.document),i=s.removedTargetIds||[];n=new wi([],i,r,null)}else{if(!("filter"in e))return K();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new LI(r),o=s.targetId;n=new sg(o,i)}}return n}function XI(t,e){let n;if(e instanceof jr)n={update:uh(t,e.key,e.value)};else if(e instanceof Yp)n={delete:Wa(t,e.key)};else if(e instanceof vn)n={update:uh(t,e.key,e.data),updateMask:iT(e.fieldMask)};else{if(!(e instanceof MI))return K();n={verify:Wa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof ji)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof wr)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Er)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof qi)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw K()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:WI(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:K()}(t,e.precondition)),n}function YI(t,e){return t&&t.length>0?(fe(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?kt(s.updateTime):kt(r);return i.isEqual(W.min())&&(i=kt(r)),new NI(i,s.transformResults||[])}(n,e))):[]}function JI(t,e){return{documents:[Ga(t,e.path)]}}function ZI(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Ga(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ga(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return ug(Pt.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Jn(l.field),direction:nT(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||So(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function eT(t){let e=GI(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){fe(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=cg(l);return h instanceof Pt&&Lp(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Qs(Zn(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,So(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new $i(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new $i(d,h)}(n.endAt)),II(e,r,o,i,a,"F",c,u)}function tT(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function cg(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Zn(e.unaryFilter.field);return Se.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Zn(e.unaryFilter.field);return Se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Zn(e.unaryFilter.field);return Se.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Zn(e.unaryFilter.field);return Se.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return Se.create(Zn(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(n=>cg(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function nT(t){return qI[t]}function sT(t){return HI[t]}function rT(t){return KI[t]}function Jn(t){return{fieldPath:t.canonicalString()}}function Zn(t){return Be.fromServerFormat(t.fieldPath)}function ug(t){return t instanceof Se?function(e){if(e.op==="=="){if(Xl(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NAN"}};if(Ql(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Xl(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NOT_NAN"}};if(Ql(e.value))return{unaryFilter:{field:Jn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jn(e.field),op:sT(e.op),value:e.value}}}(t):t instanceof Pt?function(e){const n=e.getFilters().map(s=>ug(s));return n.length===1?n[0]:{compositeFilter:{op:rT(e.op),filters:n}}}(t):K()}function iT(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class oT{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&PI(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Xs(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Xs(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=tg();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Qp(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(W.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ee())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,(n,s)=>sh(n,s))&&vs(this.baseMutations,e.baseMutations,(n,s)=>sh(n,s))}}class cu{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){fe(e.mutations.length===s.length);let r=VI;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new cu(e,n,s,r)}}/**
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
 */class aT{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Mn{constructor(e,n,s,r,i=W.min(),o=W.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class cT{constructor(e){this.ie=e}}function uT(t){const e=eT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ka(e,e.limit,"L"):e}/**
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
 */class lT{constructor(){this.Je=new hT}addToCollectionParentIndex(e,n){return this.Je.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(dn.min())}updateCollectionGroup(e,n,s){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class hT{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new Ce(ve.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new Ce(ve.comparator)).toArray()}}/**
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
 */class Is{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Is(0)}static vn(){return new Is(-1)}}/**
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
 */class fT{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?T.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class dT{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class pT{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Xs(s.mutation,r,et.empty(),Ae.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ee()){const r=Dn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=qs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Dn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ee()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=zt();const o=Ys(),a=Ys();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof vn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Xs(l.mutation,u,l.mutation.getFieldMask(),Ae.now())):o.set(u.key,et.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new dT(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ys();let r=new ke((o,a)=>o-a),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||et.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ee()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=tg();l.forEach(d=>{if(!i.has(d)){const g=Qp(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return $.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):T.resolve(Dn());let a=-1,c=i;return o.next(u=>T.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?T.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ee())).next(l=>({batchId:a,changes:eg(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new $(n)).next(s=>{let r=qs();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=qs();return this.indexManager.getCollectionParents(e,r).next(o=>T.forEach(o,a=>{const c=function(u,l){return new Ao(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Fe.newInvalidDocument(u)))});let o=qs();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Xs(u.mutation,c,et.empty(),Ae.now()),ou(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class gT{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return T.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:kt(s.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:uT(s.bundledQuery),readTime:kt(s.readTime)}}(n)),T.resolve()}}/**
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
 */class mT{constructor(){this.overlays=new ke($.comparator),this.es=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Dn();return T.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),T.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),T.resolve()}getOverlaysForCollection(e,n,s){const r=Dn(),i=n.length+1,o=new $(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return T.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new ke((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Dn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Dn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return T.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new aT(n,s));let i=this.es.get(n);i===void 0&&(i=ee(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class uu{constructor(){this.ns=new Ce(De.ss),this.rs=new Ce(De.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new De(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new De(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new $(new ve([])),s=new De(n,e),r=new De(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new $(new ve([])),s=new De(n,e),r=new De(n,e+1);let i=ee();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new De(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class De{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return $.comparator(e.key,n.key)||ie(e._s,n._s)}static os(e,n){return ie(e._s,n._s)||$.comparator(e.key,n.key)}}/**
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
 */class yT{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ce(De.ss)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oT(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new De(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return T.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new De(n,0),r=new De(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),T.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Ce(ie);return n.forEach(r=>{const i=new De(r,0),o=new De(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),T.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;$.isDocumentKey(i)||(i=i.child(""));const o=new De(new $(i),0);let a=new Ce(ie);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),T.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){fe(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return T.forEach(n.mutations,r=>{const i=new De(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new De(n,0),r=this.gs.firstAfterOrEqual(s);return T.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vT{constructor(e){this.Es=e,this.docs=new ke($.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return T.resolve(s?s.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let s=zt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Fe.newInvalidDocument(r))}),T.resolve(s)}getAllFromCollection(e,n,s){let r=zt();const i=new $(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||iI(rI(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return T.resolve(r)}getAllFromCollectionGroup(e,n,s,r){K()}As(e,n){return T.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new wT(this)}getSize(e){return T.resolve(this.size)}}class wT extends fT{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),T.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class ET{constructor(e){this.persistence=e,this.Rs=new Ps(n=>su(n),ru),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.bs=0,this.Ps=new uu,this.targetCount=0,this.vs=Is.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),T.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Is(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Dn(n),T.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),T.waitFor(i).next(()=>r)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return T.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),T.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),T.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),T.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return T.resolve(s)}containsKey(e,n){return T.resolve(this.Ps.containsKey(n))}}/**
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
 */class _T{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new tu(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ET(this),this.indexManager=new lT,this.remoteDocumentCache=function(s){return new vT(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new cT(n),this.Ns=new gT(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mT,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new yT(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const r=new IT(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return T.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class IT extends aI{constructor(e){super(),this.currentSequenceNumber=e}}class lu{constructor(e){this.persistence=e,this.Fs=new uu,this.$s=null}static Bs(e){return new lu(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),T.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),T.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ls,s=>{const r=$.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,W.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return T.or([()=>T.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class hu{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ee(),r=ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hu(e,n.fromCache,s,r)}}/**
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
 */class TT{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(th(n))return T.resolve(null);let s=Kt(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Ka(n,null,"F"),s=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ee(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Ka(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return th(n)||r.isEqual(W.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):(zl()<=re.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),za(n)),this.Bi(e,o,n,sI(r,-1)))})}Fi(e,n){let s=new Ce(jp(e));return n.forEach((r,i)=>{ou(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return zl()<=re.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",za(n)),this.Ni.getDocumentsMatchingQuery(e,n,dn.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class bT{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new ke(ie),this.Ui=new Ps(i=>su(i),ru),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pT(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function ST(t,e,n,s){return new bT(t,e,n,s)}async function hg(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ee();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function AT(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=T.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const _=c.docVersions.get(g);fe(_!==null),y.version.compareTo(_)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ee();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function fg(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function CT(t,e){const n=Q(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,_,k){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=zt(),u=ee();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(RT(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(W.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return T.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function RT(t,e,n){let s=ee(),r=ee();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=zt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(W.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function kT(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function DT(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,T.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Mn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function Xa(t,e,n){const s=Q(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!$r(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function lh(t,e,n){const s=Q(t);let r=W.min(),i=ee();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Q(a),h=l.Ui.get(u);return h!==void 0?T.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Kt(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:W.min(),n?i:ee())).next(a=>(OT(s,AI(e),a),{documents:a,Hi:i})))}function OT(t,e,n){let s=t.Ki.get(e)||W.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class hh{constructor(){this.activeTargetIds=ng()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NT{constructor(){this.Lr=new hh,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new hh,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class PT{Ur(e){}shutdown(){}}/**
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
 */class fh{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const xT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class MT{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class LT extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);U("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(U("RestConnection","Received: ",c),c),c=>{throw Ba("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ns,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=xT[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new W0;a.setWithCredentials(!0),a.listenOnce(H0.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ra.NO_ERROR:const u=a.getResponseJson();U("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ra.TIMEOUT:U("Connection",'RPC "'+e+'" timed out'),o(new j(b.DEADLINE_EXCEEDED,"Request time out"));break;case ra.HTTP_ERROR:const l=a.getStatus();if(U("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const _=y.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(_)>=0?_:b.UNKNOWN}(d.status);o(new j(g,d.message))}else o(new j(b.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new j(b.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{U("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=j0(),o=q0(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new z0({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");U("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new MT({Hr:y=>{h?U("Connection","Not sending because WebChannel is closed:",y):(l||(U("Connection","Opening WebChannel transport."),u.open(),l=!0),U("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,_,k)=>{y.listen(_,R=>{try{k(R)}catch(P){setTimeout(()=>{throw P},0)}})};return g(u,si.EventType.OPEN,()=>{h||U("Connection","WebChannel transport opened.")}),g(u,si.EventType.CLOSE,()=>{h||(h=!0,U("Connection","WebChannel transport closed"),d.io())}),g(u,si.EventType.ERROR,y=>{h||(h=!0,Ba("Connection","WebChannel transport errored:",y),d.io(new j(b.UNAVAILABLE,"The operation could not be completed")))}),g(u,si.EventType.MESSAGE,y=>{var _;if(!h){const k=y.data[0];fe(!!k);const R=k,P=R.error||((_=R[0])===null||_===void 0?void 0:_.error);if(P){U("Connection","WebChannel received error:",P);const L=P.status;let Y=function(be){const Le=Ie[be];if(Le!==void 0)return Jp(Le)}(L),pe=P.message;Y===void 0&&(Y=b.INTERNAL,pe="Unknown error status: "+L+" with message "+P.message),h=!0,d.io(new j(Y,pe)),u.close()}else U("Connection","WebChannel received:",k),d.ro(k)}}),g(o,K0.STAT_EVENT,y=>{y.stat===Hl.PROXY?U("Connection","Detected buffering proxy"):y.stat===Hl.NOPROXY&&U("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function oa(){return typeof document<"u"?document:null}/**
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
 */function Oo(t){return new zI(t,!0)}class dg{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&U("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class pg{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new dg(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Ht(n.toString()),Ht("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new j(b.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UT extends pg{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=QI(this.yt,e),s=function(r){if(!("targetChange"in r))return W.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?W.min():i.readTime?kt(i.readTime):W.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Qa(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Ha(a)?{documents:JI(r,a)}:{query:ZI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=ig(r,i.resumeToken):i.snapshotVersion.compareTo(W.min())>0&&(o.readTime=Hi(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=tT(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Qa(this.yt),n.removeTarget=e,this.Bo(n)}}class FT extends pg{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=YI(e.writeResults,e.commitTime),s=kt(e.commitTime);return this.listener.Zo(s,n)}return fe(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Qa(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>XI(this.yt,s))};this.Bo(n)}}/**
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
 */class VT extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(b.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new j(b.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class BT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ht(n),this.ou=!1):U("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class $T{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{Kn(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Q(a);c._u.add(4),await Hr(c),c.gu.set("Unknown"),c._u.delete(4),await No(c)}(this))})}),this.gu=new BT(s,r)}}async function No(t){if(Kn(t))for(const e of t.wu)await e(!0)}async function Hr(t){for(const e of t.wu)await e(!1)}function gg(t,e){const n=Q(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),pu(n)?du(n):xs(n).ko()&&fu(n,e))}function mg(t,e){const n=Q(t),s=xs(n);n.du.delete(e),s.ko()&&yg(n,e),n.du.size===0&&(s.ko()?s.Fo():Kn(n)&&n.gu.set("Unknown"))}function fu(t,e){t.yu.Ot(e.targetId),xs(t).zo(e)}function yg(t,e){t.yu.Ot(e),xs(t).Ho(e)}function du(t){t.yu=new jI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),xs(t).start(),t.gu.uu()}function pu(t){return Kn(t)&&!xs(t).No()&&t.du.size>0}function Kn(t){return Q(t)._u.size===0}function vg(t){t.yu=void 0}async function jT(t){t.du.forEach((e,n)=>{fu(t,e)})}async function qT(t,e){vg(t),pu(t)?(t.gu.hu(e),du(t)):t.gu.set("Unknown")}async function HT(t,e,n){if(t.gu.set("Online"),e instanceof rg&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ki(t,s)}else if(e instanceof wi?t.yu.Kt(e):e instanceof sg?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(W.min()))try{const s=await fg(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(Ke.EMPTY_BYTE_STRING,c.snapshotVersion)),yg(r,a);const u=new Mn(c.target,a,1,c.sequenceNumber);fu(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await Ki(t,s)}}async function Ki(t,e,n){if(!$r(e))throw e;t._u.add(1),await Hr(t),t.gu.set("Offline"),n||(n=()=>fg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await No(t)})}function wg(t,e){return e().catch(n=>Ki(t,n,e))}async function Po(t){const e=Q(t),n=gn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;KT(e);)try{const r=await kT(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,zT(e,r)}catch(r){await Ki(e,r)}Eg(e)&&_g(e)}function KT(t){return Kn(t)&&t.fu.length<10}function zT(t,e){t.fu.push(e);const n=gn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Eg(t){return Kn(t)&&!gn(t).No()&&t.fu.length>0}function _g(t){gn(t).start()}async function WT(t){gn(t).eu()}async function GT(t){const e=gn(t);for(const n of t.fu)e.Xo(n.mutations)}async function QT(t,e,n){const s=t.fu.shift(),r=cu.from(s,e,n);await wg(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Po(t)}async function XT(t,e){e&&gn(t).Yo&&await async function(n,s){if(r=s.code,UI(r)&&r!==b.ABORTED){const i=n.fu.shift();gn(n).Mo(),await wg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Po(n)}var r}(t,e),Eg(t)&&_g(t)}async function dh(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=Kn(n);n._u.add(3),await Hr(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await No(n)}async function YT(t,e){const n=Q(t);e?(n._u.delete(2),await No(n)):e||(n._u.add(2),await Hr(n),n.gu.set("Unknown"))}function xs(t){return t.pu||(t.pu=function(e,n,s){const r=Q(e);return r.su(),new UT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:jT.bind(null,t),Zr:qT.bind(null,t),Wo:HT.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),pu(t)?du(t):t.gu.set("Unknown")):(await t.pu.stop(),vg(t))})),t.pu}function gn(t){return t.Iu||(t.Iu=function(e,n,s){const r=Q(e);return r.su(),new FT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:WT.bind(null,t),Zr:XT.bind(null,t),tu:GT.bind(null,t),Zo:QT.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Po(t)):(await t.Iu.stop(),t.fu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class gu{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new hn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new gu(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mu(t,e){if(Ht("AsyncQueue",`${e}: ${t}`),$r(t))return new j(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class hs{constructor(e){this.comparator=e?(n,s)=>e(n,s)||$.comparator(n.key,s.key):(n,s)=>$.comparator(n.key,s.key),this.keyedMap=qs(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new hs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof hs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new hs;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class ph{constructor(){this.Tu=new ke($.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):K():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ts{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ts(e,n,hs.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Co(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class JT{constructor(){this.Au=void 0,this.listeners=[]}}class ZT{constructor(){this.queries=new Ps(e=>$p(e),Co),this.onlineState="Unknown",this.Ru=new Set}}async function eb(t,e){const n=Q(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new JT),r)try{i.Au=await n.onListen(s)}catch(o){const a=mu(o,`Initialization of query '${za(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&yu(n)}async function tb(t,e){const n=Q(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function nb(t,e){const n=Q(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&yu(n)}function sb(t,e,n){const s=Q(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function yu(t){t.Ru.forEach(e=>{e.next()})}class rb{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ts(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class Ig{constructor(e){this.key=e}}class Tg{constructor(e){this.key=e}}class ib{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ee(),this.mutatedKeys=ee(),this.Gu=jp(e),this.Qu=new hs(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new ph,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=ou(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?y!==_&&(s.track({type:3,doc:g}),k=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),k=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),k=!0):d&&!g&&(s.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),i=_?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return g(h)-g(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new Ts(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new ph,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ee(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Tg(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Ig(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ee();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ts.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class ob{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class ab{constructor(e){this.key=e,this.nc=!1}}class cb{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ps(a=>$p(a),Co),this.rc=new Map,this.oc=new Set,this.uc=new ke($.comparator),this.cc=new Map,this.ac=new uu,this.hc={},this.lc=new Map,this.fc=Is.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function ub(t,e){const n=wb(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await DT(n.localStore,Kt(e));n.isPrimaryClient&&gg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await lb(n,e,s,a==="current",o.resumeToken)}return r}async function lb(t,e,n,s,r){t._c=(h,d,g)=>async function(y,_,k,R){let P=_.view.Wu(k);P.$i&&(P=await lh(y.localStore,_.query,!1).then(({documents:pe})=>_.view.Wu(pe,P)));const L=R&&R.targetChanges.get(_.targetId),Y=_.view.applyChanges(P,y.isPrimaryClient,L);return mh(y,_.targetId,Y.Xu),Y.snapshot}(t,h,d,g);const i=await lh(t.localStore,e,!0),o=new ib(e,i.Hi),a=o.Wu(i.documents),c=qr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);mh(t,n,u.Xu);const l=new ob(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function hb(t,e){const n=Q(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Co(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Xa(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),mg(n.remoteStore,s.targetId),Ya(n,s.targetId)}).catch(Br)):(Ya(n,s.targetId),await Xa(n.localStore,s.targetId,!0))}async function fb(t,e,n){const s=Eb(t);try{const r=await function(i,o){const a=Q(i),c=Ae.now(),u=o.reduce((d,g)=>d.add(g.key),ee());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=zt(),y=ee();return a.Gi.getEntries(d,u).next(_=>{g=_,g.forEach((k,R)=>{R.isValidDocument()||(y=y.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(_=>{l=_;const k=[];for(const R of o){const P=xI(R,l.get(R.key).overlayedDocument);P!=null&&k.push(new vn(R.key,P,Bp(P.value.mapValue),Rt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(_=>{h=_;const k=_.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(d,_.batchId,k)})}).then(()=>({batchId:h.batchId,changes:eg(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new ke(ie)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Kr(s,r.changes),await Po(s.remoteStore)}catch(r){const i=mu(r,"Failed to persist write");n.reject(i)}}async function bg(t,e){const n=Q(t);try{const s=await CT(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(fe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?fe(o.nc):r.removedDocuments.size>0&&(fe(o.nc),o.nc=!1))}),await Kr(n,s,e)}catch(s){await Br(s)}}function gh(t,e,n){const s=Q(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=Q(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&yu(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function db(t,e,n){const s=Q(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new ke($.comparator);o=o.insert(i,Fe.newNoDocument(i,W.min()));const a=ee().add(i),c=new Do(W.min(),new Map,new Ce(ie),o,a);await bg(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),vu(s)}else await Xa(s.localStore,e,!1).then(()=>Ya(s,e,n)).catch(Br)}async function pb(t,e){const n=Q(t),s=e.batch.batchId;try{const r=await AT(n.localStore,e);Ag(n,s,null),Sg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Kr(n,r)}catch(r){await Br(r)}}async function gb(t,e,n){const s=Q(t);try{const r=await function(i,o){const a=Q(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(fe(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Ag(s,e,n),Sg(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Kr(s,r)}catch(r){await Br(r)}}function Sg(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Ag(t,e,n){const s=Q(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function Ya(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Cg(t,s)})}function Cg(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(mg(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),vu(t))}function mh(t,e,n){for(const s of n)s instanceof Ig?(t.ac.addReference(s.key,e),mb(t,s)):s instanceof Tg?(U("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Cg(t,s.key)):K()}function mb(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.oc.add(s),vu(t))}function vu(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new $(ve.fromString(e)),s=t.fc.next();t.cc.set(s,new ab(n)),t.uc=t.uc.insert(n,s),gg(t.remoteStore,new Mn(Kt(iu(n.path)),s,2,tu.at))}}async function Kr(t,e,n){const s=Q(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=hu.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>T.forEach(c,h=>T.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>T.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!$r(l))throw l;U("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(s.localStore,i))}async function yb(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await hg(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new j(b.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Kr(n,s.ji)}}function vb(t,e){const n=Q(t),s=n.cc.get(e);if(s&&s.nc)return ee().add(s.key);{let r=ee();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function wb(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=db.bind(null,e),e.sc.Wo=nb.bind(null,e.eventManager),e.sc.wc=sb.bind(null,e.eventManager),e}function Eb(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=pb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gb.bind(null,e),e}class _b{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Oo(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return ST(this.persistence,new TT,e.initialUser,this.yt)}yc(e){return new _T(lu.Bs,this.yt)}gc(e){return new NT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ib{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>gh(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=yb.bind(null,this.syncEngine),await YT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ZT}createDatastore(e){const n=Oo(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new LT(r));var r;return function(i,o,a,c){return new VT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>gh(this.syncEngine,a,0),o=fh.C()?new fh:new PT,new $T(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new cb(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);U("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Hr(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Tb(t,e,n){if(!n)throw new j(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bb(t,e,n,s){if(e===!0&&s===!0)throw new j(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yh(t){if(!$.isDocumentKey(t))throw new j(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function wu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wu(t);throw new j(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const vh=new Map;class wh{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new j(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,bb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Eu{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new G0;switch(n.type){case"gapi":const s=n.client;return new J0(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new j(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=vh.get(e);n&&(U("ComponentProvider","Removing Datastore"),vh.delete(e),n.terminate())}(this),Promise.resolve()}}function Sb(t,e,n,s={}){var r;const i=(t=jn(t,Eu))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Ba("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ue.MOCK_USER;else{o=Ov(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new j(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ue(c)}t._authCredentials=new Q0(new kp(o,a))}}/**
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
 */class tt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tt(this.firestore,e,this._key)}}class _u{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _u(this.firestore,e,this._query)}}class _r extends _u{constructor(e,n,s){super(e,n,iu(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new tt(this.firestore,null,new $(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function EA(t,e,...n){if(t=st(t),arguments.length===1&&(e=Dp.R()),Tb("doc","path",e),t instanceof Eu){const s=ve.fromString(e,...n);return yh(s),new tt(t,null,new $(s))}{if(!(t instanceof tt||t instanceof _r))throw new j(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ve.fromString(e,...n));return yh(s),new tt(t.firestore,t instanceof _r?t.converter:null,new $(s))}}/**
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
 *//**
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
 */class Ab{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ht("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Cb{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ue.UNAUTHENTICATED,this.clientId=Dp.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{U("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(U("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=mu(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Rb(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await hg(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function kb(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Db(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>dh(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>dh(e.remoteStore,i)),t.onlineComponents=e}async function Db(t){return t.offlineComponents||(U("FirestoreClient","Using default OfflineComponentProvider"),await Rb(t,new _b)),t.offlineComponents}async function Rg(t){return t.onlineComponents||(U("FirestoreClient","Using default OnlineComponentProvider"),await kb(t,new Ib)),t.onlineComponents}function Ob(t){return Rg(t).then(e=>e.syncEngine)}async function Nb(t){const e=await Rg(t),n=e.eventManager;return n.onListen=ub.bind(null,e.syncEngine),n.onUnlisten=hb.bind(null,e.syncEngine),n}function Pb(t,e,n={}){const s=new hn;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Ab({next:h=>{i.enqueueAndForget(()=>tb(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new j(b.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new j(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new rb(iu(o.path),u,{includeMetadataChanges:!0,Nu:!0});return eb(r,l)}(await Nb(t),t.asyncQueue,e,n,s)),s.promise}class xb{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new dg(this,"async_queue_retry"),this.Wc=()=>{const n=oa();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=oa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=oa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new hn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!$r(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Ht("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=gu.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&K()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class xo extends Eu{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new xb,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dg(this),this._firestoreClient.terminate()}}function _A(t,e){const n=typeof t=="object"?t:Kf(),s=typeof t=="string"?t:e||"(default)",r=bc(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Rv("firestore");i&&Sb(r,...i)}return r}function kg(t){return t._firestoreClient||Dg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Dg(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new cI(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Cb(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
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
 *//**
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
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(Ke.fromBase64String(e))}catch(n){throw new j(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Mo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Iu{constructor(e){this._methodName=e}}/**
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
 */class Tu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
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
 */const Mb=/^__.*__$/;class Lb{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new vn(e,this.data,this.fieldMask,n,this.fieldTransforms):new jr(e,this.data,n,this.fieldTransforms)}}class Og{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new vn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ng(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class bu{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new bu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return zi(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Ng(this.sa)&&Mb.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class Ub{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Oo(e)}da(e,n,s,r=!1){return new bu({sa:e,methodName:n,fa:s,path:Be.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Pg(t){const e=t._freezeSettings(),n=Oo(t._databaseId);return new Ub(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fb(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Su("Data must be an object, but it was:",o,s);const a=xg(s,o);let c,u;if(i.merge)c=new et(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Ja(e,h,n);if(!o.contains(d))throw new j(b.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Lg(l,d)||l.push(d)}c=new et(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Lb(new Ye(a),c,u)}class Lo extends Iu{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lo}}function Vb(t,e,n,s){const r=t.da(1,e,n);Su("Data must be an object, but it was:",r,s);const i=[],o=Ye.empty();Hn(s,(c,u)=>{const l=Au(e,c,n);u=st(u);const h=r.ca(l);if(u instanceof Lo)i.push(l);else{const d=Uo(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new et(i);return new Og(o,a,r.fieldTransforms)}function Bb(t,e,n,s,r,i){const o=t.da(1,e,n),a=[Ja(e,s,n)],c=[r];if(i.length%2!=0)throw new j(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Ja(e,i[d])),c.push(i[d+1]);const u=[],l=Ye.empty();for(let d=a.length-1;d>=0;--d)if(!Lg(u,a[d])){const g=a[d];let y=c[d];y=st(y);const _=o.ca(g);if(y instanceof Lo)u.push(g);else{const k=Uo(y,_);k!=null&&(u.push(g),l.set(g,k))}}const h=new et(u);return new Og(l,h,o.fieldTransforms)}function Uo(t,e){if(Mg(t=st(t)))return Su("Unsupported field value:",e,t),xg(t,e);if(t instanceof Iu)return function(n,s){if(!Ng(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Uo(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=st(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return RI(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Ae.fromDate(n);return{timestampValue:Hi(s.yt,r)}}if(n instanceof Ae){const r=new Ae(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Hi(s.yt,r)}}if(n instanceof Tu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof bs)return{bytesValue:ig(s.yt,n._byteString)};if(n instanceof tt){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:au(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${wu(n)}`)}(t,e)}function xg(t,e){const n={};return Op(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hn(t,(s,r)=>{const i=Uo(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Mg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Tu||t instanceof bs||t instanceof tt||t instanceof Iu)}function Su(t,e,n){if(!Mg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=wu(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function Ja(t,e,n){if((e=st(e))instanceof Mo)return e._internalPath;if(typeof e=="string")return Au(t,e);throw zi("Field path arguments must be of type string or ",t,!1,void 0,n)}const $b=new RegExp("[~\\*/\\[\\]]");function Au(t,e,n){if(e.search($b)>=0)throw zi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mo(...e.split("."))._internalPath}catch{throw zi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zi(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new j(b.INVALID_ARGUMENT,a+t+c)}function Lg(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Ug{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jb extends Ug{data(){return super.data()}}function Fg(t,e){return typeof e=="string"?Au(t,e):e instanceof Mo?e._internalPath:e._delegate._internalPath}class qb{convertValue(e,n="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Te(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const s={};return Hn(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Tu(Te(e.latitude),Te(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Pp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(yr(e));default:return null}}convertTimestamp(e){const n=pn(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ve.fromString(e);fe(lg(s));const r=new mr(s.get(1),s.get(3)),i=new $(s.popFirst(5));return r.isEqual(n)||Ht(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Hb(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class Kb{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vg extends Ug{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zb(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Fg("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class zb extends Vg{data(e={}){return super.data(e)}}/**
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
 */function IA(t){t=jn(t,tt);const e=jn(t.firestore,xo);return Pb(kg(e),t._key).then(n=>Gb(e,t,n))}class Wb extends qb{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new tt(this.firestore,null,n)}}function TA(t,e,n){t=jn(t,tt);const s=jn(t.firestore,xo),r=Hb(t.converter,e,n);return Bg(s,[Fb(Pg(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,Rt.none())])}function bA(t,e,n,...s){t=jn(t,tt);const r=jn(t.firestore,xo),i=Pg(r);let o;return o=typeof(e=st(e))=="string"||e instanceof Mo?Bb(i,"updateDoc",t._key,e,n,s):Vb(i,"updateDoc",t._key,e),Bg(r,[o.toMutation(t._key,Rt.exists(!0))])}function Bg(t,e){return function(n,s){const r=new hn;return n.asyncQueue.enqueueAndForget(async()=>fb(await Ob(n),s,r)),r.promise}(kg(t),e)}function Gb(t,e,n){const s=n.docs.get(e._key),r=new Wb(t);return new Vg(t,r,e._key,s,new Kb(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Ns=n})(Ar),gs(new Un("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new xo(new X0(n.getProvider("auth-internal")),new eI(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new j(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mr(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ln(Kl,"3.8.1",t),ln(Kl,"3.8.1","esm2017")})();var It=(t=>(t.LOADING="loading",t.LOADED="loaded",t.ERROR="error",t))(It||{});const Qb=typeof window<"u"&&window!==null,Xb=eS(),Yb=Object.prototype.propertyIsEnumerable,Eh=Object.getOwnPropertySymbols;function Js(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function Jb(t){return typeof t=="object"?t===null:typeof t!="function"}function Zb(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function eS(){return Qb&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function tS(t,...e){if(!Js(t))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof Eh!="function")return t;for(const n of e){const s=Eh(n);for(const r of s)Yb.call(n,r)&&(t[r]=n[r])}return t}function $g(t,...e){let n=0;for(Jb(t)&&(t=e[n++]),t||(t={});n<e.length;n++)if(Js(e[n])){for(const s of Object.keys(e[n]))Zb(s)&&(Js(t[s])&&Js(e[n][s])?$g(t[s],e[n][s]):t[s]=e[n][s]);tS(t,e[n])}return t}const _h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",nS="",sS={rootMargin:"0px",threshold:0},Qn="data-lazy-timeout-id";class rS{constructor(e){this.options={loading:_h,error:nS,observerOptions:sS,log:!0,lifecycle:{}},this._images=new WeakMap,this.config(e)}config(e={}){$g(this.options,e)}mount(e,n){if(!e)return;const{src:s,loading:r,error:i,lifecycle:o,delay:a}=this._valueFormatter(typeof n=="string"?n:n.value);this._lifecycle(It.LOADING,o,e),e.setAttribute("src",r||_h),Xb||(this.loadImages(e,s,i,o),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,s,i,o,a)}update(e,n){var a;if(!e)return;(a=this._realObserver(e))==null||a.unobserve(e);const{src:s,error:r,lifecycle:i,delay:o}=this._valueFormatter(typeof n=="string"?n:n.value);this._initIntersectionObserver(e,s,r,i,o)}unmount(e){var n;e&&((n=this._realObserver(e))==null||n.unobserve(e),this._images.delete(e))}loadImages(e,n,s,r){this._setImageSrc(e,n,s,r)}_setImageSrc(e,n,s,r){e.tagName.toLowerCase()==="img"?(n&&e.getAttribute("src")!==n&&e.setAttribute("src",n),this._listenImageStatus(e,()=>{this._lifecycle(It.LOADED,r,e)},()=>{var i;e.onload=null,this._lifecycle(It.ERROR,r,e),(i=this._realObserver(e))==null||i.disconnect(),s&&e.getAttribute("src")!==s&&e.setAttribute("src",s),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${n} `)})})):e.style.backgroundImage=`url('${n}')`}_initIntersectionObserver(e,n,s,r,i){var a;const o=this.options.observerOptions;this._images.set(e,new IntersectionObserver(c=>{Array.prototype.forEach.call(c,u=>{i&&i>0?this._delayedIntersectionCallback(e,u,i,n,s,r):this._intersectionCallback(e,u,n,s,r)})},o)),(a=this._realObserver(e))==null||a.observe(e)}_intersectionCallback(e,n,s,r,i){var o;n.isIntersecting&&((o=this._realObserver(e))==null||o.unobserve(n.target),this._setImageSrc(e,s,r,i))}_delayedIntersectionCallback(e,n,s,r,i,o){if(n.isIntersecting){if(n.target.hasAttribute(Qn))return;const a=setTimeout(()=>{this._intersectionCallback(e,n,r,i,o),n.target.removeAttribute(Qn)},s);n.target.setAttribute(Qn,String(a))}else n.target.hasAttribute(Qn)&&(clearTimeout(Number(n.target.getAttribute(Qn))),n.target.removeAttribute(Qn))}_listenImageStatus(e,n,s){e.onload=n,e.onerror=s}_valueFormatter(e){let n=e,s=this.options.loading,r=this.options.error,i=this.options.lifecycle,o=this.options.delay;return Js(e)&&(n=e.src,s=e.loading||this.options.loading,r=e.error||this.options.error,i=e.lifecycle||this.options.lifecycle,o=e.delay||this.options.delay),{src:n,loading:s,error:r,lifecycle:i,delay:o}}_log(e){this.options.log&&e()}_lifecycle(e,n,s){switch(e){case It.LOADING:s==null||s.setAttribute("lazy",It.LOADING),n!=null&&n.loading&&n.loading(s);break;case It.LOADED:s==null||s.setAttribute("lazy",It.LOADED),n!=null&&n.loaded&&n.loaded(s);break;case It.ERROR:s==null||s.setAttribute("lazy",It.ERROR),n!=null&&n.error&&n.error(s);break}}_realObserver(e){return this._images.get(e)}}const SA={install(t,e){const n=new rS(e);t.config.globalProperties.$Lazyload=n,t.provide("Lazyload",n),t.directive("lazy",{mounted:n.mount.bind(n),updated:n.update.bind(n),unmounted:n.unmount.bind(n)})}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const es=typeof window<"u";function iS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ae=Object.assign;function aa(t,e){const n={};for(const s in e){const r=e[s];n[s]=mt(r)?r.map(t):t(r)}return n}const Zs=()=>{},mt=Array.isArray,oS=/\/$/,aS=t=>t.replace(oS,"");function ca(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=hS(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function cS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ih(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function uS(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ss(e.matched[s],n.matched[r])&&jg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function jg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lS(t[n],e[n]))return!1;return!0}function lS(t,e){return mt(t)?Th(t,e):mt(e)?Th(e,t):t===e}function Th(t,e){return mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function hS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Ir;(function(t){t.pop="pop",t.push="push"})(Ir||(Ir={}));var er;(function(t){t.back="back",t.forward="forward",t.unknown=""})(er||(er={}));function fS(t){if(!t)if(es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aS(t)}const dS=/^[^#]+#/;function pS(t,e){return t.replace(dS,"#")+e}function gS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Fo=()=>({left:window.pageXOffset,top:window.pageYOffset});function mS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=gS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bh(t,e){return(history.state?history.state.position-e:-1)+t}const Za=new Map;function yS(t,e){Za.set(t,e)}function vS(t){const e=Za.get(t);return Za.delete(t),e}let wS=()=>location.protocol+"//"+location.host;function qg(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Ih(c,"")}return Ih(n,t)+s+r}function ES(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=qg(t,location),y=n.value,_=e.value;let k=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}k=_?d.position-_.position:0}else s(g);r.forEach(R=>{R(n.value,y,{delta:k,type:Ir.pop,direction:k?k>0?er.forward:er.back:er.unknown})})};function c(){o=n.value}function u(d){r.push(d);const g=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:d}=window;d.state&&d.replaceState(ae({},d.state,{scroll:Fo()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Sh(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Fo():null}}function _S(t){const{history:e,location:n}=window,s={value:qg(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:wS()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function o(c,u){const l=ae({},e.state,Sh(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=ae({},r.value,e.state,{forward:c,scroll:Fo()});i(l.current,l,!0);const h=ae({},Sh(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function AA(t){t=fS(t);const e=_S(t),n=ES(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ae({location:"",base:t,go:s,createHref:pS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function IS(t){return typeof t=="string"||t&&typeof t=="object"}function Hg(t){return typeof t=="string"||typeof t=="symbol"}const Jt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kg=Symbol("");var Ah;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ah||(Ah={}));function As(t,e){return ae(new Error,{type:t,[Kg]:!0},e)}function xt(t,e){return t instanceof Error&&Kg in t&&(e==null||!!(t.type&e))}const Ch="[^/]+?",TS={sensitive:!1,strict:!1,start:!0,end:!0},bS=/[.+*?^${}()[\]/\\]/g;function SS(t,e){const n=ae({},TS,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(bS,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:_,optional:k,regexp:R}=d;i.push({name:y,repeatable:_,optional:k});const P=R||Ch;if(P!==Ch){g+=10;try{new RegExp(`(${P})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${y}" (${P}): `+Y.message)}}let L=_?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;h||(L=k&&u.length<2?`(?:/${L})`:"/"+L),k&&(L+="?"),r+=L,g+=20,k&&(g+=-8),_&&(g+=-20),P===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:_,optional:k}=g,R=y in u?u[y]:"";if(mt(R)&&!_)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const P=mt(R)?R.join("/"):R;if(!P)if(k)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=P}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function AS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function CS(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=AS(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Rh(s))return 1;if(Rh(r))return-1}return r.length-s.length}function Rh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const RS={type:0,value:""},kS=/[a-zA-Z0-9_]/;function DS(t){if(!t)return[[]];if(t==="/")return[[RS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:kS.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function OS(t,e,n){const s=SS(DS(t.path),n),r=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function NS(t,e){const n=[],s=new Map;e=Oh({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const g=!d,y=PS(l);y.aliasOf=d&&d.record;const _=Oh(e,l),k=[y];if("alias"in l){const L=typeof l.alias=="string"?[l.alias]:l.alias;for(const Y of L)k.push(ae({},y,{components:d?d.record.components:y.components,path:Y,aliasOf:d?d.record:y}))}let R,P;for(const L of k){const{path:Y}=L;if(h&&Y[0]!=="/"){const pe=h.record.path,be=pe[pe.length-1]==="/"?"":"/";L.path=h.record.path+(Y&&be+Y)}if(R=OS(L,h,_),d?d.alias.push(R):(P=P||R,P!==R&&P.alias.push(R),g&&l.name&&!Dh(R)&&o(l.name)),y.children){const pe=y.children;for(let be=0;be<pe.length;be++)i(pe[be],R,d&&d.children[be])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return P?()=>{o(P)}:Zs}function o(l){if(Hg(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&CS(l,n[h])>=0&&(l.record.path!==n[h].record.path||!zg(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Dh(l)&&s.set(l.record.name,l)}function u(l,h){let d,g={},y,_;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw As(1,{location:l});_=d.record.name,g=ae(kh(h.params,d.keys.filter(P=>!P.optional).map(P=>P.name)),l.params&&kh(l.params,d.keys.map(P=>P.name))),y=d.stringify(g)}else if("path"in l)y=l.path,d=n.find(P=>P.re.test(y)),d&&(g=d.parse(y),_=d.record.name);else{if(d=h.name?s.get(h.name):n.find(P=>P.re.test(h.path)),!d)throw As(1,{location:l,currentLocation:h});_=d.record.name,g=ae({},h.params,l.params),y=d.stringify(g)}const k=[];let R=d;for(;R;)k.unshift(R.record),R=R.parent;return{name:_,path:y,params:g,matched:k,meta:MS(k)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function kh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function PS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:xS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function xS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Dh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MS(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Oh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function zg(t,e){return e.children.some(n=>n===t||zg(t,n))}const Wg=/#/g,LS=/&/g,US=/\//g,FS=/=/g,VS=/\?/g,Gg=/\+/g,BS=/%5B/g,$S=/%5D/g,Qg=/%5E/g,jS=/%60/g,Xg=/%7B/g,qS=/%7C/g,Yg=/%7D/g,HS=/%20/g;function Cu(t){return encodeURI(""+t).replace(qS,"|").replace(BS,"[").replace($S,"]")}function KS(t){return Cu(t).replace(Xg,"{").replace(Yg,"}").replace(Qg,"^")}function ec(t){return Cu(t).replace(Gg,"%2B").replace(HS,"+").replace(Wg,"%23").replace(LS,"%26").replace(jS,"`").replace(Xg,"{").replace(Yg,"}").replace(Qg,"^")}function zS(t){return ec(t).replace(FS,"%3D")}function WS(t){return Cu(t).replace(Wg,"%23").replace(VS,"%3F")}function GS(t){return t==null?"":WS(t).replace(US,"%2F")}function Wi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function QS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Gg," "),o=i.indexOf("="),a=Wi(o<0?i:i.slice(0,o)),c=o<0?null:Wi(i.slice(o+1));if(a in e){let u=e[a];mt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Nh(t){let e="";for(let n in t){const s=t[n];if(n=zS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(mt(s)?s.map(i=>i&&ec(i)):[s&&ec(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function XS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=mt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const YS=Symbol(""),Ph=Symbol(""),Ru=Symbol(""),Jg=Symbol(""),tc=Symbol("");function Vs(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function en(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(As(4,{from:n,to:e})):h instanceof Error?a(h):IS(h)?a(As(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function ua(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(JS(a)){const u=(a.__vccOpts||a)[e];u&&r.push(en(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=iS(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&en(d,n,s,i,o)()}))}}return r}function JS(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xh(t){const e=Bt(Ru),n=Bt(Jg),s=ot(()=>e.resolve(os(t.to))),r=ot(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(Ss.bind(null,l));if(d>-1)return d;const g=Mh(c[u-2]);return u>1&&Mh(l)===g&&h[h.length-1].path!==g?h.findIndex(Ss.bind(null,c[u-2])):d}),i=ot(()=>r.value>-1&&nA(n.params,s.value.params)),o=ot(()=>r.value>-1&&r.value===n.matched.length-1&&jg(n.params,s.value.params));function a(c={}){return tA(c)?e[os(t.replace)?"replace":"push"](os(t.to)).catch(Zs):Promise.resolve()}return{route:s,href:ot(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const ZS=vf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xh,setup(t,{slots:e}){const n=Tr(xh(t)),{options:s}=Bt(Ru),r=ot(()=>({[Lh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Lh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Uf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),eA=ZS;function tA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nA(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!mt(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Mh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Lh=(t,e,n)=>t??e??n,sA=vf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Bt(tc),r=ot(()=>t.route||s.value),i=Bt(Ph,0),o=ot(()=>{let u=os(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=ot(()=>r.value.matched[o.value]);ci(Ph,ot(()=>o.value+1)),ci(YS,a),ci(tc,r);const c=Bm();return ui(()=>[c.value,a.value,t.name],([u,l,h],[d,g,y])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!Ss(l,g)||!d)&&(l.enterCallbacks[h]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Uh(n.default,{Component:d,route:u});const g=h.props[l],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=Uf(d,ae({},y,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Uh(n.default,{Component:k,route:u})||k}}});function Uh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rA=sA;function CA(t){const e=NS(t.routes,t),n=t.parseQuery||QS,s=t.stringifyQuery||Nh,r=t.history,i=Vs(),o=Vs(),a=Vs(),c=$m(Jt);let u=Jt;es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=aa.bind(null,w=>""+w),h=aa.bind(null,GS),d=aa.bind(null,Wi);function g(w,N){let D,F;return Hg(w)?(D=e.getRecordMatcher(w),F=N):F=w,e.addRoute(F,D)}function y(w){const N=e.getRecordMatcher(w);N&&e.removeRoute(N)}function _(){return e.getRoutes().map(w=>w.record)}function k(w){return!!e.getRecordMatcher(w)}function R(w,N){if(N=ae({},N||c.value),typeof w=="string"){const f=ca(n,w,N.path),p=e.resolve({path:f.path},N),m=r.createHref(f.fullPath);return ae(f,p,{params:d(p.params),hash:Wi(f.hash),redirectedFrom:void 0,href:m})}let D;if("path"in w)D=ae({},w,{path:ca(n,w.path,N.path).path});else{const f=ae({},w.params);for(const p in f)f[p]==null&&delete f[p];D=ae({},w,{params:h(w.params)}),N.params=h(N.params)}const F=e.resolve(D,N),ne=w.hash||"";F.params=l(d(F.params));const ye=cS(s,ae({},w,{hash:KS(ne),path:F.path})),J=r.createHref(ye);return ae({fullPath:ye,hash:ne,query:s===Nh?XS(w.query):w.query||{}},F,{redirectedFrom:void 0,href:J})}function P(w){return typeof w=="string"?ca(n,w,c.value.path):ae({},w)}function L(w,N){if(u!==w)return As(8,{from:N,to:w})}function Y(w){return Le(w)}function pe(w){return Y(ae(P(w),{replace:!0}))}function be(w){const N=w.matched[w.matched.length-1];if(N&&N.redirect){const{redirect:D}=N;let F=typeof D=="function"?D(w):D;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=P(F):{path:F},F.params={}),ae({query:w.query,hash:w.hash,params:"path"in F?{}:w.params},F)}}function Le(w,N){const D=u=R(w),F=c.value,ne=w.state,ye=w.force,J=w.replace===!0,f=be(D);if(f)return Le(ae(P(f),{state:typeof f=="object"?ae({},ne,f.state):ne,force:ye,replace:J}),N||D);const p=D;p.redirectedFrom=N;let m;return!ye&&uS(s,F,D)&&(m=As(16,{to:p,from:F}),En(F,F,!0,!1)),(m?Promise.resolve(m):yt(p,F)).catch(v=>xt(v)?xt(v,2)?v:ut(v):le(v,p,F)).then(v=>{if(v){if(xt(v,2))return Le(ae({replace:J},P(v.to),{state:typeof v.to=="object"?ae({},ne,v.to.state):ne,force:ye}),N||p)}else v=Qt(p,F,!0,J,ne);return it(p,F,v),v})}function ct(w,N){const D=L(w,N);return D?Promise.reject(D):Promise.resolve()}function yt(w,N){let D;const[F,ne,ye]=iA(w,N);D=ua(F.reverse(),"beforeRouteLeave",w,N);for(const f of F)f.leaveGuards.forEach(p=>{D.push(en(p,w,N))});const J=ct.bind(null,w,N);return D.push(J),Xn(D).then(()=>{D=[];for(const f of i.list())D.push(en(f,w,N));return D.push(J),Xn(D)}).then(()=>{D=ua(ne,"beforeRouteUpdate",w,N);for(const f of ne)f.updateGuards.forEach(p=>{D.push(en(p,w,N))});return D.push(J),Xn(D)}).then(()=>{D=[];for(const f of w.matched)if(f.beforeEnter&&!N.matched.includes(f))if(mt(f.beforeEnter))for(const p of f.beforeEnter)D.push(en(p,w,N));else D.push(en(f.beforeEnter,w,N));return D.push(J),Xn(D)}).then(()=>(w.matched.forEach(f=>f.enterCallbacks={}),D=ua(ye,"beforeRouteEnter",w,N),D.push(J),Xn(D))).then(()=>{D=[];for(const f of o.list())D.push(en(f,w,N));return D.push(J),Xn(D)}).catch(f=>xt(f,8)?f:Promise.reject(f))}function it(w,N,D){for(const F of a.list())F(w,N,D)}function Qt(w,N,D,F,ne){const ye=L(w,N);if(ye)return ye;const J=N===Jt,f=es?history.state:{};D&&(F||J?r.replace(w.fullPath,ae({scroll:J&&f&&f.scroll},ne)):r.push(w.fullPath,ne)),c.value=w,En(w,N,D,J),ut()}let vt;function zn(){vt||(vt=r.listen((w,N,D)=>{if(!zr.listening)return;const F=R(w),ne=be(F);if(ne){Le(ae(ne,{replace:!0}),F).catch(Zs);return}u=F;const ye=c.value;es&&yS(bh(ye.fullPath,D.delta),Fo()),yt(F,ye).catch(J=>xt(J,12)?J:xt(J,2)?(Le(J.to,F).then(f=>{xt(f,20)&&!D.delta&&D.type===Ir.pop&&r.go(-1,!1)}).catch(Zs),Promise.reject()):(D.delta&&r.go(-D.delta,!1),le(J,F,ye))).then(J=>{J=J||Qt(F,ye,!1),J&&(D.delta&&!xt(J,8)?r.go(-D.delta,!1):D.type===Ir.pop&&xt(J,20)&&r.go(-1,!1)),it(F,ye,J)}).catch(Zs)}))}let wn=Vs(),Ms=Vs(),Ee;function le(w,N,D){ut(w);const F=Ms.list();return F.length?F.forEach(ne=>ne(w,N,D)):console.error(w),Promise.reject(w)}function ce(){return Ee&&c.value!==Jt?Promise.resolve():new Promise((w,N)=>{wn.add([w,N])})}function ut(w){return Ee||(Ee=!w,zn(),wn.list().forEach(([N,D])=>w?D(w):N()),wn.reset()),w}function En(w,N,D,F){const{scrollBehavior:ne}=t;if(!es||!ne)return Promise.resolve();const ye=!D&&vS(bh(w.fullPath,0))||(F||!D)&&history.state&&history.state.scroll||null;return lf().then(()=>ne(w,N,ye)).then(J=>J&&mS(J)).catch(J=>le(J,w,N))}const lt=w=>r.go(w);let Qe;const Wn=new Set,zr={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:k,getRoutes:_,resolve:R,options:t,push:Y,replace:pe,go:lt,back:()=>lt(-1),forward:()=>lt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ms.add,isReady:ce,install(w){const N=this;w.component("RouterLink",eA),w.component("RouterView",rA),w.config.globalProperties.$router=N,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>os(c)}),es&&!Qe&&c.value===Jt&&(Qe=!0,Y(r.location).catch(ne=>{}));const D={};for(const ne in Jt)D[ne]=ot(()=>c.value[ne]);w.provide(Ru,N),w.provide(Jg,Tr(D)),w.provide(tc,c);const F=w.unmount;Wn.add(w),w.unmount=function(){Wn.delete(w),Wn.size<1&&(u=Jt,vt&&vt(),vt=null,c.value=Jt,Qe=!1,Ee=!1),F()}}};return zr}function Xn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function iA(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ss(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ss(u,c))||r.push(c))}return[n,s,r]}export{ui as A,lA as B,EA as C,Lt as F,nn as G,bA as K,IA as O,TA as U,dA as a,xf as b,hA as c,fA as d,Tr as e,_A as f,vA as g,vf as h,$w as i,cA as j,Vy as k,Je as l,yA as m,jy as n,Uy as o,CA as p,AA as q,uA as r,mA as s,oA as t,os as u,gA as v,aA as w,SA as x,pA as y,Bm as z};
