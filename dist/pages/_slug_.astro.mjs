/* empty css                                  */
import { b as createAstro, c as createComponent, r as renderTemplate, u as unescapeHTML, d as addAttribute, m as maybeRenderHead, a as renderComponent, F as Fragment$1 } from '../chunks/astro/server_CQh-u2xo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Be99Bnas.mjs';
import { w as wpquery, N as NextStepFooter } from '../chunks/NextStepFooter_C6vBo-hP.mjs';
import 'clsx';
import { f as fadeInAnimationVariant, A as AnimatedTitle, T as TopOption, a as TopOptionNew, $ as $$LowerContent } from '../chunks/fadeInVariant_TSF55Mkt.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
/* empty css                                  */
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://programs.tcnj.edu");
const $$BodyCopy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BodyCopy;
  const { left, right, body } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<!-- <script define:vars={{ right }}>\n  console.log(right);\n<\/script> -->", '<div id="programs-of-study"', '> <div class="flex\n  text-[1.438rem]\n  inner-body-copy-white\n  flex-col"> <div class=""> ', ' </div> <div class=""', ">", "</div> </div> </div>"])), maybeRenderHead(), addAttribute(`relative `, "class"), left && renderTemplate`<div${addAttribute(`programs-of-study-left`, "id")}${addAttribute(`${right ? "md:max-w-[45%] lg:max-w-[50%]" : ""}`, "class")}>${unescapeHTML(left)}</div>`, addAttribute(`programs-of-study-body`, "id"), unescapeHTML(body));
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/BodyCopy.astro", void 0);

function RelatedProgSlider({ learnMoreList }) {
  const [marginLeft, setMarginLeft] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    function updateMargin() {
      if (containerRef.current) {
        const computedStyle = window.getComputedStyle(containerRef.current);
        const ml = parseFloat(computedStyle.marginLeft);
        setMarginLeft(ml);
      }
    }
    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: containerRef,
        className: "md:max-w-[920px] mx-auto h-[1px]"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "learn-more-list",
        className: "sm:px-[45px] md:px-[20px] lgMd:px-0 lg:px-0",
        children: /* @__PURE__ */ jsxs(
          Swiper,
          {
            breakpoints: {
              250: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                slidesOffsetAfter: 70
              },
              550: { slidesPerView: 2, spaceBetween: 20, slidesOffsetAfter: 0 },
              900: {
                slidesPerView: 2.75,
                spaceBetween: 27,
                slidesOffsetBefore: marginLeft,
                slidesOffsetAfter: marginLeft
              },
              1281: { slidesPerView: 3, spaceBetween: 20 }
            },
            modules: [Navigation],
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 transform -translate-x-1/2 md:max-w-[920px] lg:max-w-[70.5rem] w-full", children: /* @__PURE__ */ jsx("h2", { className: "pl-[35px] pr-[35px] sm:pl-[0px] sm:pr-[0px]  font-alfaslab font-normal text-[23px] sm:text-[30px] leading-[28px] sm:leading-[40px] text-tcnjblue", children: "Related Programs" }) }),
              learnMoreList.map((content) => {
                const slugMapping = {
                  "Accelerated Second-Degree Bachelor of Science in Nursing": "absn",
                  "Accounting and Business Analytics": "accounting-business-analytics",
                  "Clinical Mental Health Counseling": "clinical-mental-health-accelerated",
                  "Data Science and Statistics": "mathematics",
                  "Elementary Education of the Deaf and Hard of Hearing": "elementary-education-dhh",
                  "Inclusive Education — Early Childhood Education (P–3)": "inclusive-education-p-3",
                  "Inclusive Education — Elementary Education (K–6)": "inclusive-education-k-6",
                  "Journalism and Professional Writing": "journalism-professional-writing",
                  "Kinesiology and Health Sciences": "kinesiology-health-sciences",
                  "Mathematics and Statistics": "mathematics",
                  "Photography and Video": "photography-video",
                  Robotics: "robotics-engineering-science",
                  "Spanish — World Languages and Linguistics": "spanish-wll",
                  "Spanish and ESL/Bilingual Education": "spanish-esl",
                  "Speech-Language Pathology and Audiology": "speech-pathology-audiology",
                  "Speech-Language Pathology": "slp",
                  "Teaching English as a Second Language": "tesl",
                  "Technology and Engineering Education": "technology-engineering-education",
                  "Women’s, Gender, and Sexuality Studies": "wgss",
                  "World Languages and Linguistics": "world-languages-linguistics"
                };
                content.slug = slugMapping[content.title] || (content.slug === "#" ? content.title.replace(/\s+/g, "-").toLowerCase() : content.slug);
                if (content.slug.startsWith("/")) {
                  content.slug = content.slug.slice(1);
                }
                return /* @__PURE__ */ jsx(
                  SwiperSlide,
                  {
                    className: "border border-[#BFBFBF] w-auto",
                    id: content.title.replace(/\s+/g, "-").toLowerCase(),
                    children: /* @__PURE__ */ jsxs(
                      "a",
                      {
                        className: "program-rp-link-gtm p-[35px] sm:py-[45px] sm:px-[25px] md:px-[50px] min-h-[250px] block",
                        href: content.slug.includes("http") ? content.slug : `https://programs.tcnj.edu/${content.slug}`,
                        children: [
                          /* @__PURE__ */ jsx("p", { className: "font-domine font-semibold text-[18px] leading-[28px] sm:leading-[21px] md:text-[21px] md:leading-[24px]", children: content.title }),
                          /* @__PURE__ */ jsx("hr", { className: "m-[25px] mr-0 ml-0 md:mt-[27px]" }),
                          content.schoolOrAdditionalLabel && /* @__PURE__ */ jsx("p", { className: "font-opensans text-[14px] leading-[20px]", children: content.schoolOrAdditionalLabel })
                        ]
                      }
                    )
                  },
                  content.title.replace(/\s+/g, "-").toLowerCase()
                );
              }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  id: "swiper-navigation",
                  className: "lg:!right-0",
                  style: { right: marginLeft },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "swiper-button-next" }),
                    /* @__PURE__ */ jsx("div", { className: "swiper-button-prev" })
                  ]
                }
              )
            ]
          },
          marginLeft
        )
      }
    )
  ] });
}

function AnimatedHero({
  heroImgMobileWebp,
  heroImgMobile,
  heroImgTabletWebp,
  heroImgTablet,
  sourceUrl,
  heroImgDesktopWebp,
  horizontalPositionDesktopHero,
  horizontalPositionMobile,
  horizontalPositionTablet,
  title,
  badge
}) {
  const cleanedSourceUrl = sourceUrl?.replace("-scaled.jpg", ".jpg") || sourceUrl;
  const cleanedMobileUrl = heroImgMobile?.sourceUrl?.replace("-scaled.jpg", ".jpg") || heroImgMobile?.sourceUrl;
  const cleanedTabletUrl = heroImgTablet?.sourceUrl?.replace("-scaled.jpg", ".jpg") || heroImgTablet?.sourceUrl;
  const mobilePosition = horizontalPositionMobile || 0;
  const tabletPosition = horizontalPositionTablet || 0;
  const desktopPosition = horizontalPositionDesktopHero || 0;
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden", children: [
    /* @__PURE__ */ jsxs("picture", { children: [
      heroImgMobileWebp && /* @__PURE__ */ jsx(
        "source",
        {
          media: "(max-width: 550px)",
          srcSet: heroImgMobileWebp.sourceUrl
        }
      ),
      heroImgMobile && /* @__PURE__ */ jsx("source", { media: "(max-width: 550px)", srcSet: cleanedMobileUrl }),
      heroImgTabletWebp && /* @__PURE__ */ jsx(
        "source",
        {
          media: "(max-width: 900px)",
          srcSet: heroImgTabletWebp.sourceUrl,
          type: "image/webp"
        }
      ),
      heroImgTablet && /* @__PURE__ */ jsx("source", { media: "(max-width: 900px)", srcSet: cleanedTabletUrl }),
      heroImgDesktopWebp && /* @__PURE__ */ jsx("source", { srcSet: heroImgDesktopWebp.sourceUrl, type: "image/webp" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          src: cleanedSourceUrl,
          className: `relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
    standard-object-position-${desktopPosition} 
            mobile-object-position-${mobilePosition} 
            tablet-object-position-${tabletPosition}

  `,
          id: "hero-img",
          alt: title
        }
      )
    ] }),
    badge && /* @__PURE__ */ jsx(
      "img",
      {
        src: badge.sourceUrl,
        className: "absolute right-[10px] bottom-[12px] z-40 h-auto w-[208px]\n                    sm:right-[41px] sm:bottom-[27px] sm:w-[215px]\n                    md:right-[35px] md:bottom-[7px] md:w-[215px]\n                    lg:right-[70px] lg:bottom-[37px] lg:w-[236px]",
        alt: `Badge ` + title
      }
    )
  ] });
}

function ProgramGlanceCopy({ copy, id }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      id,
      className: `text-[20px] leading-[35px] text-center sm:text-left sm:text-[21px] sm:leading-[40px] md:text-[23px] md:leading-[45px] yellow-body-copy`,
      dangerouslySetInnerHTML: { __html: copy },
      variants: fadeInAnimationVariant,
      custom: 2
    }
  );
}

const AnimatedBodyCopy = ({ left, right, body, heading }) => {
  const headingLower = heading.replace(/\s+/g, "-").toLowerCase();
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      id: headingLower,
      className: `relative sm:px-[45px] md:pl-[20px] md:pr-[20px] lgMd:pl-0  lg:pl-[0px] lg:pr-[0px]`,
      variants: fadeInAnimationVariant,
      initial: "initial",
      whileInView: "animate",
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsx(
          motion.h2,
          {
            className: `text-center font-chunkfive text-tcnjblue text-[45px] leading-[62px] pb-[25px] sm:pb-[20px] sm:text-[55px] sm:leading-[75px] sm:text-left md:text-[65px] md:leading-[89px] md:pb-[23px]
          lg:pb-[14px]
        
        `,
            variants: fadeInAnimationVariant,
            custom: 1,
            children: heading
          }
        ),
        body && /* @__PURE__ */ jsx(ProgramGlanceCopy, { id: `${headingLower}-body`, copy: body }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex\n      gap-[60px]\n      sm:gap-[75px]\n      md:gap-[100px]\n      text-[1.438rem]\n      inner-body-copy-white\n      flex-col",
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `flex flex-col  pb-[100px] gap-[0px]
          sm:flex-row
          sm:pb-[110px]
          sm:gap-[40px] 
          md:pb-[150px]
          lg:pb-[200px] 
          ${left ? "sm:pt-[70px] md:pt-[89px] lg:pt-[85px]" : "pt-0"}`,
                children: [
                  left && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      id: `${headingLower}-left`,
                      className: "md:max-w-[45%] lg:max-w-[50%]",
                      dangerouslySetInnerHTML: { __html: left },
                      variants: fadeInAnimationVariant,
                      custom: 3
                    }
                  ),
                  /* @__PURE__ */ jsx(
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
            )
          }
        )
      ]
    }
  );
};

const AnimatedProgramAtAGlance = ({
  programAtAGlance,
  programImageCheck
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "program-at-a-glance-intro",
        className: "pt-[91px] sm:pt-[103px]\nmd:pt-[135px] lg:pt-[187px]"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        id: "program-at-a-glance",
        className: `text-left ${programImageCheck ? "pb-[145px]  sm:pb-[160px] md:pb-[150px] lg:pb-[200px]" : "pb-[100px]  sm:pb-[115px] md:pb-[150px] lg:pb-[200px]"}   `,
        variants: fadeInAnimationVariant,
        initial: "initial",
        whileInView: "animate",
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              className: `text-center font-chunkfive text-tcnjblue text-[45px] leading-[62px] pb-[20px] sm:pb-[27px] sm:text-[55px] sm:leading-[75px] sm:text-left md:text-[65px] md:leading-[89px] md:pb-[23px]
            lg:pb-[14px]
        
        `,
              variants: fadeInAnimationVariant,
              custom: 1,
              children: "At a Glance"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              id: "program-glance",
              className: `text-[20px] leading-[35px] text-center sm:text-left sm:text-[21px] sm:leading-[40px] md:text-[23px] md:leading-[45px] yellow-body-copy`,
              dangerouslySetInnerHTML: { __html: programAtAGlance },
              variants: fadeInAnimationVariant,
              custom: 2
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex flex-col gap-[20px] sm:flex-row sm:mt-[64px] sm:gap-[28px] md:gap-5 md:flex-row mt-[50px]",
              variants: fadeInAnimationVariant,
              custom: 3,
              children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://admissions.tcnj.edu/apply/",
                    target: "_blank",
                    className: "program-button-glance-gtm border-2 border-tcnjblue p-4 pt-[36px] pb-[36px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]\n                hover:bg-tcnjblue hover:text-white transition-all\n                ",
                    children: "Apply"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "https://connect.tcnj.edu/register/prospect",
                    target: "_blank",
                    className: "border-2 border-tcnjblue p-4 pt-[36px] pb-[36px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]\n                hover:bg-tcnjblue hover:text-white\n                transition-all\n                ",
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
  imageAlt,
  rightImageHorizontalPosition,
  rightImageVerticalPosition
}) => {
  const { ref } = useInView({
    triggerOnce: true,
    // Change this to false if you want the animation to trigger again whenever it comes in view
    threshold: 0.35
    // 35% of the element is in view
  });
  return /* @__PURE__ */ jsx("div", { className: "relative overflow-y-visible", children: programOfStudyRight && /* @__PURE__ */ jsx(
    "img",
    {
      ref,
      loading: "lazy",
      src: programOfStudyRight,
      alt: imageAlt + " program image",
      style: {
        objectPosition: `${rightImageHorizontalPosition}% ${rightImageVerticalPosition}%`
      },
      id: "prog-study-img",
      className: "relative z-30 \n     top-[-45px]\n          object-cover\n          object-left\n          w-[100%]\n          h-[350px]\n          max-w-none\n          sm:h-[500px]\n          sm:top-[-45px]\n          \n       md:top-[-50px]\n          md:right-[-82px]\n          md:h-[425px]\n          md:absolute\n          mb-[5px]\n          lg:w-[51%]\n          lg:h-[600px]\n\n          sm:mb-0\n          "
    }
  ) });
};

function NavigationBar({
  careerCheck,
  additionalInfoCheck,
  teachingCareerCheck
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-100  px-8 sm:px-[80px] md:px-8", id: "menu", children: /* @__PURE__ */ jsxs("div", { className: "lg:max-w-[70.5rem] mx-auto flex justify-items-start items-start md:gap-12 md:flex-row flex-col md:max-w-[920px]", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: toggleMenu,
        className: "md:hidden font-opensans text-[14px] leading-[40px] uppercase py-[12.5px] md:py-0 flex gap-[15px] items-center flex-row",
        children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-[17px] h-[14px] ",
              src: `/micro/${isMenuOpen ? "menu-close" : "menu-icon"}.svg`,
              alt: "menu icon"
            }
          ) }),
          "Menu"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `overflow-hidden transition-all md:transition-none duration-300 ease-in-out
          ${isMenuOpen ? "h-[250px] opacity-100 md:h-[60px]" : "h-[0px] md:h-[60px] opacity-0 md:opacity-100"} 
          flex
          transition-all duration-300 ease-in-out 
          md:flex flex-col md:flex-row md:gap-12  top-20 md:top-0 left-0  bg-gray-100 md:bg-transparent md:p-0 w-[100%] md:relative md:items-center`,
        children: [
          /* @__PURE__ */ jsx("hr", { className: "mb-[10px] md:hidden" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#program-at-a-glance-intro",
              onClick: (e) => {
                e.preventDefault();
                setTimeout(() => {
                  document.querySelector("#program-at-a-glance-intro").scrollIntoView({ behavior: "smooth" });
                }, 100);
              },
              className: "font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit",
              children: [
                "Overview",
                /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#programs-of-study-container",
              onClick: (e) => {
                e.preventDefault();
                setTimeout(() => {
                  document.querySelector("#programs-of-study-container").scrollIntoView({ behavior: "smooth" });
                }, 100);
              },
              className: "font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit",
              children: [
                "Program Options",
                /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue" })
              ]
            }
          ),
          careerCheck && /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#careers-intro",
              onClick: (e) => {
                e.preventDefault();
                setTimeout(() => {
                  document.querySelector("#careers-intro").scrollIntoView({ behavior: "smooth" });
                }, 100);
              },
              className: "font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit",
              children: [
                teachingCareerCheck === "Teaching Careers" ? "Teaching Careers" : teachingCareerCheck,
                /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue" })
              ]
            }
          ),
          additionalInfoCheck && /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#additional-information",
              onClick: (e) => {
                e.preventDefault();
                setTimeout(() => {
                  document.querySelector("#additional-information").scrollIntoView({ behavior: "smooth" });
                }, 100);
              },
              className: "font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit",
              children: [
                "Additional Information",
                /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2 flex-row justify-items-start items-center md:absolute md:right-0 mt-[15px] md:mt-0", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://admissions.tcnj.edu/apply/",
                target: "_blank",
                className: "program-button-nav-gtm py-3 px-6 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-black font-opensans text-[14px] leading-5 uppercase font-[600]",
                children: "Apply"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://connect.tcnj.edu/register/prospect",
                target: "_blank",
                className: "py-3 px-6 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-black font-opensans text-[14px] leading-5 uppercase font-[600]",
                children: "Get Info"
              }
            )
          ] })
        ]
      }
    )
  ] }) });
}

const $$Astro = createAstro("https://programs.tcnj.edu");
async function getStaticPaths() {
  const data = await wpquery({
    query: `query ProgramsListing {
  programs(first:120) {
    nodes {
      program {
        fullProgramTitle
        degreeType
        repeaterDegrees{
          degreeName
        }
        slug
        school
        acceleratedSubtitle
        programAtAGlance
        heroImgDesktop {
          sourceUrl
        }
        heroImgDesktopWebp{
          sourceUrl
        }
        horizontalPositionDesktopHero
        horizontalPositionTablet
        horizontalPositionMobile
        heroImgTablet{
          sourceUrl
        }
        heroImgTabletWebp{
          sourceUrl
        }
        heroImgMobile{
          sourceUrl
        }
    heroImgMobileWebp{
          sourceUrl
        }
        badge{
          sourceUrl
        }
        departmentRepeater {
          deptTitle
          deptUrl
        }
        careersTitle
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
        horizontalPositionTablet: program.program.horizontalPositionTablet,
        horizontalPositionMobile: program.program.horizontalPositionMobile,
        degreeType: program.program.degreeType,
        repeaterDegrees: program.program.repeaterDegrees,
        school: program.program.school,
        acceleratedSubtitle: program.program.acceleratedSubtitle,
        department: program.program.departmentRepeater,
        heroImgDesktop: program.program.heroImgDesktop,
        heroImgDesktopWebp: program.program.heroImgDesktopWebp,
        heroImgTablet: program.program.heroImgTablet,
        heroImgTabletWebp: program.program.heroImgTabletWebp,
        heroImgMobile: program.program.heroImgMobile,
        heroImgMobileWebp: program.program.heroImgMobileWebp,
        badge: program.program.badge,
        careersTitle: program.program.careersTitle,
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
    // body,
    slug,
    programAtAGlance,
    // degreeType,
    repeaterDegrees,
    school,
    acceleratedSubtitle,
    department,
    heroImgDesktop,
    heroImgDesktopWebp,
    horizontalPositionDesktopHero,
    horizontalPositionTablet,
    horizontalPositionMobile,
    heroImgTablet,
    heroImgTabletWebp,
    heroImgMobile,
    heroImgMobileWebp,
    badge,
    // content,
    careersTitle,
    careers: { left: careersLeft, right: careersRight, body: careersBody },
    programOfStudy: {
      left: programOfStudyLeft,
      rightImage,
      // Get the rightImage object without destructuring
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
  const programOfStudyRight = rightImage?.sourceUrl ?? "";
  const socialSourceUrl = socialImage && socialImage.sourceUrl ? socialImage.sourceUrl : typeof heroImgDesktop === "string" ? heroImgDesktop : heroImgDesktop.sourceUrl;
  const { sourceUrl } = heroImgDesktop ?? {
    sourceUrl: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metaTitle, "description": metaDescription, "image": socialSourceUrl, "metaTitle": metaTitle }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "NavigationBar", NavigationBar, { "careerCheck": careersBody, "additionalInfoCheck": lowerContent, "teachingCareerCheck": careersTitle, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/NavigationBar", "client:component-export": "default" })} ${maybeRenderHead()}<main class="font-domine text-darkgrey overflow-hidden"> <div class="bg-tcnjyellow w-auto"> <div class="pl-[35px]
      pr-[35px]


      lg:max-w-[70.5rem]
      md:max-w-[990px]
      pt-[31px]
      sm:pt-[47px]
      md:pt-[56px]
      m-auto
      lg:pl-0
      lg:pr-0"> <p class="text-[17px] leading-[26px] pb-[18px] font-domine
          sm:pb-[30px] 
        sm:text-[17px] 
        sm:leading-[19px]
        sm:px-[45px] 
        md:text-[18px] 
        md:leading-[21px]
        md:pb-[25px] 
        md:px-0
        lg:pb-[26px] 
        lg:text-[18px]
                lg:leading-[21px]
        "> <a href="https://tcnj.edu" class="yellow-bg-text">TCNJ Home</a> / <a href="/" class="yellow-bg-text">Explore Programs</a> / <span class="font-bold"> ${title} </span> </p> <!-- <h1
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
        </h1> --> ${renderComponent($$result2, "AnimatedTitle", AnimatedTitle, { "title": title, "subtitle": acceleratedSubtitle, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedTitle", "client:component-export": "default" })} </div> <div${addAttribute(`w-auto bg-tcnjyellow md:bg-yellowWhiteGradientMd lg:bg-yellowWhiteGradientLg
      ${acceleratedSubtitle ? "mt-[35px] sm:mt-[39px] md:mt-[55px]" : "mt-[42px] sm:mt-[40px] md:mt-[50px] "}`, "class")}> ${sourceUrl && renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "AnimatedHero", AnimatedHero, { "heroImgMobileWebp": heroImgMobileWebp, "heroImgMobile": heroImgMobile, "heroImgTabletWebp": heroImgTabletWebp, "heroImgTablet": heroImgTablet, "heroImgDesktopWebp": heroImgDesktopWebp, "sourceUrl": sourceUrl, "horizontalPositionDesktopHero": horizontalPositionDesktopHero, "horizontalPositionTablet": horizontalPositionTablet, "horizontalPositionMobile": horizontalPositionMobile, "title": title, "badge": badge, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedHero", "client:component-export": "default" })} ` })}`} </div> </div> <div class="bg-white
    w-auto
    pt-[45px]
    pb-[43px]
    sm:pt-[35px]
    sm:pb-[35px]
    pl-[35px]
    pr-[35px]
    md:pt-[50px]
    md:pb-[50px]"> <div class="lg:max-w-[70.5rem] md:max-w-[920px]  bg-white m-auto"> <div id="degree-school-department" class="flex
          
          items-start
          flex-col
          gap-[31px]
          sm:gap-[35px]
          sm:max-w-[685px]
          sm:m-auto
          sm:flex-row
          sm:flex-nowrap
        
          sm:justify-between
          md:max-w-none"> <!-- <TopOption heading={degreeType && degreeType.length > 1 ? 'Degrees' : 'Degree'} imgSrc="ribbon">
            {
              Array.isArray(degreeType)
                ? degreeType.map((degree: string) => (
                    <span class="block">{degree}</span>
                  ))
                : { degreeType }
            }
          </TopOption> --> ${renderComponent($$result2, "TopOption", TopOption, { "heading": repeaterDegrees && repeaterDegrees.length > 1 ? "Degrees" : "Degree", "imgSrc": "ribbon" }, { "default": async ($$result3) => renderTemplate`${Array.isArray(repeaterDegrees) ? repeaterDegrees.map((degree, index) => renderTemplate`<span${addAttribute(`block ${index >= 1 ? "mt-[4px] lg:mt-[6px]" : ""}`, "class")}>${degree.degreeName}</span>`) : null}` })} <!-- <TopOption school={school} heading={school && school.length > 1 ? 'Schools' : 'School'} imgSrc="building">
            {school}
          </TopOption> --> ${renderComponent($$result2, "TopOptionNew", TopOptionNew, { "client:load": true, "school": school, "heading": school && school.length > 1 ? "Schools" : "School", "imgSrc": "building", "techEdMarginCheck": slug === "technology-engineering-education" ? true : false, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/TopOptionNew.tsx", "client:component-export": "default" }, { "default": async ($$result3) => renderTemplate`${school}` })} <!-- <TopOptionNew client:load department={department} heading={department && department.length > 1 ? 'Departments' : "Department"} imgSrc="departments">
            {school}
          </TopOptionNew> --> ${renderComponent($$result2, "TopOption", TopOption, { "client:load": true, "heading": department && department.length > 1 ? "Departments" : "Department", "department": department, "imgSrc": "departments", "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/TopOption", "client:component-export": "default" }, { "default": async ($$result3) => renderTemplate`   ` })} </div> </div> </div> <div class="bg-tcnjyellow w-auto
    pl-[35px]
    pr-[35px]
    sm:pl-[80px]
    sm:pr-[80px]
    md:pl-[35px]
    md:pr-[35px]"> <div class="lg:max-w-[70.5rem] md:max-w-[920px]  m-auto"> ${renderComponent($$result2, "AnimatedProgramAtAGlance", AnimatedProgramAtAGlance, { "programAtAGlance": programAtAGlance, "programImageCheck": programOfStudyRight, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedProgramAtAGlance", "client:component-export": "default" })}</div> </div> <div id="programs-of-study-container" class="px-[35px] w-auto sm:bg-tcnjyellow  
     "> <div class="m-auto
      bg-white
      relative
      pb-[71px]
      sm:pb-[93px]
      sm:px-[45px]
      lg:pb-[105px]
      "> ${programOfStudyRight && programOfStudyRight !== null && renderTemplate`${renderComponent($$result2, "AnimatedRightImage", AnimatedRightImage, { "programOfStudyRight": programOfStudyRight, "rightImageHorizontalPosition": rightImageHorizontalPosition, "imageAlt": title, "rightImageVerticalPosition": rightImageVerticalPosition, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedRightImage", "client:component-export": "default" })}`} ${!programOfStudyRight && renderTemplate`<div id="no-photo-spacer" class="h-[75px] sm:h-[70px] md:h-[0]"></div>`} <div${addAttribute(`lg:max-w-[70.5rem] md:max-w-[920px] 
        m-auto
        bg-white
        pt-[0px]
        
        ${careersLeft || careersRight || careersBody ? "pb-[0] sm:pb-[3px] md:pb-[50px] lg:pb-[40px]" : ""}
        ${programOfStudyRight ? "sm:pt-[20px] md:pt-[119px] lg:pt-[144px]" : "md:pt-[119px] lg:pt-[144px]"}`, "class")}> ${renderComponent($$result2, "BodyCopy", $$BodyCopy, { "left": programOfStudyLeft, "body": programOfStudyBody, "right": programOfStudyRight })} </div> </div> <!-- <p>NO ACCORDION HERE</p> --> </div> ${(careersLeft || careersRight || careersBody) && renderTemplate`<div class="px-[35px] m-auto bg-tcnjyellow" id="careers-intro"> <div class="lg:max-w-[70.5rem] md:max-w-[920px]  m-auto
      pt-[91px] sm:pt-[103px]
md:pt-[135px] lg:pt-[187px]"> <!-- <BodyCopy
          heading="Careers"
          left={careersLeft}
          right={careersRight}
          body={careersBody}
        /> --> ${renderComponent($$result2, "AnimatedBodyCopy", AnimatedBodyCopy, { "heading": careersTitle ? careersTitle : "Careers", "left": careersLeft, "right": careersRight, "body": careersBody, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedBodyCopy", "client:component-export": "default" })} </div> </div>`} <div class=" px-[0] sm:px-[35px] w-auto sm:bg-tcnjyellow" id="lower-content-and-related-progras"> <div class="m-auto bg-white pb-[75px] sm:pb-[75px] md:pb-[150px]"> <div class="lg:max-w-[70.5rem] md:max-w-[920px]  m-auto"> ${lowerContent && renderTemplate`${renderComponent($$result2, "LowerContent", $$LowerContent, { "lowerContent": lowerContent, "quote": quoteContentArea, "careerContent": careersBody })}`} <!-- {learnMoreList && <LearnMoreList learnMoreList={learnMoreList} />} --> ${!lowerContent && renderTemplate`<div class="
          h-[0px]
          mt-[-7px]
          md:mt-[0px]
          md:h-[46px]
          lg:h-[33px]
          "></div>`} </div> <div class="lg:max-w-[70.5rem] lg:m-auto"> ${learnMoreList && renderTemplate`${renderComponent($$result2, "RelatedProgSlider", RelatedProgSlider, { "learnMoreList": learnMoreList, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/RelatedProgSlider", "client:component-export": "default" })}`} </div> </div> </div> ${renderComponent($$result2, "NextStepFooter", NextStepFooter, { "customCtaButtons": null })} </main> ` })}`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/[slug].astro", void 0);

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
