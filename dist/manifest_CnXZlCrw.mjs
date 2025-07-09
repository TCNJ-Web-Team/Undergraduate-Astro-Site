import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, h as decodeKey } from './chunks/astro/server_CQh-u2xo.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/","cacheDir":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/node_modules/.astro/","outDir":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/dist/","srcDir":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/src/","publicDir":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/public/","buildClientDir":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/dist/client/","buildServerDir":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/dist/server/","adapterName":"","routes":[{"file":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/dist/graduate/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/graduate","isIndex":true,"type":"page","pattern":"^\\/graduate$","segments":[[{"content":"graduate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/graduate/index.astro","pathname":"/graduate","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://programs.tcnj.edu","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/graduate/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/graduate/index.astro",{"propagation":"none","containsHead":true}],["/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/graduate/[slug]@_@astro":"pages/graduate/_slug_.astro.mjs","\u0000@astro-page:src/pages/graduate/index@_@astro":"pages/graduate.astro.mjs","\u0000@astro-page:src/pages/[slug]@_@astro":"pages/_slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CnXZlCrw.mjs","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/NavigationBarGrad":"_astro/NavigationBarGrad.kYb7sL33.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedTitle":"_astro/AnimatedTitle.DwyfLMdw.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/GraduateHero":"_astro/GraduateHero.b-mMqncU.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/TopOption":"_astro/TopOption.mM3pjp-N.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/AnnouncementBar":"_astro/AnnouncementBar.Brankak0.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/AtAGlanceGrad":"_astro/AtAGlanceGrad.ClG5DDfS.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/ProgramDetailsGrad":"_astro/ProgramDetailsGrad.6FukJa5-.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/GradRelatedPrograms":"_astro/GradRelatedPrograms.pjEeLj_d.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/NavigationBar":"_astro/NavigationBar.BpO5B5gY.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedHero":"_astro/AnimatedHero.DEkDVrus.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedProgramAtAGlance":"_astro/AnimatedProgramAtAGlance.9fa_847g.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/RelatedProgSlider":"_astro/RelatedProgSlider.gH95D24z.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/IntroSection":"_astro/IntroSection.DvVOm8t2.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/IntroSectionUpdated":"_astro/IntroSectionUpdated.BHuIZIr5.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalHeader":"_astro/GlobalHeader.CXZEO-mW.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/Accordion":"_astro/Accordion.DkbRsOFI.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalFooter.astro?astro&type=script&index=0&lang.ts":"_astro/GlobalFooter.astro_astro_type_script_index_0_lang.CFlFZI5P.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedRightImage":"_astro/AnimatedRightImage.CgXaj4HC.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedBodyCopy":"_astro/AnimatedBodyCopy.Bw7j8Dad.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/ProgramList":"_astro/ProgramList.DiyFDu1f.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/VideoPlayerBody":"_astro/VideoPlayerBody.CwH9DM17.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/QuoteContent":"_astro/QuoteContent.B2kj4g9n.js","@astrojs/react/client.js":"_astro/client.CiCQG_Ko.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/TopOptionNew":"_astro/TopOptionNew.D7xryKF1.js","/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/TopOptionNew.tsx":"_astro/TopOptionNew.BEWDstVp.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalFooter.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"current-year\");e&&(e.textContent=new Date().getFullYear().toString())});"]],"assets":["/file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/dist/404.html","/file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/dist/graduate/index.html","/file:///Users/holstena/Documents/GitHub/Undergraduate-Astro/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Zj7DHEUlVfqV9sfZVbiAWxdqEOyJkGsQn3Bc5sZ10W4="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
