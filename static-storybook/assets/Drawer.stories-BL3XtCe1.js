const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Drawer-DSvXvHt2.js","./jsx-runtime-Cf8x2fCZ.js","./index-yBjzXJbu.js","./index-DI2gBlDf.js","./index-BlmOqGMO.js","./index-BPXrzZIR.js","./iframe-BpZEF_5K.js","./index-DybOl1hA.js","./index-fNjTmf9T.js","./index-CXQShRbs.js","./index-DrFu-skq.js","./clsx-B-dksMZM.js","./index-BY2_vhv5.js","./index-DW48STyt.js","./index-CfQheYXo.js","./index-pvuVTQ3b.js","./index-B2x4RDPN.js","./index-DUtlJRZ9.js","./index-DZCApzUK.js","./index-Dh73ENUf.js","./Button-b6PCfnH9.js","./createReactComponent-GuN14Mgc.js","./Button-DIUIaMCV.css","./IconArrowRight-BMg5yxFX.js","./IconX-5Dn7YNlv.js"])))=>i.map(i=>d[i]);
import{_ as tn}from"./iframe-BpZEF_5K.js";import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{R as o,r as N}from"./index-BlmOqGMO.js";import{c as nn}from"./clsx-B-dksMZM.js";import{R as rn,P as an,O as on,C as sn}from"./index-BY2_vhv5.js";import{B as V}from"./Button-b6PCfnH9.js";import{I as ln}from"./IconArrowRight-BMg5yxFX.js";import{c as un}from"./createReactComponent-GuN14Mgc.js";import{I as cn}from"./IconX-5Dn7YNlv.js";/**
 * @license @tabler/icons-react v3.33.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var dn=un("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]]);function fn(e){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",n.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}const Rt=o.createContext({drawerRef:{current:null},overlayRef:{current:null},onPress:()=>{},onRelease:()=>{},onDrag:()=>{},onNestedDrag:()=>{},onNestedOpenChange:()=>{},onNestedRelease:()=>{},openProp:void 0,dismissible:!1,isOpen:!1,isDragging:!1,keyboardIsOpen:{current:!1},snapPointsOffset:null,snapPoints:null,handleOnly:!1,modal:!1,shouldFade:!1,activeSnapPoint:null,onOpenChange:()=>{},setActiveSnapPoint:()=>{},closeDrawer:()=>{},direction:"bottom",shouldAnimate:{current:!0},shouldScaleBackground:!1,setBackgroundColorOnScale:!0,noBodyStyles:!1,container:null,autoFocus:!1}),ke=()=>{const e=o.useContext(Rt);if(!e)throw new Error("useDrawerContext must be used within a Drawer.Root");return e};fn(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);function pn(){const e=navigator.userAgent;return typeof window<"u"&&(/Firefox/.test(e)&&/Mobile/.test(e)||/FxiOS/.test(e))}function hn(){return ze(/^Mac/)}function mn(){return ze(/^iPhone/)}function Ze(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)}function gn(){return ze(/^iPad/)||hn()&&navigator.maxTouchPoints>1}function Et(){return mn()||gn()}function ze(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.platform):void 0}const wn=24,vn=typeof window<"u"?N.useLayoutEffect:N.useEffect;function et(...e){return(...n)=>{for(let t of e)typeof t=="function"&&t(...n)}}const Pe=typeof document<"u"&&window.visualViewport;function tt(e){let n=window.getComputedStyle(e);return/(auto|scroll)/.test(n.overflow+n.overflowX+n.overflowY)}function jt(e){for(tt(e)&&(e=e.parentElement);e&&!tt(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}const yn=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let Be=0,Ie;function bn(e={}){let{isDisabled:n}=e;vn(()=>{if(!n)return Be++,Be===1&&Et()&&(Ie=xn()),()=>{Be--,Be===0&&(Ie==null||Ie())}},[n])}function xn(){let e,n=0,t=d=>{e=jt(d.target),!(e===document.documentElement&&e===document.body)&&(n=d.changedTouches[0].pageY)},a=d=>{if(!e||e===document.documentElement||e===document.body){d.preventDefault();return}let h=d.changedTouches[0].pageY,F=e.scrollTop,H=e.scrollHeight-e.clientHeight;H!==0&&((F<=0&&h>n||F>=H&&h<n)&&d.preventDefault(),n=h)},s=d=>{let h=d.target;Me(h)&&h!==document.activeElement&&(d.preventDefault(),h.style.transform="translateY(-2000px)",h.focus(),requestAnimationFrame(()=>{h.style.transform=""}))},i=d=>{let h=d.target;Me(h)&&(h.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{h.style.transform="",Pe&&(Pe.height<window.innerHeight?requestAnimationFrame(()=>{nt(h)}):Pe.addEventListener("resize",()=>nt(h),{once:!0}))}))},y=()=>{window.scrollTo(0,0)},w=window.pageXOffset,k=window.pageYOffset,C=et(Sn(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`));window.scrollTo(0,0);let f=et(fe(document,"touchstart",t,{passive:!1,capture:!0}),fe(document,"touchmove",a,{passive:!1,capture:!0}),fe(document,"touchend",s,{passive:!1,capture:!0}),fe(document,"focus",i,!0),fe(window,"scroll",y));return()=>{C(),f(),window.scrollTo(w,k)}}function Sn(e,n,t){let a=e.style[n];return e.style[n]=t,()=>{e.style[n]=a}}function fe(e,n,t,a){return e.addEventListener(n,t,a),()=>{e.removeEventListener(n,t,a)}}function nt(e){let n=document.scrollingElement||document.documentElement;for(;e&&e!==n;){let t=jt(e);if(t!==document.documentElement&&t!==document.body&&t!==e){let a=t.getBoundingClientRect().top,s=e.getBoundingClientRect().top,i=e.getBoundingClientRect().bottom;const y=t.getBoundingClientRect().bottom+wn;i>y&&(t.scrollTop+=s-a)}e=t.parentElement}}function Me(e){return e instanceof HTMLInputElement&&!yn.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}function kn(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function Cn(...e){return n=>e.forEach(t=>kn(t,n))}function At(...e){return N.useCallback(Cn(...e),e)}const Ht=new WeakMap;function E(e,n,t=!1){if(!e||!(e instanceof HTMLElement))return;let a={};Object.entries(n).forEach(([s,i])=>{if(s.startsWith("--")){e.style.setProperty(s,i);return}a[s]=e.style[s],e.style[s]=i}),!t&&Ht.set(e,a)}function On(e,n){if(!e||!(e instanceof HTMLElement))return;let t=Ht.get(e);t&&(e.style[n]=t[n])}const R=e=>{switch(e){case"top":case"bottom":return!0;case"left":case"right":return!1;default:return e}};function De(e,n){if(!e)return null;const t=window.getComputedStyle(e),a=t.transform||t.webkitTransform||t.mozTransform;let s=a.match(/^matrix3d\((.+)\)$/);return s?parseFloat(s[1].split(", ")[R(n)?13:12]):(s=a.match(/^matrix\((.+)\)$/),s?parseFloat(s[1].split(", ")[R(n)?5:4]):null)}function Tn(e){return 8*(Math.log(e+1)-2)}function Ne(e,n){if(!e)return()=>{};const t=e.style.cssText;return Object.assign(e.style,n),()=>{e.style.cssText=t}}function Bn(...e){return(...n)=>{for(const t of e)typeof t=="function"&&t(...n)}}const B={DURATION:.5,EASE:[.32,.72,0,1]},$t=.4,Dn=.25,_n=100,Pt=8,_e=16,Le=26,Fe="vaul-dragging";function It(e){const n=o.useRef(e);return o.useEffect(()=>{n.current=e}),o.useMemo(()=>(...t)=>n.current==null?void 0:n.current.call(n,...t),[])}function Rn({defaultProp:e,onChange:n}){const t=o.useState(e),[a]=t,s=o.useRef(a),i=It(n);return o.useEffect(()=>{s.current!==a&&(i(a),s.current=a)},[a,s,i]),t}function Nt({prop:e,defaultProp:n,onChange:t=()=>{}}){const[a,s]=Rn({defaultProp:n,onChange:t}),i=e!==void 0,y=i?e:a,w=It(t),k=o.useCallback(C=>{if(i){const d=typeof C=="function"?C(e):C;d!==e&&w(d)}else s(C)},[i,e,s,w]);return[y,k]}function En({activeSnapPointProp:e,setActiveSnapPointProp:n,snapPoints:t,drawerRef:a,overlayRef:s,fadeFromIndex:i,onSnapPointChange:y,direction:w="bottom",container:k,snapToSequentialPoint:C}){const[f,d]=Nt({prop:e,defaultProp:t==null?void 0:t[0],onChange:n}),[h,F]=o.useState(typeof window<"u"?{innerWidth:window.innerWidth,innerHeight:window.innerHeight}:void 0);o.useEffect(()=>{function u(){F({innerWidth:window.innerWidth,innerHeight:window.innerHeight})}return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]);const H=o.useMemo(()=>f===(t==null?void 0:t[t.length-1])||null,[t,f]),T=o.useMemo(()=>{var u;return(u=t==null?void 0:t.findIndex(x=>x===f))!=null?u:null},[t,f]),L=t&&t.length>0&&(i||i===0)&&!Number.isNaN(i)&&t[i]===f||!t,g=o.useMemo(()=>{const u=k?{width:k.getBoundingClientRect().width,height:k.getBoundingClientRect().height}:typeof window<"u"?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0};var x;return(x=t==null?void 0:t.map(v=>{const $=typeof v=="string";let A=0;if($&&(A=parseInt(v,10)),R(w)){const l=$?A:h?v*u.height:0;return h?w==="bottom"?u.height-l:-u.height+l:l}const U=$?A:h?v*u.width:0;return h?w==="right"?u.width-U:-u.width+U:U}))!=null?x:[]},[t,h,k]),j=o.useMemo(()=>T!==null?g==null?void 0:g[T]:null,[g,T]),_=o.useCallback(u=>{var x;const v=(x=g==null?void 0:g.findIndex($=>$===u))!=null?x:null;y(v),E(a.current,{transition:`transform ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,transform:R(w)?`translate3d(0, ${u}px, 0)`:`translate3d(${u}px, 0, 0)`}),g&&v!==g.length-1&&i!==void 0&&v!==i&&v<i?E(s.current,{transition:`opacity ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,opacity:"0"}):E(s.current,{transition:`opacity ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,opacity:"1"}),d(t==null?void 0:t[Math.max(v,0)])},[a.current,t,g,i,s,d]);o.useEffect(()=>{if(f||e){var u;const x=(u=t==null?void 0:t.findIndex(v=>v===e||v===f))!=null?u:-1;g&&x!==-1&&typeof g[x]=="number"&&_(g[x])}},[f,e,t,g,_]);function p({draggedDistance:u,closeDrawer:x,velocity:v,dismissible:$}){if(i===void 0)return;const A=w==="bottom"||w==="right"?(j??0)-u:(j??0)+u,U=T===i-1,l=T===0,z=u>0;if(U&&E(s.current,{transition:`opacity ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`}),!C&&v>2&&!z){$?x():_(g[0]);return}if(!C&&v>2&&z&&g&&t){_(g[t.length-1]);return}const P=g==null?void 0:g.reduce((M,Z)=>typeof M!="number"||typeof Z!="number"?M:Math.abs(Z-A)<Math.abs(M-A)?Z:M),q=R(w)?window.innerHeight:window.innerWidth;if(v>$t&&Math.abs(u)<q*.4){const M=z?1:-1;if(M>0&&H&&t){_(g[t.length-1]);return}if(l&&M<0&&$&&x(),T===null)return;_(g[T+M]);return}_(P)}function K({draggedDistance:u}){if(j===null)return;const x=w==="bottom"||w==="right"?j-u:j+u;(w==="bottom"||w==="right")&&x<g[g.length-1]||(w==="top"||w==="left")&&x>g[g.length-1]||E(a.current,{transform:R(w)?`translate3d(0, ${x}px, 0)`:`translate3d(${x}px, 0, 0)`})}function Q(u,x){if(!t||typeof T!="number"||!g||i===void 0)return null;const v=T===i-1;if(T>=i&&x)return 0;if(v&&!x)return 1;if(!L&&!v)return null;const A=v?T+1:T-1,U=v?g[A]-g[A-1]:g[A+1]-g[A],l=u/Math.abs(U);return v?1-l:l}return{isLastSnapPoint:H,activeSnapPoint:f,shouldFade:L,getPercentageDragged:Q,setActiveSnapPoint:d,activeSnapPointIndex:T,onRelease:p,onDrag:K,snapPointsOffset:g}}const jn=()=>()=>{};function An(){const{direction:e,isOpen:n,shouldScaleBackground:t,setBackgroundColorOnScale:a,noBodyStyles:s}=ke(),i=o.useRef(null),y=N.useMemo(()=>document.body.style.backgroundColor,[]);function w(){return(window.innerWidth-Le)/window.innerWidth}o.useEffect(()=>{if(n&&t){i.current&&clearTimeout(i.current);const k=document.querySelector("[data-vaul-drawer-wrapper]")||document.querySelector("[vaul-drawer-wrapper]");if(!k)return;Bn(a&&!s?Ne(document.body,{background:"black"}):jn,Ne(k,{transformOrigin:R(e)?"top":"left",transitionProperty:"transform, border-radius",transitionDuration:`${B.DURATION}s`,transitionTimingFunction:`cubic-bezier(${B.EASE.join(",")})`}));const C=Ne(k,{borderRadius:`${Pt}px`,overflow:"hidden",...R(e)?{transform:`scale(${w()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`}:{transform:`scale(${w()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`}});return()=>{C(),i.current=window.setTimeout(()=>{y?document.body.style.background=y:document.body.style.removeProperty("background")},B.DURATION*1e3)}}},[n,t,y])}let pe=null;function Hn({isOpen:e,modal:n,nested:t,hasBeenOpened:a,preventScrollRestoration:s,noBodyStyles:i}){const[y,w]=o.useState(()=>typeof window<"u"?window.location.href:""),k=o.useRef(0),C=o.useCallback(()=>{if(Ze()&&pe===null&&e&&!i){pe={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left,height:document.body.style.height,right:"unset"};const{scrollX:d,innerHeight:h}=window;document.body.style.setProperty("position","fixed","important"),Object.assign(document.body.style,{top:`${-k.current}px`,left:`${-d}px`,right:"0px",height:"auto"}),window.setTimeout(()=>window.requestAnimationFrame(()=>{const F=h-window.innerHeight;F&&k.current>=h&&(document.body.style.top=`${-(k.current+F)}px`)}),300)}},[e]),f=o.useCallback(()=>{if(Ze()&&pe!==null&&!i){const d=-parseInt(document.body.style.top,10),h=-parseInt(document.body.style.left,10);Object.assign(document.body.style,pe),window.requestAnimationFrame(()=>{if(s&&y!==window.location.href){w(window.location.href);return}window.scrollTo(h,d)}),pe=null}},[y]);return o.useEffect(()=>{function d(){k.current=window.scrollY}return d(),window.addEventListener("scroll",d),()=>{window.removeEventListener("scroll",d)}},[]),o.useEffect(()=>{if(n)return()=>{typeof document>"u"||document.querySelector("[data-vaul-drawer]")||f()}},[n,f]),o.useEffect(()=>{t||!a||(e?(!window.matchMedia("(display-mode: standalone)").matches&&C(),n||window.setTimeout(()=>{f()},500)):f())},[e,a,y,n,t,C,f]),{restorePositionSetting:f}}function $n({open:e,onOpenChange:n,children:t,onDrag:a,onRelease:s,snapPoints:i,shouldScaleBackground:y=!1,setBackgroundColorOnScale:w=!0,closeThreshold:k=Dn,scrollLockTimeout:C=_n,dismissible:f=!0,handleOnly:d=!1,fadeFromIndex:h=i&&i.length-1,activeSnapPoint:F,setActiveSnapPoint:H,fixed:T,modal:L=!0,onClose:g,nested:j,noBodyStyles:_=!1,direction:p="bottom",defaultOpen:K=!1,disablePreventScroll:Q=!0,snapToSequentialPoint:u=!1,preventScrollRestoration:x=!1,repositionInputs:v=!0,onAnimationEnd:$,container:A,autoFocus:U=!1}){var l,z;const[P=!1,q]=Nt({defaultProp:K,prop:e,onChange:c=>{n==null||n(c),!c&&!j&&Yt(),setTimeout(()=>{$==null||$(c)},B.DURATION*1e3),c&&!L&&typeof window<"u"&&window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"}),c||(document.body.style.pointerEvents="auto")}}),[M,Z]=o.useState(!1),[ee,se]=o.useState(!1),[Lt,We]=o.useState(!1),ae=o.useRef(null),Ce=o.useRef(null),Ee=o.useRef(null),je=o.useRef(null),le=o.useRef(null),ue=o.useRef(!1),Ae=o.useRef(null),He=o.useRef(0),oe=o.useRef(!1),Ve=o.useRef(!K),Ue=o.useRef(0),m=o.useRef(null),qe=o.useRef(((l=m.current)==null?void 0:l.getBoundingClientRect().height)||0),Ye=o.useRef(((z=m.current)==null?void 0:z.getBoundingClientRect().width)||0),$e=o.useRef(0),zt=o.useCallback(c=>{i&&c===ce.length-1&&(Ce.current=new Date)},[]),{activeSnapPoint:Wt,activeSnapPointIndex:ie,setActiveSnapPoint:Xe,onRelease:Vt,snapPointsOffset:ce,onDrag:Ut,shouldFade:Ke,getPercentageDragged:qt}=En({snapPoints:i,activeSnapPointProp:F,setActiveSnapPointProp:H,drawerRef:m,fadeFromIndex:h,overlayRef:ae,onSnapPointChange:zt,direction:p,container:A,snapToSequentialPoint:u});bn({isDisabled:!P||ee||!L||Lt||!M||!v||!Q});const{restorePositionSetting:Yt}=Hn({isOpen:P,modal:L,nested:j??!1,hasBeenOpened:M,preventScrollRestoration:x,noBodyStyles:_});function Oe(){return(window.innerWidth-Le)/window.innerWidth}function Xt(c){var S,O;!f&&!i||m.current&&!m.current.contains(c.target)||(qe.current=((S=m.current)==null?void 0:S.getBoundingClientRect().height)||0,Ye.current=((O=m.current)==null?void 0:O.getBoundingClientRect().width)||0,se(!0),Ee.current=new Date,Et()&&window.addEventListener("touchend",()=>ue.current=!1,{once:!0}),c.target.setPointerCapture(c.pointerId),He.current=R(p)?c.pageY:c.pageX)}function Ge(c,S){var O;let b=c;const D=(O=window.getSelection())==null?void 0:O.toString(),Y=m.current?De(m.current,p):null,W=new Date;if(b.tagName==="SELECT"||b.hasAttribute("data-vaul-no-drag")||b.closest("[data-vaul-no-drag]"))return!1;if(p==="right"||p==="left")return!0;if(Ce.current&&W.getTime()-Ce.current.getTime()<500)return!1;if(Y!==null&&(p==="bottom"?Y>0:Y<0))return!0;if(D&&D.length>0)return!1;if(le.current&&W.getTime()-le.current.getTime()<C&&Y===0||S)return le.current=W,!1;for(;b;){if(b.scrollHeight>b.clientHeight){if(b.scrollTop!==0)return le.current=new Date,!1;if(b.getAttribute("role")==="dialog")return!0}b=b.parentNode}return!0}function Kt(c){if(m.current&&ee){const S=p==="bottom"||p==="right"?1:-1,O=(He.current-(R(p)?c.pageY:c.pageX))*S,b=O>0,D=i&&!f&&!b;if(D&&ie===0)return;const Y=Math.abs(O),W=document.querySelector("[data-vaul-drawer-wrapper]"),te=p==="bottom"||p==="top"?qe.current:Ye.current;let G=Y/te;const re=qt(Y,b);if(re!==null&&(G=re),D&&G>=1||!ue.current&&!Ge(c.target,b))return;if(m.current.classList.add(Fe),ue.current=!0,E(m.current,{transition:"none"}),E(ae.current,{transition:"none"}),i&&Ut({draggedDistance:O}),b&&!i){const J=Tn(O),Te=Math.min(J*-1,0)*S;E(m.current,{transform:R(p)?`translate3d(0, ${Te}px, 0)`:`translate3d(${Te}px, 0, 0)`});return}const ne=1-G;if((Ke||h&&ie===h-1)&&(a==null||a(c,G),E(ae.current,{opacity:`${ne}`,transition:"none"},!0)),W&&ae.current&&y){const J=Math.min(Oe()+G*(1-Oe()),1),Te=8-G*8,Qe=Math.max(0,14-G*14);E(W,{borderRadius:`${Te}px`,transform:R(p)?`scale(${J}) translate3d(0, ${Qe}px, 0)`:`scale(${J}) translate3d(${Qe}px, 0, 0)`,transition:"none"},!0)}if(!i){const J=Y*S;E(m.current,{transform:R(p)?`translate3d(0, ${J}px, 0)`:`translate3d(${J}px, 0, 0)`})}}}o.useEffect(()=>{window.requestAnimationFrame(()=>{Ve.current=!0})},[]),o.useEffect(()=>{var c;function S(){if(!m.current||!v)return;const O=document.activeElement;if(Me(O)||oe.current){var b;const D=((b=window.visualViewport)==null?void 0:b.height)||0,Y=window.innerHeight;let W=Y-D;const te=m.current.getBoundingClientRect().height||0,G=te>Y*.8;$e.current||($e.current=te);const re=m.current.getBoundingClientRect().top;if(Math.abs(Ue.current-W)>60&&(oe.current=!oe.current),i&&i.length>0&&ce&&ie){const ne=ce[ie]||0;W+=ne}if(Ue.current=W,te>D||oe.current){const ne=m.current.getBoundingClientRect().height;let J=ne;ne>D&&(J=D-(G?re:Le)),T?m.current.style.height=`${ne-Math.max(W,0)}px`:m.current.style.height=`${Math.max(J,D-re)}px`}else pn()||(m.current.style.height=`${$e.current}px`);i&&i.length>0&&!oe.current?m.current.style.bottom="0px":m.current.style.bottom=`${Math.max(W,0)}px`}}return(c=window.visualViewport)==null||c.addEventListener("resize",S),()=>{var O;return(O=window.visualViewport)==null?void 0:O.removeEventListener("resize",S)}},[ie,i,ce]);function de(c){Gt(),g==null||g(),c||q(!1),setTimeout(()=>{i&&Xe(i[0])},B.DURATION*1e3)}function Je(){if(!m.current)return;const c=document.querySelector("[data-vaul-drawer-wrapper]"),S=De(m.current,p);E(m.current,{transform:"translate3d(0, 0, 0)",transition:`transform ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`}),E(ae.current,{transition:`opacity ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,opacity:"1"}),y&&S&&S>0&&P&&E(c,{borderRadius:`${Pt}px`,overflow:"hidden",...R(p)?{transform:`scale(${Oe()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,transformOrigin:"top"}:{transform:`scale(${Oe()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,transformOrigin:"left"},transitionProperty:"transform, border-radius",transitionDuration:`${B.DURATION}s`,transitionTimingFunction:`cubic-bezier(${B.EASE.join(",")})`},!0)}function Gt(){!ee||!m.current||(m.current.classList.remove(Fe),ue.current=!1,se(!1),je.current=new Date)}function Jt(c){if(!ee||!m.current)return;m.current.classList.remove(Fe),ue.current=!1,se(!1),je.current=new Date;const S=De(m.current,p);if(!c||!Ge(c.target,!1)||!S||Number.isNaN(S)||Ee.current===null)return;const O=je.current.getTime()-Ee.current.getTime(),b=He.current-(R(p)?c.pageY:c.pageX),D=Math.abs(b)/O;if(D>.05&&(We(!0),setTimeout(()=>{We(!1)},200)),i){Vt({draggedDistance:b*(p==="bottom"||p==="right"?1:-1),closeDrawer:de,velocity:D,dismissible:f}),s==null||s(c,!0);return}if(p==="bottom"||p==="right"?b>0:b<0){Je(),s==null||s(c,!0);return}if(D>$t){de(),s==null||s(c,!1);return}var Y;const W=Math.min((Y=m.current.getBoundingClientRect().height)!=null?Y:0,window.innerHeight);var te;const G=Math.min((te=m.current.getBoundingClientRect().width)!=null?te:0,window.innerWidth),re=p==="left"||p==="right";if(Math.abs(S)>=(re?G:W)*k){de(),s==null||s(c,!1);return}s==null||s(c,!0),Je()}o.useEffect(()=>(P&&(E(document.documentElement,{scrollBehavior:"auto"}),Ce.current=new Date),()=>{On(document.documentElement,"scrollBehavior")}),[P]);function Qt(c){const S=c?(window.innerWidth-_e)/window.innerWidth:1,O=c?-16:0;Ae.current&&window.clearTimeout(Ae.current),E(m.current,{transition:`transform ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,transform:R(p)?`scale(${S}) translate3d(0, ${O}px, 0)`:`scale(${S}) translate3d(${O}px, 0, 0)`}),!c&&m.current&&(Ae.current=setTimeout(()=>{const b=De(m.current,p);E(m.current,{transition:"none",transform:R(p)?`translate3d(0, ${b}px, 0)`:`translate3d(${b}px, 0, 0)`})},500))}function Zt(c,S){if(S<0)return;const O=(window.innerWidth-_e)/window.innerWidth,b=O+S*(1-O),D=-16+S*_e;E(m.current,{transform:R(p)?`scale(${b}) translate3d(0, ${D}px, 0)`:`scale(${b}) translate3d(${D}px, 0, 0)`,transition:"none"})}function en(c,S){const O=R(p)?window.innerHeight:window.innerWidth,b=S?(O-_e)/O:1,D=S?-16:0;S&&E(m.current,{transition:`transform ${B.DURATION}s cubic-bezier(${B.EASE.join(",")})`,transform:R(p)?`scale(${b}) translate3d(0, ${D}px, 0)`:`scale(${b}) translate3d(${D}px, 0, 0)`})}return o.useEffect(()=>{L||window.requestAnimationFrame(()=>{document.body.style.pointerEvents="auto"})},[L]),o.createElement(rn,{defaultOpen:K,onOpenChange:c=>{!f&&!c||(c?Z(!0):de(!0),q(c))},open:P},o.createElement(Rt.Provider,{value:{activeSnapPoint:Wt,snapPoints:i,setActiveSnapPoint:Xe,drawerRef:m,overlayRef:ae,onOpenChange:n,onPress:Xt,onRelease:Jt,onDrag:Kt,dismissible:f,shouldAnimate:Ve,handleOnly:d,isOpen:P,isDragging:ee,shouldFade:Ke,closeDrawer:de,onNestedDrag:Zt,onNestedOpenChange:Qt,onNestedRelease:en,keyboardIsOpen:oe,modal:L,snapPointsOffset:ce,activeSnapPointIndex:ie,direction:p,shouldScaleBackground:y,setBackgroundColorOnScale:w,noBodyStyles:_,container:A,autoFocus:U}},t))}const Ft=o.forwardRef(function({...e},n){const{overlayRef:t,snapPoints:a,onRelease:s,shouldFade:i,isOpen:y,modal:w,shouldAnimate:k}=ke(),C=At(n,t),f=a&&a.length>0;if(!w)return null;const d=o.useCallback(h=>s(h),[s]);return o.createElement(on,{onMouseUp:d,ref:C,"data-vaul-overlay":"","data-vaul-snap-points":y&&f?"true":"false","data-vaul-snap-points-overlay":y&&i?"true":"false","data-vaul-animate":k!=null&&k.current?"true":"false",...e})});Ft.displayName="Drawer.Overlay";const Mt=o.forwardRef(function({onPointerDownOutside:e,style:n,onOpenAutoFocus:t,...a},s){const{drawerRef:i,onPress:y,onRelease:w,onDrag:k,keyboardIsOpen:C,snapPointsOffset:f,activeSnapPointIndex:d,modal:h,isOpen:F,direction:H,snapPoints:T,container:L,handleOnly:g,shouldAnimate:j,autoFocus:_}=ke(),[p,K]=o.useState(!1),Q=At(s,i),u=o.useRef(null),x=o.useRef(null),v=o.useRef(!1),$=T&&T.length>0;An();const A=(l,z,P=0)=>{if(v.current)return!0;const q=Math.abs(l.y),M=Math.abs(l.x),Z=M>q,ee=["bottom","right"].includes(z)?1:-1;if(z==="left"||z==="right"){if(!(l.x*ee<0)&&M>=0&&M<=P)return Z}else if(!(l.y*ee<0)&&q>=0&&q<=P)return!Z;return v.current=!0,!0};o.useEffect(()=>{$&&window.requestAnimationFrame(()=>{K(!0)})},[]);function U(l){u.current=null,v.current=!1,w(l)}return o.createElement(sn,{"data-vaul-drawer-direction":H,"data-vaul-drawer":"","data-vaul-delayed-snap-points":p?"true":"false","data-vaul-snap-points":F&&$?"true":"false","data-vaul-custom-container":L?"true":"false","data-vaul-animate":j!=null&&j.current?"true":"false",...a,ref:Q,style:f&&f.length>0?{"--snap-point-height":`${f[d??0]}px`,...n}:n,onPointerDown:l=>{g||(a.onPointerDown==null||a.onPointerDown.call(a,l),u.current={x:l.pageX,y:l.pageY},y(l))},onOpenAutoFocus:l=>{t==null||t(l),_||l.preventDefault()},onPointerDownOutside:l=>{if(e==null||e(l),!h||l.defaultPrevented){l.preventDefault();return}C.current&&(C.current=!1)},onFocusOutside:l=>{if(!h){l.preventDefault();return}},onPointerMove:l=>{if(x.current=l,g||(a.onPointerMove==null||a.onPointerMove.call(a,l),!u.current))return;const z=l.pageY-u.current.y,P=l.pageX-u.current.x,q=l.pointerType==="touch"?10:2;A({x:P,y:z},H,q)?k(l):(Math.abs(P)>q||Math.abs(z)>q)&&(u.current=null)},onPointerUp:l=>{a.onPointerUp==null||a.onPointerUp.call(a,l),u.current=null,v.current=!1,w(l)},onPointerOut:l=>{a.onPointerOut==null||a.onPointerOut.call(a,l),U(x.current)},onContextMenu:l=>{a.onContextMenu==null||a.onContextMenu.call(a,l),x.current&&U(x.current)}})});Mt.displayName="Drawer.Content";const Pn=250,In=120,Nn=o.forwardRef(function({preventCycle:e=!1,children:n,...t},a){const{closeDrawer:s,isDragging:i,snapPoints:y,activeSnapPoint:w,setActiveSnapPoint:k,dismissible:C,handleOnly:f,isOpen:d,onPress:h,onDrag:F}=ke(),H=o.useRef(null),T=o.useRef(!1);function L(){if(T.current){_();return}window.setTimeout(()=>{g()},In)}function g(){if(i||e||T.current){_();return}if(_(),!y||y.length===0){C||s();return}if(w===y[y.length-1]&&C){s();return}const K=y.findIndex(u=>u===w);if(K===-1)return;const Q=y[K+1];k(Q)}function j(){H.current=window.setTimeout(()=>{T.current=!0},Pn)}function _(){H.current&&window.clearTimeout(H.current),T.current=!1}return o.createElement("div",{onClick:L,onPointerCancel:_,onPointerDown:p=>{f&&h(p),j()},onPointerMove:p=>{f&&F(p)},ref:a,"data-vaul-drawer-visible":d?"true":"false","data-vaul-handle":"","aria-hidden":"true",...t},o.createElement("span",{"data-vaul-handle-hitarea":"","aria-hidden":"true"},n))});Nn.displayName="Drawer.Handle";function Fn(e){const n=ke(),{container:t=n.container,...a}=e;return o.createElement(an,{container:t,...a})}const Re={Root:$n,Content:Mt,Overlay:Ft,Portal:Fn},Mn="_drawer_r4vhn_4",Ln="_sizeSmall_r4vhn_22",zn="_sizeMedium_r4vhn_26",Wn="_sizeLarge_r4vhn_30",Vn="_positionLeft_r4vhn_35",Un="_positionRight_r4vhn_45",qn="_overlay_r4vhn_56",Yn="_header_r4vhn_65",Xn="_headerContent_r4vhn_75",Kn="_backButton_r4vhn_83",Gn="_headerPrefix_r4vhn_104",Jn="_headerSuffix_r4vhn_105",Qn="_title_r4vhn_109",Zn="_closeButton_r4vhn_148",er="_content_r4vhn_170",tr="_footer_r4vhn_179",nr="_footerContent_r4vhn_189",rr="_actions_r4vhn_193",ar="_footerButton_r4vhn_200",or="_variantPrimary_r4vhn_240",ir="_variantSecondary_r4vhn_254",sr="_variantTertiary_r4vhn_268",lr="_variantPlain_r4vhn_284",ur="_toneDefault_r4vhn_299",cr="_toneCritical_r4vhn_301",dr="_toneSuccess_r4vhn_315",fr="_toneNeutral_r4vhn_329",pr="_disabled_r4vhn_344",hr="_loading_r4vhn_349",mr="_fadeIn_r4vhn_1",gr="_slideInLeft_r4vhn_1",wr="_slideInRight_r4vhn_1",I={drawer:Mn,sizeSmall:Ln,sizeMedium:zn,sizeLarge:Wn,positionLeft:Vn,positionRight:Un,overlay:qn,header:Yn,headerContent:Xn,backButton:Kn,headerPrefix:Gn,headerSuffix:Jn,title:Qn,closeButton:Zn,content:er,footer:tr,footerContent:nr,actions:rr,footerButton:ar,variantPrimary:or,variantSecondary:ir,variantTertiary:sr,variantPlain:lr,toneDefault:ur,toneCritical:cr,toneSuccess:dr,toneNeutral:fr,disabled:pr,loading:hr,fadeIn:mr,slideInLeft:gr,slideInRight:wr},X=N.forwardRef(({open:e,onOpenChange:n,title:t,headerPrefix:a,headerSuffix:s,showBackButton:i=!1,showTitle:y=!0,showClose:w=!0,showFooter:k=!1,footerContent:C,primaryAction:f,secondaryAction:d,onBackClick:h,size:F="medium",position:H="right",className:T="",overlayOpacity:L=.7,blurBackground:g=!0,useSurfaceBackground:j=!0,fullHeight:_=!0,children:p,...K},Q)=>{const[u,x]=N.useState(!1);N.useEffect(()=>{const q=document.dir||document.documentElement.dir;x(q==="rtl")},[]);const v=u?H==="right"?"left":"right":H,$={lineHeight:u?"var(--t-line-height-arabic, 1.2)":"var(--t-line-height-english, 1.5)"},A=()=>{h?h():n(!1)},U=u?ln:dn,l=nn(I.drawer,I[`size${F.charAt(0).toUpperCase()+F.slice(1)}`],I[`position${v.charAt(0).toUpperCase()+v.slice(1)}`],T),z={backgroundColor:`rgba(0, 0, 0, ${L})`,backdropFilter:g?"blur(2px)":"none"},P={backgroundColor:j?"var(--t-color-surface-primary)":void 0,height:_?"100vh":void 0,maxHeight:_?"100vh":void 0};return r.jsx(Re.Root,{open:e,onOpenChange:n,direction:v,shouldScaleBackground:!0,modal:!0,children:r.jsxs(Re.Portal,{children:[r.jsx(Re.Overlay,{className:I.overlay,style:z}),r.jsxs(Re.Content,{ref:Q,className:l,"data-direction":v,style:P,...K,children:[r.jsxs("div",{className:I.header,children:[r.jsxs("div",{className:I.headerContent,children:[i&&r.jsx(V,{variant:"plain",onClick:A,"aria-label":u?"التالي":"Back",className:I.backButton,prefixIcon:r.jsx(U,{size:20})}),a&&r.jsx("div",{className:I.headerPrefix,children:a}),y&&t&&r.jsx("h2",{className:I.title,style:$,children:t}),s&&r.jsx("div",{className:I.headerSuffix,children:s})]}),w&&r.jsx(V,{variant:"plain",onClick:()=>n(!1),"aria-label":u?"إغلاق":"Close",className:I.closeButton,prefixIcon:r.jsx(cn,{size:20})})]}),r.jsx("div",{className:I.content,children:p}),k&&r.jsxs("div",{className:I.footer,children:[C&&r.jsx("div",{className:I.footerContent,children:C}),r.jsxs("div",{className:I.actions,children:[d&&r.jsx(V,{variant:d.variant||"secondary",tone:d.tone||"default",onClick:d.onClick,disabled:d.disabled,className:I.footerButton,children:d.label}),f&&r.jsx(V,{variant:f.variant||"primary",tone:f.tone||"default",onClick:f.onClick,disabled:f.disabled,loading:f.loading,className:I.footerButton,children:f.label})]})]})]})]})})});X.displayName="Drawer";try{X.displayName="Drawer",X.__docgenInfo={description:"",displayName:"Drawer",props:{open:{defaultValue:null,description:"Whether the drawer is open",name:"open",required:!0,type:{name:"boolean"}},onOpenChange:{defaultValue:null,description:"Callback function when the drawer open state changes",name:"onOpenChange",required:!0,type:{name:"(open: boolean) => void"}},title:{defaultValue:null,description:"The drawer title",name:"title",required:!1,type:{name:"ReactNode"}},headerPrefix:{defaultValue:null,description:"Component to display before the title",name:"headerPrefix",required:!1,type:{name:"ReactNode"}},headerSuffix:{defaultValue:null,description:"Component to display after the title, before the close button",name:"headerSuffix",required:!1,type:{name:"ReactNode"}},showBackButton:{defaultValue:{value:"false"},description:"Whether to show the back button",name:"showBackButton",required:!1,type:{name:"boolean | undefined"}},showTitle:{defaultValue:{value:"true"},description:"Whether to show the title",name:"showTitle",required:!1,type:{name:"boolean | undefined"}},showClose:{defaultValue:{value:"true"},description:"Whether to show the close button",name:"showClose",required:!1,type:{name:"boolean | undefined"}},showFooter:{defaultValue:{value:"false"},description:"Whether to show the footer",name:"showFooter",required:!1,type:{name:"boolean | undefined"}},footerContent:{defaultValue:null,description:"Content to be displayed in the footer",name:"footerContent",required:!1,type:{name:"ReactNode"}},primaryAction:{defaultValue:null,description:"Primary action for the footer",name:"primaryAction",required:!1,type:{name:'{ label: string; onClick: () => void; disabled?: boolean | undefined; loading?: boolean | undefined; variant?: "primary" | "secondary" | "tertiary" | "plain" | undefined; tone?: "default" | ... 4 more ... | undefined; } | undefined'}},secondaryAction:{defaultValue:null,description:"Secondary action for the footer",name:"secondaryAction",required:!1,type:{name:'{ label: string; onClick: () => void; disabled?: boolean | undefined; variant?: "primary" | "secondary" | "tertiary" | "plain" | undefined; tone?: "default" | "success" | "critical" | "magic" | "neutral" | undefined; } | undefined'}},onBackClick:{defaultValue:null,description:"Callback when back button is clicked",name:"onBackClick",required:!1,type:{name:"(() => void) | undefined"}},size:{defaultValue:{value:"medium"},description:"The size of the drawer",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"medium"'},{value:'"large"'},{value:'"small"'}]}},position:{defaultValue:{value:"right"},description:"The position of the drawer",name:"position",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:{value:""},description:"Additional class name",name:"className",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Children to be rendered in the drawer content",name:"children",required:!0,type:{name:"ReactNode"}},overlayOpacity:{defaultValue:{value:"0.7"},description:"Custom overlay opacity (0-1)",name:"overlayOpacity",required:!1,type:{name:"number | undefined"}},blurBackground:{defaultValue:{value:"true"},description:"Whether to blur the background when the drawer is open",name:"blurBackground",required:!1,type:{name:"boolean | undefined"}},useSurfaceBackground:{defaultValue:{value:"true"},description:`Use the bg-surface token for background (--t-color-surface-background)
This is white by default in the Tagaddod Design System`,name:"useSurfaceBackground",required:!1,type:{name:"boolean | undefined"}},fullHeight:{defaultValue:{value:"true"},description:"Use full viewport height",name:"fullHeight",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const vr={title:"Components/Drawer",component:X,parameters:{layout:"centered",docs:{page:()=>tn(()=>import("./Drawer-DSvXvHt2.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]),import.meta.url)}},tags:[],argTypes:{title:{control:"text",description:"The title displayed in the drawer header"},size:{options:["small","medium","large"],control:{type:"radio"},description:"The size of the drawer"},position:{options:["right","left"],control:{type:"radio"},description:"The position of the drawer"},showBackButton:{control:"boolean",description:"Show or hide the back button"},showTitle:{control:"boolean",description:"Show or hide the title"},showClose:{control:"boolean",description:"Show or hide the close button"},showFooter:{control:"boolean",description:"Show or hide the footer"},headerPrefix:{control:{type:"text"},description:"Element to display before the title"},headerSuffix:{control:{type:"text"},description:"Element to display after the title"},overlayOpacity:{control:{type:"range",min:0,max:1,step:.1},description:"Opacity of the overlay background (0-1)"},blurBackground:{control:"boolean",description:"Whether to apply a blur effect to the background"},useSurfaceBackground:{control:"boolean",description:"Whether to use the surface background color (--t-color-surface-background)"},fullHeight:{control:"boolean",description:"Whether to use full viewport height"}}},he={render:e=>{const[n,t]=N.useState(!1);return r.jsxs("div",{children:[r.jsx(V,{onClick:()=>t(!0),children:"Open Drawer"}),r.jsx(X,{...e,open:n,onOpenChange:t,children:r.jsxs("div",{style:{padding:"16px 0"},children:[r.jsx("p",{children:"This is a default drawer content."}),r.jsx("p",{children:"You can place any content here."})]})})]})},args:{title:"Drawer Title",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!1,overlayOpacity:.7,blurBackground:!0,useSurfaceBackground:!0,fullHeight:!0}},me={render:e=>{const[n,t]=N.useState(!1);return r.jsxs("div",{children:[r.jsx(V,{onClick:()=>t(!0),children:"Open Drawer with Header Components"}),r.jsx(X,{...e,open:n,onOpenChange:t,headerPrefix:r.jsx("span",{style:{background:"var(--t-color-fill-brand-secondary)",padding:"4px 8px",borderRadius:"4px"},children:"Badge"}),headerSuffix:r.jsx(V,{variant:"plain",size:"micro",children:"Action"}),children:r.jsxs("div",{style:{padding:"16px 0"},children:[r.jsx("p",{children:"This drawer has custom header prefix and suffix components."}),r.jsx("p",{children:"You can use any component like badges or buttons."})]})})]})},args:{title:"Drawer with Header Components",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!1,overlayOpacity:.7,blurBackground:!0,useSurfaceBackground:!0,fullHeight:!0}},ge={render:e=>{const[n,t]=N.useState(!1),[a,s]=N.useState(1),i=()=>{a>1?s(a-1):t(!1)};return r.jsxs("div",{children:[r.jsx(V,{onClick:()=>{t(!0),s(1)},children:"Open Multi-step Drawer"}),r.jsx(X,{...e,open:n,onOpenChange:t,showBackButton:!0,onBackClick:i,title:`Step ${a} of 3`,children:r.jsxs("div",{style:{padding:"16px 0"},children:[r.jsxs("p",{children:["This is step ",a," of a multi-step drawer."]}),a<3&&r.jsx(V,{onClick:()=>s(a+1),style:{marginTop:"16px"},children:"Next Step"})]})})]})},args:{size:"medium",position:"right",showTitle:!0,showClose:!0,showFooter:!1,overlayOpacity:.7,blurBackground:!0,useSurfaceBackground:!0,fullHeight:!0}},we={render:e=>{const[n,t]=N.useState(!1);return r.jsxs("div",{children:[r.jsx(V,{onClick:()=>t(!0),children:"Open Drawer with Footer"}),r.jsx(X,{...e,open:n,onOpenChange:t,showFooter:!0,primaryAction:{label:"Save",onClick:()=>{alert("Saved!"),t(!1)},variant:"primary"},secondaryAction:{label:"Cancel",onClick:()=>t(!1),variant:"tertiary"},footerContent:r.jsx("span",{style:{color:"var(--t-color-text-subtle)"},children:"Last edited: Today"}),children:r.jsxs("div",{style:{padding:"16px 0"},children:[r.jsx("p",{children:"This drawer has a footer with action buttons and custom content."}),r.jsx("p",{children:"Click Save or Cancel to close the drawer."})]})})]})},args:{title:"Drawer with Footer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,overlayOpacity:.7,blurBackground:!0,useSurfaceBackground:!0,fullHeight:!0}},ve={render:e=>{const[n,t]=N.useState(!1);return o.useEffect(()=>{const a=document.documentElement.dir;return document.documentElement.dir="rtl",()=>{document.documentElement.dir=a}},[]),r.jsxs("div",{dir:"rtl",children:[r.jsx(V,{onClick:()=>t(!0),children:"افتح الدرج"}),r.jsx(X,{...e,open:n,onOpenChange:t,showFooter:!0,primaryAction:{label:"حفظ",onClick:()=>{alert("تم الحفظ!"),t(!1)},variant:"primary"},secondaryAction:{label:"إلغاء",onClick:()=>t(!1),variant:"tertiary"},children:r.jsxs("div",{style:{padding:"16px 0",textAlign:"right"},children:[r.jsx("p",{children:"هذا محتوى الدرج باللغة العربية."}),r.jsx("p",{children:"يمكنك وضع أي محتوى هنا."})]})})]})},args:{title:"عنوان الدرج",size:"medium",position:"right",showBackButton:!0,showTitle:!0,showClose:!0,showFooter:!0,overlayOpacity:.7,blurBackground:!0,useSurfaceBackground:!0,fullHeight:!0}},ye={render:e=>{const[n,t]=N.useState(!1);return r.jsxs("div",{children:[r.jsx(V,{onClick:()=>t(!0),children:"Open Large Drawer"}),r.jsx(X,{...e,open:n,onOpenChange:t,size:"large",children:r.jsxs("div",{style:{padding:"16px 0"},children:[r.jsx("p",{children:"This is a large drawer with more content space."}),r.jsx("p",{children:"It's useful for complex forms or detailed information."}),r.jsx("div",{style:{height:"1000px",background:"var(--t-color-fill-brand-secondary)",marginTop:"20px",padding:"20px"},children:r.jsx("p",{children:"Scroll content to test the drawer's scrolling behavior."})})]})})]})},args:{title:"Large Drawer",size:"large",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,primaryAction:{label:"Save",onClick:()=>alert("Saved!"),variant:"primary"},secondaryAction:{label:"Cancel",onClick:()=>{},variant:"tertiary"},overlayOpacity:.7,blurBackground:!0,useSurfaceBackground:!0,fullHeight:!0}},be={render:e=>{const[n,t]=N.useState(!1);return r.jsxs("div",{children:[r.jsx(V,{onClick:()=>t(!0),children:"Open Full Height Drawer"}),r.jsx(X,{...e,open:n,onOpenChange:t,fullHeight:!0,children:r.jsxs("div",{style:{padding:"16px 0"},children:[r.jsx("p",{children:"This drawer spans the full height of the viewport."}),r.jsx("p",{children:"It's ideal for displaying large amounts of content or for applications that need the drawer to match the page height."}),r.jsx("div",{style:{height:"1000px",background:"var(--t-color-fill-brand-secondary)",marginTop:"20px",padding:"20px"},children:r.jsx("p",{children:"This content area can be scrolled while the header and footer remain fixed."})})]})})]})},args:{title:"Full Height Drawer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!0,primaryAction:{label:"Save",onClick:()=>alert("Saved!"),variant:"primary"},secondaryAction:{label:"Cancel",onClick:()=>{},variant:"tertiary"},overlayOpacity:.7,blurBackground:!0,useSurfaceBackground:!0,fullHeight:!0}},xe={render:e=>{const[n,t]=N.useState(!1);return r.jsxs("div",{children:[r.jsx(V,{onClick:()=>t(!0),children:"Open White Background Drawer"}),r.jsx(X,{...e,open:n,onOpenChange:t,useSurfaceBackground:!0,children:r.jsxs("div",{style:{padding:"16px 0"},children:[r.jsx("p",{children:"This drawer uses the --t-color-surface-background token for its background color."}),r.jsx("p",{children:"This ensures it matches the design system's surface color (white by default)."}),r.jsx("div",{style:{background:"var(--t-color-fill-brand-secondary)",marginTop:"20px",padding:"20px",borderRadius:"var(--t-border-radius-200)"},children:r.jsx("p",{children:"This colored box demonstrates the contrast with the drawer's white background."})})]})})]})},args:{title:"Surface Background Drawer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!1,overlayOpacity:.7,blurBackground:!0,useSurfaceBackground:!0,fullHeight:!0}},Se={render:e=>{const[n,t]=N.useState(!1);return r.jsxs("div",{children:[r.jsx(V,{onClick:()=>t(!0),children:"Open with Custom Overlay"}),r.jsx(X,{...e,open:n,onOpenChange:t,overlayOpacity:.9,blurBackground:!0,children:r.jsxs("div",{style:{padding:"16px 0"},children:[r.jsx("p",{children:"This drawer has a darker overlay with opacity set to 0.9."}),r.jsx("p",{children:"The background also has a blur effect applied."}),r.jsx("p",{children:"These settings improve the visibility and focus on the drawer content."})]})})]})},args:{title:"Custom Overlay Drawer",size:"medium",position:"right",showBackButton:!1,showTitle:!0,showClose:!0,showFooter:!1,overlayOpacity:.9,blurBackground:!0,useSurfaceBackground:!0,fullHeight:!0}};var rt,at,ot;he.parameters={...he.parameters,docs:{...(rt=he.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen}>
          <div style={{
          padding: '16px 0'
        }}>
            <p>This is a default drawer content.</p>
            <p>You can place any content here.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Drawer Title',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(ot=(at=he.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var it,st,lt;me.parameters={...me.parameters,docs:{...(it=me.parameters)==null?void 0:it.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Drawer with Header Components</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} headerPrefix={<span style={{
        background: 'var(--t-color-fill-brand-secondary)',
        padding: '4px 8px',
        borderRadius: '4px'
      }}>Badge</span>} headerSuffix={<Button variant="plain" size="micro">Action</Button>}>
          <div style={{
          padding: '16px 0'
        }}>
            <p>This drawer has custom header prefix and suffix components.</p>
            <p>You can use any component like badges or buttons.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Drawer with Header Components',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(lt=(st=me.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var ut,ct,dt;ge.parameters={...ge.parameters,docs:{...(ut=ge.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1);
    const handleBack = () => {
      if (step > 1) {
        setStep(step - 1);
      } else {
        setOpen(false);
      }
    };
    return <div>
        <Button onClick={() => {
        setOpen(true);
        setStep(1);
      }}>Open Multi-step Drawer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} showBackButton={true} onBackClick={handleBack} title={\`Step \${step} of 3\`}>
          <div style={{
          padding: '16px 0'
        }}>
            <p>This is step {step} of a multi-step drawer.</p>
            {step < 3 && <Button onClick={() => setStep(step + 1)} style={{
            marginTop: '16px'
          }}>
                Next Step
              </Button>}
          </div>
        </Drawer>
      </div>;
  },
  args: {
    size: 'medium',
    position: 'right',
    showTitle: true,
    showClose: true,
    showFooter: false,
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(dt=(ct=ge.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var ft,pt,ht;we.parameters={...we.parameters,docs:{...(ft=we.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Drawer with Footer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} showFooter={true} primaryAction={{
        label: 'Save',
        onClick: () => {
          alert('Saved!');
          setOpen(false);
        },
        variant: 'primary'
      }} secondaryAction={{
        label: 'Cancel',
        onClick: () => setOpen(false),
        variant: 'tertiary'
      }} footerContent={<span style={{
        color: 'var(--t-color-text-subtle)'
      }}>Last edited: Today</span>}>
          <div style={{
          padding: '16px 0'
        }}>
            <p>This drawer has a footer with action buttons and custom content.</p>
            <p>Click Save or Cancel to close the drawer.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Drawer with Footer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(ht=(pt=we.parameters)==null?void 0:pt.docs)==null?void 0:ht.source}}};var mt,gt,wt;ve.parameters={...ve.parameters,docs:{...(mt=ve.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);

    // Toggle direction for this story only
    React.useEffect(() => {
      const originalDir = document.documentElement.dir;
      document.documentElement.dir = 'rtl';
      return () => {
        document.documentElement.dir = originalDir;
      };
    }, []);
    return <div dir="rtl">
        <Button onClick={() => setOpen(true)}>افتح الدرج</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} showFooter={true} primaryAction={{
        label: 'حفظ',
        onClick: () => {
          alert('تم الحفظ!');
          setOpen(false);
        },
        variant: 'primary'
      }} secondaryAction={{
        label: 'إلغاء',
        onClick: () => setOpen(false),
        variant: 'tertiary'
      }}>
          <div style={{
          padding: '16px 0',
          textAlign: 'right'
        }}>
            <p>هذا محتوى الدرج باللغة العربية.</p>
            <p>يمكنك وضع أي محتوى هنا.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'عنوان الدرج',
    size: 'medium',
    position: 'right',
    // will be adjusted to 'left' in RTL
    showBackButton: true,
    showTitle: true,
    showClose: true,
    showFooter: true,
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(wt=(gt=ve.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var vt,yt,bt;ye.parameters={...ye.parameters,docs:{...(vt=ye.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Large Drawer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} size="large">
          <div style={{
          padding: '16px 0'
        }}>
            <p>This is a large drawer with more content space.</p>
            <p>It's useful for complex forms or detailed information.</p>
            <div style={{
            height: '1000px',
            background: 'var(--t-color-fill-brand-secondary)',
            marginTop: '20px',
            padding: '20px'
          }}>
              <p>Scroll content to test the drawer's scrolling behavior.</p>
            </div>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Large Drawer',
    size: 'large',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    primaryAction: {
      label: 'Save',
      onClick: () => alert('Saved!'),
      variant: 'primary'
    },
    secondaryAction: {
      label: 'Cancel',
      onClick: () => {},
      variant: 'tertiary'
    },
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(bt=(yt=ye.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var xt,St,kt;be.parameters={...be.parameters,docs:{...(xt=be.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open Full Height Drawer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} fullHeight={true}>
          <div style={{
          padding: '16px 0'
        }}>
            <p>This drawer spans the full height of the viewport.</p>
            <p>It's ideal for displaying large amounts of content or for applications that need the drawer to match the page height.</p>
            <div style={{
            height: '1000px',
            background: 'var(--t-color-fill-brand-secondary)',
            marginTop: '20px',
            padding: '20px'
          }}>
              <p>This content area can be scrolled while the header and footer remain fixed.</p>
            </div>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Full Height Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: true,
    primaryAction: {
      label: 'Save',
      onClick: () => alert('Saved!'),
      variant: 'primary'
    },
    secondaryAction: {
      label: 'Cancel',
      onClick: () => {},
      variant: 'tertiary'
    },
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(kt=(St=be.parameters)==null?void 0:St.docs)==null?void 0:kt.source}}};var Ct,Ot,Tt;xe.parameters={...xe.parameters,docs:{...(Ct=xe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open White Background Drawer</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} useSurfaceBackground={true}>
          <div style={{
          padding: '16px 0'
        }}>
            <p>This drawer uses the --t-color-surface-background token for its background color.</p>
            <p>This ensures it matches the design system's surface color (white by default).</p>
            <div style={{
            background: 'var(--t-color-fill-brand-secondary)',
            marginTop: '20px',
            padding: '20px',
            borderRadius: 'var(--t-border-radius-200)'
          }}>
              <p>This colored box demonstrates the contrast with the drawer's white background.</p>
            </div>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Surface Background Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    overlayOpacity: 0.7,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(Tt=(Ot=xe.parameters)==null?void 0:Ot.docs)==null?void 0:Tt.source}}};var Bt,Dt,_t;Se.parameters={...Se.parameters,docs:{...(Bt=Se.parameters)==null?void 0:Bt.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}>Open with Custom Overlay</Button>
        <Drawer {...args} open={open} onOpenChange={setOpen} overlayOpacity={0.9} blurBackground={true}>
          <div style={{
          padding: '16px 0'
        }}>
            <p>This drawer has a darker overlay with opacity set to 0.9.</p>
            <p>The background also has a blur effect applied.</p>
            <p>These settings improve the visibility and focus on the drawer content.</p>
          </div>
        </Drawer>
      </div>;
  },
  args: {
    title: 'Custom Overlay Drawer',
    size: 'medium',
    position: 'right',
    showBackButton: false,
    showTitle: true,
    showClose: true,
    showFooter: false,
    overlayOpacity: 0.9,
    blurBackground: true,
    useSurfaceBackground: true,
    fullHeight: true
  }
}`,...(_t=(Dt=Se.parameters)==null?void 0:Dt.docs)==null?void 0:_t.source}}};const yr=["Default","WithHeaderComponents","WithBackButton","WithFooter","RTLDrawer","LargeDrawer","FullHeightDrawer","SurfaceBackground","CustomOverlay"],_r=Object.freeze(Object.defineProperty({__proto__:null,CustomOverlay:Se,Default:he,FullHeightDrawer:be,LargeDrawer:ye,RTLDrawer:ve,SurfaceBackground:xe,WithBackButton:ge,WithFooter:we,WithHeaderComponents:me,__namedExportsOrder:yr,default:vr},Symbol.toStringTag,{value:"Module"}));export{Se as C,_r as D,be as F,ye as L,ve as R,xe as S,ge as W,X as a,he as b,me as c,we as d};
