import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard"; // Import the new component

export default function ProgramList({
  data,
  areaOfStudy,
  programOptionsClean,
}) {
  const [filteredData, setFilteredData] = useState(data.programs.nodes);
  const [newAreaOfStudy, setAreaOfStudy] = useState(areaOfStudy);
  const [newProgramOptionsClean, setProgramOptionsClean] =
    useState(programOptionsClean);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchText, setSearchText] = useState("");
  // console.log(newAreaOfStudy);
  useEffect(() => {
    filterData();
  }, [selectedFilters, searchText]);

  const filterData = () => {
    let newData = data.programs.nodes;

    // Filter by title or school text input
    newData = newData.filter(
      (program) =>
        program.title.toLowerCase().includes(searchText.toLowerCase()) ||
        program.program.school
          .toString()
          .toLowerCase()
          .includes(searchText.toLowerCase())
    );

    // Filter by selected area of study checkboxes
    if (selectedFilters.length > 0) {
      newData = newData.filter(
        (program) =>
          selectedFilters.includes(program.program.school.toString()) ||
          selectedFilters.some((filter) =>
            program.program.programOptions.includes(filter)
          )
      );
    }

    setFilteredData(newData);
  };

  const handleFilterChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    let updatedFilters = [...selectedFilters];

    if (event.target.checked) {
      updatedFilters.push(value);
    } else {
      updatedFilters = updatedFilters.filter((filter) => filter !== value);
    }

    setSelectedFilters(updatedFilters);
  };

  return (
    <div className="program-wrapper inner-width">
      <input
        type="text"
        id="text-filter"
        onChange={handleFilterChange}
        placeholder="Filter by title or school"
      />
      {newAreaOfStudy &&
        newAreaOfStudy.length > 0 &&
        newAreaOfStudy.map((area, index) => {
          return (
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
                onChange={handleCheckboxChange}
              />
            </label>
          );
        })}
      {newProgramOptionsClean &&
        newProgramOptionsClean.length > 0 &&
        newProgramOptionsClean.map((option, index) => {
          return (
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
                onChange={handleCheckboxChange}
              />
            </label>
          );
        })}
      {filteredData &&
        filteredData.map((program, index) => (
          <ProgramCard program={program} key={program.program.slug + index} />
        ))}
    </div>
  );
}
