import { c as createComponent, e as renderScript, m as maybeRenderHead, r as renderTemplate, b as createAstro, d as addAttribute, f as renderHead, a as renderComponent, g as renderSlot, F as Fragment$1 } from './astro/server_CQh-u2xo.mjs';
import 'kleur/colors';
/* empty css                          */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';

function GlobalHeader({ indexCheck }) {
  const [open, setOpen] = useState(false);
  const openSideNav = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  const handleClickOutside = (e) => {
    if (e.target.id === "slider-container") {
      setOpen(false);
    }
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("keydown", handleKeyPress);
    } else {
      document.removeEventListener("keydown", handleKeyPress);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: `global-nav${indexCheck ? " index-nav" : ""}`, children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          id: "slider-container",
          onClick: handleClickOutside,
          className: open ? "open" : "",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                alt: "Close",
                id: "close-button",
                src: "/close-button.svg",
                onClick: openSideNav
              }
            ),
            /* @__PURE__ */ jsx("div", { id: "nav-container", children: /* @__PURE__ */ jsxs("div", { id: "slider-nav", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "tcnj-global-search-panel",
                  style: { textAlign: "center" },
                  children: /* @__PURE__ */ jsxs("form", { id: "cse-search-box", action: "//tcnj.edu/search/", children: [
                    /* @__PURE__ */ jsx("label", { className: "visually-hidden", htmlFor: "g-search", children: "Search" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "hidden",
                        name: "cx",
                        value: "016215932862171572185:xlzcmqlxfr0"
                      }
                    ),
                    /* @__PURE__ */ jsx("input", { type: "hidden", name: "cof", value: "FORID:10" }),
                    /* @__PURE__ */ jsx("input", { type: "hidden", name: "ie", value: "UTF-8" }),
                    /* @__PURE__ */ jsx("input", { type: "hidden", name: "hq", value: "-inurl:https" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        id: "g-search",
                        type: "text",
                        name: "q",
                        className: "search-icon",
                        placeholder: ""
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        id: "SearchButton",
                        value: "submit",
                        type: "submit",
                        name: "sa"
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "global-nav-panel", children: [
                /* @__PURE__ */ jsx("a", { href: "https://www.tcnj.edu", children: "TCNJ Home" }),
                /* @__PURE__ */ jsx("a", { href: "https://tcnj.edu/about/", children: "About" }),
                /* @__PURE__ */ jsx("a", { href: "https://academics.tcnj.edu", children: "Academics" }),
                /* @__PURE__ */ jsx("a", { href: "https://admissions.tcnj.edu/", children: "Admissions" }),
                /* @__PURE__ */ jsx("a", { href: "https://www.tcnjathletics.com/", children: "Athletics" }),
                /* @__PURE__ */ jsx("a", { href: "https://campuslife.tcnj.edu/", children: "Campus Life" }),
                /* @__PURE__ */ jsx("a", { href: "https://library.tcnj.edu/", children: "Library" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-menu", children: [
                /* @__PURE__ */ jsx("a", { href: "https://tcnj.edu/a-z/", children: "A-Z" }),
                /* @__PURE__ */ jsx("a", { href: "https://www.tcnj.edu/directories", children: "Directory" }),
                /* @__PURE__ */ jsx("a", { href: "https://tcnj.edu/about/campus-info/campus-map/", children: "Map" }),
                /* @__PURE__ */ jsx("a", { href: "https://tcnj.edu/administration/", children: "Offices" })
              ] }),
              /* @__PURE__ */ jsxs("div", { id: "social-icons", className: "flex-menu", children: [
                /* @__PURE__ */ jsx("a", { href: "http://www.facebook.com/tcnjlions", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    width: "24",
                    height: "24",
                    alt: "facebook icon",
                    src: "https://programs.tcnj.edu/facebook-4-32.png"
                  }
                ) }),
                /* @__PURE__ */ jsx("a", { href: "http://twitter.com/tcnj", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    width: "24",
                    height: "24",
                    alt: "twitter icon",
                    src: "https://programs.tcnj.edu/twitter-4-32.png"
                  }
                ) }),
                /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/school/the-college-of-new-jersey/", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    width: "24",
                    height: "24",
                    alt: "linkedin icon",
                    src: "https://programs.tcnj.edu/linkedin-4-32.png"
                  }
                ) }),
                /* @__PURE__ */ jsx("a", { href: "http://instagram.com/tcnj_official", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    width: "24",
                    height: "24",
                    alt: "instagram icon",
                    src: "https://programs.tcnj.edu/instagram-4-32.png"
                  }
                ) }),
                /* @__PURE__ */ jsx("a", { href: "http://www.youtube.com/tcnjvideo", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    width: "24",
                    height: "24",
                    alt: "youtube icon",
                    src: "https://programs.tcnj.edu/youtube-32-rev.png"
                  }
                ) })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: `inner${indexCheck ? " homepage-nav" : ""}`, children: [
        /* @__PURE__ */ jsx("a", { style: { display: "flex" }, href: "https://tcnj.edu/", children: /* @__PURE__ */ jsx(
          "img",
          {
            id: "tcnj-logo",
            src: "/tcnj-logo.svg",
            alt: "TCNJ",
            className: "w-[203px] h-[43.922px]"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "nav-menu", children: [
          /* @__PURE__ */ jsx("a", { href: "https://admissions.tcnj.edu/apply/", children: "Apply" }),
          /* @__PURE__ */ jsx("a", { href: "https://admissions.tcnj.edu/visit/", children: "Visit" }),
          /* @__PURE__ */ jsx("a", { href: "https://give.tcnj.edu/", children: "Give" }),
          /* @__PURE__ */ jsx("span", { className: "desktop-global-nav-item", children: "|" }),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "desktop-global-nav-item",
              href: "https://alumni.tcnj.edu/",
              children: "Alumni"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "desktop-global-nav-item",
              href: "https://parents.tcnj.edu/",
              children: "Parents"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "desktop-global-nav-item",
              href: "https://tcnj.edu/administration/",
              children: "Offices"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              className: "desktop-global-nav-item",
              href: "https://today.tcnj.edu/",
              children: "TCNJ Today"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              id: "open-sidebar-button",
              src: "/menu-icon-white.svg",
              alt: "Global Nav Menu",
              onClick: openSideNav,
              className: "w-[17px] h-[14px]"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { id: "site-header", children: [
      /* @__PURE__ */ jsx("div", { id: "site-title", className: "inner", children: /* @__PURE__ */ jsx("a", { id: "parent-site" }) }),
      /* @__PURE__ */ jsx("div", { id: "site-nav", children: /* @__PURE__ */ jsx("div", { className: "inner" }) })
    ] })
  ] });
}

const $$GlobalFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalFooter.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div class="global-footer-2022"> <div class="inner-width"> <div class="grid-wrapper"> <a id="logo-container" href="https://tcnj.edu/"> <img src="https://programs.tcnj.edu/tcnj-compact-logo-site-footer-FINAL-092221-min.png" alt="logo" class="no-tablet footer-logo" loading="lazy"> <img class="tablet-only footer-logo" src="https://programs.tcnj.edu/tcnj-logo-tablet.svg" alt="TCNJ" loading="lazy"> </a> <div class="one-third"> <h2>Campus</h2> <ul> <li><a href="https://tcnj.bncollege.com/">Bookstore</a></li> <li><a href="https://tcnj.edu/events/">Calendars</a></li> <li> <a href="https://tcnj.edu/about/campus-info/campus-map/">
Campus Map
</a> </li> <li> <a href="https://eawebprod.tcnj.edu/directory/">Directory</a> </li> <li> <a href="https://tcnj.edu/campus-life/">Housing &amp; Dining</a> </li> <li><a href="https://library.tcnj.edu/">Library</a></li> <li> <a href="https://campuslife.tcnj.edu/health-safety/">
Safety &amp; Health
</a> </li> </ul> </div> <div class="one-third"> <h2>Programs</h2> <ul> <li> <a href="https://academics.tcnj.edu/majors/">List of Majors</a> </li> <li> <a href="https://academics.tcnj.edu/undergraduate-study/">
Undergraduate Degrees
</a> </li> <li> <a href="https://graduate.tcnj.edu/graduate-areas-of-study/">
Graduate Degrees
</a> </li> <li><a href="https://honors.tcnj.edu/">Honors</a></li> <li> <a href="https://collegecore.tcnj.edu/">College Core</a> </li> <li><a href="https://cge.tcnj.edu/">Study Abroad</a></li> <li> <a href="https://intersession.tcnj.edu/">Summer &amp; Winter</a> </li> </ul> </div> <div class="one-third last"> <div> <h2>Schools</h2> <ul> <li> <a href="https://artscomm.tcnj.edu/"> Arts &amp; Communication</a> </li> <li><a href="https://business.tcnj.edu/">Business</a></li> <li><a href="https://education.tcnj.edu/">Education</a></li> <li><a href="https://engineering.tcnj.edu/">Engineering</a></li> <li> <a href="https://hss.tcnj.edu/">
Humanities &amp; Social Sciences
</a> </li> <li> <a href="https://nhs.tcnj.edu/"> Nursing &amp; Health Sciences</a> </li> <li><a href="https://science.tcnj.edu/">Science</a></li> </ul> </div> </div> </div> <hr id="footer-hr"> <div class="bottom-container"> <div class="alignleft"> <p class="copyright"> <a href="https://news.tcnj.edu/world-wide-web-disclaimer/">
Copyright ©
<span id="current-year"></span> </a> <a href="https://tcnj.qualtrics.com//SE/?SID=SV_bIYC9J406pClbHC">
Contact
</a> <a href="https://careers.tcnj.edu/">Careers at TCNJ</a> <a href="https://tcnj.edu/accessibility/">Accessibility</a> <a href="https://heoa.tcnj.edu/">Consumer Info</a> <a href="https://privacy.tcnj.edu/">Privacy</a> <a id="unit">2000 Pennington Road Ewing, NJ 08628-0718</a> </p> </div> <div class="alignright"> <p class="socialicons"> <a href="http://www.facebook.com/tcnjlions"> <img width="24" height="24" alt="facebook icon" src="https://programs.tcnj.edu/facebook-4-32.png"> </a> <a href="http://twitter.com/tcnj"> <img width="24" height="24" alt="twitter icon" src="https://programs.tcnj.edu/twitter-4-32.png"> </a> <a href="https://www.linkedin.com/school/the-college-of-new-jersey/"> <img width="24" height="24" alt="linkedin icon" src="https://programs.tcnj.edu/linkedin-4-32.png"> </a> <a href="http://instagram.com/tcnj_official"> <img width="24" height="24" alt="instagram icon" src="https://programs.tcnj.edu/instagram-4-32.png"> </a> <a href="http://www.youtube.com/tcnjvideo"> <img width="24" height="24" alt="youtube icon" src="https://programs.tcnj.edu/youtube-32-rev.png"> </a> </p> </div> </div> </div> </div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalFooter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c, _d, _e;
const $$Astro = createAstro("https://programs.tcnj.edu");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Craft an education that's uniquely yours with flexible options across in-demand majors and minors — including accelerated and dual-degree programs.",
    image = "https://ceva6.tcnj.edu/wp-content/uploads/sites/9/2025/03/program-explorer-FACEBOOK.jpg",
    metaTitle
  } = Astro2.props;
  let isValidImage = false;
  try {
    const res = await fetch(image, { method: "HEAD" });
    isValidImage = res.ok;
  } catch (err) {
    isValidImage = false;
  }
  const isRootPage = Astro2.url.pathname === "/";
  const siteUrl = "https://programs.tcnj.edu";
  const path = Astro2.url.pathname;
  const canonicalUrl = `${siteUrl}${path}`;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="author" content="The College of New Jersey"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><meta http-equiv="Cache-Control" content="max-age=3600, must-revalidate"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta property="og:title"${addAttribute(title, "content")}><!-- <meta property="og:description" content={description} />
    {image && (<meta name="twitter:image" content={image} /> -->${isValidImage && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, { "data-astro-cid-sckkx6r4": true }, { "default": async ($$result2) => renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}><meta property="og:image"${addAttribute(image, "content")}>` })}`}<link rel="canonical"${addAttribute(canonicalUrl, "href")}><link rel="preload" href="/fonts/alfa-slab-one-v19-latin-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="/fonts/open-sans-v40-latin-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="/fonts/domine-v23-latin-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.ico" /> --><!-- SVG favicon --><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><!-- ICO favicon (fallback for browsers that don't support SVG favicons) --><link rel="icon" type="image/x-icon" href="/favicon.ico"><!-- <meta property="og:image" content={image} /> --><!-- <meta name="generator" content={Astro.generator} /> --><title>${title}</title><!-- <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bitter:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
      rel="stylesheet"
    /> --><!-- Google Tag Manager -->${renderTemplate(_a || (_a = __template([`<script type="text/javascript"> window.dataLayer = window.dataLayer || [{'gtm.start': new Date().getTime(),event:'gtm.js'}] </script>`])))}${renderTemplate(_b || (_b = __template(['<script type="text/javascript">\n    if (window.location.protocol !== "https:") {\n      window.location.replace(\n        "https://" +\n          window.location.host +\n          window.location.pathname +\n          window.location.search\n      );\n    }\n  </script>'])))}${renderTemplate(_c || (_c = __template(['<script>\n    if (\n      window.location.pathname.length > 1 &&\n      window.location.pathname.endsWith("/")\n    ) {\n      const newPath =\n        window.location.pathname.slice(0, -1) +\n        window.location.search +\n        window.location.hash;\n      window.location.replace(newPath);\n    }\n  </script>'])))}<!-- End Google Tag Manager --><!-- Ping Script --><!-- End Ping Script -->${renderHead()}</head> <body data-astro-cid-sckkx6r4> <!-- {isRootPage ? <h1>Welcome to the Homepage</h1> : <h1>Not the Homepage</h1>} --> ${renderComponent($$result, "GlobalHeader", GlobalHeader, { "client:load": true, "indexCheck": isRootPage, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalHeader", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "GlobalFooter", $$GlobalFooter, { "data-astro-cid-sckkx6r4": true })} ${renderTemplate(_d || (_d = __template(['<script async>!function(e,t,a,n){e[n]=e[n]||[],e[n].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});e=t.getElementsByTagName(a)[0],n=t.createElement(a);n.async=!0,n.src="https://www.googletagmanager.com/gtm.js?id=GTM-M9FHLJS",e.parentNode.insertBefore(n,e)}(window,document,"script","dataLayer")</script>'])))} ${renderTemplate(_e || (_e = __template(['<script async src="https://connect.tcnj.edu/ping"></script>'])))} <!-- Google Tag Manager (noscript) --> ${renderTemplate`<noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9FHLJS" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-sckkx6r4></iframe> </noscript>`} <!-- End Google Tag Manager (noscript) --> </body></html>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
