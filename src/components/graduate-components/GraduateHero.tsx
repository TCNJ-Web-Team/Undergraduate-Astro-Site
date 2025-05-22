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
}) => {
  // console.log(heroImgTabletWebp, heroImgDesktopWebp);

  // console.log(heroImgMobileWebp);
  const mobilePosition = horizontalPositionMobile || 0;
  const tabletPosition = horizontalPositionTablet || 0;
  const desktopPosition = horizontalPositionDesktopHero || 0;
  // console.log(heroImgDesktop);
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
          <source media="(max-width: 550px)" srcSet={heroImgMobile.sourceUrl} />
        )}
        {heroImgTabletWebp && (
          <source
            media="(max-width: 900px)"
            srcSet={heroImgTabletWebp.sourceUrl}
            type="image/webp"
          />
        )}
        {heroImgTablet && (
          <source media="(max-width: 900px)" srcSet={heroImgTablet.sourceUrl} />
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
    </div>
  );
};

export default GraduateHero;
