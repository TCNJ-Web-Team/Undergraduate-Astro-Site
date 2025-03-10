import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function AnimatedHero({
  heroImgMobile,
  heroImgTablet,
  sourceUrl,
  horizontalPositionDesktopHero,
  horizontalPositionMobile, // New prop for mobile screens
  horizontalPositionTablet, // New prop for tablet screens
  title,
  badge,
}) {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine the appropriate object position based on screen width
  const getObjectPosition = () => {
    // Default values if not provided
    const mobilePosition = horizontalPositionMobile ?? 0;
    const tabletPosition = horizontalPositionTablet ?? 0;
    const desktopPosition = horizontalPositionDesktopHero ?? 0;

    if (windowWidth <= 550) {
      return `${mobilePosition}% 0%`;
    } else if (windowWidth <= 900) {
      return `${tabletPosition}% 0%`;
    } else {
      return `${desktopPosition}% 0%`;
    }
  };

  // Remove '-scaled' from sourceUrl
  const cleanedSourceUrl = sourceUrl
    ? sourceUrl.replace("-scaled.jpg", ".jpg")
    : sourceUrl;

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
          <source media="(max-width: 550px)" srcSet={cleanedMobileUrl} />
        )}
        {heroImgTablet && (
          <source media="(max-width: 900px)" srcSet={cleanedTabletUrl} />
        )}
        <img
          src={cleanedSourceUrl}
          style={{
            objectPosition: getObjectPosition(),
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
                    lg:right-[70px] lg:bottom-[37px] lg:w-[236px]"
          alt={`Badge ` + title}
        />
      )}
    </div>
  );
}

export default AnimatedHero;
