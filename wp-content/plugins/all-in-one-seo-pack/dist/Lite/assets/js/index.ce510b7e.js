import{t as Ae}from"./translations.6e7b2383.js";import{l as ve,m as Be}from"./default-i18n.3881921e.js";import{E as Te}from"./links.6d4c0bdb.js";import{c as Oe}from"./constants.1758f66e.js";var ye={exports:{}};function me(){}me.prototype={on:function(n,f,u){var y=this.e||(this.e={});return(y[n]||(y[n]=[])).push({fn:f,ctx:u}),this},once:function(n,f,u){var y=this;function S(){y.off(n,S),f.apply(u,arguments)}return S._=f,this.on(n,S,u)},emit:function(n){var f=[].slice.call(arguments,1),u=((this.e||(this.e={}))[n]||[]).slice(),y=0,S=u.length;for(y;y<S;y++)u[y].fn.apply(u[y].ctx,f);return this},off:function(n,f){var u=this.e||(this.e={}),y=u[n],S=[];if(y&&f)for(var i=0,r=y.length;i<r;i++)y[i].fn!==f&&y[i].fn._!==f&&S.push(y[i]);return S.length?u[n]=S:delete u[n],this}};ye.exports=me;ye.exports.TinyEmitter=me;var qe=ye.exports,ze=qe,Ve=new ze;const ie=ve(Ve);var Fe={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(n,f){(function(u,y){n.exports=y()})(Be,function(){return y={686:function(i,c,t){t.d(c,{default:function(){return ne}});var c=t(279),p=t.n(c),c=t(370),h=t.n(c),c=t(817),b=t.n(c);function E(o){try{return document.execCommand(o)}catch{return}}var F=function(o){return o=b()(o),E("cut"),o};function L(g,d){var l,m,g=(l=g,m=document.documentElement.getAttribute("dir")==="rtl",(g=document.createElement("textarea")).style.fontSize="12pt",g.style.border="0",g.style.padding="0",g.style.margin="0",g.style.position="absolute",g.style[m?"right":"left"]="-9999px",m=window.pageYOffset||document.documentElement.scrollTop,g.style.top="".concat(m,"px"),g.setAttribute("readonly",""),g.value=l,g);return d.container.appendChild(g),d=b()(g),E("copy"),g.remove(),d}var N=function(o){var d=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body},l="";return typeof o=="string"?l=L(o,d):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?l=L(o.value,d):(l=b()(o),E("copy")),l};function q(o){return(q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(o)}var z=function(){var m=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},l=m.action,o=l===void 0?"copy":l,d=m.container,l=m.target,m=m.text;if(o!=="copy"&&o!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(l!==void 0){if(!l||q(l)!=="object"||l.nodeType!==1)throw new Error('Invalid "target" value, use a valid Element');if(o==="copy"&&l.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(o==="cut"&&(l.hasAttribute("readonly")||l.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}return m?N(m,{container:d}):l?o==="cut"?F(l):N(l,{container:d}):void 0};function I(o){return(I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(o)}function D(o,d){for(var l=0;l<d.length;l++){var m=d[l];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(o,m.key,m)}}function M(o,d){return(M=Object.setPrototypeOf||function(l,m){return l.__proto__=m,l})(o,d)}function te(o){var d=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}();return function(){var l,m=Q(o);return l=d?(l=Q(this).constructor,Reflect.construct(m,arguments,l)):m.apply(this,arguments),m=this,!(l=l)||I(l)!=="object"&&typeof l!="function"?function(g){if(g!==void 0)return g;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(m):l}}function Q(o){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(d){return d.__proto__||Object.getPrototypeOf(d)})(o)}function $(o,d){if(o="data-clipboard-".concat(o),d.hasAttribute(o))return d.getAttribute(o)}var ne=function(){(function(v,x){if(typeof x!="function"&&x!==null)throw new TypeError("Super expression must either be null or a function");v.prototype=Object.create(x&&x.prototype,{constructor:{value:v,writable:!0,configurable:!0}}),x&&M(v,x)})(g,p());var o,d,l,m=te(g);function g(v,x){var k;return function(R){if(!(R instanceof g))throw new TypeError("Cannot call a class as a function")}(this),(k=m.call(this)).resolveOptions(x),k.listenClick(v),k}return o=g,l=[{key:"copy",value:function(v){var x=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{container:document.body};return N(v,x)}},{key:"cut",value:function(v){return F(v)}},{key:"isSupported",value:function(){var v=0<arguments.length&&arguments[0]!==void 0?arguments[0]:["copy","cut"],v=typeof v=="string"?[v]:v,x=!!document.queryCommandSupported;return v.forEach(function(k){x=x&&!!document.queryCommandSupported(k)}),x}}],(d=[{key:"resolveOptions",value:function(){var v=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof v.action=="function"?v.action:this.defaultAction,this.target=typeof v.target=="function"?v.target:this.defaultTarget,this.text=typeof v.text=="function"?v.text:this.defaultText,this.container=I(v.container)==="object"?v.container:document.body}},{key:"listenClick",value:function(v){var x=this;this.listener=h()(v,"click",function(k){return x.onClick(k)})}},{key:"onClick",value:function(R){var x=R.delegateTarget||R.currentTarget,k=this.action(x)||"copy",R=z({action:k,container:this.container,target:this.target(x),text:this.text(x)});this.emit(R?"success":"error",{action:k,text:R,trigger:x,clearSelection:function(){x&&x.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(v){return $("action",v)}},{key:"defaultTarget",value:function(v){if(v=$("target",v),v)return document.querySelector(v)}},{key:"defaultText",value:function(v){return $("text",v)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&D(o.prototype,d),l&&D(o,l),g}()},828:function(i){var r;typeof Element>"u"||Element.prototype.matches||((r=Element.prototype).matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector),i.exports=function(t,p){for(;t&&t.nodeType!==9;){if(typeof t.matches=="function"&&t.matches(p))return t;t=t.parentNode}}},438:function(i,r,t){var p=t(828);function h(c,b,E,F,L){var N=(function(q,z,I,D){return function(M){M.delegateTarget=p(M.target,z),M.delegateTarget&&D.call(q,M)}}).apply(this,arguments);return c.addEventListener(E,N,L),{destroy:function(){c.removeEventListener(E,N,L)}}}i.exports=function(c,b,E,F,L){return typeof c.addEventListener=="function"?h.apply(null,arguments):typeof E=="function"?h.bind(null,document).apply(null,arguments):(typeof c=="string"&&(c=document.querySelectorAll(c)),Array.prototype.map.call(c,function(N){return h(N,b,E,F,L)}))}},879:function(i,r){r.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},r.nodeList=function(t){var p=Object.prototype.toString.call(t);return t!==void 0&&(p==="[object NodeList]"||p==="[object HTMLCollection]")&&"length"in t&&(t.length===0||r.node(t[0]))},r.string=function(t){return typeof t=="string"||t instanceof String},r.fn=function(t){return Object.prototype.toString.call(t)==="[object Function]"}},370:function(i,r,t){var p=t(879),h=t(438);i.exports=function(c,b,E){if(!c&&!b&&!E)throw new Error("Missing required arguments");if(!p.string(b))throw new TypeError("Second argument must be a String");if(!p.fn(E))throw new TypeError("Third argument must be a Function");if(p.node(c))return z=b,I=E,(q=c).addEventListener(z,I),{destroy:function(){q.removeEventListener(z,I)}};if(p.nodeList(c))return F=c,L=b,N=E,Array.prototype.forEach.call(F,function(D){D.addEventListener(L,N)}),{destroy:function(){Array.prototype.forEach.call(F,function(D){D.removeEventListener(L,N)})}};if(p.string(c))return c=c,b=b,E=E,h(document.body,c,b,E);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var F,L,N,q,z,I}},817:function(i){i.exports=function(r){var t,p=r.nodeName==="SELECT"?(r.focus(),r.value):r.nodeName==="INPUT"||r.nodeName==="TEXTAREA"?((t=r.hasAttribute("readonly"))||r.setAttribute("readonly",""),r.select(),r.setSelectionRange(0,r.value.length),t||r.removeAttribute("readonly"),r.value):(r.hasAttribute("contenteditable")&&r.focus(),p=window.getSelection(),(t=document.createRange()).selectNodeContents(r),p.removeAllRanges(),p.addRange(t),p.toString());return p}},279:function(i){function r(){}r.prototype={on:function(t,p,h){var c=this.e||(this.e={});return(c[t]||(c[t]=[])).push({fn:p,ctx:h}),this},once:function(t,p,h){var c=this;function b(){c.off(t,b),p.apply(h,arguments)}return b._=p,this.on(t,b,h)},emit:function(t){for(var p=[].slice.call(arguments,1),h=((this.e||(this.e={}))[t]||[]).slice(),c=0,b=h.length;c<b;c++)h[c].fn.apply(h[c].ctx,p);return this},off:function(t,p){var h=this.e||(this.e={}),c=h[t],b=[];if(c&&p)for(var E=0,F=c.length;E<F;E++)c[E].fn!==p&&c[E].fn._!==p&&b.push(c[E]);return b.length?h[t]=b:delete h[t],this}},i.exports=r,i.exports.TinyEmitter=r}},S={},u.n=function(i){var r=i&&i.__esModule?function(){return i.default}:function(){return i};return u.d(r,{a:r}),r},u.d=function(i,r){for(var t in r)u.o(r,t)&&!u.o(i,t)&&Object.defineProperty(i,t,{enumerable:!0,get:r[t]})},u.o=function(i,r){return Object.prototype.hasOwnProperty.call(i,r)},u(686).default;function u(i){if(S[i])return S[i].exports;var r=S[i]={exports:{}};return y[i](r,r.exports,u),r.exports}var y,S})})(Fe);var He=Fe.exports;const Le=ve(He),ee={autoSetContainer:!1,appendToBody:!0},Ue={install:function(n){n.config.globalProperties.$clipboardConfig=ee,n.config.globalProperties.$copyText=function(f,u){return new Promise(function(y,S){const i=document.createElement("button"),r=new Le(i,{text:function(){return f},action:function(){return"copy"},container:typeof u=="object"?u:document.body});r.on("success",function(t){r.destroy(),y(t)}),r.on("error",function(t){r.destroy(),S(t)}),ee.appendToBody&&document.body.appendChild(i),i.click(),ee.appendToBody&&document.body.removeChild(i)})},n.directive("clipboard",{beforeMount:function(f,u){if(u.arg==="success")f._vClipboard_success=u.value;else if(u.arg==="error")f._vClipboard_error=u.value;else{const y=new Le(f,{text:function(){return u.value},action:function(){return u.arg==="cut"?"cut":"copy"},container:ee.autoSetContainer?f:void 0});y.on("success",function(S){const i=f._vClipboard_success;i&&i(S)}),y.on("error",function(S){const i=f._vClipboard_error;i&&i(S)}),f._vClipboard=y}},updated:function(f,u){u.arg==="success"?f._vClipboard_success=u.value:u.arg==="error"?f._vClipboard_error=u.value:(f._vClipboard.text=function(){return u.value},f._vClipboard.action=function(){return u.arg==="cut"?"cut":"copy"})},unmounted:function(f,u){u.arg==="success"?delete f._vClipboard_success:u.arg==="error"?delete f._vClipboard_error:(f._vClipboard.destroy(),delete f._vClipboard)}})},config:ee};var ke={exports:{}};/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */(function(n,f){(function(u,y){n.exports=y()})(Be,function(){function u(s){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?u=function(e){return typeof e}:u=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(s)}function y(){return y=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var w in a)Object.prototype.hasOwnProperty.call(a,w)&&(s[w]=a[w])}return s},y.apply(this,arguments)}var S=4,i=.001,r=1e-7,t=10,p=11,h=1/(p-1),c=typeof Float32Array=="function";function b(s,e){return 1-3*e+3*s}function E(s,e){return 3*e-6*s}function F(s){return 3*s}function L(s,e,a){return((b(e,a)*s+E(e,a))*s+F(e))*s}function N(s,e,a){return 3*b(e,a)*s*s+2*E(e,a)*s+F(e)}function q(s,e,a,w,A){var T,_,Y=0;do _=e+(a-e)/2,T=L(_,w,A)-s,T>0?a=_:e=_;while(Math.abs(T)>r&&++Y<t);return _}function z(s,e,a,w){for(var A=0;A<S;++A){var T=N(e,a,w);if(T===0)return e;var _=L(e,a,w)-s;e-=_/T}return e}function I(s){return s}var D=function(e,a,w,A){if(!(0<=e&&e<=1&&0<=w&&w<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===a&&w===A)return I;for(var T=c?new Float32Array(p):new Array(p),_=0;_<p;++_)T[_]=L(_*h,e,w);function Y(V){for(var j=0,B=1,G=p-1;B!==G&&T[B]<=V;++B)j+=h;--B;var J=(V-T[B])/(T[B+1]-T[B]),H=j+J*h,K=N(H,e,w);return K>=i?z(V,H,e,w):K===0?H:q(V,j,j+h,e,w)}return function(j){return j===0?0:j===1?1:L(Y(j),a,A)}},M={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},te=!1;try{var Q=Object.defineProperty({},"passive",{get:function(){te=!0}});window.addEventListener("test",null,Q)}catch{}var $={$:function(e){return typeof e!="string"?e:document.querySelector(e)},on:function(e,a,w){var A=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{passive:!1};a instanceof Array||(a=[a]);for(var T=0;T<a.length;T++)e.addEventListener(a[T],w,te?A:!1)},off:function(e,a,w){a instanceof Array||(a=[a]);for(var A=0;A<a.length;A++)e.removeEventListener(a[A],w)},cumulativeOffset:function(e){var a=0,w=0;do a+=e.offsetTop||0,w+=e.offsetLeft||0,e=e.offsetParent;while(e);return{top:a,left:w}}},ne=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],o={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function d(s){o=y({},o,s)}var l=function(){var e,a,w,A,T,_,Y,V,j,B,G,J,H,K,ae,re,oe,ce,se,U,le,fe,de,be=function(O){V&&(de=O,U=!0)},he,ue,pe,X;function $e(P){var O=P.scrollTop;return P.tagName.toLowerCase()==="body"&&(O=O||document.documentElement.scrollTop),O}function je(P){var O=P.scrollLeft;return P.tagName.toLowerCase()==="body"&&(O=O||document.documentElement.scrollLeft),O}function we(){le=$.cumulativeOffset(a),fe=$.cumulativeOffset(e),J&&(ae=fe.left-le.left+_,ce=ae-K),H&&(oe=fe.top-le.top+_,se=oe-re)}function Ee(P){if(U)return Se();ue||(ue=P),T||we(),pe=P-ue,X=Math.min(pe/w,1),X=he(X),xe(a,re+se*X,K+ce*X),pe<w?window.requestAnimationFrame(Ee):Se()}function Se(){U||xe(a,oe,ae),ue=!1,$.off(a,ne,be),U&&G&&G(de,e),!U&&B&&B(e)}function xe(P,O,C){H&&(P.scrollTop=O),J&&(P.scrollLeft=C),P.tagName.toLowerCase()==="body"&&(H&&(document.documentElement.scrollTop=O),J&&(document.documentElement.scrollLeft=C))}function De(P,O){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(u(O)==="object"?C=O:typeof O=="number"&&(C.duration=O),e=$.$(P),!e)return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+P);if(a=$.$(C.container||o.container),w=C.hasOwnProperty("duration")?C.duration:o.duration,T=C.hasOwnProperty("lazy")?C.lazy:o.lazy,A=C.easing||o.easing,_=C.hasOwnProperty("offset")?C.offset:o.offset,Y=C.hasOwnProperty("force")?C.force!==!1:o.force,V=C.hasOwnProperty("cancelable")?C.cancelable!==!1:o.cancelable,j=C.onStart||o.onStart,B=C.onDone||o.onDone,G=C.onCancel||o.onCancel,J=C.x===void 0?o.x:C.x,H=C.y===void 0?o.y:C.y,typeof _=="function"&&(_=_(e,a)),K=je(a),re=$e(a),we(),U=!1,!Y){var Ie=a.tagName.toLowerCase()==="body"?document.documentElement.clientHeight||window.innerHeight:a.offsetHeight,Ce=re,Me=Ce+Ie,_e=oe-_,Re=_e+e.offsetHeight;if(_e>=Ce&&Re<=Me){B&&B(e);return}}if(j&&j(e),!se&&!ce){B&&B(e);return}return typeof A=="string"&&(A=M[A]||M.ease),he=D.apply(D,A),$.on(a,ne,be,{passive:!0}),window.requestAnimationFrame(Ee),function(){de=null,U=!0}}return De},m=l(),g=[];function v(s){for(var e=0;e<g.length;++e)if(g[e].el===s)return g.splice(e,1),!0;return!1}function x(s){for(var e=0;e<g.length;++e)if(g[e].el===s)return g[e]}function k(s){var e=x(s);return e||(g.push(e={el:s,binding:{}}),e)}function R(s){var e=k(this).binding;if(e.value){if(s.preventDefault(),typeof e.value=="string")return m(e.value);m(e.value.el||e.value.element,e.value)}}var W={bind:function(e,a){k(e).binding=a,$.on(e,"click",R)},unbind:function(e){v(e),$.off(e,"click",R)},update:function(e,a){k(e).binding=a}},Z={bind:W.bind,unbind:W.unbind,update:W.update,beforeMount:W.bind,unmounted:W.unbind,updated:W.update,scrollTo:m,bindings:g},ge=function(e,a){a&&d(a),e.directive("scroll-to",Z);var w=e.config.globalProperties||e.prototype;w.$scrollTo=Z.scrollTo};return typeof window<"u"&&window.Vue&&(window.VueScrollTo=Z,window.VueScrollTo.setDefaults=d,window.VueScrollTo.scroller=l,window.Vue.use&&window.Vue.use(ge)),Z.install=ge,Z})})(ke);var We=ke.exports;const Ye=ve(We),Je=n=>{const f=/[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/,u=/[\uDC00-\uDFFF]/;return n?u.test(n)||f.test(n):!1},Pe=n=>!n||n.nodeName!=="IMG"||n.className.indexOf("emoji")===-1||!Je(n.getAttribute("alt"))?null:n,Ne=n=>{n.forEach(f=>{const u=document.createTextNode(f.getAttribute("alt"));f.parentNode.classList.add("wp-exclude-emoji"),f.parentNode.replaceChild(u,f)})},Ke=n=>{!n||n.nodeName!=="DIV"||n.className.indexOf("ql-editor")===-1||n.querySelectorAll(".ql-editor > p").forEach(f=>{f.classList.add("wp-exclude-emoji")})},Qe=()=>{const n=i=>{let r=i.length,t,p,h;const c=[];for(;r--;)for(t=i[r].addedNodes,p=t.length;p--;){h=t[p];const b=Pe(h);b&&(Ke(h),c.push(b))}Ne(c)},f=new MutationObserver(n);document.querySelectorAll(".aioseo-app, .vue-portal-target").forEach(i=>{f.observe(i,{childList:!0,subtree:!0})});const y=document.querySelectorAll(".aioseo-app img.emoji"),S=[];y.forEach(i=>{const r=Pe(i);r&&S.push(r)}),Ne(S)};document.addEventListener("DOMContentLoaded",Qe);window.aioseo=window.aioseo||{};window.aioseoBus=window.aioseoBus||{$on:(...n)=>ie.on(...n),$once:(...n)=>ie.once(...n),$off:(...n)=>ie.off(...n),$emit:(...n)=>ie.emit(...n)};window.__aioseoDynamicImportPreload__=n=>`${window.aioseo.urls.publicPath||"/"}dist/Lite/assets/${n}`;const tt=n=>(n.use(Ue),n.use(Ye,{container:"body",duration:1e3,easing:"ease-in-out",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),n.provide("$constants",Oe),n.provide("$isPro","Lite".toLowerCase()==="pro"),n.provide("$td","all-in-one-seo-pack"),n.provide("$tdPro","aioseo-pro"),n.provide("$links",Te),n.provide("$t",Ae),n.config.globalProperties.$constants=Oe,n.config.globalProperties.$isPro="Lite".toLowerCase()==="pro",n.config.globalProperties.$td="all-in-one-seo-pack",n.config.globalProperties.$tdPro="aioseo-pro",n.$links=n.config.globalProperties.$links=Te,n.$t=n.config.globalProperties.$t=Ae,n);export{ie as e,tt as l};
