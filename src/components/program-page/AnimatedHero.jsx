import React from "react";
import { motion } from "framer-motion";

function AnimatedHero({
  heroImgMobile,
  heroImgTablet,
  sourceUrl,
  horizontalPositionDesktopHero,
  title,
  badge,
}) {
  // console.log(badge);
  return (
    <div className="relative w-full overflow-hidden">
      <picture>
        {heroImgMobile && (
          <source media="(max-width: 428px)" srcSet={heroImgMobile.sourceUrl} />
        )}
        {heroImgTablet && (
          <source media="(max-width: 900px)" srcSet={heroImgTablet.sourceUrl} />
        )}
        <img
          src={sourceUrl}
          style={{
            objectPosition: `${horizontalPositionDesktopHero}%`,
          }}
          className="relative z-30
                w-[100%]
          h-[450px]
          sm:h-[600px]
          md:h-[500px]
          lg:h-[700px]
          object-cover
          pl-[35px]
             
          lg:pl-[100px]
          lg:w-[100%]
          xl:pl-[200px]"
          id="hero-img"
          alt={title}
        />
      </picture>
      {badge && (
        <img
          src={badge.sourceUrl}
          className="absolute right-[10px] bottom-[12px] z-40 h-auto w-[208px]
      sm:right-[41px] sm:bottom-[27px] sm:w-[215px]
      md:right-[35px] md:bottom-[7px] md:w-[215px]
      lg:right-[70px] lg:bottom-[37px] lg:w-[236px]
 
      "
          alt={`Badge ` + title}
        />
      )}
    </div>
  );
}

export default AnimatedHero;
