import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard"; // Import the new component
import DropDownAccordion from "./DropDownAccordion";

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

  const renderCheckboxes = (options, onChangeHandler) =>
    options.map((option, index) => (
      <label
        className={`${onChangeHandler.name}-filter input-container`}
        id={`${option.replace(/\s+/g, "-").toLowerCase()}-filter`}
        htmlFor={option}
        key={option + index}
      >
        {option}
        <input type="checkbox" value={option} onChange={onChangeHandler} />
        <span className="checkmark" />
      </label>
    ));

  return (
    <div className="program-wrapper inner-width">
      <div
        id="input-and-filter-wrapper"
        className="flex flex-col gap-[20px] bg-lightgrey p-[35px] max-w-[1128px] mx-auto
        
        md:bg-transparent"
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
          className="flex flex-col gap-[20px] md:flex-row"
        >
          <DropDownAccordion
            checkboxContent={renderCheckboxes(
              areaOfStudy,
              handleSchoolCheckboxChange
            )}
            title="Area of Study"
            isOpen={openAccordion === 0}
            onToggle={() => handleAccordionToggle(0)}
          />
          <DropDownAccordion
            checkboxContent={renderCheckboxes(
              programOptionsClean,
              handleProgramOptionCheckboxChange
            )}
            title="Degree"
            isOpen={openAccordion === 1}
            onToggle={() => handleAccordionToggle(1)}
          />
          <DropDownAccordion
            checkboxContent={renderCheckboxes(
              additionalOptions,
              handleAdditionalOptionCheckboxChange
            )}
            title="Options"
            isOpen={openAccordion === 2}
            onToggle={() => handleAccordionToggle(2)}
          />
        </div>
      </div>
      {/* Display filtered data */}
      {filteredData &&
        filteredData.map((program, index) => (
          <ProgramCard program={program} key={program.program.slug + index} />
        ))}
    </div>
  );
}
