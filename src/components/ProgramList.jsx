import React, { useState, useEffect } from "react";
import { wpquery } from "../data/wordpress";

export default function ProgramList() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await wpquery({
          query: `
            query ProgramsListing {
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
            }
          `,
        });
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="program-wrapper">
      {data &&
        data.programs.nodes.map((program, index) => {
          const {
            degreeType,
            slug,
            school,
            programOptions,
            additionalOptions,
            programAtAGlance,
            learnMoreList,
          } = program.program;
          const { title } = program;
          console.log(title);
          return (
            <a
              href={`/` + slug}
              className="program-card"
              id={slug}
              key={slug + index}
            >
              <p>{title}</p>
              <p>{degreeType}</p>
              {/* Access other fields here directly */}
            </a>
          );
        })}
    </div>
  );
}
