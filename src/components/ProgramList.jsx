import { useState } from "react";
import ProgramCard from "./ProgramCard"; // Import the new component

export default function ProgramList({ data, areaOfStudy }) {
  const [newData, setData] = useState(data);
  const [newAreaOfStudy, setAreaOfStudy] = useState(areaOfStudy);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filteredData = data.programs.nodes.filter(
      (program) =>
        program.title.toLowerCase().includes(searchText) ||
        program.program.school.toString().toLowerCase().includes(searchText)
    );
    setData({ programs: { nodes: filteredData } });
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
    filterDataByAreaOfStudy(updatedFilters);
  };

  const filterDataByAreaOfStudy = (filters) => {
    if (filters.length === 0) {
      setData(data); // Reset to original data if no filters selected
      return;
    }

    const filteredData = data.programs.nodes.filter((program) =>
      filters.includes(program.program.school.toString())
    );

    setData({ programs: { nodes: filteredData } });
  };

  return (
    <div className="program-wrapper inner-width">
      <input
        type="text"
        id="text-filter"
        onChange={handleFilterChange}
        placeholder="Filter by title"
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
      {newData &&
        newData.programs.nodes.map((program, index) => (
          <ProgramCard program={program} key={program.program.slug + index} />
        ))}
    </div>
  );
}
