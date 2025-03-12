import React, { useEffect, useState } from "react";

function AnimatedHero({
  heroImgMobile,
  heroImgTablet,
  sourceUrl,
  horizontalPositionDesktopHero,
  horizontalPositionMobile,
  horizontalPositionTablet,
  title,
  badge,
}) {
  // const [windowWidth, setWindowWidth] = useState(null); // Start with null

  // useEffect(() => {
  //   setWindowWidth(window.innerWidth); // Set width after hydration

  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const getObjectPosition = () => {
  //   if (windowWidth === null) {
  //     return "50% 0%"; // Provide a default safe value for SSR
  //   }

  //   const mobilePosition = horizontalPositionMobile ?? 0;
  //   const tabletPosition = horizontalPositionTablet ?? 0;
  //   const desktopPosition = horizontalPositionDesktopHero ?? 0;

  //   if (windowWidth <= 550) {
  //     return `${mobilePosition}% 0%`;
  //   } else if (windowWidth <= 900) {
  //     return `${tabletPosition}% 0%`;
  //   } else {
  //     return `${desktopPosition}% 0%`;
  //   }
  // };

  const cleanedSourceUrl =
    sourceUrl?.replace("-scaled.jpg", ".jpg") || sourceUrl;
  const cleanedMobileUrl =
    heroImgMobile?.sourceUrl?.replace("-scaled.jpg", ".jpg") ||
    heroImgMobile?.sourceUrl;
  const cleanedTabletUrl =
    heroImgTablet?.sourceUrl?.replace("-scaled.jpg", ".jpg") ||
    heroImgTablet?.sourceUrl;
  const getObjectPositionClass = (position) => {
    switch (position) {
      case 0:
        return "object-[0%0]";
      case 10:
        return "object-[10%0]";
      case 20:
        return "object-[20%0]";
      case 30:
        return "object-[30%0]";
      case 40:
        return "object-[40%0]";
      case 50:
        return "object-[50%0]";
      case 60:
        return "object-[60%0]";
      case 70:
        return "object-[70%0]";
      case 80:
        return "object-[80%0]";
      case 90:
        return "object-[90%0]";
      case 100:
        return "object-[100%0]";
      default:
        return "";
    }
  };

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
          //   className={`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
          //  `}
          className={`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
    ${getObjectPositionClass(horizontalPositionDesktopHero)}

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
