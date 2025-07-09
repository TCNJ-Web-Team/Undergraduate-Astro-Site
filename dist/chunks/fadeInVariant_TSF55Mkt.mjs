import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_CQh-u2xo.mjs';
import 'kleur/colors';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
/* empty css                          */
import { create } from 'zustand';
import { decode } from 'html-entities';

const useAccordionTrackStore = create((set) => ({
  currentAccordionId: null,
  setCurrentAccordionId: (id) => set({ currentAccordionId: id })
}));

function Accodion({ children, header, idName, startOpen }) {
  const [open, setOpen] = useState(startOpen);
  const headerRef = useRef(null);
  const { currentAccordionId, setCurrentAccordionId } = useAccordionTrackStore();
  useEffect(() => {
    if (currentAccordionId === idName) {
      setOpen(true);
    }
  }, [currentAccordionId, idName]);
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
          /* @__PURE__ */ jsx("span", { ref: headerRef, className: "accordion-header-text", children: header }),
          /* @__PURE__ */ jsx("span", { className: "arrow", children: open ? /* @__PURE__ */ jsx(
            "img",
            {
              src: "/minus-dark.svg",
              alt: "close",
              className: "h-[20px] w-[20px]"
            }
          ) : /* @__PURE__ */ jsx(
            "img",
            {
              src: "/plus-dark.svg",
              alt: "open",
              className: "h-[20px] w-[20px]"
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
  const pPattern = /<p[^>]*>(.*?)<\/p>/;
  const h2Match = content.match(h2Pattern);
  const pMatch = content.match(pPattern);
  const h2Content = h2Match ? decode(h2Match[1]) : "";
  const pContent = pMatch ? pMatch[1] : "";
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "large-quote flex flex-col mb-[75px] text-left\n    sm:mt-[-5px]\n    sm:mb-[95px]\n    md:mt-[0px]\n     xl:mt-[-12px]\n    ",
      children: [
        /* @__PURE__ */ jsx(
          "h2",
          {
            className: `font-alfaslab  text-left sm:text-left text-tcnjblue mb-[6px]
          text-[30px] leading-[40px]
          sm:text-[35px] sm:leading-[50px]
          md:text-[35px] md:leading-[50px]
          lg:text-[40px] lg:leading-[50px] lg:mb-[9px]
          xl:text-[45px] xl:leading-[65px]  xl:mb-[3px]
          `,
            children: h2Content
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: "font-domine text-[18px] leading-[25px]\n        sm:text-[20px] sm:leading-[35px]",
            dangerouslySetInnerHTML: { __html: pContent }
          }
        )
      ]
    }
  );
}

const $$Astro = createAstro("https://programs.tcnj.edu");
const $$LowerContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LowerContent;
  const { lowerContent, quote, careerContent } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="additional-information"${addAttribute(`pl-[35px]
  pr-[35px]
   pb-[75px]
  sm:px-[45px]

sm:pb-[94px]
md:px-[20px]

md:pb-[145px]
lgMd:px-[0px]
lg:px-[0px] ${careerContent ? "pt-[75px] sm:pt-[75px] md:pt-[150px]" : ""}`, "class")}> ${quote && renderTemplate`${renderComponent($$result, "QuoteContent", QuoteContent, { "content": quote, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/QuoteContent", "client:component-export": "default" })}`} <hr class="bg-[#BFBFBF] h-[1px] w-auto border-0"> ${lowerContent.map((content) => {
    return renderTemplate`<div class="border-b border-[#BFBFBF]"${addAttribute(content.title.replace(/\s+/g, "-").toLowerCase(), "id")}> ${renderComponent($$result, "Accordion", Accodion, { "startOpen": false, "header": content.title, "idName": content.title, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/Accordion", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div>${unescapeHTML(content.body)}</div> ` })} </div>`;
  })} </div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/LowerContent.astro", void 0);

const Popup = ({ content, onClose, heading }) => {
  const containerRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);
  if (!content) return null;
  const getLink = (item) => {
    if (typeof item === "string") {
      const schoolLinks = {
        "Arts and Communication": "https://artscomm.tcnj.edu/",
        Business: "https://business.tcnj.edu/",
        Education: "https://education.tcnj.edu/",
        Engineering: "https://engineering.tcnj.edu/",
        "Humanities and Social Sciences": "https://hss.tcnj.edu/",
        "Nursing and Health Sciences": "https://nhs.tcnj.edu/",
        Science: "https://science.tcnj.edu/",
        "Graduate, Global, and Online Education": "https://ggoe.tcnj.edu/"
      };
      return schoolLinks[item] || "https://tcnj.edu";
    }
    return item.deptUrl;
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref: containerRef,
      id: "popup-container",
      className: "bg-white shadow-lg p-6 relative z-[1000] left-0 w-[100%] max-w-[900px] mx-[15px] sm:mx-[30px] lg:mx-auto pl-[30px] pr-[30px] text-center md:text-left lg:px-0 cursor-default",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "py-[45px] px-[15px] sm:px-[45px]", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[21px] leading-[25px] pb-[7px] font-interstate font-[900] uppercase text-left", children: heading }),
          /* @__PURE__ */ jsx("div", { className: "text-gray-700 flex flex-col gap-2", children: Array.isArray(content) ? content.map((item, index) => /* @__PURE__ */ jsx(
            "a",
            {
              className: "text-[17px] leading-[23px] sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] md:mt-[4px]  text-start text-primarylinkblue underline",
              href: getLink(item),
              target: "_blank",
              rel: "noopener noreferrer",
              children: typeof item === "string" ? item : item.deptTitle
            },
            index
          )) : /* @__PURE__ */ jsx("p", { children: content }) })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-[30px] right-[30px] cursor-pointer",
            children: /* @__PURE__ */ jsx("img", { className: "close-button", alt: "close", src: "/close-item.svg" })
          }
        )
      ]
    }
  ) });
};

const anyDepartmentText = "This program is open to students in any department and offers guidance from the Medical Careers Advisory Committee for those exploring and preparing for careers in health professions.";
const TopOption = ({ heading, imgSrc, department, children }) => {
  const [popupContent, setPopupContent] = useState(null);
  const [popupHeading, setPopupHeading] = useState(
    null
  );
  const handleLinkClick = ({ content, popupTitle }) => {
    setPopupContent(content);
    setPopupHeading(popupTitle);
  };
  const handleClosePopup = () => {
    setPopupContent(null);
    setPopupHeading(null);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex-row flex items-start gap-[18px] md:gap-[15px] sm:max-w-[33%]", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-[26px] h-auto mt-[3px]",
        src: `/micro/${imgSrc}.svg`,
        alt: `${heading} icon`
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex-col flex gap-[2px] md:gap-[5px]", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-[17px] leading-[22px] sm:leading-[23px] \n        md:text-[20px] md:leading-[24px] lg:leading-[24px] font-interstate not-italic uppercase font-extrabold",
          children: heading
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "text-[17px] leading-[23px] sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] md:mt-[4px] lg:mt-0 lg:leading-[26px]  text-start", children: [
        department && department[0].deptTitle && /* @__PURE__ */ jsx("span", { children: department.length < 3 ? department[0].deptTitle.toLowerCase() === "any" || department[0].deptTitle.toLowerCase() === "any department" ? /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleLinkClick({
              content: anyDepartmentText,
              popupTitle: "Any Department"
            }),
            className: "text-primarylinkblue   text-start flex items-center gap-[6px]",
            children: [
              /* @__PURE__ */ jsx("span", { className: "underline", children: "Any Department" }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: "block w-[16px] h-[auto] cursor-pointer",
                  alt: "More Info",
                  src: "/info-icon-blue.svg"
                }
              )
            ]
          }
        ) : department.map((dept, index) => /* @__PURE__ */ jsx(
          "a",
          {
            target: "_blank",
            href: dept.deptUrl,
            className: `text-primarylinkblue underline block text-start ${index >= 1 ? "mt-[4px] lg:mt-[6px]" : ""}`,
            children: dept.deptTitle
          },
          index
        )) : department.length >= 3 ? /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => handleLinkClick({
              content: department.map((dept) => ({
                deptTitle: dept.deptTitle,
                deptUrl: dept.deptUrl
              })),
              popupTitle: "Departments"
            }),
            className: "text-primarylinkblue   text-start flex items-center gap-[6px]",
            children: [
              /* @__PURE__ */ jsx("span", { className: "underline relative", children: "View Departments " }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  className: "block w-[16px] h-[auto] cursor-pointer",
                  alt: "More Info",
                  src: "/info-icon-blue.svg"
                }
              )
            ]
          }
        ) : /* @__PURE__ */ jsx("span", { children: "No department available" }) }),
        children,
        !department && !children && /* @__PURE__ */ jsx("span", { className: "text-black block text-start", children: "Not listed" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      Popup,
      {
        content: popupContent,
        onClose: handleClosePopup,
        heading: popupHeading
      }
    )
  ] });
};

const TopOptionNew = ({
  heading,
  imgSrc,
  school,
  department,
  techEdMarginCheck
}) => {
  const [popupContent, setPopupContent] = useState(
    null
  );
  const [popupHeading, setPopupHeading] = useState(
    null
  );
  const handleLinkClick = ({ content, popupTitle }) => {
    setPopupContent(content);
    setPopupHeading(popupTitle);
  };
  const handleClosePopup = () => {
    setPopupContent(null);
    setPopupHeading(null);
  };
  let schoolLink;
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
      case "Graduate, Global, and Online Education":
        schoolLink = "https://ggoe.tcnj.edu/";
        break;
      default:
        schoolLink = "https://tcnj.edu";
    }
  } else {
    schoolLink = "https://tcnj.edu";
  }
  const anySchoolText = "This program is open to students in any school and offers guidance from the Medical Careers Advisory Committee for those exploring and preparing for careers in health professions.";
  return /* @__PURE__ */ jsxs("div", { className: "flex-row flex items-start gap-[18px] md:gap-[15px] sm:max-w-[33%]", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        className: "w-[26px] h-auto mt-[3px]",
        src: `/micro/${imgSrc}.svg`,
        alt: `${heading} icon`
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex-col flex gap-[2px]  md:gap-[5px]", children: [
      /* @__PURE__ */ jsx(
        "h2",
        {
          className: "text-[17px] leading-[22px] sm:leading-[23px] \n        md:text-[20px] md:leading-[24px] lg:leading-[24px] font-interstate not-italic uppercase font-extrabold",
          children: heading
        }
      ),
      school && /* @__PURE__ */ jsx("p", { className: "text-[17px] leading-[23px] sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] md:mt-[4px] lg:mt-0 lg:leading-[26px]  text-start", children: school && school.length === 1 ? /* @__PURE__ */ jsx(
        "a",
        {
          className: "text-[#33739F] underline",
          href: schoolLink,
          target: "_blank",
          rel: "noopener noreferrer",
          children: school[0]
        }
      ) : (school?.length ?? 0) < 3 ? school?.map((item, index) => {
        const link = (() => {
          switch (item) {
            case "Arts and Communication":
              return "https://artscomm.tcnj.edu/";
            case "Business":
              return "https://business.tcnj.edu/";
            case "Education":
              return "https://education.tcnj.edu/";
            case "Engineering":
              return "https://engineering.tcnj.edu/";
            case "Humanities and Social Sciences":
              return "https://hss.tcnj.edu/";
            case "Nursing and Health Sciences":
              return "https://nhs.tcnj.edu/";
            case "Science":
              return "https://science.tcnj.edu/";
            case "Graduate, Global, and Online Education":
              return "https://ggoe.tcnj.edu/";
            default:
              return "https://tcnj.edu";
          }
        })();
        return /* @__PURE__ */ jsx(
          "a",
          {
            className: `text-primarylinkblue underline block ${techEdMarginCheck ? "" : index >= 1 ? "mt-[4px] lg:mt-[6px]" : ""}`,
            href: link,
            target: "_blank",
            children: item
          },
          index
        );
      }) : school && school.length >= 3 && school.length < 8 ? /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleLinkClick({
            content: school,
            popupTitle: "Available Schools"
          }),
          className: "text-primarylinkblue   text-start flex items-center gap-[6px]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "underline", children: "View Schools" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "block w-[16px] h-[auto] cursor-pointer",
                alt: "More Info",
                src: "/info-icon-blue.svg"
              }
            )
          ]
        }
      ) : school && school.length >= 8 ? /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleLinkClick({
            content: anySchoolText,
            popupTitle: "Any School"
          }),
          className: "text-primarylinkblue   text-start flex items-center gap-[6px]",
          children: [
            /* @__PURE__ */ jsx("span", { className: "underline", children: "Any School" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                className: "block w-[16px] h-[auto] cursor-pointer",
                alt: "More Info",
                src: "/info-icon-blue.svg"
              }
            )
          ]
        }
      ) : /* @__PURE__ */ jsx("span", { children: "No school or department available" }) }),
      department && (Array.isArray(department) ? department.map(
        (degree, index) => degree.deptTitle === "Any" || degree.deptTitle === "any" ? /* @__PURE__ */ jsx("a", { className: "text-[#33739F] underline", children: "Any Department" }) : /* @__PURE__ */ jsx("a", { className: "text-[#33739F] underline", href: degree.deptUrl, children: /* @__PURE__ */ jsx(
          "span",
          {
            className: `block ${index >= 1 ? "mt-[4px] lg:mt-[6px]" : ""}`,
            children: degree.deptTitle
          }
        ) })
      ) : department)
    ] }),
    /* @__PURE__ */ jsx(
      Popup,
      {
        content: popupContent,
        onClose: handleClosePopup,
        heading: popupHeading
      }
    )
  ] });
};

function AnimatedTitle({ title, subtitle }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "h1",
      {
        className: `font-chunkfive
      text-tcnjblue
      
      sm:text-[55px]
      sm:leading-[60px]
      sm:px-[45px] md:px-0
      md:text-[65px]
      md:leading-[75px]
      ${title === "Anthropology" || title === "Communication Studies" || title === "Engineering Management" || title === "Environmental Studies" || title === "Management and Organizations" ? "text-[30px] leading-[40px]" : title.length >= 30 ? "text-[30px] leading-[40px]" : "text-[45px] leading-[50px]"}
          `,
        children: title
      }
    ),
    subtitle && /* @__PURE__ */ jsx(
      "span",
      {
        className: "block\n          font-chunkfive\n      text-black \n      sm:px-[45px] md:px-0\n      leading-[25px] text-[18px] \n      sm:mt-[9px] sm:text-[23px] sm:leading-[35px]\n      md:mt-[14px] md:leading-[22px] md:pt-[0]\n      ",
        children: subtitle
      }
    )
  ] });
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
      delay: delayNumber * 0.35,
      ease: "easeOut",
      duration: 0.35
    }
  }),
  exit: {
    opacity: 0,
    y: 5,
    // Moves slightly down when exiting
    transition: {
      ease: "easeInOut",
      duration: 0.25
      // Slightly quicker exit
    }
  }
};

export { $$LowerContent as $, AnimatedTitle as A, TopOption as T, TopOptionNew as a, fadeInAnimationVariant as f, useAccordionTrackStore as u };
