import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard"; // Import the new component

export default function ProgramList({
  data,
  areaOfStudy,
  programOptionsClean,
}) {
  const [filteredData, setFilteredData] = useState(data.programs.nodes);
  const [selectedSchoolFilters, setSelectedSchoolFilters] = useState([]);
  const [selectedProgramOptionFilters, setSelectedProgramOptionFilters] =
    useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    filterData();
  }, [selectedSchoolFilters, selectedProgramOptionFilters, searchText]);

  // Filter data based on applied filters
  const filterData = () => {
    let newData = data.programs.nodes.filter(filterByText);

    if (selectedSchoolFilters.length > 0) {
      newData = newData.filter(filterBySelectedSchools);
    }

    if (selectedProgramOptionFilters.length > 0) {
      newData = newData.filter(filterBySelectedProgramOptions);
    }

    setFilteredData(newData);
  };

  // Filter by text input in title or school
  const filterByText = (program) => {
    const lowerCaseText = searchText.toLowerCase();
    return (
      program.title.toLowerCase().includes(lowerCaseText) ||
      program.program.school.toString().toLowerCase().includes(lowerCaseText)
    );
  };

  // Filter by selected school filters
  const filterBySelectedSchools = (program) =>
    selectedSchoolFilters.includes(program.program.school.toString());

  // Filter by selected program option filters
  const filterBySelectedProgramOptions = (program) =>
    selectedProgramOptionFilters.some((filter) =>
      program.program.programOptions.includes(filter)
    );

  // Handle checkbox change for schools and program options
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

  // Update selected filters based on checkbox change
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

  // Handle text input change
  const handleFilterChange = (event) => {
    setSearchText(event.target.value);
  };

  // Render checkboxes for area of study or program options
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
      {/* Render checkboxes for area of study */}
      {renderCheckboxes(areaOfStudy, handleSchoolCheckboxChange)}
      {/* Render checkboxes for program options */}
      {renderCheckboxes(programOptionsClean, handleProgramOptionCheckboxChange)}
      {/* Display filtered data */}
      {filteredData &&
        filteredData.map((program, index) => (
          <ProgramCard program={program} key={program.program.slug + index} />
        ))}
    </div>
  );
}
