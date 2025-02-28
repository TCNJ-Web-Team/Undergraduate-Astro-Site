import React from "react";
import ProgramGlanceCopy from "../ProgramGlanceCopy";
import ProgramCareersHeading from "../ProgramCareersHeading";
import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "../../animations/fadeInVariant";

type Props = {
  left?: string;
  right?: string;
  body?: string;
  heading: string;
};

const AnimatedBodyCopy: React.FC<Props> = ({ left, right, body, heading }) => {
  const headingLower = heading.replace(/\s+/g, "-").toLowerCase();

  return (
    <motion.div
      id={headingLower}
      className={`relative sm:px-[45px] md:pl-[20px] md:pr-[20px] lgMd:pl-0  lg:pl-[0px] lg:pr-[0px]`}
      variants={fadeInAnimationVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        className={`text-center font-chunkfive text-tcnjblue text-[45px] leading-[62px] pb-[25px] sm:pb-[20px] sm:text-[55px] sm:leading-[75px] sm:text-left md:text-[65px] md:leading-[89px] md:pb-[23px]
          lg:pb-[14px]
        
        `}
        variants={fadeInAnimationVariant}
        custom={1}
      >
        {heading}
      </motion.h2>

      {body && <ProgramGlanceCopy id={`${headingLower}-body`} copy={body} />}
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
          className={`flex flex-col  pb-[100px] gap-[0px]
          sm:flex-row
          sm:pb-[110px]
          sm:gap-[40px] 
          md:pb-[150px]
          lg:pb-[200px] 
          ${left ? "sm:pt-[70px] md:pt-[89px] lg:pt-[85px]" : "pt-0"}`}
        >
          {left && (
            <motion.div
              id={`${headingLower}-left`}
              className="md:max-w-[45%] lg:max-w-[50%]"
              dangerouslySetInnerHTML={{ __html: left }}
              variants={fadeInAnimationVariant}
              custom={3}
            />
          )}

          <motion.div
            id={`${headingLower}-right`}
            dangerouslySetInnerHTML={{ __html: right || "" }}
            variants={fadeInAnimationVariant}
            custom={4}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedBodyCopy;
