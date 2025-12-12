(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},79222,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(22016),o=e.i(5766);let n=(0,r.createContext)(void 0);e.s(["FavoritesProvider",0,({children:e})=>{let[s,i]=(0,r.useState)([]),[l,u]=(0,r.useState)(!0);(0,r.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/favorites/load"),t=await e.json();console.log("favorites data:",t.favorites),i(t.favorites||[])}catch(e){console.error("Failed to load favorites",e)}finally{u(!1)}})()},[]);let c=(0,r.useCallback)((e,t)=>s.some(r=>r.productId===e&&r.variationId===(t??null)),[s]),d=async(e,r)=>{try{let n=await fetch("/api/favorites/update",{method:"POST",body:JSON.stringify({productId:e.id,variationId:r?.id}),headers:{"Content-Type":"application/json"}});if(n.ok){let e=await n.json();i(t=>[...t,e.favorite]),o.default.success((0,t.jsxs)("span",{className:"text-sm",children:["Додано до обраного."," ",(0,t.jsx)(a.default,{href:"/favorites",className:"underline text-blue-600 ml-1",children:"Перейти"})]}))}}catch(e){console.error("Failed to add to favorites",e)}},f=async(e,t)=>{c(e.id,t?.id)?await p(e.id,t?.id):await d(e,t)},p=async(e,r)=>{try{let a=`/api/favorites/update?productId=${e}${r?`&variationId=${r}`:""}`;(await fetch(a,{method:"DELETE"})).ok&&(i(t=>t.filter(t=>t.productId!==e||t.variationId!==(r??null))),o.default.success((0,t.jsx)("span",{className:"text-sm",children:"Видалено з обраного"})))}catch(e){console.error("Failed to remove from favorites",e)}};return(0,t.jsx)(n.Provider,{value:{favorites:s,loading:l,isFavorite:c,toggleFavorite:e=>{c(e.id)?p(e.id):d(e)},addToFavorites:d,removeFromFavorites:p,handleFavoritesAction:f,hasFavorites:s.length>0},children:e})},"useFavorites",0,()=>{let e=(0,r.useContext)(n);if(!e)throw Error("useFavorites must be used within a FavoritesProvider");return e}])},5766,e=>{"use strict";let t,r;var a,o=e.i(71645);let n={data:""},s=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,i=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,u=(e,t)=>{let r="",a="",o="";for(let n in e){let s=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+s+";":a+="f"==n[1]?u(s,n):n+"{"+u(s,"k"==n[1]?"":t)+"}":"object"==typeof s?a+=u(s,t?t.replace(/([^,])+/g,e=>n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=s&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(n,s):n+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},c={},d=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+d(e[r]);return t}return e};function f(e){let t,r,a=this||{},o=e.call?e(a.p):e;return((e,t,r,a,o)=>{var n;let f=d(e),p=c[f]||(c[f]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(f));if(!c[p]){let t=f!==e?e:(e=>{let t,r,a=[{}];for(;t=s.exec(e.replace(i,""));)t[4]?a.shift():t[3]?(r=t[3].replace(l," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(l," ").trim();return a[0]})(e);c[p]=u(o?{["@keyframes "+p]:t}:t,r?"":"."+p)}let m=r&&c.g?c.g:null;return r&&(c.g=c[p]),n=c[p],m?t.data=t.data.replace(m,n):-1===t.data.indexOf(n)&&(t.data=a?n+t.data:t.data+n),p})(o.unshift?o.raw?(t=[].slice.call(arguments,1),r=a.p,o.reduce((e,a,o)=>{let n=t[o];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+a+(null==n?"":n)},"")):o.reduce((e,t)=>Object.assign(e,t&&t.call?t(a.p):t),{}):o,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n})(a.target),a.g,a.o,a.k)}f.bind({g:1});let p,m,h,y=f.bind({k:1});function g(e,t){let r=this||{};return function(){let a=arguments;function o(n,s){let i=Object.assign({},n),l=i.className||o.className;r.p=Object.assign({theme:m&&m()},i),r.o=/ *go\d+/.test(l),i.className=f.apply(r,a)+(l?" "+l:""),t&&(i.ref=s);let u=e;return e[0]&&(u=i.as||e,delete i.as),h&&u[0]&&h(i),p(u,i)}return t?t(o):o}}var v=(e,t)=>"function"==typeof e?e(t):e,b=(t=0,()=>(++t).toString()),x=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},w=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return w(e,{type:+!!e.toasts.find(e=>e.id===r.id),toast:r});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},P=[],E={toasts:[],pausedAt:void 0},j=e=>{E=w(E,e),P.forEach(e=>{e(E)})},I={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},C=(e={})=>{let[t,r]=(0,o.useState)(E),a=(0,o.useRef)(E);(0,o.useEffect)(()=>(a.current!==E&&r(E),P.push(r),()=>{let e=P.indexOf(r);e>-1&&P.splice(e,1)}),[]);let n=t.toasts.map(t=>{var r,a,o;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||I[t.type],style:{...e.style,...null==(o=e[t.type])?void 0:o.style,...t.style}}});return{...t,toasts:n}},S=e=>(t,r)=>{let a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||b()}))(t,e,r);return j({type:2,toast:a}),a.id},O=(e,t)=>S("blank")(e,t);O.error=S("error"),O.success=S("success"),O.loading=S("loading"),O.custom=S("custom"),O.dismiss=e=>{j({type:3,toastId:e})},O.remove=e=>j({type:4,toastId:e}),O.promise=(e,t,r)=>{let a=O.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let o=t.success?v(t.success,e):void 0;return o?O.success(o,{id:a,...r,...null==r?void 0:r.success}):O.dismiss(a),e}).catch(e=>{let o=t.error?v(t.error,e):void 0;o?O.error(o,{id:a,...r,...null==r?void 0:r.error}):O.dismiss(a)}),e};var T=(e,t)=>{j({type:1,toast:{id:e,height:t}})},_=()=>{j({type:5,time:Date.now()})},$=new Map,N=1e3,k=e=>{let{toasts:t,pausedAt:r}=C(e);(0,o.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&O.dismiss(t.id);return}return setTimeout(()=>O.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,o.useCallback)(()=>{r&&j({type:6,time:Date.now()})},[r]),n=(0,o.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:n}=r||{},s=t.filter(t=>(t.position||n)===(e.position||n)&&t.height),i=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<i&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return(0,o.useEffect)(()=>{t.forEach(e=>{if(e.dismissed)((e,t=N)=>{if($.has(e))return;let r=setTimeout(()=>{$.delete(e),j({type:4,toastId:e})},t);$.set(e,r)})(e.id,e.removeDelay);else{let t=$.get(e.id);t&&(clearTimeout(t),$.delete(e.id))}})},[t]),{toasts:t,handlers:{updateHeight:T,startPause:_,endPause:a,calculateOffset:n}}},L=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,A=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,F=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,M=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${F} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,D=g("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,U=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,z=g("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,K=g("div")`
  position: absolute;
`,H=g("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,q=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=g("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${q} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(J,null,t):t:"blank"===r?null:o.createElement(H,null,o.createElement(D,{...a}),"loading"!==r&&o.createElement(K,null,"error"===r?o.createElement(M,{...a}):o.createElement(z,{...a})))},Q=g("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,W=g("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=o.memo(({toast:e,position:t,style:r,children:a})=>{let n=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[a,o]=x()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${y(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},s=o.createElement(V,{toast:e}),i=o.createElement(W,{...e.ariaProps},v(e.message,e));return o.createElement(Q,{className:e.className,style:{...n,...r,...e.style}},"function"==typeof a?a({icon:s,message:i}):o.createElement(o.Fragment,null,s,i))});a=o.createElement,u.p=void 0,p=a,m=void 0,h=void 0;var Z=({id:e,className:t,style:r,onHeightUpdate:a,children:n})=>{let s=o.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:s,className:t,style:r},n)},G=f`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Y=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:n,containerStyle:s,containerClassName:i})=>{let{toasts:l,handlers:u}=k(r);return o.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...s},className:i,onMouseEnter:u.startPause,onMouseLeave:u.endPause},l.map(r=>{let s,i,l=r.position||t,c=u.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}),d=(s=l.includes("top"),i=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:x()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...i});return o.createElement(Z,{id:r.id,key:r.id,onHeightUpdate:u.updateHeight,className:r.visible?G:"",style:d},"custom"===r.type?v(r.message,r):n?n(r):o.createElement(X,{toast:r,position:l}))}))};e.s(["CheckmarkIcon",()=>z,"ErrorIcon",()=>M,"LoaderIcon",()=>D,"ToastBar",()=>X,"ToastIcon",()=>V,"Toaster",()=>Y,"default",()=>O,"resolveValue",()=>v,"toast",()=>O,"useToaster",()=>k,"useToasterStore",()=>C],5766)},2985,3508,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(5766);let o=(0,r.createContext)({user:null,authLoading:!0,refreshUser:async()=>{},setUser:()=>{},authHydrated:!1}),n=()=>(0,r.useContext)(o);e.s(["AuthProvider",0,({children:e})=>{let[n,s]=(0,r.useState)(null),[i,l]=(0,r.useState)(!0),[u,c]=(0,r.useState)(!1),d=async()=>{l(!0);try{let e=await fetch("/api/auth/me",{cache:"no-store"}),t=await e.json();s(t.user??null)}catch{s(null)}finally{l(!1)}};return(0,r.useEffect)(()=>{d(),c(!0)},[]),(0,r.useEffect)(()=>{localStorage.getItem("showLogoutToast")&&((0,a.default)("Бувай! 👋",{icon:"😢",style:{background:"#333",color:"#fff"}}),localStorage.removeItem("showLogoutToast"))},[]),(0,t.jsx)(o.Provider,{value:{user:n,authLoading:i,refreshUser:d,setUser:s,authHydrated:u},children:e})},"useAuth",0,n],3508);let s=(0,r.createContext)(void 0);e.s(["CartProvider",0,({children:e})=>{let{authHydrated:o}=n(),[i,l]=(0,r.useState)([]),[u,c]=(0,r.useState)(!0),[d,f]=(0,r.useState)(!1);(0,r.useEffect)(()=>{o&&(async()=>{c(!0);try{let e=await fetch("/api/cart/load"),t=await e.json();t?.status==="success"&&l(t.cartItems)}catch(e){console.error("Failed to load cart",e)}finally{c(!1),f(!0)}})()},[o]);let p=async e=>{try{await fetch("/api/cart/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cartItems:e})})}catch(e){console.error("Failed to sync cart",e)}},m=async()=>{c(!0);try{let e=await fetch("/api/cart/load"),t=await e.json();t?.status==="success"&&(a.toast.success("Додано до кошика"),l(t.cartItems))}catch(e){console.error("Failed to refresh cart",e)}finally{c(!1),f(!0)}};return(0,t.jsx)(s.Provider,{value:{cartItems:i,addToCart:e=>{let t=[...i],r=t.findIndex(t=>t.variationId===e.variationId);r>-1?t[r].quantity+=e.quantity:t.push(e),l(t),p(t)},removeFromCart:e=>{let t=i.filter(t=>t.variationId!==e);l(t),p(t)},updateQuantity:(e,t)=>{let r=i.map(r=>r.variationId===e?{...r,quantity:t}:r);l(r),p(r)},clearCart:()=>{l([]),p([])},CartLoading:u,CartInitialized:d,refreshCart:m,variationInCart:e=>i.some(t=>t.variationId===e)},children:e})},"useCart",0,()=>{let e=(0,r.useContext)(s);if(!e)throw Error("useCart must be used within CartProvider");return e}],2985)},98183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return i}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});function n(e){let t={};for(let[r,a]of e.entries()){let e=t[r];void 0===e?t[r]=a:Array.isArray(e)?e.push(a):t[r]=[e,a]}return t}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[r,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)t.append(r,s(e));else t.set(r,s(a));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,a]of r.entries())e.append(t,a)}return e}},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return i},formatWithValidation:function(){return u},urlObjectKeys:function(){return l}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,a=e.protocol||"",o=e.pathname||"",i=e.hash||"",l=e.query||"",u=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?u=t+e.host:r&&(u=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(u+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||s.test(a))&&!1!==u?(u="//"+(u||""),o&&"/"!==o[0]&&(o="/"+o)):u||(u=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),o=o.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${u}${o}${c}${i}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function u(e){return i(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let a=e.r(71645);function o(e,t){let r=(0,a.useRef)(null),o=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=n(e,a)),t&&(o.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},18967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return x},NormalizeError:function(){return v},PageNotFoundError:function(){return b},SP:function(){return h},ST:function(){return y},WEB_VITALS:function(){return n},execOnce:function(){return s},getDisplayName:function(){return d},getLocationOrigin:function(){return u},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return m},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return P}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let t,r=!1;return(...a)=>(r||(r=!0,t=e(...a)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>i.test(e);function u(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=u();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function m(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await m(t.Component,t.ctx)}:{};let a=await e.getInitialProps(t);if(r&&f(r))return a;if(!a)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let h="undefined"!=typeof performance,y=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class v extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class x extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function P(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(18967),o=e.r(52817);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return g},useLinkStatus:function(){return b}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(90809),s=e.r(43476),i=n._(e.r(71645)),l=e.r(95057),u=e.r(8372),c=e.r(18581),d=e.r(18967),f=e.r(5550);e.r(33525);let p=e.r(91949),m=e.r(73668),h=e.r(9396);function y(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function g(t){var r;let a,o,n,[l,g]=(0,i.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,i.useRef)(null),{href:x,as:w,children:P,prefetch:E=null,passHref:j,replace:I,shallow:C,scroll:S,onClick:O,onMouseEnter:T,onTouchStart:_,legacyBehavior:$=!1,onNavigate:N,ref:k,unstable_dynamicOnHover:L,...A}=t;a=P,$&&("string"==typeof a||"number"==typeof a)&&(a=(0,s.jsx)("a",{children:a}));let F=i.default.useContext(u.AppRouterContext),M=!1!==E,R=!1!==E?null===(r=E)||"auto"===r?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:D,as:U}=i.default.useMemo(()=>{let e=y(x);return{href:e,as:w?y(w):e}},[x,w]);if($){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});o=i.default.Children.only(a)}let B=$?o&&"object"==typeof o&&o.ref:k,z=i.default.useCallback(e=>(null!==F&&(b.current=(0,p.mountLinkInstance)(e,D,F,R,M,g)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[M,D,F,R,g]),K={ref:(0,c.useMergedRef)(z,B),onClick(t){$||"function"!=typeof O||O(t),$&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),!F||t.defaultPrevented||function(t,r,a,o,n,s,l){if("undefined"!=typeof window){let u,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((u=t.currentTarget.getAttribute("target"))&&"_self"!==u||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);i.default.startTransition(()=>{d(a||r,n?"replace":"push",s??!0,o.current)})}}(t,D,U,b,I,S,N)},onMouseEnter(e){$||"function"!=typeof T||T(e),$&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),F&&M&&(0,p.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){$||"function"!=typeof _||_(e),$&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),F&&M&&(0,p.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,d.isAbsoluteUrl)(U)?K.href=U:$&&!j&&("a"!==o.type||"href"in o.props)||(K.href=(0,f.addBasePath)(U)),n=$?i.default.cloneElement(o,K):(0,s.jsx)("a",{...A,...K,children:a}),(0,s.jsx)(v.Provider,{value:l,children:n})}e.r(84508);let v=(0,i.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,i.useContext)(v);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},13675,e=>{"use strict";var t=e.i(43476);e.s(["Loading",0,({text:e="Loading"})=>(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"flex justify-center items-center mt-4",children:[(0,t.jsx)("div",{className:"w-10 h-10 border-4 border-gray-300 border-t-sky-500 rounded-full animate-spin"}),(0,t.jsxs)("p",{className:"ml-2 text-gray-600",children:[" ",e," "]})]})})])},80015,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(2985);let o=(0,r.createContext)(void 0),n=e=>{try{let t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}};e.s(["ProductsProvider",0,({children:e})=>{let[s,i]=(0,r.useState)([]),[l,u]=(0,r.useState)([]),[c,d]=(0,r.useState)([]),[f,p]=(0,r.useState)(!0),[m,h]=(0,r.useState)(null),[y,g]=(0,r.useState)([]),{cartItems:v}=(0,a.useCart)();(0,r.useEffect)(()=>{(async()=>{p(!0);try{let[e,t,r]=await Promise.all([fetch("/api/products/categories/get-categories"),fetch("/api/products/get-products"),fetch("/api/products/get-variations")]),a=await e.json(),o=await t.json(),n=await r.json();i(a?.status==="success"?a.data:[]),d(n?.status==="success"?n.data:[]),g(o?.status==="success"?o.data:[]),a?.status!=="success"&&h(a.message||"Не вдалося завантажити категорії."),o?.status!=="success"&&h(o.message||"Не вдалося завантажити продукти.")}catch{h("Мережева помилка під час завантаження продуктів або категорій."),i([]),u([]),d([])}finally{p(!1)}})()},[]),(0,r.useEffect)(()=>{y.length&&c.length&&u(y.map(e=>{let t=("string"==typeof e.variations?n(e.variations):e.variations).map(e=>c.find(t=>t.wpId===e)).filter(Boolean);return{...{...e,tags:"string"==typeof e.tags?n(e.tags):e.tags,categories:"string"==typeof e.categories?n(e.categories):e.categories,images:"string"==typeof e.images?n(e.images):e.images,attributes:"string"==typeof e.attributes?n(e.attributes):e.attributes,variationsData:e.variationsData||[]},variationsData:t,inCart:v.some(t=>t.productId===e.wpId)}}))},[y,c,v]);let b=(0,r.useMemo)(()=>()=>s.filter(e=>e.featured),[s]),x=(0,r.useMemo)(()=>e=>s.filter(t=>t.parent===e),[s]),w=(0,r.useMemo)(()=>()=>{let e=new Map;s.forEach(t=>{e.set(t.wpId,{...t,subcategories:[]})});let t=[];return s.forEach(r=>{if(0===r.parent||null==r.parent)t.push(e.get(r.wpId));else{let t=e.get(r.parent);t&&t.subcategories.push(e.get(r.wpId))}}),t},[s]);return(0,t.jsx)(o.Provider,{value:{categories:s,products:l,variations:c,productsLoading:f,error:m,getProductById:e=>l.find(t=>t.wpId===e),getProductBySlug:e=>l.find(t=>t.slug===e),getCategoryById:e=>s.find(t=>t.wpId===e),getCategoryBySlug:e=>s.find(t=>t.slug===e),getProductsByCatId:e=>l.filter(t=>{let r=t.categories;return Array.isArray(r)&&r.some(t=>t.id===e)}),getProductVariationById:e=>c.find(t=>t.wpId===e),getFeaturedCategories:b,getSubCategoriesFromParentId:x,getCategoryTree:w,getProductVariationsById:e=>c.filter(t=>t.productId===e),isParentCategory:e=>s.some(t=>t?.wpId===e&&t?.parent===null||t?.parent===e),hasParent:e=>s.some(t=>t?.wpId===e&&t?.parent!==null)},children:e})},"useProducts",0,()=>{let e=(0,r.useContext)(o);if(!e)throw Error("useProducts must be used within a ProductsProvider");return e}])},54406,e=>{"use strict";e.s(["default",0,(e,t)=>e?`/category/${t}/${e}`:"#"])},54896,e=>{"use strict";function t({user:e,page:t}){return e?`/profile/${e.username}${t?`/${t}`:""}`:`/${t||"#"}`}e.s(["getProfileLink",()=>t])},48193,e=>{"use strict";e.s(["default",0,()=>({handleLogout:async()=>{try{await fetch("/api/auth/logout",{method:"POST",headers:{"Content-Type":"application/json"}}),localStorage.setItem("showLogoutToast","1"),window.location.href="/"}catch(e){console.error("Logout Error:",e)}}})])}]);