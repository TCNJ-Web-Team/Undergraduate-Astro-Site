/* empty css                                  */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_CQh-u2xo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Be99Bnas.mjs';
import { w as wpquery, N as NextStepFooter } from '../chunks/NextStepFooter_C6vBo-hP.mjs';
import { P as ProgramList } from '../chunks/ProgramList_C-zXB2Tj.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function IntroSection() {
  const [accellOpen, setAccellOpen] = useState(false);
  const [dualOpen, setDualOpen] = useState(false);
  const accellText = useRef(null);
  const dualText = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const openAccellPop = (ref) => {
    if (ref === accellText) {
      setAccellOpen(!accellOpen);
      setDualOpen(false);
    } else if (ref === dualText) {
      setDualOpen(!dualOpen);
      setAccellOpen(false);
    }
  };
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.type === "click" && (accellText.current && !accellText.current.contains(event.target) && event.target.className !== "info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer" || dualText.current && !dualText.current.contains(event.target) && event.target.className !== "info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer") || event.type === "keydown" && event.key === "Escape") {
        setAccellOpen(false);
        setDualOpen(false);
      }
    };
    document.addEventListener("click", handleKeyPress);
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("click", handleKeyPress);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [accellOpen, dualOpen]);
  const handlePopupClick = (event) => {
    event.stopPropagation();
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "intro",
      className: "w-[100%] relative \n      z-[1000]\n       border-[20px] sm:border-[35px] border-b-0 sm:border-b-0 border-tcnjyellow \n       \n        ",
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            id: "hero-text",
            className: "max-w-[1128px] mx-auto relative z-10 text-white p-[35px] pl-[30px] pr-[30px] text-center sm:pt-[77px] md:pt-[64px] md:text-left lg:px-0\n        pb-[150px] sm:pb-[230px] md:pb-[115px]\n        lg:h-[556px]\n        ",
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  id: "breadcrumbs",
                  className: "font-domine text-[17px] leading-[20px] sm:text-[18px] sm:leading-[26px] sm:text-left",
                  children: [
                    /* @__PURE__ */ jsx("a", { href: "https://tcnj.edu", children: "TCNJ Home" }),
                    " /",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-[600]", children: "Explore Programs" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.h1,
                {
                  className: "pt-[100px] font-alfaslab text-tcnjyellow text-[32px] leading-[37px] pb-[18px] sm:pb-[18px] sm:pt-[150px] sm:text-[40px] sm:leading-[45px] md:text-[60px] md:leading-[65px] md:pt-[93px] font-[400]",
                  initial: { opacity: 0, y: -5 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  transition: { delay: 0.15, ease: "easeOut", duration: 0.35 },
                  children: "160+ Undergraduate Programs"
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "font-domine text-[20px] leading-[26px] sm:text-[20px] sm:leading-[35px] md:leading-[35px] md:text-[23px] font-normal\n          max-w-[1095px]",
                  initial: { opacity: 0, y: -5 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0 },
                  transition: { delay: 0.65, ease: "easeOut", duration: 0.35 },
                  children: [
                    "TCNJ allows you to craft an education that's uniquely yours, with flexible options across majors, minors, concentration areas, and certificates — including accelerated",
                    /* @__PURE__ */ jsxs("span", { className: "inline-block mr-[5px] ml-[-1px]", children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `popup-container fixed top-0 left-0
              bg-slate-600 w-[100%] h-[100%] ${accellOpen && "active"}`,
                          children: /* @__PURE__ */ jsxs(
                            "div",
                            {
                              ref: accellText,
                              className: "top-arrow-popup relative z-[1000] left-0 bg-white w-[100%]\n                max-w-[900px] mx-[15px] sm:mx-[30px] lg:mx-auto text-white  pl-[30px] pr-[30px] text-center  md:text-left lg:px-0 cursor-default",
                              onClick: handlePopupClick,
                              children: [
                                /* @__PURE__ */ jsxs("p", { className: "accell-text-block py-[45px] sm:py-[60px] px-[0px] sm:px-[45px] font-domine text-[16px] leading-[25px] sm:text-[19px] sm:leading-[30px] text-black text-left", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Accelerated programs" }),
                                  " are designed to condense the completion timeline."
                                ] }),
                                /* @__PURE__ */ jsx(
                                  "img",
                                  {
                                    className: "close-button",
                                    alt: "close",
                                    src: "/close-item.svg",
                                    onClick: () => setAccellOpen(false)
                                  }
                                )
                              ]
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          className: "info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer",
                          alt: "More Info",
                          src: "/info-icon.svg",
                          style: { marginLeft: "2px" },
                          onClick: () => openAccellPop(accellText)
                        }
                      )
                    ] }),
                    "and dual-degree",
                    /* @__PURE__ */ jsxs("span", { className: "inline-block mr-[5px] ml-[2px] relative", children: [
                      /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: `popup-container-two fixed top-0 left-0
              bg-slate-600 w-[100%] h-[100%] ${dualOpen && "active"}`,
                          children: /* @__PURE__ */ jsxs(
                            "div",
                            {
                              ref: dualText,
                              className: "top-arrow-popup relative z-[1000] left-0 bg-white w-[100%]\n                max-w-[900px] mx-[15px] sm:mx-[30px] lg:mx-auto text-white  pl-[30px] pr-[30px] text-center  md:text-left lg:px-0 cursor-default",
                              onClick: handlePopupClick,
                              children: [
                                /* @__PURE__ */ jsxs("p", { className: " py-[45px] sm:py-[60px] px-[0px] sm:px-[45px] font-domine text-[16px] leading-[25px] sm:text-[19px] sm:leading-[30px] text-black text-left", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Dual-degree" }),
                                  " programs are designed to provide a streamlined pathway to a master’s or professional degree."
                                ] }),
                                /* @__PURE__ */ jsx(
                                  "img",
                                  {
                                    className: "close-button",
                                    alt: "close",
                                    src: "/close-item.svg",
                                    onClick: () => setDualOpen(false)
                                  }
                                )
                              ]
                            }
                          )
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          className: "info-button one w-[12px] h-[12px] mt-[-22px] cursor-pointer",
                          alt: "More Info",
                          src: "/info-icon.svg",
                          onClick: () => openAccellPop(dualText)
                        }
                      )
                    ] }),
                    "programs that can put you on the fast track to career success. A full list of",
                    " ",
                    /* @__PURE__ */ jsx("a", { href: "/graduate", className: "underline", children: "graduate and certificate programs" }),
                    " ",
                    "is also available. Search by keyword or browse programs by selecting a school, program type, and/or other options."
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "picture",
          {
            id: "hero-image",
            className: "absolute top-0 left-0 z-0 w-[100%] h-[100%]",
            children: [
              /* @__PURE__ */ jsx(
                "source",
                {
                  srcSet: "/homepage-hero/hero.webp",
                  type: "image/webp",
                  media: "(min-width: 901px)"
                }
              ),
              /* @__PURE__ */ jsx(
                "source",
                {
                  srcSet: "/homepage-hero/hero.jpg",
                  type: "image/jpeg",
                  media: "(min-width: 901px)"
                }
              ),
              /* @__PURE__ */ jsx(
                "source",
                {
                  srcSet: "/homepage-hero/hero-tablet.webp",
                  type: "image/webp",
                  media: "(min-width: 551px)"
                }
              ),
              /* @__PURE__ */ jsx(
                "source",
                {
                  srcSet: "/homepage-hero/hero-tablet.jpg",
                  type: "image/jpeg",
                  media: "(min-width: 551px)"
                }
              ),
              /* @__PURE__ */ jsx("source", { srcSet: "/homepage-hero/hero-mobile.webp", type: "image/webp" }),
              /* @__PURE__ */ jsx("source", { srcSet: "/homepage-hero/hero-mobile.jpg", type: "image/jpeg" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/homepage-hero/hero-mobile.jpg",
                  alt: "TCNJ scenery",
                  className: "w-[100%] object-cover h-[100%]"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            id: "bg-overlay",
            className: "bg-black absolute w-[100%] h-[100%] top-0 left-0 z-[5] opacity-[.5] sm:opacity-[.25]"
          }
        )
      ]
    }
  );
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = await wpquery({
    query: ` query ProgramsListing {
              programs(first:220) {
                nodes {
                  program {
                    degreeType
                    slug
                    school
                    programOptions
                    additionalOptions
                    keywords
                  }
                  title
                }
              }
            }`
  });
  const redirectData = await wpquery({
    query: `query RedirectList {
            programRedirects(first:220) {
              nodes {
                  redirectProgram {
                    degreeType
                    redirecturl
                    slug
                    school
                    programOptions
                    additionalOptions
                    keywords
                  }
                  title
                }
            }
          }`
  });
  const programOptions = await wpquery({
    query: ` query FullOptionsListing {
  page(id: "249", idType: DATABASE_ID) {
    program {
      additionalOptions
      programOptions
      school
    }
  }
}`
  });
  const areaOfStudy = programOptions.page.program.school.sort();
  const areaOfStudyNoGrad = areaOfStudy.filter(
    (item) => item !== "Graduate, Global, and Online Education"
  );
  const programOptionsClean = programOptions.page.program.programOptions;
  const additionalOptions = programOptions.page.program.additionalOptions;
  const combinedData = data.programs.nodes.concat(
    redirectData.programRedirects.nodes.map(
      (item) => ({
        program: item.redirectProgram,
        title: item.title
      })
    )
  );
  const getProductionUrl = (url) => {
    if (url && typeof url === "string") {
      return url.replace(
        "https://undergraduate-astro-site-t6y1l.kinsta.page/",
        "https://programs.tcnj.edu/"
      );
    }
    return null;
  };
  const programListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: combinedData.map(
      (program, index) => {
        let programUrl = null;
        if (program.program.redirecturl) {
          programUrl = getProductionUrl(program.program.redirecturl);
        }
        if (!programUrl && program.program.slug) {
          programUrl = `https://programs.tcnj.edu/${program.program.slug}`;
        }
        return {
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "EducationalOccupationalProgram",
            name: program.title,
            description: program.program.description || "",
            provider: {
              "@type": "CollegeOrUniversity",
              name: "The College of New Jersey",
              department: Array.isArray(program.program.school) ? program.program.school.join(", ") : program.program.school
            },
            url: programUrl || "https://programs.tcnj.edu/"
          }
        };
      }
    )
  };
  const schemaString = JSON.stringify(programListSchema);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "160+ Undergraduate Programs | TCNJ" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> ", "<header> <!-- <TitleAndNav /> --> ", ' <!-- <Intro /> --> </header> <main> <div class="border-[20px] sm:border-[35px] border-t-0 sm:border-t-0 border-tcnjyellow"> ', " </div> ", " </main> "])), unescapeHTML(schemaString), maybeRenderHead(), renderComponent($$result2, "IntroSection", IntroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/IntroSection", "client:component-export": "default" }), renderComponent($$result2, "ProgramList", ProgramList, { "gradCheck": false, "data": data, "redirectData": redirectData, "areaOfStudy": areaOfStudyNoGrad, "programOptionsClean": programOptionsClean, "additionalOptions": additionalOptions, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/ProgramList", "client:component-export": "default" }), renderComponent($$result2, "NextStepFooter", NextStepFooter, { "customCtaButtons": null })) })}`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/index.astro", void 0);

const $$file = "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
