import React from "react";
import { motion } from "framer-motion";

interface AnimatedProgramProps {
  programAtAGlance: string;
}

const AnimatedProgramAtAGlance: React.FC<AnimatedProgramProps> = ({
  programAtAGlance,
}) => {
  return (
    <motion.div
      id="program-at-a-glance"
      className="text-left pb-[150px] pt-[100px] sm:pb-[200px] md:pb-[200px] md:pt-[200px]"
    >
      {programAtAGlance && (
        <>
          <h2
            className={`text-center font-chunkfive text-tcnjblue text-[45px] leading-[50px] pb-[50px] sm:pb-[20px] sm:text-[60px] sm:leading-[70px] sm:text-left md:text-[65px] md:leading-[75px] md:pb-[50px]`}
          >
            Program at a Glance
          </h2>

          <div
            id="program-glance"
            className={`text-[20px] leading-[35px] text-center sm:text-[23px] sm:leading-[45px] sm:text-left md:text-[23px] md:leading-[45px]`}
            dangerouslySetInnerHTML={{ __html: programAtAGlance }}
          />
        </>
      )}

      <div className="flex flex-col gap-[20px] sm:flex-row sm:mt-[75px] sm:gap-[28px] md:gap-5 md:flex-row mt-[50px]">
        <a
          href=""
          className="border-2 border-tcnjblue p-4 pt-[40px] pb-[40px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]"
        >
          Apply
        </a>
        <a
          href=""
          className="border-2 border-tcnjblue p-4 pt-[40px] pb-[40px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]"
        >
          Request Info
        </a>
      </div>
    </motion.div>
  );
};

export default AnimatedProgramAtAGlance;
