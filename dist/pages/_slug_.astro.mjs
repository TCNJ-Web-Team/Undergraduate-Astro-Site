/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, u as unescapeHTML, d as createAstro, e as renderSlot, F as Fragment } from '../chunks/astro/server_Byni5WEU.mjs';
import 'kleur/colors';
import { w as wpquery, N as NavigationBar, a as NextStepFooter, $ as $$Layout } from '../chunks/NavigationBar_oXEjyUPv.mjs';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
/* empty css                                  */
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useInView } from 'react-intersection-observer';
export { renderers } from '../renderers.mjs';

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

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: -5
  },
  animate: (delayNumber) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delayNumber * 0.5,
      ease: "easeOut",
      duration: 0.35
    }
  })
};

function ProgramGlanceCopy({ copy, id }) {
  return /* @__PURE__ */ jsx(
    motion.div,
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
      dangerouslySetInnerHTML: { __html: copy },
      variants: fadeInAnimationVariant,
      custom: 2
    }
  );
}

const $$Astro$3 = createAstro();
const $$BodyCopy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$BodyCopy;
  const { left, right, body, heading } = Astro2.props;
  const headingLower = heading.replace(/\s+/g, "-").toLowerCase();
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(headingLower, "id")}${addAttribute(`relative ${heading === "Careers" ? "sm:pl-[47px] sm:pr-[47px] md:pl-[20px] md:pr-[20px]  lg:pl-[0px] lg:pr-[0px]" : ""}`, "class")}> ${heading != `Careers` ? renderTemplate`<h2 class="
      text-[23px] 
      leading-[33px] 
      pb-[20px]
      sm:pb-[25px] 
      sm:text-[30px] 
      sm:leading-[60px] 
      md:pb-[35px] 
      md:leading-[40px]
      font-chunkfive 
      text-tcnjblue"> ${heading} </h2>` : renderTemplate`${renderComponent($$result, "ProgramCareersHeading", ProgramCareersHeading, { "heading": "Careers" })}`} ${body && heading == `Careers` && renderTemplate`${renderComponent($$result, "ProgramGlanceCopy", ProgramGlanceCopy, { "id": `${headingLower}-body`, "copy": body })}`} <div class="flex
  gap-[60px]
  sm:gap-[75px]
  md:gap-[100px]
  text-[1.438rem]
  inner-body-copy-white
  flex-col"> <div${addAttribute(heading === "Careers" ? "flex flex-col sm:flex-row pb-[100px] sm:pb-[125px] md:pb-[200px] gap-[50px] sm:gap-[40px]" : "", "class")}> ${left && renderTemplate`<div${addAttribute(`${headingLower}-left`, "id")} class="md:max-w-[45%] lg:max-w-[40%]">${unescapeHTML(left)}</div>`} ${heading == `Careers` && renderTemplate`<div${addAttribute(`${headingLower}-right`, "id")}>${unescapeHTML(right)}</div>`} </div> ${body && heading != `Careers` && renderTemplate`<div class=""${addAttribute(`${headingLower}-body`, "id")}>${unescapeHTML(body)}</div>`} </div> </div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/BodyCopy.astro", undefined);

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

function QuoteContent({ content }) {
  const h2Pattern = /<h2>(.*?)<\/h2>/;
  const pPattern = /<p>(.*?)<\/p>/;
  const h2Match = content.match(h2Pattern);
  const pMatch = content.match(pPattern);
  const h2Content = h2Match ? h2Match[1] : "";
  const pContent = pMatch ? pMatch[1] : "";
  const headingLengthCheck = h2Content.length > 100 ? "text-[18px] leading-[30px] md:text-[26px] md:leading-[45px]" : "text-[26px] leading-[40px] md:text-[45px] md:leading-[65px]";
  return /* @__PURE__ */ jsxs("div", { className: "large-quote flex flex-col items-end mb-[100px]", children: [
    /* @__PURE__ */ jsx(
      "h2",
      {
        className: `font-alfaslab ${headingLengthCheck} text-left sm:text-left text-tcnjblue mb-[11px]`,
        children: h2Content
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "font-domine text-[20px] leading-[35px]", children: pContent })
  ] });
}

const $$Astro$2 = createAstro();
const $$LowerContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LowerContent;
  const { lowerContent, quote } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="lower-content" class="pl-[35px]
  pr-[35px]
  pt-[75px] pb-[75px]
  sm:pl-[47px]
      sm:pr-[47px]
sm:pt-[75px]
sm:pb-[125px]
md:pl-[20px]
md:pr-[20px]
md:pt-[150px]
md:pb-[150px]
lg:pl-[0px]
lg:pr-[0px]"> ${quote && renderTemplate`${renderComponent($$result, "QuoteContent", QuoteContent, { "content": quote })}`} <hr class="bg-[#BFBFBF] h-[1px] w-auto border-0"> ${lowerContent.map((content) => {
    return renderTemplate`<div class="border-b border-[#BFBFBF]"${addAttribute(content.title.replace(/\s+/g, "-").toLowerCase(), "id")}> ${renderComponent($$result, "Accordion", Accodion, { "startOpen": false, "header": content.title, "idName": content.title, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/Accordion", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div>${unescapeHTML(content.body)}</div> ` })} </div>`;
  })} </div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/LowerContent.astro", undefined);

function RelatedProgSlider({ learnMoreList }) {
  const learnMoreListRender = learnMoreList;
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "learn-more-list",
      className: "\n \n  sm:pl-[47px]\nsm:pr-[47px] md:pl-[20px] md:pr-[20px] lg:pl-0 lg:pr-0",
      children: /* @__PURE__ */ jsxs(
        Swiper,
        {
          breakpoints: {
            // when window width is >= 320px
            250: {
              // slidesPerView: "auto",
              slidesPerView: 1.5,
              spaceBetween: 20,
              slidesOffsetAfter: 70
              // freeMode: true,
              // width: 350,
              // setWrapperSize: true,
            },
            // when window width is >= 480px
            550: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesOffsetAfter: 0
              // setWrapperSize: false,
              // width: "auto",
            },
            // when window width is >= 640px
            900: {
              slidesPerView: 3,
              spaceBetween: 20
            }
          },
          modules: [Navigation],
          spaceBetween: 20,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          },
          children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "\n        pl-[35px]\n  pr-[35px]\n  sm:pl-[0px]\n  sm:pr-[0px]\n        absolute top-0 left-0 font-alfaslab font-normal text-[30px] leading-[40px] text-tcnjblue",
                children: "Related programs"
              }
            ),
            learnMoreListRender.map((content) => {
              return /* @__PURE__ */ jsx(
                SwiperSlide,
                {
                  className: " border border-[#BFBFBF]\n          w-auto",
                  id: content.title.replace(/\s+/g, "-").toLowerCase(),
                  children: /* @__PURE__ */ jsxs("a", { className: "p-[35px] min-h-[237px] block", href: content.slug, children: [
                    /* @__PURE__ */ jsx("p", { className: "font-bitter font-semibold text-[18px] leading-[28px] ", children: content.title }),
                    /* @__PURE__ */ jsx("hr", { className: "m-[25px] mr-0 ml-0" }),
                    content.schoolOrAdditionalLabel && /* @__PURE__ */ jsx("p", { className: "font-opensans", children: content.schoolOrAdditionalLabel })
                  ] })
                },
                content.title.replace(/\s+/g, "-").toLowerCase()
              );
            }),
            /* @__PURE__ */ jsxs("div", { id: "swiper-navigation", children: [
              /* @__PURE__ */ jsx("div", { className: "swiper-button-next" }),
              /* @__PURE__ */ jsx("div", { className: "swiper-button-prev" })
            ] })
          ]
        }
      )
    }
  );
}

const $$Astro$1 = createAstro();
const $$TopOption = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TopOption;
  let schoolLink;
  let secondSchoolLink;
  const { heading, imgSrc, school } = Astro2.props;
  if (Array.isArray(school) && school.length > 0) {
    switch (school[0]) {
      case "Arts and Communication":
        schoolLink = "https://artscomm.tcnj.edu/";
        break;
      case "Business":
        schoolLink = "https://business.tcnj.edu/";
        break;
      case "Education":
        schoolLink = "https://education.tcnj.edu/";
        break;
      case "Engineering":
        schoolLink = "https://engineering.tcnj.edu/";
        break;
      case "Humanities and Social Sciences":
        schoolLink = "https://hss.tcnj.edu/";
        break;
      case "Nursing and Health Sciences":
        schoolLink = "https://nhs.tcnj.edu/";
        break;
      case "Science":
        schoolLink = "https://science.tcnj.edu/";
        break;
      default:
        schoolLink = "https://tcnj.edu";
    }
  } else {
    schoolLink = "https://tcnj.edu";
  }
  if (Array.isArray(school) && school.length === 2) {
    switch (school[1]) {
      case "Arts and Communication":
        secondSchoolLink = "https://artscomm.tcnj.edu/";
        break;
      case "Business":
        secondSchoolLink = "https://business.tcnj.edu/";
        break;
      case "Education":
        secondSchoolLink = "https://education.tcnj.edu/";
        break;
      case "Engineering":
        secondSchoolLink = "https://engineering.tcnj.edu/";
        break;
      case "Humanities and Social Sciences":
        secondSchoolLink = "https://hss.tcnj.edu/";
        break;
      case "Nursing and Health Sciences":
        secondSchoolLink = "https://nhs.tcnj.edu/";
        break;
      case "Science":
        secondSchoolLink = "https://science.tcnj.edu/";
        break;
      default:
        secondSchoolLink = "https://tcnj.edu";
    }
  } else {
    secondSchoolLink = "https://tcnj.edu";
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex-row flex items-start gap-[18px] md:gap-[15px] sm:max-w-[33%]"> <!-- <svg width={32} height={32} fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <use
      xlink:href={\`https://tcnj.edu/custom/icon-library/micro/\${imgSrc}.svg#\${imgSrc}\`}
      href={\`https://tcnj.edu/custom/icon-library/micro/\${imgSrc}.svg#\${imgSrc}\`}
    ></use>
  </svg> --> <img class="w-[26px] h-auto mt-[3px]"${addAttribute(`https://tcnj.edu/custom/icon-library/micro/` + imgSrc + `.svg`, "src")}${addAttribute(`${heading} icon`, "alt")}> <div class="flex-col flex md:gap-[5px]"> <h3 class="text-[17px] leading-[23px] md:text-[20px] md:leading-[30px]
      font-interstate not-italic uppercase font-extrabold"> ${heading} </h3> <p class="text-[17px] leading-[23px] md:text-[19px] md:leading-[30px]"> ${heading == "School" && school?.length == 1 ? renderTemplate`<a class="text-[#33739F] underline"${addAttribute(schoolLink, "href")}> ${renderSlot($$result, $$slots["default"])} </a>` : heading == "School" && school?.length == 2 ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <a class="text-[#33739F] underline"${addAttribute(schoolLink, "href")}> ${school[0]} </a> <br> ` })} <a class="text-[#33739F] underline"${addAttribute(secondSchoolLink, "href")}> ${school[1]} </a> ` })}` : renderTemplate`${renderSlot($$result, $$slots["default"])}`} <!-- <slot /> --> </p> </div> </div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/TopOption.astro", undefined);

function AnimatedTitle({ title }) {
  return /* @__PURE__ */ jsx(
    "h1",
    {
      className: "font-chunkfive\n          text-tcnjblue\n          text-[45px]\n          leading-[50px]\n          sm:text-[60px]\n          sm:leading-[60px]\n         \n          md:text-custom-16.25\n          md:leading-[4.688rem]",
      children: title
    }
  );
}

function AnimatedHero({
  heroImgMobile,
  heroImgTablet,
  sourceUrl,
  horizontalPositionDesktopHero,
  title
}) {
  return /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-hidden", children: /* @__PURE__ */ jsxs("picture", { children: [
    heroImgMobile && /* @__PURE__ */ jsx("source", { media: "(max-width: 550px)", srcSet: heroImgMobile.sourceUrl }),
    heroImgTablet && /* @__PURE__ */ jsx("source", { media: "(max-width: 900px)", srcSet: heroImgTablet.sourceUrl }),
    /* @__PURE__ */ jsx(
      motion.img,
      {
        src: sourceUrl,
        style: {
          objectPosition: `${horizontalPositionDesktopHero}%`
        },
        className: "relative z-30\n                w-[100%]\n          h-[450px]\n          sm:h-[600px]\n          object-cover\n          pl-[35px]\n          \n          lg:pl-[100px]\n          lg:w-[100%]\n          xl:pl-[200px]",
        id: "hero-img",
        alt: title
      }
    )
  ] }) });
}

const AnimatedBodyCopy = ({ left, right, body, heading }) => {
  const headingLower = heading.replace(/\s+/g, "-").toLowerCase();
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      id: headingLower,
      className: `relative ${heading === "Careers" ? "sm:pl-[47px] sm:pr-[47px] md:pl-[20px] md:pr-[20px]  lg:pl-[0px] lg:pr-[0px]" : ""}`,
      variants: fadeInAnimationVariant,
      initial: "initial",
      whileInView: "animate",
      viewport: { once: true },
      children: [
        heading !== "Careers" ? /* @__PURE__ */ jsx(
          motion.h2,
          {
            className: "\n          text-[23px] \n          leading-[33px] \n          pb-[20px]\n          sm:pb-[25px] \n          sm:text-[30px] \n          sm:leading-[60px] \n          md:pb-[35px] \n          md:leading-[40px]\n          font-chunkfive \n          text-tcnjblue",
            variants: fadeInAnimationVariant,
            custom: 1,
            children: heading
          }
        ) : /* @__PURE__ */ jsx(
          motion.h2,
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
            variants: fadeInAnimationVariant,
            custom: 1,
            children: "Careers"
          }
        ),
        body && heading === "Careers" && /* @__PURE__ */ jsx(ProgramGlanceCopy, { id: `${headingLower}-body`, copy: body }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex\n      gap-[60px]\n      sm:gap-[75px]\n      md:gap-[100px]\n      text-[1.438rem]\n      inner-body-copy-white\n      flex-col",
            children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: heading === "Careers" ? "flex flex-col sm:flex-row pb-[100px] sm:pb-[125px] md:pb-[200px] gap-[50px] sm:gap-[40px]" : "",
                  children: [
                    left && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        id: `${headingLower}-left`,
                        className: "md:max-w-[45%] lg:max-w-[40%]",
                        dangerouslySetInnerHTML: { __html: left },
                        variants: fadeInAnimationVariant,
                        custom: 3
                      }
                    ),
                    heading === "Careers" && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        id: `${headingLower}-right`,
                        dangerouslySetInnerHTML: { __html: right || "" },
                        variants: fadeInAnimationVariant,
                        custom: 4
                      }
                    )
                  ]
                }
              ),
              body && heading !== "Careers" && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "",
                  id: `${headingLower}-body`,
                  dangerouslySetInnerHTML: { __html: body }
                }
              )
            ]
          }
        )
      ]
    }
  );
};

const AnimatedProgramAtAGlance = ({
  programAtAGlance
}) => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "spacer",
        className: "pt-[100px]\nmd:pt-[200px]"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        id: "program-at-a-glance",
        className: "text-left pb-[150px]  sm:pb-[200px] md:pb-[200px] ",
        variants: fadeInAnimationVariant,
        initial: "initial",
        whileInView: "animate",
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              className: `text-center font-chunkfive text-tcnjblue text-[45px] leading-[50px] pb-[50px] sm:pb-[20px] sm:text-[60px] sm:leading-[70px] sm:text-left md:text-[65px] md:leading-[75px] md:pb-[50px]
        
        `,
              variants: fadeInAnimationVariant,
              custom: 1,
              children: "Program at a Glance"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              id: "program-glance",
              className: `text-[20px] leading-[35px] text-center sm:text-[23px] sm:leading-[45px] sm:text-left md:text-[23px] md:leading-[45px]`,
              dangerouslySetInnerHTML: { __html: programAtAGlance },
              variants: fadeInAnimationVariant,
              custom: 2
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex flex-col gap-[20px] sm:flex-row sm:mt-[75px] sm:gap-[28px] md:gap-5 md:flex-row mt-[50px]",
              variants: fadeInAnimationVariant,
              custom: 3,
              children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "",
                    className: "border-2 border-tcnjblue p-4 pt-[40px] pb-[40px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]\n                hover:bg-tcnjblue hover:text-white transition-all\n                ",
                    children: "Apply"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "",
                    className: "border-2 border-tcnjblue p-4 pt-[40px] pb-[40px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]\n                hover:bg-tcnjblue hover:text-white\n                transition-all\n                ",
                    children: "Request Info"
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
};

const AnimatedRightImage = ({
  programOfStudyRight,
  rightImageHorizontalPosition,
  rightImageVerticalPosition
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // Change this to false if you want the animation to trigger again whenever it comes in view
    threshold: 0.35
    // 35% of the element is in view
  });
  return /* @__PURE__ */ jsx("div", { className: "relative overflow-y-visible", children: programOfStudyRight && /* @__PURE__ */ jsx(
    "img",
    {
      ref,
      src: programOfStudyRight,
      alt: "",
      style: {
        objectPosition: `${rightImageHorizontalPosition}% ${rightImageVerticalPosition}%`
      },
      id: "prog-study-img",
      className: "relative z-30 \n     top-[-50px]\n          object-cover\n          object-left\n          w-[100%]\n          h-[400px]\n          max-w-none\n          sm:h-[550px]\n          sm:top-[-50px]\n          \n      \n          md:right-[-82px]\n          md:h-[650px]\n          md:absolute"
    }
  ) });
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const data = await wpquery({
    query: `query ProgramsListing {
  programs(first:120) {
    nodes {
      program {
        fullProgramTitle
        degreeType
        slug
        school
        programAtAGlance
        heroImgDesktop {
          sourceUrl
        }
        horizontalPositionDesktopHero
        heroImgTablet{
          sourceUrl
        }
        heroImgMobile{
          sourceUrl
        }
        departmentRepeater {
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
          rightImageHorizontalPosition
          rightImageVerticalPosition
          body
        }
        lowerContent {
          title
          body
        }
        quoteContentArea
        learnMoreList {
          title
          slug
          schoolOrAdditionalLabel
        }
        metaTitle
        metaDescription
        socialImage{
          sourceUrl
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
        horizontalPositionDesktopHero: program.program.horizontalPositionDesktopHero,
        degreeType: program.program.degreeType,
        school: program.program.school,
        department: program.program.departmentRepeater,
        heroImgDesktop: program.program.heroImgDesktop,
        heroImgTablet: program.program.heroImgTablet,
        heroImgMobile: program.program.heroImgMobile,
        careers: program.program.careers,
        programOfStudy: program.program.programOfStudy,
        lowerContent: program.program.lowerContent,
        quoteContentArea: program.program.quoteContentArea,
        learnMoreList: program.program.learnMoreList,
        metaTitle: program.program.metaTitle,
        metaDescription: program.program.metaDescription,
        socialImage: program.program.socialImage
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
    department,
    heroImgDesktop,
    horizontalPositionDesktopHero,
    heroImgTablet,
    heroImgMobile,
    content,
    careers: { left: careersLeft, right: careersRight, body: careersBody },
    programOfStudy: {
      left: programOfStudyLeft,
      rightImage: { sourceUrl: programOfStudyRight } = {
        sourceUrl: "https://ceva6.tcnj.edu/wp-content/uploads/sites/9/2024/02/anthro-body-image.jpg"
      },
      rightImageHorizontalPosition,
      rightImageVerticalPosition,
      body: programOfStudyBody
    },
    lowerContent,
    quoteContentArea,
    learnMoreList,
    metaTitle,
    metaDescription,
    socialImage
  } = Astro2.props;
  const socialSourceUrl = socialImage ? socialImage.sourceUrl : "https://ceva6.tcnj.edu/wp-content/uploads/sites/9/2024/02/anthro-body-image.jpg";
  const { sourceUrl } = heroImgDesktop ?? {
    sourceUrl: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": metaDescription, "image": socialSourceUrl, "metaTitle": metaTitle }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "NavigationBar", NavigationBar, {})} ${maybeRenderHead()}<main class="font-bitter text-darkgrey overflow-hidden"> <div class="bg-tcnjyellow w-auto"> <div class="pl-[35px]
      pr-[35px]
      max-w-[70.5rem]
      pt-[35px]
      sm:pt-[50px]
      md:pt-[58px]
      m-auto
      lg:pl-0
      lg:pr-0"> <p class="text-[17px] leading-[26px] pb-[20px] font-bitter
        sm:text-[18px]"> <a href="/">Academics Home</a> / <a href="/">Explore Programs</a> / <span class="font-bold"> ${title} </span> </p> <!-- <h1
          class="font-chunkfive
          text-tcnjblue
          text-[45px]
          leading-[50px]
          sm:text-[60px]
          sm:leading-[60px]
         
          md:text-custom-16.25
          md:leading-[4.688rem]"
        >
          {title}
        </h1> --> ${renderComponent($$result2, "AnimatedTitle", AnimatedTitle, { "title": title, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedTitle", "client:component-export": "default" })} </div> <div class="w-auto bg-yellowWhiteGradient
      mt-[35px]
      md:mt-[50px]"> ${sourceUrl && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`  ${renderComponent($$result3, "AnimatedHero", AnimatedHero, { "heroImgMobile": heroImgMobile, "heroImgTablet": heroImgTablet, "sourceUrl": sourceUrl, "horizontalPositionDesktopHero": horizontalPositionDesktopHero, "title": title, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedHero", "client:component-export": "default" })} ` })}`} </div> </div> <div class="bg-white
    w-auto
    pt-[45px]
    pb-[45px]
    sm:pt-[35px]
    sm:pb-[35px]
    pl-[35px]
    pr-[35px]
    md:pt-[50px]
    md:pb-[50px]"> <div class="max-w-[70.5rem] bg-white m-auto"> <div id="degree-school-department" class="flex
          text-lg
          items-start
          flex-col
          gap-[35px]
          sm:max-w-[655px]
          sm:m-auto
          sm:flex-row
          sm:flex-nowrap
        
          sm:justify-between
          md:max-w-none"> ${renderComponent($$result2, "TopOption", $$TopOption, { "heading": degreeType && degreeType.length > 1 ? "Degrees" : "Degree", "imgSrc": "ribbon" }, { "default": ($$result3) => renderTemplate`${Array.isArray(degreeType) ? degreeType.map((degree) => renderTemplate`<span class="block">${degree}</span>`) : { degreeType }}` })} ${renderComponent($$result2, "TopOption", $$TopOption, { "school": school, "heading": "School", "imgSrc": "building" }, { "default": ($$result3) => renderTemplate`${school}` })} ${renderComponent($$result2, "TopOption", $$TopOption, { "heading": department && department.length > 1 ? "Departments" : "Department", "imgSrc": "departments" }, { "default": ($$result3) => renderTemplate`  ${Array.isArray(department) ? department.map((degree) => renderTemplate`<a class="text-[#33739F] underline"${addAttribute(degree.deptUrl, "href")}> <span class="block">${degree.deptTitle}</span> </a>`) : department}` })} </div> </div> </div> <div class="bg-tcnjyellow w-auto
    pl-[35px]
    pr-[35px]
    sm:pl-[82px]
    sm:pr-[82px]
    md:pl-[35px]
    md:pr-[35px]"> <div class="max-w-[70.5rem] m-auto"> ${renderComponent($$result2, "AnimatedProgramAtAGlance", AnimatedProgramAtAGlance, { "programAtAGlance": programAtAGlance, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedProgramAtAGlance", "client:component-export": "default" })}</div> </div> <div id="programs-of-study-container" class="px-[35px] w-auto sm:bg-tcnjyellow  
     "> <div class="m-auto
      bg-white
      relative
      pb-[75px]
      sm:pl-[47px]
      sm:pr-[47px]
      "> ${programOfStudyRight && renderTemplate`${renderComponent($$result2, "AnimatedRightImage", AnimatedRightImage, { "programOfStudyRight": programOfStudyRight, "rightImageHorizontalPosition": rightImageHorizontalPosition, "rightImageVerticalPosition": rightImageVerticalPosition, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedRightImage", "client:component-export": "default" })}`} <div class="max-w-[70.5rem]
        m-auto
        bg-white
        pt-[0px]
        sm:pt-[0]
        sm:pb-[15px]
        md:pt-[150px]
        md:pb-[75px]"> ${renderComponent($$result2, "BodyCopy", $$BodyCopy, { "heading": "Programs of Study", "left": programOfStudyLeft, "body": programOfStudyBody })} </div> </div> </div> <div class="px-[35px] m-auto bg-tcnjyellow"> <div class="max-w-[70.5rem] m-auto
      pt-[100px]
      sm:pt-[100px]
      md:pt-[200px]"> <!-- <BodyCopy
          heading="Careers"
          left={careersLeft}
          right={careersRight}
          body={careersBody}
        /> --> ${renderComponent($$result2, "AnimatedBodyCopy", AnimatedBodyCopy, { "heading": "Careers", "left": careersLeft, "right": careersRight, "body": careersBody, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedBodyCopy", "client:component-export": "default" })} </div> </div> <div class=" px-[0] sm:px-[35px] w-auto sm:bg-tcnjyellow" id="lower-content-and-related-progras"> <div class="m-auto bg-white pb-[75px] sm:pb-[100px] md:pb-[150px]"> <div class="max-w-[70.5rem] m-auto"> ${lowerContent && renderTemplate`${renderComponent($$result2, "LowerContent", $$LowerContent, { "lowerContent": lowerContent, "quote": quoteContentArea })}`} <!-- {learnMoreList && <LearnMoreList learnMoreList={learnMoreList} />} --> ${learnMoreList && renderTemplate`${renderComponent($$result2, "RelatedProgSlider", RelatedProgSlider, { "learnMoreList": learnMoreList, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/RelatedProgSlider", "client:component-export": "default" })}`} </div> </div> </div> ${renderComponent($$result2, "NextStepFooter", NextStepFooter, {})} </main> ` })}`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/[slug].astro", undefined);

const $$file = "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/[slug].astro";
const $$url = "/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
