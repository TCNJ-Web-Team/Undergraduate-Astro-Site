import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInAnimationVariant } from "../../animations/fadeInVariant";
import "../../styles/popup-detail.scss";

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
  const [activePopupIndex, setActivePopupIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActivePopupIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // const handleOutsideClick = (event: React.MouseEvent) => {
  //   const target = event.target as HTMLElement;
  //   if (target.classList.contains("popup-detail")) {
  //     setShowPopupDetail(false);
  //   }
  // };
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
          programDetails.map((detail, index) => {
            console.log(detail);
            return (
              <motion.div
                key={index}
                className="flex flex-col gap-[20px] text-center relative"
                variants={fadeInAnimationVariant}
                custom={index + 1}
              >
                <h3 className="text-[17px] leading-[22px] sm:leading-[53px] sm:text-[40px] font-alfaslab text-tcnjblue">
                  {detail.detailTitle}
                </h3>
                <div className="inline-flex items-center justify-center gap-1">
                  <div
                    className={`text-[17px] leading-[23px] sm:text-[17px] sm:leading-[23px] md:text-[19px] md:leading-[25px] md:mt-[4px] lg:mt-0 lg:leading-[26px] text-center ${
                      detail.detailContent ? `detail-popup-show` : ``
                    }`}
                    dangerouslySetInnerHTML={{
                      __html: detail.detailContent || "",
                    }}
                    onClick={() => handleClick(index)}
                  />
                  <div className="popup-detail-container relative">
                    {detail.popupContent && activePopupIndex === index && (
                      <div
                        className="popup-detail absolute top-[-50%] h-auto bg-white w-[320px] p-[20px] shadow-lg z-10"
                        dangerouslySetInnerHTML={{
                          __html: detail.popupContent || "",
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
      </motion.div>
    </>
  );
};

export default ProgramDetailsGrad;
