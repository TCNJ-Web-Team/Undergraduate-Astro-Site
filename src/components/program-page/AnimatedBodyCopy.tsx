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
      className={`relative sm:pl-[47px] sm:pr-[47px] md:pl-[20px] md:pr-[20px]  lg:pl-[0px] lg:pr-[0px]`}
      variants={fadeInAnimationVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <motion.h2
        className={`text-center
      font-chunkfive 
      text-tcnjblue
      text-[45px]
      leading-[50px]
      pb-[35px]
      sm:pb-[20px]
      sm:text-[60px]
      sm:leading-[70px]
      sm:text-left
      md:text-[65px]
      md:leading-[75px]

      md:pb-[50px]
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
        <div className="flex flex-col sm:flex-row pb-[100px] sm:pb-[125px] md:pb-[200px] gap-[50px] sm:gap-[40px]">
          {left && (
            <motion.div
              id={`${headingLower}-left`}
              className="md:max-w-[45%] lg:max-w-[40%]"
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
