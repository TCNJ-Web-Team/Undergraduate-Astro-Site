import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
/* empty css                         */

const ProgramCard = ({
  program,
  listType,
  index,
  animationState,
  gradCheckCard
}) => {
  const [isHovered] = useState(false);
  const [pulsing, setPulsing] = useState(true);
  const activeHover = isHovered ? "active-hover" : "";
  const listOnly = listType == "list" ? true : false;
  useEffect(() => {
    setTimeout(() => setPulsing(false), 1200);
  });
  const { slug, redirecturl, programOptions, additionalOptions } = program.program;
  const { title } = program;
  const processedRedirectUrl = redirecturl ? redirecturl.replace(
    "https://undergraduate-astro-site-t6y1l.kinsta.page",
    ""
  ) : `./${slug}`;
  const progOptionSort = {
    Major: 0,
    "Major/Specialization": 0,
    Minor: 1,
    Certificate: 2,
    "Three-Year Bachelor's": 3,
    Accelerated: 4,
    "Dual Degree": 5,
    "Teacher Education": 6,
    Undeclared: 7,
    Prelaw: 8,
    Premed: 9,
    "Premed/Prehealth": 9
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `program-card filter border-[1px] 
        border-[#bcbcbc] drop-shadow-none transition-all duration-300 bg-white ${activeHover}
      ${pulsing ? "pulse" : ""}`,
      id: slug,
      children: /* @__PURE__ */ jsxs(
        motion.a,
        {
          className: `program-card-gtm program-link block  px-[30px] pt-[35px] pb-[40px] sm:min-h-[300px]
        sm:px-[35px]
        lg:px-[50px]
        lg:pt-[48px]
         ${listOnly && "md:flex md:flex-row md:justify-between md:min-h-0 md:items-center md:py-[35px] lg:!pt-[35px]"}`,
          href: gradCheckCard ? processedRedirectUrl.includes("https") ? processedRedirectUrl : `./graduate/${processedRedirectUrl}` : processedRedirectUrl,
          target: processedRedirectUrl.includes("http") ? "_blank" : "_self",
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
                className: "font-domine font-bold \n        text-[19px] leading-[28px]\n        sm:text-[21px] sm:leading-[30px]",
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
                className: `icon-container flex flex-wrap gap-x-[20px] gap-y-[10px] ${listOnly && "md:max-w-[260px] md:w-[100%]"}`,
                children: (programOptions || additionalOptions) && [...programOptions || [], ...additionalOptions || []].slice().sort((a, b) => progOptionSort[a] - progOptionSort[b]).map((option, index2) => {
                  const formatOption = (option2) => {
                    return option2.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                  };
                  const getImageDimensions = (optionType) => {
                    const sanitizedOption = optionType.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
                    switch (sanitizedOption) {
                      case "accelerated":
                        return "w-[23.658px] h-[15px]";
                      case "certificate":
                        return "w-[14.881px] h-[15px]";
                      case "dual-degree":
                        return "w-[15.343px] h-[15px]";
                      case "major":
                        return "w-[13.865px] h-[15px]";
                      case "majorspecialization":
                        return "w-[13.865px] h-[15px]";
                      case "minor":
                        return "w-[14.041px] h-[11px]";
                      case "prelaw":
                        return "w-[18.63px] h-[15px]";
                      case "premed":
                        return "w-[15px] h-[15px]";
                      case "premedprehealth":
                        return "w-[15px] h-[15px]";
                      case "teacher-education":
                        return "w-[14.236px] h-[15px]";
                      case "three-year-bachelors":
                        return "w-[13.391px] h-[15px]";
                      case "language":
                        return "w-[17.641px] h-[14.984px]";
                      case "undeclared-option":
                        return "w-[11.223px] h-[15px]";
                      default:
                        return "w-auto h-auto max-h-[15px]";
                    }
                  };
                  return /* @__PURE__ */ jsxs(
                    "p",
                    {
                      className: `font-opensans text-[14px] leading-[15px] md:leading-[25px] inline-flex gap-x-[5px] items-center ${option.length > 15 && "col-span-full"}`,
                      children: [
                        /* @__PURE__ */ jsx(
                          "img",
                          {
                            loading: "lazy",
                            src: `/card-icons/${formatOption(option)}.svg`,
                            alt: option,
                            className: `${getImageDimensions(option)} object-contain`
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

const FilterDisplayBox = ({ boxId, checkboxContent }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: checkboxContent && checkboxContent.map((checkbox, index) => /* @__PURE__ */ jsx("div", { className: `drop-down-item ${boxId}`, children: checkbox }, index)) });
};

function ProgramList({
  data,
  redirectData,
  areaOfStudy,
  programOptionsClean,
  additionalOptions,
  gradCheck
}) {
  let combinedData;
  let gradCheckCard = false;
  if (gradCheck) {
    gradCheckCard = true;
    combinedData = data.graduatePrograms.nodes.concat(
      redirectData.gradProgramsRedirects.nodes.map((item) => {
        return {
          program: {
            slug: item.graduateProgramRedirect.redirectUrl,
            redirecturl: item.graduateProgramRedirect.redirectUrl,
            programOptions: item.graduateProgramRedirect.programOptions,
            additionalOptions: item.graduateProgramRedirect.additionalOptions,
            degreeType: item.graduateProgramRedirect.degreeType,
            school: item.graduateProgramRedirect.school,
            keywords: item.graduateProgramRedirect.keywords
          },
          title: item.title
        };
      })
    );
  } else {
    combinedData = data.programs.nodes.concat(
      redirectData.programRedirects.nodes.map((item) => ({
        program: item.redirectProgram,
        title: item.title
      }))
    );
  }
  const dataNodes = combinedData;
  const abbreviatedData = dataNodes.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 12);
  const [displayFullList, setDisplayFullList] = useState(false);
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
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
    const tryToRestoreScroll = () => {
      try {
        const savedScrollY = sessionStorage.getItem("programListScrollY");
        if (savedScrollY !== null) {
          if (parseInt(savedScrollY, 10) > 100) {
            setDisplayFullList(true);
          }
        }
      } catch (e) {
      }
    };
    if (hasMounted) {
      tryToRestoreScroll();
    }
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            try {
              sessionStorage.setItem(
                "programListScrollY",
                window.scrollY.toString()
              );
            } catch (e) {
            }
          }
          const scrollThreshold = 100;
          if (window.scrollY > scrollThreshold && !displayFullList) {
            setDisplayFullList(true);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMounted, displayFullList]);
  useEffect(() => {
    const fullListData = dataNodes.sort(
      (a, b) => a.title.localeCompare(b.title)
    );
    setFilteredData(fullListData);
  }, []);
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
    const schoolArray = Array.isArray(program.program.school) ? program.program.school : [program.program.school];
    const hasMatchingKeywords = program.program.keywords ? program.program.keywords.toLowerCase().includes(lowerCaseText) : false;
    return program.title.toLowerCase().includes(lowerCaseText) || schoolArray.some(
      (school) => school.toString().toLowerCase().includes(lowerCaseText)
    ) || hasMatchingKeywords;
  };
  const filterBySelectedSchools = (program) => {
    const schoolArray = Array.isArray(program.program.school) ? program.program.school : [program.program.school];
    return selectedSchoolFilters.some((filter) => schoolArray.includes(filter));
  };
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
  const handleFullListClick = () => {
    setDisplayFullList(true);
  };
  const handleFilterChange = (event) => {
    handleFullListClick();
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
        flex items-center justify-between gap-[10px]
        ${selectedFilters?.includes(option) ? "active" : ""}`,
      id: `${option.replace(/\s+/g, "-").toLowerCase()}-filter`,
      onClick: () => onClickHandler({ target: { value: option } }),
      children: [
        option,
        /* @__PURE__ */ jsx("img", { className: "close-button", alt: "close", src: "/close-item.svg" })
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
                className: " w-[100%] font-opensans text-[16px] sm:text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-[400] border-[1px] \n        border-[#bcbcbc] placeholder-[#000000]\n        lg:px-[50px]",
                onChange: handleFilterChange,
                onClick: () => handleFullListClick(),
                placeholder: "Search by keyword"
              }
            ),
            /* @__PURE__ */ jsxs(
              "div",
              {
                ref: wrapperRef,
                id: "filter-wrapper",
                className: "flex flex-col gap-[20px] sm:gap-[30px] \n            sm:grid sm:grid-cols-2\n            md:flex\n            md:gap-[40px] md:flex-row",
                onClick: () => handleFullListClick(),
                children: [
                  /* @__PURE__ */ jsx(
                    DropDownAccordion,
                    {
                      checkboxContent: renderCheckboxes(
                        areaOfStudy,
                        handleSchoolCheckboxChange,
                        selectedSchoolFilters
                      ),
                      title: "Schools",
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
                      title: "Programs",
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
                onClick: () => setDisplayFullList(true),
                id: "left-content",
                className: "flex flex-row flex-wrap  gap-[10px]",
                children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 filtered-display-box", children: [
                  /* @__PURE__ */ jsx(
                    "p",
                    {
                      className: "\n              basis-[100%]\n              font-domine \n              text-[14px]\n              leading-[26px] font-normal pr-[15px]\n              pt-[25px]\n              sm:pt-0\n              sm:basis-auto\n              sm:text-[17px] ",
                      children: "Filtered by:"
                    }
                  ),
                  !searchText && selectedSchoolFilters.length == 0 && selectedProgramOptionFilters.length == 0 && selectedAdditionalOptionFilters.length == 0 && /* @__PURE__ */ jsx("div", { className: "drop-down-item", children: /* @__PURE__ */ jsx("p", { id: "all-text-filter", children: "All" }) }),
                  searchText && /* @__PURE__ */ jsx("div", { className: "drop-down-item", children: /* @__PURE__ */ jsxs("p", { id: "search-text-filter", onClick: clearSearchText, children: [
                    searchText,
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        className: "close-button",
                        alt: "close",
                        src: "/close-item.svg"
                      }
                    )
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
                onClick: () => setDisplayFullList(true),
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
                      className: "hidden md:block h-[20px] w-[24.781px] ml-[25px] cursor-pointer",
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
                      className: "hidden md:block h-[20px] w-[25.406px] ml-[5px] cursor-pointer",
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
          /* @__PURE__ */ jsx("p", { className: "font-domine font-normal leading-[35px] text-[18px] py-[18px]", children: "Your search results do not match any available programs." }),
          /* @__PURE__ */ jsx("hr", {}),
          /* @__PURE__ */ jsxs("p", { className: "font-domine font-normal leading-[35px] text-[18px] py-[18px]", children: [
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
        initial: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          typeof navigator !== "undefined" ? navigator.userAgent : ""
        ) ? { opacity: 1, y: 0 } : !animatedCards ? { opacity: 0, y: 5 } : { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: {
          delay: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            typeof navigator !== "undefined" ? navigator.userAgent : ""
          ) ? 0 : 0.15,
          ease: "easeOut",
          duration: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            typeof navigator !== "undefined" ? navigator.userAgent : ""
          ) ? 0 : 0.3
        },
        children: !displayFullList && abbreviatedData ? abbreviatedData.map((program, index) => /* @__PURE__ */ jsx(
          ProgramCard,
          {
            program,
            listType: programView,
            index,
            animationState: animatedCards,
            gradCheckCard
          },
          program.program.slug + index
        )) : filteredData.map((program, index) => /* @__PURE__ */ jsx(
          ProgramCard,
          {
            program,
            listType: programView,
            index,
            animationState: animatedCards,
            gradCheckCard
          },
          program.program.slug + index
        ))
      }
    )
  ] });
}

export { ProgramList as P };
