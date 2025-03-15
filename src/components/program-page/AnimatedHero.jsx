import React, { useEffect, useState } from "react";
// import "../src/styles/hero-styles.scss";

function AnimatedHero({
  heroImgMobileWebp,
  heroImgMobile,
  heroImgTablet,
  sourceUrl,
  horizontalPositionDesktopHero,
  horizontalPositionMobile,
  horizontalPositionTablet,
  title,
  badge,
}) {
  const cleanedSourceUrl =
    sourceUrl?.replace("-scaled.jpg", ".jpg") || sourceUrl;
  const cleanedMobileUrl =
    heroImgMobile?.sourceUrl?.replace("-scaled.jpg", ".jpg") ||
    heroImgMobile?.sourceUrl;
  const cleanedTabletUrl =
    heroImgTablet?.sourceUrl?.replace("-scaled.jpg", ".jpg") ||
    heroImgTablet?.sourceUrl;
  // console.log(heroImgMobileWebp);
  const mobilePosition = horizontalPositionMobile || 0;
  const tabletPosition = horizontalPositionTablet || 0;
  const desktopPosition = horizontalPositionDesktopHero || 0;
  return (
    <div className="relative w-full overflow-hidden">
      <picture>
        {heroImgMobileWebp && (
          <source
            media="(max-width: 550px)"
            srcSet={heroImgMobileWebp.sourceUrl}
          />
        )}
        {heroImgMobile && (
          <source media="(max-width: 550px)" srcSet={cleanedMobileUrl} />
        )}
        {heroImgTablet && (
          <source media="(max-width: 900px)" srcSet={cleanedTabletUrl} />
        )}
        <img
          src={cleanedSourceUrl}
          //   className={`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
          //  `}
          className={`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
    standard-object-position-${desktopPosition} 
            mobile-object-position-${mobilePosition} 
            tablet-object-position-${tabletPosition}

  `}
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
                    lg:right-[70px] lg:bottom-[37px] lg:w-[236px]"
          alt={`Badge ` + title}
        />
      )}
    </div>
  );
}

export default AnimatedHero;
