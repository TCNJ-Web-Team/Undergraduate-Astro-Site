import React from "react";
import { motion } from "framer-motion";

interface AnimatedRightImageProps {
  programOfStudyRight: string; // Assuming programOfStudyRight is a string representing the image source URL
  rightImageHorizontalPosition: number; // Assuming these values are in percentage
  rightImageVerticalPosition: number;
}

const AnimatedRightImage: React.FC<AnimatedRightImageProps> = ({
  programOfStudyRight,
  rightImageHorizontalPosition,
  rightImageVerticalPosition,
}) => {
  const fadeInAnimationVariant = {
    initial: {
      opacity: 0,
      x: 25,
    },
    animate: (delayNumber: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        // Use either when or delay here.
        // when: "afterChildren",
        delay: delayNumber * 0.35,
        ease: "easeOut",
        duration: 0.45,
        // staggerChildren: 0.5,
      },
    }),
  };
  return (
    <div className="relative overflow-y-visible">
      {programOfStudyRight && (
        <motion.img
          src={programOfStudyRight}
          alt=""
          style={{
            objectPosition: `${rightImageHorizontalPosition}% ${rightImageVerticalPosition}%`,
          }}
          id="prog-study-img"
          className="relative z-30 
     top-[-50px]
          object-cover
          object-left
          w-[100%]
          h-[400px]
          max-w-none
          sm:h-[550px]
          sm:top-[-50px]
          
      
          md:right-[-82px]
          md:h-[650px]
          md:absolute"
          variants={fadeInAnimationVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        />
      )}
      <div
        id="prog-study-bg"
        className="absolute 
                bg-lightgrey
                top-[-50px] object-cover object-left w-[100%] h-[400px] max-w-none sm:h-[550px] sm:top-[-50px] md:right-[-82px] md:h-[650px] md:absolute
          "
      />
    </div>
  );
};

export default AnimatedRightImage;
