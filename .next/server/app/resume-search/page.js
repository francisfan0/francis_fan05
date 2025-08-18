(()=>{var a={};a.id=479,a.ids=[479],a.modules={91:()=>{},261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},534:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,6133,23)),Promise.resolve().then(c.t.bind(c,6444,23)),Promise.resolve().then(c.t.bind(c,6042,23)),Promise.resolve().then(c.t.bind(c,9477,23)),Promise.resolve().then(c.t.bind(c,9345,23)),Promise.resolve().then(c.t.bind(c,2089,23)),Promise.resolve().then(c.t.bind(c,6577,23)),Promise.resolve().then(c.t.bind(c,1307,23)),Promise.resolve().then(c.t.bind(c,4817,23))},846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},1208:()=>{},2822:()=>{},2920:(a,b,c)=>{Promise.resolve().then(c.bind(c,4042))},3033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3139:()=>{},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3873:a=>{"use strict";a.exports=require("path")},3937:()=>{},4021:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>C.a,__next_app__:()=>I,handler:()=>K,pages:()=>H,routeModule:()=>J,tree:()=>G});var d=c(5239),e=c(8088),f=c(7220),g=c(1289),h=c(6191),i=c(4823),j=c(1998),k=c(2603),l=c(4649),m=c(2781),n=c(2602),o=c(1268),p=c(4853),q=c(261),r=c(5052),s=c(9977),t=c(6713),u=c(3365),v=c(1454),w=c(7778),x=c(6143),y=c(9105),z=c(8171),A=c(6439),B=c(6133),C=c.n(B),D=c(893),E=c(2836),F={};for(let a in D)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(F[a]=()=>D[a]);c.d(b,F);let G={children:["",{children:["resume-search",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,5421)),"/Users/yfan/Desktop/Personal/personal_website/src/app/resume-search/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(c.bind(c,5485)),"/Users/yfan/Desktop/Personal/personal_website/src/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,6133,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,849,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,9868,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,9615,23)),"next/dist/client/components/builtin/unauthorized.js"]}]}.children,H=["/Users/yfan/Desktop/Personal/personal_website/src/app/resume-search/page.tsx"],I={require:c,loadChunk:()=>Promise.resolve()},J=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/resume-search/page",pathname:"/resume-search",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:G},distDir:".next",projectDir:""});async function K(a,b,c){var d;let B="/resume-search/page";"/index"===B&&(B="/");let F="false",L=(0,h.getRequestMeta)(a,"postponed"),M=(0,h.getRequestMeta)(a,"minimalMode"),N=await J.prepare(a,b,{srcPage:B,multiZoneDraftMode:F});if(!N)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:O,query:P,params:Q,parsedUrl:R,pageIsDynamic:S,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,serverActionsManifest:W,clientReferenceManifest:X,subresourceIntegrityManifest:Y,prerenderManifest:Z,isDraftMode:$,resolvedPathname:_,revalidateOnlyGenerated:aa,routerServerContext:ab,nextConfig:ac}=N,ad=R.pathname||"/",ae=(0,q.normalizeAppPath)(B),{isOnDemandRevalidate:af}=N,ag=Z.dynamicRoutes[ae],ah=Z.routes[_],ai=!!(ag||ah||Z.routes[ae]),aj=a.headers["user-agent"]||"",ak=(0,t.getBotType)(aj),al=(0,o.isHtmlBotRequest)(a),am=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??!!a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],an=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ao=(0,r.getIsPossibleServerAction)(a),ap=(0,l.checkIsAppPPREnabled)(ac.experimental.ppr)&&(null==(d=Z.routes[ae]??Z.dynamicRoutes[ae])?void 0:d.renderingMode)==="PARTIALLY_STATIC",aq=!1,ar=!1,as=ap?L:void 0,at=ap&&an&&!am,au=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),av=!aj||(0,o.shouldServeStreamingMetadata)(aj,ac.htmlLimitedBots);al&&ap&&(ai=!1,av=!1);let aw=!0===J.isDev||!ai||"string"==typeof L||at,ax=al&&ap,ay=null;$||!ai||aw||ao||as||at||(ay=_);let az=ay;!az&&J.isDev&&(az=_);let aA={...D,tree:G,pages:H,GlobalError:C(),handler:K,routeModule:J,__next_app__:I};W&&X&&(0,n.setReferenceManifestsSingleton)({page:B,clientReferenceManifest:X,serverActionsManifest:W,serverModuleMap:(0,p.createServerModuleMap)({serverActionsManifest:W})});let aB=a.method||"GET",aC=(0,g.getTracer)(),aD=aC.getActiveScopeSpan();try{let d=async(c,d)=>{let e=new k.NodeNextRequest(a),f=new k.NodeNextResponse(b);return J.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aC.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aB} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aB} ${a.url}`)})},f=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:P,params:Q,page:ae,sharedContext:{buildId:O},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aA,Component:(0,j.T)(aA),params:Q,routeModule:J,page:B,postponed:f,shouldWaitOnAllReady:ax,serveStreamingMetadata:av,supportsDynamicResponse:"string"==typeof f||aw,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,subresourceIntegrityManifest:Y,serverActionsManifest:W,clientReferenceManifest:X,setIsrStatus:null==ab?void 0:ab.setIsrStatus,dir:J.projectDir,isDraftMode:$,isRevalidate:ai&&!f&&!at,botType:ak,isOnDemandRevalidate:af,isPossibleServerAction:ao,assetPrefix:ac.assetPrefix,nextConfigOutput:ac.output,crossOrigin:ac.crossOrigin,trailingSlash:ac.trailingSlash,previewProps:Z.preview,deploymentId:ac.deploymentId,enableTainting:ac.experimental.taint,htmlLimitedBots:ac.htmlLimitedBots,devtoolSegmentExplorer:ac.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ac.reactMaxHeadersLength,multiZoneDraftMode:F,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ac.experimental.cacheLife,basePath:ac.basePath,serverActions:ac.experimental.serverActions,...aq?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:aq}:{},experimental:{isRoutePPREnabled:ap,expireTime:ac.expireTime,staleTimes:ac.experimental.staleTimes,dynamicIO:!!ac.experimental.dynamicIO,clientSegmentCache:!!ac.experimental.clientSegmentCache,dynamicOnHover:!!ac.experimental.dynamicOnHover,inlineCss:!!ac.experimental.inlineCss,authInterrupts:!!ac.experimental.authInterrupts,clientTraceMetadata:ac.experimental.clientTraceMetadata||[]},waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>J.onRequestError(a,b,d,ab),err:(0,h.getRequestMeta)(a,"invokeError"),dev:J.isDev}},k=await d(e,i),{metadata:l}=k,{cacheControl:m,headers:n={},fetchTags:o}=l;if(o&&(n[x.NEXT_CACHE_TAGS_HEADER]=o),a.fetchMetrics=l.fetchMetrics,ai&&(null==m?void 0:m.revalidate)===0&&!J.isDev&&!ap){let a=l.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${_}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:k,headers:n,rscData:l.flightData,postponed:l.postponed,status:l.statusCode,segmentData:l.segmentData},cacheControl:m}},l=async({hasResolved:d,previousCacheEntry:g,isRevalidating:i,span:j})=>{let k,l=!1===J.isDev,n=d||b.writableEnded;if(af&&aa&&!g&&!M)return(null==ab?void 0:ab.render404)?await ab.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ag&&(k=(0,v.parseFallbackField)(ag.fallback)),k===v.FallbackMode.PRERENDER&&(0,t.isBot)(aj)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(af=!0),af&&(k!==v.FallbackMode.NOT_FOUND||g)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),!M&&k!==v.FallbackMode.BLOCKING_STATIC_RENDER&&az&&!n&&!$&&S&&(l||!ah)){let b;if((l||ag)&&k===v.FallbackMode.NOT_FOUND)throw new A.NoFallbackError;if(ap&&!an){if(b=await J.handleResponse({cacheKey:l?ae:null,req:a,nextConfig:ac,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:Z,isRoutePPREnabled:ap,responseGenerator:async()=>f({span:j,postponed:void 0,fallbackRouteParams:l||ar?(0,m.u)(ae):null}),waitUntil:c.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=af||i||!as?void 0:as;if(aq&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.fromStatic(""),pageData:{},headers:void 0,status:void 0}};let p=S&&ap&&((0,h.getRequestMeta)(a,"renderFallbackShell")||ar)?(0,m.u)(ad):null;return f({span:j,postponed:o,fallbackRouteParams:p})},n=async d=>{var g,i,j,k,m;let n,o=await J.handleResponse({cacheKey:ay,responseGenerator:a=>l({span:d,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:af,isRoutePPREnabled:ap,req:a,nextConfig:ac,prerenderManifest:Z,waitUntil:c.waitUntil});if($&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),J.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!o){if(ay)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(g=o.value)?void 0:g.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(j=o.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof o.value.postponed;ai&&!at&&(!p||am)&&(M||b.setHeader("x-nextjs-cache",af?"REVALIDATED":o.isMiss?"MISS":o.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=o;if(as)n={revalidate:0,expire:void 0};else if(M&&an&&!am&&ap)n={revalidate:0,expire:void 0};else if(!J.isDev)if($)n={revalidate:0,expire:void 0};else if(ai){if(o.cacheControl)if("number"==typeof o.cacheControl.revalidate){if(o.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${o.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});n={revalidate:o.cacheControl.revalidate,expire:(null==(k=o.cacheControl)?void 0:k.expire)??ac.expireTime}}else n={revalidate:x.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(n={revalidate:0,expire:void 0});if(o.cacheControl=n,"string"==typeof au&&(null==q?void 0:q.kind)===u.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(m=q.headers)?void 0:m[x.NEXT_CACHE_TAGS_HEADER];M&&ai&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(au);return void 0!==d?(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(d),cacheControl:o.cacheControl}):(b.statusCode=204,(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(""),cacheControl:o.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...o,value:{...o.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&as)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(M&&ai||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(i=q.headers)?void 0:i[x.NEXT_CACHE_TAGS_HEADER];if(M&&ai&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!q.status||an&&ap||(b.statusCode=q.status),!M&&q.status&&E.RedirectStatusCode[q.status]&&an&&(b.statusCode=200),p&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),an&&!$){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:q.html,cacheControl:at?{revalidate:0,expire:void 0}:o.cacheControl})}return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(q.rscData),cacheControl:o.cacheControl})}let v=q.html;if(!p||M)return(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:o.cacheControl});if(aq)return v.chain(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let A=new TransformStream;return v.chain(A.readable),f({span:d,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(A.writable)}).catch(a=>{A.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aD)return await aC.withPropagatedContext(a.headers,()=>aC.trace(i.BaseServerSpan.handleRequest,{spanName:`${aB} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aB,"http.target":a.url}},n));await n(aD)}catch(b){throw aD||b instanceof A.NoFallbackError||await J.onRequestError(a,b,{routerKind:"App Router",routePath:B,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ai,isOnDemandRevalidate:af})},ab),b}}},4418:()=>{},4967:()=>{},5076:()=>{},5182:()=>{},5400:()=>{},5421:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d=(0,c(1369).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/yfan/Desktop/Personal/personal_website/src/app/resume-search/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/yfan/Desktop/Personal/personal_website/src/app/resume-search/page.tsx","default")},5485:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>i,metadata:()=>h});var d=c(7413),e=c(4042),f=c(7339),g=c.n(f);c(3139),c(4418),c(1208),c(5076),c(5400),c(2822),c(4967),c(7209);let h={title:"Francis Fan",description:"Hi, I'm Francis. I'm currently at Yale studying CS + Math. Don't hesitate to reach out with any questions!"};function i({children:a}){return(0,d.jsxs)("html",{lang:"en",children:[(0,d.jsxs)("head",{children:[(0,d.jsx)("meta",{name:"google-site-verification",content:"z_dWtmQBw6gE1R3XH5k-xkYCf2hBA7Xjq1cdWnzd3Rc"}),(0,d.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"/monkey-facing-left-svgrepo-com.svg"})]}),(0,d.jsxs)("body",{className:g().className,children:[a,(0,d.jsx)(e.Analytics,{})]})]})}},5794:(a,b,c)=>{Promise.resolve().then(c.bind(c,9638))},5806:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,5227,23)),Promise.resolve().then(c.t.bind(c,6346,23)),Promise.resolve().then(c.t.bind(c,7924,23)),Promise.resolve().then(c.t.bind(c,99,23)),Promise.resolve().then(c.t.bind(c,8243,23)),Promise.resolve().then(c.t.bind(c,4065,23)),Promise.resolve().then(c.t.bind(c,2763,23)),Promise.resolve().then(c.t.bind(c,7173,23)),Promise.resolve().then(c.bind(c,5587))},6439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},6713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},7475:(a,b,c)=>{"use strict";c.d(b,{A:()=>l});var d=c(687);c(8056),c(91);var e=c(3210);let f=()=>{let[a,b]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{"dark"===localStorage.getItem("theme")&&b(!0)},[]),(0,e.useEffect)(()=>{document.body.classList.toggle("dark-mode",a)},[a]),(0,d.jsx)("footer",{className:"text-black py-4",children:(0,d.jsxs)("div",{className:"custom-container d-flex justify-content-between align-items-center",children:[(0,d.jsx)("button",{id:"darkModeToggle",className:"btn btn-default d-flex align-items-center",onClick:()=>{let a=document.body;a.classList.toggle("dark-mode"),a.classList.contains("dark-mode")?b(!0):b(!1)},children:(0,d.jsx)("img",{src:a?"/moon-svgrepo-com.svg":"/sun-svgrepo-com.svg",alt:a?"Moon Icon":"Sun Icon",className:`icon ${a?"moon":"sun"}`})}),(0,d.jsxs)("div",{className:"d-flex gap-3",children:[(0,d.jsx)("a",{href:"/FrancisFan.pdf",target:"_blank",rel:"noopener noreferrer",className:"text-hover-gray text-lg d-flex align-items-center text-decoration-none",children:"Resume"}),(0,d.jsx)("a",{href:"https://github.com/francisfan0",target:"_blank",rel:"noopener noreferrer",className:"text-hover-gray text-lg d-flex align-items-center text-decoration-none",children:"GitHub"}),(0,d.jsx)("a",{href:"https://www.linkedin.com/in/francis-fan/",target:"_blank",rel:"noopener noreferrer",className:"text-hover-gray text-lg d-flex align-items-center text-decoration-none",children:"LinkedIn"})]})]})})};var g=c(5814),h=c.n(g);let i=()=>{let[a,b]=(0,e.useState)(!1),c=()=>{b(!1)};return(0,d.jsx)("header",{className:"py-3",children:(0,d.jsxs)("div",{className:"custom-container d-flex justify-content-between align-items-center position-relative",children:[(0,d.jsx)(h(),{href:"/",className:"text-hover-grayl fs-3 text-decoration-none",children:"Francis"}),(0,d.jsxs)("div",{className:"d-flex align-right",children:[(0,d.jsx)("button",{className:"btn btn-default d-lg-none dark-btn",onClick:()=>{b(!a)},"aria-expanded":a,"aria-controls":"navbarNav",children:(0,d.jsx)("img",{src:"/menu-icon.svg",alt:"Menu",style:{height:"19px",display:"block",margin:"0 auto"}})}),(0,d.jsx)("div",{className:`backdrop ${a?"show":""}`,onClick:c}),(0,d.jsxs)("div",{className:`navbar-collapse ${a?"show":""} d-lg-flex flex-column flex-lg-row text-align text-end`,id:"navbarNav",children:[(0,d.jsx)(h(),{href:"/courses",onClick:c,className:"text-hover-grayl fs-3 text-decoration-none",children:"Courses"}),(0,d.jsx)(h(),{href:"/experience",onClick:c,className:"text-hover-grayl fs-3 text-decoration-none",children:"Experience"}),(0,d.jsx)(h(),{href:"/projects",onClick:c,className:"text-hover-grayl fs-3 text-decoration-none",children:"Projects"}),(0,d.jsx)(h(),{href:"/photography",onClick:c,className:"text-hover-grayl fs-3 text-decoration-none",children:"Photography"}),"false"!==process.env.NEXT_PUBLIC_ENABLE_RESUME_SEARCH&&(0,d.jsx)(h(),{href:"/resume-search",onClick:c,className:"text-hover-grayl fs-3 text-decoration-none",style:{opacity:.1,fontSize:"0.6rem",cursor:"default",userSelect:"none"},title:"",onMouseEnter:a=>a.currentTarget.style.opacity="0.3",onMouseLeave:a=>a.currentTarget.style.opacity="0.1",children:"\xb7"})]})]})]})})};var j=c(6189);let k=()=>{let a=(0,j.useRouter)();return(0,e.useEffect)(()=>{},[a]),null},l=({children:a})=>(0,d.jsxs)("div",{className:"d-flex flex-column min-vh-100",children:[(0,d.jsx)(i,{}),(0,d.jsx)("main",{className:"flex-grow-1 custom-container my-4",children:a}),(0,d.jsx)(f,{}),(0,d.jsx)(k,{})]})},7768:(a,b,c)=>{Promise.resolve().then(c.bind(c,6380))},7866:(a,b,c)=>{Promise.resolve().then(c.bind(c,5421))},8056:()=>{},8354:a=>{"use strict";a.exports=require("util")},9121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},9638:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>k});var d=c(687),e=c(3210),f=c(7475);c(3937);let g=[{id:"1",keyword:"svm",title:"Support Vector Machine (SVM)",description:"Machine learning algorithm for classification and regression",technicalDetails:"Used SVM for binary classification in project X. Implemented with scikit-learn, achieved 85% accuracy on test set.",howItWorks:"SVM finds the maximum-margin hyperplane that separates classes. Only support vectors (boundary points) influence the decision; kernels implicitly map inputs to higher dimensions.",inDepth:"Soft-margin parameter C balances margin size vs. misclassification. Kernels (linear/RBF/poly) control expressiveness; RBF is a strong default after feature scaling. Use class weights for imbalance and Platt scaling for calibrated probabilities.",codeExample:{language:"py",code:`from sklearn.svm import SVC
  from sklearn.pipeline import make_pipeline
  from sklearn.preprocessing import StandardScaler
  from sklearn.model_selection import cross_val_score
  
  clf = make_pipeline(StandardScaler(), SVC(C=1.0, kernel="rbf", class_weight="balanced"))
  scores = cross_val_score(clf, X, y, cv=5, scoring="accuracy")
  print(scores.mean())`},projects:["Project X - Classification Model","Course Y - ML Final Project"],skills:["scikit-learn","Python","Machine Learning","Classification"]},{id:"2",keyword:"react",title:"React.js",description:"JavaScript library for building user interfaces",technicalDetails:"Built personal website using React with TypeScript. Implemented responsive design, dark mode, and routing.",howItWorks:"React models UI as a tree of components. State changes trigger a virtual DOM diff; React reconciles minimal updates to the real DOM.",inDepth:"Prefer function components + hooks. useMemo/useCallback guard expensive recalcs; keys stabilize list children; error boundaries and Suspense improve resilience. In Next.js, Server Components and streaming enable faster TTFB.",codeExample:{language:"tsx",code:`import { useEffect, useState } from "react";
  export default function Counter() {
    const [n, setN] = useState(0);
    useEffect(() => { document.title = \`Count: \${n}\`; }, [n]);
    return <button onClick={() => setN(n + 1)}>Clicked {n}</button>;
  }`},projects:["Personal Website","Course Project Z"],skills:["React","TypeScript","JavaScript","CSS","HTML"]},{id:"3",keyword:"python",title:"Python",description:"High-level programming language for data science and web development",technicalDetails:"Extensive experience with Python for data analysis, machine learning, and web development. Used in multiple academic and personal projects.",howItWorks:"CPython compiles source to bytecode executed by a VM. Rich stdlib and ecosystem (numpy, pandas, pytorch) enable fast prototyping.",inDepth:"Idioms: comprehensions, context managers, decorators, dataclasses, typing. Performance via vectorization/numba and multiprocessing; asyncio for I/O-bound tasks. Organize with virtualenv/poetry, pytest for tests.",projects:["Data Analysis Project","ML Research","Web Scraping Tool"],skills:["Python","Data Analysis","Web Development","Automation"]},{id:"4",keyword:"machine learning",title:"Machine Learning",description:"Subset of artificial intelligence focused on algorithms and statistical models",technicalDetails:"Implemented various ML algorithms including supervised and unsupervised learning. Experience with feature engineering, model evaluation, and deployment.",howItWorks:"Models optimize an objective (e.g., cross-entropy/MSE) over labeled/unlabeled data. Generalization is validated on holdout splits with proper cross-validation.",inDepth:"Prevent leakage; perform scaling/encoding inside Pipelines. Use regularization/early stopping; evaluate with appropriate metrics and confidence intervals. In production, monitor drift, recalibrate, and re-train on fresh data.",codeExample:{language:"py",code:`from sklearn.pipeline import Pipeline
  from sklearn.compose import ColumnTransformer
  from sklearn.preprocessing import StandardScaler, OneHotEncoder
  from sklearn.linear_model import LogisticRegression
  from sklearn.model_selection import cross_val_score
  
  pre = ColumnTransformer([
    ("num", StandardScaler(), num_cols),
    ("cat", OneHotEncoder(handle_unknown="ignore"), cat_cols)
  ])
  pipe = Pipeline([("pre", pre), ("clf", LogisticRegression(max_iter=1000))])
  print(cross_val_score(pipe, X, y, cv=5, scoring="roc_auc").mean())`},projects:["Classification Model","Recommendation System","NLP Project"],skills:["Machine Learning","scikit-learn","TensorFlow","Feature Engineering"]},{id:"5",keyword:"diffusion policy",title:"Diffusion Policy",description:"Generative policy learning method for robotic control via diffusion models",technicalDetails:"Implemented diffusion policy for dual-arm manipulation; collected trajectories, tuned noise schedules, and evaluated success rates across tasks, achieving ~90% success in lab benchmarks.",howItWorks:"A denoising network learns to invert a forward noising process on action sequences conditioned on observations; inference samples actions via iterative denoising.",inDepth:"Design choices: action horizon, noise schedule, and conditioning (images/proprio/language). Guidance can improve goal adherence; latency scales with sampling steps. Evaluate success rate and robustness; compare with BC/RL baselines.",projects:["Diffusion Policy for Manipulation","Robotics Generative AI RL Pipeline"],skills:["PyTorch","MuJoCo/MJCF","ROS","Gymnasium","Computer Vision"]},{id:"6",keyword:"reinforcement learning",title:"Reinforcement Learning (RL)",description:"Learning policies through reward optimization for sequential decision-making",technicalDetails:"Built autonomous reward-gen and task-analysis pipeline; integrated with ROS nodes and Gymnasium for continuous RL training and evaluation.",howItWorks:"An agent observes state, takes actions, and receives rewards; it optimizes a policy π(a|s) to maximize expected return.",inDepth:"On-policy (e.g., PPO) vs off-policy (SAC/TD3); reward shaping, curriculum, and normalization stabilize learning. Evaluate average return/success and robustness (noise/perturbations).",codeExample:{language:"py",code:`import gymnasium as gym
  env = gym.make("CartPole-v1")
  obs, _ = env.reset()
  for _ in range(1000):
    action = env.action_space.sample()  # replace with policy(obs)
    obs, reward, terminated, truncated, _ = env.step(action)
    if terminated or truncated:
      obs, _ = env.reset()`},projects:["Robotics Generative AI RL Pipeline","Diffusion Policy for Manipulation"],skills:["PyTorch","Gymnasium","ROS","Python","Simulation"]},{id:"7",keyword:"behavioral cloning",title:"Behavioral Cloning (BC)",description:"Supervised imitation learning from expert demonstrations",technicalDetails:"Trained BC baselines alongside diffusion policies using expert demos; compared sample efficiency and robustness across manipulation tasks.",howItWorks:"BC treats control as supervised learning: learn a mapping from observations to expert actions by minimizing imitation loss.",inDepth:"Susceptible to covariate shift (compounding errors). DAgger mitigates by aggregating expert corrections on visited states. Data diversity and augmentation improve generalization.",codeExample:{language:"py",code:`# obs -> action supervised baseline (PyTorch sketch)
  import torch, torch.nn as nn, torch.optim as optim
  net = nn.Sequential(nn.Linear(obs_dim, 128), nn.ReLU(), nn.Linear(128, act_dim))
  opt = optim.Adam(net.parameters(), lr=1e-3)
  for obs, act in dataloader:
    pred = net(obs)
    loss = ((pred - act)**2).mean()
    opt.zero_grad(); loss.backward(); opt.step()`},projects:["Diffusion Policy for Manipulation"],skills:["PyTorch","Data Collection","Evaluation","Robotics"]},{id:"8",keyword:"ros",title:"Robot Operating System (ROS)",description:"Middleware for robotic perception, control, and messaging",technicalDetails:"Implemented ROS pub/sub nodes for reward generation and task orchestration; integrated control topics for dual-arm setups.",howItWorks:"ROS connects nodes over topics/services/actions using a pub/sub graph. Messages are strongly typed; launch files orchestrate systems.",inDepth:"Design nodes to be stateless where possible; use tf for coordinate frames; record with rosbag for replay/debug. rviz/rqt aid visualization and introspection.",codeExample:{language:"py",code:`# Minimal rospy publisher
  import rospy
  from std_msgs.msg import String
  pub = rospy.Publisher("chatter", String, queue_size=10)
  rospy.init_node("talker")
  rate = rospy.Rate(10)
  while not rospy.is_shutdown():
    pub.publish("hello")
    rate.sleep()`},projects:["Robotics Generative AI RL Pipeline","Diffusion Policy for Manipulation"],skills:["ROS","Python","C++","Simulation","Control"]},{id:"9",keyword:"pytorch",title:"PyTorch",description:"Deep learning framework for research and production",technicalDetails:"Built diffusion/BC/RL models; optimized training loops, dataloaders, and GPU utilization for robotics tasks.",howItWorks:"Define Modules; Autograd tracks tensor ops to compute gradients; optimizers update parameters; GPU acceleration via CUDA.",inDepth:"Use torch.compile/mixed precision for speed; seed for reproducibility; profile with torch.profiler; dataloaders with pin_memory/num_workers to feed GPUs efficiently.",codeExample:{language:"py",code:`import torch, torch.nn as nn, torch.optim as optim
  class Net(nn.Module):
    def __init__(self): super().__init__(); self.l1=nn.Linear(32,64); self.l2=nn.Linear(64,1)
    def forward(self,x): return self.l2(torch.relu(self.l1(x)))
  net, opt = Net(), optim.Adam(Net().parameters(), lr=1e-3)
  x, y = torch.randn(128,32), torch.randn(128,1)
  for _ in range(200):
    pred = net(x); loss = ((pred - y)**2).mean()
    opt.zero_grad(); loss.backward(); opt.step()`},projects:["Diffusion Policy for Manipulation","Robotics Generative AI RL Pipeline"],skills:["PyTorch","CUDA","Python","Experiment Tracking"]},{id:"10",keyword:"gymnasium",title:"OpenAI Gymnasium",description:"Standardized RL environment APIs and tooling",technicalDetails:"Wrapped custom manipulation tasks as Gymnasium envs; implemented reward functions and termination conditions.",howItWorks:"Environments expose a uniform API: reset() returns initial observation; step(action) advances the environment and returns (obs, reward, terminated, truncated, info).",inDepth:"Specify observation/action spaces precisely; seed for reproducibility; consider vectorized envs for throughput; log episodic returns and success metrics.",codeExample:{language:"py",code:`import gymnasium as gym
  env = gym.make("Pendulum-v1")
  obs, _ = env.reset(seed=42)
  done = False
  while not done:
    action = env.action_space.sample()
    obs, reward, terminated, truncated, info = env.step(action)
    done = terminated or truncated`},projects:["Robotics Generative AI RL Pipeline"],skills:["Python","Gymnasium","Simulation","Evaluation"]},{id:"11",keyword:"mlflow",title:"MLflow",description:"Experiment tracking and model management platform",technicalDetails:"Tracked multi-step AI agent experiments; logged metrics/artifacts and compared runs to guide deployment decisions.",howItWorks:"MLflow Tracking records params, metrics, and artifacts for each run; the Registry manages model versions and stages (Staging/Production) for deployment.",inDepth:"Use structured run naming and tags for reproducibility. Log config, seeds, and git commit. Compare runs to pick best checkpoints; register promoted models with inference signatures. Artifacts (plots, confusion matrices, prompts) make reviews faster.",codeExample:{language:"py",code:`import mlflow
  from random import random
  mlflow.set_experiment("agents-multistep")
  with mlflow.start_run(run_name="ablation_lr_1e-3"):
      mlflow.log_param("lr", 1e-3)
      for step in range(100):
          mlflow.log_metric("reward", random(), step=step)
      mlflow.log_artifact("plots/learning_curve.png")
      # Register a model
      mlflow.sklearn.log_model(model, "model", registered_model_name="agent-policy")`},projects:["Ramen Inc. AI Agents"],skills:["MLflow","Python","Experimentation","MLOps"]},{id:"12",keyword:"rag",title:"Retrieval-Augmented Generation (RAG)",description:"Combining LLMs with external knowledge retrieval",technicalDetails:"Built RAG pipelines with ChromaDB for user-adaptive UI agents; implemented chunking, embeddings, and re-ranking.",howItWorks:"User query → embed → nearest-neighbor search over chunked documents → top-k contexts concatenated into the prompt → LLM generates grounded answers.",inDepth:"Quality hinges on chunk size/overlap, embedding choice, and filters (metadata, recency). Add re-ranking and citation injection. Cache embeddings, pre-compute indexes, and monitor hallucination via answer+reference consistency checks.",codeExample:{language:"py",code:`from chromadb import Client
  from chromadb.utils import embedding_functions
  ef = embedding_functions.SentenceTransformerEmbeddingFunction("all-MiniLM-L6-v2")
  chroma = Client()
  col = chroma.get_or_create_collection("kb", embedding_function=ef)
  
  # Upsert docs
  col.upsert(documents=[doc_text], metadatas=[{"source":"guide.md"}], ids=["doc-1"])
  
  # Query
  results = col.query(query_texts=[user_query], n_results=4)
  contexts = "\\n\\n".join(results["documents"][0])
  prompt = f"Answer using the sources only:\\n{contexts}\\n\\nQ: {user_query}\\nA:"`},projects:["Ramen Inc. AI Agents"],skills:["LLMs","ChromaDB","Embeddings","Python","Evaluation"]},{id:"13",keyword:"chromadb",title:"ChromaDB",description:"Open-source vector database for embeddings search",technicalDetails:"Managed collections for RAG; tuned distance metrics and metadata filters for accurate context retrieval.",howItWorks:"Stores vector embeddings and metadata per document chunk. At query time, computes ANN similarity to return top-k relevant chunks.",inDepth:"Design for updates by using stable IDs and metadata (tenant, language, timestamp). Choose cosine vs. L2 per embedding model. Batch upserts, warm caches, and use filters (e.g., tenantId) to enforce multi-tenancy.",codeExample:{language:"py",code:`from chromadb import Client
  client = Client()
  col = client.get_or_create_collection("storefronts")
  col.upsert(
    ids=["p1","p2"],
    documents=["Red shoe description ...","Blue shoe description ..."],
    metadatas=[{"tenant":"Auren"},{"tenant":"Auren"}]
  )
  hits = col.query(query_texts=["red sneaker"], where={"tenant":"Auren"}, n_results=3)`},projects:["Ramen Inc. AI Agents"],skills:["Vector Databases","RAG","Python","Data Engineering"]},{id:"14",keyword:"postgresql",title:"PostgreSQL",description:"Relational database with strong SQL and extension ecosystem",technicalDetails:"Backed AI agents with Postgres; enforced coherence via validation against live DB state; designed schemas and indices.",howItWorks:"MVCC enables concurrent reads/writes without blocking; the planner selects index/scan strategies using table statistics.",inDepth:"Normalize schemas, index selective predicates, and use partial/covering indexes for hot paths. Tune work_mem and analyze regularly. pgvector enables ANN search for embeddings; EXPLAIN ANALYZE confirms wins.",codeExample:{language:"sql",code:`-- Example: partial + composite index for queries on status+created_at
  CREATE INDEX CONCURRENTLY idx_orders_open_created
  ON orders (status, created_at DESC) WHERE status='open';
  
  EXPLAIN ANALYZE
  SELECT id, total FROM orders
  WHERE status='open' AND created_at > now() - interval '7 days'
  ORDER BY created_at DESC LIMIT 50;`},projects:["Ramen Inc. AI Agents","Auren SaaS"],skills:["SQL","Schema Design","Optimization","Migrations"]},{id:"15",keyword:"kubernetes",title:"Kubernetes",description:"Container orchestration for scalable deployments",technicalDetails:"Deployed multi-agent services on k8s with health checks and horizontal scaling; achieved ~99.9% uptime.",howItWorks:"Controllers reconcile desired state (manifests) into actual cluster state. Scheduler places Pods; Services/Ingress expose stable endpoints.",inDepth:"HPA scales on CPU/custom metrics; liveness/readiness probes protect rollouts. Use ConfigMaps/Secrets, RBAC, and resource requests/limits. Blue/green or canary to reduce risk.",codeExample:{language:"md",code:`\`\`\`yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata: { name: agent-svc }
  spec:
    replicas: 3
    selector: { matchLabels: { app: agent } }
    template:
      metadata: { labels: { app: agent } }
      spec:
        containers:
          - name: api
            image: ghcr.io/org/agent:1.2.3
            ports: [{ containerPort: 8080 }]
            readinessProbe: { httpGet: { path: /healthz, port: 8080 }, initialDelaySeconds: 5 }
            resources: { requests: { cpu: "250m", memory: "512Mi" }, limits: { cpu: "1", memory: "1Gi" } }
  \`\`\``},projects:["Ramen Inc. AI Agents"],skills:["Kubernetes","Docker","DevOps","Cloud"]},{id:"16",keyword:"docker",title:"Docker",description:"Containerization for reproducible builds and runtime",technicalDetails:"Containerized agents and services; optimized images with multi-stage builds and smaller base images.",howItWorks:"Docker images are layered filesystems; containers run isolated processes from an image, sharing the host kernel.",inDepth:"Use multi-stage builds, small base images, non-root users, and HEALTHCHECK. Pin versions for reproducibility and leverage build cache for speed.",codeExample:{language:"sh",code:`# Dockerfile (multi-stage)
  # syntax=docker/dockerfile:1
  FROM node:20-alpine as build
  WORKDIR /app
  COPY package*.json .
  RUN npm ci
  COPY . .
  RUN npm run build
  
  FROM node:20-alpine
  WORKDIR /app
  ENV NODE_ENV=production
  COPY --from=build /app/.next ./.next
  COPY --from=build /app/package*.json ./
  RUN npm ci --omit=dev
  USER node
  EXPOSE 3000
  CMD ["node","server.js"]`},projects:["Ramen Inc. AI Agents"],skills:["Docker","CI/CD","DevOps","Optimization"]},{id:"17",keyword:"openmp",title:"OpenMP",description:"Shared-memory parallelism for C/C++",technicalDetails:"Parallelized 3-way Toom–Cook with task/loop pragmas and work partitioning; analyzed scaling and overheads.",howItWorks:"Compiler pragmas spawn threads that share memory; the runtime schedules loop iterations or tasks with synchronization primitives.",inDepth:"Avoid false sharing, tune chunk sizes, and bind threads for NUMA locality. Use reductions for associative ops; prefer tasks for irregular divide-and-conquer.",codeExample:{language:"cpp",code:`#include <omp.h>
  void saxpy(int n, float a, const float* x, float* y) {
    #pragma omp parallel for schedule(static)
    for (int i = 0; i < n; ++i) y[i] = a * x[i] + y[i];
  }`},projects:["Parallelizing Large Number Multiplication"],skills:["C++","OpenMP","Performance","Parallel Algorithms"]},{id:"18",keyword:"parlaylib",title:"ParlayLib",description:"Parallel primitives library for algorithms on shared memory",technicalDetails:"Used ParlayLib to orchestrate fine-grained parallelism in Toom–Cook; integrated with custom big-int data structures.",howItWorks:"Provides parallel map/reduce/scan/filter and divide-and-conquer skeletons with work–span efficient implementations.",inDepth:"Compose primitives to express parallel recursion; minimize allocations and favor cache-friendly layouts. Combine with OpenMP threads if needed, but avoid oversubscription.",codeExample:{language:"cpp",code:`#include <parlay/parallel.h>
  #include <parlay/primitives.h>
  #include <vector>
  std::vector<int> square_all(const std::vector<int>& a) {
    auto out = parlay::sequence<int>(a.size());
    parlay::parallel_for(0, (long)a.size(), [&](long i){ out[i] = a[i]*a[i]; });
    return std::vector<int>(out.begin(), out.end());
  }`},projects:["Parallelizing Large Number Multiplication"],skills:["C++","ParlayLib","Algorithm Engineering"]},{id:"19",keyword:"karatsuba",title:"Karatsuba Multiplication",description:"Divide-and-conquer multiplication for big integers (O(n^log2 3))",technicalDetails:"Implemented cache-aware Karatsuba with vectorized digit ops; baseline for parallel Toom–Cook comparisons.",howItWorks:"Split numbers into high/low halves: compute z0 = a0*b0, z2 = a1*b1, z1 = (a0+a1)(b0+b1)-z0-z2; combine with base shifts.",inDepth:"Choose crossover point vs. grade-school/Toom/FFT. Optimize memory layout (contiguous limbs), avoid reallocations, and vectorize limb ops. Handle carries carefully and test with randomized big ints.",codeExample:{language:"cpp",code:`// Sketch of Karatsuba (base-10^k or base-2^32 limbs)
  void karatsuba(const uint32_t* A, const uint32_t* B, int n, uint32_t* C) {
    if (n <= THRESH) { school_mul(A,B,n,C); return; }
    int m = n/2;
    // Compute z0, z2, and z1 = (A0+A1)*(B0+B1) - z0 - z2
    // Then place into C with base shifts of m and 2m limbs.
  }`},projects:["Parallelizing Large Number Multiplication"],skills:["Algorithms","C++","Performance"]},{id:"20",keyword:"toom-cook",title:"3-way Toom–Cook Multiplication",description:"Generalized divide-and-conquer big-int multiplication",technicalDetails:"Designed novel parallelization strategy; achieved ~535\xd7 speedup in benchmarks with OpenMP + ParlayLib.",howItWorks:"Split each operand into 3 parts (a0,a1,a2) and (b0,b1,b2). Evaluate the polynomials at points {0,1,−1,2,∞}, multiply pointwise, then interpolate the 5 results to recover coefficients and recombine with base shifts.",inDepth:"Key steps: (1) evaluation (cache-friendly linear combos), (2) 5 independent base multiplications (ideal for tasks/threads), (3) numerically stable interpolation with small integer matrices, (4) carry propagation and recomposition. Choose a crossover vs. Karatsuba/FFT; align buffers to avoid false sharing; reuse scratch to reduce allocations.",codeExample:{language:"cpp",code:`// Sketch: Toom-3 evaluation points and parallel pointwise products.
  void toom3_mul(const Limb* A, const Limb* B, int n, Limb* C) {
    // Split A,B into 3 blocks of size m ~ n/3: A0,A1,A2 and B0,B1,B2
    // Evaluate: v0=A(0), v1=A(1), v_1=A(-1), v2=A(2), v_inf=leading(A)
    // Same for B. Then multiply pointwise:
    // #pragma omp parallel for
    // for each k in {0,1,-1,2,inf}: Vk = mul(VA_k, VB_k);
    // Interpolate {V0,V1,V_1,V2,Vinf} -> coefficients, then recombine with base^m shifts.
  }`},projects:["Parallelizing Large Number Multiplication"],skills:["Algorithms","C++","Parallelism","Performance"]},{id:"21",keyword:"next.js",title:"Next.js",description:"React framework for full-stack web apps",technicalDetails:"Built multi-tenant SaaS with server components, routing, and incremental static regeneration; deployed on Vercel.",howItWorks:"Next’s App Router composes Server and Client Components. Data fetching can run on the server; pages can be SSR or statically generated with ISR revalidation. Route Handlers provide API endpoints colocated with UI.",inDepth:"Pick SSR for per-request personalization; ISR for cacheable pages. Use Server Actions for mutations and to keep secrets server-side. Tune caching with `fetch` options (`revalidate`, `cache`, `next.tags`). Prefer edge runtime for low-latency, CPU-light endpoints.",codeExample:{language:"tsx",code:`// app/products/page.tsx (Server Component with ISR)
  export const revalidate = 60; // ISR every 60s
  export default async function Products() {
    const res = await fetch(process.env.API_URL + "/products", { next: { revalidate: 60 }});
    const items = await res.json();
    return <ul>{items.map((p:any)=><li key={p.id}>{p.name}</li>)}</ul>;
  }
  
  // app/api/revalidate/route.ts (tag-based revalidation)
  import { revalidateTag } from "next/cache";
  export async function POST(req: Request) {
    const { tag } = await req.json();
    revalidateTag(tag);
    return new Response("ok");
  }`},projects:["Auren - Technical Cofounder"],skills:["React","TypeScript","Next.js","Full Stack"]},{id:"22",keyword:"prisma",title:"Prisma ORM",description:"Type-safe ORM for Node.js and TypeScript",technicalDetails:"Modeled multi-tenant schemas; wrote migrations and optimized queries; integrated with PostgreSQL.",howItWorks:"Prisma generates a type-safe client from a declarative schema. Queries become typed functions; migrations evolve the DB schema consistently.",inDepth:"Enforce multi-tenancy via `tenantId` and composite unique keys; use `include`/`select` to control payloads. Wrap critical paths in `$transaction` for consistency; add indexes via `@@index` and `@@unique`. For N+1, batch with `include` or DataLoader.",codeExample:{language:"ts",code:`// schema.prisma
  model Storefront {
    id        String @id @default(cuid())
    tenantId  String
    slug      String
    name      String
    @@unique([tenantId, slug])
    @@index([tenantId])
  }
  
  // usage
  import { PrismaClient } from "@prisma/client";
  const prisma = new PrismaClient();
  await prisma.$transaction(async (tx) => {
    const sf = await tx.storefront.create({ data: { tenantId, slug, name }});
    await tx.product.createMany({ data: seedProducts(sf.id) });
  });`},projects:["Auren - Technical Cofounder"],skills:["TypeScript","Prisma","PostgreSQL","Node.js"]},{id:"23",keyword:"stripe",title:"Stripe",description:"Payments platform for subscriptions and one-time charges",technicalDetails:"Integrated multi-variant payments, tax calculation, and webhooks for account lifecycle and billing events.",howItWorks:"Create PaymentIntents/Checkout Sessions on the server; confirm on the client. Listen to webhooks to reconcile state (payments, invoices, subscriptions).",inDepth:"Use idempotency keys for retries, verify webhooks with the signing secret, and store only Stripe IDs (no PAN). For subscriptions, handle trial/renewal events and proration; enable automatic tax where supported.",codeExample:{language:"ts",code:`// route handler: app/api/create-session/route.ts
  import Stripe from "stripe";
  export async function POST() {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: process.env.STRIPE_PRICE_ID!, quantity: 1 }],
      success_url: process.env.APP_URL + "/success",
      cancel_url: process.env.APP_URL + "/cancel",
      automatic_tax: { enabled: true }
    });
    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  }
  
  // webhook: app/api/stripe-webhook/route.ts
  export async function POST(req: Request) {
    const sig = req.headers.get("stripe-signature")!;
    const buf = Buffer.from(await req.arrayBuffer());
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const evt = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    // switch(evt.type) { case "invoice.paid": ... }
    return new Response("ok");
  }`},projects:["Auren - Technical Cofounder"],skills:["Stripe","Backend","Security","Webhooks"]},{id:"24",keyword:"vercel",title:"Vercel",description:"Serverless hosting and deployment for Next.js",technicalDetails:"Automated CI/CD; configured edge functions and caching to maintain ~99.9% uptime.",howItWorks:"Every push builds a preview environment. Serverless/Edge functions scale on demand; CDN caching and ISR serve static responses globally with on-demand revalidation.",inDepth:"Use environment-scoped secrets (`Preview`/`Production`). Prefer Edge Runtime for low-latency reads; keep CPU-heavy tasks on serverless Node or background jobs. Monitor with logs/analytics; configure headers for caching.",codeExample:{language:"ts",code:`// app/api/edge-ping/route.ts (Edge Runtime)
  export const runtime = "edge";
  export const preferredRegion = ["iad1"]; // example
  export async function GET() {
    return new Response(JSON.stringify({ ok: true, ts: Date.now() }), {
      headers: { "cache-control": "public, max-age=30, s-maxage=300" }
    });
  }`},projects:["Auren - Technical Cofounder"],skills:["Deployment","CI/CD","Vercel","Observability"]},{id:"25",keyword:"tailwindcss",title:"Tailwind CSS",description:"Utility-first CSS framework",technicalDetails:"Built responsive, accessible UI for multi-tenant storefronts; dark mode and component library patterns.",howItWorks:"Tailwind compiles utility classes into a minimal CSS bundle based on what’s used in your templates. Design tokens (spacing, colors) are configured in `tailwind.config`.",inDepth:"Compose utilities into components with `@apply`; enable `darkMode: 'class'` for explicit theming. Keep variants consistent (focus-visible, disabled) and extract common patterns. Purge paths must include dynamic routes/components.",codeExample:{language:"ts",code:`// tailwind.config.ts
  export default {
    darkMode: "class",
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: { extend: { borderRadius: { xl: "1rem" } } }
  }
  
  // Button.tsx
  export function Button({ children }: { children: React.ReactNode }) {
    return <button className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline focus-visible:ring">
      {children}
    </button>;
  }`},projects:["Auren - Technical Cofounder","Personal Website"],skills:["TailwindCSS","UI/UX","Accessibility","Design Systems"]},{id:"26",keyword:"redis",title:"Redis",description:"In-memory data store for caching and queues",technicalDetails:"Implemented caching for storefront rendering; reduced TTFB and improved concurrency under load.",howItWorks:"Key–value storage with rich data structures (strings, hashes, lists, sets). Typical web usage: read-through cache with TTL and optional locks to prevent stampedes.",inDepth:"Choose TTLs per data volatility; use `SET key val EX ttl NX` to create locks; prefer pipelines for batching. For multi-tenant, prefix keys; consider Redis Cluster if memory/throughput scales.",codeExample:{language:"ts",code:`import Redis from "ioredis";
  const redis = new Redis(process.env.REDIS_URL!);
  
  export async function cache<T>(key: string, ttlSec: number, loader: () => Promise<T>): Promise<T> {
    const hit = await redis.get(key);
    if (hit) return JSON.parse(hit);
    const lock = await redis.set("lock:"+key, "1", "EX", 10, "NX");
    const data = await loader();
    await redis.set(key, JSON.stringify(data), "EX", ttlSec);
    if (lock) await redis.del("lock:"+key);
    return data;
  }`},projects:["Auren - Technical Cofounder"],skills:["Redis","Caching","Performance","Scalability"]},{id:"27",keyword:"node.js",title:"Node.js",description:"JavaScript runtime for backend services",technicalDetails:"Built APIs for event verification and SaaS backend; handled auth, webhooks, and database access.",howItWorks:"Event-loop with non-blocking I/O lets a small number of threads multiplex many connections. Use async/await over Promises for clarity.",inDepth:"Keep CPU-heavy work off the main thread (worker threads/queues). Centralize error handling, validate inputs, and set timeouts on all outbound calls. Monitor with structured logs and health checks.",codeExample:{language:"ts",code:`import express from "express";
  const app = express(); app.use(express.json());
  
  // async handler wrapper
  const ah = (fn: any) => (req:any,res:any,next:any) => Promise.resolve(fn(req,res,next)).catch(next);
  
  app.get("/healthz", (_,res)=>res.send("ok"));
  app.post("/api/events", ah(async (req,res) => {
    // process event...
    res.status(201).json({ ok: true });
  }));
  
  // error middleware
  app.use((err:any, _req:any, res:any, _next:any) => {
    console.error(err);
    res.status(500).json({ error: "internal" });
  });
  app.listen(3000);`},projects:["Yale Clubs","Auren - Technical Cofounder"],skills:["Node.js","TypeScript","REST","Auth"]},{id:"28",keyword:"mongodb",title:"MongoDB",description:"Document database for flexible schemas",technicalDetails:"Stored event submissions and verifications; indexed frequent queries and implemented JWT-based access.",howItWorks:"Stores JSON-like documents; secondary indexes accelerate queries. Best for evolving schemas and high read throughput with denormalized patterns.",inDepth:"Design for your queries: compound indexes, projections, and partial indexes. Use transactions when updating multiple collections; add TTL indexes for ephemeral docs; validate with JSON Schema.",codeExample:{language:"ts",code:`import mongoose from "mongoose";
  const EventSchema = new mongoose.Schema({
    tenantId: { type: String, index: true },
    title: String,
    status: { type: String, index: true },
    createdAt: { type: Date, default: Date.now, index: true }
  }, { timestamps: true });
  
  EventSchema.index({ tenantId: 1, status: 1, createdAt: -1 }); // compound
  export const Event = mongoose.model("Event", EventSchema);
  
  // aggregate example:
  const byStatus = await Event.aggregate([
    { $match: { tenantId } },
    { $group: { _id: "$status", count: { $sum: 1 } } }
  ]);`},projects:["Yale Clubs"],skills:["MongoDB","Mongoose","Indexes","JWT"]},{id:"29",keyword:"jwt",title:"JWT Authentication",description:"Token-based stateless authentication mechanism",technicalDetails:"Implemented secure JWT flows with expiration/refresh, role-based access, and middleware validation.",howItWorks:"JWT = header.payload.signature (JWS). Server verifies signature and claims (exp/aud/iss/sub) before authorizing.",inDepth:"Use short-lived access tokens in httpOnly cookies; rotate refresh tokens server-side with revocation. Enforce audience/issuer, strict clocks, and narrow scopes. Rely on short expirations for logout.",codeExample:{language:"ts",code:`import jwt from "jsonwebtoken";
  const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET!;
  
  export function signAccess(sub: string) {
    return jwt.sign({ sub, scope: "user:read" }, ACCESS_SECRET, {
      expiresIn: "15m", audience: "myapp", issuer: "myapp"
    });
  }
  
  export function requireAuth(req: any, res: any, next: any) {
    const token = req.cookies?.access_token;
    if (!token) return res.status(401).json({ error: "missing token" });
    try {
      req.user = jwt.verify(token, ACCESS_SECRET, { audience: "myapp", issuer: "myapp" });
      next();
    } catch { return res.status(401).json({ error: "invalid/expired token" }); }
  }`},projects:["Yale Clubs","Event Verification Tool"],skills:["Auth","Security","Node.js","Web"]},{id:"30",keyword:"openai",title:"OpenAI APIs",description:"LLM APIs for generation and tool-augmented workflows",technicalDetails:"Built verification agent and UI assistants; prompt engineered, added function/tool calling, and evaluation harnesses.",howItWorks:"Models generate token-by-token completions conditioned on messages and optional tool calls. Retrieval/tools feed structured results back to the model for grounded outputs.",inDepth:"Constrain outputs with JSON schemas; design idempotent tools; cache prompts and retrieved contexts; measure quality with golden tasks and failure taxonomies; budget latency and cost via truncation and caching.",codeExample:{language:"ts",code:`import OpenAI from "openai";
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  
  // simple chat completion
  const resp = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: "Summarize: RAG vs fine-tuning?" }]
  });
  console.log(resp.choices[0].message.content);`},projects:["Yale Clubs - Event Verification","Ramen Inc. AI Agents"],skills:["LLMs","RAG","Evaluation","TypeScript","Python"]},{id:"31",keyword:"shap",title:"SHAP",description:"Game-theoretic feature attribution for model interpretability",technicalDetails:"Used SHAP to confirm cerebellum’s importance in risk tolerance predictions; compared attributions across models.",howItWorks:"SHAP estimates each feature’s contribution to a prediction using Shapley values—averaging the marginal effect of adding a feature across all coalitions of features.",inDepth:"KernelSHAP is model-agnostic but slower; TreeSHAP exploits tree structure for exact/fast attributions. Choose a representative background dataset to avoid distribution shift; watch correlation effects (attributions can be split among collinear features). Aggregate local SHAP values to global importances and visualize dependence/interaction plots.",codeExample:{language:"py",code:`import shap
  import numpy as np
  from sklearn.ensemble import RandomForestRegressor
  
  X_train, y_train = ...
  X_test = ...
  model = RandomForestRegressor(n_estimators=300, random_state=42).fit(X_train, y_train)
  
  # TreeSHAP for tree models
  explainer = shap.TreeExplainer(model)
  shap_values = explainer.shap_values(X_test)
  
  # Global importance (mean |SHAP|)
  importances = np.abs(shap_values).mean(axis=0)
  print("Top features:", importances.argsort()[::-1][:10])`},projects:["Brain Matter Data Analysis"],skills:["Interpretability","Python","Model Explainability"]},{id:"32",keyword:"random forests",title:"Random Forests",description:"Ensemble of decision trees for robust predictions",technicalDetails:"Benchmarked RF vs SVR/MLR on neuroimaging dataset with repeated CV and stability analysis.",howItWorks:"Trains many decision trees on bootstrap samples and averages their predictions (classification by majority vote). Random feature subsampling at each split decorrelates trees to reduce variance.",inDepth:"Tune n_estimators until OOB error plateaus; control overfitting with max_depth/min_samples_leaf. Prefer permutation importance over mean decrease in impurity; handle class imbalance with class_weight or balanced subsampling. Calibrate probabilities if required (Platt/Isotonic).",codeExample:{language:"py",code:`from sklearn.ensemble import RandomForestClassifier
  from sklearn.model_selection import cross_val_score
  from sklearn.metrics import roc_auc_score
  from sklearn.calibration import CalibratedClassifierCV
  
  clf = RandomForestClassifier(
      n_estimators=400, max_depth=None, min_samples_leaf=2,
      n_jobs=-1, oob_score=True, class_weight="balanced_subsample", random_state=42
  )
  scores = cross_val_score(clf, X, y, cv=5, scoring="roc_auc")
  print("CV AUC:", scores.mean())
  
  clf.fit(X, y)
  print("OOB score:", clf.oob_score_)`},projects:["Brain Matter Data Analysis"],skills:["scikit-learn","Python","Evaluation"]},{id:"33",keyword:"multiple linear regression",title:"Multiple Linear Regression",description:"Linear modeling for continuous outcomes with multiple predictors",technicalDetails:"Built baseline models; checked multicollinearity, residuals, and regularization alternatives.",howItWorks:"Fits coefficients β to minimize squared error: y ≈ Xβ + ε. Coefficients describe conditional linear relationships between predictors and the target.",inDepth:"Validate assumptions: linearity, homoscedasticity, independent errors, and approximate normality for inference. Diagnose multicollinearity via VIF; standardize features; compare Ridge/Lasso for better generalization under collinearity and high-dimensionality.",codeExample:{language:"py",code:`from sklearn.pipeline import Pipeline
  from sklearn.preprocessing import StandardScaler
  from sklearn.linear_model import RidgeCV
  from sklearn.model_selection import cross_val_score
  
  alphas = [0.0, 0.1, 1.0, 10.0]
  pipe = Pipeline([
    ("scale", StandardScaler()),
    ("ridge", RidgeCV(alphas=alphas, store_cv_values=True))
  ])
  scores = cross_val_score(pipe, X, y, cv=5, scoring="r2")
  print("CV R^2:", scores.mean())`},projects:["Brain Matter Data Analysis"],skills:["Statistics","Python","Modeling"]},{id:"34",keyword:"typescript",title:"TypeScript",description:"Typed superset of JavaScript for scalable apps",technicalDetails:"Used extensively across React/Next/Node; improved reliability with strict types and generics.",howItWorks:"A structural, compile-time type system that erases to JavaScript. Inference and narrowing catch errors early without runtime overhead.",inDepth:"Leverage generics and discriminated unions for safe APIs; use utility types (Partial, Pick, Omit) and satisfies for config validation. Enable strict mode, exactOptionalPropertyTypes, and path aliases; model domain data with branded types to prevent mix-ups.",codeExample:{language:"ts",code:`// Generic Result type + discriminated unions
  type Ok<T> = { ok: true; value: T };
  type Err<E extends string> = { ok: false; error: E };
  type Result<T, E extends string = "error"> = Ok<T> | Err<E>;
  
  function parseIntSafe(s: string): Result<number, "NaN"> {
    const n = Number.parseInt(s, 10);
    return Number.isNaN(n) ? { ok: false, error: "NaN" } : { ok: true, value: n };
  }
  
  // Branded IDs to avoid cross-assignments
  type Brand<T, B extends string> = T & { __brand: B };
  type UserId = Brand<string, "UserId">;
  const asUserId = (s: string) => s as UserId;
  
  const id: UserId = asUserId("u_123");
  const r = parseIntSafe("42");
  if (r.ok) console.log(r.value);`},projects:["Auren - Technical Cofounder","Yale Clubs","Personal Website"],skills:["TypeScript","React","Node.js","Next.js"]}],h=()=>{let[a,b]=(0,e.useState)(""),[c,f]=(0,e.useState)(null),h=(0,e.useMemo)(()=>g.map(a=>({item:a,blob:(a=>[a.keyword,a.title,a.description,a.technicalDetails,a.howItWorks,a.inDepth,...a.skills].join(" ").toLowerCase())(a)})),[]),i=(0,e.useMemo)(()=>{let b=a.trim().toLowerCase();if(!b)return[];let c=a=>{let c=b.toLowerCase(),d=a.title.toLowerCase(),e=a.keyword.toLowerCase();return Number(d.startsWith(c)||e.startsWith(c))};return h.filter(({blob:a})=>a.includes(b)).sort((a,b)=>c(b.item)-c(a.item)||a.item.title.localeCompare(b.item.title)).map(({item:a})=>a)},[h,a]);return(0,d.jsxs)("div",{className:"resume-search-container",children:[(0,d.jsxs)("div",{className:"search-header",children:[(0,d.jsx)("h1",{children:"Resume Search"}),(0,d.jsx)("p",{children:"Search your skills, projects, and deep-dive explanations"})]}),(0,d.jsx)("div",{className:"search-input-container",children:(0,d.jsx)("input",{type:"text",placeholder:"Search for skills, technologies, or concepts...",value:a,onChange:a=>(a=>{if(b(a),!a.trim())return void f(null);let d=i[0]??null;d&&d.id===c?.id||f(d)})(a.target.value),className:"search-input"})}),(0,d.jsxs)("div",{className:"search-results-container",children:[(0,d.jsx)("div",{className:"results-list",children:i.length>0?i.map(a=>(0,d.jsxs)("div",{className:`result-item ${c?.id===a.id?"selected":""}`,onClick:()=>f(a),children:[(0,d.jsx)("h3",{children:a.title}),(0,d.jsx)("p",{className:"result-description",children:a.description}),(0,d.jsx)("div",{className:"result-tags",children:a.skills.slice(0,2).map((a,b)=>(0,d.jsx)("span",{className:"skill-tag",children:a},b))})]},a.id)):a?(0,d.jsx)("div",{className:"no-results",children:(0,d.jsxs)("p",{children:['No results found for "',a,'"']})}):(0,d.jsxs)("div",{className:"search-prompt",children:[(0,d.jsx)("p",{children:"Start typing to search through your resume content..."}),(0,d.jsx)("div",{className:"example-searches",children:(0,d.jsx)("p",{children:"Try: SVM, Python, React, Diffusion Policy, Redis"})})]})}),c&&(0,d.jsxs)("div",{className:"item-details",children:[(0,d.jsxs)("div",{className:"detail-header",children:[(0,d.jsx)("h2",{children:c.title}),(0,d.jsx)("p",{className:"detail-description",children:c.description})]}),(0,d.jsxs)("div",{className:"detail-section",children:[(0,d.jsx)("h3",{children:"Technical Details"}),(0,d.jsx)("p",{children:c.technicalDetails})]}),(0,d.jsxs)("div",{className:"detail-section",children:[(0,d.jsx)("h3",{children:"How it works"}),(0,d.jsx)("p",{children:c.howItWorks})]}),(0,d.jsxs)("div",{className:"detail-section",children:[(0,d.jsx)("h3",{children:"In depth"}),(0,d.jsx)("p",{children:c.inDepth})]}),c.codeExample?.code&&(0,d.jsxs)("div",{className:"detail-section",children:[(0,d.jsx)("h3",{children:"Code example"}),(0,d.jsx)("pre",{className:"code-block",children:(0,d.jsx)("code",{children:c.codeExample.code})})]}),(0,d.jsxs)("div",{className:"detail-section",children:[(0,d.jsx)("h3",{children:"Related Projects"}),(0,d.jsx)("ul",{className:"projects-list",children:c.projects.map((a,b)=>(0,d.jsx)("li",{children:a},b))})]}),(0,d.jsxs)("div",{className:"detail-section",children:[(0,d.jsx)("h3",{children:"Skills & Technologies"}),(0,d.jsx)("div",{className:"skills-container",children:c.skills.map((a,b)=>(0,d.jsx)("span",{className:"skill-badge",children:a},b))})]})]})]})]})};c(5182);let i=({children:a})=>{let[b,c]=(0,e.useState)(!1),[f,g]=(0,e.useState)(""),[h,i]=(0,e.useState)(""),[j,k]=(0,e.useState)(!1);(0,e.useEffect)(()=>{(async()=>{try{let a=await fetch("/api/verify-session");a.ok&&(await a.json()).authenticated&&c(!0)}catch(a){console.error("Session check failed:",a)}})()},[]);let l=async a=>{a.preventDefault(),k(!0),i("");try{let a=await fetch("/api/auth-resume",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:f})}),b=await a.json();a.ok&&b.success?c(!0):i(b.error||"Authentication failed"),g("")}catch(a){console.error("Authentication error:",a),i("Network error. Please try again.")}finally{k(!1)}};return b?(0,d.jsx)("div",{className:"password-protected-content",children:a}):(0,d.jsx)("div",{className:"password-protection-container",children:(0,d.jsxs)("div",{className:"password-form-container",children:[(0,d.jsx)("div",{className:"password-form-header",children:(0,d.jsx)("h2",{children:"Access Required"})}),(0,d.jsxs)("form",{onSubmit:l,className:"password-form",children:[(0,d.jsx)("div",{className:"password-input-group",children:(0,d.jsx)("input",{type:"password",value:f,onChange:a=>g(a.target.value),placeholder:"Enter password",className:"password-input",disabled:j,autoFocus:!0})}),h&&(0,d.jsx)("div",{className:"password-error",children:h}),j&&(0,d.jsx)("div",{className:"password-loading",children:"Authenticating..."})]})]})})};var j=c(6380);function k(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f.A,{children:(0,d.jsx)(i,{children:(0,d.jsx)(h,{})})}),(0,d.jsx)(j.Analytics,{})]})}}};var b=require("../../webpack-runtime.js");b.C(a);var c=b.X(0,[985,561,418],()=>b(b.s=4021));module.exports=c})();