import React from "react";
import ProgramGlanceCopy from "../ProgramGlanceCopy";
import ProgramCareersHeading from "../ProgramCareersHeading";

type Props = {
  left?: string;
  right?: string;
  body?: string;
  heading: string;
};

const AnimatedBodyCopy: React.FC<Props> = ({ left, right, body, heading }) => {
  const headingLower = heading.replace(/\s+/g, "-").toLowerCase();

  return (
    <div
      id={headingLower}
      className={`relative ${
        heading === "Careers"
          ? "sm:pl-[47px] sm:pr-[47px] md:pl-[20px] md:pr-[20px]  lg:pl-[0px] lg:pr-[0px]"
          : ""
      }`}
    >
      {heading !== "Careers" ? (
        <h2
          className="
          text-[23px] 
          leading-[33px] 
          pb-[20px]
          sm:pb-[25px] 
          sm:text-[30px] 
          sm:leading-[60px] 
          md:pb-[35px] 
          md:leading-[40px]
          font-chunkfive 
          text-tcnjblue"
        >
          {heading}
        </h2>
      ) : (
        <ProgramCareersHeading heading="Careers" />
      )}
      {body && heading === "Careers" && (
        <ProgramGlanceCopy id={`${headingLower}-body`} copy={body} />
      )}
      <div
        className="flex
      gap-[60px]
      sm:gap-[75px]
      md:gap-[100px]
      text-[1.438rem]
      inner-body-copy-white
      flex-col"
      >
        <div
          className={
            heading === "Careers"
              ? "flex flex-col sm:flex-row pb-[100px] sm:pb-[125px] md:pb-[200px] gap-[50px] sm:gap-[40px]"
              : ""
          }
        >
          {left && (
            <div
              id={`${headingLower}-left`}
              className="md:max-w-[45%] lg:max-w-[40%]"
              dangerouslySetInnerHTML={{ __html: left }}
            />
          )}
          {heading === "Careers" && (
            <div
              id={`${headingLower}-right`}
              dangerouslySetInnerHTML={{ __html: right || "" }}
            />
          )}
        </div>
        {body && heading !== "Careers" && (
          <div
            className=""
            id={`${headingLower}-body`}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        )}
      </div>
    </div>
  );
};

export default AnimatedBodyCopy;
