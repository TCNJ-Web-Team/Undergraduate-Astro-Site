import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_4a106505.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.b75dbeef.css"},{"type":"inline","content":"body{margin:0}.inner-width{max-width:1128px;margin:0 auto}header{position:relative;padding-top:65px;background-image:url(https://graduate.tcnj.edu/explore-programs/img/program-finder-hero.jpg);background-position-x:50%;background-size:cover;padding-bottom:75px}header #intro{position:relative;z-index:50}header .overlay{background-color:#000;position:absolute;width:100%;height:100%;z-index:10;opacity:.35;margin-top:-65px;pointer-events:none;top:0}header h1{font-family:Alfa Slab One,Georgia,serif;font-weight:400;font-size:70px;line-height:80px;text-align:left;margin-bottom:18px;margin-top:90px;color:#fdd700}header p{font-family:Domine,serif;font-weight:400;font-size:23px;line-height:40px;text-align:left;color:#fff;text-decoration:none}.program-wrapper{display:grid;grid-gap:40px 3.5%;gap:40px 3.5%;grid-template-columns:31% 31% 31%;list-style:none}.program-wrapper .program-card{border:1px solid #bcbcbc;background-color:#fff;padding:0;min-height:248px;position:relative;transition:all .25s;pointer-events:none}.program-wrapper .program-card:hover{filter:drop-shadow(3px 8px 4px rgba(0,0,0,.15))}.program-wrapper .program-card .program-link{pointer-events:all;font-family:Domine,serif;font-weight:700;font-size:21px;line-height:30px;text-align:left;color:#2e2e2e;text-decoration:none;padding:50px 50px 0;display:block;height:calc(100% - 50px)}.program-wrapper .program-card .program-link p{margin-top:0}.program-wrapper .program-card .program-link hr{pointer-events:none;display:block;border:0;border-top:1px solid #d3d3d3;margin:25px 0}.program-wrapper .program-card .program-link .icon-container{pointer-events:none;display:flex;flex-direction:row;flex-wrap:wrap;grid-gap:10px 20px;gap:10px 20px;margin-bottom:50px}.program-wrapper .program-card .program-link .icon-container p{margin:0;grid-gap:5px;gap:5px;display:flex;align-items:center;pointer-events:none;font-family:Open Sans,sans-serif;font-weight:400;font-size:14px;line-height:25px;text-align:left;color:#2e2e2e}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.b75dbeef.css"},{"type":"external","src":"/_astro/_slug_.1e5b471e.css"}],"routeData":{"route":"/[slug]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/[slug].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_43170f2f.mjs","\u0000@astrojs-manifest":"manifest_7e16e08e.mjs","/Users/holstena/Documents/GitHub/Undergraduate-Astro/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_fe124244.mjs","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/Accordion":"_astro/Accordion.19e59510.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalHeader":"_astro/GlobalHeader.d5712506.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/ProgramList":"_astro/ProgramList.533ad151.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/RelatedProgSlider":"_astro/RelatedProgSlider.facad7e9.js","@astrojs/react/client.js":"_astro/client.802dacf3.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
