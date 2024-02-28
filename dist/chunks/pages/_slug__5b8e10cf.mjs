/* empty css                            */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot, u as unescapeHTML } from '../astro_4a106505.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import 'clsx';
/* empty css                            */import Carousel from 'react-multi-carousel';

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

const $$Astro$5 = createAstro();
const $$GlobalFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$GlobalFooter;
  return renderTemplate`${maybeRenderHead()}<div class="global-footer-2022"><div class="inner-width"><div class="grid-wrapper"><a id="logo-container" href="https://tcnj.edu/"><img src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2021/09/tcnj-compact-logo-site-footer-FINAL-092221-min.png" alt="logo" class="no-tablet footer-logo"><img class="tablet-only footer-logo" src="https://graduate.tcnj.edu/explore-programs/_nuxt/img/tcnj-logo-tablet.d20ebff.svg" alt="TCNJ"></a><div class="one-third"><h2>Campus</h2><ul><li><a href="https://tcnj.bncollege.com/">Bookstore</a></li><li><a href="https://tcnj.edu/events/">Calendars</a></li><li><a href="https://tcnj.edu/about/campus-info/campus-map/">
Campus Map
</a></li><li><a href="https://eawebprod.tcnj.edu/directory/">Directory</a></li><li><a href="https://tcnj.edu/campus-life/">Housing &amp; Dining</a></li><li><a href="https://library.tcnj.edu/">Library</a></li><li><a href="https://campuslife.tcnj.edu/health-safety/">
Safety &amp; Health
</a></li></ul></div><div class="one-third"><h2>Programs</h2><ul><li><a href="https://academics.tcnj.edu/majors/">List of Majors</a></li><li><a href="https://academics.tcnj.edu/undergraduate-study/">
Undergraduate Degrees
</a></li><li><a href="https://graduate.tcnj.edu/graduate-areas-of-study/">
Graduate Degrees
</a></li><li><a href="https://honors.tcnj.edu/">Honors</a></li><li><a href="https://liberallearning.tcnj.edu/">Liberal Learning</a></li><li><a href="https://cge.tcnj.edu/">Study Abroad</a></li><li><a href="https://intersession.tcnj.edu/">Summer &amp; Winter</a></li></ul></div><div class="one-third last"><div><h2>Schools</h2><ul><li><a href="https://artscomm.tcnj.edu/"> Arts &amp; Communication</a></li><li><a href="https://business.tcnj.edu/">Business</a></li><li><a href="https://education.tcnj.edu/">Education</a></li><li><a href="https://engineering.tcnj.edu/">Engineering</a></li><li><a href="https://hss.tcnj.edu/">
Humanities &amp; Social Sciences
</a></li><li><a href="https://nhs.tcnj.edu/"> Nursing &amp; Health Sciences</a></li><li><a href="https://science.tcnj.edu/">Science</a></li></ul></div></div></div><hr style="
        background-color: #7684a3;
        border: 0;
        height: 1px;
        margin: 10px 0px;
        clear: both;
      "><div class="bottom-container"><div class="alignleft"><p class="copyright"><a href="https://news.tcnj.edu/world-wide-web-disclaimer/">
Copyright ©
<span id="current-year"></span></a><a href="https://tcnj.qualtrics.com//SE/?SID=SV_bIYC9J406pClbHC">
Contact
</a><a href="https://careers.tcnj.edu/">Careers at TCNJ</a><a href="https://tcnj.edu/accessibility/">Accessibility</a><a href="https://heoa.tcnj.edu/">Consumer Info</a><a href="https://privacy.tcnj.edu/">Privacy</a><a id="unit">2000 Pennington Road Ewing, NJ 08628-0718</a></p></div><div class="alignright"><p class="socialicons"><a href="http://www.facebook.com/tcnjlions"><img width="24" height="24" alt="facebook icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/facebook-4-32.png"></a><a href="http://twitter.com/tcnj"><img width="24" height="24" alt="twitter icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/twitter-4-32.png"></a><a href="https://www.linkedin.com/school/the-college-of-new-jersey/"><img width="24" height="24" alt="linkedin icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/linkedin-4-32.png"></a><a href="http://instagram.com/tcnj_official"><img width="24" height="24" alt="instagram icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/instagram-4-32.png"></a><a href="http://www.youtube.com/tcnjvideo"><img width="24" height="24" alt="youtube icon" src="https://brand.tcnj.edu/wp-content/uploads/sites/11/2018/10/youtube-32-rev.png"></a></p></div></div></div></div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalFooter.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "The College of New Jersey has the opportunity to build a new indoor/outdoor structure \u2013 the TCNJ Community Hub \u2013 that will serve as a setting for community engagement, music and drama rehearsals, visiting and faculty lecturers, competition presentations, and performances.",
    image = "https://brand.tcnj.edu/wp-content/uploads/sites/11/2016/03/site-brand-downloads-logo-horizontal-FINAL-546-160.png"
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4><head><meta charset="UTF-8"><meta name="author" content="The College of New Jersey"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><!-- <link rel="icon" type="image/svg+xml" href="/astro/favicon.svg" /> --><!-- <meta property="og:image" content={image} /> --><!-- <meta name="generator" content={Astro.generator} /> --><title>${title}</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bitter:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"><!-- <link rel="stylesheet" href="https://use.typekit.net/czt7cge.css"> -->${renderHead()}</head><body data-astro-cid-sckkx6r4>${renderComponent($$result, "GlobalHeader", GlobalHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/GlobalHeader", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })}${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "GlobalFooter", $$GlobalFooter, { "data-astro-cid-sckkx6r4": true })}</body></html>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/layouts/Layout.astro", void 0);

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

function ProgramCareersHeading({ heading }) {
  return /* @__PURE__ */ jsx(
    "h2",
    {
      className: `text-center
      font-chunkfive 
      text-tcnjblue
      text-[45px]
      leading-[50px]
      pb-[50px]
      sm:pb-[20px]
      sm:text-[60px]
      sm:leading-[70px]
      sm:text-left
      md:text-[65px]
      md:leading-[75px]

      md:pb-[50px]
            `,
      children: heading
    }
  );
}

function ProgramGlanceCopy({ copy, id }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      id,
      className: `
      text-[20px]
          leading-[35px]
          text-center
          sm:text-[23px]
          sm:leading-[45px]
          sm:text-left
          md:text-[23px]
          md:leading-[45px]
          
          ${id === "careers-body" ? "pb-[50px] sm:pb-[75px]" : ""}  

          `,
      dangerouslySetInnerHTML: { __html: copy }
    }
  );
}

const $$Astro$3 = createAstro();
const $$BodyCopy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BodyCopy;
  const { left, right, body, heading } = Astro2.props;
  const headingLower = heading.replace(/\s+/g, "-").toLowerCase();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(headingLower, "id")}${addAttribute(`relative ${heading === "Careers" ? "sm:pl-[47px] sm:pr-[47px] md:pl-[20px] md:pr-[20px]  lg:pl-[0px] lg:pr-[0px]" : ""}`, "class")}>${heading != `Careers` ? renderTemplate`<h2 class="
      text-[23px] 
      leading-[33px] 
      pb-[20px]
      sm:pb-[25px] 
      sm:text-[30px] 
      sm:leading-[60px] 
      md:pb-[35px] 
      md:leading-[40px]
      font-chunkfive 
      text-tcnjblue">${heading}</h2>` : renderTemplate`${renderComponent($$result, "ProgramCareersHeading", ProgramCareersHeading, { "heading": "Careers" })}`}${body && heading == `Careers` && renderTemplate`${renderComponent($$result, "ProgramGlanceCopy", ProgramGlanceCopy, { "id": `${headingLower}-body`, "copy": body })}`}<div class="flex
  gap-[60px]
  sm:gap-[75px]
  md:gap-[100px]
  text-[1.438rem]
  inner-body-copy-white
  flex-col"><div${addAttribute(heading === "Careers" ? "flex flex-col sm:flex-row pb-[100px] sm:pb-[125px] md:pb-[200px] gap-[50px] sm:gap-[40px]" : "", "class")}>${left && renderTemplate`<div${addAttribute(`${headingLower}-left`, "id")}>${unescapeHTML(left)}</div>`}${heading == `Careers` && renderTemplate`<div${addAttribute(`${headingLower}-right`, "id")}>${unescapeHTML(right)}</div>`}</div>${body && heading != `Careers` && renderTemplate`<div class=""${addAttribute(`${headingLower}-body`, "id")}>${unescapeHTML(body)}</div>`}</div></div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/BodyCopy.astro", void 0);

function Accodion({ children, header, idName, startOpen }) {
  const [open, setOpen] = useState(startOpen);
  const headerRef = useRef(null);
  const onAccordionClick = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs("div", { className: open ? "accordion top-open" : "accordion", id: idName, children: [
    /* @__PURE__ */ jsxs(
      "h2",
      {
        className: `${open ? "accordion-header start-open active" : "accordion-header"} font-bold text-[1.438rem]`,
        onClick: onAccordionClick,
        children: [
          /* @__PURE__ */ jsx("span", { ref: headerRef, children: header }),
          /* @__PURE__ */ jsx("span", { className: "arrow", children: open ? /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://tcnj.edu/custom/icon-library/minus-dark.svg",
              alt: "close"
            }
          ) : /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://tcnj.edu/custom/icon-library/plus-dark.svg",
              alt: "open"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: `${open ? "accordion-content start-open active" : "accordion-content"}`,
        children
      }
    )
  ] });
}

const $$Astro$2 = createAstro();
const $$LowerContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LowerContent;
  const { lowerContent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="lower-content" class="pt-[75px] pb-[75px]
  sm:pl-[47px]
      sm:pr-[47px]
sm:pt-[75px]
sm:pb-[125px]
md:pl-[20px]
md:pr-[20px]
md:pt-[150px]
md:pb-[200px]
lg:pl-[0px]
lg:pr-[0px]"><hr class="bg-[#BFBFBF] h-[1px] w-auto border-0">${lowerContent.map((content) => {
    return renderTemplate`<div class="border-b border-[#BFBFBF]"${addAttribute(content.title.replace(/\s+/g, "-").toLowerCase(), "id")}>${renderComponent($$result, "Accordion", Accodion, { "startOpen": false, "header": content.title, "idName": content.title, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/Accordion", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`<div>${unescapeHTML(content.body)}</div>` })}</div>`;
  })}</div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/LowerContent.astro", void 0);

function RelatedProgSlider() {
  return /* @__PURE__ */ jsxs(Carousel, { children: [
    /* @__PURE__ */ jsx("div", { children: "Item 1" }),
    /* @__PURE__ */ jsx("div", { children: "Item 2" }),
    /* @__PURE__ */ jsx("div", { children: "Item 3" }),
    /* @__PURE__ */ jsx("div", { children: "Item 4" })
  ] });
}

const $$Astro$1 = createAstro();
const $$TopOption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TopOption;
  const { heading, imgSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-row flex items-start gap-[18px] md:gap-[15px] sm:max-w-[33%] md:max-w-none"><!-- <svg width={32} height={32} fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <use
      xlink:href={\`https://tcnj.edu/custom/icon-library/micro/\${imgSrc}.svg#\${imgSrc}\`}
      href={\`https://tcnj.edu/custom/icon-library/micro/\${imgSrc}.svg#\${imgSrc}\`}
    ></use>
  </svg> --><img class="w-[26px] h-auto mt-[3px]"${addAttribute(`https://tcnj.edu/custom/icon-library/micro/` + imgSrc + `.svg`, "src")}${addAttribute(`${heading} icon`, "alt")}><div class="flex-col flex md:gap-[5px]"><h3 class="text-[17px] leading-[23px] md:text-[20px] md:leading-[30px]
      font-interstate not-italic uppercase font-extrabold">${heading}</h3><p class="text-[17px] leading-[23px] md:text-[19px] md:leading-[30px]">${renderSlot($$result, $$slots["default"])}</p></div></div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/TopOption.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await wpquery({
    query: `query ProgramsListing {
  programs {
    nodes {
      program {
        fullProgramTitle
        degreeType
        slug
        school
        programOptions
        additionalOptions
        programAtAGlance
        heroImgDesktop {
          sourceUrl
        }
        department {
          deptTitle
          deptUrl
        }
        careers {
          left
          right
          body
        }
        programOfStudy {
          left
          rightImage {
            sourceUrl
          }
          body
        }
        lowerContent {
          title
          body
        }
        learnMoreList {
          title
          slug
          schoolOrAdditionalLabel
        }
      }
      title
    }
  }
}`
  });
  const paths = data.programs.nodes.map(
    (program) => ({
      params: { slug: program.program.slug },
      props: {
        slug: program.program.slug,
        title: program.title,
        programAtAGlance: program.program.programAtAGlance,
        degreeType: program.program.degreeType,
        school: program.program.school,
        department: program.program.department,
        heroImgDesktop: program.program.heroImgDesktop,
        careers: program.program.careers,
        programOfStudy: program.program.programOfStudy,
        lowerContent: program.program.lowerContent,
        learnMoreList: program.program.learnMoreList
      }
    })
  );
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const {
    title,
    body,
    slug,
    programAtAGlance,
    degreeType,
    school,
    department: { deptUrl, deptTitle },
    // heroImgDesktop: { sourceUrl },
    // heroImgDesktop: { sourceUrl } = {
    //   sourceUrl:
    //     "https://ceva6.tcnj.edu/wp-content/uploads/sites/9/2024/02/anthro-hero-scaled.jpg",
    // },
    heroImgDesktop,
    content,
    careers: { left: careersLeft, right: careersRight, body: careersBody },
    programOfStudy: {
      left: programOfStudyLeft,
      // rightImage: { sourceUrl: programOfStudyRight },
      rightImage: { sourceUrl: programOfStudyRight } = {
        sourceUrl: "https://ceva6.tcnj.edu/wp-content/uploads/sites/9/2024/02/anthro-body-image.jpg"
      },
      body: programOfStudyBody
    },
    lowerContent,
    learnMoreList
  } = Astro2.props;
  const { sourceUrl } = heroImgDesktop ?? {
    sourceUrl: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="font-bitter text-darkgrey"><div class="bg-tcnjyellow w-auto"><div class="pl-[35px]
      pr-[35px]
      max-w-[70.5rem]
      pt-[35px]
      sm:pt-[50px]
      md:pt-[58px]
      m-auto
      lg:pl-0
      lg:pr-0"><p class="text-[17px] leading-[26px] pb-[20px] font-bitter
        sm:text-[18px]"><a href="/">Academics Home</a> / <a href="/">Explore Programs</a> / <span class="font-bold">${title}</span></p><h1 class="font-chunkfive
          text-tcnjblue
          text-[45px]
          leading-[50px]
          sm:text-[60px]
          sm:leading-[60px]
         
          md:text-custom-16.25
          md:leading-[4.688rem]">${title}</h1></div><div class="w-auto bg-yellowWhiteGradient
      mt-[35px]
      md:mt-[50px]">${sourceUrl && renderTemplate`<img${addAttribute(sourceUrl, "src")} class="
              h-[450px]
              sm:h-[600px]
              object-cover
              pl-[35px]

              lg:pl-[100px]
              lg:w-[100%]
              xl:pl-[200px]
        
              " id="hero-img"${addAttribute(title, "alt")}>`}</div></div><div class="bg-white
    w-auto
    pt-[45px]
    pb-[45px]
    sm:pt-[35px]
    sm:pb-[35px]
    pl-[35px]
    pr-[35px]
    md:pt-[50px]
    md:pb-[50px]"><div class="max-w-[70.5rem] bg-white m-auto"><div id="degree-school-department" class="flex
          text-lg
          items-start
          flex-col
          gap-[35px]
          sm:max-w-[655px]
          sm:m-auto
          sm:flex-row
          sm:flex-nowrap
        
          sm:justify-between
          md:max-w-none">${renderComponent($$result2, "TopOption", $$TopOption, { "heading": "Degree", "imgSrc": "ribbon" }, { "default": ($$result3) => renderTemplate`${degreeType} in ${title}` })}${renderComponent($$result2, "TopOption", $$TopOption, { "heading": "School", "imgSrc": "building" }, { "default": ($$result3) => renderTemplate`${school}` })}${renderComponent($$result2, "TopOption", $$TopOption, { "heading": "Department", "imgSrc": "calendar" }, { "default": ($$result3) => renderTemplate`${deptTitle}` })}</div></div></div><div class="bg-tcnjyellow w-auto
    pl-[35px]
    pr-[35px]
    sm:pl-[82px]
    sm:pr-[82px]
    md:pl-[35px]
    md:pr-[35px]"><div class="max-w-[70.5rem] m-auto"><div id="program-at-a-glance" class="text-left
        pb-[150px]
        pt-[100px]
        sm:pb-[200px]
        md:pb-[200px]
        md:pt-[200px]">${renderComponent($$result2, "ProgramCareersHeading", ProgramCareersHeading, { "heading": "Program at a Glance" })}<!-- <h2>Program at a Glance</h2> -->${renderComponent($$result2, "ProgramGlanceCopy", ProgramGlanceCopy, { "id": "program-glance", "copy": programAtAGlance })}<!-- <div
            class="text-[20px]
          leading-[35px]
          text-center
          sm:text-left
          md:text-[1.75rem]"
            set:html={programAtAGlance}
          /> --><div class="flex
            flex-col
            gap-[20px]
          sm:flex-row
            sm:mt-[75px]
          sm:gap-[28px]
          md:gap-5
          md:flex-row
          mt-[50px]"><a href="" class="border-2
              border-tcnjblue
              p-4
              pt-[40px]
              pb-[40px]
              sm:w-[100%]
              
              text-center
              font-opensans
              uppercase text-tcnjblue
              font-semibold
              text-base
              md:max-w-[300px]">Apply</a><a href="" class="border-2
              border-tcnjblue
              p-4
              pt-[40px]
              pb-[40px]
              sm:w-[100%]
              
              text-center
              font-opensans
              uppercase text-tcnjblue
              font-semibold
              text-base
              md:max-w-[300px]">Request Info</a></div></div></div></div><div class="px-[35px] w-auto sm:bg-tcnjyellow"><div class="m-auto
      bg-white
      relative
      pb-[75px]
      sm:pl-[47px]
      sm:pr-[47px]"><img${addAttribute(programOfStudyRight, "src")} alt="" id="prog-study-img" class="relative
          top-[-50px]
          object-cover
          object-left
          w-[100%]
          h-[400px]
          max-w-none
          sm:h-[550px]
          sm:top-[-50px]
          
      
          md:right-[-35px]
          md:h-[650px]
          md:absolute"><div class="max-w-[70.5rem]
        m-auto
        bg-white
        pt-[0px]
        sm:pt-[0]
        sm:pb-[15px]
        md:pt-[150px]
        md:pb-[75px]">${renderComponent($$result2, "BodyCopy", $$BodyCopy, { "heading": "Programs of Study", "left": programOfStudyLeft, "body": programOfStudyBody })}</div></div></div><div class="px-[35px] m-auto bg-tcnjyellow"><div class="max-w-[70.5rem] m-auto
      pt-[100px]
      sm:pt-[100px]
      md:pt-[200px]">${renderComponent($$result2, "BodyCopy", $$BodyCopy, { "heading": "Careers", "left": careersLeft, "right": careersRight, "body": careersBody })}</div></div><div class="px-[35px] w-auto sm:bg-tcnjyellow"><div class="m-auto bg-white"><div class="max-w-[70.5rem] m-auto">${lowerContent && renderTemplate`${renderComponent($$result2, "LowerContent", $$LowerContent, { "lowerContent": lowerContent })}`}<!-- {learnMoreList && <LearnMoreList learnMoreList={learnMoreList} />} -->${learnMoreList && renderTemplate`${renderComponent($$result2, "RelatedProgSlider", RelatedProgSlider, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/RelatedProgSlider", "client:component-export": "default" })}`}</div></div></div></main>` })}`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/[slug].astro", void 0);

const $$file = "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _slug_ as _, wpquery as w };
