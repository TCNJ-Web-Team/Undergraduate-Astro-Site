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

  const filterData = () => {
    let newData = data.programs.nodes.filter(
      (program) =>
        program.title.toLowerCase().includes(searchText.toLowerCase()) ||
        program.program.school
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );

    if (selectedSchoolFilters.length > 0) {
      newData = newData.filter((program) =>
        selectedSchoolFilters.includes(program.program.school.toString())
      );
    }

    if (selectedProgramOptionFilters.length > 0) {
      newData = newData.filter((program) =>
        selectedProgramOptionFilters.some((filter) =>
          program.program.programOptions.includes(filter)
        )
      );
    }

    setFilteredData(newData);
  };

  const handleSchoolCheckboxChange = (event) => {
    const value = event.target.value;
    let updatedSchoolFilters = [...selectedSchoolFilters];

    if (event.target.checked) {
      updatedSchoolFilters.push(value);
    } else {
      updatedSchoolFilters = updatedSchoolFilters.filter(
        (filter) => filter !== value
      );
    }

    setSelectedSchoolFilters(updatedSchoolFilters);
  };

  const handleProgramOptionCheckboxChange = (event) => {
    const value = event.target.value;
    let updatedProgramOptionFilters = [...selectedProgramOptionFilters];

    if (event.target.checked) {
      updatedProgramOptionFilters.push(value);
    } else {
      updatedProgramOptionFilters = updatedProgramOptionFilters.filter(
        (filter) => filter !== value
      );
    }

    setSelectedProgramOptionFilters(updatedProgramOptionFilters);
  };

  const handleFilterChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="program-wrapper inner-width">
      <input
        type="text"
        id="text-filter"
        onChange={handleFilterChange}
        placeholder="Filter by title or school"
      />
      {/* Render checkboxes for area of study */}
      {areaOfStudy &&
        areaOfStudy.length > 0 &&
        areaOfStudy.map((area, index) => (
          <label
            className="area-of-study-filter"
            id={`${area.replace(/\s+/g, "-").toLowerCase()}-filter`}
            htmlFor={area}
            key={area + index}
          >
            {area}
            <input
              type="checkbox"
              value={area}
              onChange={handleSchoolCheckboxChange}
            />
          </label>
        ))}
      {/* Render checkboxes for program options */}
      {programOptionsClean &&
        programOptionsClean.length > 0 &&
        programOptionsClean.map((option, index) => (
          <label
            className="program-options-filter"
            id={`${option.replace(/\s+/g, "-").toLowerCase()}-filter`}
            htmlFor={option}
            key={option + index}
          >
            {option}
            <input
              type="checkbox"
              value={option}
              onChange={handleProgramOptionCheckboxChange}
            />
          </label>
        ))}
      {/* Display filtered data */}
      {filteredData &&
        filteredData.map((program, index) => (
          <ProgramCard program={program} key={program.program.slug + index} />
        ))}
    </div>
  );
}
