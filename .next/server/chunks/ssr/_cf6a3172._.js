module.exports=[6704,a=>{"use strict";let b,c;var d,e=a.i(72131);let f={data:""},g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,i=/\n+/g,j=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?j(g,f):f+"{"+j(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=j(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=j.p?j.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},k={},l=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+l(a[c]);return b}return a};function m(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let m=l(a),n=k[m]||(k[m]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(m));if(!k[n]){let b=m!==a?a:(a=>{let b,c,d=[{}];for(;b=g.exec(a.replace(h,""));)b[4]?d.shift():b[3]?(c=b[3].replace(i," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(i," ").trim();return d[0]})(a);k[n]=j(e?{["@keyframes "+n]:b}:b,c?"":"."+n)}let o=c&&k.g?k.g:null;return c&&(k.g=k[n]),f=k[n],o?b.data=b.data.replace(o,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),n})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":j(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||f,d.g,d.o,d.k)}m.bind({g:1});let n,o,p,q=m.bind({k:1});function r(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:o&&o()},h),c.o=/ *go\d+/.test(i),h.className=m.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),p&&j[0]&&p(h),n(j,h)}return b?b(e):e}}var s=(a,b)=>"function"==typeof a?a(b):a,t=(b=0,()=>(++b).toString()),u=(a,b)=>{switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,20)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:c}=b;return u(a,{type:+!!a.toasts.find(a=>a.id===c.id),toast:c});case 3:let{toastId:d}=b;return{...a,toasts:a.toasts.map(a=>a.id===d||void 0===d?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let e=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+e}))}}},v=[],w={toasts:[],pausedAt:void 0},x=a=>{w=u(w,a),v.forEach(a=>{a(w)})},y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(a={})=>{let[b,c]=(0,e.useState)(w),d=(0,e.useRef)(w);(0,e.useEffect)(()=>(d.current!==w&&c(w),v.push(c),()=>{let a=v.indexOf(c);a>-1&&v.splice(a,1)}),[]);let f=b.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||y[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...b,toasts:f}},A=a=>(b,c)=>{let d=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||t()}))(b,a,c);return x({type:2,toast:d}),d.id},B=(a,b)=>A("blank")(a,b);B.error=A("error"),B.success=A("success"),B.loading=A("loading"),B.custom=A("custom"),B.dismiss=a=>{x({type:3,toastId:a})},B.remove=a=>x({type:4,toastId:a}),B.promise=(a,b,c)=>{let d=B.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?s(b.success,a):void 0;return e?B.success(e,{id:d,...c,...null==c?void 0:c.success}):B.dismiss(d),a}).catch(a=>{let e=b.error?s(b.error,a):void 0;e?B.error(e,{id:d,...c,...null==c?void 0:c.error}):B.dismiss(d)}),a};var C=(a,b)=>{x({type:1,toast:{id:a,height:b}})},D=()=>{x({type:5,time:Date.now()})},E=new Map,F=1e3,G=a=>{let{toasts:b,pausedAt:c}=z(a);(0,e.useEffect)(()=>{if(c)return;let a=Date.now(),d=b.map(b=>{if(b.duration===1/0)return;let c=(b.duration||0)+b.pauseDuration-(a-b.createdAt);if(c<0){b.visible&&B.dismiss(b.id);return}return setTimeout(()=>B.dismiss(b.id),c)});return()=>{d.forEach(a=>a&&clearTimeout(a))}},[b,c]);let d=(0,e.useCallback)(()=>{c&&x({type:6,time:Date.now()})},[c]),f=(0,e.useCallback)((a,c)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=c||{},g=b.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[b]);return(0,e.useEffect)(()=>{b.forEach(a=>{if(a.dismissed)((a,b=F)=>{if(E.has(a))return;let c=setTimeout(()=>{E.delete(a),x({type:4,toastId:a})},b);E.set(a,c)})(a.id,a.removeDelay);else{let b=E.get(a.id);b&&(clearTimeout(b),E.delete(a.id))}})},[b]),{toasts:b,handlers:{updateHeight:C,startPause:D,endPause:d,calculateOffset:f}}},H=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,I=q`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=q`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,K=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${J} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=r("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,N=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,O=q`
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
}`,P=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${N} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${O} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=r("div")`
  position: absolute;
`,R=r("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,S=q`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=r("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${S} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,U=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?e.createElement(T,null,b):b:"blank"===c?null:e.createElement(R,null,e.createElement(M,{...d}),"loading"!==c&&e.createElement(Q,null,"error"===c?e.createElement(K,{...d}):e.createElement(P,{...d})))},V=r("div")`
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
`,W=r("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=e.memo(({toast:a,position:b,style:d,children:f})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${q(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${q(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=e.createElement(U,{toast:a}),i=e.createElement(W,{...a.ariaProps},s(a.message,a));return e.createElement(V,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof f?f({icon:h,message:i}):e.createElement(e.Fragment,null,h,i))});d=e.createElement,j.p=void 0,n=d,o=void 0,p=void 0;var Y=({id:a,className:b,style:c,onHeightUpdate:d,children:f})=>{let g=e.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return e.createElement("div",{ref:g,className:b,style:c},f)},Z=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:f,children:g,containerStyle:h,containerClassName:i})=>{let{toasts:j,handlers:k}=G(d);return e.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...h},className:i,onMouseEnter:k.startPause,onMouseLeave:k.endPause},j.map(d=>{let h,i,j=d.position||b,l=k.calculateOffset(d,{reverseOrder:a,gutter:f,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${l*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return e.createElement(Y,{id:d.id,key:d.id,onHeightUpdate:k.updateHeight,className:d.visible?Z:"",style:m},"custom"===d.type?s(d.message,d):g?g(d):e.createElement(X,{toast:d,position:j}))}))};a.s(["CheckmarkIcon",()=>P,"ErrorIcon",()=>K,"LoaderIcon",()=>M,"ToastBar",()=>X,"ToastIcon",()=>U,"Toaster",()=>$,"default",()=>B,"resolveValue",()=>s,"toast",()=>B,"useToaster",()=>G,"useToasterStore",()=>z],6704)},46058,(a,b,c)=>{"use strict";function d(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(d=function(a){return a?c:b})(a)}c._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=d(b);if(c&&c.has(a))return c.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,c&&c.set(a,e),e}},39118,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={DEFAULT_SEGMENT_KEY:function(){return l},PAGE_SEGMENT_KEY:function(){return k},addSearchParamsIfPageSegment:function(){return i},computeSelectedLayoutSegment:function(){return j},getSegmentValue:function(){return f},getSelectedLayoutSegmentPath:function(){return function a(b,c,d=!0,e=[]){let g;if(d)g=b[1][c];else{let a=b[1];g=a.children??Object.values(a)[0]}if(!g)return e;let h=f(g[0]);return!h||h.startsWith(k)?e:(e.push(h),a(g,c,!1,e))}},isGroupSegment:function(){return g},isParallelRouteSegment:function(){return h}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});function f(a){return Array.isArray(a)?a[1]:a}function g(a){return"("===a[0]&&a.endsWith(")")}function h(a){return a.startsWith("@")&&"@children"!==a}function i(a,b){if(a.includes(k)){let a=JSON.stringify(b);return"{}"!==a?k+"?"+a:k}return a}function j(a,b){if(!a||0===a.length)return null;let c="children"===b?a[0]:a[a.length-1];return c===l?null:c}let k="__PAGE__",l="__DEFAULT__"},54427,(a,b,c)=>{"use strict";function d(){let a,b,c=new Promise((c,d)=>{a=c,b=d});return{resolve:a,reject:b,promise:c}}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createPromiseWithResolvers",{enumerable:!0,get:function(){return d}})},85068,28242,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(6704);let e=(0,c.createContext)({user:null,authLoading:!0,refreshUser:async()=>{},setUser:()=>{},authHydrated:!1}),f=()=>(0,c.useContext)(e);a.s(["AuthProvider",0,({children:a})=>{let[f,g]=(0,c.useState)(null),[h,i]=(0,c.useState)(!0),[j,k]=(0,c.useState)(!1),l=async()=>{i(!0);try{let a=await fetch("/api/auth/me",{cache:"no-store"}),b=await a.json();g(b.user??null)}catch{g(null)}finally{i(!1)}};return(0,c.useEffect)(()=>{l(),k(!0)},[]),(0,c.useEffect)(()=>{localStorage.getItem("showLogoutToast")&&((0,d.default)("Бувай! 👋",{icon:"😢",style:{background:"#333",color:"#fff"}}),localStorage.removeItem("showLogoutToast"))},[]),(0,b.jsx)(e.Provider,{value:{user:f,authLoading:h,refreshUser:l,setUser:g,authHydrated:j},children:a})},"useAuth",0,f],28242);let g=(0,c.createContext)(void 0);a.s(["CartProvider",0,({children:a})=>{let{authHydrated:e}=f(),[h,i]=(0,c.useState)([]),[j,k]=(0,c.useState)(!0),[l,m]=(0,c.useState)(!1);(0,c.useEffect)(()=>{e&&(async()=>{k(!0);try{let a=await fetch("/api/cart/load"),b=await a.json();b?.status==="success"&&i(b.cartItems)}catch(a){console.error("Failed to load cart",a)}finally{k(!1),m(!0)}})()},[e]);let n=async a=>{try{await fetch("/api/cart/update",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({cartItems:a})})}catch(a){console.error("Failed to sync cart",a)}},o=async()=>{k(!0);try{let a=await fetch("/api/cart/load"),b=await a.json();b?.status==="success"&&(d.toast.success("Додано до кошика"),i(b.cartItems))}catch(a){console.error("Failed to refresh cart",a)}finally{k(!1),m(!0)}};return(0,b.jsx)(g.Provider,{value:{cartItems:h,addToCart:a=>{let b=[...h],c=b.findIndex(b=>b.variationId===a.variationId);c>-1?b[c].quantity+=a.quantity:b.push(a),i(b),n(b)},removeFromCart:a=>{let b=h.filter(b=>b.variationId!==a);i(b),n(b)},updateQuantity:(a,b)=>{let c=h.map(c=>c.variationId===a?{...c,quantity:b}:c);i(c),n(c)},clearCart:()=>{i([]),n([])},CartLoading:j,CartInitialized:l,refreshCart:o,variationInCart:a=>h.some(b=>b.variationId===a)},children:a})},"useCart",0,()=>{let a=(0,c.useContext)(g);if(!a)throw Error("useCart must be used within CartProvider");return a}],85068)},13796,a=>{"use strict";var b=a.i(87924);a.s(["Loading",0,({text:a="Loading"})=>(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:"flex justify-center items-center mt-4",children:[(0,b.jsx)("div",{className:"w-10 h-10 border-4 border-gray-300 border-t-sky-500 rounded-full animate-spin"}),(0,b.jsxs)("p",{className:"ml-2 text-gray-600",children:[" ",a," "]})]})})])},72509,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(85068);let e=(0,c.createContext)(void 0),f=a=>{try{let b=JSON.parse(a);return Array.isArray(b)?b:[]}catch{return[]}};a.s(["ProductsProvider",0,({children:a})=>{let[g,h]=(0,c.useState)([]),[i,j]=(0,c.useState)([]),[k,l]=(0,c.useState)([]),[m,n]=(0,c.useState)(!0),[o,p]=(0,c.useState)(null),[q,r]=(0,c.useState)([]),{cartItems:s}=(0,d.useCart)();(0,c.useEffect)(()=>{(async()=>{n(!0);try{let[a,b,c]=await Promise.all([fetch("/api/products/categories/get-categories"),fetch("/api/products/get-products"),fetch("/api/products/get-variations")]),d=await a.json(),e=await b.json(),f=await c.json();h(d?.status==="success"?d.data:[]),l(f?.status==="success"?f.data:[]),r(e?.status==="success"?e.data:[]),d?.status!=="success"&&p(d.message||"Не вдалося завантажити категорії."),e?.status!=="success"&&p(e.message||"Не вдалося завантажити продукти.")}catch{p("Мережева помилка під час завантаження продуктів або категорій."),h([]),j([]),l([])}finally{n(!1)}})()},[]),(0,c.useEffect)(()=>{q.length&&k.length&&j(q.map(a=>{let b=("string"==typeof a.variations?f(a.variations):a.variations).map(a=>k.find(b=>b.wpId===a)).filter(Boolean);return{...{...a,tags:"string"==typeof a.tags?f(a.tags):a.tags,categories:"string"==typeof a.categories?f(a.categories):a.categories,images:"string"==typeof a.images?f(a.images):a.images,attributes:"string"==typeof a.attributes?f(a.attributes):a.attributes,variationsData:a.variationsData||[]},variationsData:b,inCart:s.some(b=>b.productId===a.wpId)}}))},[q,k,s]);let t=(0,c.useMemo)(()=>()=>g.filter(a=>a.featured),[g]),u=(0,c.useMemo)(()=>a=>g.filter(b=>b.parent===a),[g]),v=(0,c.useMemo)(()=>()=>{let a=new Map;g.forEach(b=>{a.set(b.wpId,{...b,subcategories:[]})});let b=[];return g.forEach(c=>{if(0===c.parent||null==c.parent)b.push(a.get(c.wpId));else{let b=a.get(c.parent);b&&b.subcategories.push(a.get(c.wpId))}}),b},[g]);return(0,b.jsx)(e.Provider,{value:{categories:g,products:i,variations:k,productsLoading:m,error:o,getProductById:a=>i.find(b=>b.wpId===a),getProductBySlug:a=>i.find(b=>b.slug===a),getCategoryById:a=>g.find(b=>b.wpId===a),getCategoryBySlug:a=>g.find(b=>b.slug===a),getProductsByCatId:a=>i.filter(b=>{let c=b.categories;return Array.isArray(c)&&c.some(b=>b.id===a)}),getProductVariationById:a=>k.find(b=>b.wpId===a),getFeaturedCategories:t,getSubCategoriesFromParentId:u,getCategoryTree:v,getProductVariationsById:a=>k.filter(b=>b.productId===a),isParentCategory:a=>g.some(b=>b?.wpId===a&&b?.parent===null||b?.parent===a),hasParent:a=>g.some(b=>b?.wpId===a&&b?.parent!==null)},children:a})},"useProducts",0,()=>{let a=(0,c.useContext)(e);if(!a)throw Error("useProducts must be used within a ProductsProvider");return a}])}];

//# sourceMappingURL=_cf6a3172._.js.map