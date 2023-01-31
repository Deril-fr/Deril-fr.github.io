function uu(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function lu(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Oe(s)?mv(s):lu(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(Oe(t))return t;if(Ee(t))return t}}const fv=/;(?![^(]*\))/g,pv=/:([^]+)/,gv=/\/\*.*?\*\//gs;function mv(t){const e={};return t.replace(gv,"").split(fv).forEach(n=>{if(n){const s=n.split(pv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function hu(t){let e="";if(Oe(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const s=hu(t[n]);s&&(e+=s+" ")}else if(Ee(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const yv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vv=uu(yv);function vf(t){return!!t||t===""}const $x=t=>Oe(t)?t:t==null?"":Y(t)||Ee(t)&&(t.toString===Ef||!Z(t.toString))?JSON.stringify(t,wf,2):String(t),wf=(t,e)=>e&&e.__v_isRef?wf(t,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:If(e)?{[`Set(${e.size})`]:[...e.values()]}:Ee(e)&&!Y(e)&&!Tf(e)?String(e):e,Ie={},Os=[],_t=()=>{},wv=()=>!1,Iv=/^on[^a-z]/,zo=t=>Iv.test(t),du=t=>t.startsWith("onUpdate:"),tt=Object.assign,fu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},bv=Object.prototype.hasOwnProperty,ce=(t,e)=>bv.call(t,e),Y=Array.isArray,Ps=t=>Go(t)==="[object Map]",If=t=>Go(t)==="[object Set]",Z=t=>typeof t=="function",Oe=t=>typeof t=="string",pu=t=>typeof t=="symbol",Ee=t=>t!==null&&typeof t=="object",bf=t=>Ee(t)&&Z(t.then)&&Z(t.catch),Ef=Object.prototype.toString,Go=t=>Ef.call(t),Ev=t=>Go(t).slice(8,-1),Tf=t=>Go(t)==="[object Object]",gu=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Yi=uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Tv=/-(\w)/g,jt=Wo(t=>t.replace(Tv,(e,n)=>n?n.toUpperCase():"")),_v=/\B([A-Z])/g,ir=Wo(t=>t.replace(_v,"-$1").toLowerCase()),Qo=Wo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ba=Wo(t=>t?`on${Qo(t)}`:""),$r=(t,e)=>!Object.is(t,e),Xi=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},po=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},go=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ql;const Sv=()=>ql||(ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Nt;class Cv{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Nt,!e&&Nt&&(this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Nt;try{return Nt=this,e()}finally{Nt=n}}}on(){Nt=this}off(){Nt=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Av(t,e=Nt){e&&e.active&&e.effects.push(t)}const mu=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_f=t=>(t.w&Cn)>0,Sf=t=>(t.n&Cn)>0,xv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Cn},Dv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];_f(r)&&!Sf(r)?r.delete(t):e[n++]=r,r.w&=~Cn,r.n&=~Cn}e.length=n}},hc=new WeakMap;let _r=0,Cn=1;const dc=30;let Et;const Jn=Symbol(""),fc=Symbol("");class yu{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Av(this,s)}run(){if(!this.active)return this.fn();let e=Et,n=In;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Et,Et=this,In=!0,Cn=1<<++_r,_r<=dc?xv(this):Kl(this),this.fn()}finally{_r<=dc&&Dv(this),Cn=1<<--_r,Et=this.parent,In=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Et===this?this.deferStop=!0:this.active&&(Kl(this),this.onStop&&this.onStop(),this.active=!1)}}function Kl(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let In=!0;const Cf=[];function or(){Cf.push(In),In=!1}function ar(){const t=Cf.pop();In=t===void 0?!0:t}function dt(t,e,n){if(In&&Et){let s=hc.get(t);s||hc.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=mu()),Af(r)}}function Af(t,e){let n=!1;_r<=dc?Sf(t)||(t.n|=Cn,n=!_f(t)):n=!t.has(Et),n&&(t.add(Et),Et.deps.push(t))}function Zt(t,e,n,s,r,i){const o=hc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Y(t)){const c=go(s);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Y(t)?gu(n)&&a.push(o.get("length")):(a.push(o.get(Jn)),Ps(t)&&a.push(o.get(fc)));break;case"delete":Y(t)||(a.push(o.get(Jn)),Ps(t)&&a.push(o.get(fc)));break;case"set":Ps(t)&&a.push(o.get(Jn));break}if(a.length===1)a[0]&&pc(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);pc(mu(c))}}function pc(t,e){const n=Y(t)?t:[...t];for(const s of n)s.computed&&Hl(s);for(const s of n)s.computed||Hl(s)}function Hl(t,e){(t!==Et||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const kv=uu("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(pu)),Rv=vu(),Nv=vu(!1,!0),Ov=vu(!0),zl=Pv();function Pv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=le(this);for(let i=0,o=this.length;i<o;i++)dt(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(le)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){or();const s=le(this)[e].apply(this,n);return ar(),s}}),t}function vu(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?Yv:Of:e?Nf:Rf).get(s))return s;const o=Y(s);if(!t&&o&&ce(zl,r))return Reflect.get(zl,r,i);const a=Reflect.get(s,r,i);return(pu(r)?xf.has(r):kv(r))||(t||dt(s,"get",r),e)?a:Ge(a)?o&&gu(r)?a:a.value:Ee(a)?t?Pf(a):li(a):a}}const Mv=Df(),Lv=Df(!0);function Df(t=!1){return function(n,s,r,i){let o=n[s];if(js(o)&&Ge(o)&&!Ge(r))return!1;if(!t&&(!mo(r)&&!js(r)&&(o=le(o),r=le(r)),!Y(n)&&Ge(o)&&!Ge(r)))return o.value=r,!0;const a=Y(n)&&gu(s)?Number(s)<n.length:ce(n,s),c=Reflect.set(n,s,r,i);return n===le(i)&&(a?$r(r,o)&&Zt(n,"set",s,r):Zt(n,"add",s,r)),c}}function Fv(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Zt(t,"delete",e,void 0),s}function Uv(t,e){const n=Reflect.has(t,e);return(!pu(e)||!xf.has(e))&&dt(t,"has",e),n}function Vv(t){return dt(t,"iterate",Y(t)?"length":Jn),Reflect.ownKeys(t)}const kf={get:Rv,set:Mv,deleteProperty:Fv,has:Uv,ownKeys:Vv},Bv={get:Ov,set(t,e){return!0},deleteProperty(t,e){return!0}},$v=tt({},kf,{get:Nv,set:Lv}),wu=t=>t,Yo=t=>Reflect.getPrototypeOf(t);function Pi(t,e,n=!1,s=!1){t=t.__v_raw;const r=le(t),i=le(e);n||(e!==i&&dt(r,"get",e),dt(r,"get",i));const{has:o}=Yo(r),a=s?wu:n?Eu:jr;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function Mi(t,e=!1){const n=this.__v_raw,s=le(n),r=le(t);return e||(t!==r&&dt(s,"has",t),dt(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Li(t,e=!1){return t=t.__v_raw,!e&&dt(le(t),"iterate",Jn),Reflect.get(t,"size",t)}function Gl(t){t=le(t);const e=le(this);return Yo(e).has.call(e,t)||(e.add(t),Zt(e,"add",t,t)),this}function Wl(t,e){e=le(e);const n=le(this),{has:s,get:r}=Yo(n);let i=s.call(n,t);i||(t=le(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?$r(e,o)&&Zt(n,"set",t,e):Zt(n,"add",t,e),this}function Ql(t){const e=le(this),{has:n,get:s}=Yo(e);let r=n.call(e,t);r||(t=le(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Zt(e,"delete",t,void 0),i}function Yl(){const t=le(this),e=t.size!==0,n=t.clear();return e&&Zt(t,"clear",void 0,void 0),n}function Fi(t,e){return function(s,r){const i=this,o=i.__v_raw,a=le(o),c=e?wu:t?Eu:jr;return!t&&dt(a,"iterate",Jn),o.forEach((u,l)=>s.call(r,c(u),c(l),i))}}function Ui(t,e,n){return function(...s){const r=this.__v_raw,i=le(r),o=Ps(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),l=n?wu:e?Eu:jr;return!e&&dt(i,"iterate",c?fc:Jn),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function an(t){return function(...e){return t==="delete"?!1:this}}function jv(){const t={get(i){return Pi(this,i)},get size(){return Li(this)},has:Mi,add:Gl,set:Wl,delete:Ql,clear:Yl,forEach:Fi(!1,!1)},e={get(i){return Pi(this,i,!1,!0)},get size(){return Li(this)},has:Mi,add:Gl,set:Wl,delete:Ql,clear:Yl,forEach:Fi(!1,!0)},n={get(i){return Pi(this,i,!0)},get size(){return Li(this,!0)},has(i){return Mi.call(this,i,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:Fi(!0,!1)},s={get(i){return Pi(this,i,!0,!0)},get size(){return Li(this,!0)},has(i){return Mi.call(this,i,!0)},add:an("add"),set:an("set"),delete:an("delete"),clear:an("clear"),forEach:Fi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ui(i,!1,!1),n[i]=Ui(i,!0,!1),e[i]=Ui(i,!1,!0),s[i]=Ui(i,!0,!0)}),[t,n,e,s]}const[qv,Kv,Hv,zv]=jv();function Iu(t,e){const n=e?t?zv:Hv:t?Kv:qv;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(ce(n,r)&&r in s?n:s,r,i)}const Gv={get:Iu(!1,!1)},Wv={get:Iu(!1,!0)},Qv={get:Iu(!0,!1)},Rf=new WeakMap,Nf=new WeakMap,Of=new WeakMap,Yv=new WeakMap;function Xv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jv(t){return t.__v_skip||!Object.isExtensible(t)?0:Xv(Ev(t))}function li(t){return js(t)?t:bu(t,!1,kf,Gv,Rf)}function Zv(t){return bu(t,!1,$v,Wv,Nf)}function Pf(t){return bu(t,!0,Bv,Qv,Of)}function bu(t,e,n,s,r){if(!Ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Jv(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function Ms(t){return js(t)?Ms(t.__v_raw):!!(t&&t.__v_isReactive)}function js(t){return!!(t&&t.__v_isReadonly)}function mo(t){return!!(t&&t.__v_isShallow)}function Mf(t){return Ms(t)||js(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function Lf(t){return po(t,"__v_skip",!0),t}const jr=t=>Ee(t)?li(t):t,Eu=t=>Ee(t)?Pf(t):t;function Ff(t){In&&Et&&(t=le(t),Af(t.dep||(t.dep=mu())))}function Uf(t,e){t=le(t),t.dep&&pc(t.dep)}function Ge(t){return!!(t&&t.__v_isRef===!0)}function ew(t){return Vf(t,!1)}function tw(t){return Vf(t,!0)}function Vf(t,e){return Ge(t)?t:new nw(t,e)}class nw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:jr(e)}get value(){return Ff(this),this._value}set value(e){const n=this.__v_isShallow||mo(e)||js(e);e=n?e:le(e),$r(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jr(e),Uf(this))}}function Ls(t){return Ge(t)?t.value:t}const sw={get:(t,e,n)=>Ls(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return Ge(r)&&!Ge(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Bf(t){return Ms(t)?t:new Proxy(t,sw)}var $f;class rw{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[$f]=!1,this._dirty=!0,this.effect=new yu(e,()=>{this._dirty||(this._dirty=!0,Uf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=le(this);return Ff(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}$f="__v_isReadonly";function iw(t,e,n=!1){let s,r;const i=Z(t);return i?(s=t,r=_t):(s=t.get,r=t.set),new rw(s,r,i||!r,n)}function bn(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Xo(i,e,n)}return r}function St(t,e,n,s){if(Z(t)){const i=bn(t,e,n,s);return i&&bf(i)&&i.catch(o=>{Xo(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(St(t[i],e,n,s));return r}function Xo(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){bn(c,null,10,[t,o,a]);return}}ow(t,n,r,s)}function ow(t,e,n,s=!0){console.error(t)}let qr=!1,gc=!1;const He=[];let Mt=0;const Fs=[];let zt=null,qn=0;const jf=Promise.resolve();let Tu=null;function qf(t){const e=Tu||jf;return t?e.then(this?t.bind(this):t):e}function aw(t){let e=Mt+1,n=He.length;for(;e<n;){const s=e+n>>>1;Kr(He[s])<t?e=s+1:n=s}return e}function _u(t){(!He.length||!He.includes(t,qr&&t.allowRecurse?Mt+1:Mt))&&(t.id==null?He.push(t):He.splice(aw(t.id),0,t),Kf())}function Kf(){!qr&&!gc&&(gc=!0,Tu=jf.then(zf))}function cw(t){const e=He.indexOf(t);e>Mt&&He.splice(e,1)}function uw(t){Y(t)?Fs.push(...t):(!zt||!zt.includes(t,t.allowRecurse?qn+1:qn))&&Fs.push(t),Kf()}function Xl(t,e=qr?Mt+1:0){for(;e<He.length;e++){const n=He[e];n&&n.pre&&(He.splice(e,1),e--,n())}}function Hf(t){if(Fs.length){const e=[...new Set(Fs)];if(Fs.length=0,zt){zt.push(...e);return}for(zt=e,zt.sort((n,s)=>Kr(n)-Kr(s)),qn=0;qn<zt.length;qn++)zt[qn]();zt=null,qn=0}}const Kr=t=>t.id==null?1/0:t.id,lw=(t,e)=>{const n=Kr(t)-Kr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function zf(t){gc=!1,qr=!0,He.sort(lw);const e=_t;try{for(Mt=0;Mt<He.length;Mt++){const n=He[Mt];n&&n.active!==!1&&bn(n,null,14)}}finally{Mt=0,He.length=0,Hf(),qr=!1,Tu=null,(He.length||Fs.length)&&zf()}}function hw(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ie;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[l]||Ie;d&&(r=n.map(g=>Oe(g)?g.trim():g)),h&&(r=n.map(go))}let a,c=s[a=Ba(e)]||s[a=Ba(jt(e))];!c&&i&&(c=s[a=Ba(ir(e))]),c&&St(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(u,t,6,r)}}function Gf(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=u=>{const l=Gf(u,e,!0);l&&(a=!0,tt(o,l))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ee(t)&&s.set(t,null),null):(Y(i)?i.forEach(c=>o[c]=null):tt(o,i),Ee(t)&&s.set(t,o),o)}function Jo(t,e){return!t||!zo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,ir(e))||ce(t,e))}let yt=null,Wf=null;function yo(t){const e=yt;return yt=t,Wf=t&&t.type.__scopeId||null,e}function dw(t,e=yt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&oh(-1);const i=yo(e);let o;try{o=t(...r)}finally{yo(i),s._d&&oh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function $a(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:g,ctx:y,inheritAttrs:I}=t;let x,C;const L=yo(t);try{if(n.shapeFlag&4){const z=r||s;x=Pt(l.call(z,z,h,i,g,d,y)),C=c}else{const z=e;x=Pt(z.length>1?z(i,{attrs:c,slots:a,emit:u}):z(i,null)),C=e.props?c:fw(c)}}catch(z){kr.length=0,Xo(z,t,1),x=it(ss)}let k=x;if(C&&I!==!1){const z=Object.keys(C),{shapeFlag:ee}=k;z.length&&ee&7&&(o&&z.some(du)&&(C=pw(C,o)),k=qs(k,C))}return n.dirs&&(k=qs(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),x=k,yo(L),x}const fw=t=>{let e;for(const n in t)(n==="class"||n==="style"||zo(n))&&((e||(e={}))[n]=t[n]);return e},pw=(t,e)=>{const n={};for(const s in t)(!du(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function gw(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Jl(s,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==s[d]&&!Jo(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Jl(s,o,u):!0:!!o;return!1}function Jl(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Jo(n,i))return!0}return!1}function mw({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yw=t=>t.__isSuspense;function vw(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):uw(t)}function Ji(t,e){if($e){let n=$e.provides;const s=$e.parent&&$e.parent.provides;s===n&&(n=$e.provides=Object.create(s)),n[t]=e}}function Jt(t,e,n=!1){const s=$e||yt;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Z(e)?e.call(s.proxy):e}}const Vi={};function Zi(t,e,n){return Qf(t,e,n)}function Qf(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=Ie){const a=$e;let c,u=!1,l=!1;if(Ge(t)?(c=()=>t.value,u=mo(t)):Ms(t)?(c=()=>t,s=!0):Y(t)?(l=!0,u=t.some(k=>Ms(k)||mo(k)),c=()=>t.map(k=>{if(Ge(k))return k.value;if(Ms(k))return Qn(k);if(Z(k))return bn(k,a,2)})):Z(t)?e?c=()=>bn(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),St(t,a,3,[d])}:c=_t,e&&s){const k=c;c=()=>Qn(k())}let h,d=k=>{h=C.onStop=()=>{bn(k,a,4)}},g;if(zr)if(d=_t,e?n&&St(e,a,3,[c(),l?[]:void 0,d]):c(),r==="sync"){const k=pI();g=k.__watcherHandles||(k.__watcherHandles=[])}else return _t;let y=l?new Array(t.length).fill(Vi):Vi;const I=()=>{if(C.active)if(e){const k=C.run();(s||u||(l?k.some((z,ee)=>$r(z,y[ee])):$r(k,y)))&&(h&&h(),St(e,a,3,[k,y===Vi?void 0:l&&y[0]===Vi?[]:y,d]),y=k)}else C.run()};I.allowRecurse=!!e;let x;r==="sync"?x=I:r==="post"?x=()=>st(I,a&&a.suspense):(I.pre=!0,a&&(I.id=a.uid),x=()=>_u(I));const C=new yu(c,x);e?n?I():y=C.run():r==="post"?st(C.run.bind(C),a&&a.suspense):C.run();const L=()=>{C.stop(),a&&a.scope&&fu(a.scope.effects,C)};return g&&g.push(L),L}function ww(t,e,n){const s=this.proxy,r=Oe(t)?t.includes(".")?Yf(s,t):()=>s[t]:t.bind(s,s);let i;Z(e)?i=e:(i=e.handler,n=e);const o=$e;Ks(this);const a=Qf(r,i.bind(s),n);return o?Ks(o):Zn(),a}function Yf(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Qn(t,e){if(!Ee(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ge(t))Qn(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Qn(t[n],e);else if(If(t)||Ps(t))t.forEach(n=>{Qn(n,e)});else if(Tf(t))for(const n in t)Qn(t[n],e);return t}function Xf(t){return Z(t)?{setup:t,name:t.name}:t}const eo=t=>!!t.type.__asyncLoader,Jf=t=>t.type.__isKeepAlive;function Iw(t,e){Zf(t,"a",e)}function bw(t,e){Zf(t,"da",e)}function Zf(t,e,n=$e){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Zo(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Jf(r.parent.vnode)&&Ew(s,e,n,r),r=r.parent}}function Ew(t,e,n,s){const r=Zo(e,t,s,!0);ep(()=>{fu(s[e],r)},n)}function Zo(t,e,n=$e,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;or(),Ks(n);const a=St(e,n,t,o);return Zn(),ar(),a});return s?r.unshift(i):r.push(i),i}}const nn=t=>(e,n=$e)=>(!zr||t==="sp")&&Zo(t,(...s)=>e(...s),n),Tw=nn("bm"),_w=nn("m"),Sw=nn("bu"),Cw=nn("u"),Aw=nn("bum"),ep=nn("um"),xw=nn("sp"),Dw=nn("rtg"),kw=nn("rtc");function Rw(t,e=$e){Zo("ec",t,e)}function jx(t,e){const n=yt;if(n===null)return t;const s=na(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Ie]=e[i];o&&(Z(o)&&(o={mounted:o,updated:o}),o.deep&&Qn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:u}))}return t}function Fn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(or(),St(c,n,8,[t.el,a,t,e]),ar())}}const tp="components",Nw="directives";function qx(t,e){return np(tp,t,!0,e)||t}const Ow=Symbol();function Kx(t){return np(Nw,t)}function np(t,e,n=!0,s=!1){const r=yt||$e;if(r){const i=r.type;if(t===tp){const a=hI(i,!1);if(a&&(a===e||a===jt(e)||a===Qo(jt(e))))return i}const o=Zl(r[t]||i[t],e)||Zl(r.appContext[t],e);return!o&&s?i:o}}function Zl(t,e){return t&&(t[e]||t[jt(e)]||t[Qo(jt(e))])}function Hx(t,e,n,s){let r;const i=n&&n[s];if(Y(t)||Oe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(Ee(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];r[a]=e(t[u],u,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const mc=t=>t?pp(t)?na(t)||t.proxy:mc(t.parent):null,Dr=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>mc(t.parent),$root:t=>mc(t.root),$emit:t=>t.emit,$options:t=>Su(t),$forceUpdate:t=>t.f||(t.f=()=>_u(t.update)),$nextTick:t=>t.n||(t.n=qf.bind(t.proxy)),$watch:t=>ww.bind(t)}),ja=(t,e)=>t!==Ie&&!t.__isScriptSetup&&ce(t,e),Pw={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ja(s,e))return o[e]=1,s[e];if(r!==Ie&&ce(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&ce(u,e))return o[e]=3,i[e];if(n!==Ie&&ce(n,e))return o[e]=4,n[e];yc&&(o[e]=0)}}const l=Dr[e];let h,d;if(l)return e==="$attrs"&&dt(t,"get",e),l(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ie&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ja(r,e)?(r[e]=n,!0):s!==Ie&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ie&&ce(t,o)||ja(e,o)||(a=i[0])&&ce(a,o)||ce(s,o)||ce(Dr,o)||ce(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let yc=!0;function Mw(t){const e=Su(t),n=t.proxy,s=t.ctx;yc=!1,e.beforeCreate&&eh(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:g,updated:y,activated:I,deactivated:x,beforeDestroy:C,beforeUnmount:L,destroyed:k,unmounted:z,render:ee,renderTracked:te,renderTriggered:de,errorCaptured:Ue,serverPrefetch:xt,expose:gt,inheritAttrs:on,components:Dt,directives:ws,filters:Mn}=e;if(u&&Lw(u,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ve in o){const fe=o[ve];Z(fe)&&(s[ve]=fe.bind(n))}if(r){const ve=r.call(n,n);Ee(ve)&&(t.data=li(ve))}if(yc=!0,i)for(const ve in i){const fe=i[ve],wt=Z(fe)?fe.bind(n,n):Z(fe.get)?fe.get.bind(n,n):_t,Ln=!Z(fe)&&Z(fe.set)?fe.set.bind(n):_t,It=mt({get:wt,set:Ln});Object.defineProperty(s,ve,{enumerable:!0,configurable:!0,get:()=>It.value,set:nt=>It.value=nt})}if(a)for(const ve in a)sp(a[ve],s,n,ve);if(c){const ve=Z(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(fe=>{Ji(fe,ve[fe])})}l&&eh(l,t,"c");function xe(ve,fe){Y(fe)?fe.forEach(wt=>ve(wt.bind(n))):fe&&ve(fe.bind(n))}if(xe(Tw,h),xe(_w,d),xe(Sw,g),xe(Cw,y),xe(Iw,I),xe(bw,x),xe(Rw,Ue),xe(kw,te),xe(Dw,de),xe(Aw,L),xe(ep,z),xe(xw,xt),Y(gt))if(gt.length){const ve=t.exposed||(t.exposed={});gt.forEach(fe=>{Object.defineProperty(ve,fe,{get:()=>n[fe],set:wt=>n[fe]=wt})})}else t.exposed||(t.exposed={});ee&&t.render===_t&&(t.render=ee),on!=null&&(t.inheritAttrs=on),Dt&&(t.components=Dt),ws&&(t.directives=ws)}function Lw(t,e,n=_t,s=!1){Y(t)&&(t=vc(t));for(const r in t){const i=t[r];let o;Ee(i)?"default"in i?o=Jt(i.from||r,i.default,!0):o=Jt(i.from||r):o=Jt(i),Ge(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function eh(t,e,n){St(Y(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sp(t,e,n,s){const r=s.includes(".")?Yf(n,s):()=>n[s];if(Oe(t)){const i=e[t];Z(i)&&Zi(r,i)}else if(Z(t))Zi(r,t.bind(n));else if(Ee(t))if(Y(t))t.forEach(i=>sp(i,e,n,s));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Zi(r,i,t)}}function Su(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>vo(c,u,o,!0)),vo(c,e,o)),Ee(e)&&i.set(e,c),c}function vo(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&vo(t,i,n,!0),r&&r.forEach(o=>vo(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Fw[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fw={data:th,props:Bn,emits:Bn,methods:Bn,computed:Bn,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Bn,directives:Bn,watch:Vw,provide:th,inject:Uw};function th(t,e){return e?t?function(){return tt(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function Uw(t,e){return Bn(vc(t),vc(e))}function vc(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ye(t,e){return t?[...new Set([].concat(t,e))]:e}function Bn(t,e){return t?tt(tt(Object.create(null),t),e):e}function Vw(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const s in e)n[s]=Ye(t[s],e[s]);return n}function Bw(t,e,n,s=!1){const r={},i={};po(i,ta,1),t.propsDefaults=Object.create(null),rp(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Zv(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function $w(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=le(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const l=t.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(Jo(t.emitsOptions,d))continue;const g=e[d];if(c)if(ce(i,d))g!==i[d]&&(i[d]=g,u=!0);else{const y=jt(d);r[y]=wc(c,a,y,g,t,!1)}else g!==i[d]&&(i[d]=g,u=!0)}}}else{rp(t,e,r,i)&&(u=!0);let l;for(const h in a)(!e||!ce(e,h)&&((l=ir(h))===h||!ce(e,l)))&&(c?n&&(n[h]!==void 0||n[l]!==void 0)&&(r[h]=wc(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],u=!0)}u&&Zt(t,"set","$attrs")}function rp(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Yi(c))continue;const u=e[c];let l;r&&ce(r,l=jt(c))?!i||!i.includes(l)?n[l]=u:(a||(a={}))[l]=u:Jo(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=le(n),u=a||Ie;for(let l=0;l<i.length;l++){const h=i[l];n[h]=wc(r,c,h,u[h],t,!ce(u,h))}}return o}function wc(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&Z(c)){const{propsDefaults:u}=r;n in u?s=u[n]:(Ks(r),s=u[n]=c.call(null,e),Zn())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===ir(n))&&(s=!0))}return s}function ip(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const l=h=>{c=!0;const[d,g]=ip(h,e,!0);tt(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}if(!i&&!c)return Ee(t)&&s.set(t,Os),Os;if(Y(i))for(let l=0;l<i.length;l++){const h=jt(i[l]);nh(h)&&(o[h]=Ie)}else if(i)for(const l in i){const h=jt(l);if(nh(h)){const d=i[l],g=o[h]=Y(d)||Z(d)?{type:d}:Object.assign({},d);if(g){const y=ih(Boolean,g.type),I=ih(String,g.type);g[0]=y>-1,g[1]=I<0||y<I,(y>-1||ce(g,"default"))&&a.push(h)}}}const u=[o,a];return Ee(t)&&s.set(t,u),u}function nh(t){return t[0]!=="$"}function sh(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function rh(t,e){return sh(t)===sh(e)}function ih(t,e){return Y(e)?e.findIndex(n=>rh(n,t)):Z(e)&&rh(e,t)?0:-1}const op=t=>t[0]==="_"||t==="$stable",Cu=t=>Y(t)?t.map(Pt):[Pt(t)],jw=(t,e,n)=>{if(e._n)return e;const s=dw((...r)=>Cu(e(...r)),n);return s._c=!1,s},ap=(t,e,n)=>{const s=t._ctx;for(const r in t){if(op(r))continue;const i=t[r];if(Z(i))e[r]=jw(r,i,s);else if(i!=null){const o=Cu(i);e[r]=()=>o}}},cp=(t,e)=>{const n=Cu(e);t.slots.default=()=>n},qw=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),po(e,"_",n)):ap(e,t.slots={})}else t.slots={},e&&cp(t,e);po(t.slots,ta,1)},Kw=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(tt(r,e),!n&&a===1&&delete r._):(i=!e.$stable,ap(e,r)),o=e}else e&&(cp(t,e),o={default:1});if(i)for(const a in r)!op(a)&&!(a in o)&&delete r[a]};function up(){return{app:null,config:{isNativeTag:wv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hw=0;function zw(t,e){return function(s,r=null){Z(s)||(s=Object.assign({},s)),r!=null&&!Ee(r)&&(r=null);const i=up(),o=new Set;let a=!1;const c=i.app={_uid:Hw++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:gI,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&Z(u.install)?(o.add(u),u.install(c,...l)):Z(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=it(s,r);return d.appContext=i,l&&e?e(d,u):t(d,u,h),a=!0,c._container=u,u.__vue_app__=c,na(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function Ic(t,e,n,s,r=!1){if(Y(t)){t.forEach((d,g)=>Ic(d,e&&(Y(e)?e[g]:e),n,s,r));return}if(eo(s)&&!r)return;const i=s.shapeFlag&4?na(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,l=a.refs===Ie?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Oe(u)?(l[u]=null,ce(h,u)&&(h[u]=null)):Ge(u)&&(u.value=null)),Z(c))bn(c,a,12,[o,l]);else{const d=Oe(c),g=Ge(c);if(d||g){const y=()=>{if(t.f){const I=d?ce(h,c)?h[c]:l[c]:c.value;r?Y(I)&&fu(I,i):Y(I)?I.includes(i)||I.push(i):d?(l[c]=[i],ce(h,c)&&(h[c]=l[c])):(c.value=[i],t.k&&(l[t.k]=c.value))}else d?(l[c]=o,ce(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(l[t.k]=o))};o?(y.id=-1,st(y,n)):y()}}}const st=vw;function Gw(t){return Ww(t)}function Ww(t,e){const n=Sv();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:g=_t,insertStaticContent:y}=t,I=(f,p,v,w=null,E=null,D=null,P=!1,A=null,R=!!p.dynamicChildren)=>{if(f===p)return;f&&!gr(f,p)&&(w=N(f),nt(f,E,D,!0),f=null),p.patchFlag===-2&&(R=!1,p.dynamicChildren=null);const{type:_,ref:q,shapeFlag:F}=p;switch(_){case ea:x(f,p,v,w);break;case ss:C(f,p,v,w);break;case to:f==null&&L(p,v,w,P);break;case Gt:Dt(f,p,v,w,E,D,P,A,R);break;default:F&1?ee(f,p,v,w,E,D,P,A,R):F&6?ws(f,p,v,w,E,D,P,A,R):(F&64||F&128)&&_.process(f,p,v,w,E,D,P,A,R,ae)}q!=null&&E&&Ic(q,f&&f.ref,D,p||f,!p)},x=(f,p,v,w)=>{if(f==null)s(p.el=a(p.children),v,w);else{const E=p.el=f.el;p.children!==f.children&&u(E,p.children)}},C=(f,p,v,w)=>{f==null?s(p.el=c(p.children||""),v,w):p.el=f.el},L=(f,p,v,w)=>{[f.el,f.anchor]=y(f.children,p,v,w,f.el,f.anchor)},k=({el:f,anchor:p},v,w)=>{let E;for(;f&&f!==p;)E=d(f),s(f,v,w),f=E;s(p,v,w)},z=({el:f,anchor:p})=>{let v;for(;f&&f!==p;)v=d(f),r(f),f=v;r(p)},ee=(f,p,v,w,E,D,P,A,R)=>{P=P||p.type==="svg",f==null?te(p,v,w,E,D,P,A,R):xt(f,p,E,D,P,A,R)},te=(f,p,v,w,E,D,P,A)=>{let R,_;const{type:q,props:F,shapeFlag:K,transition:Q,dirs:re}=f;if(R=f.el=o(f.type,D,F&&F.is,F),K&8?l(R,f.children):K&16&&Ue(f.children,R,null,w,E,D&&q!=="foreignObject",P,A),re&&Fn(f,null,w,"created"),F){for(const pe in F)pe!=="value"&&!Yi(pe)&&i(R,pe,null,F[pe],D,f.children,w,E,M);"value"in F&&i(R,"value",null,F.value),(_=F.onVnodeBeforeMount)&&Rt(_,w,f)}de(R,f,f.scopeId,P,w),re&&Fn(f,null,w,"beforeMount");const we=(!E||E&&!E.pendingBranch)&&Q&&!Q.persisted;we&&Q.beforeEnter(R),s(R,p,v),((_=F&&F.onVnodeMounted)||we||re)&&st(()=>{_&&Rt(_,w,f),we&&Q.enter(R),re&&Fn(f,null,w,"mounted")},E)},de=(f,p,v,w,E)=>{if(v&&g(f,v),w)for(let D=0;D<w.length;D++)g(f,w[D]);if(E){let D=E.subTree;if(p===D){const P=E.vnode;de(f,P,P.scopeId,P.slotScopeIds,E.parent)}}},Ue=(f,p,v,w,E,D,P,A,R=0)=>{for(let _=R;_<f.length;_++){const q=f[_]=A?dn(f[_]):Pt(f[_]);I(null,q,p,v,w,E,D,P,A)}},xt=(f,p,v,w,E,D,P)=>{const A=p.el=f.el;let{patchFlag:R,dynamicChildren:_,dirs:q}=p;R|=f.patchFlag&16;const F=f.props||Ie,K=p.props||Ie;let Q;v&&Un(v,!1),(Q=K.onVnodeBeforeUpdate)&&Rt(Q,v,p,f),q&&Fn(p,f,v,"beforeUpdate"),v&&Un(v,!0);const re=E&&p.type!=="foreignObject";if(_?gt(f.dynamicChildren,_,A,v,w,re,D):P||fe(f,p,A,null,v,w,re,D,!1),R>0){if(R&16)on(A,p,F,K,v,w,E);else if(R&2&&F.class!==K.class&&i(A,"class",null,K.class,E),R&4&&i(A,"style",F.style,K.style,E),R&8){const we=p.dynamicProps;for(let pe=0;pe<we.length;pe++){const De=we[pe],bt=F[De],bs=K[De];(bs!==bt||De==="value")&&i(A,De,bt,bs,E,f.children,v,w,M)}}R&1&&f.children!==p.children&&l(A,p.children)}else!P&&_==null&&on(A,p,F,K,v,w,E);((Q=K.onVnodeUpdated)||q)&&st(()=>{Q&&Rt(Q,v,p,f),q&&Fn(p,f,v,"updated")},w)},gt=(f,p,v,w,E,D,P)=>{for(let A=0;A<p.length;A++){const R=f[A],_=p[A],q=R.el&&(R.type===Gt||!gr(R,_)||R.shapeFlag&70)?h(R.el):v;I(R,_,q,null,w,E,D,P,!0)}},on=(f,p,v,w,E,D,P)=>{if(v!==w){if(v!==Ie)for(const A in v)!Yi(A)&&!(A in w)&&i(f,A,v[A],null,P,p.children,E,D,M);for(const A in w){if(Yi(A))continue;const R=w[A],_=v[A];R!==_&&A!=="value"&&i(f,A,_,R,P,p.children,E,D,M)}"value"in w&&i(f,"value",v.value,w.value)}},Dt=(f,p,v,w,E,D,P,A,R)=>{const _=p.el=f?f.el:a(""),q=p.anchor=f?f.anchor:a("");let{patchFlag:F,dynamicChildren:K,slotScopeIds:Q}=p;Q&&(A=A?A.concat(Q):Q),f==null?(s(_,v,w),s(q,v,w),Ue(p.children,v,q,E,D,P,A,R)):F>0&&F&64&&K&&f.dynamicChildren?(gt(f.dynamicChildren,K,v,E,D,P,A),(p.key!=null||E&&p===E.subTree)&&lp(f,p,!0)):fe(f,p,v,q,E,D,P,A,R)},ws=(f,p,v,w,E,D,P,A,R)=>{p.slotScopeIds=A,f==null?p.shapeFlag&512?E.ctx.activate(p,v,w,P,R):Mn(p,v,w,E,D,P,R):fr(f,p,R)},Mn=(f,p,v,w,E,D,P)=>{const A=f.component=oI(f,w,E);if(Jf(f)&&(A.ctx.renderer=ae),aI(A),A.asyncDep){if(E&&E.registerDep(A,xe),!f.el){const R=A.subTree=it(ss);C(null,R,p,v)}return}xe(A,f,p,v,E,D,P)},fr=(f,p,v)=>{const w=p.component=f.component;if(gw(f,p,v))if(w.asyncDep&&!w.asyncResolved){ve(w,p,v);return}else w.next=p,cw(w.update),w.update();else p.el=f.el,w.vnode=p},xe=(f,p,v,w,E,D,P)=>{const A=()=>{if(f.isMounted){let{next:q,bu:F,u:K,parent:Q,vnode:re}=f,we=q,pe;Un(f,!1),q?(q.el=re.el,ve(f,q,P)):q=re,F&&Xi(F),(pe=q.props&&q.props.onVnodeBeforeUpdate)&&Rt(pe,Q,q,re),Un(f,!0);const De=$a(f),bt=f.subTree;f.subTree=De,I(bt,De,h(bt.el),N(bt),f,E,D),q.el=De.el,we===null&&mw(f,De.el),K&&st(K,E),(pe=q.props&&q.props.onVnodeUpdated)&&st(()=>Rt(pe,Q,q,re),E)}else{let q;const{el:F,props:K}=p,{bm:Q,m:re,parent:we}=f,pe=eo(p);if(Un(f,!1),Q&&Xi(Q),!pe&&(q=K&&K.onVnodeBeforeMount)&&Rt(q,we,p),Un(f,!0),F&&se){const De=()=>{f.subTree=$a(f),se(F,f.subTree,f,E,null)};pe?p.type.__asyncLoader().then(()=>!f.isUnmounted&&De()):De()}else{const De=f.subTree=$a(f);I(null,De,v,w,f,E,D),p.el=De.el}if(re&&st(re,E),!pe&&(q=K&&K.onVnodeMounted)){const De=p;st(()=>Rt(q,we,De),E)}(p.shapeFlag&256||we&&eo(we.vnode)&&we.vnode.shapeFlag&256)&&f.a&&st(f.a,E),f.isMounted=!0,p=v=w=null}},R=f.effect=new yu(A,()=>_u(_),f.scope),_=f.update=()=>R.run();_.id=f.uid,Un(f,!0),_()},ve=(f,p,v)=>{p.component=f;const w=f.vnode.props;f.vnode=p,f.next=null,$w(f,p.props,w,v),Kw(f,p.children,v),or(),Xl(),ar()},fe=(f,p,v,w,E,D,P,A,R=!1)=>{const _=f&&f.children,q=f?f.shapeFlag:0,F=p.children,{patchFlag:K,shapeFlag:Q}=p;if(K>0){if(K&128){Ln(_,F,v,w,E,D,P,A,R);return}else if(K&256){wt(_,F,v,w,E,D,P,A,R);return}}Q&8?(q&16&&M(_,E,D),F!==_&&l(v,F)):q&16?Q&16?Ln(_,F,v,w,E,D,P,A,R):M(_,E,D,!0):(q&8&&l(v,""),Q&16&&Ue(F,v,w,E,D,P,A,R))},wt=(f,p,v,w,E,D,P,A,R)=>{f=f||Os,p=p||Os;const _=f.length,q=p.length,F=Math.min(_,q);let K;for(K=0;K<F;K++){const Q=p[K]=R?dn(p[K]):Pt(p[K]);I(f[K],Q,v,null,E,D,P,A,R)}_>q?M(f,E,D,!0,!1,F):Ue(p,v,w,E,D,P,A,R,F)},Ln=(f,p,v,w,E,D,P,A,R)=>{let _=0;const q=p.length;let F=f.length-1,K=q-1;for(;_<=F&&_<=K;){const Q=f[_],re=p[_]=R?dn(p[_]):Pt(p[_]);if(gr(Q,re))I(Q,re,v,null,E,D,P,A,R);else break;_++}for(;_<=F&&_<=K;){const Q=f[F],re=p[K]=R?dn(p[K]):Pt(p[K]);if(gr(Q,re))I(Q,re,v,null,E,D,P,A,R);else break;F--,K--}if(_>F){if(_<=K){const Q=K+1,re=Q<q?p[Q].el:w;for(;_<=K;)I(null,p[_]=R?dn(p[_]):Pt(p[_]),v,re,E,D,P,A,R),_++}}else if(_>K)for(;_<=F;)nt(f[_],E,D,!0),_++;else{const Q=_,re=_,we=new Map;for(_=re;_<=K;_++){const ut=p[_]=R?dn(p[_]):Pt(p[_]);ut.key!=null&&we.set(ut.key,_)}let pe,De=0;const bt=K-re+1;let bs=!1,Bl=0;const pr=new Array(bt);for(_=0;_<bt;_++)pr[_]=0;for(_=Q;_<=F;_++){const ut=f[_];if(De>=bt){nt(ut,E,D,!0);continue}let kt;if(ut.key!=null)kt=we.get(ut.key);else for(pe=re;pe<=K;pe++)if(pr[pe-re]===0&&gr(ut,p[pe])){kt=pe;break}kt===void 0?nt(ut,E,D,!0):(pr[kt-re]=_+1,kt>=Bl?Bl=kt:bs=!0,I(ut,p[kt],v,null,E,D,P,A,R),De++)}const $l=bs?Qw(pr):Os;for(pe=$l.length-1,_=bt-1;_>=0;_--){const ut=re+_,kt=p[ut],jl=ut+1<q?p[ut+1].el:w;pr[_]===0?I(null,kt,v,jl,E,D,P,A,R):bs&&(pe<0||_!==$l[pe]?It(kt,v,jl,2):pe--)}}},It=(f,p,v,w,E=null)=>{const{el:D,type:P,transition:A,children:R,shapeFlag:_}=f;if(_&6){It(f.component.subTree,p,v,w);return}if(_&128){f.suspense.move(p,v,w);return}if(_&64){P.move(f,p,v,ae);return}if(P===Gt){s(D,p,v);for(let F=0;F<R.length;F++)It(R[F],p,v,w);s(f.anchor,p,v);return}if(P===to){k(f,p,v);return}if(w!==2&&_&1&&A)if(w===0)A.beforeEnter(D),s(D,p,v),st(()=>A.enter(D),E);else{const{leave:F,delayLeave:K,afterLeave:Q}=A,re=()=>s(D,p,v),we=()=>{F(D,()=>{re(),Q&&Q()})};K?K(D,re,we):we()}else s(D,p,v)},nt=(f,p,v,w=!1,E=!1)=>{const{type:D,props:P,ref:A,children:R,dynamicChildren:_,shapeFlag:q,patchFlag:F,dirs:K}=f;if(A!=null&&Ic(A,null,v,f,!0),q&256){p.ctx.deactivate(f);return}const Q=q&1&&K,re=!eo(f);let we;if(re&&(we=P&&P.onVnodeBeforeUnmount)&&Rt(we,p,f),q&6)b(f.component,v,w);else{if(q&128){f.suspense.unmount(v,w);return}Q&&Fn(f,null,p,"beforeUnmount"),q&64?f.type.remove(f,p,v,E,ae,w):_&&(D!==Gt||F>0&&F&64)?M(_,p,v,!1,!0):(D===Gt&&F&384||!E&&q&16)&&M(R,p,v),w&&Is(f)}(re&&(we=P&&P.onVnodeUnmounted)||Q)&&st(()=>{we&&Rt(we,p,f),Q&&Fn(f,null,p,"unmounted")},v)},Is=f=>{const{type:p,el:v,anchor:w,transition:E}=f;if(p===Gt){Oi(v,w);return}if(p===to){z(f);return}const D=()=>{r(v),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:A}=E,R=()=>P(v,D);A?A(f.el,D,R):R()}else D()},Oi=(f,p)=>{let v;for(;f!==p;)v=d(f),r(f),f=v;r(p)},b=(f,p,v)=>{const{bum:w,scope:E,update:D,subTree:P,um:A}=f;w&&Xi(w),E.stop(),D&&(D.active=!1,nt(P,f,p,v)),A&&st(A,p),st(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},M=(f,p,v,w=!1,E=!1,D=0)=>{for(let P=D;P<f.length;P++)nt(f[P],p,v,w,E)},N=f=>f.shapeFlag&6?N(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),$=(f,p,v)=>{f==null?p._vnode&&nt(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,v),Xl(),Hf(),p._vnode=f},ae={p:I,um:nt,m:It,r:Is,mt:Mn,mc:Ue,pc:fe,pbc:gt,n:N,o:t};let Te,se;return e&&([Te,se]=e(ae)),{render:$,hydrate:Te,createApp:zw($,Te)}}function Un({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lp(t,e,n=!1){const s=t.children,r=e.children;if(Y(s)&&Y(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=dn(r[i]),a.el=o.el),n||lp(o,a)),a.type===ea&&(a.el=o.el)}}function Qw(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Yw=t=>t.__isTeleport,Gt=Symbol(void 0),ea=Symbol(void 0),ss=Symbol(void 0),to=Symbol(void 0),kr=[];let Tt=null;function Xw(t=!1){kr.push(Tt=t?null:[])}function Jw(){kr.pop(),Tt=kr[kr.length-1]||null}let Hr=1;function oh(t){Hr+=t}function hp(t){return t.dynamicChildren=Hr>0?Tt||Os:null,Jw(),Hr>0&&Tt&&Tt.push(t),t}function zx(t,e,n,s,r,i){return hp(fp(t,e,n,s,r,i,!0))}function Zw(t,e,n,s,r){return hp(it(t,e,n,s,r,!0))}function bc(t){return t?t.__v_isVNode===!0:!1}function gr(t,e){return t.type===e.type&&t.key===e.key}const ta="__vInternal",dp=({key:t})=>t??null,no=({ref:t,ref_key:e,ref_for:n})=>t!=null?Oe(t)||Ge(t)||Z(t)?{i:yt,r:t,k:e,f:!!n}:t:null;function fp(t,e=null,n=null,s=0,r=null,i=t===Gt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dp(e),ref:e&&no(e),scopeId:Wf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:yt};return a?(Au(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),Hr>0&&!o&&Tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Tt.push(c),c}const it=eI;function eI(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ow)&&(t=ss),bc(t)){const a=qs(t,e,!0);return n&&Au(a,n),Hr>0&&!i&&Tt&&(a.shapeFlag&6?Tt[Tt.indexOf(t)]=a:Tt.push(a)),a.patchFlag|=-2,a}if(dI(t)&&(t=t.__vccOpts),e){e=tI(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=hu(a)),Ee(c)&&(Mf(c)&&!Y(c)&&(c=tt({},c)),e.style=lu(c))}const o=Oe(t)?1:yw(t)?128:Yw(t)?64:Ee(t)?4:Z(t)?2:0;return fp(t,e,n,s,r,o,i,!0)}function tI(t){return t?Mf(t)||ta in t?tt({},t):t:null}function qs(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?sI(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&dp(a),ref:e&&e.ref?n&&r?Y(r)?r.concat(no(e)):[r,no(e)]:no(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qs(t.ssContent),ssFallback:t.ssFallback&&qs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function nI(t=" ",e=0){return it(ea,null,t,e)}function Gx(t,e){const n=it(to,null,t);return n.staticCount=e,n}function Wx(t="",e=!1){return e?(Xw(),Zw(ss,null,t)):it(ss,null,t)}function Pt(t){return t==null||typeof t=="boolean"?it(ss):Y(t)?it(Gt,null,t.slice()):typeof t=="object"?dn(t):it(ea,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qs(t)}function Au(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Au(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(ta in e)?e._ctx=yt:r===3&&yt&&(yt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:yt},n=32):(e=String(e),s&64?(n=16,e=[nI(e)]):n=8);t.children=e,t.shapeFlag|=n}function sI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=hu([e.class,s.class]));else if(r==="style")e.style=lu([e.style,s.style]);else if(zo(r)){const i=e[r],o=s[r];o&&i!==o&&!(Y(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Rt(t,e,n,s=null){St(t,e,7,[n,s])}const rI=up();let iI=0;function oI(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||rI,i={uid:iI++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ip(s,r),emitsOptions:Gf(s,r),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:s.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hw.bind(null,i),t.ce&&t.ce(i),i}let $e=null;const Ks=t=>{$e=t,t.scope.on()},Zn=()=>{$e&&$e.scope.off(),$e=null};function pp(t){return t.vnode.shapeFlag&4}let zr=!1;function aI(t,e=!1){zr=e;const{props:n,children:s}=t.vnode,r=pp(t);Bw(t,n,r,e),qw(t,s);const i=r?cI(t,e):void 0;return zr=!1,i}function cI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Lf(new Proxy(t.ctx,Pw));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?lI(t):null;Ks(t),or();const i=bn(s,t,0,[t.props,r]);if(ar(),Zn(),bf(i)){if(i.then(Zn,Zn),e)return i.then(o=>{ah(t,o,e)}).catch(o=>{Xo(o,t,0)});t.asyncDep=i}else ah(t,i,e)}else gp(t,e)}function ah(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ee(e)&&(t.setupState=Bf(e)),gp(t,n)}let ch;function gp(t,e,n){const s=t.type;if(!t.render){if(!e&&ch&&!s.render){const r=s.template||Su(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=tt(tt({isCustomElement:i,delimiters:a},o),c);s.render=ch(r,u)}}t.render=s.render||_t}Ks(t),or(),Mw(t),ar(),Zn()}function uI(t){return new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}})}function lI(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=uI(t))},slots:t.slots,emit:t.emit,expose:e}}function na(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bf(Lf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Dr)return Dr[n](t)},has(e,n){return n in e||n in Dr}}))}function hI(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function dI(t){return Z(t)&&"__vccOpts"in t}const mt=(t,e)=>iw(t,e,zr);function mp(t,e,n){const s=arguments.length;return s===2?Ee(e)&&!Y(e)?bc(e)?it(t,null,[e]):it(t,e):it(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&bc(n)&&(n=[n]),it(t,e,n))}const fI=Symbol(""),pI=()=>Jt(fI),gI="3.2.45",mI="http://www.w3.org/2000/svg",Kn=typeof document<"u"?document:null,uh=Kn&&Kn.createElement("template"),yI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Kn.createElementNS(mI,t):Kn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Kn.createTextNode(t),createComment:t=>Kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{uh.innerHTML=s?`<svg>${t}</svg>`:t;const a=uh.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vI(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function wI(t,e,n){const s=t.style,r=Oe(n);if(n&&!r){for(const i in n)Ec(s,i,n[i]);if(e&&!Oe(e))for(const i in e)n[i]==null&&Ec(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const lh=/\s*!important$/;function Ec(t,e,n){if(Y(n))n.forEach(s=>Ec(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=II(t,e);lh.test(n)?t.setProperty(ir(s),n.replace(lh,""),"important"):t[s]=n}}const hh=["Webkit","Moz","ms"],qa={};function II(t,e){const n=qa[e];if(n)return n;let s=jt(e);if(s!=="filter"&&s in t)return qa[e]=s;s=Qo(s);for(let r=0;r<hh.length;r++){const i=hh[r]+s;if(i in t)return qa[e]=i}return e}const dh="http://www.w3.org/1999/xlink";function bI(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dh,e.slice(6,e.length)):t.setAttributeNS(dh,e,n);else{const i=vv(e);n==null||i&&!vf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function EI(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=vf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Cs(t,e,n,s){t.addEventListener(e,n,s)}function TI(t,e,n,s){t.removeEventListener(e,n,s)}function _I(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=SI(e);if(s){const u=i[e]=xI(s,r);Cs(t,a,u,c)}else o&&(TI(t,a,o,c),i[e]=void 0)}}const fh=/(?:Once|Passive|Capture)$/;function SI(t){let e;if(fh.test(t)){e={};let s;for(;s=t.match(fh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ir(t.slice(2)),e]}let Ka=0;const CI=Promise.resolve(),AI=()=>Ka||(CI.then(()=>Ka=0),Ka=Date.now());function xI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;St(DI(s,n.value),e,5,[s])};return n.value=t,n.attached=AI(),n}function DI(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ph=/^on[a-z]/,kI=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?vI(t,s,r):e==="style"?wI(t,n,s):zo(e)?du(e)||_I(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):RI(t,e,s,r))?EI(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),bI(t,e,s,r))};function RI(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ph.test(e)&&Z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ph.test(e)&&Oe(n)?!1:e in t}const gh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>Xi(e,n):e};function NI(t){t.target.composing=!0}function mh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qx={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=gh(r);const i=s||r.props&&r.props.type==="number";Cs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=go(a)),t._assign(a)}),n&&Cs(t,"change",()=>{t.value=t.value.trim()}),e||(Cs(t,"compositionstart",NI),Cs(t,"compositionend",mh),Cs(t,"change",mh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=gh(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&go(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},OI=tt({patchProp:kI},yI);let yh;function PI(){return yh||(yh=Gw(OI))}const Yx=(...t)=>{const e=PI().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=MI(s);if(!r)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function MI(t){return Oe(t)?document.querySelector(t):t}/**
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
 */const yp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},LI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(n[l],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const y=u<<6&192|h;s.push(y)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},FI=function(t){const e=yp(t);return vp.encodeByteArray(e,!0)},wo=function(t){return FI(t).replace(/\./g,"")},wp=function(t){try{return vp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function UI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VI=()=>UI().__FIREBASE_DEFAULTS__,BI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$I=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wp(t[1]);return e&&JSON.parse(e)},sa=()=>{try{return VI()||BI()||$I()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ip=t=>{var e,n;return(n=(e=sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jI=t=>{const e=Ip(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qI=()=>{var t;return(t=sa())===null||t===void 0?void 0:t.config},bp=t=>{var e;return(e=sa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class KI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function HI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wo(JSON.stringify(n)),wo(JSON.stringify(o)),a].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function GI(){var t;const e=(t=sa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YI(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XI(){return!GI()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ep(){try{return typeof indexedDB=="object"}catch{return!1}}function JI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ZI="FirebaseError";class sn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ZI,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?eb(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new sn(r,a,s)}}function eb(t,e){return t.replace(tb,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const tb=/\{\$([^}]+)}/g;function nb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Io(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(vh(i)&&vh(o)){if(!Io(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function vh(t){return t!==null&&typeof t=="object"}/**
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
 */function di(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function sb(t,e){const n=new rb(t,e);return n.subscribe.bind(n)}class rb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");ib(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Ha),r.error===void 0&&(r.error=Ha),r.complete===void 0&&(r.complete=Ha);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ib(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ha(){}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class rs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const $n="[DEFAULT]";/**
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
 */class ob{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new KI;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cb(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ab(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ab(t){return t===$n?void 0:t}function cb(t){return t.instantiationMode==="EAGER"}/**
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
 */class ub{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ob(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const lb={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},hb=ue.INFO,db={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},fb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=db[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xu{constructor(e){this.name=e,this._logLevel=hb,this._logHandler=fb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const pb=(t,e)=>e.some(n=>t instanceof n);let wh,Ih;function gb(){return wh||(wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mb(){return Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tp=new WeakMap,Tc=new WeakMap,_p=new WeakMap,za=new WeakMap,Du=new WeakMap;function yb(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(En(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tp.set(n,t)}).catch(()=>{}),Du.set(e,t),e}function vb(t){if(Tc.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Tc.set(t,e)}let _c={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_p.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wb(t){_c=t(_c)}function Ib(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ga(this),e,...n);return _p.set(s,e.sort?e.sort():[e]),En(s)}:mb().includes(t)?function(...e){return t.apply(Ga(this),e),En(Tp.get(this))}:function(...e){return En(t.apply(Ga(this),e))}}function bb(t){return typeof t=="function"?Ib(t):(t instanceof IDBTransaction&&vb(t),pb(t,gb())?new Proxy(t,_c):t)}function En(t){if(t instanceof IDBRequest)return yb(t);if(za.has(t))return za.get(t);const e=bb(t);return e!==t&&(za.set(t,e),Du.set(e,t)),e}const Ga=t=>Du.get(t);function Eb(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=En(o);return s&&o.addEventListener("upgradeneeded",c=>{s(En(o.result),c.oldVersion,c.newVersion,En(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Tb=["get","getKey","getAll","getAllKeys","count"],_b=["put","add","delete","clear"],Wa=new Map;function bh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wa.get(e))return Wa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=_b.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Tb.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Wa.set(e,i),i}wb(t=>({...t,get:(e,n,s)=>bh(e,n)||t.get(e,n,s),has:(e,n)=>!!bh(e,n)||t.has(e,n)}));/**
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
 */class Sb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cb(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Cb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sc="@firebase/app",Eh="0.9.1";/**
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
 */const is=new xu("@firebase/app"),Ab="@firebase/app-compat",xb="@firebase/analytics-compat",Db="@firebase/analytics",kb="@firebase/app-check-compat",Rb="@firebase/app-check",Nb="@firebase/auth",Ob="@firebase/auth-compat",Pb="@firebase/database",Mb="@firebase/database-compat",Lb="@firebase/functions",Fb="@firebase/functions-compat",Ub="@firebase/installations",Vb="@firebase/installations-compat",Bb="@firebase/messaging",$b="@firebase/messaging-compat",jb="@firebase/performance",qb="@firebase/performance-compat",Kb="@firebase/remote-config",Hb="@firebase/remote-config-compat",zb="@firebase/storage",Gb="@firebase/storage-compat",Wb="@firebase/firestore",Qb="@firebase/firestore-compat",Yb="firebase",Xb="9.16.0";/**
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
 */const Cc="[DEFAULT]",Jb={[Sc]:"fire-core",[Ab]:"fire-core-compat",[Db]:"fire-analytics",[xb]:"fire-analytics-compat",[Rb]:"fire-app-check",[kb]:"fire-app-check-compat",[Nb]:"fire-auth",[Ob]:"fire-auth-compat",[Pb]:"fire-rtdb",[Mb]:"fire-rtdb-compat",[Lb]:"fire-fn",[Fb]:"fire-fn-compat",[Ub]:"fire-iid",[Vb]:"fire-iid-compat",[Bb]:"fire-fcm",[$b]:"fire-fcm-compat",[jb]:"fire-perf",[qb]:"fire-perf-compat",[Kb]:"fire-rc",[Hb]:"fire-rc-compat",[zb]:"fire-gcs",[Gb]:"fire-gcs-compat",[Wb]:"fire-fst",[Qb]:"fire-fst-compat","fire-js":"fire-js",[Yb]:"fire-js-all"};/**
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
 */const bo=new Map,Ac=new Map;function Zb(t,e){try{t.container.addComponent(e)}catch(n){is.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hs(t){const e=t.name;if(Ac.has(e))return is.debug(`There were multiple attempts to register component ${e}.`),!1;Ac.set(e,t);for(const n of bo.values())Zb(n,t);return!0}function ku(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const eE={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tn=new hi("app","Firebase",eE);/**
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
 */class tE{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=Xb;function nE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Cc,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Tn.create("bad-app-name",{appName:String(r)});if(n||(n=qI()),!n)throw Tn.create("no-options");const i=bo.get(r);if(i){if(Io(n,i.options)&&Io(s,i.config))return i;throw Tn.create("duplicate-app",{appName:r})}const o=new ub(r);for(const c of Ac.values())o.addComponent(c);const a=new tE(n,s,o);return bo.set(r,a),a}function Sp(t=Cc){const e=bo.get(t);if(!e&&t===Cc)return nE();if(!e)throw Tn.create("no-app",{appName:t});return e}function _n(t,e,n){var s;let r=(s=Jb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),is.warn(a.join(" "));return}Hs(new rs(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const sE="firebase-heartbeat-database",rE=1,Gr="firebase-heartbeat-store";let Qa=null;function Cp(){return Qa||(Qa=Eb(sE,rE,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gr)}}}).catch(t=>{throw Tn.create("idb-open",{originalErrorMessage:t.message})})),Qa}async function iE(t){try{return(await Cp()).transaction(Gr).objectStore(Gr).get(Ap(t))}catch(e){if(e instanceof sn)is.warn(e.message);else{const n=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});is.warn(n.message)}}}async function Th(t,e){try{const s=(await Cp()).transaction(Gr,"readwrite");return await s.objectStore(Gr).put(e,Ap(t)),s.done}catch(n){if(n instanceof sn)is.warn(n.message);else{const s=Tn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});is.warn(s.message)}}}function Ap(t){return`${t.name}!${t.options.appId}`}/**
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
 */const oE=1024,aE=30*24*60*60*1e3;class cE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lE(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=_h();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=aE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=_h(),{heartbeatsToSend:n,unsentEntries:s}=uE(this._heartbeatsCache.heartbeats),r=wo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function _h(){return new Date().toISOString().substring(0,10)}function uE(t,e=oE){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Sh(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Sh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class lE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ep()?JI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iE(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Th(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Th(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Sh(t){return wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hE(t){Hs(new rs("platform-logger",e=>new Sb(e),"PRIVATE")),Hs(new rs("heartbeat",e=>new cE(e),"PRIVATE")),_n(Sc,Eh,t),_n(Sc,Eh,"esm2017"),_n("fire-js","")}hE("");var dE="firebase",fE="9.16.0";/**
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
 */_n(dE,fE,"app");function Ru(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function xp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pE=xp,Dp=new hi("auth","Firebase",xp());/**
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
 */const Ch=new xu("@firebase/auth");function so(t,...e){Ch.logLevel<=ue.ERROR&&Ch.error(`Auth (${fi}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw Nu(t,...e)}function Vt(t,...e){return Nu(t,...e)}function kp(t,e,n){const s=Object.assign(Object.assign({},pE()),{[e]:n});return new hi("auth","Firebase",s).create(e,{appName:t.name})}function gE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&qt(t,"argument-error"),kp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Nu(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Dp.create(t,...e)}function G(t,e,...n){if(!t)throw Nu(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw so(e),new Error(e)}function en(t,e){t||Wt(e)}/**
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
 */const Ah=new Map;function Qt(t){en(t instanceof Function,"Expected a class definition");let e=Ah.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ah.set(t,e),e)}/**
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
 */function mE(t,e){const n=ku(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Io(i,e??{}))return r;qt(r,"already-initialized")}return n.initialize({options:e})}function yE(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function xc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function vE(){return xh()==="http:"||xh()==="https:"}function xh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function wE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vE()||WI()||"connection"in navigator)?navigator.onLine:!0}function IE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=zI()||QI()}get(){return wE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ou(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Rp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const EE=new pi(3e4,6e4);function TE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ra(t,e,n,s,r={}){return Np(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=di(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Rp.fetch()(Op(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Np(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},bE),e);try{const r=new SE(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bi(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Bi(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Bi(t,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kp(t,l,u);qt(t,l)}}catch(r){if(r instanceof sn)throw r;qt(t,"network-request-failed")}}async function _E(t,e,n,s,r={}){const i=await ra(t,e,n,s,r);return"mfaPendingCredential"in i&&qt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Op(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ou(t.config,r):`${t.config.apiScheme}://${r}`}class SE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),EE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bi(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Vt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function CE(t,e){return ra(t,"POST","/v1/accounts:delete",e)}async function AE(t,e){return ra(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Rr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function xE(t,e=!1){const n=ct(t),s=await n.getIdToken(e),r=Pu(s);G(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Rr(Ya(r.auth_time)),issuedAtTime:Rr(Ya(r.iat)),expirationTime:Rr(Ya(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ya(t){return Number(t)*1e3}function Pu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return so("JWT malformed, contained fewer than 3 sections"),null;try{const r=wp(n);return r?JSON.parse(r):(so("Failed to decode base64 JWT payload"),null)}catch(r){return so("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function DE(t){const e=Pu(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof sn&&kE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function kE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class RE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Pp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rr(this.lastLoginAt),this.creationTime=Rr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Eo(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Wr(t,AE(n,{idToken:s}));G(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?PE(i.providerUserInfo):[],a=OE(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Pp(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function NE(t){const e=ct(t);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OE(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function PE(t){return t.map(e=>{var{providerId:n}=e,s=Ru(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function ME(t,e){const n=await Np(t,{},async()=>{const s=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Op(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):DE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await ME(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Qr;return s&&(G(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(G(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function cn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class es{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ru(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new RE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Pp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return xE(this,e)}reload(){return NE(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new es(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wr(this,CE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,l;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,d=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:k,emailVerified:z,isAnonymous:ee,providerData:te,stsTokenManager:de}=n;G(k&&de,e,"internal-error");const Ue=Qr.fromJSON(this.name,de);G(typeof k=="string",e,"internal-error"),cn(h,e.name),cn(d,e.name),G(typeof z=="boolean",e,"internal-error"),G(typeof ee=="boolean",e,"internal-error"),cn(g,e.name),cn(y,e.name),cn(I,e.name),cn(x,e.name),cn(C,e.name),cn(L,e.name);const xt=new es({uid:k,auth:e,email:d,emailVerified:z,displayName:h,isAnonymous:ee,photoURL:y,phoneNumber:g,tenantId:I,stsTokenManager:Ue,createdAt:C,lastLoginAt:L});return te&&Array.isArray(te)&&(xt.providerData=te.map(gt=>Object.assign({},gt))),x&&(xt._redirectEventId=x),xt}static async _fromIdTokenResponse(e,n,s=!1){const r=new Qr;r.updateFromServerResponse(n);const i=new es({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Eo(i),i}}/**
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
 */class Mp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mp.type="NONE";const Dh=Mp;/**
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
 */function ro(t,e,n){return`firebase:${t}:${e}:${n}`}class Us{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ro(this.userKey,r.apiKey,i),this.fullPersistenceKey=ro("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?es._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Us(Qt(Dh),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Qt(Dh);const o=ro(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const h=es._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Us(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Us(i,e,s))}}/**
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
 */function kh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Up(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bp(e))return"Blackberry";if($p(e))return"Webos";if(Mu(e))return"Safari";if((e.includes("chrome/")||Fp(e))&&!e.includes("edge/"))return"Chrome";if(Vp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Lp(t=Pe()){return/firefox\//i.test(t)}function Mu(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fp(t=Pe()){return/crios\//i.test(t)}function Up(t=Pe()){return/iemobile/i.test(t)}function Vp(t=Pe()){return/android/i.test(t)}function Bp(t=Pe()){return/blackberry/i.test(t)}function $p(t=Pe()){return/webos/i.test(t)}function ia(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LE(t=Pe()){var e;return ia(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FE(){return YI()&&document.documentMode===10}function jp(t=Pe()){return ia(t)||Vp(t)||$p(t)||Bp(t)||/windows phone/i.test(t)||Up(t)}function UE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qp(t,e=[]){let n;switch(t){case"Browser":n=kh(Pe());break;case"Worker":n=`${kh(Pe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${s}`}/**
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
 */class VE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class BE{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rh(this),this.idTokenSubscription=new Rh(this),this.beforeStateQueue=new VE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ct(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return G(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function gi(t){return ct(t)}class Rh{constructor(e){this.auth=e,this.observer=null,this.addObserver=sb(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $E(t,e,n){const s=gi(t);G(s._canInitEmulator,s,"emulator-config-failed"),G(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Kp(e),{host:o,port:a}=jE(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||qE()}function Kp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jE(t){const e=Kp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Nh(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Nh(o)}}}function Nh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
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
 */async function Vs(t,e){return _E(t,"POST","/v1/accounts:signInWithIdp",TE(t,e))}/**
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
 */const KE="http://localhost";class os extends Hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new os(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ru(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new os(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Vs(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:KE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
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
 */class Lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends Lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pn extends mi{constructor(){super("facebook.com")}static credential(e){return os._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.FACEBOOK_SIGN_IN_METHOD="facebook.com";pn.PROVIDER_ID="facebook.com";/**
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
 */class gn extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return os._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
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
 */class mn extends mi{constructor(){super("github.com")}static credential(e){return os._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class yn extends mi{constructor(){super("twitter.com")}static credential(e,n){return os._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return yn.credential(n,s)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await es._fromIdTokenResponse(e,s,r),o=Oh(s);return new zs({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Oh(s);return new zs({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Oh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class To extends sn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,To.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new To(e,n,s,r)}}function zp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(t,i,e,s):i})}async function HE(t,e,n=!1){const s=await Wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",s)}/**
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
 */async function zE(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Wr(t,zp(s,r,e,t),n);G(i.idToken,s,"internal-error");const o=Pu(i.idToken);G(o,s,"internal-error");const{sub:a}=o;return G(t.uid===a,s,"user-mismatch"),zs._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&qt(s,"user-mismatch"),i}}/**
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
 */async function GE(t,e,n=!1){const s="signIn",r=await zp(t,s,e),i=await zs._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function WE(t,e,n,s){return ct(t).onIdTokenChanged(e,n,s)}function QE(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function Xx(t){return ct(t).signOut()}const _o="__sak";/**
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
 */class Gp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function YE(){const t=Pe();return Mu(t)||ia(t)}const XE=1e3,JE=10;class Wp extends Gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=YE()&&UE(),this.fallbackToPolling=jp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);FE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,JE):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},XE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wp.type="LOCAL";const ZE=Wp;/**
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
 */class Qp extends Gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qp.type="SESSION";const Yp=Qp;/**
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
 */function e0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new oa(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await e0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
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
 */function Fu(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class t0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Fu("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bt(){return window}function n0(t){Bt().location.href=t}/**
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
 */function Xp(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function s0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function i0(){return Xp()?self:null}/**
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
 */const Jp="firebaseLocalStorageDb",o0=1,So="firebaseLocalStorage",Zp="fbase_key";class yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([So],e?"readwrite":"readonly").objectStore(So)}function a0(){const t=indexedDB.deleteDatabase(Jp);return new yi(t).toPromise()}function Dc(){const t=indexedDB.open(Jp,o0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(So,{keyPath:Zp})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(So)?e(s):(s.close(),await a0(),e(await Dc()))})})}async function Ph(t,e,n){const s=aa(t,!0).put({[Zp]:e,value:n});return new yi(s).toPromise()}async function c0(t,e){const n=aa(t,!1).get(e),s=await new yi(n).toPromise();return s===void 0?null:s.value}function Mh(t,e){const n=aa(t,!0).delete(e);return new yi(n).toPromise()}const u0=800,l0=3;class eg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>l0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(i0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s0(),!this.activeServiceWorker)return;this.sender=new t0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dc();return await Ph(e,_o,"1"),await Mh(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ph(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>c0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=aa(r,!1).getAll();return new yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eg.type="LOCAL";const h0=eg;/**
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
 */function d0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function f0(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Vt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",d0().appendChild(s)})}function p0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new pi(3e4,6e4);/**
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
 */function tg(t,e){return e?Qt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uu extends Hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function g0(t){return GE(t.auth,new Uu(t),t.bypassAuthState)}function m0(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),zE(n,new Uu(t),t.bypassAuthState)}async function y0(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),HE(n,new Uu(t),t.bypassAuthState)}/**
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
 */class ng{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return g0;case"linkViaPopup":case"linkViaRedirect":return y0;case"reauthViaPopup":case"reauthViaRedirect":return m0;default:qt(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const v0=new pi(2e3,1e4);class Rs extends ng{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=Fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,v0.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const w0="pendingRedirect",io=new Map;class I0 extends ng{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=io.get(this.auth._key());if(!e){try{const s=await b0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}io.set(this.auth._key(),e)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b0(t,e){const n=rg(e),s=sg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}async function E0(t,e){return sg(t)._set(rg(e),"true")}function T0(t,e){io.set(t._key(),e)}function sg(t){return Qt(t._redirectPersistence)}function rg(t){return ro(w0,t.config.apiKey,t.name)}/**
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
 */function Jx(t,e,n){return _0(t,e,n)}async function _0(t,e,n){const s=gi(t);gE(t,e,Lu),await s._initializationPromise;const r=tg(s,n);return await E0(r,s),r._openRedirect(s,e,"signInViaRedirect")}async function Zx(t,e){return await gi(t)._initializationPromise,ig(t,e,!1)}async function ig(t,e,n=!1){const s=gi(t),r=tg(s,e),o=await new I0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const S0=10*60*1e3;class C0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!A0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!og(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lh(e))}saveEventToCache(e){this.cachedEventUids.add(Lh(e)),this.lastProcessedEventTime=Date.now()}}function Lh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function og({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function A0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return og(t);default:return!1}}/**
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
 */async function x0(t,e={}){return ra(t,"GET","/v1/projects",e)}/**
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
 */const D0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k0=/^https?/;async function R0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await x0(t);for(const n of e)try{if(N0(n))return}catch{}qt(t,"unauthorized-domain")}function N0(t){const e=xc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!k0.test(n))return!1;if(D0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const O0=new pi(3e4,6e4);function Fh(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function P0(t){return new Promise((e,n)=>{var s,r,i;function o(){Fh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fh(),n(Vt(t,"network-request-failed"))},timeout:O0.get()})}if(!((r=(s=Bt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Bt().gapi)===null||i===void 0)&&i.load)o();else{const a=p0("iframefcb");return Bt()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},f0(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw oo=null,e})}let oo=null;function M0(t){return oo=oo||P0(t),oo}/**
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
 */const L0=new pi(5e3,15e3),F0="__/auth/iframe",U0="emulator/auth/iframe",V0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},B0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $0(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,U0):`https://${t.config.authDomain}/${F0}`,s={apiKey:e.apiKey,appName:t.name,v:fi},r=B0.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${di(s).slice(1)}`}async function j0(t){const e=await M0(t),n=Bt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:$0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:V0,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=Bt().setTimeout(()=>{i(o)},L0.get());function c(){Bt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const q0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},K0=500,H0=600,z0="_blank",G0="http://localhost";class Uh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function W0(t,e,n,s=K0,r=H0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},q0),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Pe().toLowerCase();n&&(a=Fp(u)?z0:n),Lp(u)&&(e=e||G0,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(LE(u)&&a!=="_self")return Q0(e||"",a),new Uh(null);const h=window.open(e||"",a,l);G(h,t,"popup-blocked");try{h.focus()}catch{}return new Uh(h)}function Q0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Y0="__/auth/handler",X0="emulator/auth/handler";function Vh(t,e,n,s,r,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:fi,eventId:r};if(e instanceof Lu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nb(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof mi){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${J0(t)}?${di(a).slice(1)}`}function J0({config:t}){return t.emulator?Ou(t,X0):`https://${t.authDomain}/${Y0}`}/**
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
 */const Xa="webStorageSupport";class Z0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yp,this._completeRedirectFn=ig,this._overrideRedirectResult=T0}async _openPopup(e,n,s,r){var i;en((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Vh(e,n,s,xc(),r);return W0(e,o,Fu())}async _openRedirect(e,n,s,r){return await this._originValidation(e),n0(Vh(e,n,s,xc(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(en(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await j0(e),s=new C0(e);return n.register("authEvent",r=>(G(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xa,{type:Xa},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Xa];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=R0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jp()||Mu()||ia()}}const eT=Z0;var Bh="@firebase/auth",$h="0.21.1";/**
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
 */class tT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function nT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sT(t){Hs(new rs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{G(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),G(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qp(t)},l=new BE(a,c,u);return yE(l,n),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Hs(new rs("auth-internal",e=>{const n=gi(e.getProvider("auth").getImmediate());return(s=>new tT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Bh,$h,nT(t)),_n(Bh,$h,"esm2017")}/**
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
 */const rT=5*60,iT=bp("authIdTokenMaxAge")||rT;let jh=null;const oT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>iT)return;const r=n==null?void 0:n.token;jh!==r&&(jh=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function eD(t=Sp()){const e=ku(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mE(t,{popupRedirectResolver:eT,persistence:[h0,ZE,Yp]}),s=bp("authTokenSyncURL");if(s){const i=oT(s);QE(n,i,()=>i(n.currentUser)),WE(n,o=>i(o))}const r=Ip("auth");return r&&$E(n,`http://${r}`),n}sT("Browser");var aT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,Vu=Vu||{},W=aT||self;function Co(){}function ca(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function vi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cT(t){return Object.prototype.hasOwnProperty.call(t,Ja)&&t[Ja]||(t[Ja]=++uT)}var Ja="closure_uid_"+(1e9*Math.random()>>>0),uT=0;function lT(t,e,n){return t.call.apply(t.bind,arguments)}function hT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=lT:We=hT,We.apply(null,arguments)}function $i(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Rn(){this.s=this.s,this.o=this.o}var dT=0;Rn.prototype.s=!1;Rn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),dT!=0)&&cT(this)};Rn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ag=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Bu(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function qh(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ca(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var fT=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Co,e),W.removeEventListener("test",Co,e)}catch{}return t}();function Ao(t){return/^[\s\xa0]*$/.test(t)}var Kh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Za(t,e){return t<e?-1:t>e?1:0}function ua(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Lt(t){return ua().indexOf(t)!=-1}function $u(t){return $u[" "](t),t}$u[" "]=Co;function pT(t){var e=yT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var gT=Lt("Opera"),Gs=Lt("Trident")||Lt("MSIE"),cg=Lt("Edge"),kc=cg||Gs,ug=Lt("Gecko")&&!(ua().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),mT=ua().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function lg(){var t=W.document;return t?t.documentMode:void 0}var xo;e:{var ec="",tc=function(){var t=ua();if(ug)return/rv:([^\);]+)(\)|;)/.exec(t);if(cg)return/Edge\/([\d\.]+)/.exec(t);if(Gs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(mT)return/WebKit\/(\S+)/.exec(t);if(gT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tc&&(ec=tc?tc[1]:""),Gs){var nc=lg();if(nc!=null&&nc>parseFloat(ec)){xo=String(nc);break e}}xo=ec}var yT={};function vT(){return pT(function(){let t=0;const e=Kh(String(xo)).split("."),n=Kh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=Za(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Za(r[2].length==0,i[2].length==0)||Za(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Rc;if(W.document&&Gs){var Hh=lg();Rc=Hh||parseInt(xo,10)||void 0}else Rc=void 0;var wT=Rc;function Yr(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ug){e:{try{$u(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:IT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Yr.X.h.call(this)}}Ke(Yr,Qe);var IT={2:"touch",3:"pen",4:"mouse"};Yr.prototype.h=function(){Yr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wi="closure_listenable_"+(1e6*Math.random()|0),bT=0;function ET(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++bT,this.ba=this.ea=!1}function la(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ju(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function hg(t){const e={};for(const n in t)e[n]=t[n];return e}const zh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function dg(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<zh.length;i++)n=zh[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ha(t){this.src=t,this.g={},this.h=0}ha.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Oc(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ET(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Nc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=ag(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(la(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Oc(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var qu="closure_lm_"+(1e6*Math.random()|0),sc={};function fg(t,e,n,s,r){if(s&&s.once)return gg(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)fg(t,e[i],n,s,r);return null}return n=zu(n),t&&t[wi]?t.N(e,n,vi(s)?!!s.capture:!!s,r):pg(t,e,n,!1,s,r)}function pg(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=vi(r)?!!r.capture:!!r,a=Hu(t);if(a||(t[qu]=a=new ha(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=TT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)fT||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(yg(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function TT(){function t(n){return e.call(t.src,t.listener,n)}const e=_T;return t}function gg(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)gg(t,e[i],n,s,r);return null}return n=zu(n),t&&t[wi]?t.O(e,n,vi(s)?!!s.capture:!!s,r):pg(t,e,n,!0,s,r)}function mg(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)mg(t,e[i],n,s,r);else s=vi(s)?!!s.capture:!!s,n=zu(n),t&&t[wi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Oc(i,n,s,r),-1<n&&(la(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Oc(e,n,s,r)),(n=-1<t?e[t]:null)&&Ku(n))}function Ku(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[wi])Nc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(yg(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Hu(e))?(Nc(n,t),n.h==0&&(n.src=null,e[qu]=null)):la(t)}}}function yg(t){return t in sc?sc[t]:sc[t]="on"+t}function _T(t,e){if(t.ba)t=!0;else{e=new Yr(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&Ku(t),t=n.call(s,e)}return t}function Hu(t){return t=t[qu],t instanceof ha?t:null}var rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function zu(t){return typeof t=="function"?t:(t[rc]||(t[rc]=function(e){return t.handleEvent(e)}),t[rc])}function Le(){Rn.call(this),this.i=new ha(this),this.P=this,this.I=null}Ke(Le,Rn);Le.prototype[wi]=!0;Le.prototype.removeEventListener=function(t,e,n,s){mg(this,t,e,n,s)};function je(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var r=e;e=new Qe(s,t),dg(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=ji(o,s,!0,e)&&r}if(o=e.g=t,r=ji(o,s,!0,e)&&r,r=ji(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=ji(o,s,!1,e)&&r}Le.prototype.M=function(){if(Le.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)la(n[s]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Le.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function ji(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Nc(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Gu=W.JSON.stringify;function ST(){var t=Ig;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class CT{constructor(){this.h=this.g=null}add(e,n){const s=vg.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var vg=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new AT,t=>t.reset());class AT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function xT(t){W.setTimeout(()=>{throw t},0)}function wg(t,e){Pc||DT(),Mc||(Pc(),Mc=!0),Ig.add(t,e)}var Pc;function DT(){var t=W.Promise.resolve(void 0);Pc=function(){t.then(kT)}}var Mc=!1,Ig=new CT;function kT(){for(var t;t=ST();){try{t.h.call(t.g)}catch(n){xT(n)}var e=vg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mc=!1}function da(t,e){Le.call(this),this.h=t||1,this.g=e||W,this.j=We(this.lb,this),this.l=Date.now()}Ke(da,Le);V=da.prototype;V.ca=!1;V.R=null;V.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),je(this,"tick"),this.ca&&(Wu(this),this.start()))}};V.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}V.M=function(){da.X.M.call(this),Wu(this),delete this.g};function Qu(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function bg(t){t.g=Qu(()=>{t.g=null,t.i&&(t.i=!1,bg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class RT extends Rn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bg(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xr(t){Rn.call(this),this.h=t,this.g={}}Ke(Xr,Rn);var Gh=[];function Eg(t,e,n,s){Array.isArray(n)||(n&&(Gh[0]=n.toString()),n=Gh);for(var r=0;r<n.length;r++){var i=fg(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Tg(t){ju(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ku(e)},t),t.g={}}Xr.prototype.M=function(){Xr.X.M.call(this),Tg(this)};Xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function fa(){this.g=!0}fa.prototype.Aa=function(){this.g=!1};function NT(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function OT(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function Ns(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MT(t,n)+(s?" "+s:"")})}function PT(t,e){t.info(function(){return"TIMEOUT: "+e})}fa.prototype.info=function(){};function MT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Gu(n)}catch{return e}}var gs={},Wh=null;function pa(){return Wh=Wh||new Le}gs.Pa="serverreachability";function _g(t){Qe.call(this,gs.Pa,t)}Ke(_g,Qe);function Jr(t){const e=pa();je(e,new _g(e))}gs.STAT_EVENT="statevent";function Sg(t,e){Qe.call(this,gs.STAT_EVENT,t),this.stat=e}Ke(Sg,Qe);function Je(t){const e=pa();je(e,new Sg(e,t))}gs.Qa="timingevent";function Cg(t,e){Qe.call(this,gs.Qa,t),this.size=e}Ke(Cg,Qe);function Ii(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var ga={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ag={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Yu(){}Yu.prototype.h=null;function Qh(t){return t.h||(t.h=t.i())}function xg(){}var bi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Xu(){Qe.call(this,"d")}Ke(Xu,Qe);function Ju(){Qe.call(this,"c")}Ke(Ju,Qe);var Lc;function ma(){}Ke(ma,Yu);ma.prototype.g=function(){return new XMLHttpRequest};ma.prototype.i=function(){return{}};Lc=new ma;function Ei(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Xr(this),this.O=LT,t=kc?125:void 0,this.T=new da(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Dg}function Dg(){this.i=null,this.g="",this.h=!1}var LT=45e3,Fc={},Do={};V=Ei.prototype;V.setTimeout=function(t){this.O=t};function Uc(t,e,n){t.K=1,t.v=va(tn(e)),t.s=n,t.P=!0,kg(t,null)}function kg(t,e){t.F=Date.now(),Ti(t),t.A=tn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Ug(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Dg,t.g=im(t.l,n?e:null,!t.s),0<t.N&&(t.L=new RT(We(t.La,t,t.g),t.N)),Eg(t.S,t.g,"readystatechange",t.ib),e=t.H?hg(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Jr(),NT(t.j,t.u,t.A,t.m,t.U,t.s)}V.ib=function(t){t=t.target;const e=this.L;e&&Yt(t)==3?e.l():this.La(t)};V.La=function(t){try{if(t==this.g)e:{const l=Yt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||kc||this.g&&(this.h.h||this.g.fa()||Zh(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Jr(3):Jr(2)),ya(this);var n=this.g.aa();this.Y=n;t:if(Rg(this)){var s=Zh(this.g);t="";var r=s.length,i=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Nr(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,OT(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ao(a)){var u=a;break t}}u=null}if(n=u)Ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vc(this,n);else{this.i=!1,this.o=3,Je(12),Yn(this),Nr(this);break e}}this.P?(Ng(this,l,o),kc&&this.i&&l==3&&(Eg(this.S,this.T,"tick",this.hb),this.T.start())):(Ns(this.j,this.m,o,null),Vc(this,o)),l==4&&Yn(this),this.i&&!this.I&&(l==4?tm(this.l,this):(this.i=!1,Ti(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Je(12)):(this.o=0,Je(13)),Yn(this),Nr(this)}}}catch{}finally{}};function Rg(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ng(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=FT(t,n),r==Do){e==4&&(t.o=4,Je(14),s=!1),Ns(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Fc){t.o=4,Je(15),Ns(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Ns(t.j,t.m,r,null),Vc(t,r);Rg(t)&&r!=Do&&r!=Fc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Je(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),il(e),e.K=!0,Je(11))):(Ns(t.j,t.m,n,"[Invalid Chunked Response]"),Yn(t),Nr(t))}V.hb=function(){if(this.g){var t=Yt(this.g),e=this.g.fa();this.C<e.length&&(ya(this),Ng(this,t,e),this.i&&t!=4&&Ti(this))}};function FT(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Do:(n=Number(e.substring(n,s)),isNaN(n)?Fc:(s+=1,s+n>e.length?Do:(e=e.substr(s,n),t.C=s+n,e)))}V.cancel=function(){this.I=!0,Yn(this)};function Ti(t){t.V=Date.now()+t.O,Og(t,t.O)}function Og(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ii(We(t.gb,t),e)}function ya(t){t.B&&(W.clearTimeout(t.B),t.B=null)}V.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(PT(this.j,this.A),this.K!=2&&(Jr(),Je(17)),Yn(this),this.o=2,Nr(this)):Og(this,this.V-t)};function Nr(t){t.l.G==0||t.I||tm(t.l,t)}function Yn(t){ya(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Wu(t.T),Tg(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Vc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Bc(n.h,t))){if(!t.J&&Bc(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)No(n),ba(n);else break e;rl(n),Je(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ii(We(n.cb,n),6e3));if(1>=$g(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xn(n,11)}else if((t.J||n.g==t)&&No(n),!Ao(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=s.h;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Zu(i,i.h),i.h=null))}if(s.D){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.za=I,be(s.F,s.D,I))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=rm(s,s.H?s.ka:null,s.V),o.J){jg(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ya(a),Ti(a)),s.g=o}else Zg(s);0<n.i.length&&Ea(n)}else u[0]!="stop"&&u[0]!="close"||Xn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xn(n,7):sl(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Jr(4)}catch{}}function UT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ca(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function VT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ca(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Pg(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ca(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=VT(t),s=UT(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Mg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function BT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function ts(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ts){this.h=e!==void 0?e:t.h,ko(this,t.j),this.s=t.s,this.g=t.g,Ro(this,t.m),this.l=t.l,e=t.i;var n=new Zr;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Yh(this,n),this.o=t.o}else t&&(n=String(t).match(Mg))?(this.h=!!e,ko(this,n[1]||"",!0),this.s=Sr(n[2]||""),this.g=Sr(n[3]||"",!0),Ro(this,n[4]),this.l=Sr(n[5]||"",!0),Yh(this,n[6]||"",!0),this.o=Sr(n[7]||"")):(this.h=!!e,this.i=new Zr(null,this.h))}ts.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Cr(e,Xh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Cr(e,Xh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Cr(n,n.charAt(0)=="/"?qT:jT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Cr(n,HT)),t.join("")};function tn(t){return new ts(t)}function ko(t,e,n){t.j=n?Sr(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ro(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Yh(t,e,n){e instanceof Zr?(t.i=e,zT(t.i,t.h)):(n||(e=Cr(e,KT)),t.i=new Zr(e,t.h))}function be(t,e,n){t.i.set(e,n)}function va(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Sr(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Cr(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$T),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $T(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Xh=/[#\/\?@]/g,jT=/[#\?:]/g,qT=/[#\?]/g,KT=/[#\?@]/g,HT=/#/g;function Zr(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Nn(t){t.g||(t.g=new Map,t.h=0,t.i&&BT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=Zr.prototype;V.add=function(t,e){Nn(this),this.i=null,t=cr(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Lg(t,e){Nn(t),e=cr(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Fg(t,e){return Nn(t),e=cr(t,e),t.g.has(e)}V.forEach=function(t,e){Nn(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};V.oa=function(){Nn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};V.W=function(t){Nn(this);let e=[];if(typeof t=="string")Fg(this,t)&&(e=e.concat(this.g.get(cr(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Nn(this),this.i=null,t=cr(this,t),Fg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Ug(t,e,n){Lg(t,e),0<n.length&&(t.i=null,t.g.set(cr(t,e),Bu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function cr(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zT(t,e){e&&!t.j&&(Nn(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Lg(this,s),Ug(this,r,n))},t)),t.j=e}var GT=class{constructor(e,n){this.h=e,this.g=n}};function Vg(t){this.l=t||WT,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var WT=10;function Bg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $g(t){return t.h?1:t.g?t.g.size:0}function Bc(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Zu(t,e){t.g?t.g.add(e):t.h=e}function jg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Vg.prototype.cancel=function(){if(this.i=qg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function qg(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Bu(t.i)}function el(){}el.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};el.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function QT(){this.g=new el}function YT(t,e,n){const s=n||"";try{Pg(t,function(r,i){let o=r;vi(r)&&(o=Gu(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function XT(t,e){const n=new fa;if(W.Image){const s=new Image;s.onload=$i(qi,n,s,"TestLoadImage: loaded",!0,e),s.onerror=$i(qi,n,s,"TestLoadImage: error",!1,e),s.onabort=$i(qi,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=$i(qi,n,s,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function qi(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function _i(t){this.l=t.ac||null,this.j=t.jb||!1}Ke(_i,Yu);_i.prototype.g=function(){return new wa(this.l,this.j)};_i.prototype.i=function(t){return function(){return t}}({});function wa(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=tl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(wa,Le);var tl=0;V=wa.prototype;V.open=function(t,e){if(this.readyState!=tl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ei(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Si(this)),this.readyState=tl};V.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kg(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Kg(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}V.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Si(this):ei(this),this.readyState==3&&Kg(this)}};V.Va=function(t){this.g&&(this.response=this.responseText=t,Si(this))};V.Ua=function(t){this.g&&(this.response=t,Si(this))};V.ga=function(){this.g&&Si(this)};function Si(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ei(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ei(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var JT=W.JSON.parse;function Ae(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hg,this.K=this.L=!1}Ke(Ae,Le);var Hg="",ZT=/^https?$/i,e_=["POST","PUT"];V=Ae.prototype;V.Ka=function(t){this.L=t};V.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Lc.g(),this.C=this.u?Qh(this.u):Qh(Lc),this.g.onreadystatechange=We(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Jh(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=W.FormData&&t instanceof W.FormData,!(0<=ag(e_,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Wg(this),0<this.B&&((this.K=t_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.qa,this)):this.A=Qu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Jh(this,i)}};function t_(t){return Gs&&vT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.qa=function(){typeof Vu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,je(this,"timeout"),this.abort(8))};function Jh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,zg(t),Ia(t)}function zg(t){t.D||(t.D=!0,je(t,"complete"),je(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,je(this,"complete"),je(this,"abort"),Ia(this))};V.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ia(this,!0)),Ae.X.M.call(this)};V.Ha=function(){this.s||(this.F||this.v||this.l?Gg(this):this.fb())};V.fb=function(){Gg(this)};function Gg(t){if(t.h&&typeof Vu<"u"&&(!t.C[1]||Yt(t)!=4||t.aa()!=2)){if(t.v&&Yt(t)==4)Qu(t.Ha,0,t);else if(je(t,"readystatechange"),Yt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Mg)[1]||null;if(!r&&W.self&&W.self.location){var i=W.self.location.protocol;r=i.substr(0,i.length-1)}s=!ZT.test(r?r.toLowerCase():"")}n=s}if(n)je(t,"complete"),je(t,"success");else{t.m=6;try{var o=2<Yt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",zg(t)}}finally{Ia(t)}}}}function Ia(t,e){if(t.g){Wg(t);const n=t.g,s=t.C[0]?Co:null;t.g=null,t.C=null,e||je(t,"ready");try{n.onreadystatechange=s}catch{}}}function Wg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function Yt(t){return t.g?t.g.readyState:0}V.aa=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}};V.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),JT(e)}};function Zh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}V.Ea=function(){return this.m};V.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Qg(t){let e="";return ju(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function nl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Qg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):be(t,e,n))}function mr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Yg(t){this.Ca=0,this.i=[],this.j=new fa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=mr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=mr("baseRetryDelayMs",5e3,t),this.bb=mr("retryDelaySeedMs",1e4,t),this.$a=mr("forwardChannelMaxRetries",2,t),this.ta=mr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Vg(t&&t.concurrentRequestLimit),this.Fa=new QT,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}V=Yg.prototype;V.ma=8;V.G=1;function sl(t){if(Xg(t),t.G==3){var e=t.U++,n=tn(t.F);be(n,"SID",t.I),be(n,"RID",e),be(n,"TYPE","terminate"),Ci(t,n),e=new Ei(t,t.j,e,void 0),e.K=2,e.v=va(tn(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=im(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ti(e)}sm(t)}function ba(t){t.g&&(il(t),t.g.cancel(),t.g=null)}function Xg(t){ba(t),t.u&&(W.clearTimeout(t.u),t.u=null),No(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Ea(t){Bg(t.h)||t.m||(t.m=!0,wg(t.Ja,t),t.C=0)}function n_(t,e){return $g(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ii(We(t.Ja,t,e),nm(t,t.C)),t.C++,!0)}V.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Ei(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=hg(i),dg(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Jg(this,r,e),n=tn(this.F),be(n,"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),Ci(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(Qg(i)))+"&"+e:this.o&&nl(n,this.o,i)),Zu(this.h,r),this.Ya&&be(n,"TYPE","init"),this.O?(be(n,"$req",e),be(n,"SID","null"),r.Z=!0,Uc(r,n,null)):Uc(r,n,e),this.G=2}}else this.G==3&&(t?ed(this,t):this.i.length==0||Bg(this.h)||ed(this))};function ed(t,e){var n;e?n=e.m:n=t.U++;const s=tn(t.F);be(s,"SID",t.I),be(s,"RID",n),be(s,"AID",t.T),Ci(t,s),t.o&&t.s&&nl(s,t.o,t.s),n=new Ei(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Jg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Zu(t.h,n),Uc(n,s,e)}function Ci(t,e){t.ia&&ju(t.ia,function(n,s){be(e,s,n)}),t.l&&Pg({},function(n,s){be(e,s,n)})}function Jg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?We(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{YT(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function Zg(t){t.g||t.u||(t.Z=1,wg(t.Ia,t),t.A=0)}function rl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ii(We(t.Ia,t),nm(t,t.A)),t.A++,!0)}V.Ia=function(){if(this.u=null,em(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ii(We(this.eb,this),t)}};V.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Je(10),ba(this),em(this))};function il(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function em(t){t.g=new Ei(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=tn(t.sa);be(e,"RID","rpc"),be(e,"SID",t.I),be(e,"CI",t.L?"0":"1"),be(e,"AID",t.T),be(e,"TYPE","xmlhttp"),Ci(t,e),t.o&&t.s&&nl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=va(tn(e)),n.s=null,n.P=!0,kg(n,t)}V.cb=function(){this.v!=null&&(this.v=null,ba(this),rl(this),Je(19))};function No(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function tm(t,e){var n=null;if(t.g==e){No(t),il(t),t.g=null;var s=2}else if(Bc(t.h,e))n=e.D,jg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=pa(),je(s,new Cg(s,n)),Ea(t)}else Zg(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&n_(t,e)||s==2&&rl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}}function nm(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=We(t.kb,t);n||(n=new ts("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||ko(n,"https"),va(n)),XT(n.toString(),s)}else Je(2);t.G=0,t.l&&t.l.va(e),sm(t),Xg(t)}V.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Je(2)):(this.j.info("Failed to ping google.com"),Je(1))};function sm(t){if(t.G=0,t.la=[],t.l){const e=qg(t.h);(e.length!=0||t.i.length!=0)&&(qh(t.la,e),qh(t.la,t.i),t.h.i.length=0,Bu(t.i),t.i.length=0),t.l.ua()}}function rm(t,e,n){var s=n instanceof ts?tn(n):new ts(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Ro(s,s.m);else{var r=W.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new ts(null,void 0);s&&ko(i,s),e&&(i.g=e),r&&Ro(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&be(s,n,e),be(s,"VER",t.ma),Ci(t,s),s}function im(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ae(new _i({jb:!0})):new Ae(t.ra),e.Ka(t.H),e}function om(){}V=om.prototype;V.xa=function(){};V.wa=function(){};V.va=function(){};V.ua=function(){};V.Ra=function(){};function Oo(){if(Gs&&!(10<=Number(wT)))throw Error("Environmental error: no available transport.")}Oo.prototype.g=function(t,e){return new ft(t,e)};function ft(t,e){Le.call(this),this.g=new Yg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ao(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ao(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ur(this)}Ke(ft,Le);ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Je(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=rm(t,null,t.V),Ea(t)};ft.prototype.close=function(){sl(this.g)};ft.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Gu(t),t=n);e.i.push(new GT(e.ab++,t)),e.G==3&&Ea(e)};ft.prototype.M=function(){this.g.l=null,delete this.j,sl(this.g),delete this.g,ft.X.M.call(this)};function am(t){Xu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(am,Xu);function cm(){Ju.call(this),this.status=1}Ke(cm,Ju);function ur(t){this.g=t}Ke(ur,om);ur.prototype.xa=function(){je(this.g,"a")};ur.prototype.wa=function(t){je(this.g,new am(t))};ur.prototype.va=function(t){je(this.g,new cm)};ur.prototype.ua=function(){je(this.g,"b")};Oo.prototype.createWebChannel=Oo.prototype.g;ft.prototype.send=ft.prototype.u;ft.prototype.open=ft.prototype.m;ft.prototype.close=ft.prototype.close;ga.NO_ERROR=0;ga.TIMEOUT=8;ga.HTTP_ERROR=6;Ag.COMPLETE="complete";xg.EventType=bi;bi.OPEN="a";bi.CLOSE="b";bi.ERROR="c";bi.MESSAGE="d";Le.prototype.listen=Le.prototype.N;Ae.prototype.listenOnce=Ae.prototype.O;Ae.prototype.getLastError=Ae.prototype.Oa;Ae.prototype.getLastErrorCode=Ae.prototype.Ea;Ae.prototype.getStatus=Ae.prototype.aa;Ae.prototype.getResponseJson=Ae.prototype.Sa;Ae.prototype.getResponseText=Ae.prototype.fa;Ae.prototype.send=Ae.prototype.da;Ae.prototype.setWithCredentials=Ae.prototype.Ka;var s_=function(){return new Oo},r_=function(){return pa()},ic=ga,i_=Ag,o_=gs,td={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},a_=_i,Ki=xg,c_=Ae;const nd="@firebase/firestore";/**
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
 */let lr="9.16.0";/**
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
 */const as=new xu("@firebase/firestore");function $c(){return as.logLevel}function S(t,...e){if(as.logLevel<=ue.DEBUG){const n=e.map(ol);as.debug(`Firestore (${lr}): ${t}`,...n)}}function Xe(t,...e){if(as.logLevel<=ue.ERROR){const n=e.map(ol);as.error(`Firestore (${lr}): ${t}`,...n)}}function Po(t,...e){if(as.logLevel<=ue.WARN){const n=e.map(ol);as.warn(`Firestore (${lr}): ${t}`,...n)}}function ol(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${lr}) INTERNAL ASSERTION FAILED: `+t;throw Xe(e),new Error(e)}function j(t,e){t||U()}function X(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $t{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class um{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class u_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ve.UNAUTHENTICATED))}shutdown(){}}class l_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class h_{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $t,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $t)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(j(typeof s.accessToken=="string"),new um(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new Ve(e)}}class d_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(j(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class f_{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new d_(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class g_{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(j(typeof n.token=="string"),this.A=n.token,new p_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function m_(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class lm{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=m_(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function J(t,e){return t<e?-1:t>e?1:0}function Ws(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}function hm(t){return t+"\0"}/**
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
 */class _e{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new _e(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ti{constructor(e,n,s){n===void 0?n=0:n>e.length&&U(),s===void 0?s=e.length-n:s>e.length-n&&U(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return ti.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ti?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends ti{construct(e,n,s){return new ye(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new B(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const y_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends ti{construct(e,n,s){return new Re(e,n,s)}static isValidIdentifier(e){return y_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new B(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new B(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new B(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new B(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(n)}static emptyPath(){return new Re([])}}/**
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
 */class dm{constructor(e,n,s,r){this.indexId=e,this.collectionGroup=n,this.fields=s,this.indexState=r}}function jc(t){return t.fields.find(e=>e.kind===2)}function jn(t){return t.fields.filter(e=>e.kind!==2)}dm.UNKNOWN_ID=-1;class v_{constructor(e,n){this.fieldPath=e,this.kind=n}}class Mo{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Mo(0,pt.min())}}function w_(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=H.fromTimestamp(s===1e9?new _e(n+1,0):new _e(n,s));return new pt(r,O.empty(),e)}function fm(t){return new pt(t.readTime,t.key,-1)}class pt{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new pt(H.min(),O.empty(),-1)}static max(){return new pt(H.max(),O.empty(),-1)}}function al(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
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
 */const pm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ms(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==pm)throw t;S("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class m{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new m((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof m?n:m.resolve(n)}catch(n){return m.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):m.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):m.reject(n)}static resolve(e){return new m((n,s)=>{n(e)})}static reject(e){return new m((n,s)=>{s(e)})}static waitFor(e){return new m((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=m.resolve(!1);for(const s of e)n=n.next(r=>r?m.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new m((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new m((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}/**
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
 */class Ta{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.P=new $t,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{n.error?this.P.reject(new Or(e,n.error)):this.P.resolve()},this.transaction.onerror=s=>{const r=cl(s.target.error);this.P.reject(new Or(e,r))}}static open(e,n,s,r){try{return new Ta(n,e.transaction(r,s))}catch(i){throw new Or(n,i)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(S("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new b_(n)}}class Xt{constructor(e,n,s){this.name=e,this.version=n,this.S=s,Xt.D(Pe())===12.2&&Xe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return S("SimpleDb","Removing database:",e),Hn(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!Ep())return!1;if(Xt.N())return!0;const e=Pe(),n=Xt.D(e),s=0<n&&n<10,r=Xt.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static N(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.O)==="YES"}static M(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static k(e){const n=e.match(/Android ([\d.]+)/i),s=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async F(e){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;n(o)},r.onblocked=()=>{s(new Or(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new B(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new B(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Or(e,o))},r.onupgradeneeded=i=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.S.$(o,r.transaction,i.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,s,r){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.F(e);const a=Ta.open(this.db,e,i?"readonly":"readwrite",s),c=r(a).next(u=>(a.V(),u)).catch(u=>(a.abort(u),m.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class I_{constructor(e){this.q=e,this.U=!1,this.K=null}get isDone(){return this.U}get G(){return this.K}set cursor(e){this.q=e}done(){this.U=!0}j(e){this.K=e}delete(){return Hn(this.q.delete())}}class Or extends B{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function On(t){return t.name==="IndexedDbTransactionError"}class b_{constructor(e){this.store=e}put(e,n){let s;return n!==void 0?(S("SimpleDb","PUT",this.store.name,e,n),s=this.store.put(n,e)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),Hn(s)}add(e){return S("SimpleDb","ADD",this.store.name,e,e),Hn(this.store.add(e))}get(e){return Hn(this.store.get(e)).next(n=>(n===void 0&&(n=null),S("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return S("SimpleDb","DELETE",this.store.name,e),Hn(this.store.delete(e))}count(){return S("SimpleDb","COUNT",this.store.name),Hn(this.store.count())}W(e,n){const s=this.options(e,n);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.H(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new m((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}J(e,n){const s=this.store.getAll(e,n===null?void 0:n);return new m((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}Y(e,n){S("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,n);s.X=!1;const r=this.cursor(s);return this.H(r,(i,o,a)=>a.delete())}Z(e,n){let s;n?s=e:(s={},n=e);const r=this.cursor(s);return this.H(r,n)}tt(e){const n=this.cursor({});return new m((s,r)=>{n.onerror=i=>{const o=cl(i.target.error);r(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}H(e,n){const s=[];return new m((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const c=new I_(a),u=n(a.primaryKey,a.value,c);if(u instanceof m){const l=u.catch(h=>(c.done(),m.reject(h)));s.push(l)}c.isDone?r():c.G===null?a.continue():a.continue(c.G)}}).next(()=>m.waitFor(s))}options(e,n){let s;return e!==void 0&&(typeof e=="string"?s=e:n=e),{index:s,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const s=this.store.index(e.index);return e.X?s.openKeyCursor(e.range,n):s.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Hn(t){return new m((e,n)=>{t.onsuccess=s=>{const r=s.target.result;e(r)},t.onerror=s=>{const r=cl(s.target.error);n(r)}})}let sd=!1;function cl(t){const e=Xt.D(Pe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const s=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return sd||(sd=!0,setTimeout(()=>{throw s},0)),s}}return t}class E_{constructor(e,n){this.asyncQueue=e,this.et=n,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}nt(e){S("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{S("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(n){On(n)?S("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await ms(n)}await this.nt(6e4)})}}class T_{constructor(e,n){this.localStore=e,this.persistence=n}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.it(n,e))}it(e,n){const s=new Set;let r=n,i=!0;return m.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return S("IndexBackiller",`Processing collection: ${o}`),this.rt(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>n-r)}rt(e,n,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(r=>this.localStore.localDocuments.getNextDocuments(e,n,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.ot(r,i)).next(a=>(S("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}ot(e,n){let s=e;return n.changes.forEach((r,i)=>{const o=fm(i);al(o,s)>0&&(s=o)}),new pt(s.readTime,s.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class vt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}vt.at=-1;/**
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
 */class __{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class cs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new cs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof cs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ys(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function _a(t){return t==null}function ni(t){return t===0&&1/t==-1/0}function S_(t){return typeof t=="number"&&Number.isInteger(t)&&!ni(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new qe(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const C_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(j(!!t),typeof t=="string"){let e=0;const n=C_.exec(t);if(j(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function ym(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function vm(t){const e=t.mapValue.fields.__previous_value__;return ym(e)?vm(e):e}function si(t){const e=An(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */const wn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},ao={nullValue:"NULL_VALUE"};function ls(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ym(t)?4:wm(t)?9007199254740991:10:U()}function Kt(t,e){if(t===e)return!0;const n=ls(t);if(n!==ls(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return si(t).isEqual(si(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=An(s.timestampValue),o=An(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return us(s.bytesValue).isEqual(us(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return Se(s.geoPointValue.latitude)===Se(r.geoPointValue.latitude)&&Se(s.geoPointValue.longitude)===Se(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Se(s.integerValue)===Se(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Se(s.doubleValue),o=Se(r.doubleValue);return i===o?ni(i)===ni(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return Ws(t.arrayValue.values||[],e.arrayValue.values||[],Kt);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(rd(i)!==rd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Kt(i[a],o[a])))return!1;return!0}(t,e);default:return U()}}function ri(t,e){return(t.values||[]).find(n=>Kt(n,e))!==void 0}function xn(t,e){if(t===e)return 0;const n=ls(t),s=ls(e);if(n!==s)return J(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Se(r.integerValue||r.doubleValue),a=Se(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return id(t.timestampValue,e.timestampValue);case 4:return id(si(t),si(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(r,i){const o=us(r),a=us(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=J(o[c],a[c]);if(u!==0)return u}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=J(Se(r.latitude),Se(i.latitude));return o!==0?o:J(Se(r.longitude),Se(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=xn(o[c],a[c]);if(u)return u}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===wn.mapValue&&i===wn.mapValue)return 0;if(r===wn.mapValue)return 1;if(i===wn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=J(a[l],u[l]);if(h!==0)return h;const d=xn(o[a[l]],c[u[l]]);if(d!==0)return d}return J(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function id(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=An(t),s=An(e),r=J(n.seconds,s.seconds);return r!==0?r:J(n.nanos,s.nanos)}function Qs(t){return qc(t)}function qc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=An(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?us(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,O.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=qc(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${qc(s.fields[a])}`;return i+"}"}(t.mapValue):U();var e,n}function ul(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Kc(t){return!!t&&"integerValue"in t}function ii(t){return!!t&&"arrayValue"in t}function od(t){return!!t&&"nullValue"in t}function ad(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function co(t){return!!t&&"mapValue"in t}function Pr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ys(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Pr(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wm(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function A_(t){return"nullValue"in t?ao:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?ul(cs.empty(),O.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:U()}function x_(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?ul(cs.empty(),O.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?wn:U()}function cd(t,e){const n=xn(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function ud(t,e){const n=xn(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Ys{constructor(e,n){this.position=e,this.inclusive=n}}function ld(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=O.comparator(O.fromName(o.referenceValue),n.key):s=xn(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function hd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Im{}class ie extends Im{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new D_(e,n,s):n==="array-contains"?new N_(e,s):n==="in"?new Cm(e,s):n==="not-in"?new O_(e,s):n==="array-contains-any"?new P_(e,s):new ie(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new k_(e,s):new R_(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(xn(n,this.value)):n!==null&&ls(this.value)===ls(n)&&this.matchesComparison(xn(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ge extends Im{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ge(e,n)}matches(e){return Xs(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Xs(t){return t.op==="and"}function Hc(t){return t.op==="or"}function ll(t){return bm(t)&&Xs(t)}function bm(t){for(const e of t.filters)if(e instanceof ge)return!1;return!0}function zc(t){if(t instanceof ie)return t.field.canonicalString()+t.op.toString()+Qs(t.value);if(ll(t))return t.filters.map(e=>zc(e)).join(",");{const e=t.filters.map(n=>zc(n)).join(",");return`${t.op}(${e})`}}function Em(t,e){return t instanceof ie?function(n,s){return s instanceof ie&&n.op===s.op&&n.field.isEqual(s.field)&&Kt(n.value,s.value)}(t,e):t instanceof ge?function(n,s){return s instanceof ge&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Em(i,s.filters[o]),!0):!1}(t,e):void U()}function Tm(t,e){const n=t.filters.concat(e);return ge.create(n,t.op)}function _m(t){return t instanceof ie?function(e){return`${e.field.canonicalString()} ${e.op} ${Qs(e.value)}`}(t):t instanceof ge?function(e){return e.op.toString()+" {"+e.getFilters().map(_m).join(" ,")+"}"}(t):"Filter"}class D_ extends ie{constructor(e,n,s){super(e,n,s),this.key=O.fromName(s.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class k_ extends ie{constructor(e,n){super(e,"in",n),this.keys=Sm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class R_ extends ie{constructor(e,n){super(e,"not-in",n),this.keys=Sm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Sm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>O.fromName(s.referenceValue))}class N_ extends ie{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ii(n)&&ri(n.arrayValue,this.value)}}class Cm extends ie{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ri(this.value.arrayValue,n)}}class O_ extends ie{constructor(e,n){super(e,"not-in",n)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ri(this.value.arrayValue,n)}}class P_ extends ie{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ii(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ri(this.value.arrayValue,s))}}/**
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
 */class Mr{constructor(e,n="asc"){this.field=e,this.dir=n}}function M_(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Be.RED,this.left=r??Be.EMPTY,this.right=i??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Be(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Be.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Be(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class me{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof me)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new me(this.comparator);return n.data=e,n}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Es(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class ot{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new ot([])}unionWith(e){let n=new me(Re.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ws(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class ze{constructor(e){this.value=e}static empty(){return new ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!co(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pr(n)}setAll(e){let n=Re.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Pr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());co(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];co(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ys(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ze(Pr(this.value))}}function Am(t){const e=[];return ys(t.fields,(n,s)=>{const r=new Re([n]);if(co(s)){const i=Am(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new ot(e)}/**
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
 */class Ce{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ce(e,0,H.min(),H.min(),H.min(),ze.empty(),0)}static newFoundDocument(e,n,s,r){return new Ce(e,1,n,H.min(),s,r,0)}static newNoDocument(e,n){return new Ce(e,2,n,H.min(),H.min(),ze.empty(),0)}static newUnknownDocument(e,n){return new Ce(e,3,n,H.min(),H.min(),ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class L_{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Gc(t,e=null,n=[],s=[],r=null,i=null,o=null){return new L_(t,e,n,s,r,i,o)}function hs(t){const e=X(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>zc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),_a(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qs(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qs(s)).join(",")),e.ft=n}return e.ft}function Ai(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!M_(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Em(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hd(t.startAt,e.startAt)&&hd(t.endAt,e.endAt)}function Lo(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Fo(t,e){return t.filters.filter(n=>n instanceof ie&&n.field.isEqual(e))}function fd(t,e,n){let s=ao,r=!0;for(const i of Fo(t,e)){let o=ao,a=!0;switch(i.op){case"<":case"<=":o=A_(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=ao}cd({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];cd({value:s,inclusive:r},{value:o,inclusive:n.inclusive})<0&&(s=o,r=n.inclusive);break}}return{value:s,inclusive:r}}function pd(t,e,n){let s=wn,r=!0;for(const i of Fo(t,e)){let o=wn,a=!0;switch(i.op){case">=":case">":o=x_(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=wn}ud({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];ud({value:s,inclusive:r},{value:o,inclusive:n.inclusive})>0&&(s=o,r=n.inclusive);break}}return{value:s,inclusive:r}}/**
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
 */class Sa{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this._t=null,this.startAt,this.endAt}}function F_(t,e,n,s,r,i,o,a){return new Sa(t,e,n,s,r,i,o,a)}function Ca(t){return new Sa(t)}function gd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function U_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function V_(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function B_(t){return t.collectionGroup!==null}function Bs(t){const e=X(t);if(e.dt===null){e.dt=[];const n=V_(e),s=U_(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new Mr(n)),e.dt.push(new Mr(Re.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Mr(Re.keyField(),i))}}}return e.dt}function Ct(t){const e=X(t);if(!e._t)if(e.limitType==="F")e._t=Gc(e.path,e.collectionGroup,Bs(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of Bs(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Mr(i.field,o))}const s=e.endAt?new Ys(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ys(e.startAt.position,e.startAt.inclusive):null;e._t=Gc(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e._t}function Wc(t,e,n){return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Aa(t,e){return Ai(Ct(t),Ct(e))&&t.limitType===e.limitType}function xm(t){return`${hs(Ct(t))}|lt:${t.limitType}`}function Qc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>_m(s)).join(", ")}]`),_a(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Qs(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Qs(s)).join(",")),`Target(${n})`}(Ct(t))}; limitType=${t.limitType})`}function hl(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):O.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of Bs(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=ld(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Bs(n),s)||n.endAt&&!function(r,i,o){const a=ld(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Bs(n),s))}(t,e)}function $_(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Dm(t){return(e,n)=>{let s=!1;for(const r of Bs(t)){const i=j_(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function j_(t,e,n){const s=t.field.isKeyField()?O.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?xn(a,c):U()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return U()}}/**
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
 */function km(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ni(e)?"-0":e}}function Rm(t){return{integerValue:""+t}}function q_(t,e){return S_(e)?Rm(e):km(t,e)}/**
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
 */class xa{constructor(){this._=void 0}}function K_(t,e,n){return t instanceof oi?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Js?Om(t,e):t instanceof Zs?Pm(t,e):function(s,r){const i=Nm(s,r),o=md(i)+md(s.gt);return Kc(i)&&Kc(s.gt)?Rm(o):km(s.yt,o)}(t,e)}function H_(t,e,n){return t instanceof Js?Om(t,e):t instanceof Zs?Pm(t,e):n}function Nm(t,e){return t instanceof ai?Kc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class oi extends xa{}class Js extends xa{constructor(e){super(),this.elements=e}}function Om(t,e){const n=Mm(e);for(const s of t.elements)n.some(r=>Kt(r,s))||n.push(s);return{arrayValue:{values:n}}}class Zs extends xa{constructor(e){super(),this.elements=e}}function Pm(t,e){let n=Mm(e);for(const s of t.elements)n=n.filter(r=>!Kt(r,s));return{arrayValue:{values:n}}}class ai extends xa{constructor(e,n){super(),this.yt=e,this.gt=n}}function md(t){return Se(t.integerValue||t.doubleValue)}function Mm(t){return ii(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class z_{constructor(e,n){this.field=e,this.transform=n}}function G_(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Js&&s instanceof Js||n instanceof Zs&&s instanceof Zs?Ws(n.elements,s.elements,Kt):n instanceof ai&&s instanceof ai?Kt(n.gt,s.gt):n instanceof oi&&s instanceof oi}(t.transform,e.transform)}class W_{constructor(e,n){this.version=e,this.transformResults=n}}class at{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Da{}function Lm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dl(t.key,at.none()):new hr(t.key,t.data,at.none());{const n=t.data,s=ze.empty();let r=new me(Re.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new rn(t.key,s,new ot(r.toArray()),at.none())}}function Q_(t,e,n){t instanceof hr?function(s,r,i){const o=s.value.clone(),a=vd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof rn?function(s,r,i){if(!uo(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=vd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Fm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Lr(t,e,n,s){return t instanceof hr?function(r,i,o,a){if(!uo(r.precondition,i))return o;const c=r.value.clone(),u=wd(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof rn?function(r,i,o,a){if(!uo(r.precondition,i))return o;const c=wd(r.fieldTransforms,a,i),u=i.data;return u.setAll(Fm(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return uo(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function Y_(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Nm(s.transform,r||null);i!=null&&(n===null&&(n=ze.empty()),n.set(s.field,i))}return n||null}function yd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ws(n,s,(r,i)=>G_(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hr extends Da{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class rn extends Da{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Fm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function vd(t,e,n){const s=new Map;j(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,H_(o,a,n[r]))}return s}function wd(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,K_(i,o,e))}return s}class dl extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Um extends Da{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class X_{constructor(e){this.count=e}}/**
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
 */var ke,oe;function J_(t){switch(t){default:return U();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Vm(t){if(t===void 0)return Xe("GRPC error has no .code"),T.UNKNOWN;switch(t){case ke.OK:return T.OK;case ke.CANCELLED:return T.CANCELLED;case ke.UNKNOWN:return T.UNKNOWN;case ke.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case ke.INTERNAL:return T.INTERNAL;case ke.UNAVAILABLE:return T.UNAVAILABLE;case ke.UNAUTHENTICATED:return T.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case ke.NOT_FOUND:return T.NOT_FOUND;case ke.ALREADY_EXISTS:return T.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return T.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case ke.ABORTED:return T.ABORTED;case ke.OUT_OF_RANGE:return T.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return T.UNIMPLEMENTED;case ke.DATA_LOSS:return T.DATA_LOSS;default:return U()}}(oe=ke||(ke={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Pn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ys(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return mm(this.inner)}size(){return this.innerSize}}/**
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
 */const Z_=new Ne(O.comparator);function lt(){return Z_}const Bm=new Ne(O.comparator);function Ar(...t){let e=Bm;for(const n of t)e=e.insert(n.key,n);return e}function $m(t){let e=Bm;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Ft(){return Fr()}function jm(){return Fr()}function Fr(){return new Pn(t=>t.toString(),(t,e)=>t.isEqual(e))}const eS=new Ne(O.comparator),tS=new me(O.comparator);function ne(...t){let e=tS;for(const n of t)e=e.add(n);return e}const nS=new me(J);function qm(){return nS}/**
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
 */class ka{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,xi.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new ka(H.min(),r,qm(),lt(),ne())}}class xi{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new xi(s,n,ne(),ne(),ne())}}/**
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
 */class lo{constructor(e,n,s,r){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Km{constructor(e,n){this.targetId=e,this.Et=n}}class Hm{constructor(e,n,s=qe.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Id{constructor(){this.At=0,this.Rt=Ed(),this.bt=qe.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=ne(),n=ne(),s=ne();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:U()}}),new xi(this.bt,this.Pt,e,n,s)}xt(){this.vt=!1,this.Rt=Ed()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class sS{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=lt(),this.qt=bd(),this.Ut=new me(J)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const s=this.Wt(n);switch(e.state){case 0:this.zt(n)&&s.Dt(e.resumeToken);break;case 1:s.Mt(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.Mt(),s.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(s.Ft(),s.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.zt(r)&&n(r)})}Jt(e){const n=e.targetId,s=e.Et.count,r=this.Yt(n);if(r){const i=r.target;if(Lo(i))if(s===0){const o=new O(i.path);this.Qt(n,o,Ce.newNoDocument(o,H.min()))}else j(s===1);else this.Xt(n)!==s&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Lo(a.target)){const c=new O(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,Ce.newNoDocument(c,e))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=ne();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new ka(e,n,this.Ut,this.Lt,s);return this.Lt=lt(),this.qt=bd(),this.Ut=new me(J),r}Gt(e,n){if(!this.zt(e))return;const s=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.zt(e))return;const r=this.Wt(e);this.te(e,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new Id,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new me(J),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||S("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new Id),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function bd(){return new Ne(O.comparator)}function Ed(){return new Ne(O.comparator)}/**
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
 */const rS=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),iS=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),oS=(()=>({and:"AND",or:"OR"}))();class aS{constructor(e,n){this.databaseId=e,this.wt=n}}function er(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zm(t,e){return t.wt?e.toBase64():e.toUint8Array()}function cS(t,e){return er(t,e.toTimestamp())}function Ze(t){return j(!!t),H.fromTimestamp(function(e){const n=An(e);return new _e(n.seconds,n.nanos)}(t))}function fl(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Gm(t){const e=ye.fromString(t);return j(ty(e)),e}function Uo(t,e){return fl(t.databaseId,e.path)}function ns(t,e){const n=Gm(e);if(n.get(1)!==t.databaseId.projectId)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(Qm(n))}function Yc(t,e){return fl(t.databaseId,e)}function Wm(t){const e=Gm(t);return e.length===4?ye.emptyPath():Qm(e)}function Xc(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Qm(t){return j(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Td(t,e,n){return{name:Uo(t,e),fields:n.value.mapValue.fields}}function uS(t,e,n){const s=ns(t,e.name),r=Ze(e.updateTime),i=e.createTime?Ze(e.createTime):H.min(),o=new ze({mapValue:{fields:e.fields}}),a=Ce.newFoundDocument(s,r,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function lS(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.wt?(j(u===void 0||typeof u=="string"),qe.fromBase64String(u||"")):(j(u===void 0||u instanceof Uint8Array),qe.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?T.UNKNOWN:Vm(c.code);return new B(u,c.message||"")}(o);n=new Hm(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ns(t,s.document.name),i=Ze(s.document.updateTime),o=s.document.createTime?Ze(s.document.createTime):H.min(),a=new ze({mapValue:{fields:s.document.fields}}),c=Ce.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new lo(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ns(t,s.document),i=s.readTime?Ze(s.readTime):H.min(),o=Ce.newNoDocument(r,i),a=s.removedTargetIds||[];n=new lo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ns(t,s.document),i=s.removedTargetIds||[];n=new lo([],i,r,null)}else{if(!("filter"in e))return U();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new X_(r),o=s.targetId;n=new Km(o,i)}}return n}function Vo(t,e){let n;if(e instanceof hr)n={update:Td(t,e.key,e.value)};else if(e instanceof dl)n={delete:Uo(t,e.key)};else if(e instanceof rn)n={update:Td(t,e.key,e.data),updateMask:mS(e.fieldMask)};else{if(!(e instanceof Um))return U();n={verify:Uo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof oi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Js)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Zs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ai)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw U()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:cS(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:U()}(t,e.precondition)),n}function Jc(t,e){const n=e.currentDocument?function(r){return r.updateTime!==void 0?at.updateTime(Ze(r.updateTime)):r.exists!==void 0?at.exists(r.exists):at.none()}(e.currentDocument):at.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)j(o.setToServerValue==="REQUEST_TIME"),a=new oi;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Js(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Zs(u)}else"increment"in o?a=new ai(i,o.increment):U();const c=Re.fromServerFormat(o.fieldPath);return new z_(c,a)}(t,r)):[];if(e.update){e.update.name;const r=ns(t,e.update.name),i=new ze({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new ot(c.map(u=>Re.fromServerFormat(u)))}(e.updateMask);return new rn(r,i,o,n,s)}return new hr(r,i,n,s)}if(e.delete){const r=ns(t,e.delete);return new dl(r,n)}if(e.verify){const r=ns(t,e.verify);return new Um(r,n)}return U()}function hS(t,e){return t&&t.length>0?(j(e!==void 0),t.map(n=>function(s,r){let i=s.updateTime?Ze(s.updateTime):Ze(r);return i.isEqual(H.min())&&(i=Ze(r)),new W_(i,s.transformResults||[])}(n,e))):[]}function Ym(t,e){return{documents:[Yc(t,e.path)]}}function Xm(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Yc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Yc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return ey(ge.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:As(l.field),direction:fS(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.wt||_a(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Jm(t){let e=Wm(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){j(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const h=Zm(l);return h instanceof ge&&ll(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(h){return new Mr(xs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;n.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,_a(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ys(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ys(d,h)}(n.endAt)),F_(e,r,o,i,a,"F",c,u)}function dS(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zm(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xs(e.unaryFilter.field);return ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=xs(e.unaryFilter.field);return ie.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=xs(e.unaryFilter.field);return ie.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=xs(e.unaryFilter.field);return ie.create(i,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return ie.create(xs(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ge.create(e.compositeFilter.filters.map(n=>Zm(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function fS(t){return rS[t]}function pS(t){return iS[t]}function gS(t){return oS[t]}function As(t){return{fieldPath:t.canonicalString()}}function xs(t){return Re.fromServerFormat(t.fieldPath)}function ey(t){return t instanceof ie?function(e){if(e.op==="=="){if(ad(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NAN"}};if(od(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ad(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NAN"}};if(od(e.value))return{unaryFilter:{field:As(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(e.field),op:pS(e.op),value:e.value}}}(t):t instanceof ge?function(e){const n=e.getFilters().map(s=>ey(s));return n.length===1?n[0]:{compositeFilter:{op:gS(e.op),filters:n}}}(t):U()}function mS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ty(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */function et(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=_d(e)),e=yS(t.get(n),e);return _d(e)}function yS(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function _d(t){return t+""}function Ut(t){const e=t.length;if(j(e>=2),e===2)return j(t.charAt(0)===""&&t.charAt(1)===""),ye.emptyPath();const n=e-2,s=[];let r="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&U(),t.charAt(o+1)){case"":const a=t.substring(i,o);let c;r.length===0?c=a:(r+=a,c=r,r=""),s.push(c);break;case"":r+=t.substring(i,o),r+="\0";break;case"":r+=t.substring(i,o+1);break;default:U()}i=o+2}return new ye(s)}/**
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
 */const Sd=["userId","batchId"];/**
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
 */function ho(t,e){return[t,et(e)]}function ny(t,e,n){return[t,et(e),n]}const vS={},wS=["prefixPath","collectionGroup","readTime","documentId"],IS=["prefixPath","collectionGroup","documentId"],bS=["collectionGroup","readTime","prefixPath","documentId"],ES=["canonicalId","targetId"],TS=["targetId","path"],_S=["path","targetId"],SS=["collectionId","parent"],CS=["indexId","uid"],AS=["uid","sequenceNumber"],xS=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],DS=["indexId","uid","orderedDocumentKey"],kS=["userId","collectionPath","documentId"],RS=["userId","collectionPath","largestBatchId"],NS=["userId","collectionGroup","largestBatchId"],sy=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],OS=[...sy,"documentOverlays"],ry=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],iy=ry,PS=[...iy,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Zc extends gm{constructor(e,n){super(),this.se=e,this.currentSequenceNumber=n}}function Fe(t,e){const n=X(t);return Xt.M(n.se,e)}/**
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
 */class pl{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Q_(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Lr(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Lr(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=jm();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Lm(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(H.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Ws(this.mutations,e.mutations,(n,s)=>yd(n,s))&&Ws(this.baseMutations,e.baseMutations,(n,s)=>yd(n,s))}}class gl{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){j(e.mutations.length===s.length);let r=eS;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new gl(e,n,s,r)}}/**
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
 */class ml{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Sn{constructor(e,n,s,r,i=H.min(),o=H.min(),a=qe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Sn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Sn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class oy{constructor(e){this.ie=e}}function MS(t,e){let n;if(e.document)n=uS(t.ie,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=O.fromSegments(e.noDocument.path),r=fs(e.noDocument.readTime);n=Ce.newNoDocument(s,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const s=O.fromSegments(e.unknownDocument.path),r=fs(e.unknownDocument.version);n=Ce.newUnknownDocument(s,r)}}return e.readTime&&n.setReadTime(function(s){const r=new _e(s[0],s[1]);return H.fromTimestamp(r)}(e.readTime)),n}function Cd(t,e){const n=e.key,s={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Bo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:Uo(r,i.key),fields:i.data.value.mapValue.fields,updateTime:er(r,i.version.toTimestamp()),createTime:er(r,i.createTime.toTimestamp())}}(t.ie,e);else if(e.isNoDocument())s.noDocument={path:n.path.toArray(),readTime:ds(e.version)};else{if(!e.isUnknownDocument())return U();s.unknownDocument={path:n.path.toArray(),version:ds(e.version)}}return s}function Bo(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ds(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function fs(t){const e=new _e(t.seconds,t.nanoseconds);return H.fromTimestamp(e)}function zn(t,e){const n=(e.baseMutations||[]).map(i=>Jc(t.ie,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>Jc(t.ie,i)),r=_e.fromMillis(e.localWriteTimeMs);return new pl(e.batchId,r,n,s)}function xr(t){const e=fs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?fs(t.lastLimboFreeSnapshotVersion):H.min();let s;var r;return t.query.documents!==void 0?(j((r=t.query).documents.length===1),s=Ct(Ca(Wm(r.documents[0])))):s=function(i){return Ct(Jm(i))}(t.query),new Sn(s,t.targetId,0,t.lastListenSequenceNumber,e,n,qe.fromBase64String(t.resumeToken))}function ay(t,e){const n=ds(e.snapshotVersion),s=ds(e.lastLimboFreeSnapshotVersion);let r;r=Lo(e.target)?Ym(t.ie,e.target):Xm(t.ie,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:hs(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function cy(t){const e=Jm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wc(e,e.limit,"L"):e}function oc(t,e){return new ml(e.largestBatchId,Jc(t.ie,e.overlayMutation))}function Ad(t,e){const n=e.path.lastSegment();return[t,et(e.path.popLast()),n]}function xd(t,e,n,s){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:ds(s.readTime),documentKey:et(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class LS{getBundleMetadata(e,n){return Dd(e).get(n).next(s=>{if(s)return{id:(r=s).bundleId,createTime:fs(r.createTime),version:r.version};var r})}saveBundleMetadata(e,n){return Dd(e).put({bundleId:(s=n).id,createTime:ds(Ze(s.createTime)),version:s.version});var s}getNamedQuery(e,n){return kd(e).get(n).next(s=>{if(s)return{name:(r=s).name,query:cy(r.bundledQuery),readTime:fs(r.readTime)};var r})}saveNamedQuery(e,n){return kd(e).put(function(s){return{name:s.name,readTime:ds(Ze(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function Dd(t){return Fe(t,"bundles")}function kd(t){return Fe(t,"namedQueries")}/**
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
 */class Ra{constructor(e,n){this.yt=e,this.userId=n}static re(e,n){const s=n.uid||"";return new Ra(e,s)}getOverlay(e,n){return yr(e).get(Ad(this.userId,n)).next(s=>s?oc(this.yt,s):null)}getOverlays(e,n){const s=Ft();return m.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){const r=[];return s.forEach((i,o)=>{const a=new ml(n,o);r.push(this.oe(e,a))}),m.waitFor(r)}removeOverlaysForBatchId(e,n,s){const r=new Set;n.forEach(o=>r.add(et(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(yr(e).Y("collectionPathOverlayIndex",a))}),m.waitFor(i)}getOverlaysForCollection(e,n,s){const r=Ft(),i=et(n),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return yr(e).W("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=oc(this.yt,c);r.set(u.getKey(),u)}return r})}getOverlaysForCollectionGroup(e,n,s,r){const i=Ft();let o;const a=IDBKeyRange.bound([this.userId,n,s],[this.userId,n,Number.POSITIVE_INFINITY],!0);return yr(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=oc(this.yt,u);i.size()<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}oe(e,n){return yr(e).put(function(s,r,i){const[o,a,c]=Ad(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Vo(s.ie,i.mutation)}}(this.yt,this.userId,n))}}function yr(t){return Fe(t,"documentOverlays")}/**
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
 */class Gn{constructor(){}ue(e,n){this.ce(e,n),n.ae()}ce(e,n){if("nullValue"in e)this.he(n,5);else if("booleanValue"in e)this.he(n,10),n.le(e.booleanValue?1:0);else if("integerValue"in e)this.he(n,15),n.le(Se(e.integerValue));else if("doubleValue"in e){const s=Se(e.doubleValue);isNaN(s)?this.he(n,13):(this.he(n,15),ni(s)?n.le(0):n.le(s))}else if("timestampValue"in e){const s=e.timestampValue;this.he(n,20),typeof s=="string"?n.fe(s):(n.fe(`${s.seconds||""}`),n.le(s.nanos||0))}else if("stringValue"in e)this.de(e.stringValue,n),this._e(n);else if("bytesValue"in e)this.he(n,30),n.we(us(e.bytesValue)),this._e(n);else if("referenceValue"in e)this.me(e.referenceValue,n);else if("geoPointValue"in e){const s=e.geoPointValue;this.he(n,45),n.le(s.latitude||0),n.le(s.longitude||0)}else"mapValue"in e?wm(e)?this.he(n,Number.MAX_SAFE_INTEGER):(this.ge(e.mapValue,n),this._e(n)):"arrayValue"in e?(this.ye(e.arrayValue,n),this._e(n)):U()}de(e,n){this.he(n,25),this.pe(e,n)}pe(e,n){n.fe(e)}ge(e,n){const s=e.fields||{};this.he(n,55);for(const r of Object.keys(s))this.de(r,n),this.ce(s[r],n)}ye(e,n){const s=e.values||[];this.he(n,50);for(const r of s)this.ce(r,n)}me(e,n){this.he(n,37),O.fromName(e).path.forEach(s=>{this.he(n,60),this.pe(s,n)})}he(e,n){e.le(n)}_e(e){e.le(2)}}Gn.Ie=new Gn;function FS(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Rd(t){const e=64-function(n){let s=0;for(let r=0;r<8;++r){const i=FS(255&n[r]);if(s+=i,i!==8)break}return s}(t);return Math.ceil(e/8)}class US{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Te(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.Ee(s.value),s=n.next();this.Ae()}Re(e){const n=e[Symbol.iterator]();let s=n.next();for(;!s.done;)this.be(s.value),s=n.next();this.Pe()}ve(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.Ee(s);else if(s<2048)this.Ee(960|s>>>6),this.Ee(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.Ee(480|s>>>12),this.Ee(128|63&s>>>6),this.Ee(128|63&s);else{const r=n.codePointAt(0);this.Ee(240|r>>>18),this.Ee(128|63&r>>>12),this.Ee(128|63&r>>>6),this.Ee(128|63&r)}}this.Ae()}Ve(e){for(const n of e){const s=n.charCodeAt(0);if(s<128)this.be(s);else if(s<2048)this.be(960|s>>>6),this.be(128|63&s);else if(n<"\uD800"||"\uDBFF"<n)this.be(480|s>>>12),this.be(128|63&s>>>6),this.be(128|63&s);else{const r=n.codePointAt(0);this.be(240|r>>>18),this.be(128|63&r>>>12),this.be(128|63&r>>>6),this.be(128|63&r)}}this.Pe()}Se(e){const n=this.De(e),s=Rd(n);this.Ce(1+s),this.buffer[this.position++]=255&s;for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=255&n[r]}xe(e){const n=this.De(e),s=Rd(n);this.Ce(1+s),this.buffer[this.position++]=~(255&s);for(let r=n.length-s;r<n.length;++r)this.buffer[this.position++]=~(255&n[r])}Ne(){this.ke(255),this.ke(255)}Oe(){this.Me(255),this.Me(255)}reset(){this.position=0}seed(e){this.Ce(e.length),this.buffer.set(e,this.position),this.position+=e.length}Fe(){return this.buffer.slice(0,this.position)}De(e){const n=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&n[0])!=0;n[0]^=s?255:128;for(let r=1;r<n.length;++r)n[r]^=s?255:0;return n}Ee(e){const n=255&e;n===0?(this.ke(0),this.ke(255)):n===255?(this.ke(255),this.ke(0)):this.ke(n)}be(e){const n=255&e;n===0?(this.Me(0),this.Me(255)):n===255?(this.Me(255),this.Me(0)):this.Me(e)}Ae(){this.ke(0),this.ke(1)}Pe(){this.Me(0),this.Me(1)}ke(e){this.Ce(1),this.buffer[this.position++]=e}Me(e){this.Ce(1),this.buffer[this.position++]=~e}Ce(e){const n=e+this.position;if(n<=this.buffer.length)return;let s=2*this.buffer.length;s<n&&(s=n);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class VS{constructor(e){this.$e=e}we(e){this.$e.Te(e)}fe(e){this.$e.ve(e)}le(e){this.$e.Se(e)}ae(){this.$e.Ne()}}class BS{constructor(e){this.$e=e}we(e){this.$e.Re(e)}fe(e){this.$e.Ve(e)}le(e){this.$e.xe(e)}ae(){this.$e.Oe()}}class vr{constructor(){this.$e=new US,this.Be=new VS(this.$e),this.Le=new BS(this.$e)}seed(e){this.$e.seed(e)}qe(e){return e===0?this.Be:this.Le}Fe(){return this.$e.Fe()}reset(){this.$e.reset()}}/**
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
 */class Wn{constructor(e,n,s,r){this.indexId=e,this.documentKey=n,this.arrayValue=s,this.directionalValue=r}Ue(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(n);return s.set(this.directionalValue,0),n!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new Wn(this.indexId,this.documentKey,this.arrayValue,s)}}function un(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Nd(t.arrayValue,e.arrayValue),n!==0?n:(n=Nd(t.directionalValue,e.directionalValue),n!==0?n:O.comparator(t.documentKey,e.documentKey)))}function Nd(t,e){for(let n=0;n<t.length&&n<e.length;++n){const s=t[n]-e[n];if(s!==0)return s}return t.length-e.length}/**
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
 */class $S{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ke=e.orderBy,this.Ge=[];for(const n of e.filters){const s=n;s.isInequality()?this.Qe=s:this.Ge.push(s)}}je(e){j(e.collectionGroup===this.collectionId);const n=jc(e);if(n!==void 0&&!this.We(n))return!1;const s=jn(e);let r=0,i=0;for(;r<s.length&&this.We(s[r]);++r);if(r===s.length)return!0;if(this.Qe!==void 0){const o=s[r];if(!this.ze(this.Qe,o)||!this.He(this.Ke[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Ke.length||!this.He(this.Ke[i++],o))return!1}return!0}We(e){for(const n of this.Ge)if(this.ze(n,e))return!0;return!1}ze(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===s}He(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function uy(t){var e,n;if(j(t instanceof ie||t instanceof ge),t instanceof ie){if(t instanceof Cm){const r=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ie.create(t.field,"==",i)))||[];return ge.create(r,"or")}return t}const s=t.filters.map(r=>uy(r));return ge.create(s,t.op)}function jS(t){if(t.getFilters().length===0)return[];const e=nu(uy(t));return j(ly(e)),eu(e)||tu(e)?[e]:e.getFilters()}function eu(t){return t instanceof ie}function tu(t){return t instanceof ge&&ll(t)}function ly(t){return eu(t)||tu(t)||function(e){if(e instanceof ge&&Hc(e)){for(const n of e.getFilters())if(!eu(n)&&!tu(n))return!1;return!0}return!1}(t)}function nu(t){if(j(t instanceof ie||t instanceof ge),t instanceof ie)return t;if(t.filters.length===1)return nu(t.filters[0]);const e=t.filters.map(s=>nu(s));let n=ge.create(e,t.op);return n=$o(n),ly(n)?n:(j(n instanceof ge),j(Xs(n)),j(n.filters.length>1),n.filters.reduce((s,r)=>yl(s,r)))}function yl(t,e){let n;return j(t instanceof ie||t instanceof ge),j(e instanceof ie||e instanceof ge),n=t instanceof ie?e instanceof ie?function(s,r){return ge.create([s,r],"and")}(t,e):Od(t,e):e instanceof ie?Od(e,t):function(s,r){if(j(s.filters.length>0&&r.filters.length>0),Xs(s)&&Xs(r))return Tm(s,r.getFilters());const i=Hc(s)?s:r,o=Hc(s)?r:s,a=i.filters.map(c=>yl(c,o));return ge.create(a,"or")}(t,e),$o(n)}function Od(t,e){if(Xs(e))return Tm(e,t.getFilters());{const n=e.filters.map(s=>yl(t,s));return ge.create(n,"or")}}function $o(t){if(j(t instanceof ie||t instanceof ge),t instanceof ie)return t;const e=t.getFilters();if(e.length===1)return $o(e[0]);if(bm(t))return t;const n=e.map(r=>$o(r)),s=[];return n.forEach(r=>{r instanceof ie?s.push(r):r instanceof ge&&(r.op===t.op?s.push(...r.filters):s.push(r))}),s.length===1?s[0]:ge.create(s,t.op)}/**
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
 */class qS{constructor(){this.Je=new vl}addToCollectionParentIndex(e,n){return this.Je.add(n),m.resolve()}getCollectionParents(e,n){return m.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return m.resolve()}deleteFieldIndex(e,n){return m.resolve()}getDocumentsMatchingTarget(e,n){return m.resolve(null)}getIndexType(e,n){return m.resolve(0)}getFieldIndexes(e,n){return m.resolve([])}getNextCollectionGroupToUpdate(e){return m.resolve(null)}getMinOffset(e,n){return m.resolve(pt.min())}getMinOffsetFromCollectionGroup(e,n){return m.resolve(pt.min())}updateCollectionGroup(e,n,s){return m.resolve()}updateIndexEntries(e,n){return m.resolve()}}class vl{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new me(ye.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new me(ye.comparator)).toArray()}}/**
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
 */const zi=new Uint8Array(0);class KS{constructor(e,n){this.user=e,this.databaseId=n,this.Ye=new vl,this.Xe=new Pn(s=>hs(s),(s,r)=>Ai(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.Ye.has(n)){const s=n.lastSegment(),r=n.popLast();e.addOnCommittedListener(()=>{this.Ye.add(n)});const i={collectionId:s,parent:et(r)};return Pd(e).put(i)}return m.resolve()}getCollectionParents(e,n){const s=[],r=IDBKeyRange.bound([n,""],[hm(n),""],!1,!0);return Pd(e).W(r).next(i=>{for(const o of i){if(o.collectionId!==n)break;s.push(Ut(o.parent))}return s})}addFieldIndex(e,n){const s=Gi(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(n);delete r.indexId;const i=s.add(r);if(n.indexState){const o=Ir(e);return i.next(a=>{o.put(xd(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const s=Gi(e),r=Ir(e),i=wr(e);return s.delete(n.indexId).next(()=>r.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const s=wr(e);let r=!0;const i=new Map;return m.forEach(this.Ze(n),o=>this.tn(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=ne();const a=[];return m.forEach(i,(c,u)=>{var l;S("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(k=>`${k.fieldPath}:${k.kind}`).join(",")}`} to execute ${hs(n)}`);const h=function(k,z){const ee=jc(z);if(ee===void 0)return null;for(const te of Fo(k,ee.fieldPath))switch(te.op){case"array-contains-any":return te.value.arrayValue.values||[];case"array-contains":return[te.value]}return null}(u,c),d=function(k,z){const ee=new Map;for(const te of jn(z))for(const de of Fo(k,te.fieldPath))switch(de.op){case"==":case"in":ee.set(te.fieldPath.canonicalString(),de.value);break;case"not-in":case"!=":return ee.set(te.fieldPath.canonicalString(),de.value),Array.from(ee.values())}return null}(u,c),g=function(k,z){const ee=[];let te=!0;for(const de of jn(z)){const Ue=de.kind===0?fd(k,de.fieldPath,k.startAt):pd(k,de.fieldPath,k.startAt);ee.push(Ue.value),te&&(te=Ue.inclusive)}return new Ys(ee,te)}(u,c),y=function(k,z){const ee=[];let te=!0;for(const de of jn(z)){const Ue=de.kind===0?pd(k,de.fieldPath,k.endAt):fd(k,de.fieldPath,k.endAt);ee.push(Ue.value),te&&(te=Ue.inclusive)}return new Ys(ee,te)}(u,c),I=this.en(c,u,g),x=this.en(c,u,y),C=this.nn(c,u,d),L=this.sn(c.indexId,h,I,g.inclusive,x,y.inclusive,C);return m.forEach(L,k=>s.J(k,n.limit).next(z=>{z.forEach(ee=>{const te=O.fromSegments(ee.documentKey);o.has(te)||(o=o.add(te),a.push(te))})}))}).next(()=>a)}return m.resolve(null)})}Ze(e){let n=this.Xe.get(e);return n||(e.filters.length===0?n=[e]:n=jS(ge.create(e.filters,"and")).map(s=>Gc(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.Xe.set(e,n),n)}sn(e,n,s,r,i,o,a){const c=(n!=null?n.length:1)*Math.max(s.length,i.length),u=c/(n!=null?n.length:1),l=[];for(let h=0;h<c;++h){const d=n?this.rn(n[h/u]):zi,g=this.on(e,d,s[h%u],r),y=this.un(e,d,i[h%u],o),I=a.map(x=>this.on(e,d,x,!0));l.push(...this.createRange(g,y,I))}return l}on(e,n,s,r){const i=new Wn(e,O.empty(),n,s);return r?i:i.Ue()}un(e,n,s,r){const i=new Wn(e,O.empty(),n,s);return r?i.Ue():i}tn(e,n){const s=new $S(n),r=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.je(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let s=2;const r=this.Ze(n);return m.forEach(r,i=>this.tn(e,i).next(o=>{o?s!==0&&o.fields.length<function(a){let c=new me(Re.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(i)&&(s=1):s=0})).next(()=>function(i){return i.limit!==null}(n)&&r.length>1&&s===2?1:s)}cn(e,n){const s=new vr;for(const r of jn(e)){const i=n.data.field(r.fieldPath);if(i==null)return null;const o=s.qe(r.kind);Gn.Ie.ue(i,o)}return s.Fe()}rn(e){const n=new vr;return Gn.Ie.ue(e,n.qe(0)),n.Fe()}an(e,n){const s=new vr;return Gn.Ie.ue(ul(this.databaseId,n),s.qe(function(r){const i=jn(r);return i.length===0?0:i[i.length-1].kind}(e))),s.Fe()}nn(e,n,s){if(s===null)return[];let r=[];r.push(new vr);let i=0;for(const o of jn(e)){const a=s[i++];for(const c of r)if(this.hn(n,o.fieldPath)&&ii(a))r=this.ln(r,o,a);else{const u=c.qe(o.kind);Gn.Ie.ue(a,u)}}return this.fn(r)}en(e,n,s){return this.nn(e,n,s.position)}fn(e){const n=[];for(let s=0;s<e.length;++s)n[s]=e[s].Fe();return n}ln(e,n,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const c=new vr;c.seed(a.Fe()),Gn.Ie.ue(o,c.qe(n.kind)),i.push(c)}return i}hn(e,n){return!!e.filters.find(s=>s instanceof ie&&s.field.isEqual(n)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,n){const s=Gi(e),r=Ir(e);return(n?s.W("collectionGroupIndex",IDBKeyRange.bound(n,n)):s.W()).next(i=>{const o=[];return m.forEach(i,a=>r.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Mo(l.sequenceNumber,new pt(fs(l.readTime),new O(Ut(l.documentKey)),l.largestBatchId)):Mo.empty(),d=u.fields.map(([g,y])=>new v_(Re.fromServerFormat(g),y));return new dm(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:J(s.collectionGroup,r.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,s){const r=Gi(e),i=Ir(e);return this.dn(e).next(o=>r.W("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>m.forEach(a,c=>i.put(xd(c.indexId,this.user,o,s)))))}updateIndexEntries(e,n){const s=new Map;return m.forEach(n,(r,i)=>{const o=s.get(r.collectionGroup);return(o?m.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),m.forEach(a,c=>this._n(e,r,c).next(u=>{const l=this.wn(i,c);return u.isEqual(l)?m.resolve():this.mn(e,i,c,u,l)}))))})}gn(e,n,s,r){return wr(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.an(s,n.key),documentKey:n.key.path.toArray()})}yn(e,n,s,r){return wr(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.an(s,n.key),n.key.path.toArray()])}_n(e,n,s){const r=wr(e);let i=new me(un);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.an(s,n)])},(o,a)=>{i=i.add(new Wn(s.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}wn(e,n){let s=new me(un);const r=this.cn(n,e);if(r==null)return s;const i=jc(n);if(i!=null){const o=e.data.field(i.fieldPath);if(ii(o))for(const a of o.arrayValue.values||[])s=s.add(new Wn(n.indexId,e.key,this.rn(a),r))}else s=s.add(new Wn(n.indexId,e.key,zi,r));return s}mn(e,n,s,r,i){S("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),g=c.getIterator();let y=Es(d),I=Es(g);for(;y||I;){let x=!1,C=!1;if(y&&I){const L=u(y,I);L<0?C=!0:L>0&&(x=!0)}else y!=null?C=!0:x=!0;x?(l(I),I=Es(g)):C?(h(y),y=Es(d)):(y=Es(d),I=Es(g))}}(r,i,un,a=>{o.push(this.gn(e,n,s,a))},a=>{o.push(this.yn(e,n,s,a))}),m.waitFor(o)}dn(e){let n=1;return Ir(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),n=r.sequenceNumber+1}).next(()=>n)}createRange(e,n,s){s=s.sort((o,a)=>un(o,a)).filter((o,a,c)=>!a||un(o,c[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=un(o,e),c=un(o,n);if(a===0)r[0]=e.Ue();else if(a>0&&c<0)r.push(o),r.push(o.Ue());else if(c>0)break}r.push(n);const i=[];for(let o=0;o<r.length;o+=2){if(this.pn(r[o],r[o+1]))return[];const a=[r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,zi,[]],c=[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,zi,[]];i.push(IDBKeyRange.bound(a,c))}return i}pn(e,n){return un(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(Md)}getMinOffset(e,n){return m.mapArray(this.Ze(n),s=>this.tn(e,s).next(r=>r||U())).next(Md)}}function Pd(t){return Fe(t,"collectionParents")}function wr(t){return Fe(t,"indexEntries")}function Gi(t){return Fe(t,"indexConfiguration")}function Ir(t){return Fe(t,"indexState")}function Md(t){j(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let s=1;s<t.length;s++){const r=t[s].indexState.offset;al(r,e)<0&&(e=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new pt(e.readTime,e.documentKey,n)}/**
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
 */const Ld={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class rt{constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function hy(t,e,n){const s=t.store("mutations"),r=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=s.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{j(a===1)}));const u=[];for(const l of n.mutations){const h=ny(e,l.key.path,n.batchId);i.push(r.delete(h)),u.push(l.key)}return m.waitFor(i).next(()=>u)}function jo(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw U();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(41943040,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);class Na{constructor(e,n,s,r){this.userId=e,this.yt=n,this.indexManager=s,this.referenceDelegate=r,this.In={}}static re(e,n,s,r){j(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Na(i,n,s,r)}checkEmpty(e){let n=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ln(e).Z({index:"userMutationsIndex",range:s},(r,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,s,r){const i=Ds(e),o=ln(e);return o.add({}).next(a=>{j(typeof a=="number");const c=new pl(a,n,s,r),u=function(d,g,y){const I=y.baseMutations.map(C=>Vo(d.ie,C)),x=y.mutations.map(C=>Vo(d.ie,C));return{userId:g,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:I,mutations:x}}(this.yt,this.userId,c),l=[];let h=new me((d,g)=>J(d.canonicalString(),g.canonicalString()));for(const d of r){const g=ny(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(g,vS))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.In[a]=c.keys()}),m.waitFor(l).next(()=>c)})}lookupMutationBatch(e,n){return ln(e).get(n).next(s=>s?(j(s.userId===this.userId),zn(this.yt,s)):null)}Tn(e,n){return this.In[n]?m.resolve(this.In[n]):this.lookupMutationBatch(e,n).next(s=>{if(s){const r=s.keys();return this.In[n]=r,r}return null})}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return ln(e).Z({index:"userMutationsIndex",range:r},(o,a,c)=>{a.userId===this.userId&&(j(a.batchId>=s),i=zn(this.yt,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return ln(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ln(e).W("userMutationsIndex",n).next(s=>s.map(r=>zn(this.yt,r)))}getAllMutationBatchesAffectingDocumentKey(e,n){const s=ho(this.userId,n.path),r=IDBKeyRange.lowerBound(s),i=[];return Ds(e).Z({range:r},(o,a,c)=>{const[u,l,h]=o,d=Ut(l);if(u===this.userId&&n.path.isEqual(d))return ln(e).get(h).next(g=>{if(!g)throw U();j(g.userId===this.userId),i.push(zn(this.yt,g))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new me(J);const r=[];return n.forEach(i=>{const o=ho(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Ds(e).Z({range:a},(u,l,h)=>{const[d,g,y]=u,I=Ut(g);d===this.userId&&i.path.isEqual(I)?s=s.add(y):h.done()});r.push(c)}),m.waitFor(r).next(()=>this.En(e,s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1,i=ho(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new me(J);return Ds(e).Z({range:o},(c,u,l)=>{const[h,d,g]=c,y=Ut(d);h===this.userId&&s.isPrefixOf(y)?y.length===r&&(a=a.add(g)):l.done()}).next(()=>this.En(e,a))}En(e,n){const s=[],r=[];return n.forEach(i=>{r.push(ln(e).get(i).next(o=>{if(o===null)throw U();j(o.userId===this.userId),s.push(zn(this.yt,o))}))}),m.waitFor(r).next(()=>s)}removeMutationBatch(e,n){return hy(e.se,this.userId,n).next(s=>(e.addOnCommittedListener(()=>{this.An(n.batchId)}),m.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return m.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return Ds(e).Z({range:s},(i,o,a)=>{if(i[0]===this.userId){const c=Ut(i[1]);r.push(c)}else a.done()}).next(()=>{j(r.length===0)})})}containsKey(e,n){return dy(e,this.userId,n)}Rn(e){return fy(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function dy(t,e,n){const s=ho(e,n.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Ds(t).Z({range:i,X:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===r&&(o=!0),u.done()}).next(()=>o)}function ln(t){return Fe(t,"mutations")}function Ds(t){return Fe(t,"documentMutations")}function fy(t){return Fe(t,"mutationQueues")}/**
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
 */class ps{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new ps(0)}static vn(){return new ps(-1)}}/**
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
 */class HS{constructor(e,n){this.referenceDelegate=e,this.yt=n}allocateTargetId(e){return this.Vn(e).next(n=>{const s=new ps(n.highestTargetId);return n.highestTargetId=s.next(),this.Sn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Vn(e).next(n=>H.fromTimestamp(new _e(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Vn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,s){return this.Vn(e).next(r=>(r.highestListenSequenceNumber=n,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),n>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=n),this.Sn(e,r)))}addTargetData(e,n){return this.Dn(e,n).next(()=>this.Vn(e).next(s=>(s.targetCount+=1,this.Cn(n,s),this.Sn(e,s))))}updateTargetData(e,n){return this.Dn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Ts(e).delete(n.targetId)).next(()=>this.Vn(e)).next(s=>(j(s.targetCount>0),s.targetCount-=1,this.Sn(e,s)))}removeTargets(e,n,s){let r=0;const i=[];return Ts(e).Z((o,a)=>{const c=xr(a);c.sequenceNumber<=n&&s.get(c.targetId)===null&&(r++,i.push(this.removeTargetData(e,c)))}).next(()=>m.waitFor(i)).next(()=>r)}forEachTarget(e,n){return Ts(e).Z((s,r)=>{const i=xr(r);n(i)})}Vn(e){return Fd(e).get("targetGlobalKey").next(n=>(j(n!==null),n))}Sn(e,n){return Fd(e).put("targetGlobalKey",n)}Dn(e,n){return Ts(e).put(ay(this.yt,n))}Cn(e,n){let s=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,s=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Vn(e).next(n=>n.targetCount)}getTargetData(e,n){const s=hs(n),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return Ts(e).Z({range:r,index:"queryTargetsIndex"},(o,a,c)=>{const u=xr(a);Ai(n,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,n,s){const r=[],i=vn(e);return n.forEach(o=>{const a=et(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),m.waitFor(r)}removeMatchingKeys(e,n,s){const r=vn(e);return m.forEach(n,i=>{const o=et(i.path);return m.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,n){const s=vn(e),r=IDBKeyRange.bound([n],[n+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,n){const s=IDBKeyRange.bound([n],[n+1],!1,!0),r=vn(e);let i=ne();return r.Z({range:s,X:!0},(o,a,c)=>{const u=Ut(o[1]),l=new O(u);i=i.add(l)}).next(()=>i)}containsKey(e,n){const s=et(n.path),r=IDBKeyRange.bound([s],[hm(s)],!1,!0);let i=0;return vn(e).Z({index:"documentTargetsIndex",X:!0,range:r},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ne(e,n){return Ts(e).get(n).next(s=>s?xr(s):null)}}function Ts(t){return Fe(t,"targets")}function Fd(t){return Fe(t,"targetGlobal")}function vn(t){return Fe(t,"targetDocuments")}/**
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
 */function Ud([t,e],[n,s]){const r=J(t,n);return r===0?J(e,s):r}class zS{constructor(e){this.xn=e,this.buffer=new me(Ud),this.Nn=0}kn(){return++this.Nn}On(e){const n=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Ud(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class GS{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Mn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return this.Mn!==null}Fn(e){S("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){On(n)?S("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ms(n)}await this.Fn(3e5)})}}class WS{constructor(e,n){this.$n=e,this.params=n}calculateTargetCount(e,n){return this.$n.Bn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return m.resolve(vt.at);const s=new zS(n);return this.$n.forEachTarget(e,r=>s.On(r.sequenceNumber)).next(()=>this.$n.Ln(e,r=>s.On(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.$n.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.$n.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(S("LruGarbageCollector","Garbage collection skipped; disabled"),m.resolve(Ld)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(S("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ld):this.qn(e,n))}getCacheSize(e){return this.$n.getCacheSize(e)}qn(e,n){let s,r,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(S("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,n))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(u=Date.now(),$c()<=ue.DEBUG&&S("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),m.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}/**
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
 */class QS{constructor(e,n){this.db=e,this.garbageCollector=function(s,r){return new WS(s,r)}(this,n)}Bn(e){const n=this.Un(e);return this.db.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}Un(e){let n=0;return this.Ln(e,s=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Ln(e,n){return this.Kn(e,(s,r)=>n(r))}addReference(e,n,s){return Wi(e,s)}removeReference(e,n,s){return Wi(e,s)}removeTargets(e,n,s){return this.db.getTargetCache().removeTargets(e,n,s)}markPotentiallyOrphaned(e,n){return Wi(e,n)}Gn(e,n){return function(s,r){let i=!1;return fy(s).tt(o=>dy(s,o,r).next(a=>(a&&(i=!0),m.resolve(!a)))).next(()=>i)}(e,n)}removeOrphanedDocuments(e,n){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,(o,a)=>{if(a<=n){const c=this.Gn(e,o).next(u=>{if(!u)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,H.min()),vn(e).delete([0,et(o.path)])))});r.push(c)}}).next(()=>m.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,n){return Wi(e,n)}Kn(e,n){const s=vn(e);let r,i=vt.at;return s.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==vt.at&&n(new O(Ut(r)),i),i=u,r=c):i=vt.at}).next(()=>{i!==vt.at&&n(new O(Ut(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Wi(t,e){return vn(t).put(function(n,s){return{targetId:0,path:et(n.path),sequenceNumber:s}}(e,t.currentSequenceNumber))}/**
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
 */class py{constructor(){this.changes=new Pn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?m.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class YS{constructor(e){this.yt=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,s){return Vn(e).put(s)}removeEntry(e,n,s){return Vn(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Bo(i),o[o.length-1]]}(n,s))}updateMetadata(e,n){return this.getMetadata(e).next(s=>(s.byteSize+=n,this.Qn(e,s)))}getEntry(e,n){let s=Ce.newInvalidDocument(n);return Vn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(br(n))},(r,i)=>{s=this.jn(n,i)}).next(()=>s)}Wn(e,n){let s={size:0,document:Ce.newInvalidDocument(n)};return Vn(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(br(n))},(r,i)=>{s={document:this.jn(n,i),size:jo(i)}}).next(()=>s)}getEntries(e,n){let s=lt();return this.zn(e,n,(r,i)=>{const o=this.jn(r,i);s=s.insert(r,o)}).next(()=>s)}Hn(e,n){let s=lt(),r=new Ne(O.comparator);return this.zn(e,n,(i,o)=>{const a=this.jn(i,o);s=s.insert(i,a),r=r.insert(i,jo(o))}).next(()=>({documents:s,Jn:r}))}zn(e,n,s){if(n.isEmpty())return m.resolve();let r=new me($d);n.forEach(c=>r=r.add(c));const i=IDBKeyRange.bound(br(r.first()),br(r.last())),o=r.getIterator();let a=o.getNext();return Vn(e).Z({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&$d(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,u),a=o.hasNext()?o.getNext():null),a?l.j(br(a)):l.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,n,s){const r=[n.popLast().toArray(),n.lastSegment(),Bo(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],i=[n.popLast().toArray(),n.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Vn(e).W(IDBKeyRange.bound(r,i,!0)).next(o=>{let a=lt();for(const c of o){const u=this.jn(O.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,n,s,r){let i=lt();const o=Bd(n,s),a=Bd(n,pt.max());return Vn(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.jn(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===r&&l.done()}).next(()=>i)}newChangeBuffer(e){return new XS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Vd(e).get("remoteDocumentGlobalKey").next(n=>(j(!!n),n))}Qn(e,n){return Vd(e).put("remoteDocumentGlobalKey",n)}jn(e,n){if(n){const s=MS(this.yt,n);if(!(s.isNoDocument()&&s.version.isEqual(H.min())))return s}return Ce.newInvalidDocument(e)}}function gy(t){return new YS(t)}class XS extends py{constructor(e,n){super(),this.Yn=e,this.trackRemovals=n,this.Xn=new Pn(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const n=[];let s=0,r=new me((i,o)=>J(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Xn.get(i);if(n.push(this.Yn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Cd(this.Yn.yt,o);r=r.add(i.path.popLast());const u=jo(c);s+=u-a.size,n.push(this.Yn.addEntry(e,i,c))}else if(s-=a.size,this.trackRemovals){const c=Cd(this.Yn.yt,o.convertToNoDocument(H.min()));n.push(this.Yn.addEntry(e,i,c))}}),r.forEach(i=>{n.push(this.Yn.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.Yn.updateMetadata(e,s)),m.waitFor(n)}getFromCache(e,n){return this.Yn.Wn(e,n).next(s=>(this.Xn.set(n,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,n){return this.Yn.Hn(e,n).next(({documents:s,Jn:r})=>(r.forEach((i,o)=>{this.Xn.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function Vd(t){return Fe(t,"remoteDocumentGlobal")}function Vn(t){return Fe(t,"remoteDocumentsV14")}function br(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Bd(t,e){const n=e.documentKey.path.toArray();return[t,Bo(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function $d(t,e){const n=t.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<n.length-2&&i<s.length-2;++i)if(r=J(n[i],s[i]),r)return r;return r=J(n.length,s.length),r||(r=J(n[n.length-2],s[s.length-2]),r||J(n[n.length-1],s[s.length-1]))}/**
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
 */class JS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class my{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Lr(s.mutation,r,ot.empty(),_e.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ne()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ne()){const r=Ft();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ar();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Ft();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ne()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=lt();const o=Fr(),a=Fr();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof rn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Lr(l.mutation,u,l.mutation.getFieldMask(),_e.now())):o.set(u.key,ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new JS(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Fr();let r=new Ne((o,a)=>o-a),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||ot.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||ne()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=jm();l.forEach(d=>{if(!i.has(d)){const g=Lm(n.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return m.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):B_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):m.resolve(Ft());let a=-1,c=i;return o.next(u=>m.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?m.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,ne())).next(l=>({batchId:a,changes:$m(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(s=>{let r=Ar();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=Ar();return this.indexManager.getCollectionParents(e,r).next(o=>m.forEach(o,a=>{const c=function(u,l){return new Sa(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.remoteDocumentCache.getAllFromCollection(e,n.path,s).next(i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId))).next(i=>{i.forEach((a,c)=>{const u=c.getKey();r.get(u)===null&&(r=r.insert(u,Ce.newInvalidDocument(u)))});let o=Ar();return r.forEach((a,c)=>{const u=i.get(a);u!==void 0&&Lr(u.mutation,c,ot.empty(),_e.now()),hl(n,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class ZS{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return m.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ze(s.createTime)}),m.resolve()}getNamedQuery(e,n){return m.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(s){return{name:s.name,query:cy(s.bundledQuery),readTime:Ze(s.readTime)}}(n)),m.resolve()}}/**
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
 */class eC{constructor(){this.overlays=new Ne(O.comparator),this.es=new Map}getOverlay(e,n){return m.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ft();return m.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.oe(e,n,i)}),m.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.es.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.es.delete(s)),m.resolve()}getOverlaysForCollection(e,n,s){const r=Ft(),i=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return m.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Ne((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Ft(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ft(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return m.resolve(a)}oe(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.es.get(r.largestBatchId).delete(s.key);this.es.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ml(n,s));let i=this.es.get(n);i===void 0&&(i=ne(),this.es.set(n,i)),this.es.set(n,i.add(s.key))}}/**
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
 */class wl{constructor(){this.ns=new me(Me.ss),this.rs=new me(Me.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const s=new Me(e,n);this.ns=this.ns.add(s),this.rs=this.rs.add(s)}us(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.cs(new Me(e,n))}hs(e,n){e.forEach(s=>this.removeReference(s,n))}ls(e){const n=new O(new ye([])),s=new Me(n,e),r=new Me(n,e+1),i=[];return this.rs.forEachInRange([s,r],o=>{this.cs(o),i.push(o.key)}),i}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new O(new ye([])),s=new Me(n,e),r=new Me(n,e+1);let i=ne();return this.rs.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Me(e,0),s=this.ns.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Me{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return O.comparator(e.key,n.key)||J(e._s,n._s)}static os(e,n){return J(e._s,n._s)||O.comparator(e.key,n.key)}}/**
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
 */class tC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new me(Me.ss)}checkEmpty(e){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pl(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.gs=this.gs.add(new Me(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return m.resolve(o)}lookupMutationBatch(e,n){return m.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.ps(s),i=r<0?0:r;return m.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Me(n,0),r=new Me(n,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([s,r],o=>{const a=this.ys(o._s);i.push(a)}),m.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new me(J);return n.forEach(r=>{const i=new Me(r,0),o=new Me(r,Number.POSITIVE_INFINITY);this.gs.forEachInRange([i,o],a=>{s=s.add(a._s)})}),m.resolve(this.Is(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;O.isDocumentKey(i)||(i=i.child(""));const o=new Me(new O(i),0);let a=new me(J);return this.gs.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c._s)),!0)},o),m.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(s=>{const r=this.ys(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){j(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.gs;return m.forEach(n.mutations,r=>{const i=new Me(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.gs=s})}An(e){}containsKey(e,n){const s=new Me(n,0),r=this.gs.firstAfterOrEqual(s);return m.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,m.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nC{constructor(e){this.Es=e,this.docs=new Ne(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Es(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return m.resolve(s?s.document.mutableCopy():Ce.newInvalidDocument(n))}getEntries(e,n){let s=lt();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ce.newInvalidDocument(r))}),m.resolve(s)}getAllFromCollection(e,n,s){let r=lt();const i=new O(n.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||al(fm(c),s)<=0||(r=r.insert(c.key,c.mutableCopy()))}return m.resolve(r)}getAllFromCollectionGroup(e,n,s,r){U()}As(e,n){return m.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new sC(this)}getSize(e){return m.resolve(this.size)}}class sC extends py{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(s)}),m.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class rC{constructor(e){this.persistence=e,this.Rs=new Pn(n=>hs(n),Ai),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.bs=0,this.Ps=new wl,this.targetCount=0,this.vs=ps.Pn()}forEachTarget(e,n){return this.Rs.forEach((s,r)=>n(r)),m.resolve()}getLastRemoteSnapshotVersion(e){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return m.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.bs&&(this.bs=n),m.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,m.resolve()}updateTargetData(e,n){return this.Dn(n),m.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,m.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Rs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),m.waitFor(i).next(()=>r)}getTargetCount(e){return m.resolve(this.targetCount)}getTargetData(e,n){const s=this.Rs.get(n)||null;return m.resolve(s)}addMatchingKeys(e,n,s){return this.Ps.us(n,s),m.resolve()}removeMatchingKeys(e,n,s){this.Ps.hs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),m.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),m.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ps.ds(n);return m.resolve(s)}containsKey(e,n){return m.resolve(this.Ps.containsKey(n))}}/**
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
 */class yy{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new vt(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new rC(this),this.indexManager=new qS,this.remoteDocumentCache=function(s){return new nC(s)}(s=>this.referenceDelegate.xs(s)),this.yt=new oy(n),this.Ns=new ZS(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Vs[e.toKey()];return s||(s=new tC(n,this.referenceDelegate),this.Vs[e.toKey()]=s),s}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,s){S("MemoryPersistence","Starting transaction:",e);const r=new iC(this.Ss.next());return this.referenceDelegate.ks(),s(r).next(i=>this.referenceDelegate.Os(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Ms(e,n){return m.or(Object.values(this.Vs).map(s=>()=>s.containsKey(e,n)))}}class iC extends gm{constructor(e){super(),this.currentSequenceNumber=e}}class Oa{constructor(e){this.persistence=e,this.Fs=new wl,this.$s=null}static Bs(e){return new Oa(e)}get Ls(){if(this.$s)return this.$s;throw U()}addReference(e,n,s){return this.Fs.addReference(s,n),this.Ls.delete(s.toString()),m.resolve()}removeReference(e,n,s){return this.Fs.removeReference(s,n),this.Ls.add(s.toString()),m.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),m.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(r=>this.Ls.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Ls.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Ls,s=>{const r=O.fromPath(s);return this.qs(e,r).next(i=>{i||n.removeEntry(r,H.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(s=>{s?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return m.or([()=>m.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class oC{constructor(e){this.yt=e}$(e,n,s,r){const i=new Ta("createOrUpgrade",n);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sd,{unique:!0}),a.createObjectStore("documentMutations")}(e),jd(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=m.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),jd(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").W().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Sd,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return m.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Us(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i)))),s<7&&r>=7&&(o=o.next(()=>this.Gs(i))),s<8&&r>=8&&(o=o.next(()=>this.Qs(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.js(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:kS});c.createIndex("collectionPathOverlayIndex",RS,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",NS,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:wS});c.createIndex("documentKeyIndex",IS),c.createIndex("collectionGroupIndex",bS)}(e)).next(()=>this.Ws(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.zs(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:CS}).createIndex("sequenceNumberIndex",AS,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:xS}).createIndex("documentKeyIndex",DS,{unique:!1})}(e))),o}Ks(e){let n=0;return e.store("remoteDocuments").Z((s,r)=>{n+=jo(r)}).next(()=>{const s={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Us(e){const n=e.store("mutationQueues"),s=e.store("mutations");return n.W().next(r=>m.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.W("userMutationsIndex",o).next(a=>m.forEach(a,c=>{j(c.userId===i.userId);const u=zn(this.yt,c);return hy(e,i.userId,u).next(()=>{})}))}))}Gs(e){const n=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.Z((o,a)=>{const c=new ye(o),u=function(l){return[0,et(l)]}(c);i.push(n.get(u).next(l=>l?m.resolve():(h=>n.put({targetId:0,path:et(h),sequenceNumber:r.highestListenSequenceNumber}))(c)))}).next(()=>m.waitFor(i))})}Qs(e,n){e.createObjectStore("collectionParents",{keyPath:SS});const s=n.store("collectionParents"),r=new vl,i=o=>{if(r.add(o)){const a=o.lastSegment(),c=o.popLast();return s.put({collectionId:a,parent:et(c)})}};return n.store("remoteDocuments").Z({X:!0},(o,a)=>{const c=new ye(o);return i(c.popLast())}).next(()=>n.store("documentMutations").Z({X:!0},([o,a,c],u)=>{const l=Ut(a);return i(l.popLast())}))}js(e){const n=e.store("targets");return n.Z((s,r)=>{const i=xr(r),o=ay(this.yt,i);return n.put(o)})}Ws(e,n){const s=n.store("remoteDocuments"),r=[];return s.Z((i,o)=>{const a=n.store("remoteDocumentsV14"),c=(u=o,u.document?new O(ye.fromString(u.document.name).popFirst(5)):u.noDocument?O.fromSegments(u.noDocument.path):u.unknownDocument?O.fromSegments(u.unknownDocument.path):U()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(l))}).next(()=>m.waitFor(r))}zs(e,n){const s=n.store("mutations"),r=gy(this.yt),i=new yy(Oa.Bs,this.yt.ie);return s.W().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:ne();zn(this.yt,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),m.forEach(a,(c,u)=>{const l=new Ve(u),h=Ra.re(this.yt,l),d=i.getIndexManager(l),g=Na.re(l,this.yt,d,i.referenceDelegate);return new my(r,g,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Zc(n,vt.at),c).next()})})}}function jd(t){t.createObjectStore("targetDocuments",{keyPath:TS}).createIndex("documentTargetsIndex",_S,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ES,{unique:!0}),t.createObjectStore("targetGlobal")}const ac="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Il{constructor(e,n,s,r,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=s,this.Hs=i,this.window=o,this.document=a,this.Js=u,this.Ys=l,this.Xs=h,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=d=>Promise.resolve(),!Il.C())throw new B(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new QS(this,r),this.ii=n+"main",this.yt=new oy(c),this.ri=new Xt(this.ii,this.Xs,new oC(this.yt)),this.Cs=new HS(this.referenceDelegate,this.yt),this.remoteDocumentCache=gy(this.yt),this.Ns=new LS,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,l===!1&&Xe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(T.FAILED_PRECONDITION,ac);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Cs.getHighestSequenceNumber(e))}).then(e=>{this.Ss=new vt(e,this.Js)}).then(()=>{this.Ds=!0}).catch(e=>(this.ri&&this.ri.close(),Promise.reject(e)))}li(e){return this.si=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget(async()=>{this.started&&await this.ui()}))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Qi(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.fi(e).next(n=>{n||(this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)))})}).next(()=>this.di(e)).next(n=>this.isPrimary&&!n?this._i(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(On(e))return S("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return S("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable(()=>this.si(e)),this.isPrimary=e})}fi(e){return Er(e).get("owner").next(n=>m.resolve(this.mi(n)))}gi(e){return Qi(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const s=Fe(n,"clientMetadata");return s.W().next(r=>{const i=this.Ii(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return m.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.oi)for(const n of e)this.oi.removeItem(this.Ti(n.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ui().then(()=>this.yi()).then(()=>this.hi()))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?m.resolve(!0):Er(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)){if(this.mi(n)&&this.networkEnabled)return!0;if(!this.mi(n)){if(!n.allowTabSynchronization)throw new B(T.FAILED_PRECONDITION,ac);return!1}}return!(!this.networkEnabled||!this.inForeground)||Qi(e).W().next(s=>this.Ii(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&S("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new Zc(e,vt.at);return this._i(n).next(()=>this.gi(n))}),this.ri.close(),this.Pi()}Ii(e,n){return e.filter(s=>this.pi(s.updateTimeMs,n)&&!this.Ei(s.clientId))}vi(){return this.runTransaction("getActiveClients","readonly",e=>Qi(e).W().next(n=>this.Ii(n,18e5).map(s=>s.clientId)))}get started(){return this.Ds}getMutationQueue(e,n){return Na.re(e,this.yt,n,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new KS(e,this.yt.ie.databaseId)}getDocumentOverlayCache(e){return Ra.re(this.yt,e)}getBundleCache(){return this.Ns}runTransaction(e,n,s){S("IndexedDbPersistence","Starting transaction:",e);const r=n==="readonly"?"readonly":"readwrite",i=(o=this.Xs)===15?PS:o===14?iy:o===13?ry:o===12?OS:o===11?sy:void U();var o;let a;return this.ri.runTransaction(e,r,i,c=>(a=new Zc(c,this.Ss?this.Ss.next():vt.at),n==="readwrite-primary"?this.fi(a).next(u=>!!u||this.di(a)).next(u=>{if(!u)throw Xe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable(()=>this.si(!1)),new B(T.FAILED_PRECONDITION,pm);return s(a)}).next(u=>this.wi(a).next(()=>u)):this.Vi(a).next(()=>s(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Vi(e){return Er(e).get("owner").next(n=>{if(n!==null&&this.pi(n.leaseTimestampMs,5e3)&&!this.Ei(n.ownerId)&&!this.mi(n)&&!(this.Ys||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(T.FAILED_PRECONDITION,ac)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Er(e).put("owner",n)}static C(){return Xt.C()}_i(e){const n=Er(e);return n.get("owner").next(s=>this.mi(s)?(S("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):m.resolve())}pi(e,n){const s=Date.now();return!(e<s-n)&&(!(e>s)||(Xe(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ci(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ti=()=>{this.Hs.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ui()))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground=this.document.visibilityState==="visible")}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ai(),XI()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var n;try{const s=((n=this.oi)===null||n===void 0?void 0:n.getItem(this.Ti(e)))!==null;return S("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return Xe("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(e){Xe("Failed to set zombie client id.",e)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch{}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Er(t){return Fe(t,"owner")}function Qi(t){return Fe(t,"clientMetadata")}function aC(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class bl{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Si=s,this.Di=r}static Ci(e,n){let s=ne(),r=ne();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new bl(e,n.fromCache,s,r)}}/**
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
 */class vy{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,s,r){return this.ki(e,n).next(i=>i||this.Oi(e,n,r,s)).next(i=>i||this.Mi(e,n))}ki(e,n){if(gd(n))return m.resolve(null);let s=Ct(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Wc(n,null,"F"),s=Ct(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=ne(...i);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Fi(n,a);return this.$i(n,u,o,c.readTime)?this.ki(e,Wc(n,null,"F")):this.Bi(e,u,n,c)}))})))}Oi(e,n,s,r){return gd(n)||r.isEqual(H.min())?this.Mi(e,n):this.Ni.getDocuments(e,s).next(i=>{const o=this.Fi(n,i);return this.$i(n,o,s,r)?this.Mi(e,n):($c()<=ue.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Qc(n)),this.Bi(e,o,n,w_(r,-1)))})}Fi(e,n){let s=new me(Dm(e));return n.forEach((r,i)=>{hl(e,i)&&(s=s.add(i))}),s}$i(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,n){return $c()<=ue.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",Qc(n)),this.Ni.getDocumentsMatchingQuery(e,n,pt.min())}Bi(e,n,s,r){return this.Ni.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class cC{constructor(e,n,s,r){this.persistence=e,this.Li=n,this.yt=r,this.qi=new Ne(J),this.Ui=new Pn(i=>hs(i),Ai),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(s)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new my(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function wy(t,e,n,s){return new cC(t,e,n,s)}async function Iy(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Qi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=ne();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function uC(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=m.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(y=>{const I=c.docVersions.get(g);j(I!==null),y.version.compareTo(I)<0&&(l.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=ne();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function by(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function lC(t,e){const n=X(t),s=e.snapshotVersion;let r=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});r=n.qi;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(qe.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(y,I,x){return y.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(d,g,l)&&a.push(n.Cs.updateTargetData(i,g))});let c=lt(),u=ne();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(hC(i,o,e.documentUpdates).next(l=>{c=l.Wi,u=l.zi})),!s.isEqual(H.min())){const l=n.Cs.getLastRemoteSnapshotVersion(i).next(h=>n.Cs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return m.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.qi=r,i))}function hC(t,e,n){let s=ne(),r=ne();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=lt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(H.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Wi:o,zi:r}})}function dC(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function fC(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Cs.getTargetData(s,e).next(i=>i?(r=i,m.resolve(r)):n.Cs.allocateTargetId(s).next(o=>(r=new Sn(e,o,0,s.currentSequenceNumber),n.Cs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.qi.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qi=n.qi.insert(s.targetId,s),n.Ui.set(e,s.targetId)),s})}async function su(t,e,n){const s=X(t),r=s.qi.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!On(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.qi=s.qi.remove(e),s.Ui.delete(r.target)}function qd(t,e,n){const s=X(t);let r=H.min(),i=ne();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=X(a),h=l.Ui.get(u);return h!==void 0?m.resolve(l.qi.get(h)):l.Cs.getTargetData(c,u)}(s,o,Ct(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Cs.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Li.getDocumentsMatchingQuery(o,e,n?r:H.min(),n?i:ne())).next(a=>(pC(s,$_(e),a),{documents:a,Hi:i})))}function pC(t,e,n){let s=t.Ki.get(e)||H.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Ki.set(e,s)}class Kd{constructor(){this.activeTargetIds=qm()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ey{constructor(){this.Lr=new Kd,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,s){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Kd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gC{Ur(e){}shutdown(){}}/**
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
 */class Hd{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const mC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class yC{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class vC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,s,r,i){const o=this.ho(e,n);S("RestConnection","Sending: ",o,s);const a={};return this.lo(a,r,i),this.fo(e,o,a,s).then(c=>(S("RestConnection","Received: ",c),c),c=>{throw Po("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}_o(e,n,s,r,i,o){return this.ao(e,n,s,r,i)}lo(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+lr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ho(e,n){const s=mC[e];return`${this.oo}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,s,r){return new Promise((i,o)=>{const a=new c_;a.setWithCredentials(!0),a.listenOnce(i_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case ic.NO_ERROR:const u=a.getResponseJson();S("Connection","XHR received:",JSON.stringify(u)),i(u);break;case ic.TIMEOUT:S("Connection",'RPC "'+e+'" timed out'),o(new B(T.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const l=a.getStatus();if(S("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(y){const I=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(I)>=0?I:T.UNKNOWN}(d.status);o(new B(g,d.message))}else o(new B(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(T.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{S("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}wo(e,n,s){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=s_(),o=r_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new a_({})),this.lo(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");S("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new yC({Hr:y=>{h?S("Connection","Not sending because WebChannel is closed:",y):(l||(S("Connection","Opening WebChannel transport."),u.open(),l=!0),S("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),g=(y,I,x)=>{y.listen(I,C=>{try{x(C)}catch(L){setTimeout(()=>{throw L},0)}})};return g(u,Ki.EventType.OPEN,()=>{h||S("Connection","WebChannel transport opened.")}),g(u,Ki.EventType.CLOSE,()=>{h||(h=!0,S("Connection","WebChannel transport closed"),d.io())}),g(u,Ki.EventType.ERROR,y=>{h||(h=!0,Po("Connection","WebChannel transport errored:",y),d.io(new B(T.UNAVAILABLE,"The operation could not be completed")))}),g(u,Ki.EventType.MESSAGE,y=>{var I;if(!h){const x=y.data[0];j(!!x);const C=x,L=C.error||((I=C[0])===null||I===void 0?void 0:I.error);if(L){S("Connection","WebChannel received error:",L);const k=L.status;let z=function(te){const de=ke[te];if(de!==void 0)return Vm(de)}(k),ee=L.message;z===void 0&&(z=T.INTERNAL,ee="Unknown error status: "+k+" with message "+L.message),h=!0,d.io(new B(z,ee)),u.close()}else S("Connection","WebChannel received:",x),d.ro(x)}}),g(o,o_.STAT_EVENT,y=>{y.stat===td.PROXY?S("Connection","Detected buffering proxy"):y.stat===td.NOPROXY&&S("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}/**
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
 */function wC(){return typeof window<"u"?window:null}function fo(){return typeof document<"u"?document:null}/**
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
 */function Pa(t){return new aS(t,!0)}class Ty{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),r=Math.max(0,n-s);r>0&&S("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class _y{constructor(e,n,s,r,i,o,a,c){this.Hs=e,this.vo=s,this.Vo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new Ty(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Xe(n.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.So===n&&this.Go(s,r)},s=>{e(()=>{const r=new B(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Qo(r)})})}Go(e,n){const s=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{s(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(r=>{s(()=>this.Qo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IC extends _y{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.yt=i}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=lS(this.yt,e),s=function(r){if(!("targetChange"in r))return H.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?H.min():i.readTime?Ze(i.readTime):H.min()}(e);return this.listener.Wo(n,s)}zo(e){const n={};n.database=Xc(this.yt),n.addTarget=function(r,i){let o;const a=i.target;return o=Lo(a)?{documents:Ym(r,a)}:{query:Xm(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=zm(r,i.resumeToken):i.snapshotVersion.compareTo(H.min())>0&&(o.readTime=er(r,i.snapshotVersion.toTimestamp())),o}(this.yt,e);const s=dS(this.yt,e);s&&(n.labels=s),this.Bo(n)}Ho(e){const n={};n.database=Xc(this.yt),n.removeTarget=e,this.Bo(n)}}class bC extends _y{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.yt=i,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=hS(e.writeResults,e.commitTime),s=Ze(e.commitTime);return this.listener.Zo(s,n)}return j(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=Xc(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Vo(this.yt,s))};this.Bo(n)}}/**
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
 */class EC extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.yt=r,this.nu=!1}su(){if(this.nu)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,s){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.ao(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B(T.UNKNOWN,r.toString())})}_o(e,n,s,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection._o(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(T.UNKNOWN,i.toString())})}terminate(){this.nu=!0}}class TC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Xe(n),this.ou=!1):S("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
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
 */class _C{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=i,this.mu.Ur(o=>{s.enqueueAndForget(async()=>{vs(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=X(a);c._u.add(4),await Di(c),c.gu.set("Unknown"),c._u.delete(4),await Ma(c)}(this))})}),this.gu=new TC(s,r)}}async function Ma(t){if(vs(t))for(const e of t.wu)await e(!0)}async function Di(t){for(const e of t.wu)await e(!1)}function Sy(t,e){const n=X(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),_l(n)?Tl(n):dr(n).ko()&&El(n,e))}function Cy(t,e){const n=X(t),s=dr(n);n.du.delete(e),s.ko()&&Ay(n,e),n.du.size===0&&(s.ko()?s.Fo():vs(n)&&n.gu.set("Unknown"))}function El(t,e){t.yu.Ot(e.targetId),dr(t).zo(e)}function Ay(t,e){t.yu.Ot(e),dr(t).Ho(e)}function Tl(t){t.yu=new sS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),dr(t).start(),t.gu.uu()}function _l(t){return vs(t)&&!dr(t).No()&&t.du.size>0}function vs(t){return X(t)._u.size===0}function xy(t){t.yu=void 0}async function SC(t){t.du.forEach((e,n)=>{El(t,e)})}async function CC(t,e){xy(t),_l(t)?(t.gu.hu(e),Tl(t)):t.gu.set("Unknown")}async function AC(t,e,n){if(t.gu.set("Online"),e instanceof Hm&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.du.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.du.delete(o),s.yu.removeTarget(o))}(t,e)}catch(s){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await qo(t,s)}else if(e instanceof lo?t.yu.Kt(e):e instanceof Km?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(H.min()))try{const s=await by(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.yu.Zt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.du.get(c);u&&r.du.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.du.get(a);if(!c)return;r.du.set(a,c.withResumeToken(qe.EMPTY_BYTE_STRING,c.snapshotVersion)),Ay(r,a);const u=new Sn(c.target,a,1,c.sequenceNumber);El(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){S("RemoteStore","Failed to raise snapshot:",s),await qo(t,s)}}async function qo(t,e,n){if(!On(e))throw e;t._u.add(1),await Di(t),t.gu.set("Offline"),n||(n=()=>by(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Ma(t)})}function Dy(t,e){return e().catch(n=>qo(t,n,e))}async function ki(t){const e=X(t),n=Dn(e);let s=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;xC(e);)try{const r=await dC(e.localStore,s);if(r===null){e.fu.length===0&&n.Fo();break}s=r.batchId,DC(e,r)}catch(r){await qo(e,r)}ky(e)&&Ry(e)}function xC(t){return vs(t)&&t.fu.length<10}function DC(t,e){t.fu.push(e);const n=Dn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function ky(t){return vs(t)&&!Dn(t).No()&&t.fu.length>0}function Ry(t){Dn(t).start()}async function kC(t){Dn(t).eu()}async function RC(t){const e=Dn(t);for(const n of t.fu)e.Xo(n.mutations)}async function NC(t,e,n){const s=t.fu.shift(),r=gl.from(s,e,n);await Dy(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await ki(t)}async function OC(t,e){e&&Dn(t).Yo&&await async function(n,s){if(r=s.code,J_(r)&&r!==T.ABORTED){const i=n.fu.shift();Dn(n).Mo(),await Dy(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ki(n)}var r}(t,e),ky(t)&&Ry(t)}async function zd(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const s=vs(n);n._u.add(3),await Di(n),s&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Ma(n)}async function PC(t,e){const n=X(t);e?(n._u.delete(2),await Ma(n)):e||(n._u.add(2),await Di(n),n.gu.set("Unknown"))}function dr(t){return t.pu||(t.pu=function(e,n,s){const r=X(e);return r.su(),new IC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:SC.bind(null,t),Zr:CC.bind(null,t),Wo:AC.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),_l(t)?Tl(t):t.gu.set("Unknown")):(await t.pu.stop(),xy(t))})),t.pu}function Dn(t){return t.Iu||(t.Iu=function(e,n,s){const r=X(e);return r.su(),new bC(n,r.connection,r.authCredentials,r.appCheckCredentials,r.yt,s)}(t.datastore,t.asyncQueue,{Yr:kC.bind(null,t),Zr:OC.bind(null,t),tu:RC.bind(null,t),Zo:NC.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await ki(t)):(await t.Iu.stop(),t.fu.length>0&&(S("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
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
 */class Sl{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Sl(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cl(t,e){if(Xe("AsyncQueue",`${e}: ${t}`),On(t))return new B(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class $s{constructor(e){this.comparator=e?(n,s)=>e(n,s)||O.comparator(n.key,s.key):(n,s)=>O.comparator(n.key,s.key),this.keyedMap=Ar(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new $s(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof $s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new $s;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Gd{constructor(){this.Tu=new Ne(O.comparator)}track(e){const n=e.doc.key,s=this.Tu.get(n);s?e.type!==0&&s.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&s.type!==1?this.Tu=this.Tu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Tu=this.Tu.remove(n):e.type===1&&s.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):U():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,s)=>{e.push(s)}),e}}class tr{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new tr(e,n,$s.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class MC{constructor(){this.Au=void 0,this.listeners=[]}}class LC{constructor(){this.queries=new Pn(e=>xm(e),Aa),this.onlineState="Unknown",this.Ru=new Set}}async function FC(t,e){const n=X(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new MC),r)try{i.Au=await n.onListen(s)}catch(o){const a=Cl(o,`Initialization of query '${Qc(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.bu(n.onlineState),i.Au&&e.Pu(i.Au)&&Al(n)}async function UC(t,e){const n=X(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function VC(t,e){const n=X(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Pu(r)&&(s=!0);o.Au=r}}s&&Al(n)}function BC(t,e,n){const s=X(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function Al(t){t.Ru.forEach(e=>{e.next()})}class $C{constructor(e,n,s){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=s||{}}Pu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new tr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Nu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=tr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
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
 */class Ny{constructor(e){this.key=e}}class Oy{constructor(e){this.key=e}}class jC{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=ne(),this.mutatedKeys=ne(),this.Gu=Dm(e),this.Qu=new $s(this.Gu)}get ju(){return this.qu}Wu(e,n){const s=n?n.zu:new Gd,r=n?n.Qu:this.Qu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=hl(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;d&&g?d.data.isEqual(g.data)?y!==I&&(s.track({type:3,doc:g}),x=!0):this.Hu(d,g)||(s.track({type:2,doc:g}),x=!0,(c&&this.Gu(g,c)>0||u&&this.Gu(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),x=!0):d&&!g&&(s.track({type:1,doc:d}),x=!0,(c||u)&&(a=!0)),x&&(g?(o=o.add(g),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Qu:o,zu:s,$i:a,mutatedKeys:i}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Eu();i.sort((u,l)=>function(h,d){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return g(h)-g(d)}(u.type,l.type)||this.Gu(u.doc,l.doc)),this.Ju(s);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,c=a!==this.Uu;return this.Uu=a,i.length!==0||c?{snapshot:new tr(this.query,e.Qu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Gd,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=ne(),this.Qu.forEach(s=>{this.Zu(s.key)&&(this.Ku=this.Ku.add(s.key))});const n=[];return e.forEach(s=>{this.Ku.has(s)||n.push(new Oy(s))}),this.Ku.forEach(s=>{e.has(s)||n.push(new Ny(s))}),n}tc(e){this.qu=e.Hi,this.Ku=ne();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return tr.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class qC{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class KC{constructor(e){this.key=e,this.nc=!1}}class HC{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Pn(a=>xm(a),Aa),this.rc=new Map,this.oc=new Set,this.uc=new Ne(O.comparator),this.cc=new Map,this.ac=new wl,this.hc={},this.lc=new Map,this.fc=ps.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function zC(t,e){const n=nA(t);let s,r;const i=n.ic.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.ec();else{const o=await fC(n.localStore,Ct(e));n.isPrimaryClient&&Sy(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await GC(n,e,s,a==="current",o.resumeToken)}return r}async function GC(t,e,n,s,r){t._c=(h,d,g)=>async function(y,I,x,C){let L=I.view.Wu(x);L.$i&&(L=await qd(y.localStore,I.query,!1).then(({documents:ee})=>I.view.Wu(ee,L)));const k=C&&C.targetChanges.get(I.targetId),z=I.view.applyChanges(L,y.isPrimaryClient,k);return Qd(y,I.targetId,z.Xu),z.snapshot}(t,h,d,g);const i=await qd(t.localStore,e,!0),o=new jC(e,i.Hi),a=o.Wu(i.documents),c=xi.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Qd(t,n,u.Xu);const l=new qC(e,n,o);return t.ic.set(e,l),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function WC(t,e){const n=X(t),s=n.ic.get(e),r=n.rc.get(s.targetId);if(r.length>1)return n.rc.set(s.targetId,r.filter(i=>!Aa(i,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await su(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),Cy(n.remoteStore,s.targetId),ru(n,s.targetId)}).catch(ms)):(ru(n,s.targetId),await su(n.localStore,s.targetId,!0))}async function QC(t,e,n){const s=Uy(t);try{const r=await function(i,o){const a=X(i),c=_e.now(),u=o.reduce((d,g)=>d.add(g.key),ne());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=lt(),y=ne();return a.Gi.getEntries(d,u).next(I=>{g=I,g.forEach((x,C)=>{C.isValidDocument()||(y=y.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(I=>{l=I;const x=[];for(const C of o){const L=Y_(C,l.get(C.key).overlayedDocument);L!=null&&x.push(new rn(C.key,L,Am(L.value.mapValue),at.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,x,o)}).next(I=>{h=I;const x=I.applyToLocalDocumentSet(l,y);return a.documentOverlayCache.saveOverlays(d,I.batchId,x)})}).then(()=>({batchId:h.batchId,changes:$m(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.hc[i.currentUser.toKey()];c||(c=new Ne(J)),c=c.insert(o,a),i.hc[i.currentUser.toKey()]=c}(s,r.batchId,n),await Ri(s,r.changes),await ki(s.remoteStore)}catch(r){const i=Cl(r,"Failed to persist write");n.reject(i)}}async function Py(t,e){const n=X(t);try{const s=await lC(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.cc.get(i);o&&(j(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.nc=!0:r.modifiedDocuments.size>0?j(o.nc):r.removedDocuments.size>0&&(j(o.nc),o.nc=!1))}),await Ri(n,s,e)}catch(s){await ms(s)}}function Wd(t,e,n){const s=X(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ic.forEach((i,o)=>{const a=o.view.bu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=X(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.bu(o)&&(c=!0)}),c&&Al(a)}(s.eventManager,e),r.length&&s.sc.Wo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function YC(t,e,n){const s=X(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.cc.get(e),i=r&&r.key;if(i){let o=new Ne(O.comparator);o=o.insert(i,Ce.newNoDocument(i,H.min()));const a=ne().add(i),c=new ka(H.min(),new Map,new me(J),o,a);await Py(s,c),s.uc=s.uc.remove(i),s.cc.delete(e),xl(s)}else await su(s.localStore,e,!1).then(()=>ru(s,e,n)).catch(ms)}async function XC(t,e){const n=X(t),s=e.batch.batchId;try{const r=await uC(n.localStore,e);Ly(n,s,null),My(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Ri(n,r)}catch(r){await ms(r)}}async function JC(t,e,n){const s=X(t);try{const r=await function(i,o){const a=X(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(j(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);Ly(s,e,n),My(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Ri(s,r)}catch(r){await ms(r)}}function My(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Ly(t,e,n){const s=X(t);let r=s.hc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.hc[s.currentUser.toKey()]=r}}function ru(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.rc.get(e))t.ic.delete(s),n&&t.sc.wc(s,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(s=>{t.ac.containsKey(s)||Fy(t,s)})}function Fy(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(Cy(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),xl(t))}function Qd(t,e,n){for(const s of n)s instanceof Ny?(t.ac.addReference(s.key,e),ZC(t,s)):s instanceof Oy?(S("SyncEngine","Document no longer in limbo: "+s.key),t.ac.removeReference(s.key,e),t.ac.containsKey(s.key)||Fy(t,s.key)):U()}function ZC(t,e){const n=e.key,s=n.path.canonicalString();t.uc.get(n)||t.oc.has(s)||(S("SyncEngine","New document in limbo: "+n),t.oc.add(s),xl(t))}function xl(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new O(ye.fromString(e)),s=t.fc.next();t.cc.set(s,new KC(n)),t.uc=t.uc.insert(n,s),Sy(t.remoteStore,new Sn(Ct(Ca(n.path)),s,2,vt.at))}}async function Ri(t,e,n){const s=X(t),r=[],i=[],o=[];s.ic.isEmpty()||(s.ic.forEach((a,c)=>{o.push(s._c(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=bl.Ci(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.sc.Wo(r),await async function(a,c){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>m.forEach(c,h=>m.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>m.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!On(l))throw l;S("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.qi.get(h),g=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(g);u.qi=u.qi.insert(h,y)}}}(s.localStore,i))}async function eA(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const s=await Iy(n.localStore,e);n.currentUser=e,function(r,i){r.lc.forEach(o=>{o.forEach(a=>{a.reject(new B(T.CANCELLED,i))})}),r.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ri(n,s.ji)}}function tA(t,e){const n=X(t),s=n.cc.get(e);if(s&&s.nc)return ne().add(s.key);{let r=ne();const i=n.rc.get(e);if(!i)return r;for(const o of i){const a=n.ic.get(o);r=r.unionWith(a.view.ju)}return r}}function nA(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Py.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YC.bind(null,e),e.sc.Wo=VC.bind(null,e.eventManager),e.sc.wc=BC.bind(null,e.eventManager),e}function Uy(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JC.bind(null,e),e}class Vy{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Pa(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return wy(this.persistence,new vy,e.initialUser,this.yt)}yc(e){return new yy(Oa.Bs,this.yt)}gc(e){return new Ey}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sA extends Vy{constructor(e,n,s){super(),this.Ac=e,this.cacheSizeBytes=n,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Uy(this.Ac.syncEngine),await ki(this.Ac.remoteStore),await this.persistence.li(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ic(e){return wy(this.persistence,new vy,e.initialUser,this.yt)}Tc(e,n){const s=this.persistence.referenceDelegate.garbageCollector;return new GS(s,e.asyncQueue,n)}Ec(e,n){const s=new T_(n,this.persistence);return new E_(e.asyncQueue,s)}yc(e){const n=aC(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new Il(this.synchronizeTabs,n,e.clientId,s,e.asyncQueue,wC(),fo(),this.yt,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Ey}}class By{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Wd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eA.bind(null,this.syncEngine),await PC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new LC}createDatastore(e){const n=Pa(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new vC(r));var r;return function(i,o,a,c){return new EC(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Wd(this.syncEngine,a,0),o=Hd.C()?new Hd:new gC,new _C(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new HC(s,r,i,o,a,c);return u&&(l.dc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);S("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Di(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
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
 */function rA(t,e,n){if(!n)throw new B(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iA(t,e,n,s){if(e===!0&&s===!0)throw new B(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yd(t){if(!O.isDocumentKey(t))throw new B(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function kn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Dl(t);throw new B(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Xd=new Map;class Jd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,iA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class kl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new u_;switch(n.type){case"gapi":const s=n.client;return new f_(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Xd.get(e);n&&(S("ComponentProvider","Removing Datastore"),Xd.delete(e),n.terminate())}(this),Promise.resolve()}}function oA(t,e,n,s={}){var r;const i=(t=kn(t,kl))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Po("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ve.MOCK_USER;else{o=HI(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new B(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ve(c)}t._authCredentials=new l_(new um(o,a))}}/**
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
 */class ht{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ci(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}}class Rl{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Rl(this.firestore,e,this._query)}}class ci extends Rl{constructor(e,n,s){super(e,n,Ca(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new O(e))}withConverter(e){return new ci(this.firestore,e,this._path)}}function nD(t,e,...n){if(t=ct(t),arguments.length===1&&(e=lm.R()),rA("doc","path",e),t instanceof kl){const s=ye.fromString(e,...n);return Yd(s),new ht(t,null,new O(s))}{if(!(t instanceof ht||t instanceof ci))throw new B(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(ye.fromString(e,...n));return Yd(s),new ht(t.firestore,t instanceof ci?t.converter:null,new O(s))}}/**
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
 */class aA{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Xe("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class cA{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Ve.UNAUTHENTICATED,this.clientId=lm.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{S("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(S("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Cl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function $y(t,e){t.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Iy(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function jy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uA(t);S("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>zd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>zd(e.remoteStore,i)),t.onlineComponents=e}async function uA(t){return t.offlineComponents||(S("FirestoreClient","Using default OfflineComponentProvider"),await $y(t,new Vy)),t.offlineComponents}async function qy(t){return t.onlineComponents||(S("FirestoreClient","Using default OnlineComponentProvider"),await jy(t,new By)),t.onlineComponents}function lA(t){return qy(t).then(e=>e.syncEngine)}async function hA(t){const e=await qy(t),n=e.eventManager;return n.onListen=zC.bind(null,e.syncEngine),n.onUnlisten=WC.bind(null,e.syncEngine),n}function dA(t,e,n={}){const s=new $t;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new aA({next:h=>{i.enqueueAndForget(()=>UC(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new B(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new B(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new $C(Ca(o.path),u,{includeMetadataChanges:!0,Nu:!0});return FC(r,l)}(await hA(t),t.asyncQueue,e,n,s)),s.promise}class fA{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new Ty(this,"async_queue_retry"),this.Wc=()=>{const n=fo();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=fo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=fo();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new $t;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!On(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Xe("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const r=Sl.createAndSchedule(this,e,n,s,i=>this.Yc(i));return this.Uc.push(r),r}zc(){this.Kc&&U()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Ni extends kl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new fA,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ky(this),this._firestoreClient.terminate()}}function sD(t,e){const n=typeof t=="object"?t:Sp(),s=typeof t=="string"?t:e||"(default)",r=ku(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=jI("firestore");i&&oA(r,...i)}return r}function Nl(t){return t._firestoreClient||Ky(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ky(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new __(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new cA(t._authCredentials,t._appCheckCredentials,t._queue,s)}function rD(t,e){gA(t=kn(t,Ni));const n=Nl(t),s=t._freezeSettings(),r=new By;return pA(n,r,new sA(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function pA(t,e,n){const s=new $t;return t.asyncQueue.enqueue(async()=>{try{await $y(t,n),await jy(t,e),s.resolve()}catch(r){const i=r;if(!function(o){return o.name==="FirebaseError"?o.code===T.FAILED_PRECONDITION||o.code===T.UNIMPLEMENTED:typeof DOMException<"u"&&o instanceof DOMException?o.code===22||o.code===20||o.code===11:!0}(i))throw i;Po("Error enabling offline persistence. Falling back to persistence disabled: "+i),s.reject(i)}}).then(()=>s.promise)}function gA(t){if(t._initialized||t._terminated)throw new B(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nr(qe.fromBase64String(e))}catch(n){throw new B(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new nr(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class La{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ol{constructor(e){this._methodName=e}}/**
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
 */class Pl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
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
 */const mA=/^__.*__$/;class yA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new rn(e,this.data,this.fieldMask,n,this.fieldTransforms):new hr(e,this.data,n,this.fieldTransforms)}}class Hy{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new rn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Ml{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.yt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.na(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new Ml(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.ua(e),r}ca(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ia({path:s,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ko(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(zy(this.sa)&&mA.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class vA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=s||Pa(e)}da(e,n,s,r=!1){return new Ml({sa:e,methodName:n,fa:s,path:Re.emptyPath(),oa:!1,la:r},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Gy(t){const e=t._freezeSettings(),n=Pa(t._databaseId);return new vA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wA(t,e,n,s,r,i={}){const o=t.da(i.merge||i.mergeFields?2:0,e,n,r);Ll("Data must be an object, but it was:",o,s);const a=Wy(s,o);let c,u;if(i.merge)c=new ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=iu(e,h,n);if(!o.contains(d))throw new B(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Yy(l,d)||l.push(d)}c=new ot(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new yA(new ze(a),c,u)}class Fa extends Ol{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fa}}function IA(t,e,n,s){const r=t.da(1,e,n);Ll("Data must be an object, but it was:",r,s);const i=[],o=ze.empty();ys(s,(c,u)=>{const l=Fl(e,c,n);u=ct(u);const h=r.ca(l);if(u instanceof Fa)i.push(l);else{const d=Ua(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new ot(i);return new Hy(o,a,r.fieldTransforms)}function bA(t,e,n,s,r,i){const o=t.da(1,e,n),a=[iu(e,s,n)],c=[r];if(i.length%2!=0)throw new B(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(iu(e,i[d])),c.push(i[d+1]);const u=[],l=ze.empty();for(let d=a.length-1;d>=0;--d)if(!Yy(u,a[d])){const g=a[d];let y=c[d];y=ct(y);const I=o.ca(g);if(y instanceof Fa)u.push(g);else{const x=Ua(y,I);x!=null&&(u.push(g),l.set(g,x))}}const h=new ot(u);return new Hy(l,h,o.fieldTransforms)}function Ua(t,e){if(Qy(t=ct(t)))return Ll("Unsupported field value:",e,t),Wy(t,e);if(t instanceof Ol)return function(n,s){if(!zy(s.sa))throw s.ha(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ha(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=Ua(o,s.aa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(t,e)}return function(n,s){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return q_(s.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=_e.fromDate(n);return{timestampValue:er(s.yt,r)}}if(n instanceof _e){const r=new _e(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:er(s.yt,r)}}if(n instanceof Pl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof nr)return{bytesValue:zm(s.yt,n._byteString)};if(n instanceof ht){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:fl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ha(`Unsupported field value: ${Dl(n)}`)}(t,e)}function Wy(t,e){const n={};return mm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ys(t,(s,r)=>{const i=Ua(r,e.ra(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Qy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Pl||t instanceof nr||t instanceof ht||t instanceof Ol)}function Ll(t,e,n){if(!Qy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=Dl(n);throw s==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+s)}}function iu(t,e,n){if((e=ct(e))instanceof La)return e._internalPath;if(typeof e=="string")return Fl(t,e);throw Ko("Field path arguments must be of type string or ",t,!1,void 0,n)}const EA=new RegExp("[~\\*/\\[\\]]");function Fl(t,e,n){if(e.search(EA)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new La(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ko(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new B(T.INVALID_ARGUMENT,a+t+c)}function Yy(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Xy{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TA extends Xy{data(){return super.data()}}function Jy(t,e){return typeof e=="string"?Fl(t,e):e instanceof La?e._internalPath:e._delegate._internalPath}class _A{convertValue(e,n="none"){switch(ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const s={};return ys(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Pl(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=vm(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(si(e));default:return null}}convertTimestamp(e){const n=An(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=ye.fromString(e);j(ty(s));const r=new cs(s.get(1),s.get(3)),i=new O(s.popFirst(5));return r.isEqual(n)||Xe(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function SA(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class CA{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zy extends Xy{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new AA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Jy("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class AA extends Zy{data(e={}){return super.data(e)}}/**
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
 */function iD(t){t=kn(t,ht);const e=kn(t.firestore,Ni);return dA(Nl(e),t._key).then(n=>DA(e,t,n))}class xA extends _A{constructor(e){super(),this.firestore=e}convertBytes(e){return new nr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function oD(t,e,n){t=kn(t,ht);const s=kn(t.firestore,Ni),r=SA(t.converter,e,n);return ev(s,[wA(Gy(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,at.none())])}function aD(t,e,n,...s){t=kn(t,ht);const r=kn(t.firestore,Ni),i=Gy(r);let o;return o=typeof(e=ct(e))=="string"||e instanceof La?bA(i,"updateDoc",t._key,e,n,s):IA(i,"updateDoc",t._key,e),ev(r,[o.toMutation(t._key,at.exists(!0))])}function ev(t,e){return function(n,s){const r=new $t;return n.asyncQueue.enqueueAndForget(async()=>QC(await lA(n),s,r)),r.promise}(Nl(t),e)}function DA(t,e,n){const s=n.docs.get(e._key),r=new xA(t);return new Zy(t,r,e._key,s,new CA(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){lr=n})(fi),Hs(new rs("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ni(new h_(n.getProvider("auth-internal")),new g_(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cs(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),_n(nd,"3.8.1",t),_n(nd,"3.8.1","esm2017")})();var Ot=(t=>(t.LOADING="loading",t.LOADED="loaded",t.ERROR="error",t))(Ot||{});const kA=typeof window<"u"&&window!==null,RA=MA(),NA=Object.prototype.propertyIsEnumerable,Zd=Object.getOwnPropertySymbols;function Ur(t){return typeof t=="function"||toString.call(t)==="[object Object]"}function OA(t){return typeof t=="object"?t===null:typeof t!="function"}function PA(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"}function MA(){return kA&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype?("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get(){return this.intersectionRatio>0}}),!0):!1}function LA(t,...e){if(!Ur(t))throw new TypeError("expected the first argument to be an object");if(e.length===0||typeof Symbol!="function"||typeof Zd!="function")return t;for(const n of e){const s=Zd(n);for(const r of s)NA.call(n,r)&&(t[r]=n[r])}return t}function tv(t,...e){let n=0;for(OA(t)&&(t=e[n++]),t||(t={});n<e.length;n++)if(Ur(e[n])){for(const s of Object.keys(e[n]))PA(s)&&(Ur(t[s])&&Ur(e[n][s])?tv(t[s],e[n][s]):t[s]=e[n][s]);LA(t,e[n])}return t}const ef="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",FA="",UA={rootMargin:"0px",threshold:0},_s="data-lazy-timeout-id";class VA{constructor(e){this.options={loading:ef,error:FA,observerOptions:UA,log:!0,lifecycle:{}},this._images=new WeakMap,this.config(e)}config(e={}){tv(this.options,e)}mount(e,n){if(!e)return;const{src:s,loading:r,error:i,lifecycle:o,delay:a}=this._valueFormatter(typeof n=="string"?n:n.value);this._lifecycle(Ot.LOADING,o,e),e.setAttribute("src",r||ef),RA||(this.loadImages(e,s,i,o),this._log(()=>{throw new Error("Not support IntersectionObserver!")})),this._initIntersectionObserver(e,s,i,o,a)}update(e,n){var a;if(!e)return;(a=this._realObserver(e))==null||a.unobserve(e);const{src:s,error:r,lifecycle:i,delay:o}=this._valueFormatter(typeof n=="string"?n:n.value);this._initIntersectionObserver(e,s,r,i,o)}unmount(e){var n;e&&((n=this._realObserver(e))==null||n.unobserve(e),this._images.delete(e))}loadImages(e,n,s,r){this._setImageSrc(e,n,s,r)}_setImageSrc(e,n,s,r){e.tagName.toLowerCase()==="img"?(n&&e.getAttribute("src")!==n&&e.setAttribute("src",n),this._listenImageStatus(e,()=>{this._lifecycle(Ot.LOADED,r,e)},()=>{var i;e.onload=null,this._lifecycle(Ot.ERROR,r,e),(i=this._realObserver(e))==null||i.disconnect(),s&&e.getAttribute("src")!==s&&e.setAttribute("src",s),this._log(()=>{throw new Error(`Image failed to load!And failed src was: ${n} `)})})):e.style.backgroundImage=`url('${n}')`}_initIntersectionObserver(e,n,s,r,i){var a;const o=this.options.observerOptions;this._images.set(e,new IntersectionObserver(c=>{Array.prototype.forEach.call(c,u=>{i&&i>0?this._delayedIntersectionCallback(e,u,i,n,s,r):this._intersectionCallback(e,u,n,s,r)})},o)),(a=this._realObserver(e))==null||a.observe(e)}_intersectionCallback(e,n,s,r,i){var o;n.isIntersecting&&((o=this._realObserver(e))==null||o.unobserve(n.target),this._setImageSrc(e,s,r,i))}_delayedIntersectionCallback(e,n,s,r,i,o){if(n.isIntersecting){if(n.target.hasAttribute(_s))return;const a=setTimeout(()=>{this._intersectionCallback(e,n,r,i,o),n.target.removeAttribute(_s)},s);n.target.setAttribute(_s,String(a))}else n.target.hasAttribute(_s)&&(clearTimeout(Number(n.target.getAttribute(_s))),n.target.removeAttribute(_s))}_listenImageStatus(e,n,s){e.onload=n,e.onerror=s}_valueFormatter(e){let n=e,s=this.options.loading,r=this.options.error,i=this.options.lifecycle,o=this.options.delay;return Ur(e)&&(n=e.src,s=e.loading||this.options.loading,r=e.error||this.options.error,i=e.lifecycle||this.options.lifecycle,o=e.delay||this.options.delay),{src:n,loading:s,error:r,lifecycle:i,delay:o}}_log(e){this.options.log&&e()}_lifecycle(e,n,s){switch(e){case Ot.LOADING:s==null||s.setAttribute("lazy",Ot.LOADING),n!=null&&n.loading&&n.loading(s);break;case Ot.LOADED:s==null||s.setAttribute("lazy",Ot.LOADED),n!=null&&n.loaded&&n.loaded(s);break;case Ot.ERROR:s==null||s.setAttribute("lazy",Ot.ERROR),n!=null&&n.error&&n.error(s);break}}_realObserver(e){return this._images.get(e)}}const cD={install(t,e){const n=new VA(e);t.config.globalProperties.$Lazyload=n,t.provide("Lazyload",n),t.directive("lazy",{mounted:n.mount.bind(n),updated:n.update.bind(n),unmounted:n.unmount.bind(n)})}};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ks=typeof window<"u";function BA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function cc(t,e){const n={};for(const s in e){const r=e[s];n[s]=At(r)?r.map(t):t(r)}return n}const Vr=()=>{},At=Array.isArray,$A=/\/$/,jA=t=>t.replace($A,"");function uc(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=zA(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function qA(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function KA(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&sr(e.matched[s],n.matched[r])&&nv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function sr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function nv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HA(t[n],e[n]))return!1;return!0}function HA(t,e){return At(t)?nf(t,e):At(e)?nf(e,t):t===e}function nf(t,e){return At(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function zA(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ui;(function(t){t.pop="pop",t.push="push"})(ui||(ui={}));var Br;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Br||(Br={}));function GA(t){if(!t)if(ks){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),jA(t)}const WA=/^[^#]+#/;function QA(t,e){return t.replace(WA,"#")+e}function YA(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Va=()=>({left:window.pageXOffset,top:window.pageYOffset});function XA(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=YA(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function sf(t,e){return(history.state?history.state.position-e:-1)+t}const ou=new Map;function JA(t,e){ou.set(t,e)}function ZA(t){const e=ou.get(t);return ou.delete(t),e}let ex=()=>location.protocol+"//"+location.host;function sv(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),tf(c,"")}return tf(n,t)+s+r}function tx(t,e,n,s){let r=[],i=[],o=null;const a=({state:d})=>{const g=sv(t,location),y=n.value,I=e.value;let x=0;if(d){if(n.value=g,e.value=d,o&&o===y){o=null;return}x=I?d.position-I.position:0}else s(g);r.forEach(C=>{C(n.value,y,{delta:x,type:ui.pop,direction:x?x>0?Br.forward:Br.back:Br.unknown})})};function c(){o=n.value}function u(d){r.push(d);const g=()=>{const y=r.indexOf(d);y>-1&&r.splice(y,1)};return i.push(g),g}function l(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:Va()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function rf(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Va():null}}function nx(t){const{history:e,location:n}=window,s={value:sv(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:ex()+t+c;try{e[l?"replaceState":"pushState"](u,"",d),r.value=u}catch(g){console.error(g),n[l?"replace":"assign"](d)}}function o(c,u){const l=he({},e.state,rf(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,l,!0),s.value=c}function a(c,u){const l=he({},r.value,e.state,{forward:c,scroll:Va()});i(l.current,l,!0);const h=he({},rf(s.value,c,null),{position:l.position+1},u);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function uD(t){t=GA(t);const e=nx(t),n=tx(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=he({location:"",base:t,go:s,createHref:QA.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function sx(t){return typeof t=="string"||t&&typeof t=="object"}function rv(t){return typeof t=="string"||typeof t=="symbol"}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},iv=Symbol("");var of;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(of||(of={}));function rr(t,e){return he(new Error,{type:t,[iv]:!0},e)}function Ht(t,e){return t instanceof Error&&iv in t&&(e==null||!!(t.type&e))}const af="[^/]+?",rx={sensitive:!1,strict:!1,start:!0,end:!0},ix=/[.+*?^${}()[\]/\\]/g;function ox(t,e){const n=he({},rx,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const l=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let h=0;h<u.length;h++){const d=u[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(r+="/"),r+=d.value.replace(ix,"\\$&"),g+=40;else if(d.type===1){const{value:y,repeatable:I,optional:x,regexp:C}=d;i.push({name:y,repeatable:I,optional:x});const L=C||af;if(L!==af){g+=10;try{new RegExp(`(${L})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${y}" (${L}): `+z.message)}}let k=I?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(k=x&&u.length<2?`(?:/${k})`:"/"+k),x&&(k+="?"),r+=k,g+=20,x&&(g+=-8),I&&(g+=-20),L===".*"&&(g+=-50)}l.push(g)}s.push(l)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const g=l[d]||"",y=i[d-1];h[y.name]=g&&y.repeatable?g.split("/"):g}return h}function c(u){let l="",h=!1;for(const d of t){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const g of d)if(g.type===0)l+=g.value;else if(g.type===1){const{value:y,repeatable:I,optional:x}=g,C=y in u?u[y]:"";if(At(C)&&!I)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const L=At(C)?C.join("/"):C;if(!L)if(x)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);l+=L}}return l||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function ax(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function cx(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=ax(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(cf(s))return 1;if(cf(r))return-1}return r.length-s.length}function cf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ux={type:0,value:""},lx=/[a-zA-Z0-9_]/;function hx(t){if(!t)return[[]];if(t==="/")return[[ux]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${u}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=s;break;case 1:c==="("?n=2:lx.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:n=3:l+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),r}function dx(t,e,n){const s=ox(hx(t.path),n),r=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function fx(t,e){const n=[],s=new Map;e=hf({strict:!1,end:!0,sensitive:!1},e);function r(l){return s.get(l)}function i(l,h,d){const g=!d,y=px(l);y.aliasOf=d&&d.record;const I=hf(e,l),x=[y];if("alias"in l){const k=typeof l.alias=="string"?[l.alias]:l.alias;for(const z of k)x.push(he({},y,{components:d?d.record.components:y.components,path:z,aliasOf:d?d.record:y}))}let C,L;for(const k of x){const{path:z}=k;if(h&&z[0]!=="/"){const ee=h.record.path,te=ee[ee.length-1]==="/"?"":"/";k.path=h.record.path+(z&&te+z)}if(C=dx(k,h,I),d?d.alias.push(C):(L=L||C,L!==C&&L.alias.push(C),g&&l.name&&!lf(C)&&o(l.name)),y.children){const ee=y.children;for(let te=0;te<ee.length;te++)i(ee[te],C,d&&d.children[te])}d=d||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&c(C)}return L?()=>{o(L)}:Vr}function o(l){if(rv(l)){const h=s.get(l);h&&(s.delete(l),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(l);h>-1&&(n.splice(h,1),l.record.name&&s.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return n}function c(l){let h=0;for(;h<n.length&&cx(l,n[h])>=0&&(l.record.path!==n[h].record.path||!ov(l,n[h]));)h++;n.splice(h,0,l),l.record.name&&!lf(l)&&s.set(l.record.name,l)}function u(l,h){let d,g={},y,I;if("name"in l&&l.name){if(d=s.get(l.name),!d)throw rr(1,{location:l});I=d.record.name,g=he(uf(h.params,d.keys.filter(L=>!L.optional).map(L=>L.name)),l.params&&uf(l.params,d.keys.map(L=>L.name))),y=d.stringify(g)}else if("path"in l)y=l.path,d=n.find(L=>L.re.test(y)),d&&(g=d.parse(y),I=d.record.name);else{if(d=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!d)throw rr(1,{location:l,currentLocation:h});I=d.record.name,g=he({},h.params,l.params),y=d.stringify(g)}const x=[];let C=d;for(;C;)x.unshift(C.record),C=C.parent;return{name:I,path:y,params:g,matched:x,meta:mx(x)}}return t.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function uf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function px(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:gx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function gx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function lf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function mx(t){return t.reduce((e,n)=>he(e,n.meta),{})}function hf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ov(t,e){return e.children.some(n=>n===t||ov(t,n))}const av=/#/g,yx=/&/g,vx=/\//g,wx=/=/g,Ix=/\?/g,cv=/\+/g,bx=/%5B/g,Ex=/%5D/g,uv=/%5E/g,Tx=/%60/g,lv=/%7B/g,_x=/%7C/g,hv=/%7D/g,Sx=/%20/g;function Ul(t){return encodeURI(""+t).replace(_x,"|").replace(bx,"[").replace(Ex,"]")}function Cx(t){return Ul(t).replace(lv,"{").replace(hv,"}").replace(uv,"^")}function au(t){return Ul(t).replace(cv,"%2B").replace(Sx,"+").replace(av,"%23").replace(yx,"%26").replace(Tx,"`").replace(lv,"{").replace(hv,"}").replace(uv,"^")}function Ax(t){return au(t).replace(wx,"%3D")}function xx(t){return Ul(t).replace(av,"%23").replace(Ix,"%3F")}function Dx(t){return t==null?"":xx(t).replace(vx,"%2F")}function Ho(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function kx(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(cv," "),o=i.indexOf("="),a=Ho(o<0?i:i.slice(0,o)),c=o<0?null:Ho(i.slice(o+1));if(a in e){let u=e[a];At(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function df(t){let e="";for(let n in t){const s=t[n];if(n=Ax(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(At(s)?s.map(i=>i&&au(i)):[s&&au(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Rx(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=At(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Nx=Symbol(""),ff=Symbol(""),Vl=Symbol(""),dv=Symbol(""),cu=Symbol("");function Tr(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function fn(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(rr(4,{from:n,to:e})):h instanceof Error?a(h):sx(h)?a(rr(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},u=t.call(s&&s.instances[r],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function lc(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Ox(a)){const u=(a.__vccOpts||a)[e];u&&r.push(fn(u,n,s,i,o))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=BA(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&fn(d,n,s,i,o)()}))}}return r}function Ox(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function pf(t){const e=Jt(Vl),n=Jt(dv),s=mt(()=>e.resolve(Ls(t.to))),r=mt(()=>{const{matched:c}=s.value,{length:u}=c,l=c[u-1],h=n.matched;if(!l||!h.length)return-1;const d=h.findIndex(sr.bind(null,l));if(d>-1)return d;const g=gf(c[u-2]);return u>1&&gf(l)===g&&h[h.length-1].path!==g?h.findIndex(sr.bind(null,c[u-2])):d}),i=mt(()=>r.value>-1&&Fx(n.params,s.value.params)),o=mt(()=>r.value>-1&&r.value===n.matched.length-1&&nv(n.params,s.value.params));function a(c={}){return Lx(c)?e[Ls(t.replace)?"replace":"push"](Ls(t.to)).catch(Vr):Promise.resolve()}return{route:s,href:mt(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Px=Xf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:pf,setup(t,{slots:e}){const n=li(pf(t)),{options:s}=Jt(Vl),r=mt(()=>({[mf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[mf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:mp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Mx=Px;function Lx(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Fx(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!At(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function gf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mf=(t,e,n)=>t??e??n,Ux=Xf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Jt(cu),r=mt(()=>t.route||s.value),i=Jt(ff,0),o=mt(()=>{let u=Ls(i);const{matched:l}=r.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=mt(()=>r.value.matched[o.value]);Ji(ff,mt(()=>o.value+1)),Ji(Nx,a),Ji(cu,r);const c=ew();return Zi(()=>[c.value,a.value,t.name],([u,l,h],[d,g,y])=>{l&&(l.instances[h]=u,g&&g!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=g.leaveGuards),l.updateGuards.size||(l.updateGuards=g.updateGuards))),u&&l&&(!g||!sr(l,g)||!d)&&(l.enterCallbacks[h]||[]).forEach(I=>I(u))},{flush:"post"}),()=>{const u=r.value,l=t.name,h=a.value,d=h&&h.components[l];if(!d)return yf(n.default,{Component:d,route:u});const g=h.props[l],y=g?g===!0?u.params:typeof g=="function"?g(u):g:null,x=mp(d,he({},y,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return yf(n.default,{Component:x,route:u})||x}}});function yf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vx=Ux;function lD(t){const e=fx(t.routes,t),n=t.parseQuery||kx,s=t.stringifyQuery||df,r=t.history,i=Tr(),o=Tr(),a=Tr(),c=tw(hn);let u=hn;ks&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=cc.bind(null,b=>""+b),h=cc.bind(null,Dx),d=cc.bind(null,Ho);function g(b,M){let N,$;return rv(b)?(N=e.getRecordMatcher(b),$=M):$=b,e.addRoute($,N)}function y(b){const M=e.getRecordMatcher(b);M&&e.removeRoute(M)}function I(){return e.getRoutes().map(b=>b.record)}function x(b){return!!e.getRecordMatcher(b)}function C(b,M){if(M=he({},M||c.value),typeof b=="string"){const f=uc(n,b,M.path),p=e.resolve({path:f.path},M),v=r.createHref(f.fullPath);return he(f,p,{params:d(p.params),hash:Ho(f.hash),redirectedFrom:void 0,href:v})}let N;if("path"in b)N=he({},b,{path:uc(n,b.path,M.path).path});else{const f=he({},b.params);for(const p in f)f[p]==null&&delete f[p];N=he({},b,{params:h(b.params)}),M.params=h(M.params)}const $=e.resolve(N,M),ae=b.hash||"";$.params=l(d($.params));const Te=qA(s,he({},b,{hash:Cx(ae),path:$.path})),se=r.createHref(Te);return he({fullPath:Te,hash:ae,query:s===df?Rx(b.query):b.query||{}},$,{redirectedFrom:void 0,href:se})}function L(b){return typeof b=="string"?uc(n,b,c.value.path):he({},b)}function k(b,M){if(u!==b)return rr(8,{from:M,to:b})}function z(b){return de(b)}function ee(b){return z(he(L(b),{replace:!0}))}function te(b){const M=b.matched[b.matched.length-1];if(M&&M.redirect){const{redirect:N}=M;let $=typeof N=="function"?N(b):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=L($):{path:$},$.params={}),he({query:b.query,hash:b.hash,params:"path"in $?{}:b.params},$)}}function de(b,M){const N=u=C(b),$=c.value,ae=b.state,Te=b.force,se=b.replace===!0,f=te(N);if(f)return de(he(L(f),{state:typeof f=="object"?he({},ae,f.state):ae,force:Te,replace:se}),M||N);const p=N;p.redirectedFrom=M;let v;return!Te&&KA(s,$,N)&&(v=rr(16,{to:p,from:$}),Ln($,$,!0,!1)),(v?Promise.resolve(v):xt(p,$)).catch(w=>Ht(w)?Ht(w,2)?w:wt(w):ve(w,p,$)).then(w=>{if(w){if(Ht(w,2))return de(he({replace:se},L(w.to),{state:typeof w.to=="object"?he({},ae,w.to.state):ae,force:Te}),M||p)}else w=on(p,$,!0,se,ae);return gt(p,$,w),w})}function Ue(b,M){const N=k(b,M);return N?Promise.reject(N):Promise.resolve()}function xt(b,M){let N;const[$,ae,Te]=Bx(b,M);N=lc($.reverse(),"beforeRouteLeave",b,M);for(const f of $)f.leaveGuards.forEach(p=>{N.push(fn(p,b,M))});const se=Ue.bind(null,b,M);return N.push(se),Ss(N).then(()=>{N=[];for(const f of i.list())N.push(fn(f,b,M));return N.push(se),Ss(N)}).then(()=>{N=lc(ae,"beforeRouteUpdate",b,M);for(const f of ae)f.updateGuards.forEach(p=>{N.push(fn(p,b,M))});return N.push(se),Ss(N)}).then(()=>{N=[];for(const f of b.matched)if(f.beforeEnter&&!M.matched.includes(f))if(At(f.beforeEnter))for(const p of f.beforeEnter)N.push(fn(p,b,M));else N.push(fn(f.beforeEnter,b,M));return N.push(se),Ss(N)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),N=lc(Te,"beforeRouteEnter",b,M),N.push(se),Ss(N))).then(()=>{N=[];for(const f of o.list())N.push(fn(f,b,M));return N.push(se),Ss(N)}).catch(f=>Ht(f,8)?f:Promise.reject(f))}function gt(b,M,N){for(const $ of a.list())$(b,M,N)}function on(b,M,N,$,ae){const Te=k(b,M);if(Te)return Te;const se=M===hn,f=ks?history.state:{};N&&($||se?r.replace(b.fullPath,he({scroll:se&&f&&f.scroll},ae)):r.push(b.fullPath,ae)),c.value=b,Ln(b,M,N,se),wt()}let Dt;function ws(){Dt||(Dt=r.listen((b,M,N)=>{if(!Oi.listening)return;const $=C(b),ae=te($);if(ae){de(he(ae,{replace:!0}),$).catch(Vr);return}u=$;const Te=c.value;ks&&JA(sf(Te.fullPath,N.delta),Va()),xt($,Te).catch(se=>Ht(se,12)?se:Ht(se,2)?(de(se.to,$).then(f=>{Ht(f,20)&&!N.delta&&N.type===ui.pop&&r.go(-1,!1)}).catch(Vr),Promise.reject()):(N.delta&&r.go(-N.delta,!1),ve(se,$,Te))).then(se=>{se=se||on($,Te,!1),se&&(N.delta&&!Ht(se,8)?r.go(-N.delta,!1):N.type===ui.pop&&Ht(se,20)&&r.go(-1,!1)),gt($,Te,se)}).catch(Vr)}))}let Mn=Tr(),fr=Tr(),xe;function ve(b,M,N){wt(b);const $=fr.list();return $.length?$.forEach(ae=>ae(b,M,N)):console.error(b),Promise.reject(b)}function fe(){return xe&&c.value!==hn?Promise.resolve():new Promise((b,M)=>{Mn.add([b,M])})}function wt(b){return xe||(xe=!b,ws(),Mn.list().forEach(([M,N])=>b?N(b):M()),Mn.reset()),b}function Ln(b,M,N,$){const{scrollBehavior:ae}=t;if(!ks||!ae)return Promise.resolve();const Te=!N&&ZA(sf(b.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return qf().then(()=>ae(b,M,Te)).then(se=>se&&XA(se)).catch(se=>ve(se,b,M))}const It=b=>r.go(b);let nt;const Is=new Set,Oi={currentRoute:c,listening:!0,addRoute:g,removeRoute:y,hasRoute:x,getRoutes:I,resolve:C,options:t,push:z,replace:ee,go:It,back:()=>It(-1),forward:()=>It(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:fr.add,isReady:fe,install(b){const M=this;b.component("RouterLink",Mx),b.component("RouterView",Vx),b.config.globalProperties.$router=M,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ls(c)}),ks&&!nt&&c.value===hn&&(nt=!0,z(r.location).catch(ae=>{}));const N={};for(const ae in hn)N[ae]=mt(()=>c.value[ae]);b.provide(Vl,M),b.provide(dv,li(N)),b.provide(cu,c);const $=b.unmount;Is.add(b),b.unmount=function(){Is.delete(b),Is.size<1&&(u=hn,Dt&&Dt(),Dt=null,c.value=hn,nt=!1,xe=!1),$()}}};return Oi}function Ss(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Bx(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>sr(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>sr(u,c))||r.push(c))}return[n,s,r]}export{nD as A,Zi as B,Hx as C,Jx as D,Xx as E,Gt as F,gn as G,aD as K,iD as O,oD as U,Wx as a,fp as b,zx as c,Gx as d,li as e,sD as f,eD as g,Xf as h,nE as i,qx as j,Zw as k,it as l,Zx as m,nI as n,Xw as o,lD as p,uD as q,Kx as r,Yx as s,$x as t,Ls as u,rD as v,jx as w,cD as x,Qx as y,ew as z};
