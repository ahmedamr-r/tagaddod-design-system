const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Avatar-DS9DwIVU.js","./jsx-runtime-Cf8x2fCZ.js","./index-yBjzXJbu.js","./index-DI2gBlDf.js","./index-BlmOqGMO.js","./index-BPXrzZIR.js","./iframe-BpZEF_5K.js","./index-DybOl1hA.js","./index-fNjTmf9T.js","./index-CXQShRbs.js","./index-DrFu-skq.js","./index-CfQheYXo.js","./index-DZCApzUK.js","./clsx-B-dksMZM.js","./IconUser-C1LEUmMM.js","./createReactComponent-GuN14Mgc.js"])))=>i.map(i=>d[i]);
import{_ as ce}from"./iframe-BpZEF_5K.js";import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-BlmOqGMO.js";import{c as de,P as q,d as R}from"./index-CfQheYXo.js";import{u as ue}from"./index-DZCApzUK.js";import{r as pe}from"./index-yBjzXJbu.js";import{c as me}from"./clsx-B-dksMZM.js";import{I as fe}from"./IconUser-C1LEUmMM.js";var L={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U;function ge(){if(U)return w;U=1;var e=pe();function i(t,c){return t===c&&(t!==0||1/t===1/c)||t!==t&&c!==c}var n=typeof Object.is=="function"?Object.is:i,s=e.useState,o=e.useEffect,a=e.useLayoutEffect,p=e.useDebugValue;function l(t,c){var y=c(),j=s({inst:{value:y,getSnapshot:c}}),g=j[0].inst,I=j[1];return a(function(){g.value=y,g.getSnapshot=c,d(g)&&I({inst:g})},[t,y,c]),o(function(){return d(g)&&I({inst:g}),t(function(){d(g)&&I({inst:g})})},[t]),p(y),y}function d(t){var c=t.getSnapshot;t=t.value;try{var y=c();return!n(t,y)}catch{return!0}}function m(t,c){return c()}var v=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:l;return w.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:v,w}var N;function ve(){return N||(N=1,L.exports=ge()),L.exports}var ye=ve();function he(){return ye.useSyncExternalStore(Se,()=>!0,()=>!1)}function Se(){return()=>{}}var M="Avatar",[xe,Be]=de(M),[_e,ie]=xe(M),re=f.forwardRef((e,i)=>{const{__scopeAvatar:n,...s}=e,[o,a]=f.useState("idle");return r.jsx(_e,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:a,children:r.jsx(q.span,{...s,ref:i})})});re.displayName=M;var se="AvatarImage",ne=f.forwardRef((e,i)=>{const{__scopeAvatar:n,src:s,onLoadingStatusChange:o=()=>{},...a}=e,p=ie(se,n),l=be(s,a),d=ue(m=>{o(m),p.onImageLoadingStatusChange(m)});return R(()=>{l!=="idle"&&d(l)},[l,d]),l==="loaded"?r.jsx(q.img,{...a,ref:i,src:s}):null});ne.displayName=se;var oe="AvatarFallback",le=f.forwardRef((e,i)=>{const{__scopeAvatar:n,delayMs:s,...o}=e,a=ie(oe,n),[p,l]=f.useState(s===void 0);return f.useEffect(()=>{if(s!==void 0){const d=window.setTimeout(()=>l(!0),s);return()=>window.clearTimeout(d)}},[s]),p&&a.imageLoadingStatus!=="loaded"?r.jsx(q.span,{...o,ref:i}):null});le.displayName=oe;function W(e,i){return e?i?(e.src!==i&&(e.src=i),e.complete&&e.naturalWidth>0?"loaded":"loading"):"error":"idle"}function be(e,{referrerPolicy:i,crossOrigin:n}){const s=he(),o=f.useRef(null),a=s?(o.current||(o.current=new window.Image),o.current):null,[p,l]=f.useState(()=>W(a,e));return R(()=>{l(W(a,e))},[a,e]),R(()=>{const d=t=>()=>{l(t)};if(!a)return;const m=d("loaded"),v=d("error");return a.addEventListener("load",m),a.addEventListener("error",v),i&&(a.referrerPolicy=i),typeof n=="string"&&(a.crossOrigin=n),()=>{a.removeEventListener("load",m),a.removeEventListener("error",v)}},[a,n,i]),p}var Ae=re,ze=ne,Ee=le;const je="_avatar_pab7m_3",Ie="_sizeSm_pab7m_16",Le="_sizeMd_pab7m_21",we="_sizeLg_pab7m_26",Re="_sizeXl_pab7m_31",qe="_image_pab7m_37",Me="_fallback_pab7m_45",Ue="_icon_pab7m_56",Ne="_initial_pab7m_82",h={avatar:je,sizeSm:Ie,sizeMd:Le,sizeLg:we,sizeXl:Re,image:qe,fallback:Me,icon:Ue,initial:Ne},u=f.forwardRef(({type:e="icon",size:i="md",src:n,alt:s,initial:o,className:a,delayMs:p=600},l)=>{const m={lineHeight:document.dir==="rtl"||document.documentElement.dir==="rtl"?"var(--t-line-height-arabic, 1.2)":"var(--t-line-height-english, 1.5)"},v=o?o.trim().charAt(0).toUpperCase():"",t=me(h.avatar,h[`size${i.charAt(0).toUpperCase()+i.slice(1)}`],a);return r.jsxs(Ae,{className:t,ref:l,children:[e==="image"&&n&&r.jsx(ze,{className:h.image,src:n,alt:s||"User avatar",onLoadingStatusChange:()=>{}}),r.jsx(Ee,{className:h.fallback,delayMs:e==="image"?p:0,children:e==="initial"&&v?r.jsx("span",{className:h.initial,style:m,children:v}):r.jsx(fe,{className:h.icon})})]})});u.displayName="Avatar";try{u.displayName="Avatar",u.__docgenInfo={description:"",displayName:"Avatar",props:{type:{defaultValue:{value:"icon"},description:"Avatar type: image (for photos), initial (for text), or icon (default user icon)",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"initial"'},{value:'"icon"'},{value:'"image"'}]}},size:{defaultValue:{value:"md"},description:"Avatar size",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},src:{defaultValue:null,description:"Source URL for the image (required when type is 'image')",name:"src",required:!1,type:{name:"string | undefined"}},alt:{defaultValue:null,description:"Alt text for the image (used when type is 'image')",name:"alt",required:!1,type:{name:"string | undefined"}},initial:{defaultValue:null,description:`Initial to display (required when type is 'initial')
Will use the first letter if a full name is provided`,name:"initial",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"Optional className for additional styling",name:"className",required:!1,type:{name:"string | undefined"}},delayMs:{defaultValue:{value:"600"},description:"Delay in milliseconds before showing the fallback",name:"delayMs",required:!1,type:{name:"number | undefined"}}}}}catch{}const We={title:"Components/Avatar",component:u,parameters:{layout:"centered",docs:{page:()=>ce(()=>import("./Avatar-DS9DwIVU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]),import.meta.url)}},tags:[],argTypes:{type:{control:"radio",options:["image","initial","icon"]},size:{control:"radio",options:["sm","md","lg","xl"]},src:{control:"text"},initial:{control:"text"}}},S={args:{type:"image",size:"md",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"User profile picture"}},x={args:{type:"initial",size:"md",initial:"U"}},_={args:{type:"initial",size:"md",initial:"أ"},parameters:{globals:{direction:"rtl"}}},b={args:{type:"icon",size:"md"}},A={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(u,{size:"sm",type:"initial",initial:"S"}),r.jsx(u,{size:"md",type:"initial",initial:"M"}),r.jsx(u,{size:"lg",type:"initial",initial:"L"}),r.jsx(u,{size:"xl",type:"initial",initial:"X"})]})},z={render:()=>r.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[r.jsx(u,{type:"image",size:"lg",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:"User profile"}),r.jsx(u,{type:"initial",size:"lg",initial:"U"}),r.jsx(u,{type:"icon",size:"lg"})]})},E={args:{type:"image",size:"lg",src:"https://invalid-image-url.com/not-found.jpg",alt:"User profile with fallback"}};var C,k,V;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'image',
    size: 'md',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    alt: 'User profile picture'
  }
}`,...(V=(k=S.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var O,T,D;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'initial',
    size: 'md',
    initial: 'U'
  }
}`,...(D=(T=x.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var H,P,F;_.parameters={..._.parameters,docs:{...(H=_.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'initial',
    size: 'md',
    initial: 'أ'
  },
  parameters: {
    globals: {
      direction: 'rtl'
    }
  }
}`,...(F=(P=_.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var B,X,J;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    size: 'md'
  }
}`,...(J=(X=b.parameters)==null?void 0:X.docs)==null?void 0:J.source}}};var Q,$,G;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar size="sm" type="initial" initial="S" />
      <Avatar size="md" type="initial" initial="M" />
      <Avatar size="lg" type="initial" initial="L" />
      <Avatar size="xl" type="initial" initial="X" />
    </div>
}`,...(G=($=A.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,Y,Z;z.parameters={...z.parameters,docs:{...(K=z.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Avatar type="image" size="lg" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
      <Avatar type="initial" size="lg" initial="U" />
      <Avatar type="icon" size="lg" />
    </div>
}`,...(Z=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    type: 'image',
    size: 'lg',
    src: 'https://invalid-image-url.com/not-found.jpg',
    alt: 'User profile with fallback'
  }
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const Ce=["WithImage","WithInitial","WithArabicInitial","WithIcon","SizeVariants","TypeVariants","WithFallback"],Xe=Object.freeze(Object.defineProperty({__proto__:null,SizeVariants:A,TypeVariants:z,WithArabicInitial:_,WithFallback:E,WithIcon:b,WithImage:S,WithInitial:x,__namedExportsOrder:Ce,default:We},Symbol.toStringTag,{value:"Module"}));export{Xe as A,A as S,S as W,u as a,x as b,b as c,E as d,_ as e};
