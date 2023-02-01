function _u(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function Su(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Oe(r)?Yv(r):Su(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Oe(t))return t;if(Ee(t))return t}}const Wv=/;(?![^(]*\))/g,Qv=/:([^]+)/,Xv=/\/\*.*?\*\//gs;function Yv(t){const e={};return t.replace(Xv,"").split(Wv).forEach(n=>{if(n){const r=n.split(Qv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Au(t){let e="";if(Oe(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const r=Au(t[n]);r&&(e+=r+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Jv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Zv=_u(Jv);function Vf(t){return!!t||t===""}const lD=t=>Oe(t)?t:t==null?"":X(t)||Ee(t)&&(t.toString===qf||!Z(t.toString))?JSON.stringify(t,Bf,2):String(t),Bf=(t,e)=>e&&e.__v_isRef?Bf(t,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:$f(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!X(e)&&!Kf(e)?String(e):e,Ie={},Fr=[],At=()=>{},ew=()=>!1,tw=/^on[^a-z]/,ta=t=>tw.test(t),Cu=t=>t.startsWith("onUpdate:"),tt=Object.assign,ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nw=Object.prototype.hasOwnProperty,ce=(t,e)=>nw.call(t,e),X=Array.isArray,Ur=t=>na(t)==="[object Map]",$f=t=>na(t)==="[object Set]",Z=t=>typeof t=="function",Oe=t=>typeof t=="string",xu=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",jf=t=>Ee(t)&&Z(t.then)&&Z(t.catch),qf=Object.prototype.toString,na=t=>qf.call(t),rw=t=>na(t).slice(8,-1),Kf=t=>na(t)==="[object Object]",Du=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,io=_u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sw=/-(\w)/g,Kt=ra(t=>t.replace(sw,(e,n)=>n?n.toUpperCase():"")),iw=/\B([A-Z])/g,cs=ra(t=>t.replace(iw,"-$1").toLowerCase()),sa=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ja=ra(t=>t?`on${sa(t)}`:""),Hs=(t,e)=>!Object.is(t,e),oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},To=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},_o=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let sh;const ow=()=>sh||(sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pt;class aw{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Pt,!e&&Pt&&(this.index=(Pt.scopes||(Pt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pt;try{return Pt=this,e()}finally{Pt=n}}}on(){Pt=this}off(){Pt=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this.active=!1}}}function cw(t,e=Pt){e&&e.active&&e.effects.push(t)}const Ru=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hf=t=>(t.w&xn)>0,zf=t=>(t.n&xn)>0,uw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=xn},lw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Hf(s)&&!zf(s)?s.delete(t):e[n++]=s,s.w&=~xn,s.n&=~xn}e.length=n}},_c=new WeakMap;let ks=0,xn=1;const Sc=30;let _t;const nr=Symbol(""),Ac=Symbol("");class Nu{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cw(this,r)}run(){if(!this.active)return this.fn();let e=_t,n=_n;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_t,_t=this,_n=!0,xn=1<<++ks,ks<=Sc?uw(this):ih(this),this.fn()}finally{ks<=Sc&&lw(this),xn=1<<--ks,_t=this.parent,_n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_t===this?this.deferStop=!0:this.active&&(ih(this),this.onStop&&this.onStop(),this.active=!1)}}function ih(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let _n=!0;const Gf=[];function us(){Gf.push(_n),_n=!1}function ls(){const t=Gf.pop();_n=t===void 0?!0:t}function pt(t,e,n){if(_n&&_t){let r=_c.get(t);r||_c.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ru()),Wf(s)}}function Wf(t,e){let n=!1;ks<=Sc?zf(t)||(t.n|=xn,n=!Hf(t)):n=!t.has(_t),n&&(t.add(_t),_t.deps.push(t))}function nn(t,e,n,r,s,i){const o=_c.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&X(t)){const c=_o(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":X(t)?Du(n)&&a.push(o.get("length")):(a.push(o.get(nr)),Ur(t)&&a.push(o.get(Ac)));break;case"delete":X(t)||(a.push(o.get(nr)),Ur(t)&&a.push(o.get(Ac)));break;case"set":Ur(t)&&a.push(o.get(nr));break}if(a.length===1)a[0]&&Cc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Cc(Ru(c))}}function Cc(t,e){const n=X(t)?t:[...t];for(const r of n)r.computed&&oh(r);for(const r of n)r.computed||oh(r)}function oh(t,e){(t!==_t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const hw=_u("__proto__,__v_isRef,__isVue"),Qf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xu)),dw=Ou(),fw=Ou(!1,!0),pw=Ou(!0),ah=gw();function gw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)pt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){us();const r=le(this)[e].apply(this,n);return ls(),r}}),t}function Ou(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Rw:ep:e?Zf:Jf).get(r))return r;const o=X(r);if(!t&&o&&ce(ah,s))return Reflect.get(ah,s,i);const a=Reflect.get(r,s,i);return(xu(s)?Qf.has(s):hw(s))||(t||pt(r,"get",s),e)?a:Ge(a)?o&&Du(s)?a:a.value:Ee(a)?t?tp(a):yi(a):a}}const mw=Xf(),yw=Xf(!0);function Xf(t=!1){return function(n,r,s,i){let o=n[r];if(zr(o)&&Ge(o)&&!Ge(s))return!1;if(!t&&(!So(s)&&!zr(s)&&(o=le(o),s=le(s)),!X(n)&&Ge(o)&&!Ge(s)))return o.value=s,!0;const a=X(n)&&Du(r)?Number(r)<n.length:ce(n,r),c=Reflect.set(n,r,s,i);return n===le(i)&&(a?Hs(s,o)&&nn(n,"set",r,s):nn(n,"add",r,s)),c}}function vw(t,e){const n=ce(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&nn(t,"delete",e,void 0),r}function ww(t,e){const n=Reflect.has(t,e);return(!xu(e)||!Qf.has(e))&&pt(t,"has",e),n}function Iw(t){return pt(t,"iterate",X(t)?"length":nr),Reflect.ownKeys(t)}const Yf={get:dw,set:mw,deleteProperty:vw,has:ww,ownKeys:Iw},bw={get:pw,set(t,e){return!0},deleteProperty(t,e){return!0}},Ew=tt({},Yf,{get:fw,set:yw}),Pu=t=>t,ia=t=>Reflect.getPrototypeOf(t);function $i(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(e!==i&&pt(s,"get",e),pt(s,"get",i));const{has:o}=ia(s),a=r?Pu:n?Fu:zs;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ji(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(t!==s&&pt(r,"has",t),pt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function qi(t,e=!1){return t=t.__v_raw,!e&&pt(le(t),"iterate",nr),Reflect.get(t,"size",t)}function ch(t){t=le(t);const e=le(this);return ia(e).has.call(e,t)||(e.add(t),nn(e,"add",t,t)),this}function uh(t,e){e=le(e);const n=le(this),{has:r,get:s}=ia(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Hs(e,o)&&nn(n,"set",t,e):nn(n,"add",t,e),this}function lh(t){const e=le(this),{has:n,get:r}=ia(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&nn(e,"delete",t,void 0),i}function hh(){const t=le(this),e=t.size!==0,n=t.clear();return e&&nn(t,"clear",void 0,void 0),n}function Ki(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?Pu:t?Fu:zs;return!t&&pt(a,"iterate",nr),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Hi(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=Ur(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=s[t](...r),l=n?Pu:e?Fu:zs;return!e&&pt(i,"iterate",c?Ac:nr),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function hn(t){return function(...e){return t==="delete"?!1:this}}function Tw(){const t={get(i){return $i(this,i)},get size(){return qi(this)},has:ji,add:ch,set:uh,delete:lh,clear:hh,forEach:Ki(!1,!1)},e={get(i){return $i(this,i,!1,!0)},get size(){return qi(this)},has:ji,add:ch,set:uh,delete:lh,clear:hh,forEach:Ki(!1,!0)},n={get(i){return $i(this,i,!0)},get size(){return qi(this,!0)},has(i){return ji.call(this,i,!0)},add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear"),forEach:Ki(!0,!1)},r={get(i){return $i(this,i,!0,!0)},get size(){return qi(this,!0)},has(i){return ji.call(this,i,!0)},add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear"),forEach:Ki(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Hi(i,!1,!1),n[i]=Hi(i,!0,!1),e[i]=Hi(i,!1,!0),r[i]=Hi(i,!0,!0)}),[t,n,e,r]}const[_w,Sw,Aw,Cw]=Tw();function Mu(t,e){const n=e?t?Cw:Aw:t?Sw:_w;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const kw={get:Mu(!1,!1)},xw={get:Mu(!1,!0)},Dw={get:Mu(!0,!1)},Jf=new WeakMap,Zf=new WeakMap,ep=new WeakMap,Rw=new WeakMap;function Nw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ow(t){return t.__v_skip||!Object.isExtensible(t)?0:Nw(rw(t))}function yi(t){return zr(t)?t:Lu(t,!1,Yf,kw,Jf)}function Pw(t){return Lu(t,!1,Ew,xw,Zf)}function tp(t){return Lu(t,!0,bw,Dw,ep)}function Lu(t,e,n,r,s){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Ow(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Vr(t){return zr(t)?Vr(t.__v_raw):!!(t&&t.__v_isReactive)}function zr(t){return!!(t&&t.__v_isReadonly)}function So(t){return!!(t&&t.__v_isShallow)}function np(t){return Vr(t)||zr(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function rp(t){return To(t,"__v_skip",!0),t}const zs=t=>Ee(t)?yi(t):t,Fu=t=>Ee(t)?tp(t):t;function sp(t){_n&&_t&&(t=le(t),Wf(t.dep||(t.dep=Ru())))}function ip(t,e){t=le(t),t.dep&&Cc(t.dep)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function Mw(t){return op(t,!1)}function Lw(t){return op(t,!0)}function op(t,e){return Ge(t)?t:new Fw(t,e)}class Fw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:zs(e)}get value(){return sp(this),this._value}set value(e){const n=this.__v_isShallow||So(e)||zr(e);e=n?e:le(e),Hs(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zs(e),ip(this))}}function Br(t){return Ge(t)?t.value:t}const Uw={get:(t,e,n)=>Br(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ge(s)&&!Ge(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ap(t){return Vr(t)?t:new Proxy(t,Uw)}var cp;class Vw{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[cp]=!1,this._dirty=!0,this.effect=new Nu(e,()=>{this._dirty||(this._dirty=!0,ip(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return sp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}cp="__v_isReadonly";function Bw(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=At):(r=t.get,s=t.set),new Vw(r,s,i||!s,n)}function Sn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){oa(i,e,n)}return s}function Ct(t,e,n,r){if(Z(t)){const i=Sn(t,e,n,r);return i&&jf(i)&&i.catch(o=>{oa(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ct(t[i],e,n,r));return s}function oa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Sn(c,null,10,[t,o,a]);return}}$w(t,n,s,r)}function $w(t,e,n,r=!0){console.error(t)}let Gs=!1,kc=!1;const He=[];let Ft=0;const $r=[];let Wt=null,Gn=0;const up=Promise.resolve();let Uu=null;function lp(t){const e=Uu||up;return t?e.then(this?t.bind(this):t):e}function jw(t){let e=Ft+1,n=He.length;for(;e<n;){const r=e+n>>>1;Ws(He[r])<t?e=r+1:n=r}return e}function Vu(t){(!He.length||!He.includes(t,Gs&&t.allowRecurse?Ft+1:Ft))&&(t.id==null?He.push(t):He.splice(jw(t.id),0,t),hp())}function hp(){!Gs&&!kc&&(kc=!0,Uu=up.then(fp))}function qw(t){const e=He.indexOf(t);e>Ft&&He.splice(e,1)}function Kw(t){X(t)?$r.push(...t):(!Wt||!Wt.includes(t,t.allowRecurse?Gn+1:Gn))&&$r.push(t),hp()}function dh(t,e=Gs?Ft+1:0){for(;e<He.length;e++){const n=He[e];n&&n.pre&&(He.splice(e,1),e--,n())}}function dp(t){if($r.length){const e=[...new Set($r)];if($r.length=0,Wt){Wt.push(...e);return}for(Wt=e,Wt.sort((n,r)=>Ws(n)-Ws(r)),Gn=0;Gn<Wt.length;Gn++)Wt[Gn]();Wt=null,Gn=0}}const Ws=t=>t.id==null?1/0:t.id,Hw=(t,e)=>{const n=Ws(t)-Ws(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function fp(t){kc=!1,Gs=!0,He.sort(Hw);const e=At;try{for(Ft=0;Ft<He.length;Ft++){const n=He[Ft];n&&n.active!==!1&&Sn(n,null,14)}}finally{Ft=0,He.length=0,dp(),Gs=!1,Uu=null,(He.length||$r.length)&&fp()}}function zw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Ie;d&&(s=n.map(g=>Oe(g)?g.trim():g)),h&&(s=n.map(_o))}let a,c=r[a=Ja(e)]||r[a=Ja(Kt(e))];!c&&i&&(c=r[a=Ja(cs(e))]),c&&Ct(c,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ct(u,t,6,s)}}function pp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=u=>{const l=pp(u,e,!0);l&&(a=!0,tt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&r.set(t,null),null):(X(i)?i.forEach(c=>o[c]=null):tt(o,i),Ee(t)&&r.set(t,o),o)}function aa(t,e){return!t||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,cs(e))||ce(t,e))}let wt=null,gp=null;function Ao(t){const e=wt;return wt=t,gp=t&&t.type.__scopeId||null,e}function Gw(t,e=wt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&bh(-1);const i=Ao(e);let o;try{o=t(...s)}finally{Ao(i),r._d&&bh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Za(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:I}=t;let k,A;const L=Ao(t);try{if(n.shapeFlag&4){const z=s||r;k=Lt(l.call(z,z,h,i,g,d,y)),A=c}else{const z=e;k=Lt(z.length>1?z(i,{attrs:c,slots:a,emit:u}):z(i,null)),A=e.props?c:Ww(c)}}catch(z){Ps.length=0,oa(z,t,1),k=at(ar)}let D=k;if(A&&I!==!1){const z=Object.keys(A),{shapeFlag:ee}=D;z.length&&ee&7&&(o&&z.some(Cu)&&(A=Qw(A,o)),D=Gr(D,A))}return n.dirs&&(D=Gr(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),k=D,Ao(L),k}const Ww=t=>{let e;for(const n in t)(n==="class"||n==="style"||ta(n))&&((e||(e={}))[n]=t[n]);return e},Qw=(t,e)=>{const n={};for(const r in t)(!Cu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Xw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?fh(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!aa(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?fh(r,o,u):!0:!!o;return!1}function fh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!aa(n,i))return!0}return!1}function Yw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Jw=t=>t.__isSuspense;function Zw(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):Kw(t)}function ao(t,e){if($e){let n=$e.provides;const r=$e.parent&&$e.parent.provides;r===n&&(n=$e.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=$e||wt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r.proxy):e}}const zi={};function co(t,e,n){return mp(t,e,n)}function mp(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=Ie){const a=$e;let c,u=!1,l=!1;if(Ge(t)?(c=()=>t.value,u=So(t)):Vr(t)?(c=()=>t,r=!0):X(t)?(l=!0,u=t.some(D=>Vr(D)||So(D)),c=()=>t.map(D=>{if(Ge(D))return D.value;if(Vr(D))return Zn(D);if(Z(D))return Sn(D,a,2)})):Z(t)?e?c=()=>Sn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ct(t,a,3,[d])}:c=At,e&&r){const D=c;c=()=>Zn(D())}let h,d=D=>{h=A.onStop=()=>{Sn(D,a,4)}},g;if(Xs)if(d=At,e?n&&Ct(e,a,3,[c(),l?[]:void 0,d]):c(),s==="sync"){const D=QI();g=D.__watcherHandles||(D.__watcherHandles=[])}else return At;let y=l?new Array(t.length).fill(zi):zi;const I=()=>{if(A.active)if(e){const D=A.run();(r||u||(l?D.some((z,ee)=>Hs(z,y[ee])):Hs(D,y)))&&(h&&h(),Ct(e,a,3,[D,y===zi?void 0:l&&y[0]===zi?[]:y,d]),y=D)}else A.run()};I.allowRecurse=!!e;let k;s==="sync"?k=I:s==="post"?k=()=>it(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),k=()=>Vu(I));const A=new Nu(c,k);e?n?I():y=A.run():s==="post"?it(A.run.bind(A),a&&a.suspense):A.run();const L=()=>{A.stop(),a&&a.scope&&ku(a.scope.effects,A)};return g&&g.push(L),L}function eI(t,e,n){const r=this.proxy,s=Oe(t)?t.includes(".")?yp(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=$e;Wr(this);const a=mp(s,i.bind(r),n);return o?Wr(o):rr(),a}function yp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Zn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Zn(t.value,e);else if(X(t))for(let n=0;n<t.length;n++)Zn(t[n],e);else if($f(t)||Ur(t))t.forEach(n=>{Zn(n,e)});else if(Kf(t))for(const n in t)Zn(t[n],e);return t}function vp(t){return Z(t)?{setup:t,name:t.name}:t}const uo=t=>!!t.type.__asyncLoader,wp=t=>t.type.__isKeepAlive;function tI(t,e){Ip(t,"a",e)}function nI(t,e){Ip(t,"da",e)}function Ip(t,e,n=$e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ca(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wp(s.parent.vnode)&&rI(r,e,n,s),s=s.parent}}function rI(t,e,n,r){const s=ca(e,t,r,!0);bp(()=>{ku(r[e],s)},n)}function ca(t,e,n=$e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;us(),Wr(n);const a=Ct(e,n,t,o);return rr(),ls(),a});return r?s.unshift(i):s.push(i),i}}const an=t=>(e,n=$e)=>(!Xs||t==="sp")&&ca(t,(...r)=>e(...r),n),sI=an("bm"),iI=an("m"),oI=an("bu"),aI=an("u"),cI=an("bum"),bp=an("um"),uI=an("sp"),lI=an("rtg"),hI=an("rtc");function dI(t,e=$e){ca("ec",t,e)}function hD(t,e){const n=wt;if(n===null)return t;const r=ha(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Ie]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Zn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function $n(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(us(),Ct(c,n,8,[t.el,a,t,e]),ls())}}const Ep="components",fI="directives";function dD(t,e){return Tp(Ep,t,!0,e)||t}const pI=Symbol();function fD(t){return Tp(fI,t)}function Tp(t,e,n=!0,r=!1){const s=wt||$e;if(s){const i=s.type;if(t===Ep){const a=zI(i,!1);if(a&&(a===e||a===Kt(e)||a===sa(Kt(e))))return i}const o=ph(s[t]||i[t],e)||ph(s.appContext[t],e);return!o&&r?i:o}}function ph(t,e){return t&&(t[e]||t[Kt(e)]||t[sa(Kt(e))])}function pD(t,e,n,r){let s;const i=n&&n[r];if(X(t)||Oe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(t[u],u,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const xc=t=>t?Mp(t)?ha(t)||t.proxy:xc(t.parent):null,Os=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xc(t.parent),$root:t=>xc(t.root),$emit:t=>t.emit,$options:t=>Bu(t),$forceUpdate:t=>t.f||(t.f=()=>Vu(t.update)),$nextTick:t=>t.n||(t.n=lp.bind(t.proxy)),$watch:t=>eI.bind(t)}),ec=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ce(t,e),gI={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ec(r,e))return o[e]=1,r[e];if(s!==Ie&&ce(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&ce(u,e))return o[e]=3,i[e];if(n!==Ie&&ce(n,e))return o[e]=4,n[e];Dc&&(o[e]=0)}}const l=Os[e];let h,d;if(l)return e==="$attrs"&&pt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ec(s,e)?(s[e]=n,!0):r!==Ie&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ce(t,o)||ec(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(Os,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Dc=!0;function mI(t){const e=Bu(t),n=t.proxy,r=t.ctx;Dc=!1,e.beforeCreate&&gh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:I,deactivated:k,beforeDestroy:A,beforeUnmount:L,destroyed:D,unmounted:z,render:ee,renderTracked:te,renderTriggered:de,errorCaptured:Ue,serverPrefetch:Dt,expose:yt,inheritAttrs:ln,components:Rt,directives:Er,filters:Vn}=e;if(u&&yI(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const ve in o){const fe=o[ve];Z(fe)&&(r[ve]=fe.bind(n))}if(s){const ve=s.call(n,n);Ee(ve)&&(t.data=yi(ve))}if(Dc=!0,i)for(const ve in i){const fe=i[ve],bt=Z(fe)?fe.bind(n,n):Z(fe.get)?fe.get.bind(n,n):At,Bn=!Z(fe)&&Z(fe.set)?fe.set.bind(n):At,Et=vt({get:bt,set:Bn});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Et.value,set:st=>Et.value=st})}if(a)for(const ve in a)_p(a[ve],r,n,ve);if(c){const ve=Z(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(fe=>{ao(fe,ve[fe])})}l&&gh(l,t,"c");function ke(ve,fe){X(fe)?fe.forEach(bt=>ve(bt.bind(n))):fe&&ve(fe.bind(n))}if(ke(sI,h),ke(iI,d),ke(oI,g),ke(aI,y),ke(tI,I),ke(nI,k),ke(dI,Ue),ke(hI,te),ke(lI,de),ke(cI,L),ke(bp,z),ke(uI,Dt),X(yt))if(yt.length){const ve=t.exposed||(t.exposed={});yt.forEach(fe=>{Object.defineProperty(ve,fe,{get:()=>n[fe],set:bt=>n[fe]=bt})})}else t.exposed||(t.exposed={});ee&&t.render===At&&(t.render=ee),ln!=null&&(t.inheritAttrs=ln),Rt&&(t.components=Rt),Er&&(t.directives=Er)}function yI(t,e,n=At,r=!1){X(t)&&(t=Rc(t));for(const s in t){const i=t[s];let o;Ee(i)?"default"in i?o=en(i.from||s,i.default,!0):o=en(i.from||s):o=en(i),Ge(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function gh(t,e,n){Ct(X(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function _p(t,e,n,r){const s=r.includes(".")?yp(n,r):()=>n[r];if(Oe(t)){const i=e[t];Z(i)&&co(s,i)}else if(Z(t))co(s,t.bind(n));else if(Ee(t))if(X(t))t.forEach(i=>_p(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&co(s,i,t)}}function Bu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Co(c,u,o,!0)),Co(c,e,o)),Ee(e)&&i.set(e,c),c}function Co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Co(t,i,n,!0),s&&s.forEach(o=>Co(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=vI[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const vI={data:mh,props:Kn,emits:Kn,methods:Kn,computed:Kn,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Kn,directives:Kn,watch:II,provide:mh,inject:wI};function mh(t,e){return e?t?function(){return tt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function wI(t,e){return Kn(Rc(t),Rc(e))}function Rc(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function Kn(t,e){return t?tt(tt(Object.create(null),t),e):e}function II(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=Xe(t[r],e[r]);return n}function bI(t,e,n,r=!1){const s={},i={};To(i,la,1),t.propsDefaults=Object.create(null),Sp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Pw(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function EI(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(aa(t.emitsOptions,d))continue;const g=e[d];if(c)if(ce(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const y=Kt(d);s[y]=Nc(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{Sp(t,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!ce(e,h)&&((l=cs(h))===h||!ce(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(s[h]=Nc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],u=!0)}u&&nn(t,"set","$attrs")}function Sp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(io(c))continue;const u=e[c];let l;s&&ce(s,l=Kt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:aa(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=le(n),u=a||Ie;for(let l=0;l<i.length;l++){const h=i[l];n[h]=Nc(s,c,h,u[h],t,!ce(u,h))}}return o}function Nc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:u}=s;n in u?r=u[n]:(Wr(s),r=u[n]=c.call(null,e),rr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===cs(n))&&(r=!0))}return r}function Ap(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const l=h=>{c=!0;const[d,g]=Ap(h,e,!0);tt(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ee(t)&&r.set(t,Fr),Fr;if(X(i))for(let l=0;l<i.length;l++){const h=Kt(i[l]);yh(h)&&(o[h]=Ie)}else if(i)for(const l in i){const h=Kt(l);if(yh(h)){const d=i[l],g=o[h]=X(d)||Z(d)?{type:d}:Object.assign({},d);if(g){const y=Ih(Boolean,g.type),I=Ih(String,g.type);g[0]=y>-1,g[1]=I<0||y<I,(y>-1||ce(g,"default"))&&a.push(h)}}}const u=[o,a];return Ee(t)&&r.set(t,u),u}function yh(t){return t[0]!=="$"}function vh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function wh(t,e){return vh(t)===vh(e)}function Ih(t,e){return X(e)?e.findIndex(n=>wh(n,t)):Z(e)&&wh(e,t)?0:-1}const Cp=t=>t[0]==="_"||t==="$stable",$u=t=>X(t)?t.map(Lt):[Lt(t)],TI=(t,e,n)=>{if(e._n)return e;const r=Gw((...s)=>$u(e(...s)),n);return r._c=!1,r},kp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Cp(s))continue;const i=t[s];if(Z(i))e[s]=TI(s,i,r);else if(i!=null){const o=$u(i);e[s]=()=>o}}},xp=(t,e)=>{const n=$u(e);t.slots.default=()=>n},_I=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),To(e,"_",n)):kp(e,t.slots={})}else t.slots={},e&&xp(t,e);To(t.slots,la,1)},SI=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(tt(s,e),!n&&a===1&&delete s._):(i=!e.$stable,kp(e,s)),o=e}else e&&(xp(t,e),o={default:1});if(i)for(const a in s)!Cp(a)&&!(a in o)&&delete s[a]};function Dp(){return{app:null,config:{isNativeTag:ew,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let AI=0;function CI(t,e){return function(r,s=null){Z(r)||(r=Object.assign({},r)),s!=null&&!Ee(s)&&(s=null);const i=Dp(),o=new Set;let a=!1;const c=i.app={_uid:AI++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:XI,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Z(u.install)?(o.add(u),u.install(c,...l)):Z(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=at(r,s);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,ha(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Oc(t,e,n,r,s=!1){if(X(t)){t.forEach((d,g)=>Oc(d,e&&(X(e)?e[g]:e),n,r,s));return}if(uo(r)&&!s)return;const i=r.shapeFlag&4?ha(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Oe(u)?(l[u]=null,ce(h,u)&&(h[u]=null)):Ge(u)&&(u.value=null)),Z(c))Sn(c,a,12,[o,l]);else{const d=Oe(c),g=Ge(c);if(d||g){const y=()=>{if(t.f){const I=d?ce(h,c)?h[c]:l[c]:c.value;s?X(I)&&ku(I,i):X(I)?I.includes(i)||I.push(i):d?(l[c]=[i],ce(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ce(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,it(y,n)):y()}}}const it=Zw;function kI(t){return xI(t)}function xI(t,e){const n=ow();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:g=At,insertStaticContent:y}=t,I=(f,p,v,w=null,E=null,x=null,P=!1,C=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!ws(f,p)&&(w=N(f),st(f,E,x,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:_,ref:q,shapeFlag:F}=p;switch(_){case ua:k(f,p,v,w);break;case ar:A(f,p,v,w);break;case lo:f==null&&L(p,v,w,P);break;case Qt:Rt(f,p,v,w,E,x,P,C,R);break;default:F&1?ee(f,p,v,w,E,x,P,C,R):F&6?Er(f,p,v,w,E,x,P,C,R):(F&64||F&128)&&_.process(f,p,v,w,E,x,P,C,R,ae)}q!=null&&E&&Oc(q,f&&f.ref,x,p||f,!p)},k=(f,p,v,w)=>{if(f==null)r(p.el=a(p.children),v,w);else{const E=p.el=f.el;p.children!==f.children&&u(E,p.children)}},A=(f,p,v,w)=>{f==null?r(p.el=c(p.children||""),v,w):p.el=f.el},L=(f,p,v,w)=>{[f.el,f.anchor]=y(f.children,p,v,w,f.el,f.anchor)},D=({el:f,anchor:p},v,w)=>{let E;for(;f&&f!==p;)E=d(f),r(f,v,w),f=E;r(p,v,w)},z=({el:f,anchor:p})=>{let v;for(;f&&f!==p;)v=d(f),s(f),f=v;s(p)},ee=(f,p,v,w,E,x,P,C,R)=>{P=P||p.type==="svg",f==null?te(p,v,w,E,x,P,C,R):Dt(f,p,E,x,P,C,R)},te=(f,p,v,w,E,x,P,C)=>{let R,_;const{type:q,props:F,shapeFlag:K,transition:Q,dirs:se}=f;if(R=f.el=o(f.type,x,F&&F.is,F),K&8?l(R,f.children):K&16&&Ue(f.children,R,null,w,E,x&&q!=="foreignObject",P,C),se&&$n(f,null,w,"created"),F){for(const pe in F)pe!=="value"&&!io(pe)&&i(R,pe,null,F[pe],x,f.children,w,E,M);"value"in F&&i(R,"value",null,F.value),(_=F.onVnodeBeforeMount)&&Ot(_,w,f)}de(R,f,f.scopeId,P,w),se&&$n(f,null,w,"beforeMount");const we=(!E||E&&!E.pendingBranch)&&Q&&!Q.persisted;we&&Q.beforeEnter(R),r(R,p,v),((_=F&&F.onVnodeMounted)||we||se)&&it(()=>{_&&Ot(_,w,f),we&&Q.enter(R),se&&$n(f,null,w,"mounted")},E)},de=(f,p,v,w,E)=>{if(v&&g(f,v),w)for(let x=0;x<w.length;x++)g(f,w[x]);if(E){let x=E.subTree;if(p===x){const P=E.vnode;de(f,P,P.scopeId,P.slotScopeIds,E.parent)}}},Ue=(f,p,v,w,E,x,P,C,R=0)=>{for(let _=R;_<f.length;_++){const q=f[_]=C?mn(f[_]):Lt(f[_]);I(null,q,p,v,w,E,x,P,C)}},Dt=(f,p,v,w,E,x,P)=>{const C=p.el=f.el;let{patchFlag:R,dynamicChildren:_,dirs:q}=p;R|=f.patchFlag&16;const F=f.props||Ie,K=p.props||Ie;let Q;v&&jn(v,!1),(Q=K.onVnodeBeforeUpdate)&&Ot(Q,v,p,f),q&&$n(p,f,v,"beforeUpdate"),v&&jn(v,!0);const se=E&&p.type!=="foreignObject";if(_?yt(f.dynamicChildren,_,C,v,w,se,x):P||fe(f,p,C,null,v,w,se,x,!1),R>0){if(R&16)ln(C,p,F,K,v,w,E);else if(R&2&&F.class!==K.class&&i(C,"class",null,K.class,E),R&4&&i(C,"style",F.style,K.style,E),R&8){const we=p.dynamicProps;for(let pe=0;pe<we.length;pe++){const xe=we[pe],Tt=F[xe],_r=K[xe];(_r!==Tt||xe==="value")&&i(C,xe,Tt,_r,E,f.children,v,w,M)}}R&1&&f.children!==p.children&&l(C,p.children)}else!P&&_==null&&ln(C,p,F,K,v,w,E);((Q=K.onVnodeUpdated)||q)&&it(()=>{Q&&Ot(Q,v,p,f),q&&$n(p,f,v,"updated")},w)},yt=(f,p,v,w,E,x,P)=>{for(let C=0;C<p.length;C++){const R=f[C],_=p[C],q=R.el&&(R.type===Qt||!ws(R,_)||R.shapeFlag&70)?h(R.el):v;I(R,_,q,null,w,E,x,P,!0)}},ln=(f,p,v,w,E,x,P)=>{if(v!==w){if(v!==Ie)for(const C in v)!io(C)&&!(C in w)&&i(f,C,v[C],null,P,p.children,E,x,M);for(const C in w){if(io(C))continue;const R=w[C],_=v[C];R!==_&&C!=="value"&&i(f,C,_,R,P,p.children,E,x,M)}"value"in w&&i(f,"value",v.value,w.value)}},Rt=(f,p,v,w,E,x,P,C,R)=>{const _=p.el=f?f.el:a(""),q=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:K,slotScopeIds:Q}=p;Q&&(C=C?C.concat(Q):Q),f==null?(r(_,v,w),r(q,v,w),Ue(p.children,v,q,E,x,P,C,R)):F>0&&F&64&&K&&f.dynamicChildren?(yt(f.dynamicChildren,K,v,E,x,P,C),(p.key!=null||E&&p===E.subTree)&&Rp(f,p,!0)):fe(f,p,v,q,E,x,P,C,R)},Er=(f,p,v,w,E,x,P,C,R)=>{p.slotScopeIds=C,f==null?p.shapeFlag&512?E.ctx.activate(p,v,w,P,R):Vn(p,v,w,E,x,P,R):ys(f,p,R)},Vn=(f,p,v,w,E,x,P)=>{const C=f.component=$I(f,w,E);if(wp(f)&&(C.ctx.renderer=ae),jI(C),C.asyncDep){if(E&&E.registerDep(C,ke),!f.el){const R=C.subTree=at(ar);A(null,R,p,v)}return}ke(C,f,p,v,E,x,P)},ys=(f,p,v)=>{const w=p.component=f.component;if(Xw(f,p,v))if(w.asyncDep&&!w.asyncResolved){ve(w,p,v);return}else w.next=p,qw(w.update),w.update();else p.el=f.el,w.vnode=p},ke=(f,p,v,w,E,x,P)=>{const C=()=>{if(f.isMounted){let{next:q,bu:F,u:K,parent:Q,vnode:se}=f,we=q,pe;jn(f,!1),q?(q.el=se.el,ve(f,q,P)):q=se,F&&oo(F),(pe=q.props&&q.props.onVnodeBeforeUpdate)&&Ot(pe,Q,q,se),jn(f,!0);const xe=Za(f),Tt=f.subTree;f.subTree=xe,I(Tt,xe,h(Tt.el),N(Tt),f,E,x),q.el=xe.el,we===null&&Yw(f,xe.el),K&&it(K,E),(pe=q.props&&q.props.onVnodeUpdated)&&it(()=>Ot(pe,Q,q,se),E)}else{let q;const{el:F,props:K}=p,{bm:Q,m:se,parent:we}=f,pe=uo(p);if(jn(f,!1),Q&&oo(Q),!pe&&(q=K&&K.onVnodeBeforeMount)&&Ot(q,we,p),jn(f,!0),F&&re){const xe=()=>{f.subTree=Za(f),re(F,f.subTree,f,E,null)};pe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=Za(f);I(null,xe,v,w,f,E,x),p.el=xe.el}if(se&&it(se,E),!pe&&(q=K&&K.onVnodeMounted)){const xe=p;it(()=>Ot(q,we,xe),E)}(p.shapeFlag&256||we&&uo(we.vnode)&&we.vnode.shapeFlag&256)&&f.a&&it(f.a,E),f.isMounted=!0,p=v=w=null}},R=f.effect=new Nu(C,()=>Vu(_),f.scope),_=f.update=()=>R.run();_.id=f.uid,jn(f,!0),_()},ve=(f,p,v)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,EI(f,p.props,w,v),SI(f,p.children,v),us(),dh(),ls()},fe=(f,p,v,w,E,x,P,C,R=!1)=>{const _=f&&f.children,q=f?f.shapeFlag:0,F=p.children,{patchFlag:K,shapeFlag:Q}=p;if(K>0){if(K&128){Bn(_,F,v,w,E,x,P,C,R);return}else if(K&256){bt(_,F,v,w,E,x,P,C,R);return}}Q&8?(q&16&&M(_,E,x),F!==_&&l(v,F)):q&16?Q&16?Bn(_,F,v,w,E,x,P,C,R):M(_,E,x,!0):(q&8&&l(v,""),Q&16&&Ue(F,v,w,E,x,P,C,R))},bt=(f,p,v,w,E,x,P,C,R)=>{f=f||Fr,p=p||Fr;const _=f.length,q=p.length,F=Math.min(_,q);let K;for(K=0;K<F;K++){const Q=p[K]=R?mn(p[K]):Lt(p[K]);I(f[K],Q,v,null,E,x,P,C,R)}_>q?M(f,E,x,!0,!1,F):Ue(p,v,w,E,x,P,C,R,F)},Bn=(f,p,v,w,E,x,P,C,R)=>{let _=0;const q=p.length;let F=f.length-1,K=q-1;for(;_<=F&&_<=K;){const Q=f[_],se=p[_]=R?mn(p[_]):Lt(p[_]);if(ws(Q,se))I(Q,se,v,null,E,x,P,C,R);else break;_++}for(;_<=F&&_<=K;){const Q=f[F],se=p[K]=R?mn(p[K]):Lt(p[K]);if(ws(Q,se))I(Q,se,v,null,E,x,P,C,R);else break;F--,K--}if(_>F){if(_<=K){const Q=K+1,se=Q<q?p[Q].el:w;for(;_<=K;)I(null,p[_]=R?mn(p[_]):Lt(p[_]),v,se,E,x,P,C,R),_++}}else if(_>K)for(;_<=F;)st(f[_],E,x,!0),_++;else{const Q=_,se=_,we=new Map;for(_=se;_<=K;_++){const lt=p[_]=R?mn(p[_]):Lt(p[_]);lt.key!=null&&we.set(lt.key,_)}let pe,xe=0;const Tt=K-se+1;let _r=!1,th=0;const vs=new Array(Tt);for(_=0;_<Tt;_++)vs[_]=0;for(_=Q;_<=F;_++){const lt=f[_];if(xe>=Tt){st(lt,E,x,!0);continue}let Nt;if(lt.key!=null)Nt=we.get(lt.key);else for(pe=se;pe<=K;pe++)if(vs[pe-se]===0&&ws(lt,p[pe])){Nt=pe;break}Nt===void 0?st(lt,E,x,!0):(vs[Nt-se]=_+1,Nt>=th?th=Nt:_r=!0,I(lt,p[Nt],v,null,E,x,P,C,R),xe++)}const nh=_r?DI(vs):Fr;for(pe=nh.length-1,_=Tt-1;_>=0;_--){const lt=se+_,Nt=p[lt],rh=lt+1<q?p[lt+1].el:w;vs[_]===0?I(null,Nt,v,rh,E,x,P,C,R):_r&&(pe<0||_!==nh[pe]?Et(Nt,v,rh,2):pe--)}}},Et=(f,p,v,w,E=null)=>{const{el:x,type:P,transition:C,children:R,shapeFlag:_}=f;if(_&6){Et(f.component.subTree,p,v,w);return}if(_&128){f.suspense.move(p,v,w);return}if(_&64){P.move(f,p,v,ae);return}if(P===Qt){r(x,p,v);for(let F=0;F<R.length;F++)Et(R[F],p,v,w);r(f.anchor,p,v);return}if(P===lo){D(f,p,v);return}if(w!==2&&_&1&&C)if(w===0)C.beforeEnter(x),r(x,p,v),it(()=>C.enter(x),E);else{const{leave:F,delayLeave:K,afterLeave:Q}=C,se=()=>r(x,p,v),we=()=>{F(x,()=>{se(),Q&&Q()})};K?K(x,se,we):we()}else r(x,p,v)},st=(f,p,v,w=!1,E=!1)=>{const{type:x,props:P,ref:C,children:R,dynamicChildren:_,shapeFlag:q,patchFlag:F,dirs:K}=f;if(C!=null&&Oc(C,null,v,f,!0),q&256){p.ctx.deactivate(f);return}const Q=q&1&&K,se=!uo(f);let we;if(se&&(we=P&&P.onVnodeBeforeUnmount)&&Ot(we,p,f),q&6)b(f.component,v,w);else{if(q&128){f.suspense.unmount(v,w);return}Q&&$n(f,null,p,"beforeUnmount"),q&64?f.type.remove(f,p,v,E,ae,w):_&&(x!==Qt||F>0&&F&64)?M(_,p,v,!1,!0):(x===Qt&&F&384||!E&&q&16)&&M(R,p,v),w&&Tr(f)}(se&&(we=P&&P.onVnodeUnmounted)||Q)&&it(()=>{we&&Ot(we,p,f),Q&&$n(f,null,p,"unmounted")},v)},Tr=f=>{const{type:p,el:v,anchor:w,transition:E}=f;if(p===Qt){Bi(v,w);return}if(p===lo){z(f);return}const x=()=>{s(v),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:C}=E,R=()=>P(v,x);C?C(f.el,x,R):R()}else x()},Bi=(f,p)=>{let v;for(;f!==p;)v=d(f),s(f),f=v;s(p)},b=(f,p,v)=>{const{bum:w,scope:E,update:x,subTree:P,um:C}=f;w&&oo(w),E.stop(),x&&(x.active=!1,st(P,f,p,v)),C&&it(C,p),it(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},M=(f,p,v,w=!1,E=!1,x=0)=>{for(let P=x;P<f.length;P++)st(f[P],p,v,w,E)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),$=(f,p,v)=>{f==null?p._vnode&&st(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,v),dh(),dp(),p._vnode=f},ae={p:I,um:st,m:Et,r:Tr,mt:Vn,mc:Ue,pc:fe,pbc:yt,n:N,o:t};let Te,re;return e&&([Te,re]=e(ae)),{render:$,hydrate:Te,createApp:CI($,Te)}}function jn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Rp(t,e,n=!1){const r=t.children,s=e.children;if(X(r)&&X(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=mn(s[i]),a.el=o.el),n||Rp(o,a)),a.type===ua&&(a.el=o.el)}}function DI(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const RI=t=>t.__isTeleport,Qt=Symbol(void 0),ua=Symbol(void 0),ar=Symbol(void 0),lo=Symbol(void 0),Ps=[];let St=null;function NI(t=!1){Ps.push(St=t?null:[])}function OI(){Ps.pop(),St=Ps[Ps.length-1]||null}let Qs=1;function bh(t){Qs+=t}function Np(t){return t.dynamicChildren=Qs>0?St||Fr:null,OI(),Qs>0&&St&&St.push(t),t}function gD(t,e,n,r,s,i){return Np(Pp(t,e,n,r,s,i,!0))}function PI(t,e,n,r,s){return Np(at(t,e,n,r,s,!0))}function Pc(t){return t?t.__v_isVNode===!0:!1}function ws(t,e){return t.type===e.type&&t.key===e.key}const la="__vInternal",Op=({key:t})=>t??null,ho=({ref:t,ref_key:e,ref_for:n})=>t!=null?Oe(t)||Ge(t)||Z(t)?{i:wt,r:t,k:e,f:!!n}:t:null;function Pp(t,e=null,n=null,r=0,s=null,i=t===Qt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Op(e),ref:e&&ho(e),scopeId:gp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wt};return a?(ju(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),Qs>0&&!o&&St&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&St.push(c),c}const at=MI;function MI(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===pI)&&(t=ar),Pc(t)){const a=Gr(t,e,!0);return n&&ju(a,n),Qs>0&&!i&&St&&(a.shapeFlag&6?St[St.indexOf(t)]=a:St.push(a)),a.patchFlag|=-2,a}if(GI(t)&&(t=t.__vccOpts),e){e=LI(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=Au(a)),Ee(c)&&(np(c)&&!X(c)&&(c=tt({},c)),e.style=Su(c))}const o=Oe(t)?1:Jw(t)?128:RI(t)?64:Ee(t)?4:Z(t)?2:0;return Pp(t,e,n,r,s,o,i,!0)}function LI(t){return t?np(t)||la in t?tt({},t):t:null}function Gr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?UI(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Op(a),ref:e&&e.ref?n&&s?X(s)?s.concat(ho(e)):[s,ho(e)]:ho(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Gr(t.ssContent),ssFallback:t.ssFallback&&Gr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function FI(t=" ",e=0){return at(ua,null,t,e)}function mD(t,e){const n=at(lo,null,t);return n.staticCount=e,n}function yD(t="",e=!1){return e?(NI(),PI(ar,null,t)):at(ar,null,t)}function Lt(t){return t==null||typeof t=="boolean"?at(ar):X(t)?at(Qt,null,t.slice()):typeof t=="object"?mn(t):at(ua,null,String(t))}function mn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Gr(t)}function ju(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ju(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(la in e)?e._ctx=wt:s===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[FI(e)]):n=8);t.children=e,t.shapeFlag|=n}function UI(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Au([e.class,r.class]));else if(s==="style")e.style=Su([e.style,r.style]);else if(ta(s)){const i=e[s],o=r[s];o&&i!==o&&!(X(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ot(t,e,n,r=null){Ct(t,e,7,[n,r])}const VI=Dp();let BI=0;function $I(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||VI,i={uid:BI++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new aw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ap(r,s),emitsOptions:pp(r,s),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:r.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=zw.bind(null,i),t.ce&&t.ce(i),i}let $e=null;const Wr=t=>{$e=t,t.scope.on()},rr=()=>{$e&&$e.scope.off(),$e=null};function Mp(t){return t.vnode.shapeFlag&4}let Xs=!1;function jI(t,e=!1){Xs=e;const{props:n,children:r}=t.vnode,s=Mp(t);bI(t,n,s,e),_I(t,r);const i=s?qI(t,e):void 0;return Xs=!1,i}function qI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=rp(new Proxy(t.ctx,gI));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?HI(t):null;Wr(t),us();const i=Sn(r,t,0,[t.props,s]);if(ls(),rr(),jf(i)){if(i.then(rr,rr),e)return i.then(o=>{Eh(t,o,e)}).catch(o=>{oa(o,t,0)});t.asyncDep=i}else Eh(t,i,e)}else Lp(t,e)}function Eh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=ap(e)),Lp(t,n)}let Th;function Lp(t,e,n){const r=t.type;if(!t.render){if(!e&&Th&&!r.render){const s=r.template||Bu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,u=tt(tt({isCustomElement:i,delimiters:a},o),c);r.render=Th(s,u)}}t.render=r.render||At}Wr(t),us(),mI(t),ls(),rr()}function KI(t){return new Proxy(t.attrs,{get(e,n){return pt(t,"get","$attrs"),e[n]}})}function HI(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=KI(t))},slots:t.slots,emit:t.emit,expose:e}}function ha(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ap(rp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Os)return Os[n](t)},has(e,n){return n in e||n in Os}}))}function zI(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function GI(t){return Z(t)&&"__vccOpts"in t}const vt=(t,e)=>Bw(t,e,Xs);function Fp(t,e,n){const r=arguments.length;return r===2?Ee(e)&&!X(e)?Pc(e)?at(t,null,[e]):at(t,e):at(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pc(n)&&(n=[n]),at(t,e,n))}const WI=Symbol(""),QI=()=>en(WI),XI="3.2.45",YI="http://www.w3.org/2000/svg",Wn=typeof document<"u"?document:null,_h=Wn&&Wn.createElement("template"),JI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Wn.createElementNS(YI,t):Wn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Wn.createTextNode(t),createComment:t=>Wn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{_h.innerHTML=r?`<svg>${t}</svg>`:t;const a=_h.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ZI(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function eb(t,e,n){const r=t.style,s=Oe(n);if(n&&!s){for(const i in n)Mc(r,i,n[i]);if(e&&!Oe(e))for(const i in e)n[i]==null&&Mc(r,i,"")}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Sh=/\s*!important$/;function Mc(t,e,n){if(X(n))n.forEach(r=>Mc(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=tb(t,e);Sh.test(n)?t.setProperty(cs(r),n.replace(Sh,""),"important"):t[r]=n}}const Ah=["Webkit","Moz","ms"],tc={};function tb(t,e){const n=tc[e];if(n)return n;let r=Kt(e);if(r!=="filter"&&r in t)return tc[e]=r;r=sa(r);for(let s=0;s<Ah.length;s++){const i=Ah[s]+r;if(i in t)return tc[e]=i}return e}const Ch="http://www.w3.org/1999/xlink";function nb(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ch,e.slice(6,e.length)):t.setAttributeNS(Ch,e,n);else{const i=Zv(e);n==null||i&&!Vf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function rb(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Vf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function sb(t,e,n,r){t.removeEventListener(e,n,r)}function ib(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=ob(e);if(r){const u=i[e]=ub(r,s);xr(t,a,u,c)}else o&&(sb(t,a,o,c),i[e]=void 0)}}const kh=/(?:Once|Passive|Capture)$/;function ob(t){let e;if(kh.test(t)){e={};let r;for(;r=t.match(kh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cs(t.slice(2)),e]}let nc=0;const ab=Promise.resolve(),cb=()=>nc||(ab.then(()=>nc=0),nc=Date.now());function ub(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ct(lb(r,n.value),e,5,[r])};return n.value=t,n.attached=cb(),n}function lb(t,e){if(X(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xh=/^on[a-z]/,hb=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?ZI(t,r,s):e==="style"?eb(t,n,r):ta(e)?Cu(e)||ib(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):db(t,e,r,s))?rb(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),nb(t,e,r,s))};function db(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&xh.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||xh.test(e)&&Oe(n)?!1:e in t}const Dh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>oo(e,n):e};function fb(t){t.target.composing=!0}function Rh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const vD={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t._assign=Dh(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=_o(a)),t._assign(a)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",fb),xr(t,"compositionend",Rh),xr(t,"change",Rh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t._assign=Dh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===e||(s||t.type==="number")&&_o(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},pb=tt({patchProp:hb},JI);let Nh;function gb(){return Nh||(Nh=kI(pb))}const wD=(...t)=>{const e=gb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=mb(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mb(t){return Oe(t)?document.querySelector(t):t}/**
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
 */const Up=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yb=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),r.push(n[l],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Up(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vb=function(t){const e=Up(t);return qu.encodeByteArray(e,!0)},ko=function(t){return vb(t).replace(/\./g,"")},Vp=function(t){try{return qu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wb=()=>Bp().__FIREBASE_DEFAULTS__,Ib=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vp(t[1]);return e&&JSON.parse(e)},da=()=>{try{return wb()||Ib()||bb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$p=t=>{var e,n;return(n=(e=da())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Eb=t=>{const e=$p(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tb=()=>{var t;return(t=da())===null||t===void 0?void 0:t.config},jp=t=>{var e;return(e=da())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ys{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),a].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Ab(){var t;const e=(t=da())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Cb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xb(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Db(){return!Ab()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fa(){try{return typeof indexedDB=="object"}catch{return!1}}function Rb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Nb="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nb,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hs.prototype.create)}}class hs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ob(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cn(s,a,r)}}function Ob(t,e){return t.replace(Pb,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Pb=/\{\$([^}]+)}/g;function Mb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Oh(i)&&Oh(o)){if(!xo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Oh(t){return t!==null&&typeof t=="object"}/**
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
 */function vi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Lb(t,e){const n=new Fb(t,e);return n.subscribe.bind(n)}class Fb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ub(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=rc),s.error===void 0&&(s.error=rc),s.complete===void 0&&(s.complete=rc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ub(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rc(){}/**
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
 */const Vb=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
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
 */const Bb=1e3,$b=2,jb=4*60*60*1e3,qb=.5;function Kb(t,e=Bb,n=$b){const r=e*Math.pow(n,t),s=Math.round(qb*r*(Math.random()-.5)*2);return Math.min(jb,r+s)}/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */class Hb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ys;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gb(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zb(t){return t===Hn?void 0:t}function Gb(t){return t.instantiationMode==="EAGER"}/**
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
 */class Wb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Qb={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Xb=ue.INFO,Yb={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},Jb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Yb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pa{constructor(e){this.name=e,this._logLevel=Xb,this._logHandler=Jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Zb=(t,e)=>e.some(n=>t instanceof n);let Ph,Mh;function eE(){return Ph||(Ph=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tE(){return Mh||(Mh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qp=new WeakMap,Lc=new WeakMap,Kp=new WeakMap,sc=new WeakMap,Ku=new WeakMap;function nE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(An(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qp.set(n,t)}).catch(()=>{}),Ku.set(e,t),e}function rE(t){if(Lc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lc.set(t,e)}let Fc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Kp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sE(t){Fc=t(Fc)}function iE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ic(this),e,...n);return Kp.set(r,e.sort?e.sort():[e]),An(r)}:tE().includes(t)?function(...e){return t.apply(ic(this),e),An(qp.get(this))}:function(...e){return An(t.apply(ic(this),e))}}function oE(t){return typeof t=="function"?iE(t):(t instanceof IDBTransaction&&rE(t),Zb(t,eE())?new Proxy(t,Fc):t)}function An(t){if(t instanceof IDBRequest)return nE(t);if(sc.has(t))return sc.get(t);const e=oE(t);return e!==t&&(sc.set(t,e),Ku.set(e,t)),e}const ic=t=>Ku.get(t);function aE(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=An(o);return r&&o.addEventListener("upgradeneeded",c=>{r(An(o.result),c.oldVersion,c.newVersion,An(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const cE=["get","getKey","getAll","getAllKeys","count"],uE=["put","add","delete","clear"],oc=new Map;function Lh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oc.get(e))return oc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=uE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cE.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return oc.set(e,i),i}sE(t=>({...t,get:(e,n,r)=>Lh(e,n)||t.get(e,n,r),has:(e,n)=>!!Lh(e,n)||t.has(e,n)}));/**
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
 */class lE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uc="@firebase/app",Fh="0.9.1";/**
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
 */const cr=new pa("@firebase/app"),dE="@firebase/app-compat",fE="@firebase/analytics-compat",pE="@firebase/analytics",gE="@firebase/app-check-compat",mE="@firebase/app-check",yE="@firebase/auth",vE="@firebase/auth-compat",wE="@firebase/database",IE="@firebase/database-compat",bE="@firebase/functions",EE="@firebase/functions-compat",TE="@firebase/installations",_E="@firebase/installations-compat",SE="@firebase/messaging",AE="@firebase/messaging-compat",CE="@firebase/performance",kE="@firebase/performance-compat",xE="@firebase/remote-config",DE="@firebase/remote-config-compat",RE="@firebase/storage",NE="@firebase/storage-compat",OE="@firebase/firestore",PE="@firebase/firestore-compat",ME="firebase",LE="9.16.0";/**
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
 */const Vc="[DEFAULT]",FE={[Uc]:"fire-core",[dE]:"fire-core-compat",[pE]:"fire-analytics",[fE]:"fire-analytics-compat",[mE]:"fire-app-check",[gE]:"fire-app-check-compat",[yE]:"fire-auth",[vE]:"fire-auth-compat",[wE]:"fire-rtdb",[IE]:"fire-rtdb-compat",[bE]:"fire-fn",[EE]:"fire-fn-compat",[TE]:"fire-iid",[_E]:"fire-iid-compat",[SE]:"fire-fcm",[AE]:"fire-fcm-compat",[CE]:"fire-perf",[kE]:"fire-perf-compat",[xE]:"fire-rc",[DE]:"fire-rc-compat",[RE]:"fire-gcs",[NE]:"fire-gcs-compat",[OE]:"fire-fst",[PE]:"fire-fst-compat","fire-js":"fire-js",[ME]:"fire-js-all"};/**
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
 */const Do=new Map,Bc=new Map;function UE(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Bc.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Bc.set(e,t);for(const n of Do.values())UE(n,t);return!0}function wi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const VE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cn=new hs("app","Firebase",VE);/**
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
 */class BE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=LE;function $E(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Cn.create("bad-app-name",{appName:String(s)});if(n||(n=Tb()),!n)throw Cn.create("no-options");const i=Do.get(s);if(i){if(xo(n,i.options)&&xo(r,i.config))return i;throw Cn.create("duplicate-app",{appName:s})}const o=new Wb(s);for(const c of Bc.values())o.addComponent(c);const a=new BE(n,r,o);return Do.set(s,a),a}function Hu(t=Vc){const e=Do.get(t);if(!e&&t===Vc)return $E();if(!e)throw Cn.create("no-app",{appName:t});return e}function tn(t,e,n){var r;let s=(r=FE[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}Dn(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jE="firebase-heartbeat-database",qE=1,Js="firebase-heartbeat-store";let ac=null;function Hp(){return ac||(ac=aE(jE,qE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Js)}}}).catch(t=>{throw Cn.create("idb-open",{originalErrorMessage:t.message})})),ac}async function KE(t){try{return(await Hp()).transaction(Js).objectStore(Js).get(zp(t))}catch(e){if(e instanceof cn)cr.warn(e.message);else{const n=Cn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function Uh(t,e){try{const r=(await Hp()).transaction(Js,"readwrite");return await r.objectStore(Js).put(e,zp(t)),r.done}catch(n){if(n instanceof cn)cr.warn(n.message);else{const r=Cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function zp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HE=1024,zE=30*24*60*60*1e3;class GE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new QE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=zE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vh(),{heartbeatsToSend:n,unsentEntries:r}=WE(this._heartbeatsCache.heartbeats),s=ko(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Vh(){return new Date().toISOString().substring(0,10)}function WE(t,e=HE){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Bh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class QE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fa()?Rb().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await KE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bh(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XE(t){Dn(new rn("platform-logger",e=>new lE(e),"PRIVATE")),Dn(new rn("heartbeat",e=>new GE(e),"PRIVATE")),tn(Uc,Fh,t),tn(Uc,Fh,"esm2017"),tn("fire-js","")}XE("");var YE="firebase",JE="9.16.0";/**
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
 */tn(YE,JE,"app");function zu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Gp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ZE=Gp,Wp=new hs("auth","Firebase",Gp());/**
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
 */const $h=new pa("@firebase/auth");function fo(t,...e){$h.logLevel<=ue.ERROR&&$h.error(`Auth (${Ii}): ${t}`,...e)}/**
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
 */function Ht(t,...e){throw Gu(t,...e)}function $t(t,...e){return Gu(t,...e)}function Qp(t,e,n){const r=Object.assign(Object.assign({},ZE()),{[e]:n});return new hs("auth","Firebase",r).create(e,{appName:t.name})}function e0(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ht(t,"argument-error"),Qp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Gu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Wp.create(t,...e)}function G(t,e,...n){if(!t)throw Gu(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function sn(t,e){t||Xt(e)}/**
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
 */const jh=new Map;function Yt(t){sn(t instanceof Function,"Expected a class definition");let e=jh.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jh.set(t,e),e)}/**
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
 */function t0(t,e){const n=wi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xo(i,e??{}))return s;Ht(s,"already-initialized")}return n.initialize({options:e})}function n0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function $c(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function r0(){return qh()==="http:"||qh()==="https:"}function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function s0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(r0()||Cb()||"connection"in navigator)?navigator.onLine:!0}function i0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class bi{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=Sb()||kb()}get(){return s0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wu(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Xp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const o0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const a0=new bi(3e4,6e4);function c0(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ga(t,e,n,r,s={}){return Yp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=vi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Xp.fetch()(Jp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Yp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},o0),e);try{const s=new l0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Gi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Gi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Gi(t,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qp(t,l,u);Ht(t,l)}}catch(s){if(s instanceof cn)throw s;Ht(t,"network-request-failed")}}async function u0(t,e,n,r,s={}){const i=await ga(t,e,n,r,s);return"mfaPendingCredential"in i&&Ht(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Jp(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Wu(t.config,s):`${t.config.apiScheme}://${s}`}class l0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),a0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=$t(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function h0(t,e){return ga(t,"POST","/v1/accounts:delete",e)}async function d0(t,e){return ga(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ms(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function f0(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=Qu(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ms(cc(s.auth_time)),issuedAtTime:Ms(cc(s.iat)),expirationTime:Ms(cc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function cc(t){return Number(t)*1e3}function Qu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vp(n);return s?JSON.parse(s):(fo("Failed to decode base64 JWT payload"),null)}catch(s){return fo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function p0(t){const e=Qu(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&g0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function g0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class m0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ro(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zs(t,d0(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?w0(i.providerUserInfo):[],a=v0(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Zp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function y0(t){const e=nt(t);await Ro(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function v0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function w0(t){return t.map(e=>{var{providerId:n}=e,r=zu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function I0(t,e){const n=await Yp(t,{},async()=>{const r=vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Jp(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Xp.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):p0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await I0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ei;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
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
 */function dn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=zu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new m0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Zp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return f0(this,e)}reload(){return y0(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ro(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zs(this,h0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,u,l;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:z,isAnonymous:ee,providerData:te,stsTokenManager:de}=n;G(D&&de,e,"internal-error");const Ue=ei.fromJSON(this.name,de);G(typeof D=="string",e,"internal-error"),dn(h,e.name),dn(d,e.name),G(typeof z=="boolean",e,"internal-error"),G(typeof ee=="boolean",e,"internal-error"),dn(g,e.name),dn(y,e.name),dn(I,e.name),dn(k,e.name),dn(A,e.name),dn(L,e.name);const Dt=new sr({uid:D,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:ee,photoURL:y,phoneNumber:g,tenantId:I,stsTokenManager:Ue,createdAt:A,lastLoginAt:L});return te&&Array.isArray(te)&&(Dt.providerData=te.map(yt=>Object.assign({},yt))),k&&(Dt._redirectEventId=k),Dt}static async _fromIdTokenResponse(e,n,r=!1){const s=new ei;s.updateFromServerResponse(n);const i=new sr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ro(i),i}}/**
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
 */class eg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}eg.type="NONE";const Kh=eg;/**
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
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class jr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=po(this.userKey,s.apiKey,i),this.fullPersistenceKey=po("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new jr(Yt(Kh),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Yt(Kh);const o=po(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=sr._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new jr(i,e,r))}}/**
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
 */function Hh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ig(e))return"Blackberry";if(og(e))return"Webos";if(Xu(e))return"Safari";if((e.includes("chrome/")||ng(e))&&!e.includes("edge/"))return"Chrome";if(sg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tg(t=Pe()){return/firefox\//i.test(t)}function Xu(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ng(t=Pe()){return/crios\//i.test(t)}function rg(t=Pe()){return/iemobile/i.test(t)}function sg(t=Pe()){return/android/i.test(t)}function ig(t=Pe()){return/blackberry/i.test(t)}function og(t=Pe()){return/webos/i.test(t)}function ma(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function b0(t=Pe()){var e;return ma(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function E0(){return xb()&&document.documentMode===10}function ag(t=Pe()){return ma(t)||sg(t)||og(t)||ig(t)||/windows phone/i.test(t)||rg(t)}function T0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function cg(t,e=[]){let n;switch(t){case"Browser":n=Hh(Pe());break;case"Worker":n=`${Hh(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${r}`}/**
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
 */class _0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class S0{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zh(this),this.idTokenSubscription=new zh(this),this.beforeStateQueue=new _0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ro(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ei(t){return nt(t)}class zh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Lb(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function A0(t,e,n){const r=Ei(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=ug(e),{host:o,port:a}=C0(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||k0()}function ug(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function C0(t){const e=ug(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Gh(o)}}}function Gh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function k0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class lg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}/**
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
 */async function qr(t,e){return u0(t,"POST","/v1/accounts:signInWithIdp",c0(t,e))}/**
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
 */const x0="http://localhost";class ur extends lg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=zu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ur(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qr(e,n)}buildRequest(){const e={requestUri:x0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=vi(n)}return e}}/**
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
 */class Yu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ti extends Yu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends Ti{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class wn extends Ti{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ur._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
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
 */class In extends Ti{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class bn extends Ti{constructor(){super("twitter.com")}static credential(e,n){return ur._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
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
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sr._fromIdTokenResponse(e,r,s),o=Wh(r);return new Qr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wh(r);return new Qr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class No extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,No.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new No(e,n,r,s)}}function hg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(t,i,e,r):i})}async function D0(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
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
 */async function R0(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Zs(t,hg(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=Qu(i.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),Qr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
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
 */async function N0(t,e,n=!1){const r="signIn",s=await hg(t,r,e),i=await Qr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function O0(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function P0(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function ID(t){return nt(t).signOut()}const Oo="__sak";/**
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
 */class dg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Oo,"1"),this.storage.removeItem(Oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function M0(){const t=Pe();return Xu(t)||ma(t)}const L0=1e3,F0=10;class fg extends dg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=M0()&&T0(),this.fallbackToPolling=ag(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);E0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,F0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},L0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fg.type="LOCAL";const U0=fg;/**
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
 */class pg extends dg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pg.type="SESSION";const gg=pg;/**
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
 */function V0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await V0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ya.receivers=[];/**
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
 */function Ju(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class B0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ju("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jt(){return window}function $0(t){jt().location.href=t}/**
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
 */function mg(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function j0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function q0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function K0(){return mg()?self:null}/**
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
 */const yg="firebaseLocalStorageDb",H0=1,Po="firebaseLocalStorage",vg="fbase_key";class _i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function va(t,e){return t.transaction([Po],e?"readwrite":"readonly").objectStore(Po)}function z0(){const t=indexedDB.deleteDatabase(yg);return new _i(t).toPromise()}function jc(){const t=indexedDB.open(yg,H0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Po,{keyPath:vg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Po)?e(r):(r.close(),await z0(),e(await jc()))})})}async function Qh(t,e,n){const r=va(t,!0).put({[vg]:e,value:n});return new _i(r).toPromise()}async function G0(t,e){const n=va(t,!1).get(e),r=await new _i(n).toPromise();return r===void 0?null:r.value}function Xh(t,e){const n=va(t,!0).delete(e);return new _i(n).toPromise()}const W0=800,Q0=3;class wg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Q0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ya._getInstance(K0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await j0(),!this.activeServiceWorker)return;this.sender=new B0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||q0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jc();return await Qh(e,Oo,"1"),await Xh(e,Oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>G0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=va(s,!1).getAll();return new _i(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wg.type="LOCAL";const X0=wg;/**
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
 */function Y0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function J0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=$t("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Y0().appendChild(r)})}function Z0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new bi(3e4,6e4);/**
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
 */function Ig(t,e){return e?Yt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zu extends lg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function eT(t){return N0(t.auth,new Zu(t),t.bypassAuthState)}function tT(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),R0(n,new Zu(t),t.bypassAuthState)}async function nT(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),D0(n,new Zu(t),t.bypassAuthState)}/**
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
 */class bg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eT;case"linkViaPopup":case"linkViaRedirect":return nT;case"reauthViaPopup":case"reauthViaRedirect":return tT;default:Ht(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rT=new bi(2e3,1e4);class Pr extends bg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Pr.currentPopupAction&&Pr.currentPopupAction.cancel(),Pr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,rT.get())};e()}}Pr.currentPopupAction=null;/**
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
 */const sT="pendingRedirect",go=new Map;class iT extends bg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await oT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oT(t,e){const n=Tg(e),r=Eg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function aT(t,e){return Eg(t)._set(Tg(e),"true")}function cT(t,e){go.set(t._key(),e)}function Eg(t){return Yt(t._redirectPersistence)}function Tg(t){return po(sT,t.config.apiKey,t.name)}/**
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
 */function bD(t,e,n){return uT(t,e,n)}async function uT(t,e,n){const r=Ei(t);e0(t,e,Yu),await r._initializationPromise;const s=Ig(r,n);return await aT(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function ED(t,e){return await Ei(t)._initializationPromise,_g(t,e,!1)}async function _g(t,e,n=!1){const r=Ei(t),s=Ig(r,e),o=await new iT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lT=10*60*1e3;class hT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($t(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yh(e))}saveEventToCache(e){this.cachedEventUids.add(Yh(e)),this.lastProcessedEventTime=Date.now()}}function Yh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sg(t);default:return!1}}/**
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
 */async function fT(t,e={}){return ga(t,"GET","/v1/projects",e)}/**
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
 */const pT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gT=/^https?/;async function mT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fT(t);for(const n of e)try{if(yT(n))return}catch{}Ht(t,"unauthorized-domain")}function yT(t){const e=$c(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gT.test(n))return!1;if(pT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vT=new bi(3e4,6e4);function Jh(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wT(t){return new Promise((e,n)=>{var r,s,i;function o(){Jh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jh(),n($t(t,"network-request-failed"))},timeout:vT.get()})}if(!((s=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)o();else{const a=Z0("iframefcb");return jt()[a]=()=>{gapi.load?o():n($t(t,"network-request-failed"))},J0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw mo=null,e})}let mo=null;function IT(t){return mo=mo||wT(t),mo}/**
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
 */const bT=new bi(5e3,15e3),ET="__/auth/iframe",TT="emulator/auth/iframe",_T={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ST=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AT(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wu(e,TT):`https://${t.config.authDomain}/${ET}`,r={apiKey:e.apiKey,appName:t.name,v:Ii},s=ST.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${vi(r).slice(1)}`}async function CT(t){const e=await IT(t),n=jt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:AT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_T,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=$t(t,"network-request-failed"),a=jt().setTimeout(()=>{i(o)},bT.get());function c(){jt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const kT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xT=500,DT=600,RT="_blank",NT="http://localhost";class Zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OT(t,e,n,r=xT,s=DT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kT),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Pe().toLowerCase();n&&(a=ng(u)?RT:n),tg(u)&&(e=e||NT,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(b0(u)&&a!=="_self")return PT(e||"",a),new Zh(null);const h=window.open(e||"",a,l);G(h,t,"popup-blocked");try{h.focus()}catch{}return new Zh(h)}function PT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MT="__/auth/handler",LT="emulator/auth/handler";function ed(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ii,eventId:s};if(e instanceof Yu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Ti){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${FT(t)}?${vi(a).slice(1)}`}function FT({config:t}){return t.emulator?Wu(t,LT):`https://${t.authDomain}/${MT}`}/**
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
 */const uc="webStorageSupport";class UT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gg,this._completeRedirectFn=_g,this._overrideRedirectResult=cT}async _openPopup(e,n,r,s){var i;sn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=ed(e,n,r,$c(),s);return OT(e,o,Ju())}async _openRedirect(e,n,r,s){return await this._originValidation(e),$0(ed(e,n,r,$c(),s)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await CT(e),r=new hT(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uc,{type:uc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[uc];o!==void 0&&n(!!o),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ag()||Xu()||ma()}}const VT=UT;var td="@firebase/auth",nd="0.21.1";/**
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
 */class BT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $T(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jT(t){Dn(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cg(t)},l=new S0(a,c,u);return n0(l,n),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new rn("auth-internal",e=>{const n=Ei(e.getProvider("auth").getImmediate());return(r=>new BT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(td,nd,$T(t)),tn(td,nd,"esm2017")}/**
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
 */const qT=5*60,KT=jp("authIdTokenMaxAge")||qT;let rd=null;const HT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KT)return;const s=n==null?void 0:n.token;rd!==s&&(rd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function TD(t=Hu()){const e=wi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=t0(t,{popupRedirectResolver:VT,persistence:[X0,U0,gg]}),r=jp("authTokenSyncURL");if(r){const i=HT(r);P0(n,i,()=>i(n.currentUser)),O0(n,o=>i(o))}const s=$p("auth");return s&&A0(n,`http://${s}`),n}jT("Browser");var zT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,el=el||{},W=zT||self;function Mo(){}function wa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Si(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function GT(t){return Object.prototype.hasOwnProperty.call(t,lc)&&t[lc]||(t[lc]=++WT)}var lc="closure_uid_"+(1e9*Math.random()>>>0),WT=0;function QT(t,e,n){return t.call.apply(t.bind,arguments)}function XT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=QT:We=XT,We.apply(null,arguments)}function Wi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Mn(){this.s=this.s,this.o=this.o}var YT=0;Mn.prototype.s=!1;Mn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),YT!=0)&&GT(this)};Mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ag=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tl(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function sd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(wa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var JT=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Mo,e),W.removeEventListener("test",Mo,e)}catch{}return t}();function Lo(t){return/^[\s\xa0]*$/.test(t)}var id=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function hc(t,e){return t<e?-1:t>e?1:0}function Ia(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Ut(t){return Ia().indexOf(t)!=-1}function nl(t){return nl[" "](t),t}nl[" "]=Mo;function ZT(t){var e=n_;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var e_=Ut("Opera"),Xr=Ut("Trident")||Ut("MSIE"),Cg=Ut("Edge"),qc=Cg||Xr,kg=Ut("Gecko")&&!(Ia().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge"))&&!(Ut("Trident")||Ut("MSIE"))&&!Ut("Edge"),t_=Ia().toLowerCase().indexOf("webkit")!=-1&&!Ut("Edge");function xg(){var t=W.document;return t?t.documentMode:void 0}var Fo;e:{var dc="",fc=function(){var t=Ia();if(kg)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cg)return/Edge\/([\d\.]+)/.exec(t);if(Xr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(t_)return/WebKit\/(\S+)/.exec(t);if(e_)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(fc&&(dc=fc?fc[1]:""),Xr){var pc=xg();if(pc!=null&&pc>parseFloat(dc)){Fo=String(pc);break e}}Fo=dc}var n_={};function r_(){return ZT(function(){let t=0;const e=id(String(Fo)).split("."),n=id("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;t=hc(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||hc(s[2].length==0,i[2].length==0)||hc(s[2],i[2]),s=s[3],i=i[3]}while(t==0)}return 0<=t})}var Kc;if(W.document&&Xr){var od=xg();Kc=od||parseInt(Fo,10)||void 0}else Kc=void 0;var s_=Kc;function ti(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kg){e:{try{nl(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:i_[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ti.X.h.call(this)}}Ke(ti,Qe);var i_={2:"touch",3:"pen",4:"mouse"};ti.prototype.h=function(){ti.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ai="closure_listenable_"+(1e6*Math.random()|0),o_=0;function a_(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=s,this.key=++o_,this.ba=this.ea=!1}function ba(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function rl(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Dg(t){const e={};for(const n in t)e[n]=t[n];return e}const ad="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<ad.length;i++)n=ad[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ea(t){this.src=t,this.g={},this.h=0}Ea.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=zc(t,e,r,s);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new a_(e,this.src,i,!!r,s),e.ea=n,t.push(e)),e};function Hc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Ag(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ba(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function zc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==r)return s}return-1}var sl="closure_lm_"+(1e6*Math.random()|0),gc={};function Ng(t,e,n,r,s){if(r&&r.once)return Pg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ng(t,e[i],n,r,s);return null}return n=al(n),t&&t[Ai]?t.N(e,n,Si(r)?!!r.capture:!!r,s):Og(t,e,n,!1,r,s)}function Og(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Si(s)?!!s.capture:!!s,a=ol(t);if(a||(t[sl]=a=new Ea(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=c_(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)JT||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Lg(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function c_(){function t(n){return e.call(t.src,t.listener,n)}const e=u_;return t}function Pg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Pg(t,e[i],n,r,s);return null}return n=al(n),t&&t[Ai]?t.O(e,n,Si(r)?!!r.capture:!!r,s):Og(t,e,n,!0,r,s)}function Mg(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Mg(t,e[i],n,r,s);else r=Si(r)?!!r.capture:!!r,n=al(n),t&&t[Ai]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=zc(i,n,r,s),-1<n&&(ba(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=ol(t))&&(e=t.g[e.toString()],t=-1,e&&(t=zc(e,n,r,s)),(n=-1<t?e[t]:null)&&il(n))}function il(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ai])Hc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Lg(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ol(e))?(Hc(n,t),n.h==0&&(n.src=null,e[sl]=null)):ba(t)}}}function Lg(t){return t in gc?gc[t]:gc[t]="on"+t}function u_(t,e){if(t.ba)t=!0;else{e=new ti(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&il(t),t=n.call(r,e)}return t}function ol(t){return t=t[sl],t instanceof Ea?t:null}var mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function al(t){return typeof t=="function"?t:(t[mc]||(t[mc]=function(e){return t.handleEvent(e)}),t[mc])}function Le(){Mn.call(this),this.i=new Ea(this),this.P=this,this.I=null}Ke(Le,Mn);Le.prototype[Ai]=!0;Le.prototype.removeEventListener=function(t,e,n,r){Mg(this,t,e,n,r)};function je(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var s=e;e=new Qe(r,t),Rg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Qi(o,r,!0,e)&&s}if(o=e.g=t,s=Qi(o,r,!0,e)&&s,s=Qi(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Qi(o,r,!1,e)&&s}Le.prototype.M=function(){if(Le.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ba(n[r]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Qi(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Hc(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var cl=W.JSON.stringify;function l_(){var t=Vg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class h_{constructor(){this.h=this.g=null}add(e,n){const r=Fg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Fg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new d_,t=>t.reset());class d_{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function f_(t){W.setTimeout(()=>{throw t},0)}function Ug(t,e){Gc||p_(),Wc||(Gc(),Wc=!0),Vg.add(t,e)}var Gc;function p_(){var t=W.Promise.resolve(void 0);Gc=function(){t.then(g_)}}var Wc=!1,Vg=new h_;function g_(){for(var t;t=l_();){try{t.h.call(t.g)}catch(n){f_(n)}var e=Fg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wc=!1}function Ta(t,e){Le.call(this),this.h=t||1,this.g=e||W,this.j=We(this.lb,this),this.l=Date.now()}Ke(Ta,Le);V=Ta.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),je(this,"tick"),this.ca&&(ul(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ul(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){Ta.X.M.call(this),ul(this),delete this.g};function ll(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Bg(t){t.g=ll(()=>{t.g=null,t.i&&(t.i=!1,Bg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class m_ extends Mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bg(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ni(t){Mn.call(this),this.h=t,this.g={}}Ke(ni,Mn);var cd=[];function $g(t,e,n,r){Array.isArray(n)||(n&&(cd[0]=n.toString()),n=cd);for(var s=0;s<n.length;s++){var i=Ng(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function jg(t){rl(t.g,function(e,n){this.g.hasOwnProperty(n)&&il(e)},t),t.g={}}ni.prototype.M=function(){ni.X.M.call(this),jg(this)};ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _a(){this.g=!0}_a.prototype.Aa=function(){this.g=!1};function y_(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function v_(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Mr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+I_(t,n)+(r?" "+r:"")})}function w_(t,e){t.info(function(){return"TIMEOUT: "+e})}_a.prototype.info=function(){};function I_(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return cl(n)}catch{return e}}var vr={},ud=null;function Sa(){return ud=ud||new Le}vr.Pa="serverreachability";function qg(t){Qe.call(this,vr.Pa,t)}Ke(qg,Qe);function ri(t){const e=Sa();je(e,new qg(e))}vr.STAT_EVENT="statevent";function Kg(t,e){Qe.call(this,vr.STAT_EVENT,t),this.stat=e}Ke(Kg,Qe);function Je(t){const e=Sa();je(e,new Kg(e,t))}vr.Qa="timingevent";function Hg(t,e){Qe.call(this,vr.Qa,t),this.size=e}Ke(Hg,Qe);function Ci(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Aa={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},zg={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function hl(){}hl.prototype.h=null;function ld(t){return t.h||(t.h=t.i())}function Gg(){}var ki={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function dl(){Qe.call(this,"d")}Ke(dl,Qe);function fl(){Qe.call(this,"c")}Ke(fl,Qe);var Qc;function Ca(){}Ke(Ca,hl);Ca.prototype.g=function(){return new XMLHttpRequest};Ca.prototype.i=function(){return{}};Qc=new Ca;function xi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ni(this),this.O=b_,t=qc?125:void 0,this.T=new Ta(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Wg}function Wg(){this.i=null,this.g="",this.h=!1}var b_=45e3,Xc={},Uo={};V=xi.prototype;V.setTimeout=function(t){this.O=t};function Yc(t,e,n){t.K=1,t.v=xa(on(e)),t.s=n,t.P=!0,Qg(t,null)}function Qg(t,e){t.F=Date.now(),Di(t),t.A=on(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),rm(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Wg,t.g=_m(t.l,n?e:null,!t.s),0<t.N&&(t.L=new m_(We(t.La,t,t.g),t.N)),$g(t.S,t.g,"readystatechange",t.ib),e=t.H?Dg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ri(),y_(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&Jt(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const l=Jt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||qc||this.g&&(this.h.h||this.g.fa()||pd(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ri(3):ri(2)),ka(this);var n=this.g.aa();this.Y=n;t:if(Xg(this)){var r=pd(this.g);t="";var s=r.length,i=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){er(this),Ls(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,v_(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Lo(a)){var u=a;break t}}u=null}if(n=u)Mr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jc(this,n);else{this.i=!1,this.o=3,Je(12),er(this),Ls(this);break e}}this.P?(Yg(this,l,o),qc&&this.i&&l==3&&($g(this.S,this.T,"tick",this.hb),this.T.start())):(Mr(this.j,this.m,o,null),Jc(this,o)),l==4&&er(this),this.i&&!this.I&&(l==4?Im(this.l,this):(this.i=!1,Di(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),er(this),Ls(this)}}}catch{}finally{}};function Xg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Yg(t,e,n){let r=!0,s;for(;!t.I&&t.C<n.length;)if(s=E_(t,n),s==Uo){e==4&&(t.o=4,Je(14),r=!1),Mr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Xc){t.o=4,Je(15),Mr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Mr(t.j,t.m,s,null),Jc(t,s);Xg(t)&&s!=Uo&&s!=Xc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Il(e),e.K=!0,Je(11))):(Mr(t.j,t.m,n,"[Invalid Chunked Response]"),er(t),Ls(t))}V.hb=function(){if(this.g){var t=Jt(this.g),e=this.g.fa();this.C<e.length&&(ka(this),Yg(this,t,e),this.i&&t!=4&&Di(this))}};function E_(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Uo:(n=Number(e.substring(n,r)),isNaN(n)?Xc:(r+=1,r+n>e.length?Uo:(e=e.substr(r,n),t.C=r+n,e)))}V.cancel=function(){this.I=!0,er(this)};function Di(t){t.V=Date.now()+t.O,Jg(t,t.O)}function Jg(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ci(We(t.gb,t),e)}function ka(t){t.B&&(W.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(w_(this.j,this.A),this.K!=2&&(ri(),Je(17)),er(this),this.o=2,Ls(this)):Jg(this,this.V-t)};function Ls(t){t.l.G==0||t.I||Im(t.l,t)}function er(t){ka(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ul(t.T),jg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Jc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Zc(n.h,t))){if(!t.J&&Zc(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)$o(n),Na(n);else break e;wl(n),Je(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ci(We(n.cb,n),6e3));if(1>=om(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else tr(n,11)}else if((t.J||n.g==t)&&$o(n),!Lo(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(pl(i,i.h),i.h=null))}if(r.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.za=I,be(r.F,r.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Tm(r,r.H?r.ka:null,r.V),o.J){am(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(ka(a),Di(a)),r.g=o}else vm(r);0<n.i.length&&Oa(n)}else u[0]!="stop"&&u[0]!="close"||tr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?tr(n,7):vl(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ri(4)}catch{}}function T_(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(wa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function __(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(wa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Zg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(wa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=__(t),r=T_(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function S_(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function ir(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ir){this.h=e!==void 0?e:t.h,Vo(this,t.j),this.s=t.s,this.g=t.g,Bo(this,t.m),this.l=t.l,e=t.i;var n=new si;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),hd(this,n),this.o=t.o}else t&&(n=String(t).match(em))?(this.h=!!e,Vo(this,n[1]||"",!0),this.s=xs(n[2]||""),this.g=xs(n[3]||"",!0),Bo(this,n[4]),this.l=xs(n[5]||"",!0),hd(this,n[6]||"",!0),this.o=xs(n[7]||"")):(this.h=!!e,this.i=new si(null,this.h))}ir.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ds(e,dd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ds(e,dd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ds(n,n.charAt(0)=="/"?k_:C_,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ds(n,D_)),t.join("")};function on(t){return new ir(t)}function Vo(t,e,n){t.j=n?xs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function hd(t,e,n){e instanceof si?(t.i=e,R_(t.i,t.h)):(n||(e=Ds(e,x_)),t.i=new si(e,t.h))}function be(t,e,n){t.i.set(e,n)}function xa(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ds(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,A_),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function A_(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var dd=/[#\/\?@]/g,C_=/[#\?:]/g,k_=/[#\?]/g,x_=/[#\?@]/g,D_=/#/g;function si(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ln(t){t.g||(t.g=new Map,t.h=0,t.i&&S_(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=si.prototype;V.add=function(t,e){Ln(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function tm(t,e){Ln(t),e=ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nm(t,e){return Ln(t),e=ds(t,e),t.g.has(e)}V.forEach=function(t,e){Ln(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.oa=function(){Ln(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.W=function(t){Ln(this);let e=[];if(typeof t=="string")nm(this,t)&&(e=e.concat(this.g.get(ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Ln(this),this.i=null,t=ds(this,t),nm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function rm(t,e,n){tm(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),tl(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function R_(t,e){e&&!t.j&&(Ln(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(tm(this,r),rm(this,s,n))},t)),t.j=e}var N_=class{constructor(e,n){this.h=e,this.g=n}};function sm(t){this.l=t||O_,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var O_=10;function im(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function om(t){return t.h?1:t.g?t.g.size:0}function Zc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function pl(t,e){t.g?t.g.add(e):t.h=e}function am(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}sm.prototype.cancel=function(){if(this.i=cm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function cm(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return tl(t.i)}function gl(){}gl.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};gl.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function P_(){this.g=new gl}function M_(t,e,n){const r=n||"";try{Zg(t,function(s,i){let o=s;Si(s)&&(o=cl(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function L_(t,e){const n=new _a;if(W.Image){const r=new Image;r.onload=Wi(Xi,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Wi(Xi,n,r,"TestLoadImage: error",!1,e),r.onabort=Wi(Xi,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Wi(Xi,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Xi(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ri(t){this.l=t.ac||null,this.j=t.jb||!1}Ke(Ri,hl);Ri.prototype.g=function(){return new Da(this.l,this.j)};Ri.prototype.i=function(t){return function(){return t}}({});function Da(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=ml,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(Da,Le);var ml=0;V=Da.prototype;V.open=function(t,e){if(this.readyState!=ml)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ii(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ni(this)),this.readyState=ml};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ii(this)),this.g&&(this.readyState=3,ii(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;um(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function um(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ni(this):ii(this),this.readyState==3&&um(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Ni(this))};V.Ua=function(t){this.g&&(this.response=t,Ni(this))};V.ga=function(){this.g&&Ni(this)};function Ni(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ii(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ii(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Da.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var F_=W.JSON.parse;function Ce(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lm,this.K=this.L=!1}Ke(Ce,Le);var lm="",U_=/^https?$/i,V_=["POST","PUT"];V=Ce.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qc.g(),this.C=this.u?ld(this.u):ld(Qc),this.g.onreadystatechange=We(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){fd(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=W.FormData&&t instanceof W.FormData,!(0<=Ag(V_,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fm(this),0<this.B&&((this.K=B_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.qa,this)):this.A=ll(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){fd(this,i)}};function B_(t){return Xr&&r_()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof el<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function fd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hm(t),Ra(t)}function hm(t){t.D||(t.D=!0,je(t,"complete"),je(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Ra(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ra(this,!0)),Ce.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?dm(this):this.fb())};V.fb=function(){dm(this)};function dm(t){if(t.h&&typeof el<"u"&&(!t.C[1]||Jt(t)!=4||t.aa()!=2)){if(t.v&&Jt(t)==4)ll(t.Ha,0,t);else if(je(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var s=String(t.H).match(em)[1]||null;if(!s&&W.self&&W.self.location){var i=W.self.location.protocol;s=i.substr(0,i.length-1)}r=!U_.test(s?s.toLowerCase():"")}n=r}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var o=2<Jt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",hm(t)}}finally{Ra(t)}}}}function Ra(t,e){if(t.g){fm(t);const n=t.g,r=t.C[0]?Mo:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=r}catch{}}}function fm(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function Jt(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),F_(e)}};function pd(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pm(t){let e="";return rl(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function yl(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=pm(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function Is(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gm(t){this.Ca=0,this.i=[],this.j=new _a,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Is("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Is("baseRetryDelayMs",5e3,t),this.bb=Is("retryDelaySeedMs",1e4,t),this.$a=Is("forwardChannelMaxRetries",2,t),this.ta=Is("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new sm(t&&t.concurrentRequestLimit),this.Fa=new P_,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=gm.prototype;V.ma=8;V.G=1;function vl(t){if(mm(t),t.G==3){var e=t.U++,n=on(t.F);be(n,"SID",t.I),be(n,"RID",e),be(n,"TYPE","terminate"),Oi(t,n),e=new xi(t,t.j,e,void 0),e.K=2,e.v=xa(on(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=_m(e.l,null),e.g.da(e.v)),e.F=Date.now(),Di(e)}Em(t)}function Na(t){t.g&&(Il(t),t.g.cancel(),t.g=null)}function mm(t){Na(t),t.u&&(W.clearTimeout(t.u),t.u=null),$o(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Oa(t){im(t.h)||t.m||(t.m=!0,Ug(t.Ja,t),t.C=0)}function $_(t,e){return om(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ci(We(t.Ja,t,e),bm(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new xi(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Dg(i),Rg(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ym(this,s,e),n=on(this.F),be(n,"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),Oi(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(pm(i)))+"&"+e:this.o&&yl(n,this.o,i)),pl(this.h,s),this.Ya&&be(n,"TYPE","init"),this.O?(be(n,"$req",e),be(n,"SID","null"),s.Z=!0,Yc(s,n,null)):Yc(s,n,e),this.G=2}}else this.G==3&&(t?gd(this,t):this.i.length==0||im(this.h)||gd(this))};function gd(t,e){var n;e?n=e.m:n=t.U++;const r=on(t.F);be(r,"SID",t.I),be(r,"RID",n),be(r,"AID",t.T),Oi(t,r),t.o&&t.s&&yl(r,t.o,t.s),n=new xi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=ym(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),pl(t.h,n),Yc(n,r,e)}function Oi(t,e){t.ia&&rl(t.ia,function(n,r){be(e,r,n)}),t.l&&Zg({},function(n,r){be(e,r,n)})}function ym(t,e,n){n=Math.min(t.i.length,n);var r=t.l?We(t.l.Ra,t.l,t):null;e:{var s=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{M_(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function vm(t){t.g||t.u||(t.Z=1,Ug(t.Ia,t),t.A=0)}function wl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ci(We(t.Ia,t),bm(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,wm(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ci(We(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Je(10),Na(this),wm(this))};function Il(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function wm(t){t.g=new xi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=on(t.sa);be(e,"RID","rpc"),be(e,"SID",t.I),be(e,"CI",t.L?"0":"1"),be(e,"AID",t.T),be(e,"TYPE","xmlhttp"),Oi(t,e),t.o&&t.s&&yl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=xa(on(e)),n.s=null,n.P=!0,Qg(n,t)}V.cb=function(){this.v!=null&&(this.v=null,Na(this),wl(this),Je(19))};function $o(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Im(t,e){var n=null;if(t.g==e){$o(t),Il(t),t.g=null;var r=2}else if(Zc(t.h,e))n=e.D,am(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=Sa(),je(r,new Hg(r,n)),Oa(t)}else vm(t);else if(s=e.o,s==3||s==0&&0<t.pa||!(r==1&&$_(t,e)||r==2&&wl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:tr(t,5);break;case 4:tr(t,10);break;case 3:tr(t,6);break;default:tr(t,2)}}}function bm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function tr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=We(t.kb,t);n||(n=new ir("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Vo(n,"https"),xa(n)),L_(n.toString(),r)}else Je(2);t.G=0,t.l&&t.l.va(e),Em(t),mm(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function Em(t){if(t.G=0,t.la=[],t.l){const e=cm(t.h);(e.length!=0||t.i.length!=0)&&(sd(t.la,e),sd(t.la,t.i),t.h.i.length=0,tl(t.i),t.i.length=0),t.l.ua()}}function Tm(t,e,n){var r=n instanceof ir?on(n):new ir(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Bo(r,r.m);else{var s=W.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new ir(null,void 0);r&&Vo(i,r),e&&(i.g=e),s&&Bo(i,s),n&&(i.l=n),r=i}return n=t.D,e=t.za,n&&e&&be(r,n,e),be(r,"VER",t.ma),Oi(t,r),r}function _m(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ce(new Ri({jb:!0})):new Ce(t.ra),e.Ka(t.H),e}function Sm(){}V=Sm.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function jo(){if(Xr&&!(10<=Number(s_)))throw Error("Environmental error: no available transport.")}jo.prototype.g=function(t,e){return new gt(t,e)};function gt(t,e){Le.call(this),this.g=new gm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Lo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Lo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new fs(this)}Ke(gt,Le);gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Je(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Tm(t,null,t.V),Oa(t)};gt.prototype.close=function(){vl(this.g)};gt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=cl(t),t=n);e.i.push(new N_(e.ab++,t)),e.G==3&&Oa(e)};gt.prototype.M=function(){this.g.l=null,delete this.j,vl(this.g),delete this.g,gt.X.M.call(this)};function Am(t){dl.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(Am,dl);function Cm(){fl.call(this),this.status=1}Ke(Cm,fl);function fs(t){this.g=t}Ke(fs,Sm);fs.prototype.xa=function(){je(this.g,"a")};fs.prototype.wa=function(t){je(this.g,new Am(t))};fs.prototype.va=function(t){je(this.g,new Cm)};fs.prototype.ua=function(){je(this.g,"b")};jo.prototype.createWebChannel=jo.prototype.g;gt.prototype.send=gt.prototype.u;gt.prototype.open=gt.prototype.m;gt.prototype.close=gt.prototype.close;Aa.NO_ERROR=0;Aa.TIMEOUT=8;Aa.HTTP_ERROR=6;zg.COMPLETE="complete";Gg.EventType=ki;ki.OPEN="a";ki.CLOSE="b";ki.ERROR="c";ki.MESSAGE="d";Le.prototype.listen=Le.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.Oa;Ce.prototype.getLastErrorCode=Ce.prototype.Ea;Ce.prototype.getStatus=Ce.prototype.aa;Ce.prototype.getResponseJson=Ce.prototype.Sa;Ce.prototype.getResponseText=Ce.prototype.fa;Ce.prototype.send=Ce.prototype.da;Ce.prototype.setWithCredentials=Ce.prototype.Ka;var j_=function(){return new jo},q_=function(){return Sa()},yc=Aa,K_=zg,H_=vr,md={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},z_=Ri,Yi=Gg,G_=Ce;const yd="@firebase/firestore";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let ps="9.16.0";/**
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
 */const lr=new pa("@firebase/firestore");function eu(){return lr.logLevel}function S(t,...e){if(lr.logLevel<=ue.DEBUG){const n=e.map(bl);lr.debug(`Firestore (${ps}): ${t}`,...n)}}function Ye(t,...e){if(lr.logLevel<=ue.ERROR){const n=e.map(bl);lr.error(`Firestore (${ps}): ${t}`,...n)}}function qo(t,...e){if(lr.logLevel<=ue.WARN){const n=e.map(bl);lr.warn(`Firestore (${ps}): ${t}`,...n)}}function bl(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw Ye(e),new Error(e)}function j(t,e){t||U()}function Y(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class km{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class W_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ve.UNAUTHENTICATED))}shutdown(){}}class Q_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class X_{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new qt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new qt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new km(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new Ve(e)}}class Y_{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(j(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class J_{constructor(e,n,r,s){this.h=e,this.l=n,this.m=r,this.g=s}getToken(){return Promise.resolve(new Y_(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Z_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eS{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=i=>{i.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?s(i):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(j(typeof n.token=="string"),this.A=n.token,new Z_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function tS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class xm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=tS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Yr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function Dm(t){return t+"\0"}/**
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
 */class _e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new _e(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{constructor(e){this.timestamp=e}static fromTimestamp(e){return new H(e)}static min(){return new H(new _e(0,0))}static max(){return new H(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class oi{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends oi{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const nS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends oi{construct(e,n,r){return new Re(e,n,r)}static isValidIdentifier(e){return nS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new B(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new B(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new B(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
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
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(ye.fromString(e))}static fromName(e){return new O(ye.fromString(e).popFirst(5))}static empty(){return new O(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new ye(e.slice()))}}/**
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
 */class Rm{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function tu(t){return t.fields.find(e=>e.kind===2)}function zn(t){return t.fields.filter(e=>e.kind!==2)}Rm.UNKNOWN_ID=-1;class rS{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ko{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ko(0,mt.min())}}function sS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=H.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new mt(s,O.empty(),e)}function Nm(t){return new mt(t.readTime,t.key,-1)}class mt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mt(H.min(),O.empty(),-1)}static max(){return new mt(H.max(),O.empty(),-1)}}function El(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
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
 */const Om="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wr(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Om)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new m((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):m.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):m.reject(n)}static resolve(e){return new m((n,r)=>{n(e)})}static reject(e){return new m((n,r)=>{r(e)})}static waitFor(e){return new m((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=m.resolve(!1);for(const r of e)n=n.next(s=>s?m.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new m((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,n){return new m((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Pa{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new qt,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Fs(e,n.error)):this.P.resolve()},this.transaction.onerror=r=>{const s=Tl(r.target.error);this.P.reject(new Fs(e,s))}}static open(e,n,r,s){try{return new Pa(n,e.transaction(s,r))}catch(i){throw new Fs(n,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(S("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new oS(n)}}class Zt{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Zt.D(Pe())===12.2&&Ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return S("SimpleDb","Removing database:",e),Qn(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!fa())return!1;if(Zt.N())return!0;const e=Pe(),n=Zt.D(e),r=0<n&&n<10,s=Zt.k(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static k(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async F(e){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Fs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new B(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Fs(e,o))},s.onupgradeneeded=i=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.$(o,s.transaction,i.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Pa.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class iS{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return Qn(this.q.delete())}}class Fs extends B{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Fn(t){return t.name==="IndexedDbTransactionError"}class oS{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(S("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Qn(r)}add(e){return S("SimpleDb","ADD",this.store.name,e,e),Qn(this.store.add(e))}get(e){return Qn(this.store.get(e)).next(n=>(n===void 0&&(n=null),S("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return S("SimpleDb","DELETE",this.store.name,e),Qn(this.store.delete(e))}count(){return S("SimpleDb","COUNT",this.store.name),Qn(this.store.count())}W(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.H(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new m((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}J(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new m((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}Y(e,n){S("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.X=!1;const s=this.cursor(r);return this.H(s,(i,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.H(s,n)}tt(e){const n=this.cursor({});return new m((r,s)=>{n.onerror=i=>{const o=Tl(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}H(e,n){const r=[];return new m((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new iS(a),u=n(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));r.push(l)}c.isDone?s():c.G===null?a.continue():a.continue(c.G)}}).next(()=>m.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Qn(t){return new m((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Tl(r.target.error);n(s)}})}let vd=!1;function Tl(t){const e=Zt.D(Pe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return vd||(vd=!0,setTimeout(()=>{throw r},0)),r}}return t}class aS{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){S("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{S("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){Fn(n)?S("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await wr(n)}await this.nt(6e4)})}}class cS{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const r=new Set;let s=n,i=!0;return m.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return S("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}rt(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(s,i)).next(a=>(S("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=Nm(i);El(o,r)>0&&(r=o)}),new mt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class It{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}It.at=-1;/**
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
 */class uS{constructor(e,n,r,s,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class hr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new hr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof hr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function wd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ir(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function Ma(t){return t==null}function ai(t){return t===0&&1/t==-1/0}function lS(t){return typeof t=="number"&&Number.isInteger(t)&&!ai(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new qe(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const hS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(t){if(j(!!t),typeof t=="string"){let e=0;const n=hS.exec(t);if(j(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function Lm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fm(t){const e=t.mapValue.fields.__previous_value__;return Lm(e)?Fm(e):e}function ci(t){const e=Rn(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */const Tn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},yo={nullValue:"NULL_VALUE"};function fr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lm(t)?4:Um(t)?9007199254740991:10:U()}function zt(t,e){if(t===e)return!0;const n=fr(t);if(n!==fr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ci(t).isEqual(ci(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Rn(r.timestampValue),o=Rn(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return dr(r.bytesValue).isEqual(dr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Se(r.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(r.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Se(r.integerValue)===Se(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Se(r.doubleValue),o=Se(s.doubleValue);return i===o?ai(i)===ai(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Yr(t.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(wd(i)!==wd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!zt(i[a],o[a])))return!1;return!0}(t,e);default:return U()}}function ui(t,e){return(t.values||[]).find(n=>zt(n,e))!==void 0}function Nn(t,e){if(t===e)return 0;const n=fr(t),r=fr(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Se(s.integerValue||s.doubleValue),a=Se(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Id(t.timestampValue,e.timestampValue);case 4:return Id(ci(t),ci(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(s,i){const o=dr(s),a=dr(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=J(o[c],a[c]);if(u!==0)return u}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const o=J(Se(s.latitude),Se(i.latitude));return o!==0?o:J(Se(s.longitude),Se(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Nn(o[c],a[c]);if(u)return u}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===Tn.mapValue&&i===Tn.mapValue)return 0;if(s===Tn.mapValue)return 1;if(i===Tn.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=J(a[l],u[l]);if(h!==0)return h;const d=Nn(o[a[l]],c[u[l]]);if(d!==0)return d}return J(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function Id(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Rn(t),r=Rn(e),s=J(n.seconds,r.seconds);return s!==0?s:J(n.nanos,r.nanos)}function Jr(t){return nu(t)}function nu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Rn(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?dr(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=nu(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${nu(r.fields[a])}`;return i+"}"}(t.mapValue):U();var e,n}function _l(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ru(t){return!!t&&"integerValue"in t}function li(t){return!!t&&"arrayValue"in t}function bd(t){return!!t&&"nullValue"in t}function Ed(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vo(t){return!!t&&"mapValue"in t}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ir(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Um(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function dS(t){return"nullValue"in t?yo:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?_l(hr.empty(),O.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:U()}function fS(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?_l(hr.empty(),O.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Tn:U()}function Td(t,e){const n=Nn(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function _d(t,e){const n=Nn(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Zr{constructor(e,n){this.position=e,this.inclusive=n}}function Sd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=Nn(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ad(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Vm{}class ie extends Vm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new pS(e,n,r):n==="array-contains"?new yS(e,r):n==="in"?new Hm(e,r):n==="not-in"?new vS(e,r):n==="array-contains-any"?new wS(e,r):new ie(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gS(e,r):new mS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Nn(n,this.value)):n!==null&&fr(this.value)===fr(n)&&this.matchesComparison(Nn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ge extends Vm{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ge(e,n)}matches(e){return es(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function es(t){return t.op==="and"}function su(t){return t.op==="or"}function Sl(t){return Bm(t)&&es(t)}function Bm(t){for(const e of t.filters)if(e instanceof ge)return!1;return!0}function iu(t){if(t instanceof ie)return t.field.canonicalString()+t.op.toString()+Jr(t.value);if(Sl(t))return t.filters.map(e=>iu(e)).join(",");{const e=t.filters.map(n=>iu(n)).join(",");return`${t.op}(${e})`}}function $m(t,e){return t instanceof ie?function(n,r){return r instanceof ie&&n.op===r.op&&n.field.isEqual(r.field)&&zt(n.value,r.value)}(t,e):t instanceof ge?function(n,r){return r instanceof ge&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,i,o)=>s&&$m(i,r.filters[o]),!0):!1}(t,e):void U()}function jm(t,e){const n=t.filters.concat(e);return ge.create(n,t.op)}function qm(t){return t instanceof ie?function(e){return`${e.field.canonicalString()} ${e.op} ${Jr(e.value)}`}(t):t instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(qm).join(" ,")+"}"}(t):"Filter"}class pS extends ie{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class gS extends ie{constructor(e,n){super(e,"in",n),this.keys=Km("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class mS extends ie{constructor(e,n){super(e,"not-in",n),this.keys=Km("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Km(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class yS extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return li(n)&&ui(n.arrayValue,this.value)}}class Hm extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ui(this.value.arrayValue,n)}}class vS extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(ui(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ui(this.value.arrayValue,n)}}class wS extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!li(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ui(this.value.arrayValue,r))}}/**
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
 */class Vs{constructor(e,n="asc"){this.field=e,this.dir=n}}function IS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ji(this.root,e,this.comparator,!0)}}class Ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Be.RED,this.left=s??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Be.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cd(this.data.getIterator())}getIteratorFrom(e){return new Cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class Cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Sr(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class ct{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new ct([])}unionWith(e){let n=new me(Re.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=Re.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Us(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());vo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];vo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ir(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ze(Us(this.value))}}function zm(t){const e=[];return Ir(t.fields,(n,r)=>{const s=new Re([n]);if(vo(r)){const i=zm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ct(e)}/**
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
 */class Ae{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ae(e,0,H.min(),H.min(),H.min(),ze.empty(),0)}static newFoundDocument(e,n,r,s){return new Ae(e,1,n,H.min(),r,s,0)}static newNoDocument(e,n){return new Ae(e,2,n,H.min(),H.min(),ze.empty(),0)}static newUnknownDocument(e,n){return new Ae(e,3,n,H.min(),H.min(),ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class bS{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function ou(t,e=null,n=[],r=[],s=null,i=null,o=null){return new bS(t,e,n,r,s,i,o)}function pr(t){const e=Y(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>iu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ma(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jr(r)).join(",")),e.ft=n}return e.ft}function Pi(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!IS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$m(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ad(t.startAt,e.startAt)&&Ad(t.endAt,e.endAt)}function Ho(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function zo(t,e){return t.filters.filter(n=>n instanceof ie&&n.field.isEqual(e))}function kd(t,e,n){let r=yo,s=!0;for(const i of zo(t,e)){let o=yo,a=!0;switch(i.op){case"<":case"<=":o=dS(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=yo}Td({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];Td({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function xd(t,e,n){let r=Tn,s=!0;for(const i of zo(t,e)){let o=Tn,a=!0;switch(i.op){case">=":case">":o=fS(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Tn}_d({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];_d({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class La{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function ES(t,e,n,r,s,i,o,a){return new La(t,e,n,r,s,i,o,a)}function Fa(t){return new La(t)}function Dd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function TS(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function _S(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function SS(t){return t.collectionGroup!==null}function Kr(t){const e=Y(t);if(e.dt===null){e.dt=[];const n=_S(e),r=TS(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Vs(n)),e.dt.push(new Vs(Re.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Vs(Re.keyField(),i))}}}return e.dt}function kt(t){const e=Y(t);if(!e._t)if(e.limitType==="F")e._t=ou(e.path,e.collectionGroup,Kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Kr(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Vs(i.field,o))}const r=e.endAt?new Zr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Zr(e.startAt.position,e.startAt.inclusive):null;e._t=ou(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function au(t,e,n){return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ua(t,e){return Pi(kt(t),kt(e))&&t.limitType===e.limitType}function Gm(t){return`${pr(kt(t))}|lt:${t.limitType}`}function cu(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>qm(r)).join(", ")}]`),Ma(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jr(r)).join(",")),`Target(${n})`}(kt(t))}; limitType=${t.limitType})`}function Al(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):O.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of Kr(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,i,o){const a=Sd(s,i,o);return s.inclusive?a<=0:a<0}(n.startAt,Kr(n),r)||n.endAt&&!function(s,i,o){const a=Sd(s,i,o);return s.inclusive?a>=0:a>0}(n.endAt,Kr(n),r))}(t,e)}function AS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wm(t){return(e,n)=>{let r=!1;for(const s of Kr(t)){const i=CS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function CS(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Nn(a,c):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */function Qm(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ai(e)?"-0":e}}function Xm(t){return{integerValue:""+t}}function kS(t,e){return lS(e)?Xm(e):Qm(t,e)}/**
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
 */class Va{constructor(){this._=void 0}}function xS(t,e,n){return t instanceof hi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof ts?Jm(t,e):t instanceof ns?Zm(t,e):function(r,s){const i=Ym(r,s),o=Rd(i)+Rd(r.gt);return ru(i)&&ru(r.gt)?Xm(o):Qm(r.yt,o)}(t,e)}function DS(t,e,n){return t instanceof ts?Jm(t,e):t instanceof ns?Zm(t,e):n}function Ym(t,e){return t instanceof di?ru(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class hi extends Va{}class ts extends Va{constructor(e){super(),this.elements=e}}function Jm(t,e){const n=ey(e);for(const r of t.elements)n.some(s=>zt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ns extends Va{constructor(e){super(),this.elements=e}}function Zm(t,e){let n=ey(e);for(const r of t.elements)n=n.filter(s=>!zt(s,r));return{arrayValue:{values:n}}}class di extends Va{constructor(e,n){super(),this.yt=e,this.gt=n}}function Rd(t){return Se(t.integerValue||t.doubleValue)}function ey(t){return li(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class RS{constructor(e,n){this.field=e,this.transform=n}}function NS(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ts&&r instanceof ts||n instanceof ns&&r instanceof ns?Yr(n.elements,r.elements,zt):n instanceof di&&r instanceof di?zt(n.gt,r.gt):n instanceof hi&&r instanceof hi}(t.transform,e.transform)}class OS{constructor(e,n){this.version=e,this.transformResults=n}}class ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function wo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ba{}function ty(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cl(t.key,ut.none()):new gs(t.key,t.data,ut.none());{const n=t.data,r=ze.empty();let s=new me(Re.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new un(t.key,r,new ct(s.toArray()),ut.none())}}function PS(t,e,n){t instanceof gs?function(r,s,i){const o=r.value.clone(),a=Od(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof un?function(r,s,i){if(!wo(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Od(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(ny(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof gs?function(s,i,o,a){if(!wo(s.precondition,i))return o;const c=s.value.clone(),u=Pd(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof un?function(s,i,o,a){if(!wo(s.precondition,i))return o;const c=Pd(s.fieldTransforms,a,i),u=i.data;return u.setAll(ny(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(t,e,n,r):function(s,i,o){return wo(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function MS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Ym(r.transform,s||null);i!=null&&(n===null&&(n=ze.empty()),n.set(r.field,i))}return n||null}function Nd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Yr(n,r,(s,i)=>NS(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class gs extends Ba{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class un extends Ba{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ny(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Od(t,e,n){const r=new Map;j(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,DS(o,a,n[s]))}return r}function Pd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,xS(i,o,e))}return r}class Cl extends Ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ry extends Ba{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LS{constructor(e){this.count=e}}/**
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
 */var De,oe;function FS(t){switch(t){default:return U();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function sy(t){if(t===void 0)return Ye("GRPC error has no .code"),T.UNKNOWN;switch(t){case De.OK:return T.OK;case De.CANCELLED:return T.CANCELLED;case De.UNKNOWN:return T.UNKNOWN;case De.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case De.INTERNAL:return T.INTERNAL;case De.UNAVAILABLE:return T.UNAVAILABLE;case De.UNAUTHENTICATED:return T.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case De.NOT_FOUND:return T.NOT_FOUND;case De.ALREADY_EXISTS:return T.ALREADY_EXISTS;case De.PERMISSION_DENIED:return T.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case De.ABORTED:return T.ABORTED;case De.OUT_OF_RANGE:return T.OUT_OF_RANGE;case De.UNIMPLEMENTED:return T.UNIMPLEMENTED;case De.DATA_LOSS:return T.DATA_LOSS;default:return U()}}(oe=De||(De={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Un{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mm(this.inner)}size(){return this.innerSize}}/**
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
 */const US=new Ne(O.comparator);function ht(){return US}const iy=new Ne(O.comparator);function Rs(...t){let e=iy;for(const n of t)e=e.insert(n.key,n);return e}function oy(t){let e=iy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Vt(){return $s()}function ay(){return $s()}function $s(){return new Un(t=>t.toString(),(t,e)=>t.isEqual(e))}const VS=new Ne(O.comparator),BS=new me(O.comparator);function ne(...t){let e=BS;for(const n of t)e=e.add(n);return e}const $S=new me(J);function cy(){return $S}/**
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
 */class $a{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Mi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $a(H.min(),s,cy(),ht(),ne())}}class Mi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Mi(r,n,ne(),ne(),ne())}}/**
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
 */class Io{constructor(e,n,r,s){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=s}}class uy{constructor(e,n){this.targetId=e,this.Et=n}}class ly{constructor(e,n,r=qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Md{constructor(){this.At=0,this.Rt=Fd(),this.bt=qe.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ne(),n=ne(),r=ne();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:U()}}),new Mi(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=Fd()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class jS{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=ht(),this.qt=Ld(),this.Ut=new me(J)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,s)=>{this.zt(s)&&n(s)})}Jt(e){const n=e.targetId,r=e.Et.count,s=this.Yt(n);if(s){const i=s.target;if(Ho(i))if(r===0){const o=new O(i.path);this.Qt(n,o,Ae.newNoDocument(o,H.min()))}else j(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Ho(a.target)){const c=new O(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ae.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let r=ne();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new $a(e,n,this.Ut,this.Lt,r);return this.Lt=ht(),this.qt=Ld(),this.Ut=new me(J),s}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const s=this.Wt(e);this.te(e,n)?s.Nt(n,1):s.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Md,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new me(J),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Md),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Ld(){return new Ne(O.comparator)}function Fd(){return new Ne(O.comparator)}/**
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
 */const qS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),KS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),HS=(()=>({and:"AND",or:"OR"}))();class zS{constructor(e,n){this.databaseId=e,this.wt=n}}function rs(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hy(t,e){return t.wt?e.toBase64():e.toUint8Array()}function GS(t,e){return rs(t,e.toTimestamp())}function Ze(t){return j(!!t),H.fromTimestamp(function(e){const n=Rn(e);return new _e(n.seconds,n.nanos)}(t))}function kl(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function dy(t){const e=ye.fromString(t);return j(Iy(e)),e}function Go(t,e){return kl(t.databaseId,e.path)}function or(t,e){const n=dy(e);if(n.get(1)!==t.databaseId.projectId)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(py(n))}function uu(t,e){return kl(t.databaseId,e)}function fy(t){const e=dy(t);return e.length===4?ye.emptyPath():py(e)}function lu(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function py(t){return j(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ud(t,e,n){return{name:Go(t,e),fields:n.value.mapValue.fields}}function WS(t,e,n){const r=or(t,e.name),s=Ze(e.updateTime),i=e.createTime?Ze(e.createTime):H.min(),o=new ze({mapValue:{fields:e.fields}}),a=Ae.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function QS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(j(u===void 0||typeof u=="string"),qe.fromBase64String(u||"")):(j(u===void 0||u instanceof Uint8Array),qe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:sy(c.code);return new B(u,c.message||"")}(o);n=new ly(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=or(t,r.document.name),i=Ze(r.document.updateTime),o=r.document.createTime?Ze(r.document.createTime):H.min(),a=new ze({mapValue:{fields:r.document.fields}}),c=Ae.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Io(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=or(t,r.document),i=r.readTime?Ze(r.readTime):H.min(),o=Ae.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Io([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=or(t,r.document),i=r.removedTargetIds||[];n=new Io([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new LS(s),o=r.targetId;n=new uy(o,i)}}return n}function Wo(t,e){let n;if(e instanceof gs)n={update:Ud(t,e.key,e.value)};else if(e instanceof Cl)n={delete:Go(t,e.key)};else if(e instanceof un)n={update:Ud(t,e.key,e.data),updateMask:tA(e.fieldMask)};else{if(!(e instanceof ry))return U();n={verify:Go(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof hi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ts)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ns)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof di)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:GS(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function hu(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?ut.updateTime(Ze(s.updateTime)):s.exists!==void 0?ut.exists(s.exists):ut.none()}(e.currentDocument):ut.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)j(o.setToServerValue==="REQUEST_TIME"),a=new hi;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new ts(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new ns(u)}else"increment"in o?a=new di(i,o.increment):U();const c=Re.fromServerFormat(o.fieldPath);return new RS(c,a)}(t,s)):[];if(e.update){e.update.name;const s=or(t,e.update.name),i=new ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new ct(c.map(u=>Re.fromServerFormat(u)))}(e.updateMask);return new un(s,i,o,n,r)}return new gs(s,i,n,r)}if(e.delete){const s=or(t,e.delete);return new Cl(s,n)}if(e.verify){const s=or(t,e.verify);return new ry(s,n)}return U()}function XS(t,e){return t&&t.length>0?(j(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?Ze(r.updateTime):Ze(s);return i.isEqual(H.min())&&(i=Ze(s)),new OS(i,r.transformResults||[])}(n,e))):[]}function gy(t,e){return{documents:[uu(t,e.path)]}}function my(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=uu(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=uu(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return wy(ge.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Dr(l.field),direction:JS(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||Ma(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function yy(t){let e=fy(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){j(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=vy(l);return h instanceof ge&&Sl(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Vs(Rr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ma(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Zr(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Zr(d,h)}(n.endAt)),ES(e,s,o,i,a,"F",c,u)}function YS(t,e){const n=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function vy(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Rr(e.unaryFilter.field);return ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Rr(e.unaryFilter.field);return ie.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Rr(e.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Rr(e.unaryFilter.field);return ie.create(i,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return ie.create(Rr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(n=>vy(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function JS(t){return qS[t]}function ZS(t){return KS[t]}function eA(t){return HS[t]}function Dr(t){return{fieldPath:t.canonicalString()}}function Rr(t){return Re.fromServerFormat(t.fieldPath)}function wy(t){return t instanceof ie?function(e){if(e.op==="=="){if(Ed(e.value))return{unaryFilter:{field:Dr(e.field),op:"IS_NAN"}};if(bd(e.value))return{unaryFilter:{field:Dr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ed(e.value))return{unaryFilter:{field:Dr(e.field),op:"IS_NOT_NAN"}};if(bd(e.value))return{unaryFilter:{field:Dr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(e.field),op:ZS(e.op),value:e.value}}}(t):t instanceof ge?function(e){const n=e.getFilters().map(r=>wy(r));return n.length===1?n[0]:{compositeFilter:{op:eA(e.op),filters:n}}}(t):U()}function tA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Iy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function et(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vd(e)),e=nA(t.get(n),e);return Vd(e)}function nA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function Vd(t){return t+""}function Bt(t){const e=t.length;if(j(e>=2),e===2)return j(t.charAt(0)===""&&t.charAt(1)===""),ye.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&U(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:U()}i=o+2}return new ye(r)}/**
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
 */const Bd=["userId","batchId"];/**
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
 */function bo(t,e){return[t,et(e)]}function by(t,e,n){return[t,et(e),n]}const rA={},sA=["prefixPath","collectionGroup","readTime","documentId"],iA=["prefixPath","collectionGroup","documentId"],oA=["collectionGroup","readTime","prefixPath","documentId"],aA=["canonicalId","targetId"],cA=["targetId","path"],uA=["path","targetId"],lA=["collectionId","parent"],hA=["indexId","uid"],dA=["uid","sequenceNumber"],fA=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],pA=["indexId","uid","orderedDocumentKey"],gA=["userId","collectionPath","documentId"],mA=["userId","collectionPath","largestBatchId"],yA=["userId","collectionGroup","largestBatchId"],Ey=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],vA=[...Ey,"documentOverlays"],Ty=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],_y=Ty,wA=[..._y,"indexConfiguration","indexState","indexEntries"];/**
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
 */class du extends Pm{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function Fe(t,e){const n=Y(t);return Zt.M(n.se,e)}/**
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
 */class xl{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&PS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ay();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=ty(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,(n,r)=>Nd(n,r))&&Yr(this.baseMutations,e.baseMutations,(n,r)=>Nd(n,r))}}class Dl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){j(e.mutations.length===r.length);let s=VS;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Dl(e,n,r,s)}}/**
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
 */class Rl{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kn{constructor(e,n,r,s,i=H.min(),o=H.min(),a=qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class Sy{constructor(e){this.ie=e}}function IA(t,e){let n;if(e.document)n=WS(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),s=mr(e.noDocument.readTime);n=Ae.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const r=O.fromSegments(e.unknownDocument.path),s=mr(e.unknownDocument.version);n=Ae.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(r){const s=new _e(r[0],r[1]);return H.fromTimestamp(s)}(e.readTime)),n}function $d(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Qo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:Go(s,i.key),fields:i.data.value.mapValue.fields,updateTime:rs(s,i.version.toTimestamp()),createTime:rs(s,i.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:gr(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:n.path.toArray(),version:gr(e.version)}}return r}function Qo(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function gr(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function mr(t){const e=new _e(t.seconds,t.nanoseconds);return H.fromTimestamp(e)}function Xn(t,e){const n=(e.baseMutations||[]).map(i=>hu(t.ie,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>hu(t.ie,i)),s=_e.fromMillis(e.localWriteTimeMs);return new xl(e.batchId,s,n,r)}function Ns(t){const e=mr(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?mr(t.lastLimboFreeSnapshotVersion):H.min();let r;var s;return t.query.documents!==void 0?(j((s=t.query).documents.length===1),r=kt(Fa(fy(s.documents[0])))):r=function(i){return kt(yy(i))}(t.query),new kn(r,t.targetId,0,t.lastListenSequenceNumber,e,n,qe.fromBase64String(t.resumeToken))}function Ay(t,e){const n=gr(e.snapshotVersion),r=gr(e.lastLimboFreeSnapshotVersion);let s;s=Ho(e.target)?gy(t.ie,e.target):my(t.ie,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:pr(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Cy(t){const e=yy({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?au(e,e.limit,"L"):e}function vc(t,e){return new Rl(e.largestBatchId,hu(t.ie,e.overlayMutation))}function jd(t,e){const n=e.path.lastSegment();return[t,et(e.path.popLast()),n]}function qd(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:gr(r.readTime),documentKey:et(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class bA{getBundleMetadata(e,n){return Kd(e).get(n).next(r=>{if(r)return{id:(s=r).bundleId,createTime:mr(s.createTime),version:s.version};var s})}saveBundleMetadata(e,n){return Kd(e).put({bundleId:(r=n).id,createTime:gr(Ze(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return Hd(e).get(n).next(r=>{if(r)return{name:(s=r).name,query:Cy(s.bundledQuery),readTime:mr(s.readTime)};var s})}saveNamedQuery(e,n){return Hd(e).put(function(r){return{name:r.name,readTime:gr(Ze(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Kd(t){return Fe(t,"bundles")}function Hd(t){return Fe(t,"namedQueries")}/**
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
 */class ja{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const r=n.uid||"";return new ja(e,r)}getOverlay(e,n){return bs(e).get(jd(this.userId,n)).next(r=>r?vc(this.yt,r):null)}getOverlays(e,n){const r=Vt();return m.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new Rl(n,o);s.push(this.oe(e,a))}),m.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(et(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(bs(e).Y("collectionPathOverlayIndex",a))}),m.waitFor(i)}getOverlaysForCollection(e,n,r){const s=Vt(),i=et(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return bs(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=vc(this.yt,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=Vt();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return bs(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=vc(this.yt,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}oe(e,n){return bs(e).put(function(r,s,i){const[o,a,c]=jd(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Wo(r.ie,i.mutation)}}(this.yt,this.userId,n))}}function bs(t){return Fe(t,"documentOverlays")}/**
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
 */class Yn{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le(Se(e.integerValue));else if("doubleValue"in e){const r=Se(e.doubleValue);isNaN(r)?this.he(n,13):(this.he(n,15),ai(r)?n.le(0):n.le(r))}else if("timestampValue"in e){const r=e.timestampValue;this.he(n,20),typeof r=="string"?n.fe(r):(n.fe(`${r.seconds||""}`),n.le(r.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(dr(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.he(n,45),n.le(r.latitude||0),n.le(r.longitude||0)}else"mapValue"in e?Um(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):U()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const r=e.fields||{};this.he(n,55);for(const s of Object.keys(r))this.de(s,n),this.ce(r[s],n)}ye(e,n){const r=e.values||[];this.he(n,50);for(const s of r)this.ce(s,n)}me(e,n){this.he(n,37),O.fromName(e).path.forEach(r=>{this.he(n,60),this.pe(r,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}Yn.Ie=new Yn;function EA(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function zd(t){const e=64-function(n){let r=0;for(let s=0;s<8;++s){const i=EA(255&n[s]);if(r+=i,i!==8)break}return r}(t);return Math.ceil(e/8)}class TA{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ee(r.value),r=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.be(r.value),r=n.next();this.Pe()}ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ee(r);else if(r<2048)this.Ee(960|r>>>6),this.Ee(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r);else{const s=n.codePointAt(0);this.Ee(240|s>>>18),this.Ee(128|63&s>>>12),this.Ee(128|63&s>>>6),this.Ee(128|63&s)}}this.Ae()}Ve(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.be(r);else if(r<2048)this.be(960|r>>>6),this.be(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|r>>>12),this.be(128|63&r>>>6),this.be(128|63&r);else{const s=n.codePointAt(0);this.be(240|s>>>18),this.be(128|63&s>>>12),this.be(128|63&s>>>6),this.be(128|63&s)}}this.Pe()}Se(e){const n=this.De(e),r=zd(n);this.Ce(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}xe(e){const n=this.De(e),r=zd(n);this.Ce(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class _A{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class SA{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class Es{constructor(){this.$e=new TA,this.Be=new _A(this.$e),this.Le=new SA(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
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
 */class Jn{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Jn(this.indexId,this.documentKey,this.arrayValue,r)}}function fn(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Gd(t.arrayValue,e.arrayValue),n!==0?n:(n=Gd(t.directionalValue,e.directionalValue),n!==0?n:O.comparator(t.documentKey,e.documentKey)))}function Gd(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class AA{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const r=n;r.isInequality()?this.Qe=r:this.Ge.push(r)}}je(e){j(e.collectionGroup===this.collectionId);const n=tu(e);if(n!==void 0&&!this.We(n))return!1;const r=zn(e);let s=0,i=0;for(;s<r.length&&this.We(r[s]);++s);if(s===r.length)return!0;if(this.Qe!==void 0){const o=r[s];if(!this.ze(this.Qe,o)||!this.He(this.Ke[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Ke.length||!this.He(this.Ke[i++],o))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function ky(t){var e,n;if(j(t instanceof ie||t instanceof ge),t instanceof ie){if(t instanceof Hm){const s=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ie.create(t.field,"==",i)))||[];return ge.create(s,"or")}return t}const r=t.filters.map(s=>ky(s));return ge.create(r,t.op)}function CA(t){if(t.getFilters().length===0)return[];const e=gu(ky(t));return j(xy(e)),fu(e)||pu(e)?[e]:e.getFilters()}function fu(t){return t instanceof ie}function pu(t){return t instanceof ge&&Sl(t)}function xy(t){return fu(t)||pu(t)||function(e){if(e instanceof ge&&su(e)){for(const n of e.getFilters())if(!fu(n)&&!pu(n))return!1;return!0}return!1}(t)}function gu(t){if(j(t instanceof ie||t instanceof ge),t instanceof ie)return t;if(t.filters.length===1)return gu(t.filters[0]);const e=t.filters.map(r=>gu(r));let n=ge.create(e,t.op);return n=Xo(n),xy(n)?n:(j(n instanceof ge),j(es(n)),j(n.filters.length>1),n.filters.reduce((r,s)=>Nl(r,s)))}function Nl(t,e){let n;return j(t instanceof ie||t instanceof ge),j(e instanceof ie||e instanceof ge),n=t instanceof ie?e instanceof ie?function(r,s){return ge.create([r,s],"and")}(t,e):Wd(t,e):e instanceof ie?Wd(e,t):function(r,s){if(j(r.filters.length>0&&s.filters.length>0),es(r)&&es(s))return jm(r,s.getFilters());const i=su(r)?r:s,o=su(r)?s:r,a=i.filters.map(c=>Nl(c,o));return ge.create(a,"or")}(t,e),Xo(n)}function Wd(t,e){if(es(e))return jm(e,t.getFilters());{const n=e.filters.map(r=>Nl(t,r));return ge.create(n,"or")}}function Xo(t){if(j(t instanceof ie||t instanceof ge),t instanceof ie)return t;const e=t.getFilters();if(e.length===1)return Xo(e[0]);if(Bm(t))return t;const n=e.map(s=>Xo(s)),r=[];return n.forEach(s=>{s instanceof ie?r.push(s):s instanceof ge&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ge.create(r,t.op)}/**
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
 */class kA{constructor(){this.Je=new Ol}addToCollectionParentIndex(e,n){return this.Je.add(n),m.resolve()}getCollectionParents(e,n){return m.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return m.resolve()}deleteFieldIndex(e,n){return m.resolve()}getDocumentsMatchingTarget(e,n){return m.resolve(null)}getIndexType(e,n){return m.resolve(0)}getFieldIndexes(e,n){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,n){return m.resolve(mt.min())}getMinOffsetFromCollectionGroup(e,n){return m.resolve(mt.min())}updateCollectionGroup(e,n,r){return m.resolve()}updateIndexEntries(e,n){return m.resolve()}}class Ol{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new me(ye.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new me(ye.comparator)).toArray()}}/**
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
 */const Zi=new Uint8Array(0);class xA{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new Ol,this.Xe=new Un(r=>pr(r),(r,s)=>Pi(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const i={collectionId:r,parent:et(s)};return Qd(e).put(i)}return m.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[Dm(n),""],!1,!0);return Qd(e).W(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(Bt(o.parent))}return r})}addFieldIndex(e,n){const r=eo(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=_s(e);return i.next(a=>{o.put(qd(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=eo(e),s=_s(e),i=Ts(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=Ts(e);let s=!0;const i=new Map;return m.forEach(this.Ze(n),o=>this.tn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=ne();const a=[];return m.forEach(i,(c,u)=>{var l;S("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`} to execute ${pr(n)}`);const h=function(D,z){const ee=tu(z);if(ee===void 0)return null;for(const te of zo(D,ee.fieldPath))switch(te.op){case"array-contains-any":return te.value.arrayValue.values||[];case"array-contains":return[te.value]}return null}(u,c),d=function(D,z){const ee=new Map;for(const te of zn(z))for(const de of zo(D,te.fieldPath))switch(de.op){case"==":case"in":ee.set(te.fieldPath.canonicalString(),de.value);break;case"not-in":case"!=":return ee.set(te.fieldPath.canonicalString(),de.value),Array.from(ee.values())}return null}(u,c),g=function(D,z){const ee=[];let te=!0;for(const de of zn(z)){const Ue=de.kind===0?kd(D,de.fieldPath,D.startAt):xd(D,de.fieldPath,D.startAt);ee.push(Ue.value),te&&(te=Ue.inclusive)}return new Zr(ee,te)}(u,c),y=function(D,z){const ee=[];let te=!0;for(const de of zn(z)){const Ue=de.kind===0?xd(D,de.fieldPath,D.endAt):kd(D,de.fieldPath,D.endAt);ee.push(Ue.value),te&&(te=Ue.inclusive)}return new Zr(ee,te)}(u,c),I=this.en(c,u,g),k=this.en(c,u,y),A=this.nn(c,u,d),L=this.sn(c.indexId,h,I,g.inclusive,k,y.inclusive,A);return m.forEach(L,D=>r.J(D,n.limit).next(z=>{z.forEach(ee=>{const te=O.fromSegments(ee.documentKey);o.has(te)||(o=o.add(te),a.push(te))})}))}).next(()=>a)}return m.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=CA(ge.create(e.filters,"and")).map(r=>ou(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,r,s,i,o,a){const c=(n!=null?n.length:1)*Math.max(r.length,i.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.rn(n[h/u]):Zi,g=this.on(e,d,r[h%u],s),y=this.un(e,d,i[h%u],o),I=a.map(k=>this.on(e,d,k,!0));l.push(...this.createRange(g,y,I))}return l}on(e,n,r,s){const i=new Jn(e,O.empty(),n,r);return s?i:i.Ue()}un(e,n,r,s){const i=new Jn(e,O.empty(),n,r);return s?i.Ue():i}tn(e,n){const r=new AA(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.Ze(n);return m.forEach(s,i=>this.tn(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new me(Re.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(n)&&s.length>1&&r===2?1:r)}cn(e,n){const r=new Es;for(const s of zn(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.qe(s.kind);Yn.Ie.ue(i,o)}return r.Fe()}rn(e){const n=new Es;return Yn.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const r=new Es;return Yn.Ie.ue(_l(this.databaseId,n),r.qe(function(s){const i=zn(s);return i.length===0?0:i[i.length-1].kind}(e))),r.Fe()}nn(e,n,r){if(r===null)return[];let s=[];s.push(new Es);let i=0;for(const o of zn(e)){const a=r[i++];for(const c of s)if(this.hn(n,o.fieldPath)&&li(a))s=this.ln(s,o,a);else{const u=c.qe(o.kind);Yn.Ie.ue(a,u)}}return this.fn(s)}en(e,n,r){return this.nn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Fe();return n}ln(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new Es;c.seed(a.Fe()),Yn.Ie.ue(o,c.qe(n.kind)),i.push(c)}return i}hn(e,n){return!!e.filters.find(r=>r instanceof ie&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=eo(e),s=_s(e);return(n?r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.W()).next(i=>{const o=[];return m.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Ko(l.sequenceNumber,new mt(mr(l.readTime),new O(Bt(l.documentKey)),l.largestBatchId)):Ko.empty(),d=u.fields.map(([g,y])=>new rS(Re.fromServerFormat(g),y));return new Rm(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:J(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=eo(e),i=_s(e);return this.dn(e).next(o=>s.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>m.forEach(a,c=>i.put(qd(c.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return m.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),m.forEach(a,c=>this._n(e,s,c).next(u=>{const l=this.wn(i,c);return u.isEqual(l)?m.resolve():this.mn(e,i,c,u,l)}))))})}gn(e,n,r,s){return Ts(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.an(r,n.key),documentKey:n.key.path.toArray()})}yn(e,n,r,s){return Ts(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.an(r,n.key),n.key.path.toArray()])}_n(e,n,r){const s=Ts(e);let i=new me(fn);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.an(r,n)])},(o,a)=>{i=i.add(new Jn(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}wn(e,n){let r=new me(fn);const s=this.cn(n,e);if(s==null)return r;const i=tu(n);if(i!=null){const o=e.data.field(i.fieldPath);if(li(o))for(const a of o.arrayValue.values||[])r=r.add(new Jn(n.indexId,e.key,this.rn(a),s))}else r=r.add(new Jn(n.indexId,e.key,Zi,s));return r}mn(e,n,r,s,i){S("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),g=c.getIterator();let y=Sr(d),I=Sr(g);for(;y||I;){let k=!1,A=!1;if(y&&I){const L=u(y,I);L<0?A=!0:L>0&&(k=!0)}else y!=null?A=!0:k=!0;k?(l(I),I=Sr(g)):A?(h(y),y=Sr(d)):(y=Sr(d),I=Sr(g))}}(s,i,fn,a=>{o.push(this.gn(e,n,r,a))},a=>{o.push(this.yn(e,n,r,a))}),m.waitFor(o)}dn(e){let n=1;return _s(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>fn(o,a)).filter((o,a,c)=>!a||fn(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=fn(o,e),c=fn(o,n);if(a===0)s[0]=e.Ue();else if(a>0&&c<0)s.push(o),s.push(o.Ue());else if(c>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.pn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Zi,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Zi,[]];i.push(IDBKeyRange.bound(a,c))}return i}pn(e,n){return fn(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Xd)}getMinOffset(e,n){return m.mapArray(this.Ze(n),r=>this.tn(e,r).next(s=>s||U())).next(Xd)}}function Qd(t){return Fe(t,"collectionParents")}function Ts(t){return Fe(t,"indexEntries")}function eo(t){return Fe(t,"indexConfiguration")}function _s(t){return Fe(t,"indexState")}function Xd(t){j(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;El(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new mt(e.readTime,e.documentKey,n)}/**
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
 */const Yd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ot{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Dy(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{j(a===1)}));const u=[];for(const l of n.mutations){const h=by(e,l.key.path,n.batchId);i.push(s.delete(h)),u.push(l.key)}return m.waitFor(i).next(()=>u)}function Yo(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw U();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(41943040,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);class qa{constructor(e,n,r,s){this.userId=e,this.yt=n,this.indexManager=r,this.referenceDelegate=s,this.In={}}static re(e,n,r,s){j(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new qa(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return pn(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=Nr(e),o=pn(e);return o.add({}).next(a=>{j(typeof a=="number");const c=new xl(a,n,r,s),u=function(d,g,y){const I=y.baseMutations.map(A=>Wo(d.ie,A)),k=y.mutations.map(A=>Wo(d.ie,A));return{userId:g,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:I,mutations:k}}(this.yt,this.userId,c),l=[];let h=new me((d,g)=>J(d.canonicalString(),g.canonicalString()));for(const d of s){const g=by(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(g,rA))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return pn(e).get(n).next(r=>r?(j(r.userId===this.userId),Xn(this.yt,r)):null)}Tn(e,n){return this.In[n]?m.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.In[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return pn(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(j(a.batchId>=r),i=Xn(this.yt,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return pn(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return pn(e).W("userMutationsIndex",n).next(r=>r.map(s=>Xn(this.yt,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=bo(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return Nr(e).Z({range:s},(o,a,c)=>{const[u,l,h]=o,d=Bt(l);if(u===this.userId&&n.path.isEqual(d))return pn(e).get(h).next(g=>{if(!g)throw U();j(g.userId===this.userId),i.push(Xn(this.yt,g))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new me(J);const s=[];return n.forEach(i=>{const o=bo(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Nr(e).Z({range:a},(u,l,h)=>{const[d,g,y]=u,I=Bt(g);d===this.userId&&i.path.isEqual(I)?r=r.add(y):h.done()});s.push(c)}),m.waitFor(s).next(()=>this.En(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=bo(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new me(J);return Nr(e).Z({range:o},(c,u,l)=>{const[h,d,g]=c,y=Bt(d);h===this.userId&&r.isPrefixOf(y)?y.length===s&&(a=a.add(g)):l.done()}).next(()=>this.En(e,a))}En(e,n){const r=[],s=[];return n.forEach(i=>{s.push(pn(e).get(i).next(o=>{if(o===null)throw U();j(o.userId===this.userId),r.push(Xn(this.yt,o))}))}),m.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return Dy(e.se,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),m.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return m.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return Nr(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=Bt(i[1]);s.push(c)}else a.done()}).next(()=>{j(s.length===0)})})}containsKey(e,n){return Ry(e,this.userId,n)}Rn(e){return Ny(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ry(t,e,n){const r=bo(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Nr(t).Z({range:i,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function pn(t){return Fe(t,"mutations")}function Nr(t){return Fe(t,"documentMutations")}function Ny(t){return Fe(t,"mutationQueues")}/**
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
 */class yr{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new yr(0)}static vn(){return new yr(-1)}}/**
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
 */class DA{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const r=new yr(n.highestTargetId);return n.highestTargetId=r.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>H.fromTimestamp(new _e(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Vn(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Sn(e,s)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(r=>(r.targetCount+=1,this.Cn(n,r),this.Sn(e,r))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ar(e).delete(n.targetId)).next(()=>this.Vn(e)).next(r=>(j(r.targetCount>0),r.targetCount-=1,this.Sn(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return Ar(e).Z((o,a)=>{const c=Ns(a);c.sequenceNumber<=n&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(i)).next(()=>s)}forEachTarget(e,n){return Ar(e).Z((r,s)=>{const i=Ns(s);n(i)})}Vn(e){return Jd(e).get("targetGlobalKey").next(n=>(j(n!==null),n))}Sn(e,n){return Jd(e).put("targetGlobalKey",n)}Dn(e,n){return Ar(e).put(Ay(this.yt,n))}Cn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=pr(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Ar(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=Ns(a);Pi(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=En(e);return n.forEach(o=>{const a=et(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),m.waitFor(s)}removeMatchingKeys(e,n,r){const s=En(e);return m.forEach(n,i=>{const o=et(i.path);return m.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=En(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=En(e);let i=ne();return s.Z({range:r,X:!0},(o,a,c)=>{const u=Bt(o[1]),l=new O(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const r=et(n.path),s=IDBKeyRange.bound([r],[Dm(r)],!1,!0);let i=0;return En(e).Z({index:"documentTargetsIndex",X:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ne(e,n){return Ar(e).get(n).next(r=>r?Ns(r):null)}}function Ar(t){return Fe(t,"targets")}function Jd(t){return Fe(t,"targetGlobal")}function En(t){return Fe(t,"targetDocuments")}/**
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
 */function Zd([t,e],[n,r]){const s=J(t,n);return s===0?J(e,r):s}class RA{constructor(e){this.xn=e,this.buffer=new me(Zd),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Zd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class NA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){S("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Fn(n)?S("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await wr(n)}await this.Fn(3e5)})}}class OA{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return m.resolve(It.at);const r=new RA(n);return this.$n.forEachTarget(e,s=>r.On(s.sequenceNumber)).next(()=>this.$n.Ln(e,s=>r.On(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.$n.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(S("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Yd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(S("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yd):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(S("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),eu()<=ue.DEBUG&&S("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}/**
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
 */class PA{constructor(e,n){this.db=e,this.garbageCollector=function(r,s){return new OA(r,s)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Un(e){let n=0;return this.Ln(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(r,s)=>n(s))}addReference(e,n,r){return to(e,r)}removeReference(e,n,r){return to(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return to(e,n)}Gn(e,n){return function(r,s){let i=!1;return Ny(r).tt(o=>Ry(r,o,s).next(a=>(a&&(i=!0),m.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Kn(e,(o,a)=>{if(a<=n){const c=this.Gn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,H.min()),En(e).delete([0,et(o.path)])))});s.push(c)}}).next(()=>m.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return to(e,n)}Kn(e,n){const r=En(e);let s,i=It.at;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==It.at&&n(new O(Bt(s)),i),i=u,s=c):i=It.at}).next(()=>{i!==It.at&&n(new O(Bt(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function to(t,e){return En(t).put(function(n,r){return{targetId:0,path:et(n.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class Oy{constructor(){this.changes=new Un(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?m.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class MA{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return qn(e).put(r)}removeEntry(e,n,r){return qn(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Qo(i),o[o.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Qn(e,r)))}getEntry(e,n){let r=Ae.newInvalidDocument(n);return qn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ss(n))},(s,i)=>{r=this.jn(n,i)}).next(()=>r)}Wn(e,n){let r={size:0,document:Ae.newInvalidDocument(n)};return qn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ss(n))},(s,i)=>{r={document:this.jn(n,i),size:Yo(i)}}).next(()=>r)}getEntries(e,n){let r=ht();return this.zn(e,n,(s,i)=>{const o=this.jn(s,i);r=r.insert(s,o)}).next(()=>r)}Hn(e,n){let r=ht(),s=new Ne(O.comparator);return this.zn(e,n,(i,o)=>{const a=this.jn(i,o);r=r.insert(i,a),s=s.insert(i,Yo(o))}).next(()=>({documents:r,Jn:s}))}zn(e,n,r){if(n.isEmpty())return m.resolve();let s=new me(nf);n.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Ss(s.first()),Ss(s.last())),o=s.getIterator();let a=o.getNext();return qn(e).Z({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&nf(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.j(Ss(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,r){const s=[n.popLast().toArray(),n.lastSegment(),Qo(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],i=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return qn(e).W(IDBKeyRange.bound(s,i,!0)).next(o=>{let a=ht();for(const c of o){const u=this.jn(O.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,r,s){let i=ht();const o=tf(n,r),a=tf(n,mt.max());return qn(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new LA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return ef(e).get("remoteDocumentGlobalKey").next(n=>(j(!!n),n))}Qn(e,n){return ef(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const r=IA(this.yt,n);if(!(r.isNoDocument()&&r.version.isEqual(H.min())))return r}return Ae.newInvalidDocument(e)}}function Py(t){return new MA(t)}class LA extends Oy{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Un(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new me((i,o)=>J(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Xn.get(i);if(n.push(this.Yn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=$d(this.Yn.yt,o);s=s.add(i.path.popLast());const u=Yo(c);r+=u-a.size,n.push(this.Yn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=$d(this.Yn.yt,o.convertToNoDocument(H.min()));n.push(this.Yn.addEntry(e,i,c))}}),s.forEach(i=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.Yn.updateMetadata(e,r)),m.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(r=>(this.Xn.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:r,Jn:s})=>(s.forEach((i,o)=>{this.Xn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function ef(t){return Fe(t,"remoteDocumentGlobal")}function qn(t){return Fe(t,"remoteDocumentsV14")}function Ss(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function tf(t,e){const n=e.documentKey.path.toArray();return[t,Qo(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function nf(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=J(n[i],r[i]),s)return s;return s=J(n.length,r.length),s||(s=J(n[n.length-2],r[r.length-2]),s||J(n[n.length-1],r[r.length-1]))}/**
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
 */class FA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class My{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bs(r.mutation,s,ct.empty(),_e.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=Vt();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Rs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Vt();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=ht();const o=$s(),a=$s();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof un)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Bs(l.mutation,u,l.mutation.getFieldMask(),_e.now())):o.set(u.key,ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new FA(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=$s();let s=new Ne((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||ct.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||ne()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=ay();l.forEach(d=>{if(!i.has(d)){const g=ty(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return O.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):SS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):m.resolve(Vt());let a=-1,c=i;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:oy(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let s=Rs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let i=Rs();return this.indexManager.getCollectionParents(e,s).next(o=>m.forEach(o,a=>{const c=function(u,l){return new La(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(i=>(s=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,Ae.newInvalidDocument(u)))});let o=Rs();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Bs(u.mutation,c,ct.empty(),_e.now()),Al(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class UA{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return m.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ze(r.createTime)}),m.resolve()}getNamedQuery(e,n){return m.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:Cy(r.bundledQuery),readTime:Ze(r.readTime)}}(n)),m.resolve()}}/**
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
 */class VA{constructor(){this.overlays=new Ne(O.comparator),this.es=new Map}getOverlay(e,n){return m.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Vt();return m.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.oe(e,n,i)}),m.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.es.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(r)),m.resolve()}getOverlaysForCollection(e,n,r){const s=Vt(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return m.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ne((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=Vt(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Vt(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return m.resolve(a)}oe(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.es.get(s.largestBatchId).delete(r.key);this.es.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Rl(n,r));let i=this.es.get(n);i===void 0&&(i=ne(),this.es.set(n,i)),this.es.set(n,i.add(r.key))}}/**
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
 */class Pl{constructor(){this.ns=new me(Me.ss),this.rs=new me(Me.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Me(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Me(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new O(new ye([])),r=new Me(n,e),s=new Me(n,e+1),i=[];return this.rs.forEachInRange([r,s],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new ye([])),r=new Me(n,e),s=new Me(n,e+1);let i=ne();return this.rs.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Me(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||J(e._s,n._s)}static os(e,n){return J(e._s,n._s)||O.comparator(e.key,n.key)}}/**
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
 */class BA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new me(Me.ss)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xl(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.gs=this.gs.add(new Me(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,n){return m.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ps(r),i=s<0?0:s;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),s=new Me(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([r,s],o=>{const a=this.ys(o._s);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new me(J);return n.forEach(s=>{const i=new Me(s,0),o=new Me(s,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{r=r.add(a._s)})}),m.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const o=new Me(new O(i),0);let a=new me(J);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c._s)),!0)},o),m.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const s=this.ys(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){j(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return m.forEach(n.mutations,s=>{const i=new Me(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Me(n,0),s=this.gs.firstAfterOrEqual(r);return m.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class $A{constructor(e){this.Es=e,this.docs=new Ne(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return m.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(n))}getEntries(e,n){let r=ht();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))}),m.resolve(r)}getAllFromCollection(e,n,r){let s=ht();const i=new O(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||El(Nm(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(e,n,r,s){U()}As(e,n){return m.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jA(this)}getSize(e){return m.resolve(this.size)}}class jA extends Oy{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Yn.addEntry(e,s)):this.Yn.removeEntry(r)}),m.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class qA{constructor(e){this.persistence=e,this.Rs=new Un(n=>pr(n),Pi),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Pl,this.targetCount=0,this.vs=yr.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,s)=>n(s)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),m.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new yr(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,m.resolve()}updateTargetData(e,n){return this.Dn(n),m.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),m.waitFor(i).next(()=>s)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return m.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),m.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),m.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return m.resolve(r)}containsKey(e,n){return m.resolve(this.Ps.containsKey(n))}}/**
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
 */class Ly{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new It(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new qA(this),this.indexManager=new kA,this.remoteDocumentCache=function(r){return new $A(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new Sy(n),this.Ns=new UA(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new BA(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){S("MemoryPersistence","Starting transaction:",e);const s=new KA(this.Ss.next());return this.referenceDelegate.ks(),r(s).next(i=>this.referenceDelegate.Os(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ms(e,n){return m.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class KA extends Pm{constructor(e){super(),this.currentSequenceNumber=e}}class Ka{constructor(e){this.persistence=e,this.Fs=new Pl,this.$s=null}static Bs(e){return new Ka(e)}get Ls(){if(this.$s)return this.$s;throw U()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),m.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),m.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),m.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(s=>this.Ls.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Ls.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ls,r=>{const s=O.fromPath(r);return this.qs(e,s).next(i=>{i||n.removeEntry(s,H.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return m.or([()=>m.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class HA{constructor(e){this.yt=e}$(e,n,r,s){const i=new Pa("createOrUpgrade",n);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Bd,{unique:!0}),a.createObjectStore("documentMutations")}(e),rf(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),rf(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Bd,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return m.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Us(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),r<7&&s>=7&&(o=o.next(()=>this.Gs(i))),r<8&&s>=8&&(o=o.next(()=>this.Qs(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.js(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:gA});c.createIndex("collectionPathOverlayIndex",mA,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",yA,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:sA});c.createIndex("documentKeyIndex",iA),c.createIndex("collectionGroupIndex",oA)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.zs(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:hA}).createIndex("sequenceNumberIndex",dA,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:fA}).createIndex("documentKeyIndex",pA,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((r,s)=>{n+=Yo(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Us(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.W().next(s=>m.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.W("userMutationsIndex",o).next(a=>m.forEach(a,c=>{j(c.userId===i.userId);const u=Xn(this.yt,c);return Dy(e,i.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new ye(o),u=function(l){return[0,et(l)]}(c);i.push(n.get(u).next(l=>l?m.resolve():(h=>n.put({targetId:0,path:et(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(i))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:lA});const r=n.store("collectionParents"),s=new Ol,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:et(c)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new ye(o);return i(c.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=Bt(a);return i(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((r,s)=>{const i=Ns(s),o=Ay(this.yt,i);return n.put(o)})}Ws(e,n){const r=n.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new O(ye.fromString(u.document.name).popFirst(5)):u.noDocument?O.fromSegments(u.noDocument.path):u.unknownDocument?O.fromSegments(u.unknownDocument.path):U()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>m.waitFor(s))}zs(e,n){const r=n.store("mutations"),s=Py(this.yt),i=new Ly(Ka.Bs,this.yt.ie);return r.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ne();Xn(this.yt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new Ve(u),h=ja.re(this.yt,l),d=i.getIndexManager(l),g=qa.re(l,this.yt,d,i.referenceDelegate);return new My(s,g,h,d).recalculateAndSaveOverlaysForDocumentKeys(new du(n,It.at),c).next()})})}}function rf(t){t.createObjectStore("targetDocuments",{keyPath:cA}).createIndex("documentTargetsIndex",uA,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",aA,{unique:!0}),t.createObjectStore("targetGlobal")}const wc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Ml{constructor(e,n,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Hs=i,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Ml.C())throw new B(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new PA(this,s),this.ii=n+"main",this.yt=new Sy(c),this.ri=new Zt(this.ii,this.Xs,new HA(this.yt)),this.Cs=new DA(this.referenceDelegate,this.yt),this.remoteDocumentCache=Py(this.yt),this.Ns=new bA,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&Ye("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(T.FAILED_PRECONDITION,wc);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new It(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>no(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Fn(e))return S("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return S("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return As(e).get("owner").next(n=>m.resolve(this.mi(n)))}gi(e){return no(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Fe(n,"clientMetadata");return r.W().next(s=>{const i=this.Ii(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return m.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?m.resolve(!0):As(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new B(T.FAILED_PRECONDITION,wc);return!1}}return!(!this.networkEnabled||!this.inForeground)||no(e).W().next(r=>this.Ii(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&S("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new du(e,It.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(r=>this.pi(r.updateTimeMs,n)&&!this.Ei(r.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>no(e).W().next(n=>this.Ii(n,18e5).map(r=>r.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return qa.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new xA(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return ja.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,r){S("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=(o=this.Xs)===15?wA:o===14?_y:o===13?Ty:o===12?vA:o===11?Ey:void U();var o;let a;return this.ri.runTransaction(e,s,i,c=>(a=new du(c,this.Ss?this.Ss.next():It.at),n==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw Ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new B(T.FAILED_PRECONDITION,Om);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return As(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(T.FAILED_PRECONDITION,wc)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return As(e).put("owner",n)}static C(){return Zt.C()}_i(e){const n=As(e);return n.get("owner").next(r=>this.mi(r)?(S("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):m.resolve())}pi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ye(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),Db()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const r=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return S("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ye("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Ye("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function As(t){return Fe(t,"owner")}function no(t){return Fe(t,"clientMetadata")}function zA(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Ll{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=s}static Ci(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ll(e,n.fromCache,r,s)}}/**
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
 */class Fy{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,s){return this.ki(e,n).next(i=>i||this.Oi(e,n,s,r)).next(i=>i||this.Mi(e,n))}ki(e,n){if(Dd(n))return m.resolve(null);let r=kt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=au(n,null,"F"),r=kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,au(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,r,s){return Dd(n)||s.isEqual(H.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,r,s)?this.Mi(e,n):(eu()<=ue.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cu(n)),this.Bi(e,o,n,sS(s,-1)))})}Fi(e,n){let r=new me(Wm(e));return n.forEach((s,i)=>{Al(e,i)&&(r=r.add(i))}),r}$i(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Mi(e,n){return eu()<=ue.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",cu(n)),this.Ni.getDocumentsMatchingQuery(e,n,mt.min())}Bi(e,n,r,s){return this.Ni.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class GA{constructor(e,n,r,s){this.persistence=e,this.Li=n,this.yt=s,this.qi=new Ne(J),this.Ui=new Un(i=>pr(i),Pi),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new My(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function Uy(t,e,n,r){return new GA(t,e,n,r)}async function Vy(t,e){const n=Y(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ne();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function WA(t,e){const n=Y(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=m.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const I=c.docVersions.get(g);j(I!==null),y.version.compareTo(I)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function By(t){const e=Y(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function QA(t,e){const n=Y(t),r=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(qe.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,r)),s=s.insert(h,g),function(y,I,k){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=ht(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(XA(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!r.isEqual(H.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=s,i))}function XA(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=ht();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:s}})}function YA(t,e){const n=Y(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function JA(t,e){const n=Y(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Cs.getTargetData(r,e).next(i=>i?(s=i,m.resolve(s)):n.Cs.allocateTargetId(r).next(o=>(s=new kn(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.qi.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function mu(t,e,n){const r=Y(t),s=r.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Fn(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(s.target)}function sf(t,e,n){const r=Y(t);let s=H.min(),i=ne();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=Y(a),h=l.Ui.get(u);return h!==void 0?m.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(r,o,kt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?s:H.min(),n?i:ne())).next(a=>(ZA(r,AS(e),a),{documents:a,Hi:i})))}function ZA(t,e,n){let r=t.Ki.get(e)||H.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ki.set(e,r)}class of{constructor(){this.activeTargetIds=cy()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $y{constructor(){this.Lr=new of,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new of,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class eC{Ur(e){}shutdown(){}}/**
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
 */class af{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const tC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class nC{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class rC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,s,i){const o=this.ho(e,n);S("RestConnection","Sending: ",o,r);const a={};return this.lo(a,s,i),this.fo(e,o,a,r).then(c=>(S("RestConnection","Received: ",c),c),c=>{throw qo("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}_o(e,n,r,s,i,o){return this.ao(e,n,r,s,i)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ps,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ho(e,n){const r=tC[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,s){return new Promise((i,o)=>{const a=new G_;a.setWithCredentials(!0),a.listenOnce(K_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case yc.NO_ERROR:const u=a.getResponseJson();S("Connection","XHR received:",JSON.stringify(u)),i(u);break;case yc.TIMEOUT:S("Connection",'RPC "'+e+'" timed out'),o(new B(T.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const l=a.getStatus();if(S("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(I)>=0?I:T.UNKNOWN}(d.status);o(new B(g,d.message))}else o(new B(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(T.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{S("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(n,"POST",c,r,15)})}wo(e,n,r){const s=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=j_(),o=q_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new z_({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");S("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new nC({Hr:y=>{h?S("Connection","Not sending because WebChannel is closed:",y):(l||(S("Connection","Opening WebChannel transport."),u.open(),l=!0),S("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,I,k)=>{y.listen(I,A=>{try{k(A)}catch(L){setTimeout(()=>{throw L},0)}})};return g(u,Yi.EventType.OPEN,()=>{h||S("Connection","WebChannel transport opened.")}),g(u,Yi.EventType.CLOSE,()=>{h||(h=!0,S("Connection","WebChannel transport closed"),d.io())}),g(u,Yi.EventType.ERROR,y=>{h||(h=!0,qo("Connection","WebChannel transport errored:",y),d.io(new B(T.UNAVAILABLE,"The operation could not be completed")))}),g(u,Yi.EventType.MESSAGE,y=>{var I;if(!h){const k=y.data[0];j(!!k);const A=k,L=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(L){S("Connection","WebChannel received error:",L);const D=L.status;let z=function(te){const de=De[te];if(de!==void 0)return sy(de)}(D),ee=L.message;z===void 0&&(z=T.INTERNAL,ee="Unknown error status: "+D+" with message "+L.message),h=!0,d.io(new B(z,ee)),u.close()}else S("Connection","WebChannel received:",k),d.ro(k)}}),g(o,H_.STAT_EVENT,y=>{y.stat===md.PROXY?S("Connection","Detected buffering proxy"):y.stat===md.NOPROXY&&S("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function sC(){return typeof window<"u"?window:null}function Eo(){return typeof document<"u"?document:null}/**
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
 */function Ha(t){return new zS(t,!0)}class jy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),s=Math.max(0,n-r);s>0&&S("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,s,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class qy{constructor(e,n,r,s,i,o,a,c){this.Hs=e,this.vo=r,this.Vo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new jy(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Ye(n.toString()),Ye("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.So===n&&this.Go(r,s)},r=>{e(()=>{const s=new B(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(s)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(s=>{r(()=>this.Qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class iC extends qy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=QS(this.yt,e),r=function(s){if(!("targetChange"in s))return H.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?H.min():i.readTime?Ze(i.readTime):H.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=lu(this.yt),n.addTarget=function(s,i){let o;const a=i.target;return o=Ho(a)?{documents:gy(s,a)}:{query:my(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=hy(s,i.resumeToken):i.snapshotVersion.compareTo(H.min())>0&&(o.readTime=rs(s,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=YS(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=lu(this.yt),n.removeTarget=e,this.Bo(n)}}class oC extends qy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=XS(e.writeResults,e.commitTime),r=Ze(e.commitTime);return this.listener.Zo(r,n)}return j(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=lu(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Wo(this.yt,r))};this.Bo(n)}}/**
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
 */class aC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=s,this.nu=!1}su(){if(this.nu)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.ao(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(T.UNKNOWN,s.toString())})}_o(e,n,r,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(T.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class cC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Ye(n),this.ou=!1):S("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class uC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{br(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=Y(a);c._u.add(4),await Li(c),c.gu.set("Unknown"),c._u.delete(4),await za(c)}(this))})}),this.gu=new cC(r,s)}}async function za(t){if(br(t))for(const e of t.wu)await e(!0)}async function Li(t){for(const e of t.wu)await e(!1)}function Ky(t,e){const n=Y(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Vl(n)?Ul(n):ms(n).ko()&&Fl(n,e))}function Hy(t,e){const n=Y(t),r=ms(n);n.du.delete(e),r.ko()&&zy(n,e),n.du.size===0&&(r.ko()?r.Fo():br(n)&&n.gu.set("Unknown"))}function Fl(t,e){t.yu.Ot(e.targetId),ms(t).zo(e)}function zy(t,e){t.yu.Ot(e),ms(t).Ho(e)}function Ul(t){t.yu=new jS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),ms(t).start(),t.gu.uu()}function Vl(t){return br(t)&&!ms(t).No()&&t.du.size>0}function br(t){return Y(t)._u.size===0}function Gy(t){t.yu=void 0}async function lC(t){t.du.forEach((e,n)=>{Fl(t,e)})}async function hC(t,e){Gy(t),Vl(t)?(t.gu.hu(e),Ul(t)):t.gu.set("Unknown")}async function dC(t,e,n){if(t.gu.set("Online"),e instanceof ly&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Jo(t,r)}else if(e instanceof Io?t.yu.Kt(e):e instanceof uy?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(H.min()))try{const r=await By(t.localStore);n.compareTo(r)>=0&&await function(s,i){const o=s.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.du.get(c);u&&s.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.du.get(a);if(!c)return;s.du.set(a,c.withResumeToken(qe.EMPTY_BYTE_STRING,c.snapshotVersion)),zy(s,a);const u=new kn(c.target,a,1,c.sequenceNumber);Fl(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){S("RemoteStore","Failed to raise snapshot:",r),await Jo(t,r)}}async function Jo(t,e,n){if(!Fn(e))throw e;t._u.add(1),await Li(t),t.gu.set("Offline"),n||(n=()=>By(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await za(t)})}function Wy(t,e){return e().catch(n=>Jo(t,n,e))}async function Fi(t){const e=Y(t),n=On(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;fC(e);)try{const s=await YA(e.localStore,r);if(s===null){e.fu.length===0&&n.Fo();break}r=s.batchId,pC(e,s)}catch(s){await Jo(e,s)}Qy(e)&&Xy(e)}function fC(t){return br(t)&&t.fu.length<10}function pC(t,e){t.fu.push(e);const n=On(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Qy(t){return br(t)&&!On(t).No()&&t.fu.length>0}function Xy(t){On(t).start()}async function gC(t){On(t).eu()}async function mC(t){const e=On(t);for(const n of t.fu)e.Xo(n.mutations)}async function yC(t,e,n){const r=t.fu.shift(),s=Dl.from(r,e,n);await Wy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Fi(t)}async function vC(t,e){e&&On(t).Yo&&await async function(n,r){if(s=r.code,FS(s)&&s!==T.ABORTED){const i=n.fu.shift();On(n).Mo(),await Wy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Fi(n)}var s}(t,e),Qy(t)&&Xy(t)}async function cf(t,e){const n=Y(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const r=br(n);n._u.add(3),await Li(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await za(n)}async function wC(t,e){const n=Y(t);e?(n._u.delete(2),await za(n)):e||(n._u.add(2),await Li(n),n.gu.set("Unknown"))}function ms(t){return t.pu||(t.pu=function(e,n,r){const s=Y(e);return s.su(),new iC(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:lC.bind(null,t),Zr:hC.bind(null,t),Wo:dC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),Vl(t)?Ul(t):t.gu.set("Unknown")):(await t.pu.stop(),Gy(t))})),t.pu}function On(t){return t.Iu||(t.Iu=function(e,n,r){const s=Y(e);return s.su(),new oC(n,s.connection,s.authCredentials,s.appCheckCredentials,s.yt,r)}(t.datastore,t.asyncQueue,{Yr:gC.bind(null,t),Zr:vC.bind(null,t),tu:mC.bind(null,t),Zo:yC.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Fi(t)):(await t.Iu.stop(),t.fu.length>0&&(S("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Bl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Bl(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $l(t,e){if(Ye("AsyncQueue",`${e}: ${t}`),Fn(t))return new B(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Hr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=Rs(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new Hr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Hr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Hr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class uf{constructor(){this.Tu=new Ne(O.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):U():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ss{constructor(e,n,r,s,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ss(e,n,Hr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ua(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class IC{constructor(){this.Au=void 0,this.listeners=[]}}class bC{constructor(){this.queries=new Un(e=>Gm(e),Ua),this.onlineState="Unknown",this.Ru=new Set}}async function EC(t,e){const n=Y(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new IC),s)try{i.Au=await n.onListen(r)}catch(o){const a=$l(o,`Initialization of query '${cu(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&jl(n)}async function TC(t,e){const n=Y(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function _C(t,e){const n=Y(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(s)&&(r=!0);o.Au=s}}r&&jl(n)}function SC(t,e,n){const r=Y(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function jl(t){t.Ru.forEach(e=>{e.next()})}class AC{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class Yy{constructor(e){this.key=e}}class Jy{constructor(e){this.key=e}}class CC{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ne(),this.mutatedKeys=ne(),this.Gu=Wm(e),this.Qu=new Hr(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new uf,s=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),g=Al(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;d&&g?d.data.isEqual(g.data)?y!==I&&(r.track({type:3,doc:g}),k=!0):this.Hu(d,g)||(r.track({type:2,doc:g}),k=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),k=!0):d&&!g&&(r.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(g?(o=o.add(g),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Qu:o,zu:r,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const s=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return g(h)-g(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new ss(this.query,e.Qu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new uf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ne(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Jy(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new Yy(r))}),n}tc(e){this.qu=e.Hi,this.Ku=ne();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return ss.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class kC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class xC{constructor(e){this.key=e,this.nc=!1}}class DC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Un(a=>Gm(a),Ua),this.rc=new Map,this.oc=new Set,this.uc=new Ne(O.comparator),this.cc=new Map,this.ac=new Pl,this.hc={},this.lc=new Map,this.fc=yr.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function RC(t,e){const n=$C(t);let r,s;const i=n.ic.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.ec();else{const o=await JA(n.localStore,kt(e));n.isPrimaryClient&&Ky(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await NC(n,e,r,a==="current",o.resumeToken)}return s}async function NC(t,e,n,r,s){t._c=(h,d,g)=>async function(y,I,k,A){let L=I.view.Wu(k);L.$i&&(L=await sf(y.localStore,I.query,!1).then(({documents:ee})=>I.view.Wu(ee,L)));const D=A&&A.targetChanges.get(I.targetId),z=I.view.applyChanges(L,y.isPrimaryClient,D);return hf(y,I.targetId,z.Xu),z.snapshot}(t,h,d,g);const i=await sf(t.localStore,e,!0),o=new CC(e,i.Hi),a=o.Wu(i.documents),c=Mi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,c);hf(t,n,u.Xu);const l=new kC(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function OC(t,e){const n=Y(t),r=n.ic.get(e),s=n.rc.get(r.targetId);if(s.length>1)return n.rc.set(r.targetId,s.filter(i=>!Ua(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await mu(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Hy(n.remoteStore,r.targetId),yu(n,r.targetId)}).catch(wr)):(yu(n,r.targetId),await mu(n.localStore,r.targetId,!0))}async function PC(t,e,n){const r=rv(t);try{const s=await function(i,o){const a=Y(i),c=_e.now(),u=o.reduce((d,g)=>d.add(g.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=ht(),y=ne();return a.Gi.getEntries(d,u).next(I=>{g=I,g.forEach((k,A)=>{A.isValidDocument()||(y=y.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(I=>{l=I;const k=[];for(const A of o){const L=MS(A,l.get(A.key).overlayedDocument);L!=null&&k.push(new un(A.key,L,zm(L.value.mapValue),ut.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(I=>{h=I;const k=I.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(d,I.batchId,k)})}).then(()=>({batchId:h.batchId,changes:oy(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ne(J)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(r,s.batchId,n),await Ui(r,s.changes),await Fi(r.remoteStore)}catch(s){const i=$l(s,"Failed to persist write");n.reject(i)}}async function Zy(t,e){const n=Y(t);try{const r=await QA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.cc.get(i);o&&(j(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.nc=!0:s.modifiedDocuments.size>0?j(o.nc):s.removedDocuments.size>0&&(j(o.nc),o.nc=!1))}),await Ui(n,r,e)}catch(r){await wr(r)}}function lf(t,e,n){const r=Y(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=Y(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&jl(a)}(r.eventManager,e),s.length&&r.sc.Wo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MC(t,e,n){const r=Y(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.cc.get(e),i=s&&s.key;if(i){let o=new Ne(O.comparator);o=o.insert(i,Ae.newNoDocument(i,H.min()));const a=ne().add(i),c=new $a(H.min(),new Map,new me(J),o,a);await Zy(r,c),r.uc=r.uc.remove(i),r.cc.delete(e),ql(r)}else await mu(r.localStore,e,!1).then(()=>yu(r,e,n)).catch(wr)}async function LC(t,e){const n=Y(t),r=e.batch.batchId;try{const s=await WA(n.localStore,e);tv(n,r,null),ev(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ui(n,s)}catch(s){await wr(s)}}async function FC(t,e,n){const r=Y(t);try{const s=await function(i,o){const a=Y(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(j(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);tv(r,e,n),ev(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ui(r,s)}catch(s){await wr(s)}}function ev(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function tv(t,e,n){const r=Y(t);let s=r.hc[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.hc[r.currentUser.toKey()]=s}}function yu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||nv(t,r)})}function nv(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Hy(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ql(t))}function hf(t,e,n){for(const r of n)r instanceof Yy?(t.ac.addReference(r.key,e),UC(t,r)):r instanceof Jy?(S("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||nv(t,r.key)):U()}function UC(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(S("SyncEngine","New document in limbo: "+n),t.oc.add(r),ql(t))}function ql(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new O(ye.fromString(e)),r=t.fc.next();t.cc.set(r,new xC(n)),t.uc=t.uc.insert(n,r),Ky(t.remoteStore,new kn(kt(Fa(n.path)),r,2,It.at))}}async function Ui(t,e,n){const r=Y(t),s=[],i=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,c)=>{o.push(r._c(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=Ll.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.sc.Wo(s),await async function(a,c){const u=Y(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>m.forEach(c,h=>m.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>m.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Fn(l))throw l;S("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(r.localStore,i))}async function VC(t,e){const n=Y(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const r=await Vy(n.localStore,e);n.currentUser=e,function(s,i){s.lc.forEach(o=>{o.forEach(a=>{a.reject(new B(T.CANCELLED,i))})}),s.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ui(n,r.ji)}}function BC(t,e){const n=Y(t),r=n.cc.get(e);if(r&&r.nc)return ne().add(r.key);{let s=ne();const i=n.rc.get(e);if(!i)return s;for(const o of i){const a=n.ic.get(o);s=s.unionWith(a.view.ju)}return s}}function $C(t){const e=Y(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MC.bind(null,e),e.sc.Wo=_C.bind(null,e.eventManager),e.sc.wc=SC.bind(null,e.eventManager),e}function rv(t){const e=Y(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FC.bind(null,e),e}class sv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Ha(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return Uy(this.persistence,new Fy,e.initialUser,this.yt)}yc(e){return new Ly(Ka.Bs,this.yt)}gc(e){return new $y}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class jC extends sv{constructor(e,n,r){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await rv(this.Ac.syncEngine),await Fi(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return Uy(this.persistence,new Fy,e.initialUser,this.yt)}Tc(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new NA(r,e.asyncQueue,n)}Ec(e,n){const r=new cS(n,this.persistence);return new aS(e.asyncQueue,r)}yc(e){const n=zA(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new Ml(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,sC(),Eo(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new $y}}class iv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>lf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VC.bind(null,this.syncEngine),await wC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bC}createDatastore(e){const n=Ha(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new rC(s));var s;return function(i,o,a,c){return new aC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>lf(this.syncEngine,a,0),o=af.C()?new af:new eC,new uC(n,r,s,i,o);var n,r,s,i,o}createSyncEngine(e,n){return function(r,s,i,o,a,c,u){const l=new DC(r,s,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Y(e);S("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Li(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function qC(t,e,n){if(!n)throw new B(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function KC(t,e,n,r){if(e===!0&&r===!0)throw new B(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function df(t){if(!O.isDocumentKey(t))throw new B(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Kl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function Pn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kl(t);throw new B(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const ff=new Map;class pf{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,KC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Hl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new W_;switch(n.type){case"gapi":const r=n.client;return new J_(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ff.get(e);n&&(S("ComponentProvider","Removing Datastore"),ff.delete(e),n.terminate())}(this),Promise.resolve()}}function HC(t,e,n,r={}){var s;const i=(t=Pn(t,Hl))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&qo("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ve.MOCK_USER;else{o=_b(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new B(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ve(c)}t._authCredentials=new Q_(new km(o,a))}}/**
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
 */class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class zl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zl(this.firestore,e,this._query)}}class fi extends zl{constructor(e,n,r){super(e,n,Fa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new O(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function SD(t,e,...n){if(t=nt(t),arguments.length===1&&(e=xm.R()),qC("doc","path",e),t instanceof Hl){const r=ye.fromString(e,...n);return df(r),new ft(t,null,new O(r))}{if(!(t instanceof ft||t instanceof fi))throw new B(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return df(r),new ft(t.firestore,t instanceof fi?t.converter:null,new O(r))}}/**
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
 */class zC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Ye("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class GC{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=xm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{S("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(S("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$l(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ov(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Vy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function av(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WC(t);S("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>cf(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>cf(e.remoteStore,i)),t.onlineComponents=e}async function WC(t){return t.offlineComponents||(S("FirestoreClient","Using default OfflineComponentProvider"),await ov(t,new sv)),t.offlineComponents}async function cv(t){return t.onlineComponents||(S("FirestoreClient","Using default OnlineComponentProvider"),await av(t,new iv)),t.onlineComponents}function QC(t){return cv(t).then(e=>e.syncEngine)}async function XC(t){const e=await cv(t),n=e.eventManager;return n.onListen=RC.bind(null,e.syncEngine),n.onUnlisten=OC.bind(null,e.syncEngine),n}function YC(t,e,n={}){const r=new qt;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new zC({next:h=>{i.enqueueAndForget(()=>TC(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new B(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new B(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new AC(Fa(o.path),u,{includeMetadataChanges:!0,Nu:!0});return EC(s,l)}(await XC(t),t.asyncQueue,e,n,r)),r.promise}class JC{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new jy(this,"async_queue_retry"),this.Wc=()=>{const n=Eo();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Eo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Eo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new qt;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Fn(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Ye("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const s=Bl.createAndSchedule(this,e,n,r,i=>this.Yc(i));return this.Uc.push(s),s}zc(){this.Kc&&U()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Vi extends Hl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new JC,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||uv(this),this._firestoreClient.terminate()}}function AD(t,e){const n=typeof t=="object"?t:Hu(),r=typeof t=="string"?t:e||"(default)",s=wi(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Eb("firestore");i&&HC(s,...i)}return s}function Gl(t){return t._firestoreClient||uv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uv(t){var e;const n=t._freezeSettings(),r=function(s,i,o,a){return new uS(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new GC(t._authCredentials,t._appCheckCredentials,t._queue,r)}function CD(t,e){ek(t=Pn(t,Vi));const n=Gl(t),r=t._freezeSettings(),s=new iv;return ZC(n,s,new jC(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function ZC(t,e,n){const r=new qt;return t.asyncQueue.enqueue(async()=>{try{await ov(t,n),await av(t,e),r.resolve()}catch(s){const i=s;if(!function(o){return o.name==="FirebaseError"?o.code===T.FAILED_PRECONDITION||o.code===T.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;qo("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function ek(t){if(t._initialized||t._terminated)throw new B(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class is{constructor(e){this._byteString=e}static fromBase64String(e){try{return new is(qe.fromBase64String(e))}catch(n){throw new B(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new is(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ga{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wl{constructor(e){this._methodName=e}}/**
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
 */class Ql{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */const tk=/^__.*__$/;class nk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new un(e,this.data,this.fieldMask,n,this.fieldTransforms):new gs(e,this.data,n,this.fieldTransforms)}}class lv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new un(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Xl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=s,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Xl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.ua(e),s}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ia({path:r,oa:!1});return s.na(),s}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Zo(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(hv(this.sa)&&tk.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class rk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Ha(e)}da(e,n,r,s=!1){return new Xl({sa:e,methodName:n,fa:r,path:Re.emptyPath(),oa:!1,la:s},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function dv(t){const e=t._freezeSettings(),n=Ha(t._databaseId);return new rk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sk(t,e,n,r,s,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,s);Yl("Data must be an object, but it was:",o,r);const a=fv(r,o);let c,u;if(i.merge)c=new ct(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=vu(e,h,n);if(!o.contains(d))throw new B(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);gv(l,d)||l.push(d)}c=new ct(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new nk(new ze(a),c,u)}class Wa extends Wl{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wa}}function ik(t,e,n,r){const s=t.da(1,e,n);Yl("Data must be an object, but it was:",s,r);const i=[],o=ze.empty();Ir(r,(c,u)=>{const l=Jl(e,c,n);u=nt(u);const h=s.ca(l);if(u instanceof Wa)i.push(l);else{const d=Qa(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new ct(i);return new lv(o,a,s.fieldTransforms)}function ok(t,e,n,r,s,i){const o=t.da(1,e,n),a=[vu(e,r,n)],c=[s];if(i.length%2!=0)throw new B(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(vu(e,i[d])),c.push(i[d+1]);const u=[],l=ze.empty();for(let d=a.length-1;d>=0;--d)if(!gv(u,a[d])){const g=a[d];let y=c[d];y=nt(y);const I=o.ca(g);if(y instanceof Wa)u.push(g);else{const k=Qa(y,I);k!=null&&(u.push(g),l.set(g,k))}}const h=new ct(u);return new lv(l,h,o.fieldTransforms)}function Qa(t,e){if(pv(t=nt(t)))return Yl("Unsupported field value:",e,t),fv(t,e);if(t instanceof Wl)return function(n,r){if(!hv(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const s=[];let i=0;for(const o of n){let a=Qa(o,r.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=nt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kS(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=_e.fromDate(n);return{timestampValue:rs(r.yt,s)}}if(n instanceof _e){const s=new _e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rs(r.yt,s)}}if(n instanceof Ql)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof is)return{bytesValue:hy(r.yt,n._byteString)};if(n instanceof ft){const s=r.databaseId,i=n.firestore._databaseId;if(!i.isEqual(s))throw r.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kl(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Kl(n)}`)}(t,e)}function fv(t,e){const n={};return Mm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(t,(r,s)=>{const i=Qa(s,e.ra(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function pv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Ql||t instanceof is||t instanceof ft||t instanceof Wl)}function Yl(t,e,n){if(!pv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Kl(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function vu(t,e,n){if((e=nt(e))instanceof Ga)return e._internalPath;if(typeof e=="string")return Jl(t,e);throw Zo("Field path arguments must be of type string or ",t,!1,void 0,n)}const ak=new RegExp("[~\\*/\\[\\]]");function Jl(t,e,n){if(e.search(ak)>=0)throw Zo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ga(...e.split("."))._internalPath}catch{throw Zo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new B(T.INVALID_ARGUMENT,a+t+c)}function gv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ck(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ck extends mv{data(){return super.data()}}function yv(t,e){return typeof e=="string"?Jl(t,e):e instanceof Ga?e._internalPath:e._delegate._internalPath}class uk{convertValue(e,n="none"){switch(fr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const r={};return Ir(e.fields,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ql(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Fm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const n=Rn(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);j(Iy(r));const s=new hr(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(n)||Ye(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function lk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class hk{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vv extends mv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dk(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dk extends vv{data(e={}){return super.data(e)}}/**
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
 */function kD(t){t=Pn(t,ft);const e=Pn(t.firestore,Vi);return YC(Gl(e),t._key).then(n=>pk(e,t,n))}class fk extends uk{constructor(e){super(),this.firestore=e}convertBytes(e){return new is(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function xD(t,e,n){t=Pn(t,ft);const r=Pn(t.firestore,Vi),s=lk(t.converter,e,n);return wv(r,[sk(dv(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ut.none())])}function DD(t,e,n,...r){t=Pn(t,ft);const s=Pn(t.firestore,Vi),i=dv(s);let o;return o=typeof(e=nt(e))=="string"||e instanceof Ga?ok(i,"updateDoc",t._key,e,n,r):ik(i,"updateDoc",t._key,e),wv(s,[o.toMutation(t._key,ut.exists(!0))])}function wv(t,e){return function(n,r){const s=new qt;return n.asyncQueue.enqueueAndForget(async()=>PC(await QC(n),r,s)),s.promise}(Gl(t),e)}function pk(t,e,n){const r=n.docs.get(e._key),s=new fk(t);return new vv(t,s,e._key,r,new hk(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ps=n})(Ii),Dn(new rn("firestore",(n,{instanceIdentifier:r,options:s})=>{const i=n.getProvider("app").getImmediate(),o=new Vi(new X_(n.getProvider("auth-internal")),new eS(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),tn(yd,"3.8.1",t),tn(yd,"3.8.1","esm2017")})();/**
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
 */const wu=new Map,Iv={activated:!1,tokenObservers:[]},gk={initialized:!1,enabled:!1};function rt(t){return wu.get(t)||Object.assign({},Iv)}function mk(t,e){return wu.set(t,e),wu.get(t)}function Xa(){return gk}/**
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
 */const bv="https://content-firebaseappcheck.googleapis.com/v1",yk="exchangeRecaptchaV3Token",vk="exchangeDebugToken",gf={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},wk=24*60*60*1e3;/**
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
 */class Ik{constructor(e,n,r,s,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=s,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=s,s>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ys,await bk(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ys,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function bk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const Ek={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},dt=new hs("appCheck","AppCheck",Ek);/**
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
 */function mf(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function Ev(t){if(!rt(t).activated)throw dt.create("use-before-activation",{appName:t.name})}function Tv(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),s=Math.floor((e-n*3600*24-r*3600)/60),i=e-n*3600*24-r*3600-s*60;let o="";return n&&(o+=ro(n)+"d:"),r&&(o+=ro(r)+"h:"),o+=ro(s)+"m:"+ro(i)+"s",o}function ro(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
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
 */async function _v({url:t,body:e},n){const r={"Content-Type":"application/json"},s=n.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&(r["X-Firebase-Client"]=h)}const i={method:"POST",body:JSON.stringify(e),headers:r};let o;try{o=await fetch(t,i)}catch(h){throw dt.create("fetch-network-error",{originalErrorMessage:h==null?void 0:h.message})}if(o.status!==200)throw dt.create("fetch-status-error",{httpStatus:o.status});let a;try{a=await o.json()}catch(h){throw dt.create("fetch-parse-error",{originalErrorMessage:h==null?void 0:h.message})}const c=a.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw dt.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${a.ttl}`});const u=Number(c[1])*1e3,l=Date.now();return{token:a.token,expireTimeMillis:l+u,issuedAtTimeMillis:l}}function Tk(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${bv}/projects/${n}/apps/${r}:${yk}?key=${s}`,body:{recaptcha_v3_token:e}}}function _k(t,e){const{projectId:n,appId:r,apiKey:s}=t.options;return{url:`${bv}/projects/${n}/apps/${r}:${vk}?key=${s}`,body:{debug_token:e}}}/**
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
 */const Sk="firebase-app-check-database",Ak=1,pi="firebase-app-check-store",Sv="debug-token";let so=null;function Av(){return so||(so=new Promise((t,e)=>{try{const n=indexedDB.open(Sk,Ak);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var s;e(dt.create("storage-open",{originalErrorMessage:(s=r.target.error)===null||s===void 0?void 0:s.message}))},n.onupgradeneeded=r=>{const s=r.target.result;switch(r.oldVersion){case 0:s.createObjectStore(pi,{keyPath:"compositeKey"})}}}catch(n){e(dt.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),so)}function Ck(t){return kv(xv(t))}function kk(t,e){return Cv(xv(t),e)}function xk(t){return Cv(Sv,t)}function Dk(){return kv(Sv)}async function Cv(t,e){const r=(await Av()).transaction(pi,"readwrite"),i=r.objectStore(pi).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},r.onerror=c=>{var u;a(dt.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}async function kv(t){const n=(await Av()).transaction(pi,"readonly"),s=n.objectStore(pi).get(t);return new Promise((i,o)=>{s.onsuccess=a=>{const c=a.target.result;i(c?c.value:void 0)},n.onerror=a=>{var c;o(dt.create("storage-get",{originalErrorMessage:(c=a.target.error)===null||c===void 0?void 0:c.message}))}})}function xv(t){return`${t.options.appId}-${t.name}`}/**
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
 */const gi=new pa("@firebase/app-check");/**
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
 */async function Rk(t){if(fa()){let e;try{e=await Ck(t)}catch(n){gi.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Ic(t,e){return fa()?kk(t,e).catch(n=>{gi.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function Nk(){let t;try{t=await Dk()}catch{}if(t)return t;{const e=Vb();return xk(e).catch(n=>gi.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
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
 */function Dv(){return Xa().enabled}async function Rv(){const t=Xa();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function Ok(){const t=Bp(),e=Xa();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new Ys;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(Nk())}/**
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
 */const Pk={error:"UNKNOWN_ERROR"};function Mk(t){return qu.encodeString(JSON.stringify(t),!1)}async function Iu(t,e=!1){const n=t.app;Ev(n);const r=rt(n);let s=r.token,i;if(s&&!Lr(s)&&(r.token=void 0,s=void 0),!s){const c=await r.cachedTokenPromise;c&&(Lr(c)?s=c:await Ic(n,void 0))}if(!e&&s&&Lr(s))return{token:s.token};let o=!1;if(Dv()){r.exchangeTokenPromise||(r.exchangeTokenPromise=_v(_k(n,await Rv()),t.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),o=!0);const c=await r.exchangeTokenPromise;return await Ic(n,c),r.token=c,{token:c.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),o=!0),s=await rt(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?gi.warn(c.message):gi.error(c),i=c}let a;return s?i?Lr(s)?a={token:s.token,internalError:i}:a=vf(i):(a={token:s.token},r.token=s,await Ic(n,s)):a=vf(i),o&&Pv(n,a),a}function Nv(t,e,n,r){const{app:s}=t,i=rt(s),o={next:n,error:r,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Lr(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),yf(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>yf(t))}function Ov(t,e){const n=rt(t),r=n.tokenObservers.filter(s=>s.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function yf(t){const{app:e}=t,n=rt(e);let r=n.tokenRefresher;r||(r=Lk(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function Lk(t){const{app:e}=t;return new Ik(async()=>{const n=rt(e);let r;if(n.token?r=await Iu(t,!0):r=await Iu(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=rt(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const s=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,s),Math.max(0,r-Date.now())}else return 0},gf.RETRIAL_MIN_WAIT,gf.RETRIAL_MAX_WAIT)}function Pv(t,e){const n=rt(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Lr(t){return t.expireTimeMillis-Date.now()>0}function vf(t){return{token:Mk(Pk),error:t}}/**
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
 */class Fk{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=rt(this.app);for(const n of e)Ov(this.app,n.next);return Promise.resolve()}}function Uk(t,e){return new Fk(t,e)}function Vk(t){return{getToken:e=>Iu(t,e),addTokenListener:e=>Nv(t,"INTERNAL",e),removeTokenListener:e=>Ov(t.app,e)}}const Bk="@firebase/app-check",$k="0.6.1";/**
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
 */const jk="https://www.google.com/recaptcha/api.js";function qk(t,e){const n=new Ys,r=rt(t);r.reCAPTCHAState={initialized:n};const s=Kk(t),i=mf(!1);return i?wf(t,e,i,s,n):Gk(()=>{const o=mf(!1);if(!o)throw new Error("no recaptcha");wf(t,e,o,s,n)}),n.promise}function wf(t,e,n,r,s){n.ready(()=>{zk(t,e,n,r),s.resolve(n)})}function Kk(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function Hk(t){Ev(t);const n=await rt(t).reCAPTCHAState.initialized.promise;return new Promise((r,s)=>{const i=rt(t).reCAPTCHAState;n.ready(()=>{r(n.execute(i.widgetId,{action:"fire_app_check"}))})})}function zk(t,e,n,r){const s=n.render(r,{sitekey:e,size:"invisible"}),i=rt(t);i.reCAPTCHAState=Object.assign(Object.assign({},i.reCAPTCHAState),{widgetId:s})}function Gk(t){const e=document.createElement("script");e.src=jk,e.onload=t,document.head.appendChild(e)}/**
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
 */class Mv{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n;Qk(this._throttleData);const r=await Hk(this._app).catch(i=>{throw dt.create("recaptcha-error")});let s;try{s=await _v(Tk(this._app,r),this._heartbeatServiceProvider)}catch(i){throw!((e=i.code)===null||e===void 0)&&e.includes("fetch-status-error")?(this._throttleData=Wk(Number((n=i.customData)===null||n===void 0?void 0:n.httpStatus),this._throttleData),dt.create("throttled",{time:Tv(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):i}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=wi(e,"heartbeat"),qk(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof Mv?this._siteKey===e._siteKey:!1}}function Wk(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+wk,httpStatus:t};{const n=e?e.backoffCount:0,r=Kb(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function Qk(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw dt.create("throttled",{time:Tv(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
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
 */function RD(t=Hu(),e){t=nt(t);const n=wi(t,"app-check");if(Xa().initialized||Ok(),Dv()&&Rv().then(s=>console.log(`App Check debug token: ${s}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(i.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&i.provider.isEqual(e.provider))return s;throw dt.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return Xk(t,e.provider,e.isTokenAutoRefreshEnabled),rt(t).isTokenAutoRefreshEnabled&&Nv(r,"INTERNAL",()=>{}),r}function Xk(t,e,n){const r=mk(t,Object.assign({},Iv));r.activated=!0,r.provider=e,r.cachedTokenPromise=Rk(t).then(s=>(s&&Lr(s)&&(r.token=s,Pv(t,{token:s.token})),s)),r.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,r.provider.initialize(t)}const Yk="app-check",If="app-check-internal";function Jk(){Dn(new rn(Yk,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Uk(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(If).initialize()})),Dn(new rn(If,t=>{const e=t.getProvider("app-check").getImmediate();return Vk(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),tn(Bk,$k)}Jk();var Mt=(t=>(t.LOADING="loading",t.LOADED="loaded",t.ERROR="error",t))(Mt||{});const Zk=typeof window<"u"&&window!==null,ex=sx(),tx=Object.prototype.propertyIsEnumerable,bf=Object.getOwnPropertySymbols;function js(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function nx(t){return typeof t=="object"?t===null:typeof t!="function"}function rx(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function sx(){return Zk&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function ix(t,...e){if(!js(t))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof bf!="function")return t;for(const n of e){const r=bf(n);for(const s of r)tx.call(n,s)&&(t[s]=n[s])}return t}function Lv(t,...e){let n=0;for(nx(t)&&(t=e[n++]),t||(t={});n<e.length;n++)if(js(e[n])){for(const r of Object.keys(e[n]))rx(r)&&(js(t[r])&&js(e[n][r])?Lv(t[r],e[n][r]):t[r]=e[n][r]);ix(t,e[n])}return t}const Ef="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ox="",ax={rootMargin:"0px",threshold:0},Cr="data-lazy-timeout-id";class cx{constructor(e){this.options={loading:Ef,error:ox,observerOptions:ax,log:!0,lifecycle:{}},this._images=new WeakMap,this.config(e)}config(e={}){Lv(this.options,e)}mount(e,n){if(!e)return;const{src:r,loading:s,error:i,lifecycle:o,delay:a}=this._valueFormatter(typeof n=="string"?n:n.value);this._lifecycle(Mt.LOADING,o,e),e.setAttribute("src",s||Ef),ex||(this.loadImages(e,r,i,o),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,r,i,o,a)}update(e,n){var a;if(!e)return;(a=this._realObserver(e))==null||a.unobserve(e);const{src:r,error:s,lifecycle:i,delay:o}=this._valueFormatter(typeof n=="string"?n:n.value);this._initIntersectionObserver(e,r,s,i,o)}unmount(e){var n;e&&((n=this._realObserver(e))==null||n.unobserve(e),this._images.delete(e))}loadImages(e,n,r,s){this._setImageSrc(e,n,r,s)}_setImageSrc(e,n,r,s){e.tagName.toLowerCase()==="img"?(n&&e.getAttribute("src")!==n&&e.setAttribute("src",n),this._listenImageStatus(e,()=>{this._lifecycle(Mt.LOADED,s,e)},()=>{var i;e.onload=null,this._lifecycle(Mt.ERROR,s,e),(i=this._realObserver(e))==null||i.disconnect(),r&&e.getAttribute("src")!==r&&e.setAttribute("src",r),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${n} `)})})):e.style.backgroundImage=`url('${n}')`}_initIntersectionObserver(e,n,r,s,i){var a;const o=this.options.observerOptions;this._images.set(e,new IntersectionObserver(c=>{Array.prototype.forEach.call(c,u=>{i&&i>0?this._delayedIntersectionCallback(e,u,i,n,r,s):this._intersectionCallback(e,u,n,r,s)})},o)),(a=this._realObserver(e))==null||a.observe(e)}_intersectionCallback(e,n,r,s,i){var o;n.isIntersecting&&((o=this._realObserver(e))==null||o.unobserve(n.target),this._setImageSrc(e,r,s,i))}_delayedIntersectionCallback(e,n,r,s,i,o){if(n.isIntersecting){if(n.target.hasAttribute(Cr))return;const a=setTimeout(()=>{this._intersectionCallback(e,n,s,i,o),n.target.removeAttribute(Cr)},r);n.target.setAttribute(Cr,String(a))}else n.target.hasAttribute(Cr)&&(clearTimeout(Number(n.target.getAttribute(Cr))),n.target.removeAttribute(Cr))}_listenImageStatus(e,n,r){e.onload=n,e.onerror=r}_valueFormatter(e){let n=e,r=this.options.loading,s=this.options.error,i=this.options.lifecycle,o=this.options.delay;return js(e)&&(n=e.src,r=e.loading||this.options.loading,s=e.error||this.options.error,i=e.lifecycle||this.options.lifecycle,o=e.delay||this.options.delay),{src:n,loading:r,error:s,lifecycle:i,delay:o}}_log(e){this.options.log&&e()}_lifecycle(e,n,r){switch(e){case Mt.LOADING:r==null||r.setAttribute("lazy",Mt.LOADING),n!=null&&n.loading&&n.loading(r);break;case Mt.LOADED:r==null||r.setAttribute("lazy",Mt.LOADED),n!=null&&n.loaded&&n.loaded(r);break;case Mt.ERROR:r==null||r.setAttribute("lazy",Mt.ERROR),n!=null&&n.error&&n.error(r);break}}_realObserver(e){return this._images.get(e)}}const ND={install(t,e){const n=new cx(e);t.config.globalProperties.$Lazyload=n,t.provide("Lazyload",n),t.directive("lazy",{mounted:n.mount.bind(n),updated:n.update.bind(n),unmounted:n.unmount.bind(n)})}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Or=typeof window<"u";function ux(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function bc(t,e){const n={};for(const r in e){const s=e[r];n[r]=xt(s)?s.map(t):t(s)}return n}const qs=()=>{},xt=Array.isArray,lx=/\/$/,hx=t=>t.replace(lx,"");function Ec(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=gx(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function dx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function fx(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&os(e.matched[r],n.matched[s])&&Fv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function os(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Fv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!px(t[n],e[n]))return!1;return!0}function px(t,e){return xt(t)?_f(t,e):xt(e)?_f(e,t):t===e}function _f(t,e){return xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function gx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var mi;(function(t){t.pop="pop",t.push="push"})(mi||(mi={}));var Ks;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ks||(Ks={}));function mx(t){if(!t)if(Or){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),hx(t)}const yx=/^[^#]+#/;function vx(t,e){return t.replace(yx,"#")+e}function wx(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ya=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ix(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wx(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Sf(t,e){return(history.state?history.state.position-e:-1)+t}const bu=new Map;function bx(t,e){bu.set(t,e)}function Ex(t){const e=bu.get(t);return bu.delete(t),e}let Tx=()=>location.protocol+"//"+location.host;function Uv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Tf(c,"")}return Tf(n,t)+r+s}function _x(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=Uv(t,location),y=n.value,I=e.value;let k=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}k=I?d.position-I.position:0}else r(g);s.forEach(A=>{A(n.value,y,{delta:k,type:mi.pop,direction:k?k>0?Ks.forward:Ks.back:Ks.unknown})})};function c(){o=n.value}function u(d){s.push(d);const g=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(g),g}function l(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:Ya()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Af(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ya():null}}function Sx(t){const{history:e,location:n}=window,r={value:Uv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Tx()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function o(c,u){const l=he({},e.state,Af(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=he({},s.value,e.state,{forward:c,scroll:Ya()});i(l.current,l,!0);const h=he({},Af(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function OD(t){t=mx(t);const e=Sx(t),n=_x(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=he({location:"",base:t,go:r,createHref:vx.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ax(t){return typeof t=="string"||t&&typeof t=="object"}function Vv(t){return typeof t=="string"||typeof t=="symbol"}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bv=Symbol("");var Cf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Cf||(Cf={}));function as(t,e){return he(new Error,{type:t,[Bv]:!0},e)}function Gt(t,e){return t instanceof Error&&Bv in t&&(e==null||!!(t.type&e))}const kf="[^/]+?",Cx={sensitive:!1,strict:!1,start:!0,end:!0},kx=/[.+*?^${}()[\]/\\]/g;function xx(t,e){const n=he({},Cx,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(kx,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:I,optional:k,regexp:A}=d;i.push({name:y,repeatable:I,optional:k});const L=A||kf;if(L!==kf){g+=10;try{new RegExp(`(${L})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${y}" (${L}): `+z.message)}}let D=I?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(D=k&&u.length<2?`(?:/${D})`:"/"+D),k&&(D+="?"),s+=D,g+=20,k&&(g+=-8),I&&(g+=-20),L===".*"&&(g+=-50)}l.push(g)}r.push(l)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:I,optional:k}=g,A=y in u?u[y]:"";if(xt(A)&&!I)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const L=xt(A)?A.join("/"):A;if(!L)if(k)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=L}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Dx(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Rx(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Dx(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xf(r))return 1;if(xf(s))return-1}return s.length-r.length}function xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Nx={type:0,value:""},Ox=/[a-zA-Z0-9_]/;function Px(t){if(!t)return[[]];if(t==="/")return[[Nx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Ox.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function Mx(t,e,n){const r=xx(Px(t.path),n),s=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Lx(t,e){const n=[],r=new Map;e=Nf({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,d){const g=!d,y=Fx(l);y.aliasOf=d&&d.record;const I=Nf(e,l),k=[y];if("alias"in l){const D=typeof l.alias=="string"?[l.alias]:l.alias;for(const z of D)k.push(he({},y,{components:d?d.record.components:y.components,path:z,aliasOf:d?d.record:y}))}let A,L;for(const D of k){const{path:z}=D;if(h&&z[0]!=="/"){const ee=h.record.path,te=ee[ee.length-1]==="/"?"":"/";D.path=h.record.path+(z&&te+z)}if(A=Mx(D,h,I),d?d.alias.push(A):(L=L||A,L!==A&&L.alias.push(A),g&&l.name&&!Rf(A)&&o(l.name)),y.children){const ee=y.children;for(let te=0;te<ee.length;te++)i(ee[te],A,d&&d.children[te])}d=d||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return L?()=>{o(L)}:qs}function o(l){if(Vv(l)){const h=r.get(l);h&&(r.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&Rx(l,n[h])>=0&&(l.record.path!==n[h].record.path||!$v(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!Rf(l)&&r.set(l.record.name,l)}function u(l,h){let d,g={},y,I;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw as(1,{location:l});I=d.record.name,g=he(Df(h.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),l.params&&Df(l.params,d.keys.map(L=>L.name))),y=d.stringify(g)}else if("path"in l)y=l.path,d=n.find(L=>L.re.test(y)),d&&(g=d.parse(y),I=d.record.name);else{if(d=h.name?r.get(h.name):n.find(L=>L.re.test(h.path)),!d)throw as(1,{location:l,currentLocation:h});I=d.record.name,g=he({},h.params,l.params),y=d.stringify(g)}const k=[];let A=d;for(;A;)k.unshift(A.record),A=A.parent;return{name:I,path:y,params:g,matched:k,meta:Vx(k)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Df(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Fx(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ux(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ux(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Rf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Vx(t){return t.reduce((e,n)=>he(e,n.meta),{})}function Nf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $v(t,e){return e.children.some(n=>n===t||$v(t,n))}const jv=/#/g,Bx=/&/g,$x=/\//g,jx=/=/g,qx=/\?/g,qv=/\+/g,Kx=/%5B/g,Hx=/%5D/g,Kv=/%5E/g,zx=/%60/g,Hv=/%7B/g,Gx=/%7C/g,zv=/%7D/g,Wx=/%20/g;function Zl(t){return encodeURI(""+t).replace(Gx,"|").replace(Kx,"[").replace(Hx,"]")}function Qx(t){return Zl(t).replace(Hv,"{").replace(zv,"}").replace(Kv,"^")}function Eu(t){return Zl(t).replace(qv,"%2B").replace(Wx,"+").replace(jv,"%23").replace(Bx,"%26").replace(zx,"`").replace(Hv,"{").replace(zv,"}").replace(Kv,"^")}function Xx(t){return Eu(t).replace(jx,"%3D")}function Yx(t){return Zl(t).replace(jv,"%23").replace(qx,"%3F")}function Jx(t){return t==null?"":Yx(t).replace($x,"%2F")}function ea(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Zx(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qv," "),o=i.indexOf("="),a=ea(o<0?i:i.slice(0,o)),c=o<0?null:ea(i.slice(o+1));if(a in e){let u=e[a];xt(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function Of(t){let e="";for(let n in t){const r=t[n];if(n=Xx(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(xt(r)?r.map(i=>i&&Eu(i)):[r&&Eu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function eD(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const tD=Symbol(""),Pf=Symbol(""),eh=Symbol(""),Gv=Symbol(""),Tu=Symbol("");function Cs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(as(4,{from:n,to:e})):h instanceof Error?a(h):Ax(h)?a(as(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(r&&r.instances[s],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Tc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(nD(a)){const u=(a.__vccOpts||a)[e];u&&s.push(yn(u,n,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=ux(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&yn(d,n,r,i,o)()}))}}return s}function nD(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Mf(t){const e=en(eh),n=en(Gv),r=vt(()=>e.resolve(Br(t.to))),s=vt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(os.bind(null,l));if(d>-1)return d;const g=Lf(c[u-2]);return u>1&&Lf(l)===g&&h[h.length-1].path!==g?h.findIndex(os.bind(null,c[u-2])):d}),i=vt(()=>s.value>-1&&oD(n.params,r.value.params)),o=vt(()=>s.value>-1&&s.value===n.matched.length-1&&Fv(n.params,r.value.params));function a(c={}){return iD(c)?e[Br(t.replace)?"replace":"push"](Br(t.to)).catch(qs):Promise.resolve()}return{route:r,href:vt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const rD=vp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Mf,setup(t,{slots:e}){const n=yi(Mf(t)),{options:r}=en(eh),s=vt(()=>({[Ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Fp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),sD=rD;function iD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oD(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!xt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Lf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ff=(t,e,n)=>t??e??n,aD=vp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(Tu),s=vt(()=>t.route||r.value),i=en(Pf,0),o=vt(()=>{let u=Br(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=vt(()=>s.value.matched[o.value]);ao(Pf,vt(()=>o.value+1)),ao(tD,a),ao(Tu,s);const c=Mw();return co(()=>[c.value,a.value,t.name],([u,l,h],[d,g,y])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!os(l,g)||!d)&&(l.enterCallbacks[h]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=s.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return Uf(n.default,{Component:d,route:u});const g=h.props[l],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,k=Fp(d,he({},y,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return Uf(n.default,{Component:k,route:u})||k}}});function Uf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cD=aD;function PD(t){const e=Lx(t.routes,t),n=t.parseQuery||Zx,r=t.stringifyQuery||Of,s=t.history,i=Cs(),o=Cs(),a=Cs(),c=Lw(gn);let u=gn;Or&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=bc.bind(null,b=>""+b),h=bc.bind(null,Jx),d=bc.bind(null,ea);function g(b,M){let N,$;return Vv(b)?(N=e.getRecordMatcher(b),$=M):$=b,e.addRoute($,N)}function y(b){const M=e.getRecordMatcher(b);M&&e.removeRoute(M)}function I(){return e.getRoutes().map(b=>b.record)}function k(b){return!!e.getRecordMatcher(b)}function A(b,M){if(M=he({},M||c.value),typeof b=="string"){const f=Ec(n,b,M.path),p=e.resolve({path:f.path},M),v=s.createHref(f.fullPath);return he(f,p,{params:d(p.params),hash:ea(f.hash),redirectedFrom:void 0,href:v})}let N;if("path"in b)N=he({},b,{path:Ec(n,b.path,M.path).path});else{const f=he({},b.params);for(const p in f)f[p]==null&&delete f[p];N=he({},b,{params:h(b.params)}),M.params=h(M.params)}const $=e.resolve(N,M),ae=b.hash||"";$.params=l(d($.params));const Te=dx(r,he({},b,{hash:Qx(ae),path:$.path})),re=s.createHref(Te);return he({fullPath:Te,hash:ae,query:r===Of?eD(b.query):b.query||{}},$,{redirectedFrom:void 0,href:re})}function L(b){return typeof b=="string"?Ec(n,b,c.value.path):he({},b)}function D(b,M){if(u!==b)return as(8,{from:M,to:b})}function z(b){return de(b)}function ee(b){return z(he(L(b),{replace:!0}))}function te(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let $=typeof N=="function"?N(b):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=L($):{path:$},$.params={}),he({query:b.query,hash:b.hash,params:"path"in $?{}:b.params},$)}}function de(b,M){const N=u=A(b),$=c.value,ae=b.state,Te=b.force,re=b.replace===!0,f=te(N);if(f)return de(he(L(f),{state:typeof f=="object"?he({},ae,f.state):ae,force:Te,replace:re}),M||N);const p=N;p.redirectedFrom=M;let v;return!Te&&fx(r,$,N)&&(v=as(16,{to:p,from:$}),Bn($,$,!0,!1)),(v?Promise.resolve(v):Dt(p,$)).catch(w=>Gt(w)?Gt(w,2)?w:bt(w):ve(w,p,$)).then(w=>{if(w){if(Gt(w,2))return de(he({replace:re},L(w.to),{state:typeof w.to=="object"?he({},ae,w.to.state):ae,force:Te}),M||p)}else w=ln(p,$,!0,re,ae);return yt(p,$,w),w})}function Ue(b,M){const N=D(b,M);return N?Promise.reject(N):Promise.resolve()}function Dt(b,M){let N;const[$,ae,Te]=uD(b,M);N=Tc($.reverse(),"beforeRouteLeave",b,M);for(const f of $)f.leaveGuards.forEach(p=>{N.push(yn(p,b,M))});const re=Ue.bind(null,b,M);return N.push(re),kr(N).then(()=>{N=[];for(const f of i.list())N.push(yn(f,b,M));return N.push(re),kr(N)}).then(()=>{N=Tc(ae,"beforeRouteUpdate",b,M);for(const f of ae)f.updateGuards.forEach(p=>{N.push(yn(p,b,M))});return N.push(re),kr(N)}).then(()=>{N=[];for(const f of b.matched)if(f.beforeEnter&&!M.matched.includes(f))if(xt(f.beforeEnter))for(const p of f.beforeEnter)N.push(yn(p,b,M));else N.push(yn(f.beforeEnter,b,M));return N.push(re),kr(N)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),N=Tc(Te,"beforeRouteEnter",b,M),N.push(re),kr(N))).then(()=>{N=[];for(const f of o.list())N.push(yn(f,b,M));return N.push(re),kr(N)}).catch(f=>Gt(f,8)?f:Promise.reject(f))}function yt(b,M,N){for(const $ of a.list())$(b,M,N)}function ln(b,M,N,$,ae){const Te=D(b,M);if(Te)return Te;const re=M===gn,f=Or?history.state:{};N&&($||re?s.replace(b.fullPath,he({scroll:re&&f&&f.scroll},ae)):s.push(b.fullPath,ae)),c.value=b,Bn(b,M,N,re),bt()}let Rt;function Er(){Rt||(Rt=s.listen((b,M,N)=>{if(!Bi.listening)return;const $=A(b),ae=te($);if(ae){de(he(ae,{replace:!0}),$).catch(qs);return}u=$;const Te=c.value;Or&&bx(Sf(Te.fullPath,N.delta),Ya()),Dt($,Te).catch(re=>Gt(re,12)?re:Gt(re,2)?(de(re.to,$).then(f=>{Gt(f,20)&&!N.delta&&N.type===mi.pop&&s.go(-1,!1)}).catch(qs),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ve(re,$,Te))).then(re=>{re=re||ln($,Te,!1),re&&(N.delta&&!Gt(re,8)?s.go(-N.delta,!1):N.type===mi.pop&&Gt(re,20)&&s.go(-1,!1)),yt($,Te,re)}).catch(qs)}))}let Vn=Cs(),ys=Cs(),ke;function ve(b,M,N){bt(b);const $=ys.list();return $.length?$.forEach(ae=>ae(b,M,N)):console.error(b),Promise.reject(b)}function fe(){return ke&&c.value!==gn?Promise.resolve():new Promise((b,M)=>{Vn.add([b,M])})}function bt(b){return ke||(ke=!b,Er(),Vn.list().forEach(([M,N])=>b?N(b):M()),Vn.reset()),b}function Bn(b,M,N,$){const{scrollBehavior:ae}=t;if(!Or||!ae)return Promise.resolve();const Te=!N&&Ex(Sf(b.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return lp().then(()=>ae(b,M,Te)).then(re=>re&&Ix(re)).catch(re=>ve(re,b,M))}const Et=b=>s.go(b);let st;const Tr=new Set,Bi={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:k,getRoutes:I,resolve:A,options:t,push:z,replace:ee,go:Et,back:()=>Et(-1),forward:()=>Et(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ys.add,isReady:fe,install(b){const M=this;b.component("RouterLink",sD),b.component("RouterView",cD),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Br(c)}),Or&&!st&&c.value===gn&&(st=!0,z(s.location).catch(ae=>{}));const N={};for(const ae in gn)N[ae]=vt(()=>c.value[ae]);b.provide(eh,M),b.provide(Gv,yi(N)),b.provide(Tu,c);const $=b.unmount;Tr.add(b),b.unmount=function(){Tr.delete(b),Tr.size<1&&(u=gn,Rt&&Rt(),Rt=null,c.value=gn,st=!1,ke=!1),$()}}};return Bi}function kr(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function uD(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>os(u,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>os(u,c))||s.push(c))}return[n,r,s]}export{SD as A,Mw as B,co as C,pD as D,bD as E,Qt as F,wn as G,ID as H,DD as K,kD as O,Mv as R,xD as U,yD as a,Pp as b,gD as c,mD as d,yi as e,AD as f,TD as g,RD as h,$E as i,vp as j,dD as k,PI as l,at as m,ED as n,NI as o,FI as p,PD as q,fD as r,OD as s,lD as t,Br as u,wD as v,hD as w,CD as x,ND as y,vD as z};
