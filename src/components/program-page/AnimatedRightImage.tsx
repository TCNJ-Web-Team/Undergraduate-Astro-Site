import React from "react";
// import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedRightImageProps {
  programOfStudyRight: string;
  imageAlt: string;
  rightImageHorizontalPosition: number;
  rightImageVerticalPosition: number;
}

const AnimatedRightImage: React.FC<AnimatedRightImageProps> = ({
  programOfStudyRight,
  imageAlt,
  rightImageHorizontalPosition,
  rightImageVerticalPosition,
}) => {
  // const fadeInAnimationVariant = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,

  //     transition: {
  //       delay: 0.25,
  //       ease: "easeOut",
  //       duration: 0.75,
  //     },
  //   },
  // };

  // const { ref, inView } = useInView({
  const { ref } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
    threshold: 0.35, // 35% of the element is in view
  });

  return (
    <div className="relative overflow-y-visible">
      {programOfStudyRight && (
        <img
          ref={ref}
          loading="lazy"
          src={programOfStudyRight}
          alt={imageAlt + " program image"}
          style={{
            objectPosition: `${rightImageHorizontalPosition}% ${rightImageVerticalPosition}%`,
          }}
          id="prog-study-img"
          className="relative z-30 
     top-[-45px]
          object-cover
          object-left
          w-[100%]
          h-[350px]
          max-w-none
          sm:h-[500px]
          sm:top-[-45px]
          
       md:top-[-50px]
          md:right-[-82px]
          md:h-[425px]
          md:absolute
          mb-[5px]
          lg:w-[51%]
          lg:h-[600px]

          sm:mb-0
          "
        />
      )}
      {/* <div
        id="prog-study-bg"
        className="absolute 
                bg-lightgrey
                top-[-50px] object-cover object-left w-[100%] h-[400px] max-w-none sm:h-[550px] sm:top-[-50px] md:right-[-82px] md:h-[650px] md:absolute
          "
      /> */}
    </div>
  );
};

export default AnimatedRightImage;
