import { useState, useEffect, useRef } from "react";
import ProgramCard from "./ProgramCard"; // Import the new component
import DropDownAccordion from "./DropDownAccordion";
import { FilterDisplayBox } from "./FilterDisplayBox";
import { motion } from "framer-motion";

export default function ProgramList({
  data,
  redirectData,
  areaOfStudy,
  programOptionsClean,
  additionalOptions,
}) {
  // const combinedData = data.programs.nodes.concat(
  //   redirectData.programRedirects.nodes.map(item => ({
  //     program: item.redirectProgram
  //   }))
  // );
  //   console.log(data);
  //   console.log(combinedData);

  // console.log(data.programs.nodes);
  const combinedData = data.programs.nodes.concat(
    redirectData.programRedirects.nodes.map((item) => ({
      program: item.redirectProgram,
      title: item.title,
    }))
  );
  // console.log(combinedData);
  // console.log(redirectData.programRedirects.nodes);
  const dataNodes = combinedData;
  const [cardAnimate, setCardAnimate] = useState(false);
  const [filteredData, setFilteredData] = useState(dataNodes);
  const [selectedSchoolFilters, setSelectedSchoolFilters] = useState([]);
  const [selectedProgramOptionFilters, setSelectedProgramOptionFilters] =
    useState([]);
  const [selectedAdditionalOptionFilters, setSelectedAdditionalOptionFilters] =
    useState([]);
  const [searchText, setSearchText] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);
  const [programView, setProgramView] = useState(""); // ["grid", "list"
  const wrapperRef = useRef(null);
  const cardContainerVariants = {
    initial: {
      transition: {
        delayChildren: 0.5,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.9,
        delayChildren: 0.5,
      },
    },
  };
  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (
      (event.type === "click" &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)) ||
      (event.type === "keydown" && event.key === "Escape")
    ) {
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
    searchText,
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
    return (
      program.title.toLowerCase().includes(lowerCaseText) ||
      program.program.school.toString().toLowerCase().includes(lowerCaseText)
    );
  };

  const filterBySelectedSchools = (program) =>
    // selectedSchoolFilters.includes(program.program.school.toString());
    (selectedSchoolFilters ?? []).includes(program.program.school.toString());

  const filterBySelectedProgramOptions = (program) =>
    selectedProgramOptionFilters.some((filter) =>
      // program.program.programOptions.includes(filter)
      (program.program.programOptions ?? []).includes(filter)
    );

  const filterBySelectedAdditionalOptions = (program) =>
    selectedAdditionalOptionFilters.some((filter) =>
      // program.program.additionalOptions.includes(filter)
      (program.program.additionalOptions ?? []).includes(filter)
    );

  const handleSchoolCheckboxChange = (event) =>
    updateSelectedFilters(
      event.target.value,
      setSelectedSchoolFilters,
      selectedSchoolFilters
    );

  const handleProgramOptionCheckboxChange = (event) =>
    updateSelectedFilters(
      event.target.value,
      setSelectedProgramOptionFilters,
      selectedProgramOptionFilters
    );

  const handleAdditionalOptionCheckboxChange = (event) =>
    updateSelectedFilters(
      event.target.value,
      setSelectedAdditionalOptionFilters,
      selectedAdditionalOptionFilters
    );

  const updateSelectedFilters = (
    value,
    setSelectedFilters,
    selectedFilters
  ) => {
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
  };
  const clearSearchText = () => {
    setSearchText("");
    const textFilterInput = document.getElementById("text-filter");
    if (textFilterInput) {
      textFilterInput.value = "";
    }
  };
  // const renderCheckboxes = (options, onChangeHandler) =>
  //   options.map((option, index) => (
  //     <label
  //       className={`${onChangeHandler.name}-filter input-container`}
  //       id={`${option.replace(/\s+/g, "-").toLowerCase()}-filter`}
  //       htmlFor={option}
  //       key={option + index}
  //     >
  //       {option}
  //       <input type="checkbox" value={option} onChange={onChangeHandler} />
  //       <span className="checkmark" />
  //     </label>
  //   ));
  const renderCheckboxes = (options, onClickHandler, selectedFilters) =>
    options.map((option, index) => (
      <p
        className={`${onClickHandler.name}-filter input-container 
        font-opensans text-[13px] text-[#2e2e2e] leading-[16px] font-medium
        ${selectedFilters?.includes(option) ? "active" : ""}`}
        id={`${option.replace(/\s+/g, "-").toLowerCase()}-filter`}
        key={option + index}
        onClick={() => onClickHandler({ target: { value: option } })}
      >
        {option}
        <img className="close-button" src="/close-item.svg" />
      </p>
    ));
  // console.log(filteredData.length);
  // console.log(filteredData);
  // console.log(selectedSchoolFilters);
  // console.log(programView);
  return (
    <div className="program-wrapper inner-width">
      <div
        id="input-and-filter-wrapper"
        className="flex flex-col gap-[20px] bg-lightgrey p-[35px] max-w-[1128px] mx-auto
        sm:pt-[50px]
        md:pt-[75px]
        md:bg-transparent
        lg:px-0"
      >
        <input
          type="text"
          id="text-filter"
          className=" w-[100%] font-opensans text-[17px] p-[22px] pr-[34px] pl-[34px] uppercase font-light border-[1px] 
        border-[#bcbcbc] "
          onChange={handleFilterChange}
          placeholder="Search by keyword"
        />
        <div
          ref={wrapperRef}
          id="filter-wrapper"
          className="flex flex-col gap-[30px] sm:gap-[40px] md:flex-row"
        >
          <DropDownAccordion
            checkboxContent={renderCheckboxes(
              areaOfStudy,
              handleSchoolCheckboxChange,
              selectedSchoolFilters
            )}
            title="Area of Study"
            isOpen={openAccordion === 0}
            onToggle={() => handleAccordionToggle(0)}
          />

          <DropDownAccordion
            checkboxContent={renderCheckboxes(
              programOptionsClean,
              handleProgramOptionCheckboxChange,
              selectedProgramOptionFilters
            )}
            title="Degree"
            isOpen={openAccordion === 1}
            onToggle={() => handleAccordionToggle(1)}
          />
          <DropDownAccordion
            checkboxContent={renderCheckboxes(
              additionalOptions,
              handleAdditionalOptionCheckboxChange,
              selectedAdditionalOptionFilters
            )}
            title="Options"
            isOpen={openAccordion === 2}
            onToggle={() => handleAccordionToggle(2)}
          />
        </div>
        <hr />
        {/* Filter boxes go here */}
        <div
          id="display-box-wrapper"
          className="flex flex-row justify-between min-h-[50px]"
        >
          <div
            id="left-content"
            className="flex flex-row flex-wrap  gap-[10px]"
          >
            <div className="relative z-10 filtered-display-box">
              <p className="font-bitter text-[17px] leading-[26px] font-normal pr-[15px]">
                Filtered by:
              </p>
              {!searchText &&
                selectedSchoolFilters.length == 0 &&
                selectedProgramOptionFilters.length == 0 &&
                selectedAdditionalOptionFilters.length == 0 && (
                  <div className="drop-down-item">
                    <p id="all-text-filter">
                      All
                      {/* <img className="close-button" src="/close-item.svg" /> */}
                    </p>
                  </div>
                )}

              {searchText && (
                <div className="drop-down-item">
                  <p id="search-text-filter" onClick={clearSearchText}>
                    {searchText}
                    <img className="close-button" src="/close-item.svg" />
                  </p>
                </div>
              )}
              <FilterDisplayBox
                boxId="area-of-study"
                // filteredData={selectedSchoolFilters}
                checkboxContent={renderCheckboxes(
                  selectedSchoolFilters,
                  handleSchoolCheckboxChange,
                  selectedSchoolFilters
                )}
              />
              <FilterDisplayBox
                boxId="degree"
                // filteredData={selectedProgramOptionFilters}
                checkboxContent={renderCheckboxes(
                  selectedProgramOptionFilters,
                  handleProgramOptionCheckboxChange,
                  selectedProgramOptionFilters
                )}
              />
              <FilterDisplayBox
                boxId="options"
                // filteredData={selectedAdditionalOptionFilters}
                checkboxContent={renderCheckboxes(
                  selectedAdditionalOptionFilters,
                  handleAdditionalOptionCheckboxChange,
                  selectedAdditionalOptionFilters
                )}
              />
            </div>
          </div>
          <div
            id="right-content"
            className="flex flex-row h-[50px] items-center "
          >
            <p className="font-opensans font-normal text-[14px] leading-[26px]">
              Displaying <strong>{filteredData.length} results</strong>
            </p>
            <motion.img
              src="/grid-icon.svg"
              alt="Grid View"
              className="hidden md:block h-[20px] w-auto ml-[25px] cursor-pointer"
              onClick={() => setProgramView("")}
              whileHover={{ scale: 1.025, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: programView != "list" ? 1 : 0.5 }}
            />
            <motion.img
              src="/list-icon.svg"
              alt="List View"
              className="hidden md:block h-[20px] w-auto ml-[5px] cursor-pointer"
              onClick={() => setProgramView("list")}
              whileHover={{ scale: 1.025, opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ opacity: programView === "list" ? 1 : 0.5 }}
            />

            {/* Toggle Buttons go here */}
          </div>
        </div>
      </div>
      {filteredData && filteredData.length === 0 && (
        <div
          id="no-results"
          className="bg-lightgrey max-w-[1128px] 
          p-[40px] mx-[30px]  mt-[50px]
          lg:mx-auto
          md:py-[75px] md:px-[100px] "
        >
          <h3 className="font-domine font-[700] text-[21px] leading-[30px] md:mb-[15px]">
            Please try your search again
          </h3>
          <p className="font-bitter font-normal leading-[35px] text-[18px] py-[18px]">
            Your search results do not match any available programs.
          </p>
          <hr />
          <p className="font-bitter font-normal leading-[35px] text-[18px] py-[18px]">
            Need help finding a program? Contact{" "}
            <a
              className="underline text-primarylinkblue"
              href="mailto:admiss@tcnj.edu"
            >
              admiss@tcnj.edu
            </a>
            ,{" "}
            <a
              className="underline text-primarylinkblue"
              href="tel:1-609-771-2131"
            >
              609.771.2131
            </a>
            , to get more information.
          </p>
        </div>
      )}
      <motion.div
        id="filtered-programs-wrapper"
        className={`${
          programView === "list"
            ? "list-view flex flex-col md:gap-[25px]"
            : `grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 `
        }
        gap-[30px] sm:gap-[40px] 
        p-[35px] max-w-[1128px] mx-auto
        pb-[50px]
        lg:px-0
        md:pb-[100px]
        `}
        variants={cardContainerVariants}
        initial="initial"
        animate="animate"
      >
        {filteredData &&
          filteredData.map((program, index) => (
            <ProgramCard
              program={program}
              key={program.program.slug + index}
              listType={programView}
              index={index}
            />
          ))}
      </motion.div>
      {/* Display filtered data */}
    </div>
  );
}
