/* empty css                            */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent } from '../astro_4a106505.mjs';
import 'clsx';
import { w as wpquery, $ as $$Layout } from './_slug__5b8e10cf.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                           */import 'html-escaper';
/* empty css                            */import 'react-multi-carousel';

const $$Astro$1 = createAstro();
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<div id="intro" class="inner-width"><h1>Explore Undergraduate Programs</h1><p class="font-bitter text-3xl">
Search by keyword or browse programs by selecting an area of study, degree
    type, and/or format. TCNJ students also have an option to pursue accelerated
    link and dual degrees . link
</p></div><div class="overlay"></div>`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/Intro.astro", void 0);

const ProgramCard = ({ program }) => {
  const {
    degreeType,
    slug,
    school,
    programOptions,
    additionalOptions,
    programAtAGlance,
    learnMoreList
  } = program.program;
  const { title } = program;
  return /* @__PURE__ */ jsx("div", { className: "program-card", id: slug, children: /* @__PURE__ */ jsxs("a", { className: "program-link", href: `./${slug}`, children: [
    /* @__PURE__ */ jsx("p", { children: title }),
    /* @__PURE__ */ jsx("hr", {}),
    /* @__PURE__ */ jsxs("div", { className: "icon-container", children: [
      programOptions && programOptions.map((option, index) => {
        return /* @__PURE__ */ jsx("p", { children: option }, index);
      }),
      additionalOptions && additionalOptions.map((option, index) => {
        return /* @__PURE__ */ jsx("p", { children: option }, index);
      })
    ] })
  ] }) });
};

function ProgramList({
  data,
  areaOfStudy,
  programOptionsClean,
  additionalOptions
}) {
  const [filteredData, setFilteredData] = useState(data.programs.nodes);
  const [selectedSchoolFilters, setSelectedSchoolFilters] = useState([]);
  const [selectedProgramOptionFilters, setSelectedProgramOptionFilters] = useState([]);
  const [selectedAdditionalOptionFilters, setSelectedAdditionalOptionFilters] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    filterData();
  }, [
    selectedSchoolFilters,
    selectedProgramOptionFilters,
    selectedAdditionalOptionFilters,
    searchText
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
  };
  const renderCheckboxes = (options, onChangeHandler) => options.map((option, index) => /* @__PURE__ */ jsxs(
    "label",
    {
      className: `${onChangeHandler.name}-filter`,
      id: `${option.replace(/\s+/g, "-").toLowerCase()}-filter`,
      htmlFor: option,
      children: [
        option,
        /* @__PURE__ */ jsx("input", { type: "checkbox", value: option, onChange: onChangeHandler })
      ]
    },
    option + index
  ));
  return /* @__PURE__ */ jsxs("div", { className: "program-wrapper inner-width", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        id: "text-filter",
        onChange: handleFilterChange,
        placeholder: "Filter by title or school"
      }
    ),
    renderCheckboxes(areaOfStudy, handleSchoolCheckboxChange),
    renderCheckboxes(programOptionsClean, handleProgramOptionCheckboxChange),
    renderCheckboxes(
      additionalOptions,
      handleAdditionalOptionCheckboxChange
    ),
    filteredData && filteredData.map((program, index) => /* @__PURE__ */ jsx(ProgramCard, { program }, program.program.slug + index))
  ] });
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const data = await wpquery({
    query: ` query ProgramsListing {
              programs {
                nodes {
                  program {
                    degreeType
                    slug
                    school
                    programOptions
                    additionalOptions
                    programAtAGlance
                    learnMoreList {
                      title
                      slug
                    }
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Undergraduate Programs at TCNJ" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<header>${renderComponent($$result2, "Intro", $$Intro, {})}</header><main><div class="yellow-border">${renderComponent($$result2, "ProgramList", ProgramList, { "data": data, "areaOfStudy": areaOfStudy, "programOptionsClean": programOptionsClean, "additionalOptions": additionalOptions, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/ProgramList", "client:component-export": "default" })}</div></main>` })}`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/index.astro", void 0);

const $$file = "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
