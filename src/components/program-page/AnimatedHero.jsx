import React from "react";
import { motion } from "framer-motion";

function AnimatedHero({
  heroImgMobile,
  heroImgTablet,
  sourceUrl,
  horizontalPositionDesktopHero,
  title,
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <picture>
        {heroImgMobile && (
          <source media="(max-width: 550px)" srcSet={heroImgMobile.sourceUrl} />
        )}
        {heroImgTablet && (
          <source media="(max-width: 900px)" srcSet={heroImgTablet.sourceUrl} />
        )}
        <motion.img
          src={sourceUrl}
          style={{
            objectPosition: `${horizontalPositionDesktopHero}%`,
          }}
          className="relative z-30
                w-[100%]
          h-[450px]
          sm:h-[600px]
          object-cover
          pl-[35px]
          
          lg:pl-[100px]
          lg:w-[100%]
          xl:pl-[200px]"
          id="hero-img"
          alt={title}
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.045,
            // ease: "easeInOut",
            // ease: [0.12, 0, 0.39, 0],
            // ease: "easeInOut",
            // duration: 0.55,
            ease: [0.22, 0, 0.36, 1],

            duration: 0.85,
            // type: "spring",
            // stiffness: 50,
          }}
          whileInView="animate"
          viewport={{ once: true }}
        />
      </picture>
      <div
        className="absolute top-0 
                bg-lightgrey
                w-[100%]
          h-[450px]
          sm:h-[600px]
    
          left-[35px]
          
          lg:left-[100px]
          xl:left-[200px]
          z-10
          "
      />
    </div>
  );
}

export default AnimatedHero;
