import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as renderHead, b as renderComponent, e as renderSlot, d as createAstro } from './astro/server_Byni5WEU.mjs';
import 'kleur/colors';
/* empty css                          */
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import 'clsx';

function GlobalHeader() {
  const [open, setOpen] = useState(false);
  const openSideNav = () => {
    setOpen(!open);
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
    /* @__PURE__ */ jsxs("div", { className: "global-nav", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          id: "slider-container",
          onClick: openSideNav,
          className: open ? "open" : "",
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                id: "close-button",
                src: "https://brand.tcnj.edu/wp-content/uploads/sites/11/2023/07/close-button.svg",
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
                    src: "https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/facebook-4-32.png"
                  }
                ) }),
                /* @__PURE__ */ jsx("a", { href: "http://twitter.com/tcnj", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    width: "24",
                    height: "24",
                    alt: "twitter icon",
                    src: "https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/twitter-4-32.png"
                  }
                ) }),
                /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/school/the-college-of-new-jersey/", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    width: "24",
                    height: "24",
                    alt: "linkedin icon",
                    src: "https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/linkedin-4-32.png"
                  }
                ) }),
                /* @__PURE__ */ jsx("a", { href: "http://instagram.com/tcnj_official", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    width: "24",
                    height: "24",
                    alt: "instagram icon",
                    src: "https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/instagram-4-32.png"
                  }
                ) }),
                /* @__PURE__ */ jsx("a", { href: "http://www.youtube.com/tcnjvideo", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    width: "24",
                    height: "24",
                    alt: "youtube icon",
                    src: "https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/youtube-32-rev.png"
                  }
                ) })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "inner", children: [
        /* @__PURE__ */ jsx("a", { style: { display: "flex" }, href: "https://tcnj.edu/", children: /* @__PURE__ */ jsx(
          "img",
          {
            id: "tcnj-logo",
            src: "https://graduate.tcnj.edu/explore-programs/_nuxt/img/tcnj-logo.3f4bf41.svg",
            alt: "TCNJ"
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
              src: "https://brand.tcnj.edu/wp-content/uploads/sites/11/2023/07/menu-icon.svg",
              alt: "Global Nav Menu",
              onClick: openSideNav
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
  return renderTemplate`${maybeRenderHead()}<div class="global-footer-2022"> <div class="inner-width"> <div class="grid-wrapper"> <a id="logo-container" href="https://tcnj.edu/"> <img src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2021/09/tcnj-compact-logo-site-footer-FINAL-092221-min.png" alt="logo" class="no-tablet footer-logo"> <img class="tablet-only footer-logo" src="https://graduate.tcnj.edu/explore-programs/_nuxt/img/tcnj-logo-tablet.d20ebff.svg" alt="TCNJ"> </a> <div class="one-third"> <h2>Campus</h2> <ul> <li><a href="https://tcnj.bncollege.com/">Bookstore</a></li> <li><a href="https://tcnj.edu/events/">Calendars</a></li> <li> <a href="https://tcnj.edu/about/campus-info/campus-map/">
Campus Map
</a> </li> <li> <a href="https://eawebprod.tcnj.edu/directory/">Directory</a> </li> <li> <a href="https://tcnj.edu/campus-life/">Housing &amp; Dining</a> </li> <li><a href="https://library.tcnj.edu/">Library</a></li> <li> <a href="https://campuslife.tcnj.edu/health-safety/">
Safety &amp; Health
</a> </li> </ul> </div> <div class="one-third"> <h2>Programs</h2> <ul> <li> <a href="https://academics.tcnj.edu/majors/">List of Majors</a> </li> <li> <a href="https://academics.tcnj.edu/undergraduate-study/">
Undergraduate Degrees
</a> </li> <li> <a href="https://graduate.tcnj.edu/graduate-areas-of-study/">
Graduate Degrees
</a> </li> <li><a href="https://honors.tcnj.edu/">Honors</a></li> <li> <a href="https://liberallearning.tcnj.edu/">Liberal Learning</a> </li> <li><a href="https://cge.tcnj.edu/">Study Abroad</a></li> <li> <a href="https://intersession.tcnj.edu/">Summer &amp; Winter</a> </li> </ul> </div> <div class="one-third last"> <div> <h2>Schools</h2> <ul> <li> <a href="https://artscomm.tcnj.edu/"> Arts &amp; Communication</a> </li> <li><a href="https://business.tcnj.edu/">Business</a></li> <li><a href="https://education.tcnj.edu/">Education</a></li> <li><a href="https://engineering.tcnj.edu/">Engineering</a></li> <li> <a href="https://hss.tcnj.edu/">
Humanities &amp; Social Sciences
</a> </li> <li> <a href="https://nhs.tcnj.edu/"> Nursing &amp; Health Sciences</a> </li> <li><a href="https://science.tcnj.edu/">Science</a></li> </ul> </div> </div> </div> <hr id="footer-hr"> <div class="bottom-container"> <div class="alignleft"> <p class="copyright"> <a href="https://news.tcnj.edu/world-wide-web-disclaimer/">
Copyright ©
<span id="current-year"></span> </a> <a href="https://tcnj.qualtrics.com//SE/?SID=SV_bIYC9J406pClbHC">
Contact
</a> <a href="https://careers.tcnj.edu/">Careers at TCNJ</a> <a href="https://tcnj.edu/accessibility/">Accessibility</a> <a href="https://heoa.tcnj.edu/">Consumer Info</a> <a href="https://privacy.tcnj.edu/">Privacy</a> <a id="unit">2000 Pennington Road Ewing, NJ 08628-0718</a> </p> </div> <div class="alignright"> <p class="socialicons"> <a href="http://www.facebook.com/tcnjlions"> <img width="24" height="24" alt="facebook icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/facebook-4-32.png"> </a> <a href="http://twitter.com/tcnj"> <img width="24" height="24" alt="twitter icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/twitter-4-32.png"> </a> <a href="https://www.linkedin.com/school/the-college-of-new-jersey/"> <img width="24" height="24" alt="linkedin icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/linkedin-4-32.png"> </a> <a href="http://instagram.com/tcnj_official"> <img width="24" height="24" alt="instagram icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/instagram-4-32.png"> </a> <a href="http://www.youtube.com/tcnjvideo"> <img width="24" height="24" alt="youtube icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/youtube-32-rev.png"> </a> </p> </div> </div> </div> </div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalFooter.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "The College of New Jersey has the opportunity to build a new indoor/outdoor structure \u2013 the TCNJ Community Hub \u2013 that will serve as a setting for community engagement, music and drama rehearsals, visiting and faculty lecturers, competition presentations, and performances.",
    image = "https://brand.tcnj.edu/wp-content/uploads/sites/11/2016/03/site-brand-downloads-logo-horizontal-FINAL-546-160.png",
    metaTitle
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="author" content="The College of New Jersey"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta property="og:title"${addAttribute(metaTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(image, "content")}><meta property="og:image"${addAttribute(image, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.ico"><!-- <meta property="og:image" content={image} /> --><!-- <meta name="generator" content={Astro.generator} /> --><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bitter:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"><!-- <link rel="stylesheet" href="https://use.typekit.net/czt7cge.css"> -->${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "GlobalHeader", GlobalHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalHeader", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "GlobalFooter", $$GlobalFooter, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/layouts/Layout.astro", undefined);

async function wpquery({ query, variables = {} }) {
  try {
    const res = await fetch("https://ceva6.tcnj.edu/graphql", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        variables
      })
    });
    if (!res.ok) {
      throw new Error(
        `Request failed with status ${res.status}: ${res.statusText}`
      );
    }
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

function NextStepFooter() {
  return /* @__PURE__ */ jsxs("div", { id: "next-step-footer", children: [
    /* @__PURE__ */ jsx("h2", { children: "Take the next step" }),
    /* @__PURE__ */ jsxs("div", { className: "link-wrapper", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "program-next-step-button-gtm",
          href: "https://admissions.tcnj.edu/apply/",
          children: "Apply"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "program-next-step-button-gtm",
          href: "https://admissions.tcnj.edu/visit/",
          children: "Visit"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          className: "program-next-step-button-gtm",
          href: "https://connect.tcnj.edu/register/prospect",
          children: "Request Info"
        }
      )
    ] })
  ] });
}

function NavigationBar() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "bg-[#F1F1F1] pt-[23px] pb-[23px] pl-[35px] pr-[35px]",
      id: "menu",
      children: /* @__PURE__ */ jsx("p", { className: "max-w-[1128px] mx-auto font-opensans text-[14px] leading-[34px] text-left uppercase", children: "Menu" })
    }
  );
}

export { $$Layout as $, NavigationBar as N, NextStepFooter as a, wpquery as w };
