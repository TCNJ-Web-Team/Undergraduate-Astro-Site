/* empty css                                  */
import { c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CQh-u2xo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Be99Bnas.mjs';
import { w as wpquery, N as NextStepFooter } from '../chunks/NextStepFooter_C6vBo-hP.mjs';
import { P as ProgramList } from '../chunks/ProgramList_C-zXB2Tj.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function IntroSectionUpdated() {
  const [accellOpen, setAccellOpen] = useState(false);
  const [dualOpen, setDualOpen] = useState(false);
  const accellText = useRef(null);
  const dualText = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
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
            className: "max-w-[1128px] mx-auto relative z-10 text-white p-[35px] pl-[30px] pr-[30px] text-center sm:pt-[77px] md:pt-[64px] md:text-left lg:px-0\n        pb-[150px] sm:pb-[230px] md:pb-[115px]\n        ",
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  id: "breadcrumbs",
                  className: "font-domine text-[17px] leading-[20px] sm:text-[18px] sm:leading-[26px] sm:text-left",
                  children: [
                    /* @__PURE__ */ jsx("a", { href: "https://graduate.tcnj.edu", children: "Graduate Home" }),
                    " /",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-[600]", children: "Explore Graduate Programs" })
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
                  children: "Explore Graduate Programs"
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
                    "Search by keyword or browse programs by selecting an area of study, degree type, and/or format. A full list of",
                    " ",
                    /* @__PURE__ */ jsx("a", { href: "/", className: "underline", children: "undergraduate accelerated/dual degree programs" }),
                    " ",
                    "is also available."
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
                  srcSet: "/homepage-hero/graduate/hero.jpg",
                  type: "image/jpeg",
                  media: "(min-width: 901px)"
                }
              ),
              /* @__PURE__ */ jsx(
                "source",
                {
                  srcSet: "/homepage-hero/graduate/hero-tablet.jpg",
                  type: "image/jpeg",
                  media: "(min-width: 551px)"
                }
              ),
              /* @__PURE__ */ jsx(
                "source",
                {
                  srcSet: "/homepage-hero/graduate/hero-mobile.jpg",
                  type: "image/jpeg"
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: "/homepage-hero/graduate/hero-mobile.jpg",
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

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = await wpquery({
    query: ` query GraduateProgramsListing {
  graduatePrograms(first:220) {
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
  const programOptions = await wpquery({
    query: ` query GradProgramOptions {
  page(idType: DATABASE_ID, id: "4015") {
    graduateProgram {
      additionalOptions
      programOptions
      school
    }
  }
}`
  });
  const gradRedirectList = await wpquery({
    query: `query GradRedirectList {
  gradProgramsRedirects(first: 220) {
    nodes {
      graduateProgramRedirect {
        redirectUrl
        programOptions
        degreeType
        additionalOptions
        school
        keywords
      }
      title
    }
  }
}`
  });
  const areaOfStudy = programOptions.page.graduateProgram.school.sort();
  const programOptionsClean = programOptions.page.graduateProgram.programOptions;
  const additionalOptions = programOptions.page.graduateProgram.additionalOptions;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Explore Programs - TCNJ Graduate Studies" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<header> <!-- <TitleAndNav /> --> ${renderComponent($$result2, "IntroSectionUpdated", IntroSectionUpdated, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/IntroSectionUpdated", "client:component-export": "default" })} <!-- <Intro /> --> </header> <main> <div class="border-[20px] sm:border-[35px] border-t-0 sm:border-t-0 border-tcnjyellow"> ${renderComponent($$result2, "ProgramList", ProgramList, { "gradCheck": true, "data": data, "redirectData": gradRedirectList, "areaOfStudy": areaOfStudy, "programOptionsClean": programOptionsClean, "additionalOptions": additionalOptions, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/ProgramList", "client:component-export": "default" })} </div> ${renderComponent($$result2, "NextStepFooter", NextStepFooter, { "customCtaButtons": null })} </main> ` })}`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/graduate/index.astro", void 0);

const $$file = "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/graduate/index.astro";
const $$url = "/graduate";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
