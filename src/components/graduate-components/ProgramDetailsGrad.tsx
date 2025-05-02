import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "../../animations/fadeInVariant";

interface ProgramDetailsGrad {
  programDetails?: {
    detailTitle: string;
    detailContent: string;
    popupContent: string;
  }[];
}

const ProgramDetailsGrad: React.FC<ProgramDetailsGrad> = ({
  programDetails,
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
      <motion.div
        id="program-details"
        className={`text-center grid grid-cols-3 gap-[20px] sm:gap-[30px] md:gap-[40px] lg:gap-[50px]`}
        variants={fadeInAnimationVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {programDetails &&
          programDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-[20px] text-center"
              variants={fadeInAnimationVariant}
              custom={index + 1}
            >
              <div className="text-[17px] leading-[22px] sm:leading-[23px] md:text-[20px] md:leading-[24px] lg:leading-[24px] font-interstate not-italic uppercase font-extrabold">
                <h3>{detail.detailTitle}</h3>
              </div>
              <div
                className="text-[17px] leading-[23px] sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] md:mt-[4px] lg:mt-0 lg:leading-[26px] text-center"
                dangerouslySetInnerHTML={{ __html: detail.detailContent || "" }}
              />
            </motion.div>
          ))}
        {/* <motion.div className="flex flex-col gap-[20px] sm:flex-row sm:mt-[64px] sm:gap-[28px] md:gap-5 md:flex-row mt-[50px]">
          <motion.a
            href="https://admissions.tcnj.edu/apply/"
            target="_blank"
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            custom={4}
            viewport={{ once: true }}
            className="program-button-glance-gtm border-2 border-tcnjblue p-4 pt-[36px] pb-[36px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]
      hover:bg-tcnjblue hover:text-white transition-all"
          >
            Apply
          </motion.a>

          <motion.a
            href="https://connect.tcnj.edu/register/prospect"
            target="_blank"
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            custom={5}
            viewport={{ once: true }}
            className="border-2 border-tcnjblue p-4 pt-[36px] pb-[36px] sm:w-[100%] text-center font-opensans uppercase text-tcnjblue font-semibold text-base md:max-w-[300px]
      hover:bg-tcnjblue hover:text-white transition-all"
          >
            Request Info
          </motion.a>
        </motion.div> */}
        {/* <div className="">test</div> */}
      </motion.div>
    </>
  );
};

export default ProgramDetailsGrad;
