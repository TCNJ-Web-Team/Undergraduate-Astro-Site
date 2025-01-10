/* empty css                                  */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Byni5WEU.mjs';
import 'kleur/colors';
import { N as NavigationBar, w as wpquery, a as NextStepFooter, $ as $$Layout } from '../chunks/NavigationBar_oXEjyUPv.mjs';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function TitleAndNav() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "pt-[19px] pb-[19px] pl-[35px] pr-[35px]\n      leading-[40px] md:max-w-[1128px] m-auto text-center\n      lg:pl-0",
        children: /* @__PURE__ */ jsx(
          "p",
          {
            className: "font-domine text-[35px] content-center text-[#000]\n        sm:text-left ",
            children: "Academics"
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(NavigationBar, {})
  ] });
}

const ProgramCard = ({ program, listType, index, animationState }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [pulsing, setPulsing] = useState(true);
  const activeHover = isHovered ? "active-hover" : "";
  const listOnly = listType == "list" ? true : false;
  useEffect(() => {
    setTimeout(() => setPulsing(false), 1200);
  });
  const { slug, redirecturl, programOptions, additionalOptions } = program.program;
  const { title } = program;
  const progOptionSort = {
    Major: 0,
    Minor: 1,
    Certificate: 2,
    "Three-Year Bachelor's": 3,
    Accelerated: 4,
    "Dual Degree": 5,
    "Teacher Education": 6,
    Undeclared: 7,
    Prelaw: 8,
    Premed: 9
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `program-card filter   drop-shadow-none transition-all duration-300 bg-white ${activeHover}
      ${pulsing ? "pulse" : ""}  
      `,
      id: slug,
      children: /* @__PURE__ */ jsxs(
        motion.a,
        {
          className: `program-link block border-[1px] 
        border-[#bcbcbc] px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${listOnly && "md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px]  lg:!pt-[35px]"}
        `,
          href: redirecturl ? redirecturl : `./${slug}`,
          target: redirecturl ? "_blank" : "_self",
          initial: animationState ? { opacity: 0, y: 5 } : { opacity: 1, y: 0 },
          animate: { opacity: 1, y: 0 },
          transition: {
            delay: (index + 0.25) * 0.15,
            ease: "easeOut",
            duration: 0.3
            // type: "spring",
            // stiffness: 50,
          },
          children: [
            /* @__PURE__ */ jsx(
              "h2",
              {
                className: "font-domine font-bold \n        text-[19px] leading-[28px]\n        sm:text-[21px] sm:leading-[30px]\n\n        ",
                children: title
              }
            ),
            /* @__PURE__ */ jsx(
              "hr",
              {
                className: `my-[20px] border-[#BCBCBC] ${listOnly && "md:hidden"}`
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `icon-container flex flex-wrap gap-x-[20px] gap-y-[10px]  ${listOnly && "md:max-w-[260px] md:w-[100%]"}`,
                children: (programOptions || additionalOptions) && [...programOptions || [], ...additionalOptions || []].slice().sort((a, b) => progOptionSort[a] - progOptionSort[b]).map((option, index2) => {
                  const formatOption = (option2) => {
                    return option2.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                  };
                  return /* @__PURE__ */ jsxs(
                    "p",
                    {
                      className: `font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${option.length > 15 && "col-span-full"}`,
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            src: `/card-icons/${formatOption(option)}.svg`,
                            alt: option,
                            className: "max-h-[15px]"
                          }
                        ),
                        option
                      ]
                    },
                    index2
                  );
                })
              }
            )
          ]
        }
      )
    }
  );
};

function DropDownAccordion({
  checkboxContent,
  title,
  isOpen,
  onToggle,
  index
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `z-50 relative w-[100%] 
       
      ${isOpen ? "open-drop" : ""}`,
      children: [
        /* @__PURE__ */ jsxs(motion.div, { whileTap: { scale: 0.975 }, className: "z-30 relative", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "h-[9px] w-[100%] bg-tcnjyellow origin-left",
              initial: { scaleX: 0, opacity: 0 },
              animate: { scaleX: 1, opacity: 1 },
              transition: {
                delay: (index + 2) * 0.45,
                // delay: index * 0.045,
                // ease: "easeInOut",
                // ease: [0.12, 0, 0.39, 0],
                // ease: "easeInOut",
                // duration: 0.55,
                ease: [0.22, 0, 0.36, 1],
                duration: 0.85
                // type: "spring",
                // stiffness: 50,
              }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { "--background-color": "#bcbcbc" },
              animate: { "--background-color": "#fdd700" },
              className: "\n          transition-all\n          h-[1px] w-[100%] bg-[#bcbcbc] origin-left bg-[--background-color]",
              transition: {
                delay: (index + 2) * 0.45,
                // delay: index * 0.045,
                // ease: "easeInOut",
                // ease: [0.12, 0, 0.39, 0],
                // ease: "easeInOut",
                // duration: 0.55,
                ease: [0.22, 0, 0.36, 1],
                duration: 0.85
                // type: "spring",
                // stiffness: 50,
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: `
        select-none
        dropdown-label
        font-opensans 
        font-semibold 
        leading-[30px] 
        text-black 
        text-[17px] 
        uppercase 
        p-[34px] py-[24px] 
        border-t-0
        pt-[23px]
        bg-white border-[1px] 
        border-[#bcbcbc] 

     cursor-pointer
     lg:px-[50px]
        ${isOpen ? "open" : ""}`,
              onClick: onToggle,
              children: title
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `input-list relative md:absolute opacity-0  px-[34px] border-[1px]  w-[99%] ml-[.5%]
        border-[#bcbcbc]  bg-white  transition-all duration-300
        h-0 block-0 pointer-events-none z-0 
        mt-[-5px]
md:h-auto
scale-[.975]
lg:px-[50px]

        ${isOpen && `!ml-0 !w-[100%] !border-t-[0] !mt-0 pointer-events-auto block opacity-100  py-[30px] h-[auto!important] !scale-[1]`}
        `,
            id: `${isOpen ? "open-list" : ""}`,
            children: checkboxContent.map((checkbox, index2) => /* @__PURE__ */ jsx("div", { className: "drop-down-item", children: checkbox }, index2))
          }
        )
      ]
    }
  );
}

const FilterDisplayBox = ({ filteredData, boxId, checkboxContent }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: checkboxContent && checkboxContent.map((checkbox, index) => /* @__PURE__ */ jsx("div", { className: `drop-down-item ${boxId}`, children: checkbox }, index)) });
};

function ProgramList({
  data,
  redirectData,
  areaOfStudy,
  programOptionsClean,
  additionalOptions
}) {
  const combinedData = data.programs.nodes.concat(
    redirectData.programRedirects.nodes.map((item) => ({
      program: item.redirectProgram,
      title: item.title
    }))
  );
  const dataNodes = combinedData;
  const [animatedCards, setAnimatedCards] = useState(false);
  const [filteredData, setFilteredData] = useState(dataNodes);
  const [selectedSchoolFilters, setSelectedSchoolFilters] = useState([]);
  const [selectedProgramOptionFilters, setSelectedProgramOptionFilters] = useState([]);
  const [selectedAdditionalOptionFilters, setSelectedAdditionalOptionFilters] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [programView, setProgramView] = useState("");
  const wrapperRef = useRef(null);
  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
    setAnimatedCards(true);
  };
  const handleClickOutside = (event) => {
    if (event.type === "click" && wrapperRef.current && !wrapperRef.current.contains(event.target) || event.type === "keydown" && event.key === "Escape") {
      setOpenAccordion(null);
      const openList = document.getElementById("open-list");
      if (openList) {
        openList.removeAttribute("id");
      }
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    filterData();
  }, [
    selectedSchoolFilters,
    selectedProgramOptionFilters,
    selectedAdditionalOptionFilters,
    searchText
  ]);
  const filterData = () => {
    let newData = dataNodes.filter(filterByText);
    if (selectedSchoolFilters.length > 0) {
      newData = newData.filter(filterBySelectedSchools);
    }
    if (selectedProgramOptionFilters.length > 0) {
      newData = newData.filter(filterBySelectedProgramOptions);
    }
    if (selectedAdditionalOptionFilters.length > 0) {
      newData = newData.filter(filterBySelectedAdditionalOptions);
    }
    newData = newData.sort((a, b) => a.title.localeCompare(b.title));
    setFilteredData(newData);
  };
  const filterByText = (program) => {
    const lowerCaseText = searchText.toLowerCase();
    return program.title.toLowerCase().includes(lowerCaseText) || program.program.school.toString().toLowerCase().includes(lowerCaseText);
  };
  const filterBySelectedSchools = (program) => (
    // selectedSchoolFilters.includes(program.program.school.toString());
    (selectedSchoolFilters ?? []).includes(program.program.school.toString())
  );
  const filterBySelectedProgramOptions = (program) => selectedProgramOptionFilters.some(
    (filter) => (
      // program.program.programOptions.includes(filter)
      (program.program.programOptions ?? []).includes(filter)
    )
  );
  const filterBySelectedAdditionalOptions = (program) => selectedAdditionalOptionFilters.some(
    (filter) => (
      // program.program.additionalOptions.includes(filter)
      (program.program.additionalOptions ?? []).includes(filter)
    )
  );
  const handleSchoolCheckboxChange = (event) => updateSelectedFilters(
    event.target.value,
    setSelectedSchoolFilters,
    selectedSchoolFilters
  );
  const handleProgramOptionCheckboxChange = (event) => updateSelectedFilters(
    event.target.value,
    setSelectedProgramOptionFilters,
    selectedProgramOptionFilters
  );
  const handleAdditionalOptionCheckboxChange = (event) => updateSelectedFilters(
    event.target.value,
    setSelectedAdditionalOptionFilters,
    selectedAdditionalOptionFilters
  );
  const updateSelectedFilters = (value, setSelectedFilters, selectedFilters) => {
    let updatedFilters = [...selectedFilters];
    if (updatedFilters.includes(value)) {
      updatedFilters = updatedFilters.filter((filter) => filter !== value);
    } else {
      updatedFilters.push(value);
    }
    setSelectedFilters(updatedFilters);
  };
  const handleFilterChange = (event) => {
    setSearchText(event.target.value);
    setAnimatedCards(true);
  };
  const clearSearchText = () => {
    setSearchText("");
    const textFilterInput = document.getElementById("text-filter");
    if (textFilterInput) {
      textFilterInput.value = "";
    }
  };
  const renderCheckboxes = (options, onClickHandler, selectedFilters) => options.map((option, index) => /* @__PURE__ */ jsxs(
    "p",
    {
      className: `${onClickHandler.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        ${selectedFilters?.includes(option) ? "active" : ""}`,
      id: `${option.replace(/\s+/g, "-").toLowerCase()}-filter`,
      onClick: () => onClickHandler({ target: { value: option } }),
      children: [
        option,
        /* @__PURE__ */ jsx("img", { className: "close-button", src: "/close-item.svg" })
      ]
    },
    option + index
  ));
  return /* @__PURE__ */ jsxs("div", { className: "program-wrapper inner-width", children: [
    /* @__PURE__ */ jsxs("div", { id: "input-and-filter-wrapper", className: "", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          id: "filters-bg",
          className: "bg-lightgrey sm:bg-transparent flex flex-col gap-[20px] p-[35px] max-w-[1128px] mx-auto\n          sm:gap-[25px]\n        sm:pt-[50px]\n        md:pt-[75px]\n        \n        lg:px-0",
          children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "text-filter",
                className: " w-[100%] font-opensans text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-light border-[1px] \n        border-[#bcbcbc] placeholder-[#000000]\n        lg:px-[50px]",
                onChange: handleFilterChange,
                placeholder: "Search by keyword"
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                ref: wrapperRef,
                id: "filter-wrapper",
                className: "flex flex-col gap-[20px] sm:gap-[30px] \n            sm:grid sm:grid-cols-2\n            md:flex\n            md:gap-[40px] md:flex-row",
                children: [
                  /* @__PURE__ */ jsx(
                    DropDownAccordion,
                    {
                      checkboxContent: renderCheckboxes(
                        areaOfStudy,
                        handleSchoolCheckboxChange,
                        selectedSchoolFilters
                      ),
                      title: "Area of Study",
                      isOpen: openAccordion === 0,
                      onToggle: () => handleAccordionToggle(0),
                      index: 0
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    DropDownAccordion,
                    {
                      checkboxContent: renderCheckboxes(
                        programOptionsClean,
                        handleProgramOptionCheckboxChange,
                        selectedProgramOptionFilters
                      ),
                      title: "Degree",
                      isOpen: openAccordion === 1,
                      onToggle: () => handleAccordionToggle(1),
                      index: 1
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    DropDownAccordion,
                    {
                      checkboxContent: renderCheckboxes(
                        additionalOptions,
                        handleAdditionalOptionCheckboxChange,
                        selectedAdditionalOptionFilters
                      ),
                      title: "Options",
                      isOpen: openAccordion === 2,
                      onToggle: () => handleAccordionToggle(2),
                      index: 2
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx("hr", { className: "hidden sm:block border-[#bcbcbc]" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          id: "display-box-wrapper",
          className: "flex flex-col sm:flex-row justify-between min-h-[50px]\n          max-w-[1128px] mx-auto px-[35px] lg:px-0\n\n          ",
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                id: "left-content",
                className: "flex flex-row flex-wrap  gap-[10px]",
                children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 filtered-display-box", children: [
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "\n              basis-[100%]\n              font-bitter \n              text-[14px]\n              leading-[26px] font-normal pr-[15px]\n              pt-[25px]\n              sm:pt-0\n              sm:basis-auto\n              sm:text-[17px] ",
                      children: "Filtered by:"
                    }
                  ),
                  !searchText && selectedSchoolFilters.length == 0 && selectedProgramOptionFilters.length == 0 && selectedAdditionalOptionFilters.length == 0 && /* @__PURE__ */ jsx("div", { className: "drop-down-item", children: /* @__PURE__ */ jsx("p", { id: "all-text-filter", children: "All" }) }),
                  searchText && /* @__PURE__ */ jsx("div", { className: "drop-down-item", children: /* @__PURE__ */ jsxs("p", { id: "search-text-filter", onClick: clearSearchText, children: [
                    searchText,
                    /* @__PURE__ */ jsx("img", { className: "close-button", src: "/close-item.svg" })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    FilterDisplayBox,
                    {
                      boxId: "area-of-study",
                      checkboxContent: renderCheckboxes(
                        selectedSchoolFilters,
                        handleSchoolCheckboxChange,
                        selectedSchoolFilters
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    FilterDisplayBox,
                    {
                      boxId: "degree",
                      checkboxContent: renderCheckboxes(
                        selectedProgramOptionFilters,
                        handleProgramOptionCheckboxChange,
                        selectedProgramOptionFilters
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    FilterDisplayBox,
                    {
                      boxId: "options",
                      checkboxContent: renderCheckboxes(
                        selectedAdditionalOptionFilters,
                        handleAdditionalOptionCheckboxChange,
                        selectedAdditionalOptionFilters
                      )
                    }
                  )
                ] })
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                id: "right-content",
                className: "flex flex-row sm:h-[50px] items-center \n     \n            ",
                children: [
                  /* @__PURE__ */ jsxs(
                    "p",
                    {
                      className: "font-opensans font-normal text-[14px] leading-[26px]\n                   pt-[40px]\n                   pb-[20px]\n                   sm:pb-0\n            sm:pt-0",
                      children: [
                        "Displaying ",
                        /* @__PURE__ */ jsxs("strong", { children: [
                          filteredData.length,
                          " results"
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.img,
                    {
                      src: "/grid-icon.svg",
                      alt: "Grid View",
                      className: "hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer",
                      onClick: () => setProgramView(""),
                      whileHover: { scale: 1.025, opacity: 1 },
                      whileTap: { scale: 0.9 },
                      animate: { opacity: programView != "list" ? 1 : 0.5 }
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.img,
                    {
                      src: "/list-icon.svg",
                      alt: "List View",
                      className: "hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer",
                      onClick: () => setProgramView("list"),
                      whileHover: { scale: 1.025, opacity: 1 },
                      whileTap: { scale: 0.9 },
                      animate: { opacity: programView === "list" ? 1 : 0.5 }
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    ] }),
    filteredData && filteredData.length === 0 && /* @__PURE__ */ jsxs(
      "div",
      {
        id: "no-results",
        className: "bg-lightgrey max-w-[1128px] \n          p-[40px] mx-[30px]  \n          mt-0\n          sm:mt-[50px]\n          lg:mx-auto\n          md:py-[75px] md:px-[100px] ",
        children: [
          /* @__PURE__ */ jsx("h3", { className: "font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]", children: "Please try your search again" }),
          /* @__PURE__ */ jsx("p", { className: "font-bitter font-normal leading-[35px] text-[18px] py-[18px]", children: "Your search results do not match any available programs." }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsxs("p", { className: "font-bitter font-normal leading-[35px] text-[18px] py-[18px]", children: [
            "Need help finding a program? Contact",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "underline text-primarylinkblue",
                href: "mailto:admiss@tcnj.edu",
                children: "admiss@tcnj.edu"
              }
            ),
            ",",
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                className: "underline text-primarylinkblue",
                href: "tel:1-609-771-2131",
                children: "609.771.2131"
              }
            ),
            ", to get more information."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        id: "filtered-programs-wrapper",
        className: `${programView === "list" ? "list-view flex flex-col md:gap-[25px]" : `grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 `}
        gap-[20px]
        
           max-w-[1128px] mx-auto
           pb-[50px]
        p-[35px]
        pt-0
        sm:p-[35px]
        sm:pt-[35px]
        sm:gap-[30px]
        md:gap-[40px]
        md:pb-[100px]
        lg:px-0
        `,
        initial: !animatedCards ? { opacity: 0, y: 5 } : { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: {
          delay: 0.15,
          ease: "easeOut",
          duration: 0.3
          // type: "spring",
          // stiffness: 50,
        },
        children: filteredData && filteredData.map((program, index) => /* @__PURE__ */ jsx(
          ProgramCard,
          {
            program,
            listType: programView,
            index,
            animationState: animatedCards
          },
          program.program.slug + index
        ))
      }
    )
  ] });
}

function IntroSection() {
  const [accellOpen, setAccellOpen] = useState(false);
  const [dualOpen, setDualOpen] = useState(false);
  const accellText = useRef(null);
  const dualText = useRef(null);
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
      className: "w-[100%] h-[562px] relative \n      z-[1000]\n       border-[20px] sm:border-[35px] border-b-0 sm:border-b-0 border-tcnjyellow sm:h-[700px] md:h-[485px]",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-[1128px] mx-auto relative z-10 text-white p-[35px] pl-[30px] pr-[30px] text-center sm:pt-[77px] md:pt-[67px] md:text-left lg:px-0", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              id: "breadcrumbs",
              className: "font-bitter text-[17px] leading-[20px] sm:text-[18px] sm:leading-[26px] sm:text-left",
              children: [
                /* @__PURE__ */ jsx("a", { children: "Home" }),
                " / Explore Undergraduate Programs"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.h1,
            {
              className: "pt-[100px] font-alfaslab text-tcnjyellow text-[32px] leading-[38px] pb-[10px] sm:pt-[150px] sm:text-[55px] sm:leading-[55px] md:text-[60px] md:leading-[65px] md:pt-[85px]",
              initial: { opacity: 0, y: -5 },
              animate: { opacity: 1, y: 0 },
              transition: {
                delay: 0.25,
                ease: "easeOut",
                duration: 0.35
              },
              children: "Explore Undergraduate Programs"
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "font-domine text-[20px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[23px] font-normal",
              initial: { opacity: 0, y: -5 },
              animate: { opacity: 1, y: 0 },
              transition: {
                delay: 0.75,
                ease: "easeOut",
                duration: 0.35
              },
              children: [
                "Search by keyword or browse programs by selecting an area of study, degree type, and/or format. TCNJ students also have an option to pursue accelerated programs",
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
                          className: "top-arrow-popup relative z-[1000] left-0 bg-white w-[100%]\n                max-w-[1128px] mx-[15px] sm:mx-[30px] lg:mx-auto text-white  pl-[30px] pr-[30px] text-center  md:text-left lg:px-0 cursor-default",
                          onClick: handlePopupClick,
                          children: [
                            /* @__PURE__ */ jsxs("p", { className: "accell-text-block py-[45px] px-[15px] sm:px-[45px] font-opensans text-[16px] leading-[24px] text-black", children: [
                              /* @__PURE__ */ jsx("strong", { children: "Accelerated bachelor’s to master’s degrees" }),
                              " ",
                              "are available in business, counseling, English, public health, public policy, and teacher education. Admission into the program’s graduate portion is based on undergraduate performance."
                            ] }),
                            /* @__PURE__ */ jsx(
                              "img",
                              {
                                className: "close-button",
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
                      src: "/info-icon.svg",
                      onClick: () => openAccellPop(accellText)
                    }
                  )
                ] }),
                "and dual degrees.",
                /* @__PURE__ */ jsxs("span", { className: "inline-block mr-[5px] ml-[-2px] relative", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `popup-container-two fixed top-0 left-0
              bg-slate-600 w-[100%] h-[100%] ${dualOpen && "active"}`,
                      children: /* @__PURE__ */ jsxs(
                        "div",
                        {
                          ref: dualText,
                          className: "top-arrow-popup relative z-[1000] left-0 bg-white w-[100%]\n                max-w-[1128px] mx-[15px] sm:mx-[30px] lg:mx-auto text-white  pl-[30px] pr-[30px] text-center  md:text-left lg:px-0 cursor-default",
                          onClick: handlePopupClick,
                          children: [
                            /* @__PURE__ */ jsxs("p", { className: " py-[45px] px-[15px] sm:px-[45px] font-opensans text-[16px] leading-[24px] text-black", children: [
                              /* @__PURE__ */ jsx("strong", { children: "Dual degrees" }),
                              " from affiliated universities are available in law, medicine, optometry, pharmacy, physical therapy, social service, and speech-language pathology. Admission into the program's graduate portion is based on undergraduate performance."
                            ] }),
                            /* @__PURE__ */ jsx(
                              "img",
                              {
                                className: "close-button",
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
                      src: "/info-icon.svg",
                      onClick: () => openAccellPop(dualText)
                    }
                  )
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("picture", { id: "hero-image", className: "absolute top-0 left-0 z-0 w-[100%]", children: [
          /* @__PURE__ */ jsx(
            "source",
            {
              srcSet: "https://tcnj.edu/custom/undergraduate/img/hero-desktop.jpg",
              type: "image/jpeg",
              media: "(min-width: 901px)"
            }
          ),
          /* @__PURE__ */ jsx(
            "source",
            {
              srcSet: "https://tcnj.edu/custom/undergraduate/img/hero-tablet.jpg",
              type: "image/jpeg",
              media: "(min-width: 551px)"
            }
          ),
          /* @__PURE__ */ jsx(
            "source",
            {
              srcSet: "https://tcnj.edu/custom/undergraduate/img/hero-mobile.jpg",
              type: "image/webp"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "https://tcnj.edu/custom/undergraduate/img/hero-mobile.jpg",
              alt: "TCNJ scenery",
              className: "w-[100%] h-[542px] sm:h-[665px] md:h-[450px] object-cover"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bg-black absolute w-[100%] h-[100%] top-0 left-0 z-[5] opacity-[.5] sm:opacity-[.25]" })
      ]
    }
  );
}

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const data = await wpquery({
    query: ` query ProgramsListing {
              programs(first:120) {
                nodes {
                  program {
                    degreeType
                    slug
                    school
                    programOptions
                    additionalOptions
         
                  }
                  title
                }
              }
            }`
  });
  const redirectData = await wpquery({
    query: `query RedirectList {
            programRedirects(first:120) {
              nodes {
                  redirectProgram {
                    degreeType
                    redirecturl
                    slug
                    school
                    programOptions
                    additionalOptions
              
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
  const areaOfStudy = programOptions.page.program.school;
  const programOptionsClean = programOptions.page.program.programOptions;
  const additionalOptions = programOptions.page.program.additionalOptions;
  ({
    ...data,
    ...redirectData
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Undergraduate Programs at TCNJ" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header> ${renderComponent($$result2, "TitleAndNav", TitleAndNav, {})} ${renderComponent($$result2, "IntroSection", IntroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/IntroSection", "client:component-export": "default" })} <!-- <Intro /> --> </header> <main> <div class="border-[20px] sm:border-[35px] border-t-0 sm:border-t-0 border-tcnjyellow"> ${renderComponent($$result2, "ProgramList", ProgramList, { "data": data, "redirectData": redirectData, "areaOfStudy": areaOfStudy, "programOptionsClean": programOptionsClean, "additionalOptions": additionalOptions, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/ProgramList", "client:component-export": "default" })} </div> ${renderComponent($$result2, "NextStepFooter", NextStepFooter, {})} </main> ` })}`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/index.astro", undefined);

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
