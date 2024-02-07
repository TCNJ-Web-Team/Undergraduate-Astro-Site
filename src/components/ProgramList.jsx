import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard"; // Import the new component

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
        className={`${onChangeHandler.name}-filter`}
        id={`${option.replace(/\s+/g, "-").toLowerCase()}-filter`}
        htmlFor={option}
        key={option + index}
      >
        {option}
        <input type="checkbox" value={option} onChange={onChangeHandler} />
      </label>
    ));

  return (
    <div className="program-wrapper inner-width">
      <input
        type="text"
        id="text-filter"
        onChange={handleFilterChange}
        placeholder="Filter by title or school"
      />
      {renderCheckboxes(areaOfStudy, handleSchoolCheckboxChange)}
      {renderCheckboxes(programOptionsClean, handleProgramOptionCheckboxChange)}
      {renderCheckboxes(
        additionalOptions,
        handleAdditionalOptionCheckboxChange
      )}
      {/* Display filtered data */}
      {filteredData &&
        filteredData.map((program, index) => (
          <ProgramCard program={program} key={program.program.slug + index} />
        ))}
    </div>
  );
}
