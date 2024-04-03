import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard"; // Import the new component
import DropDownAccordion from "./DropDownAccordion";
import { FilterDisplayBox } from "./FilterDisplayBox";

export default function ProgramList({
  data,
  areaOfStudy,
  programOptionsClean,
  additionalOptions,
}) {
  // console.log(data.programs.nodes);
  const [filteredData, setFilteredData] = useState(data.programs.nodes);
  const [selectedSchoolFilters, setSelectedSchoolFilters] = useState([]);
  const [selectedProgramOptionFilters, setSelectedProgramOptionFilters] =
    useState([]);
  const [selectedAdditionalOptionFilters, setSelectedAdditionalOptionFilters] =
    useState([]);
  const [searchText, setSearchText] = useState("");
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  useEffect(() => {
    filterData();
  }, [
    selectedSchoolFilters,
    selectedProgramOptionFilters,
    selectedAdditionalOptionFilters,
    searchText,
  ]);

  const filterData = () => {
    let newData = data.programs.nodes.filter(filterByText);

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
        className={`${onClickHandler.name}-filter input-container ${
          selectedFilters?.includes(option) ? "active" : ""
        }`}
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
  return (
    <div className="program-wrapper inner-width">
      <div
        id="input-and-filter-wrapper"
        className="flex flex-col gap-[20px] bg-lightgrey p-[35px] max-w-[1128px] mx-auto
        
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
              <p>Filtered by: </p>
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
            <p>
              Displaying <strong>{filteredData.length} results</strong>
            </p>
          </div>
        </div>
      </div>
      <div
        id="filtered-programs-wrapper"
        className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-[30px] sm:gap-[40px] p-[35px] max-w-[1128px] mx-auto
        pb-[50px]
        lg:px-0
        md:pb-[100px]
        "
      >
        {filteredData &&
          filteredData.map((program, index) => (
            <ProgramCard program={program} key={program.program.slug + index} />
          ))}
      </div>
      {/* Display filtered data */}
    </div>
  );
}
