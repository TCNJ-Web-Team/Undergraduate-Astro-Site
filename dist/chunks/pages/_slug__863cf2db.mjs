/* empty css                            */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, u as unescapeHTML, f as renderComponent } from '../astro_b86acb7d.mjs';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef } from 'react';
/* empty css                            */
const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "The College of New Jersey has the opportunity to build a new indoor/outdoor structure \u2013 the TCNJ Community Hub \u2013 that will serve as a setting for community engagement, music and drama rehearsals, visiting and faculty lecturers, competition presentations, and performances.",
    image = "https://brand.tcnj.edu/wp-content/uploads/sites/11/2016/03/site-brand-downloads-logo-horizontal-FINAL-546-160.png"
  } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="UTF-8"><meta name="author" content="The College of New Jersey"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><!-- <link rel="icon" type="image/svg+xml" href="/astro/favicon.svg" /> --><!-- <meta property="og:image" content={image} /> --><!-- <meta name="generator" content={Astro.generator} /> --><title>${title}</title>${renderHead()}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro-Site/src/layouts/Layout.astro", void 0);

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

const $$Astro$4 = createAstro();
const $$BodyCopy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BodyCopy;
  const { left, right, body, heading } = Astro2.props;
  const headingLower = heading.replace(/\s+/g, "-").toLowerCase();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(headingLower, "id")}>${heading != `Careers` ? renderTemplate`<h2 class="text-[30px] leading-[40px] pb-[2.188rem] font-chunkfive text-tcnjblue">${heading}</h2>` : renderTemplate`<h2 class="text-[4.063rem] leading-[4.688rem] pb-[50px] font-chunkfive text-tcnjblue">${heading}</h2>`}${body && heading == `Careers` && renderTemplate`<div class=""${addAttribute(`${headingLower}-body`, "id")}>${unescapeHTML(body)}</div>`}<div class="flex gap-[50px] text-[1.438rem] inner-body-copy-white flex-col"><div${addAttribute(heading === "Careers" ? "flex pb-[200px] gap-[40px]" : "", "class")}>${left && renderTemplate`<div${addAttribute(`${headingLower}-left`, "id")}>${unescapeHTML(left)}</div>`}<div${addAttribute(`${headingLower}-right`, "id")}>${unescapeHTML(right)}</div></div>${body && heading != `Careers` && renderTemplate`<div class=""${addAttribute(`${headingLower}-body`, "id")}>${unescapeHTML(body)}</div>`}</div></div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro-Site/src/components/BodyCopy.astro", void 0);

function Accodion({ children, header, idName, startOpen }) {
  const [open, setOpen] = useState(startOpen);
  const headerRef = useRef(null);
  const onAccordionClick = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs("div", { className: "accordion", id: idName, children: [
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
              alt: "close",
              style: { marginBottom: "5px" }
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

const $$Astro$3 = createAstro();
const $$LowerContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LowerContent;
  const { lowerContent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="lower-content">${lowerContent.map((content) => {
    return renderTemplate`<div class="border-b border-black mb-[25px] "${addAttribute(content.title.replace(/\s+/g, "-").toLowerCase(), "id")}>${renderComponent($$result, "Accordion", Accodion, { "startOpen": false, "header": content.title, "idName": content.title, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro-Site/src/components/Accordion", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`<div class="pb-[25px]">${unescapeHTML(content.body)}</div>` })}</div>`;
  })}</div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro-Site/src/components/LowerContent.astro", void 0);

const $$Astro$2 = createAstro();
const $$LearnMoreList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LearnMoreList;
  const { learnMoreList } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="learn-more-list" class="grid grid-cols-4 gap-5 mt-[100px]">${learnMoreList.map((content) => {
    return renderTemplate`<div${addAttribute(content.title.replace(/\s+/g, "-").toLowerCase(), "id")}><a${addAttribute(content.slug, "href")}><p>${content.title}</p></a></div>`;
  })}</div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro-Site/src/components/LearnMoreList.astro", void 0);

const $$Astro$1 = createAstro();
const $$TopOption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TopOption;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div><h3 class="font-opensans not-italic uppercase font-bold">${heading}</h3>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro-Site/src/components/TopOption.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await wpquery({
    query: ` query ProgramsListing {
              programs {
                nodes {
                  program {
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
                    careers{
                        left
                        right
                        body
                    }
                    programOfStudy{
                      left
                      right
                      body
                    }
                    lowerContent{
                      title
                      body
                    }
                    learnMoreList {
                      title
                      slug
                    }
                  }
                  title
                }
              }
            }`
  });
  console.log(data.programs.nodes[0].program.heroImgDesktop.sourceUrl);
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
    heroImgDesktop: { sourceUrl },
    content,
    careers: { left: careersLeft, right: careersRight, body: careersBody },
    programOfStudy: {
      left: programOfStudyLeft,
      right: programOfStudyRight,
      body: programOfStudyBody
    },
    lowerContent,
    learnMoreList
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="font-bitter text-darkgrey"><div class="bg-tcnjyellow w-auto"><div class="max-w-[70.5rem] pt-[60px] m-auto"><a href="/">Breadcrumbs Go Here</a><h1 class="font-chunkfive text-tcnjblue text-custom-16.25 leading-[4.688rem]">${title}</h1></div><div class="w-auto bg-yellowWhiteGradient mt-[50px]">${sourceUrl && renderTemplate`<img${addAttribute(sourceUrl, "src")} class="pl-[200px]"${addAttribute(title, "alt")}>`}</div></div><div class="bg-white w-auto pt-[50px] pb-[50px]"><div class="max-w-[70.5rem] bg-white m-auto"><div id="degree-school-department" class="flex text-lg flex-row flex-nowrap items-center justify-between">${renderComponent($$result2, "TopOption", $$TopOption, { "heading": "Degree" }, { "default": ($$result3) => renderTemplate`<p>${degreeType} in ${title}</p>` })}${renderComponent($$result2, "TopOption", $$TopOption, { "heading": "School" }, { "default": ($$result3) => renderTemplate`<p>${unescapeHTML(school)}</p>` })}${renderComponent($$result2, "TopOption", $$TopOption, { "heading": "Department" }, { "default": ($$result3) => renderTemplate`${deptTitle}` })}</div></div></div><div class="bg-tcnjyellow w-auto"><div class="max-w-[70.5rem] m-auto"><div id="program-at-a-glance" class="text-left pb-[200px] pt-[200px]"><h2 class="text-[4.375rem] font-chunkfive pb-[50px] leading-[5rem] text-tcnjblue">
Program at a Glance
</h2><div class="text-[1.75rem]">${unescapeHTML(programAtAGlance)}</div><div class="flex mt-[75px] gap-5"><a href="" class="border-2 border-tcnjblue p-4 pt-[40px] pb-[40px] min-w-[300px] text-center font-opensans uppercase text-tcnjblue font-semibold text-base">Apply</a><a href="" class="border-2 border-tcnjblue p-4 pt-[40px] pb-[40px] min-w-[300px] text-center font-opensans uppercase text-tcnjblue font-semibold text-base">Request Info</a></div></div></div></div><div class="px-[25px] w-auto bg-tcnjyellow"><div class="m-auto bg-white"><div class="max-w-[70.5rem] m-auto bg-white pt-[150px] pb-[150px]">${renderComponent($$result2, "BodyCopy", $$BodyCopy, { "heading": "Programs of Study", "left": programOfStudyLeft, "right": programOfStudyRight, "body": programOfStudyBody })}</div></div><div class="m-auto bg-tcnjyellow"><div class="max-w-[70.5rem] m-auto pt-[150px]">${renderComponent($$result2, "BodyCopy", $$BodyCopy, { "heading": "Careers", "left": careersLeft, "right": careersRight, "body": careersBody })}</div></div><div class="m-auto bg-white"><div class="max-w-[70.5rem] m-auto">${lowerContent && renderTemplate`${renderComponent($$result2, "LowerContent", $$LowerContent, { "lowerContent": lowerContent })}`}${learnMoreList && renderTemplate`${renderComponent($$result2, "LearnMoreList", $$LearnMoreList, { "learnMoreList": learnMoreList })}`}</div></div></div></main>` })}`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro-Site/src/pages/[slug].astro", void 0);

const $$file = "/Users/holstena/Documents/GitHub/Undergraduate-Astro-Site/src/pages/[slug].astro";
const $$url = "/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _slug_ as _, wpquery as w };
