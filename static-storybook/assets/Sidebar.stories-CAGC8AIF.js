import{j as s}from"./jsx-runtime-BO8uF4Og.js";import{r as l}from"./index-D4H_InIO.js";import{S as M,I as se}from"./Sidebar-B4HhY5gV.js";import{I as ce}from"./IconSettings-cjygYtAZ.js";import{a as de,I as Ye}from"./IconUsers-CM3_DD69.js";import{I as ue}from"./IconBell-CK5J1bJB.js";import{I as me}from"./IconChartBar-CIBZkQ6D.js";import{I as Je}from"./IconFileText-BstruwGL.js";import{I as gt}from"./IconCalendar-DOlNLz5K.js";import{I as Ke}from"./IconHome-DqBDdcGV.js";import{c as vt}from"./createReactComponent-CKk3lApD.js";/**
 * @license @tabler/icons-react v3.35.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["path",{d:"M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M17 17h-11v-14h-2",key:"svg-2"}],["path",{d:"M6 5l14 1l-1 7h-13",key:"svg-3"}]],qe=vt("outline","shopping-cart","ShoppingCart",yt);/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bt(e={}){let{initialEntries:t=["/"],initialIndex:r,v5Compat:a=!1}=e,n;n=t.map((h,p)=>m(h,typeof h=="string"?null:h.state,p===0?"default":void 0));let o=c(r??n.length-1),i="POP",d=null;function c(h){return Math.min(Math.max(h,0),n.length-1)}function u(){return n[o]}function m(h,p=null,y){let x=St(n?u().pathname:"/",h,p,y);return E(x.pathname.charAt(0)==="/",`relative pathnames are not supported in memory history: ${JSON.stringify(h)}`),x}function f(h){return typeof h=="string"?h:ee(h)}return{get index(){return o},get action(){return i},get location(){return u()},createHref:f,createURL(h){return new URL(f(h),"http://localhost")},encodeLocation(h){let p=typeof h=="string"?$(h):h;return{pathname:p.pathname||"",search:p.search||"",hash:p.hash||""}},push(h,p){i="PUSH";let y=m(h,p);o+=1,n.splice(o,n.length,y),a&&d&&d({action:i,location:y,delta:1})},replace(h,p){i="REPLACE";let y=m(h,p);n[o]=y,a&&d&&d({action:i,location:y,delta:0})},go(h){i="POP";let p=c(o+h),y=n[p];o=p,d&&d({action:i,location:y,delta:h})},listen(h){return d=h,()=>{d=null}}}}function w(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function E(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function xt(){return Math.random().toString(36).substring(2,10)}function St(e,t,r=null,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?$(t):t,state:r,key:t&&t.key||a||xt()}}function ee({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function $(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let a=e.indexOf("?");a>=0&&(t.search=e.substring(a),e=e.substring(0,a)),e&&(t.pathname=e)}return t}function Ge(e,t,r="/"){return wt(e,t,r,!1)}function wt(e,t,r,a){let n=typeof t=="string"?$(t):t,o=k(n.pathname||"/",r);if(o==null)return null;let i=Xe(e);Ct(i);let d=null;for(let c=0;d==null&&c<i.length;++c){let u=Mt(o);d=zt(i[c],u,a)}return d}function Xe(e,t=[],r=[],a="",n=!1){let o=(i,d,c=n,u)=>{let m={relativePath:u===void 0?i.path||"":u,caseSensitive:i.caseSensitive===!0,childrenIndex:d,route:i};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(a)&&c)return;w(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length)}let f=j([a,m.relativePath]),g=r.concat(m);i.children&&i.children.length>0&&(w(i.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${f}".`),Xe(i.children,t,g,f,c)),!(i.path==null&&!i.index)&&t.push({path:f,score:Pt(f,i.index),routesMeta:g})};return e.forEach((i,d)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))o(i,d);else for(let u of Qe(i.path))o(i,d,!0,u)}),t}function Qe(e){let t=e.split("/");if(t.length===0)return[];let[r,...a]=t,n=r.endsWith("?"),o=r.replace(/\?$/,"");if(a.length===0)return n?[o,""]:[o];let i=Qe(a.join("/")),d=[];return d.push(...i.map(c=>c===""?o:[o,c].join("/"))),n&&d.push(...i),d.map(c=>e.startsWith("/")&&c===""?"/":c)}function Ct(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Lt(t.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var Et=/^:[\w-]+$/,Rt=3,It=2,jt=1,kt=10,Bt=-2,be=e=>e==="*";function Pt(e,t){let r=e.split("/"),a=r.length;return r.some(be)&&(a+=Bt),t&&(a+=It),r.filter(n=>!be(n)).reduce((n,o)=>n+(Et.test(o)?Rt:o===""?jt:kt),a)}function Lt(e,t){return e.length===t.length&&e.slice(0,-1).every((a,n)=>a===t[n])?e[e.length-1]-t[t.length-1]:0}function zt(e,t,r=!1){let{routesMeta:a}=e,n={},o="/",i=[];for(let d=0;d<a.length;++d){let c=a[d],u=d===a.length-1,m=o==="/"?t:t.slice(o.length)||"/",f=te({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},m),g=c.route;if(!f&&u&&r&&!a[a.length-1].route.index&&(f=te({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!f)return null;Object.assign(n,f.params),i.push({params:n,pathname:j([o,f.pathname]),pathnameBase:Ht(j([o,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(o=j([o,f.pathnameBase]))}return i}function te(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,a]=At(e.path,e.caseSensitive,e.end),n=t.match(r);if(!n)return null;let o=n[0],i=o.replace(/(.)\/+$/,"$1"),d=n.slice(1);return{params:a.reduce((u,{paramName:m,isOptional:f},g)=>{if(m==="*"){let p=d[g]||"";i=o.slice(0,o.length-p.length).replace(/(.)\/+$/,"$1")}const h=d[g];return f&&!h?u[m]=void 0:u[m]=(h||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:i,pattern:e}}function At(e,t=!1,r=!0){E(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let a=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,d,c)=>(a.push({paramName:d,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(a.push({paramName:"*"}),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,t?void 0:"i"),a]}function Mt(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return E(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function k(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,a=e.charAt(r);return a&&a!=="/"?null:e.slice(r)||"/"}function $t(e,t="/"){let{pathname:r,search:a="",hash:n=""}=typeof e=="string"?$(e):e;return{pathname:r?r.startsWith("/")?r:Tt(r,t):t,search:Dt(a),hash:Nt(n)}}function Tt(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?r.length>1&&r.pop():n!=="."&&r.push(n)}),r.length>1?r.join("/"):"/"}function ie(e,t,r,a){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ft(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Ze(e){let t=Ft(e);return t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase)}function et(e,t,r,a=!1){let n;typeof e=="string"?n=$(e):(n={...e},w(!n.pathname||!n.pathname.includes("?"),ie("?","pathname","search",n)),w(!n.pathname||!n.pathname.includes("#"),ie("#","pathname","hash",n)),w(!n.search||!n.search.includes("#"),ie("#","search","hash",n)));let o=e===""||n.pathname==="",i=o?"/":n.pathname,d;if(i==null)d=r;else{let f=t.length-1;if(!a&&i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),f-=1;n.pathname=g.join("/")}d=f>=0?t[f]:"/"}let c=$t(n,d),u=i&&i!=="/"&&i.endsWith("/"),m=(o||i===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var j=e=>e.join("/").replace(/\/\/+/g,"/"),Ht=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dt=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Nt=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ot(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var tt=["POST","PUT","PATCH","DELETE"];new Set(tt);var Ut=["GET",...tt];new Set(Ut);var T=l.createContext(null);T.displayName="DataRouter";var re=l.createContext(null);re.displayName="DataRouterState";l.createContext(!1);var rt=l.createContext({isTransitioning:!1});rt.displayName="ViewTransition";var Wt=l.createContext(new Map);Wt.displayName="Fetchers";var _t=l.createContext(null);_t.displayName="Await";var I=l.createContext(null);I.displayName="Navigation";var ne=l.createContext(null);ne.displayName="Location";var B=l.createContext({outlet:null,matches:[],isDataRoute:!1});B.displayName="Route";var he=l.createContext(null);he.displayName="RouteError";function Vt(e,{relative:t}={}){w(J(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=l.useContext(I),{hash:n,pathname:o,search:i}=K(e,{relative:t}),d=o;return r!=="/"&&(d=o==="/"?r:j([r,o])),a.createHref({pathname:d,search:i,hash:n})}function J(){return l.useContext(ne)!=null}function P(){return w(J(),"useLocation() may be used only in the context of a <Router> component."),l.useContext(ne).location}var nt="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function at(e){l.useContext(I).static||l.useLayoutEffect(e)}function Yt(){let{isDataRoute:e}=l.useContext(B);return e?or():Jt()}function Jt(){w(J(),"useNavigate() may be used only in the context of a <Router> component.");let e=l.useContext(T),{basename:t,navigator:r}=l.useContext(I),{matches:a}=l.useContext(B),{pathname:n}=P(),o=JSON.stringify(Ze(a)),i=l.useRef(!1);return at(()=>{i.current=!0}),l.useCallback((c,u={})=>{if(E(i.current,nt),!i.current)return;if(typeof c=="number"){r.go(c);return}let m=et(c,JSON.parse(o),n,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:j([t,m.pathname])),(u.replace?r.replace:r.push)(m,u.state,u)},[t,r,o,n,e])}l.createContext(null);function K(e,{relative:t}={}){let{matches:r}=l.useContext(B),{pathname:a}=P(),n=JSON.stringify(Ze(r));return l.useMemo(()=>et(e,JSON.parse(n),a,t==="path"),[e,n,a,t])}function Kt(e,t,r,a,n){w(J(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=l.useContext(I),{matches:i}=l.useContext(B),d=i[i.length-1],c=d?d.params:{},u=d?d.pathname:"/",m=d?d.pathnameBase:"/",f=d&&d.route;{let v=f&&f.path||"";ot(u,!f||v.endsWith("*")||v.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${v}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${v}"> to <Route path="${v==="/"?"*":`${v}/*`}">.`)}let g=P(),h;h=g;let p=h.pathname||"/",y=p;if(m!=="/"){let v=m.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let x=Ge(e,{pathname:y});return E(f||x!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),E(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Zt(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},c,v.params),pathname:j([m,o.encodeLocation?o.encodeLocation(v.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?m:j([m,o.encodeLocation?o.encodeLocation(v.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:v.pathnameBase])})),i,r,a,n)}function qt(){let e=ar(),t=Ot(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",n={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a},i=null;return console.error("Error handled by React Router default ErrorBoundary:",e),i=l.createElement(l.Fragment,null,l.createElement("p",null,"💿 Hey developer 👋"),l.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",l.createElement("code",{style:o},"ErrorBoundary")," or"," ",l.createElement("code",{style:o},"errorElement")," prop on your route.")),l.createElement(l.Fragment,null,l.createElement("h2",null,"Unexpected Application Error!"),l.createElement("h3",{style:{fontStyle:"italic"}},t),r?l.createElement("pre",{style:n},r):null,i)}var Gt=l.createElement(qt,null),Xt=class extends l.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.unstable_onError?this.props.unstable_onError(e,t):console.error("React Router caught the following error during render",e)}render(){return this.state.error!==void 0?l.createElement(B.Provider,{value:this.props.routeContext},l.createElement(he.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Qt({routeContext:e,match:t,children:r}){let a=l.useContext(T);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),l.createElement(B.Provider,{value:e},r)}function Zt(e,t=[],r=null,a=null,n=null){if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let o=e,i=r==null?void 0:r.errors;if(i!=null){let u=o.findIndex(m=>m.route.id&&(i==null?void 0:i[m.route.id])!==void 0);w(u>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,u+1))}let d=!1,c=-1;if(r)for(let u=0;u<o.length;u++){let m=o[u];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(c=u),m.route.id){let{loaderData:f,errors:g}=r,h=m.route.loader&&!f.hasOwnProperty(m.route.id)&&(!g||g[m.route.id]===void 0);if(m.route.lazy||h){d=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,m,f)=>{let g,h=!1,p=null,y=null;r&&(g=i&&m.route.id?i[m.route.id]:void 0,p=m.route.errorElement||Gt,d&&(c<0&&f===0?(ot("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,y=null):c===f&&(h=!0,y=m.route.hydrateFallbackElement||null)));let x=t.concat(o.slice(0,f+1)),b=()=>{let v;return g?v=p:h?v=y:m.route.Component?v=l.createElement(m.route.Component,null):m.route.element?v=m.route.element:v=u,l.createElement(Qt,{match:m,routeContext:{outlet:u,matches:x,isDataRoute:r!=null},children:v})};return r&&(m.route.ErrorBoundary||m.route.errorElement||f===0)?l.createElement(Xt,{location:r.location,revalidation:r.revalidation,component:p,error:g,children:b(),routeContext:{outlet:null,matches:x,isDataRoute:!0},unstable_onError:a}):b()},null)}function fe(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function er(e){let t=l.useContext(T);return w(t,fe(e)),t}function tr(e){let t=l.useContext(re);return w(t,fe(e)),t}function rr(e){let t=l.useContext(B);return w(t,fe(e)),t}function pe(e){let t=rr(e),r=t.matches[t.matches.length-1];return w(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function nr(){return pe("useRouteId")}function ar(){var a;let e=l.useContext(he),t=tr("useRouteError"),r=pe("useRouteError");return e!==void 0?e:(a=t.errors)==null?void 0:a[r]}function or(){let{router:e}=er("useNavigate"),t=pe("useNavigate"),r=l.useRef(!1);return at(()=>{r.current=!0}),l.useCallback(async(n,o={})=>{E(r.current,nt),r.current&&(typeof n=="number"?e.navigate(n):await e.navigate(n,{fromRouteId:t,...o}))},[e,t])}var xe={};function ot(e,t,r){!t&&!xe[e]&&(xe[e]=!0,E(!1,r))}l.memo(ir);function ir({routes:e,future:t,state:r,unstable_onError:a}){return Kt(e,void 0,r,a,t)}function L({basename:e,children:t,initialEntries:r,initialIndex:a}){let n=l.useRef();n.current==null&&(n.current=bt({initialEntries:r,initialIndex:a,v5Compat:!0}));let o=n.current,[i,d]=l.useState({action:o.action,location:o.location}),c=l.useCallback(u=>{l.startTransition(()=>d(u))},[d]);return l.useLayoutEffect(()=>o.listen(c),[o,c]),l.createElement(lr,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:o})}function lr({basename:e="/",children:t=null,location:r,navigationType:a="POP",navigator:n,static:o=!1}){w(!J(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let i=e.replace(/^\/*/,"/"),d=l.useMemo(()=>({basename:i,navigator:n,static:o,future:{}}),[i,n,o]);typeof r=="string"&&(r=$(r));let{pathname:c="/",search:u="",hash:m="",state:f=null,key:g="default"}=r,h=l.useMemo(()=>{let p=k(c,i);return p==null?null:{location:{pathname:p,search:u,hash:m,state:f,key:g},navigationType:a}},[i,c,u,m,f,g,a]);return E(h!=null,`<Router basename="${i}"> is not able to match the URL "${c}${u}${m}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:l.createElement(I.Provider,{value:d},l.createElement(ne.Provider,{children:t,value:h}))}var Q="get",Z="application/x-www-form-urlencoded";function ae(e){return e!=null&&typeof e.tagName=="string"}function sr(e){return ae(e)&&e.tagName.toLowerCase()==="button"}function cr(e){return ae(e)&&e.tagName.toLowerCase()==="form"}function dr(e){return ae(e)&&e.tagName.toLowerCase()==="input"}function ur(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mr(e,t){return e.button===0&&(!t||t==="_self")&&!ur(e)}var X=null;function hr(){if(X===null)try{new FormData(document.createElement("form"),0),X=!1}catch{X=!0}return X}var fr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function le(e){return e!=null&&!fr.has(e)?(E(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Z}"`),null):e}function pr(e,t){let r,a,n,o,i;if(cr(e)){let d=e.getAttribute("action");a=d?k(d,t):null,r=e.getAttribute("method")||Q,n=le(e.getAttribute("enctype"))||Z,o=new FormData(e)}else if(sr(e)||dr(e)&&(e.type==="submit"||e.type==="image")){let d=e.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||d.getAttribute("action");if(a=c?k(c,t):null,r=e.getAttribute("formmethod")||d.getAttribute("method")||Q,n=le(e.getAttribute("formenctype"))||le(d.getAttribute("enctype"))||Z,o=new FormData(d,e),!hr()){let{name:u,type:m,value:f}=e;if(m==="image"){let g=u?`${u}.`:"";o.append(`${g}x`,"0"),o.append(`${g}y`,"0")}else u&&o.append(u,f)}}else{if(ae(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Q,a=null,n=Z,i=e}return o&&n==="text/plain"&&(i=o,o=void 0),{action:a,method:r.toLowerCase(),encType:n,formData:o,body:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gr(e,t,r){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return a.pathname==="/"?a.pathname=`_root.${r}`:t&&k(a.pathname,t)==="/"?a.pathname=`${t.replace(/\/$/,"")}/_root.${r}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${r}`,a}async function vr(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yr(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function br(e,t,r){let a=await Promise.all(e.map(async n=>{let o=t.routes[n.route.id];if(o){let i=await vr(o,r);return i.links?i.links():[]}return[]}));return Cr(a.flat(1).filter(yr).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="stylesheet"?{...n,rel:"prefetch",as:"style"}:{...n,rel:"prefetch"}))}function Se(e,t,r,a,n,o){let i=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,d=(c,u)=>{var m;return r[u].pathname!==c.pathname||((m=r[u].route.path)==null?void 0:m.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>i(c,u)||d(c,u)):o==="data"?t.filter((c,u)=>{var f;let m=a.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(i(c,u)||d(c,u))return!0;if(c.route.shouldRevalidate){let g=c.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((f=r[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function xr(e,t,{includeHydrateFallback:r}={}){return Sr(e.map(a=>{let n=t.routes[a.route.id];if(!n)return[];let o=[n.module];return n.clientActionModule&&(o=o.concat(n.clientActionModule)),n.clientLoaderModule&&(o=o.concat(n.clientLoaderModule)),r&&n.hydrateFallbackModule&&(o=o.concat(n.hydrateFallbackModule)),n.imports&&(o=o.concat(n.imports)),o}).flat(1))}function Sr(e){return[...new Set(e)]}function wr(e){let t={},r=Object.keys(e).sort();for(let a of r)t[a]=e[a];return t}function Cr(e,t){let r=new Set;return new Set(t),e.reduce((a,n)=>{let o=JSON.stringify(wr(n));return r.has(o)||(r.add(o),a.push({key:o,link:n})),a},[])}function it(){let e=l.useContext(T);return ge(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Er(){let e=l.useContext(re);return ge(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ve=l.createContext(void 0);ve.displayName="FrameworkContext";function lt(){let e=l.useContext(ve);return ge(e,"You must render this element inside a <HydratedRouter> element"),e}function Rr(e,t){let r=l.useContext(ve),[a,n]=l.useState(!1),[o,i]=l.useState(!1),{onFocus:d,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:f}=t,g=l.useRef(null);l.useEffect(()=>{if(e==="render"&&i(!0),e==="viewport"){let y=b=>{b.forEach(v=>{i(v.isIntersecting)})},x=new IntersectionObserver(y,{threshold:.5});return g.current&&x.observe(g.current),()=>{x.disconnect()}}},[e]),l.useEffect(()=>{if(a){let y=setTimeout(()=>{i(!0)},100);return()=>{clearTimeout(y)}}},[a]);let h=()=>{n(!0)},p=()=>{n(!1),i(!1)};return r?e!=="intent"?[o,g,{}]:[o,g,{onFocus:H(d,h),onBlur:H(c,p),onMouseEnter:H(u,h),onMouseLeave:H(m,p),onTouchStart:H(f,h)}]:[!1,g,{}]}function H(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Ir({page:e,...t}){let{router:r}=it(),a=l.useMemo(()=>Ge(r.routes,e,r.basename),[r.routes,e,r.basename]);return a?l.createElement(kr,{page:e,matches:a,...t}):null}function jr(e){let{manifest:t,routeModules:r}=lt(),[a,n]=l.useState([]);return l.useEffect(()=>{let o=!1;return br(e,t,r).then(i=>{o||n(i)}),()=>{o=!0}},[e,t,r]),a}function kr({page:e,matches:t,...r}){let a=P(),{manifest:n,routeModules:o}=lt(),{basename:i}=it(),{loaderData:d,matches:c}=Er(),u=l.useMemo(()=>Se(e,t,c,n,a,"data"),[e,t,c,n,a]),m=l.useMemo(()=>Se(e,t,c,n,a,"assets"),[e,t,c,n,a]),f=l.useMemo(()=>{if(e===a.pathname+a.search+a.hash)return[];let p=new Set,y=!1;if(t.forEach(b=>{var S;let v=n.routes[b.route.id];!v||!v.hasLoader||(!u.some(R=>R.route.id===b.route.id)&&b.route.id in d&&((S=o[b.route.id])!=null&&S.shouldRevalidate)||v.hasClientLoader?y=!0:p.add(b.route.id))}),p.size===0)return[];let x=gr(e,i,"data");return y&&p.size>0&&x.searchParams.set("_routes",t.filter(b=>p.has(b.route.id)).map(b=>b.route.id).join(",")),[x.pathname+x.search]},[i,d,a,n,u,t,e,o]),g=l.useMemo(()=>xr(m,n),[m,n]),h=jr(m);return l.createElement(l.Fragment,null,f.map(p=>l.createElement("link",{key:p,rel:"prefetch",as:"fetch",href:p,...r})),g.map(p=>l.createElement("link",{key:p,rel:"modulepreload",href:p,...r})),h.map(({key:p,link:y})=>l.createElement("link",{key:p,nonce:r.nonce,...y})))}function Br(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var st=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{st&&(window.__reactRouterVersion="7.9.4")}catch{}var ct=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dt=l.forwardRef(function({onClick:t,discover:r="render",prefetch:a="none",relative:n,reloadDocument:o,replace:i,state:d,target:c,to:u,preventScrollReset:m,viewTransition:f,...g},h){let{basename:p}=l.useContext(I),y=typeof u=="string"&&ct.test(u),x,b=!1;if(typeof u=="string"&&y&&(x=u,st))try{let C=new URL(window.location.href),A=u.startsWith("//")?new URL(C.protocol+u):new URL(u),ye=k(A.pathname,p);A.origin===C.origin&&ye!=null?u=ye+A.search+A.hash:b=!0}catch{E(!1,`<Link to="${u}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=Vt(u,{relative:n}),[S,R,z]=Rr(a,g),q=Ar(u,{replace:i,state:d,target:c,preventScrollReset:m,relative:n,viewTransition:f});function F(C){t&&t(C),C.defaultPrevented||q(C)}let G=l.createElement("a",{...g,...z,href:x||v,onClick:b||o?t:F,ref:Br(h,R),target:c,"data-discover":!y&&r==="render"?"true":void 0});return S&&!y?l.createElement(l.Fragment,null,G,l.createElement(Ir,{page:v})):G});dt.displayName="Link";var Pr=l.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:a="",end:n=!1,style:o,to:i,viewTransition:d,children:c,...u},m){let f=K(i,{relative:u.relative}),g=P(),h=l.useContext(re),{navigator:p,basename:y}=l.useContext(I),x=h!=null&&Hr(f)&&d===!0,b=p.encodeLocation?p.encodeLocation(f).pathname:f.pathname,v=g.pathname,S=h&&h.navigation&&h.navigation.location?h.navigation.location.pathname:null;r||(v=v.toLowerCase(),S=S?S.toLowerCase():null,b=b.toLowerCase()),S&&y&&(S=k(S,y)||S);const R=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let z=v===b||!n&&v.startsWith(b)&&v.charAt(R)==="/",q=S!=null&&(S===b||!n&&S.startsWith(b)&&S.charAt(b.length)==="/"),F={isActive:z,isPending:q,isTransitioning:x},G=z?t:void 0,C;typeof a=="function"?C=a(F):C=[a,z?"active":null,q?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let A=typeof o=="function"?o(F):o;return l.createElement(dt,{...u,"aria-current":G,className:C,ref:m,style:A,to:i,viewTransition:d},typeof c=="function"?c(F):c)});Pr.displayName="NavLink";var Lr=l.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:a,replace:n,state:o,method:i=Q,action:d,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:f,...g},h)=>{let p=Tr(),y=Fr(d,{relative:u}),x=i.toLowerCase()==="get"?"get":"post",b=typeof d=="string"&&ct.test(d),v=S=>{if(c&&c(S),S.defaultPrevented)return;S.preventDefault();let R=S.nativeEvent.submitter,z=(R==null?void 0:R.getAttribute("formmethod"))||i;p(R||S.currentTarget,{fetcherKey:t,method:z,navigate:r,replace:n,state:o,relative:u,preventScrollReset:m,viewTransition:f})};return l.createElement("form",{ref:h,method:x,action:y,onSubmit:a?c:v,...g,"data-discover":!b&&e==="render"?"true":void 0})});Lr.displayName="Form";function zr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ut(e){let t=l.useContext(T);return w(t,zr(e)),t}function Ar(e,{target:t,replace:r,state:a,preventScrollReset:n,relative:o,viewTransition:i}={}){let d=Yt(),c=P(),u=K(e,{relative:o});return l.useCallback(m=>{if(mr(m,t)){m.preventDefault();let f=r!==void 0?r:ee(c)===ee(u);d(e,{replace:f,state:a,preventScrollReset:n,relative:o,viewTransition:i})}},[c,d,u,r,a,t,e,n,o,i])}var Mr=0,$r=()=>`__${String(++Mr)}__`;function Tr(){let{router:e}=ut("useSubmit"),{basename:t}=l.useContext(I),r=nr();return l.useCallback(async(a,n={})=>{let{action:o,method:i,encType:d,formData:c,body:u}=pr(a,t);if(n.navigate===!1){let m=n.fetcherKey||$r();await e.fetch(m,r,n.action||o,{preventScrollReset:n.preventScrollReset,formData:c,body:u,formMethod:n.method||i,formEncType:n.encType||d,flushSync:n.flushSync})}else await e.navigate(n.action||o,{preventScrollReset:n.preventScrollReset,formData:c,body:u,formMethod:n.method||i,formEncType:n.encType||d,replace:n.replace,state:n.state,fromRouteId:r,flushSync:n.flushSync,viewTransition:n.viewTransition})},[e,t,r])}function Fr(e,{relative:t}={}){let{basename:r}=l.useContext(I),a=l.useContext(B);w(a,"useFormAction must be used inside a RouteContext");let[n]=a.matches.slice(-1),o={...K(e||".",{relative:t})},i=P();if(e==null){o.search=i.search;let d=new URLSearchParams(o.search),c=d.getAll("index");if(c.some(m=>m==="")){d.delete("index"),c.filter(f=>f).forEach(f=>d.append("index",f));let m=d.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&n.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:j([r,o.pathname])),ee(o)}function Hr(e,{relative:t}={}){let r=l.useContext(rt);w(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=ut("useViewTransitionState"),n=K(e,{relative:t});if(!r.isTransitioning)return!1;let o=k(r.currentLocation.pathname,a)||r.currentLocation.pathname,i=k(r.nextLocation.pathname,a)||r.nextLocation.pathname;return te(n.pathname,i)!=null||te(n.pathname,o)!=null}const Dr={title:"Components/Sidebar",component:M,parameters:{layout:"fullscreen",docs:{description:{component:"Navigation sidebar with expandable sections and RTL support. Provides primary navigation for applications with hover-to-expand functionality."}}},argTypes:{selectedItem:{control:"text",description:"Currently selected menu item ID"},position:{control:"select",options:["left","right"],description:"Sidebar position on screen"},defaultExpanded:{control:"boolean",description:"Default expanded state"},hoverExpand:{control:"boolean",description:"Enable hover-to-expand behavior"}}},mt=e=>[{id:"dashboard",icon:Ke,label:e?"لوحة التحكم":"Dashboard",labelEn:"Dashboard",labelAr:"لوحة التحكم",hasChildren:!0,children:[{id:"electronics",label:e?"إلكترونيات":"Electronics",labelEn:"Electronics",labelAr:"إلكترونيات"},{id:"clothing",label:e?"ملابس":"Clothing",labelEn:"Clothing",labelAr:"ملابس"},{id:"tools",label:e?"أدوات":"Tools",labelEn:"Tools",labelAr:"أدوات"}]},{id:"orders",icon:qe,label:e?"الطلبات":"Orders",labelEn:"Orders",labelAr:"الطلبات"}],ht=e=>[{id:"analytics",icon:me,label:e?"التحليلات":"Analytics",labelEn:"Analytics",labelAr:"التحليلات"},{id:"users",icon:de,label:e?"المستخدمون":"Users",labelEn:"Users",labelAr:"المستخدمون"},{id:"inventory",icon:se,label:e?"المخزون":"Inventory",labelEn:"Inventory",labelAr:"المخزون"},{id:"reports",icon:Je,label:e?"التقارير":"Reports",labelEn:"Reports",labelAr:"التقارير"},{id:"calendar",icon:gt,label:e?"التقويم":"Calendar",labelEn:"Calendar",labelAr:"التقويم"},{id:"notifications",icon:ue,label:e?"الإشعارات":"Notifications",labelEn:"Notifications",labelAr:"الإشعارات"}],ft=e=>[{id:"settings",icon:ce,label:e?"الإعدادات":"Settings",labelEn:"Settings",labelAr:"الإعدادات"},{id:"logout",icon:Ye,label:e?"تسجيل الخروج":"Logout",labelEn:"Logout",labelAr:"تسجيل الخروج"}],pt=()=>{const e=P();return s.jsxs("div",{style:{padding:"var(--t-space-400)",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"var(--t-border-radius-200)",marginBottom:"var(--t-space-400)",border:"1px solid var(--t-color-border-secondary)"},children:[s.jsx("strong",{style:{color:"var(--t-color-text-primary)"},children:"Current Route:"})," ",s.jsx("code",{style:{padding:"2px 8px",backgroundColor:"var(--t-color-fill-brand-subtle)",color:"var(--t-color-text-brand)",borderRadius:"var(--t-border-radius-100)",fontFamily:"monospace"},children:e.pathname})]})},oe=e=>{var o;const[t,r]=l.useState(e.selectedItem||"page1"),a=((o=e.globals)==null?void 0:o.direction)||"ltr",n=a==="rtl";return s.jsxs("div",{style:{display:"flex",height:"100vh",overflow:"hidden",flexDirection:e.position==="right"?"row-reverse":"row"},children:[s.jsx(M,{...e,selectedItem:t,onItemChange:r}),s.jsxs("div",{style:{flex:1,padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",overflow:"auto"},children:[s.jsxs("h1",{style:{margin:"0 0 var(--t-space-400) 0",fontSize:"var(--t-font-size-700)",fontWeight:"var(--t-font-weight-bold)",color:"var(--t-color-text-primary)"},children:["Current Page: ",t]}),s.jsx("p",{style:{color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-400)",lineHeight:n?"var(--t-line-height-arabic, 1.2)":"var(--t-line-height-english, 1.5)",fontFamily:n?"var(--t-font-family-arabic)":"var(--t-font-family-primary)",textAlign:n?"right":"left",direction:a},children:n?"هذه منطقة المحتوى. يوفر الشريط الجانبي التنقل البسيط مع صفحتين افتراضيتين.":"This is the content area. The sidebar provides simple navigation with two default pages."}),s.jsxs("div",{style:{marginTop:"var(--t-space-600)",padding:"var(--t-space-500)",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"var(--t-border-radius-300)",border:"1px solid var(--t-color-border-secondary)"},children:[s.jsx("h3",{style:{margin:"0 0 var(--t-space-300) 0",fontSize:"var(--t-font-size-500)",color:"var(--t-color-text-primary)",fontFamily:n?"var(--t-font-family-arabic)":"var(--t-font-family-primary)",textAlign:n?"right":"left"},children:n?"معلومات التنقل":"Navigation Info"}),s.jsx("p",{style:{margin:"0",color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-300)",lineHeight:n?"var(--t-line-height-arabic, 1.2)":"var(--t-line-height-english, 1.5)",fontFamily:n?"var(--t-font-family-arabic)":"var(--t-font-family-primary)",textAlign:n?"right":"left",direction:a},children:n?s.jsxs(s.Fragment,{children:["العنصر المحدد: ",s.jsx("strong",{children:t}),s.jsx("br",{}),"الموقع: ",s.jsx("strong",{children:e.position==="right"?"يمين":"يسار"}),s.jsx("br",{}),"التوسيع عند التمرير: ",s.jsx("strong",{children:e.hoverExpand!==!1?"مفعل":"معطل"}),s.jsx("br",{}),"الصفحات الافتراضية: ",s.jsx("strong",{children:"الصفحة 1، الصفحة 2"})]}):s.jsxs(s.Fragment,{children:["Selected item: ",s.jsx("strong",{children:t}),s.jsx("br",{}),"Position: ",s.jsx("strong",{children:e.position||"left"}),s.jsx("br",{}),"Hover expand: ",s.jsx("strong",{children:e.hoverExpand!==!1?"enabled":"disabled"}),s.jsx("br",{}),"Default pages: ",s.jsx("strong",{children:"Page 1, Page 2"})]})})]})]})]})},D={render:e=>s.jsx(L,{initialEntries:["/page1"],children:s.jsx(oe,{...e,disableRouting:!1})}),args:{selectedItem:"page1",position:"left",hoverExpand:!1,defaultExpanded:!0}},N={render:e=>s.jsx(L,{initialEntries:["/analytics"],children:s.jsx(oe,{...e,disableRouting:!1})}),args:{selectedItem:"analytics",position:"right",hoverExpand:!0}},O={render:e=>s.jsx(L,{initialEntries:["/users"],children:s.jsx(oe,{...e,disableRouting:!1})}),args:{selectedItem:"users",defaultExpanded:!0,hoverExpand:!1}},U={render:e=>s.jsx(L,{initialEntries:["/inventory"],children:s.jsx(oe,{...e,disableRouting:!1})}),args:{selectedItem:"inventory",hoverExpand:!1}},Nr=[{id:"products",icon:se,label:"Products",hasChildren:!0,children:[{id:"add-product",label:"Add Product"},{id:"manage-products",label:"Manage Products"},{id:"categories",label:"Categories"}]},{id:"sales",icon:me,label:"Sales",hasChildren:!0,children:[{id:"daily-sales",label:"Daily Sales"},{id:"monthly-reports",label:"Monthly Reports"},{id:"yearly-overview",label:"Yearly Overview"}]}],Or=[{id:"customers",icon:de,label:"Customers"},{id:"support",icon:ue,label:"Support",disabled:!0}],W={render:e=>{const[t,r]=l.useState("add-product");return s.jsx(L,{initialEntries:["/products/add-product"],children:s.jsxs("div",{style:{display:"flex",height:"100vh",overflow:"hidden"},children:[s.jsx(M,{...e,selectedItem:t,onItemChange:r,menuItems:Nr,secondaryItems:Or,bottomItems:[{id:"help",icon:ce,label:"Help & Support"}],disableRouting:!1}),s.jsxs("div",{style:{flex:1,padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",overflow:"auto"},children:[s.jsx(pt,{}),s.jsx("h1",{style:{margin:"0 0 var(--t-space-400) 0",fontSize:"var(--t-font-size-700)",color:"var(--t-color-text-primary)"},children:"Custom Sidebar Example"}),s.jsxs("p",{style:{color:"var(--t-color-text-secondary)"},children:["This example shows a sidebar with custom menu items, including disabled items. Current selection: ",s.jsx("strong",{children:t})]})]})]})})},args:{hoverExpand:!0}},_={render:e=>{const[t,r]=l.useState("dashboard"),[a,n]=l.useState(!1);return s.jsx(L,{initialEntries:["/dashboard"],children:s.jsxs("div",{style:{display:"flex",height:"100vh",overflow:"hidden"},children:[s.jsx(M,{...e,selectedItem:t,onItemChange:r,expanded:a,onExpandedChange:n,hoverExpand:!1,menuItems:mt(!1),secondaryItems:ht(!1),bottomItems:ft(!1),disableRouting:!1}),s.jsxs("div",{style:{flex:1,padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",overflow:"auto"},children:[s.jsx(pt,{}),s.jsx("div",{style:{marginBottom:"var(--t-space-500)"},children:s.jsxs("button",{onClick:()=>n(!a),style:{padding:"var(--t-space-200) var(--t-space-400)",backgroundColor:"var(--t-color-fill-brand)",color:"var(--t-color-text-on-fill)",border:"none",borderRadius:"var(--t-border-radius-200)",cursor:"pointer",fontSize:"var(--t-font-size-300)"},children:[a?"Collapse":"Expand"," Sidebar"]})}),s.jsx("h1",{style:{margin:"0 0 var(--t-space-400) 0",fontSize:"var(--t-font-size-700)",color:"var(--t-color-text-primary)"},children:"Controlled Expansion"}),s.jsxs("p",{style:{color:"var(--t-color-text-secondary)"},children:["This example shows how to control the sidebar expansion programmatically. Current state: ",s.jsx("strong",{children:a?"Expanded":"Collapsed"})]})]})]})})}},Ur=[{id:"dashboard",icon:Ke,label:"لوحة التحكم",labelEn:"Dashboard",labelAr:"لوحة التحكم",hasChildren:!0,children:[{id:"electronics",label:"إلكترونيات",labelEn:"Electronics",labelAr:"إلكترونيات"},{id:"clothing",label:"ملابس",labelEn:"Clothing",labelAr:"ملابس"},{id:"tools",label:"أدوات",labelEn:"Tools",labelAr:"أدوات"}]},{id:"orders",icon:qe,label:"الطلبات",labelEn:"Orders",labelAr:"الطلبات"}],Wr=[{id:"analytics",icon:me,label:"التحليلات",labelEn:"Analytics",labelAr:"التحليلات"},{id:"users",icon:de,label:"المستخدمون",labelEn:"Users",labelAr:"المستخدمون"},{id:"inventory",icon:se,label:"إدارة المخزون",labelEn:"Inventory Management",labelAr:"إدارة المخزون"},{id:"reports",icon:Je,label:"التقارير",labelEn:"Reports",labelAr:"التقارير"},{id:"notifications",icon:ue,label:"الإشعارات",labelEn:"Notifications",labelAr:"الإشعارات"}],_r=[{id:"settings",icon:ce,label:"الإعدادات",labelEn:"Settings",labelAr:"الإعدادات"},{id:"logout",icon:Ye,label:"تسجيل الخروج",labelEn:"Logout",labelAr:"تسجيل الخروج"}],V={render:e=>{const[t,r]=l.useState("electronics");return s.jsx(L,{initialEntries:["/dashboard/electronics"],children:s.jsxs("div",{dir:"rtl",style:{display:"flex",height:"100vh",overflow:"hidden",fontFamily:"var(--t-font-family-arabic)",direction:"rtl"},children:[s.jsx(M,{...e,selectedItem:t,onItemChange:r,menuItems:Ur,secondaryItems:Wr,bottomItems:_r,disableRouting:!1}),s.jsxs("div",{style:{flex:1,padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",overflow:"auto",direction:"rtl"},children:[s.jsx("h1",{style:{margin:"0 0 var(--t-space-400) 0",fontSize:"var(--t-font-size-700)",fontWeight:"var(--t-font-weight-bold)",color:"var(--t-color-text-primary)",fontFamily:"var(--t-font-family-arabic)",textAlign:"right",lineHeight:"var(--t-line-height-arabic, 1.2)"},children:"مثال على الشريط الجانبي باللغة العربية"}),s.jsx("p",{style:{color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-400)",lineHeight:"var(--t-line-height-arabic, 1.2)",fontFamily:"var(--t-font-family-arabic)",textAlign:"right",direction:"rtl",marginBottom:"var(--t-space-400)"},children:"هذا مثال على الشريط الجانبي مع دعم كامل للغة العربية ونظام الكتابة من اليمين إلى اليسار. يتضمن التنقل الهرمي والتوسع عند التمرير."}),s.jsxs("div",{style:{marginTop:"var(--t-space-600)",padding:"var(--t-space-500)",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"var(--t-border-radius-300)",border:"1px solid var(--t-color-border-secondary)",direction:"rtl"},children:[s.jsx("h3",{style:{margin:"0 0 var(--t-space-300) 0",fontSize:"var(--t-font-size-500)",color:"var(--t-color-text-primary)",fontFamily:"var(--t-font-family-arabic)",textAlign:"right",lineHeight:"var(--t-line-height-arabic, 1.2)"},children:"الميزات المدعومة"}),s.jsxs("ul",{style:{margin:"0",padding:"0 0 0 var(--t-space-400)",color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-300)",lineHeight:"var(--t-line-height-arabic, 1.2)",fontFamily:"var(--t-font-family-arabic)",textAlign:"right",direction:"rtl"},children:[s.jsxs("li",{style:{marginBottom:"var(--t-space-200)"},children:["العنصر المحدد حالياً: ",s.jsx("strong",{children:t})]}),s.jsx("li",{style:{marginBottom:"var(--t-space-200)"},children:"ترتيب الحدود: من اليسار بدلاً من اليمين"}),s.jsx("li",{style:{marginBottom:"var(--t-space-200)"},children:"محاذاة النص: إلى اليمين تلقائياً"}),s.jsx("li",{style:{marginBottom:"var(--t-space-200)"},children:"الخط: استخدام خط عربي مناسب"}),s.jsx("li",{style:{marginBottom:"var(--t-space-200)"},children:"ارتفاع السطر: مُحسَّن للنص العربي"}),s.jsx("li",{children:"الحالة النشطة: تطبيق الأنماط على العناصر الفرعية والرئيسية"})]})]}),s.jsx("div",{style:{marginTop:"var(--t-space-500)",padding:"var(--t-space-400)",backgroundColor:"var(--t-color-fill-brand-subtle)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-brand)",direction:"rtl"},children:s.jsx("p",{style:{margin:"0",color:"var(--t-color-text-brand)",fontSize:"var(--t-font-size-300)",fontFamily:"var(--t-font-family-arabic)",textAlign:"right",lineHeight:"var(--t-line-height-arabic, 1.2)"},children:'💡 مرر فوق الشريط الجانبي لتوسيعه ورؤية جميع التسميات. انقر على "لوحة التحكم" لرؤية القائمة الفرعية.'})})]})]})})},args:{selectedItem:"electronics",position:"left",hoverExpand:!0},parameters:{docs:{description:{story:"RTL example with Arabic menu labels. Demonstrates right-to-left layout, Arabic font family, proper text alignment, and line-height adjustments for Arabic text."}}}},Y={render:e=>{const[t,r]=l.useState("analytics"),[a,n]=l.useState(!1);return s.jsx(L,{initialEntries:["/analytics"],children:s.jsxs("div",{style:{display:"flex",height:"100vh",overflow:"hidden"},children:[s.jsx(M,{...e,selectedItem:t,onItemChange:r,showBottomSection:a,menuItems:mt(!1),secondaryItems:ht(!1),bottomItems:ft(!1),disableRouting:!1}),s.jsxs("div",{style:{flex:1,padding:"var(--t-space-600)",backgroundColor:"var(--t-color-bg-primary)",overflow:"auto"},children:[s.jsxs("div",{style:{marginBottom:"var(--t-space-500)"},children:[s.jsxs("button",{onClick:()=>n(!a),style:{padding:"var(--t-space-200) var(--t-space-400)",backgroundColor:a?"var(--t-color-fill-danger)":"var(--t-color-fill-brand)",color:"var(--t-color-text-on-fill)",border:"none",borderRadius:"var(--t-border-radius-200)",cursor:"pointer",fontSize:"var(--t-font-size-300)",marginRight:"var(--t-space-300)"},children:[a?"Hide":"Show"," Bottom Section"]}),s.jsxs("span",{style:{color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-300)"},children:["Status: ",s.jsx("strong",{children:a?"Visible":"Hidden"})]})]}),s.jsx("h1",{style:{margin:"0 0 var(--t-space-400) 0",fontSize:"var(--t-font-size-700)",color:"var(--t-color-text-primary)"},children:"Toggle Bottom Section"}),s.jsxs("p",{style:{color:"var(--t-color-text-secondary)",marginBottom:"var(--t-space-400)",lineHeight:"1.5"},children:["This example demonstrates the ",s.jsx("code",{children:"showBottomSection"})," prop which controls the visibility of the bottom section containing Settings and Logout items."]}),s.jsxs("div",{style:{marginTop:"var(--t-space-500)",padding:"var(--t-space-500)",backgroundColor:"var(--t-color-surface-secondary)",borderRadius:"var(--t-border-radius-300)",border:"1px solid var(--t-color-border-secondary)"},children:[s.jsx("h3",{style:{margin:"0 0 var(--t-space-300) 0",fontSize:"var(--t-font-size-500)",color:"var(--t-color-text-primary)"},children:"Current State"}),s.jsxs("ul",{style:{margin:"0",padding:"0 0 0 var(--t-space-400)",color:"var(--t-color-text-secondary)",fontSize:"var(--t-font-size-300)",lineHeight:"1.5"},children:[s.jsxs("li",{style:{marginBottom:"var(--t-space-200)"},children:["Selected item: ",s.jsx("strong",{children:t})]}),s.jsxs("li",{style:{marginBottom:"var(--t-space-200)"},children:["Bottom section visible: ",s.jsx("strong",{children:a?"Yes":"No"})]}),s.jsx("li",{style:{marginBottom:"var(--t-space-200)"},children:"Contains: Settings and Logout items"}),s.jsx("li",{children:"Use case: Minimal sidebars, role-based access control"})]})]}),s.jsxs("div",{style:{marginTop:"var(--t-space-500)",padding:"var(--t-space-400)",backgroundColor:a?"var(--t-color-fill-success-subtle)":"var(--t-color-fill-warning-subtle)",borderRadius:"var(--t-border-radius-200)",border:`1px solid ${a?"var(--t-color-border-success)":"var(--t-color-border-warning)"}`},children:[s.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0",fontSize:"var(--t-font-size-400)",color:a?"var(--t-color-text-success)":"var(--t-color-text-warning)",fontWeight:"var(--t-font-weight-semibold)"},children:a?"✅ Bottom Section Enabled":"⚠️ Bottom Section Hidden"}),s.jsx("p",{style:{margin:"0",color:a?"var(--t-color-text-success)":"var(--t-color-text-warning)",fontSize:"var(--t-font-size-300)",lineHeight:"1.4"},children:a?"Settings and Logout items are visible at the bottom of the sidebar. Users can access account settings and sign out.":"Bottom section is hidden. This creates a cleaner, more minimal sidebar layout without settings/logout options."})]}),s.jsxs("div",{style:{marginTop:"var(--t-space-500)",padding:"var(--t-space-400)",backgroundColor:"var(--t-color-fill-info-subtle)",borderRadius:"var(--t-border-radius-200)",border:"1px solid var(--t-color-border-info)"},children:[s.jsx("h4",{style:{margin:"0 0 var(--t-space-200) 0",fontSize:"var(--t-font-size-400)",color:"var(--t-color-text-info)",fontWeight:"var(--t-font-weight-semibold)"},children:"💡 Usage Tips"}),s.jsxs("ul",{style:{margin:"0",padding:"0 0 0 var(--t-space-400)",color:"var(--t-color-text-info)",fontSize:"var(--t-font-size-300)",lineHeight:"1.4"},children:[s.jsx("li",{style:{marginBottom:"var(--t-space-100)"},children:"Hide for minimal dashboards or embedded components"}),s.jsx("li",{style:{marginBottom:"var(--t-space-100)"},children:"Show for full application layouts with user management"}),s.jsx("li",{children:"Can be controlled dynamically based on user roles or context"})]})]})]})]})})},args:{hoverExpand:!0,showBottomSection:!1},parameters:{docs:{description:{story:"Demonstrates the showBottomSection prop to hide or show the bottom section containing Settings and Logout items. Useful for minimal layouts or role-based access control."}}}};var we,Ce,Ee;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: args => <MemoryRouter initialEntries={['/page1']}>
      <ControlledSidebar {...args} disableRouting={false} />
    </MemoryRouter>,
  args: {
    selectedItem: 'page1',
    position: 'left',
    hoverExpand: false,
    defaultExpanded: true
  }
}`,...(Ee=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var Re,Ie,je;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: args => <MemoryRouter initialEntries={['/analytics']}>
      <ControlledSidebar {...args} disableRouting={false} />
    </MemoryRouter>,
  args: {
    selectedItem: 'analytics',
    position: 'right',
    hoverExpand: true
  }
}`,...(je=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var ke,Be,Pe;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => <MemoryRouter initialEntries={['/users']}>
      <ControlledSidebar {...args} disableRouting={false} />
    </MemoryRouter>,
  args: {
    selectedItem: 'users',
    defaultExpanded: true,
    hoverExpand: false
  }
}`,...(Pe=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:Pe.source}}};var Le,ze,Ae;U.parameters={...U.parameters,docs:{...(Le=U.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: args => <MemoryRouter initialEntries={['/inventory']}>
      <ControlledSidebar {...args} disableRouting={false} />
    </MemoryRouter>,
  args: {
    selectedItem: 'inventory',
    hoverExpand: false
  }
}`,...(Ae=(ze=U.parameters)==null?void 0:ze.docs)==null?void 0:Ae.source}}};var Me,$e,Te;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState('add-product');
    return <MemoryRouter initialEntries={['/products/add-product']}>
        <div style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden'
      }}>
          <Sidebar {...args} selectedItem={selectedItem} onItemChange={setSelectedItem} menuItems={customMenuItems} secondaryItems={customSecondaryItems} bottomItems={[{
          id: 'help',
          icon: IconSettings,
          label: 'Help & Support'
        }]} disableRouting={false} />
          <div style={{
          flex: 1,
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          overflow: 'auto'
        }}>
            <RouteDisplay />
            <h1 style={{
            margin: '0 0 var(--t-space-400) 0',
            fontSize: 'var(--t-font-size-700)',
            color: 'var(--t-color-text-primary)'
          }}>
              Custom Sidebar Example
            </h1>
            <p style={{
            color: 'var(--t-color-text-secondary)'
          }}>
              This example shows a sidebar with custom menu items, including disabled items.
              Current selection: <strong>{selectedItem}</strong>
            </p>
          </div>
        </div>
      </MemoryRouter>;
  },
  args: {
    hoverExpand: true
  }
}`,...(Te=($e=W.parameters)==null?void 0:$e.docs)==null?void 0:Te.source}}};var Fe,He,De;_.parameters={..._.parameters,docs:{...(Fe=_.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState('dashboard');
    const [expanded, setExpanded] = useState(false);
    return <MemoryRouter initialEntries={['/dashboard']}>
        <div style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden'
      }}>
          <Sidebar {...args} selectedItem={selectedItem} onItemChange={setSelectedItem} expanded={expanded} onExpandedChange={setExpanded} hoverExpand={false} menuItems={createMenuItems(false)} secondaryItems={createSecondaryItems(false)} bottomItems={createBottomItems(false)} disableRouting={false} />
          <div style={{
          flex: 1,
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          overflow: 'auto'
        }}>
            <RouteDisplay />
            <div style={{
            marginBottom: 'var(--t-space-500)'
          }}>
              <button onClick={() => setExpanded(!expanded)} style={{
              padding: 'var(--t-space-200) var(--t-space-400)',
              backgroundColor: 'var(--t-color-fill-brand)',
              color: 'var(--t-color-text-on-fill)',
              border: 'none',
              borderRadius: 'var(--t-border-radius-200)',
              cursor: 'pointer',
              fontSize: 'var(--t-font-size-300)'
            }}>
                {expanded ? 'Collapse' : 'Expand'} Sidebar
              </button>
            </div>
            <h1 style={{
            margin: '0 0 var(--t-space-400) 0',
            fontSize: 'var(--t-font-size-700)',
            color: 'var(--t-color-text-primary)'
          }}>
              Controlled Expansion
            </h1>
            <p style={{
            color: 'var(--t-color-text-secondary)'
          }}>
              This example shows how to control the sidebar expansion programmatically.
              Current state: <strong>{expanded ? 'Expanded' : 'Collapsed'}</strong>
            </p>
          </div>
        </div>
      </MemoryRouter>;
  }
}`,...(De=(He=_.parameters)==null?void 0:He.docs)==null?void 0:De.source}}};var Ne,Oe,Ue;V.parameters={...V.parameters,docs:{...(Ne=V.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState('electronics');
    return <MemoryRouter initialEntries={['/dashboard/electronics']}>
        <div dir="rtl" style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        fontFamily: 'var(--t-font-family-arabic)',
        direction: 'rtl'
      }}>
          <Sidebar {...args} selectedItem={selectedItem} onItemChange={setSelectedItem} menuItems={arabicMenuItems} secondaryItems={arabicSecondaryItems} bottomItems={arabicBottomItems} disableRouting={false} />
        <div style={{
          flex: 1,
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          overflow: 'auto',
          direction: 'rtl'
        }}>
          <h1 style={{
            margin: '0 0 var(--t-space-400) 0',
            fontSize: 'var(--t-font-size-700)',
            fontWeight: 'var(--t-font-weight-bold)',
            color: 'var(--t-color-text-primary)',
            fontFamily: 'var(--t-font-family-arabic)',
            textAlign: 'right',
            lineHeight: 'var(--t-line-height-arabic, 1.2)'
          }}>
            مثال على الشريط الجانبي باللغة العربية
          </h1>
          <p style={{
            color: 'var(--t-color-text-secondary)',
            fontSize: 'var(--t-font-size-400)',
            lineHeight: 'var(--t-line-height-arabic, 1.2)',
            fontFamily: 'var(--t-font-family-arabic)',
            textAlign: 'right',
            direction: 'rtl',
            marginBottom: 'var(--t-space-400)'
          }}>
            هذا مثال على الشريط الجانبي مع دعم كامل للغة العربية ونظام الكتابة من اليمين إلى اليسار. 
            يتضمن التنقل الهرمي والتوسع عند التمرير.
          </p>
          
          <div style={{
            marginTop: 'var(--t-space-600)',
            padding: 'var(--t-space-500)',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            border: '1px solid var(--t-color-border-secondary)',
            direction: 'rtl'
          }}>
            <h3 style={{
              margin: '0 0 var(--t-space-300) 0',
              fontSize: 'var(--t-font-size-500)',
              color: 'var(--t-color-text-primary)',
              fontFamily: 'var(--t-font-family-arabic)',
              textAlign: 'right',
              lineHeight: 'var(--t-line-height-arabic, 1.2)'
            }}>
              الميزات المدعومة
            </h3>
            <ul style={{
              margin: '0',
              padding: '0 0 0 var(--t-space-400)',
              color: 'var(--t-color-text-secondary)',
              fontSize: 'var(--t-font-size-300)',
              lineHeight: 'var(--t-line-height-arabic, 1.2)',
              fontFamily: 'var(--t-font-family-arabic)',
              textAlign: 'right',
              direction: 'rtl'
            }}>
              <li style={{
                marginBottom: 'var(--t-space-200)'
              }}>
                العنصر المحدد حالياً: <strong>{selectedItem}</strong>
              </li>
              <li style={{
                marginBottom: 'var(--t-space-200)'
              }}>
                ترتيب الحدود: من اليسار بدلاً من اليمين
              </li>
              <li style={{
                marginBottom: 'var(--t-space-200)'
              }}>
                محاذاة النص: إلى اليمين تلقائياً
              </li>
              <li style={{
                marginBottom: 'var(--t-space-200)'
              }}>
                الخط: استخدام خط عربي مناسب
              </li>
              <li style={{
                marginBottom: 'var(--t-space-200)'
              }}>
                ارتفاع السطر: مُحسَّن للنص العربي
              </li>
              <li>
                الحالة النشطة: تطبيق الأنماط على العناصر الفرعية والرئيسية
              </li>
            </ul>
          </div>
          
          <div style={{
            marginTop: 'var(--t-space-500)',
            padding: 'var(--t-space-400)',
            backgroundColor: 'var(--t-color-fill-brand-subtle)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-brand)',
            direction: 'rtl'
          }}>
            <p style={{
              margin: '0',
              color: 'var(--t-color-text-brand)',
              fontSize: 'var(--t-font-size-300)',
              fontFamily: 'var(--t-font-family-arabic)',
              textAlign: 'right',
              lineHeight: 'var(--t-line-height-arabic, 1.2)'
            }}>
              💡 مرر فوق الشريط الجانبي لتوسيعه ورؤية جميع التسميات. 
              انقر على "لوحة التحكم" لرؤية القائمة الفرعية.
            </p>
          </div>
        </div>
        </div>
      </MemoryRouter>;
  },
  args: {
    selectedItem: 'electronics',
    position: 'left',
    hoverExpand: true
  },
  parameters: {
    docs: {
      description: {
        story: 'RTL example with Arabic menu labels. Demonstrates right-to-left layout, Arabic font family, proper text alignment, and line-height adjustments for Arabic text.'
      }
    }
  }
}`,...(Ue=(Oe=V.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.source}}};var We,_e,Ve;Y.parameters={...Y.parameters,docs:{...(We=Y.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: args => {
    const [selectedItem, setSelectedItem] = useState('analytics');
    const [showBottom, setShowBottom] = useState(false);
    return <MemoryRouter initialEntries={['/analytics']}>
        <div style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden'
      }}>
          <Sidebar {...args} selectedItem={selectedItem} onItemChange={setSelectedItem} showBottomSection={showBottom} menuItems={createMenuItems(false)} secondaryItems={createSecondaryItems(false)} bottomItems={createBottomItems(false)} disableRouting={false} />
        <div style={{
          flex: 1,
          padding: 'var(--t-space-600)',
          backgroundColor: 'var(--t-color-bg-primary)',
          overflow: 'auto'
        }}>
          <div style={{
            marginBottom: 'var(--t-space-500)'
          }}>
            <button onClick={() => setShowBottom(!showBottom)} style={{
              padding: 'var(--t-space-200) var(--t-space-400)',
              backgroundColor: showBottom ? 'var(--t-color-fill-danger)' : 'var(--t-color-fill-brand)',
              color: 'var(--t-color-text-on-fill)',
              border: 'none',
              borderRadius: 'var(--t-border-radius-200)',
              cursor: 'pointer',
              fontSize: 'var(--t-font-size-300)',
              marginRight: 'var(--t-space-300)'
            }}>
              {showBottom ? 'Hide' : 'Show'} Bottom Section
            </button>
            <span style={{
              color: 'var(--t-color-text-secondary)',
              fontSize: 'var(--t-font-size-300)'
            }}>
              Status: <strong>{showBottom ? 'Visible' : 'Hidden'}</strong>
            </span>
          </div>
          
          <h1 style={{
            margin: '0 0 var(--t-space-400) 0',
            fontSize: 'var(--t-font-size-700)',
            color: 'var(--t-color-text-primary)'
          }}>
            Toggle Bottom Section
          </h1>
          
          <p style={{
            color: 'var(--t-color-text-secondary)',
            marginBottom: 'var(--t-space-400)',
            lineHeight: '1.5'
          }}>
            This example demonstrates the <code>showBottomSection</code> prop which controls 
            the visibility of the bottom section containing Settings and Logout items.
          </p>
          
          <div style={{
            marginTop: 'var(--t-space-500)',
            padding: 'var(--t-space-500)',
            backgroundColor: 'var(--t-color-surface-secondary)',
            borderRadius: 'var(--t-border-radius-300)',
            border: '1px solid var(--t-color-border-secondary)'
          }}>
            <h3 style={{
              margin: '0 0 var(--t-space-300) 0',
              fontSize: 'var(--t-font-size-500)',
              color: 'var(--t-color-text-primary)'
            }}>
              Current State
            </h3>
            <ul style={{
              margin: '0',
              padding: '0 0 0 var(--t-space-400)',
              color: 'var(--t-color-text-secondary)',
              fontSize: 'var(--t-font-size-300)',
              lineHeight: '1.5'
            }}>
              <li style={{
                marginBottom: 'var(--t-space-200)'
              }}>
                Selected item: <strong>{selectedItem}</strong>
              </li>
              <li style={{
                marginBottom: 'var(--t-space-200)'
              }}>
                Bottom section visible: <strong>{showBottom ? 'Yes' : 'No'}</strong>
              </li>
              <li style={{
                marginBottom: 'var(--t-space-200)'
              }}>
                Contains: Settings and Logout items
              </li>
              <li>
                Use case: Minimal sidebars, role-based access control
              </li>
            </ul>
          </div>
          
          <div style={{
            marginTop: 'var(--t-space-500)',
            padding: 'var(--t-space-400)',
            backgroundColor: showBottom ? 'var(--t-color-fill-success-subtle)' : 'var(--t-color-fill-warning-subtle)',
            borderRadius: 'var(--t-border-radius-200)',
            border: \`1px solid \${showBottom ? 'var(--t-color-border-success)' : 'var(--t-color-border-warning)'}\`
          }}>
            <h4 style={{
              margin: '0 0 var(--t-space-200) 0',
              fontSize: 'var(--t-font-size-400)',
              color: showBottom ? 'var(--t-color-text-success)' : 'var(--t-color-text-warning)',
              fontWeight: 'var(--t-font-weight-semibold)'
            }}>
              {showBottom ? '✅ Bottom Section Enabled' : '⚠️ Bottom Section Hidden'}
            </h4>
            <p style={{
              margin: '0',
              color: showBottom ? 'var(--t-color-text-success)' : 'var(--t-color-text-warning)',
              fontSize: 'var(--t-font-size-300)',
              lineHeight: '1.4'
            }}>
              {showBottom ? 'Settings and Logout items are visible at the bottom of the sidebar. Users can access account settings and sign out.' : 'Bottom section is hidden. This creates a cleaner, more minimal sidebar layout without settings/logout options.'}
            </p>
          </div>
          
          <div style={{
            marginTop: 'var(--t-space-500)',
            padding: 'var(--t-space-400)',
            backgroundColor: 'var(--t-color-fill-info-subtle)',
            borderRadius: 'var(--t-border-radius-200)',
            border: '1px solid var(--t-color-border-info)'
          }}>
            <h4 style={{
              margin: '0 0 var(--t-space-200) 0',
              fontSize: 'var(--t-font-size-400)',
              color: 'var(--t-color-text-info)',
              fontWeight: 'var(--t-font-weight-semibold)'
            }}>
              💡 Usage Tips
            </h4>
            <ul style={{
              margin: '0',
              padding: '0 0 0 var(--t-space-400)',
              color: 'var(--t-color-text-info)',
              fontSize: 'var(--t-font-size-300)',
              lineHeight: '1.4'
            }}>
              <li style={{
                marginBottom: 'var(--t-space-100)'
              }}>
                Hide for minimal dashboards or embedded components
              </li>
              <li style={{
                marginBottom: 'var(--t-space-100)'
              }}>
                Show for full application layouts with user management
              </li>
              <li>
                Can be controlled dynamically based on user roles or context
              </li>
            </ul>
          </div>
        </div>
        </div>
      </MemoryRouter>;
  },
  args: {
    hoverExpand: true,
    showBottomSection: false
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the showBottomSection prop to hide or show the bottom section containing Settings and Logout items. Useful for minimal layouts or role-based access control.'
      }
    }
  }
}`,...(Ve=(_e=Y.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};const Vr=["Default","RightPosition","AlwaysExpanded","NoHoverExpand","CustomMenus","ControlledExpansion","RTLArabic","HiddenBottomSection"],nn=Object.freeze(Object.defineProperty({__proto__:null,AlwaysExpanded:O,ControlledExpansion:_,CustomMenus:W,Default:D,HiddenBottomSection:Y,NoHoverExpand:U,RTLArabic:V,RightPosition:N,__namedExportsOrder:Vr,default:Dr},Symbol.toStringTag,{value:"Module"}));export{O as A,_ as C,D,N as R,nn as S,W as a};
