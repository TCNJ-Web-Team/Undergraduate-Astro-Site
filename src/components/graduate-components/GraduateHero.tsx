interface GraduateHeroProps {
  heroImgDesktop?: { sourceUrl: string };
  heroImgDesktopWebp?: { sourceUrl: string };
  heroImgTablet?: { sourceUrl: string };
  heroImgTabletWebp?: { sourceUrl: string };
  heroImgMobile?: { sourceUrl: string };
  heroImgMobileWebp?: { sourceUrl: string };
  horizontalPositionDesktopHero: number;
  horizontalPositionTablet: number;
  horizontalPositionMobile: number;
  title: string;
  oldHeroName?: string;
}
const GraduateHero: React.FC<GraduateHeroProps> = ({
  heroImgMobileWebp,
  heroImgMobile,
  heroImgTabletWebp,
  heroImgTablet,
  heroImgDesktop,
  heroImgDesktopWebp,
  horizontalPositionDesktopHero,
  horizontalPositionMobile,
  horizontalPositionTablet,
  title,
  oldHeroName,
}) => {
  // console.log(heroImgTabletWebp, heroImgDesktopWebp);
  // console.log("TITLE", title);
  const strippedTitle = oldHeroName
    ? oldHeroName
    : title
        .replace(/online/gi, "") // remove "online" (case-insensitive)
        .replace(/[^\w\s-]/g, "") // remove all special characters EXCEPT dashes
        .trim() // trim whitespace
        .replace(/\s+/g, "-") // replace spaces with dashes
        .toLowerCase(); // lowercase

  // console.log("STRIPPED TITLE", strippedTitle);
  const mobilePosition = horizontalPositionMobile || 0;
  const tabletPosition = horizontalPositionTablet || 0;
  const desktopPosition = horizontalPositionDesktopHero || 0;
  // console.log(heroImgDesktop);
  return (
    <div className="relative w-full overflow-hidden">
      {heroImgDesktop &&
      heroImgDesktop.sourceUrl &&
      heroImgDesktop.sourceUrl !==
        "https://ceva6.tcnj.edu/wp-content/uploads/sites/9/2023/12/placement-desk.jpg" ? (
        <picture>
          {heroImgMobileWebp && (
            <source
              media="(max-width: 550px)"
              srcSet={heroImgMobileWebp.sourceUrl}
            />
          )}
          {heroImgMobile && (
            <source
              media="(max-width: 550px)"
              srcSet={heroImgMobile.sourceUrl}
            />
          )}
          {heroImgTabletWebp && (
            <source
              media="(max-width: 900px)"
              srcSet={heroImgTabletWebp.sourceUrl}
              type="image/webp"
            />
          )}
          {heroImgTablet && (
            <source
              media="(max-width: 900px)"
              srcSet={heroImgTablet.sourceUrl}
            />
          )}
          {heroImgDesktopWebp && (
            <source srcSet={heroImgDesktopWebp.sourceUrl} type="image/webp" />
          )}
          <img
            src={heroImgDesktop?.sourceUrl}
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
      ) : (
        <picture>
          <source
            media="(max-width: 550px)"
            srcSet={`https://tcnj.edu/custom/graduate-programs/img/mobile/${strippedTitle}-MOBILE.webp`}
            type="image/webp"
          />

          <source
            media="(max-width: 550px)"
            srcSet={`https://tcnj.edu/custom/graduate-programs/img/mobile/${strippedTitle}-MOBILE.jpg`}
          />

          <source
            media="(max-width: 900px)"
            srcSet={`https://tcnj.edu/custom/graduate-programs/img/tablet/${strippedTitle}-TABLET.webp`}
            type="image/webp"
          />

          <source
            media="(max-width: 900px)"
            srcSet={`https://tcnj.edu/custom/graduate-programs/img/tablet/${strippedTitle}-TABLET.jpg`}
          />

          <source
            srcSet={`https://tcnj.edu/custom/graduate-programs/img/desktop/${strippedTitle}-DESKTOP.webp`}
            type="image/webp"
          />

          <img
            src={`https://tcnj.edu/custom/graduate-programs/img/desktop/${strippedTitle}-DESKTOP.jpg`}
            //   className={`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
            //  `}
            className={`relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
          graduate-standard-object-position-${desktopPosition}
                  graduate-mobile-object-position-${mobilePosition}
                  graduate-tablet-object-position-${tabletPosition}

        `}
            id="hero-img"
            alt={title}
          />
        </picture>
      )}
    </div>
  );
};

export default GraduateHero;
