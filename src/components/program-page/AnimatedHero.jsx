import React from "react";
import { motion } from "framer-motion";

function AnimatedHero({
  heroImgMobile,
  heroImgTablet,
  sourceUrl,
  horizontalPositionDesktopHero,
  title,
  badge
}) {
  console.log(badge);
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
      {badge && (<img
      src={badge.sourceUrl}
      className="absolute right-[25px] bottom-[30px] z-40 h-[175px] w-auto
      sm:right-[50px] sm:bottom-[50px] sm:h-[180px]
      md:right-[50px] md:bottom-[40px] md:h-[180px]
      lg:right-[60px] lg:bottom-[50px] lg:h-[200px]
      "
      alt={`Badge ` + title}/>)}
    </div>
  );
}

export default AnimatedHero;
