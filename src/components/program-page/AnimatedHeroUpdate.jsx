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
  // Remove '-scaled' from sourceUrl
  const cleanedSourceUrl = sourceUrl
    ? sourceUrl.replace("-scaled.jpg", ".jpg")
    : sourceUrl;

  console.log("Original:", sourceUrl);
  console.log("Cleaned:", cleanedSourceUrl);

  // Do the same for mobile and tablet images if they exist
  const cleanedMobileUrl = heroImgMobile?.sourceUrl
    ? heroImgMobile.sourceUrl.replace("-scaled.jpg", ".jpg")
    : heroImgMobile?.sourceUrl;

  const cleanedTabletUrl = heroImgTablet?.sourceUrl
    ? heroImgTablet.sourceUrl.replace("-scaled.jpg", ".jpg")
    : heroImgTablet?.sourceUrl;

  return (
    <div className="relative w-full overflow-hidden">
      <picture>
        {heroImgMobile && (
          <source media="(max-width: 428px)" srcSet={cleanedMobileUrl} />
        )}
        {heroImgTablet && (
          <source media="(max-width: 900px)" srcSet={cleanedTabletUrl} />
        )}
        <img
          src={cleanedSourceUrl}
          style={{
            objectPosition: `${horizontalPositionDesktopHero === null ? "0" : horizontalPositionDesktopHero}% 0%`,
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
