import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "../../animations/fadeInVariant";

interface AnimatedProgramProps {
  programAtAGlance: string;
  programImageCheck?: string;
  programCoordinators?: string;
}

const AtAGlanceGrad: React.FC<AnimatedProgramProps> = ({
  programAtAGlance,
  programImageCheck,
  programCoordinators,
}) => {
  // const fadeInAnimationVariant = {
  //   initial: {
  //     opacity: 0,
  //     y: 40,
  //   },
  //   animate: (delayNumber: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       // Use either when or delay here.
  //       // when: "afterChildren",
  //       delay: delayNumber * 0.35,
  //       ease: "easeOut",
  //       duration: 0.45,
  //       // staggerChildren: 0.5,
  //     },
  //   }),
  // };
  // console.log(programImageCheck);
  return (
    <>
      <div
        id="program-at-a-glance-intro"
        className="pt-[91px] sm:pt-[103px]
md:pt-[135px] lg:pt-[187px]"
      ></div>
      <motion.section
        id="program-at-a-glance"
        className={`${
          programImageCheck
            ? "pb-[145px]  sm:pb-[160px] md:pb-[150px] lg:pb-[200px]"
            : "pb-[100px]  sm:pb-[123px] md:pb-[150px] lg:pb-[198px]"
        }   `}
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.h2
          className={`text-center font-chunkfive text-tcnjblue text-[45px] leading-[62px] pb-[20px] sm:pb-[27px] sm:text-[55px] sm:leading-[75px] md:text-[65px] md:leading-[89px] md:pb-[17px]
            lg:pb-[14px]
        
        `}
          variants={fadeInAnimationVariant}
          custom={1}
        >
          At a Glance
        </motion.h2>

        <motion.section
          id="program-glance"
          className={`text-[20px] leading-[35px] text-center sm:text-[21px] sm:leading-[40px] md:text-[23px] md:leading-[45px] yellow-body-copy`}
          dangerouslySetInnerHTML={{ __html: programAtAGlance }}
          variants={fadeInAnimationVariant}
          custom={1}
        />
        <motion.section
          id="program-coordinators"
          className={`text-[19px] leading-[27px] text-center yellow-body-copy flex flex-col gap-[10px]
            pt-[37px] sm:pt-[26px] md:pt-[38px] lg:pt-[42px]`}
          dangerouslySetInnerHTML={{ __html: programCoordinators || "" }}
          variants={fadeInAnimationVariant}
          custom={1}
        />

        {/* <motion.section
          className="flex flex-col gap-[20px] sm:flex-row sm:mt-[64px] sm:gap-[28px] md:gap-5 md:flex-row mt-[50px]"
          variants={fadeInAnimationVariant}
          custom={4}
        >
          <a
            href="https://admissions.tcnj.edu/apply/"
            target="_blank"
            className="program-button-glance-gtm border-2 border-tcnjblue p-4 pt-[36px] pb-[36px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]
                hover:bg-tcnjblue hover:text-white transition-all
                "
          >
            Apply
          </a>
          <a
            href="https://connect.tcnj.edu/register/prospect"
            target="_blank"
            className="border-2 border-tcnjblue p-4 pt-[36px] pb-[36px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]
                hover:bg-tcnjblue hover:text-white
                transition-all
                "
          >
            Request Info
          </a>
        </motion.section> */}
      </motion.section>
    </>
  );
};

export default AtAGlanceGrad;
