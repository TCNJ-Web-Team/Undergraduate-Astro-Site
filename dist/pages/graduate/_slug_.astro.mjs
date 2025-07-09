/* empty css                                     */
import { b as createAstro, c as createComponent, a as renderComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_CQh-u2xo.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_Be99Bnas.mjs';
import { w as wpquery, N as NextStepFooter } from '../../chunks/NextStepFooter_C6vBo-hP.mjs';
import { u as useAccordionTrackStore, f as fadeInAnimationVariant, A as AnimatedTitle, T as TopOption, a as TopOptionNew, $ as $$LowerContent } from '../../chunks/fadeInVariant_TSF55Mkt.mjs';
/* empty css                                     */
/* empty css                                     */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { create } from 'zustand';
import { v4 } from 'uuid';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
export { renderers } from '../../renderers.mjs';

const NavigationBarGrad = ({
  additionalMenuItems,
  customCtaButtons
}) => {
  const { currentAccordionId, setCurrentAccordionId } = useAccordionTrackStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const additionalMenuItemsLength = additionalMenuItems?.filter((item) => item.includeInNav === true).length || 0;
  const getMenuHeight = () => {
    if (additionalMenuItemsLength < 3) return "h-[250px]";
    return "h-[300px]";
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-100  px-8 sm:px-[80px] md:px-8", id: "menu", children: /* @__PURE__ */ jsxs("div", { className: "lg:max-w-[70.5rem] mx-auto flex justify-items-start items-start md:gap-12 md:flex-row flex-col md:max-w-[920px]", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: toggleMenu,
        className: "md:hidden font-opensans text-[14px] leading-[40px] uppercase py-[12.5px] md:py-0 flex gap-[15px] items-center flex-row",
        children: [
          /* @__PURE__ */ jsx("span", { children: /* @__PURE__ */ jsx(
            "img",
            {
              className: "w-[17px] h-[14px] ",
              src: `/micro/${isMenuOpen ? "menu-close" : "menu-icon"}.svg`,
              alt: "menu icon"
            }
          ) }),
          "Menu"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `overflow-hidden transition-all md:transition-none duration-300 ease-in-out
          ${isMenuOpen ? `${getMenuHeight()} opacity-100 md:h-[60px]` : "h-[0px] md:h-[60px] opacity-0 md:opacity-100"} 
          flex
          transition-all duration-300 ease-in-out 
          md:flex flex-col md:flex-row md:gap-12  top-20 md:top-0 left-0  bg-gray-100 md:bg-transparent md:p-0 w-[100%] md:relative md:items-center`,
        children: [
          /* @__PURE__ */ jsx("hr", { className: "mb-[10px] md:hidden" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              onClick: (e) => {
                e.preventDefault();
                const targetId = "program-at-a-glance-intro";
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
                }
              },
              className: "cursor-pointer font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit",
              children: [
                "Overview",
                /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue" })
              ]
            }
          ),
          additionalMenuItems && additionalMenuItems.filter((item) => item.includeInNav === true).map((item, index) => /* @__PURE__ */ jsxs(
            "a",
            {
              onClick: (e) => {
                e.preventDefault();
                setCurrentAccordionId(null);
                setCurrentAccordionId(item.title);
                const targetId = item.title.replace(/\s+/g, "-").toLowerCase();
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: "smooth" });
                }
              },
              className: `cursor-pointer font-opensans text-sm leading-9 uppercase hover:text-primarylinkblue transition-all duration-300 ease-in-out group relative w-fit ${index === 2 ? "block md:hidden lg:block" : ""}`,
              children: [
                item.title,
                /* @__PURE__ */ jsx("span", { className: "absolute left-0 bottom-[-2px] md:bottom-[-25px] opacity-0 group-hover:opacity-100 group-hover:bottom-0 group-hover:md:bottom-[-18px] transition-all duration-300 ease-in-out w-[100%] h-[2px] md:h-[10px] bg-primarylinkblue" })
              ]
            },
            index
          )),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2 flex-row justify-items-start items-center md:absolute md:right-0 mt-[15px] md:mt-0", children: customCtaButtons ? customCtaButtons.map((button, index) => /* @__PURE__ */ jsx(
            "a",
            {
              href: button.buttonLink.url,
              target: "_blank",
              className: "program-button-nav-gtm py-3 px-6 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-black font-opensans text-[14px] leading-5 uppercase font-[600]",
              children: button.buttonText
            },
            index
          )) : /* @__PURE__ */ jsxs(Fragment, { children: [
            " ",
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://admissions.tcnj.edu/apply/",
                target: "_blank",
                className: "program-button-nav-gtm py-3 px-6 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-black font-opensans text-[14px] leading-5 uppercase font-[600]",
                children: "Apply"
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://connect.tcnj.edu/register/prospect",
                target: "_blank",
                className: "py-3 px-6 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 ease-in-out text-black font-opensans text-[14px] leading-5 uppercase font-[600]",
                children: "Get Info"
              }
            )
          ] }) })
        ]
      }
    )
  ] }) });
};

const AtAGlanceGrad = ({
  programAtAGlance,
  programImageCheck,
  programCoordinators
}) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "program-at-a-glance-intro",
        className: "pt-[91px] sm:pt-[103px]\nmd:pt-[135px] lg:pt-[187px]"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        id: "program-at-a-glance",
        className: `${programImageCheck ? "pb-[145px]  sm:pb-[160px] md:pb-[150px] lg:pb-[200px]" : "pb-[100px]  sm:pb-[123px] md:pb-[150px] lg:pb-[198px]"}   `,
        variants: fadeInAnimationVariant,
        initial: "initial",
        whileInView: "animate",
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              className: `text-center font-chunkfive text-tcnjblue text-[45px] leading-[62px] pb-[20px] sm:pb-[27px] sm:text-[55px] sm:leading-[75px] md:text-[65px] md:leading-[89px] md:pb-[17px]
            lg:pb-[14px]
        
        `,
              variants: fadeInAnimationVariant,
              custom: 1,
              children: "At a Glance"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              id: "program-glance",
              className: `text-[20px] leading-[35px] text-center sm:text-[21px] sm:leading-[40px] md:text-[23px] md:leading-[45px] yellow-body-copy`,
              dangerouslySetInnerHTML: { __html: programAtAGlance },
              variants: fadeInAnimationVariant,
              custom: 1
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              id: "program-coordinators",
              className: `text-[19px] leading-[27px] text-center yellow-body-copy flex flex-col gap-[10px]
            pt-[37px] sm:pt-[26px] md:pt-[38px] lg:pt-[42px]`,
              dangerouslySetInnerHTML: { __html: programCoordinators || "" },
              variants: fadeInAnimationVariant,
              custom: 1
            }
          )
        ]
      }
    )
  ] });
};

const ProgramDetailsGrad = ({
  programDetails
}) => {
  const [activePopupIndex, setActivePopupIndex] = useState(null);
  const popupRefs = useRef([]);
  const handleClick = (index) => {
    setActivePopupIndex((prevIndex) => prevIndex === index ? null : index);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideAny = popupRefs.current.some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!clickedInsideAny) {
        setActivePopupIndex(null);
      }
    };
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setActivePopupIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      id: "program-details",
      className: "text-center grid grid-cols-1 smMd:grid-cols-2 md:grid-cols-3 gap-[78px] sm:gap-[30px] sm:gap-y-[100px] md:gap-y-[112px]  pb-[100px] sm:pb-[125px] md:pb-[150px]  lg:pb-[200px] items-start",
      variants: fadeInAnimationVariant,
      initial: "initial",
      whileInView: "animate",
      viewport: { once: true },
      children: programDetails && programDetails.map((detail, index) => {
        return /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "flex flex-col justify-between items-center text-center relative sm:min-h-[139px]",
            variants: fadeInAnimationVariant,
            custom: index + 2,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-grow flex flex-col items-center justify-start gap-[10px] sm:gap-[7px] md:gap-[10px] lg:gap-[16px] ", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-[45px] leading-[55px] sm:leading-[53px] sm:text-[40px]  font-alfaslab text-tcnjblue lg:mb-[-2px] xl:mb-[-4px]", children: detail.detailTitle }),
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center justify-center gap-1 flex-col", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `text-[21px] md:text-[23px] leading-[30px] md:mt-[4px] lg:mt-0 lg:leading-[26px] text-center detail-listing-text 
                     max-w-[250px] sm:max-w-[none] lg:text-[23px] lg:leading-[33px]${detail.popupContent ? " has-popup-tag" : ""}`,
                      dangerouslySetInnerHTML: {
                        __html: detail.detailContent || ""
                      },
                      onClick: () => handleClick(index)
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "popup-detail-container relative w-full h-[1px] mt-[-1px]", children: detail.popupContent && activePopupIndex === index && /* @__PURE__ */ jsx(
                    "div",
                    {
                      ref: (el) => popupRefs.current[index] = el,
                      className: "popup-detail  bg-white w-[320px] p-[20px] shadow-lg z-[1000]  mt-[-5px]\n                       absolute left-1/2 transform -translate-x-1/2 top-[20px] \n                    ",
                      dangerouslySetInnerHTML: {
                        __html: detail.popupContent || ""
                      }
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsx("hr", { className: "h-[5px] md:h-[4px] w-[200px] bg-white mt-[18px] sm:mt-[28px]" })
            ]
          },
          index
        );
      })
    }
  );
};

function parseCustomDate(input) {
  const [datePart, timePart, meridian] = input.trim().split(/[\s]+/);
  if (!datePart || !timePart || !meridian) return null;
  const [month, day, year] = datePart.split("/").map(Number);
  const [hourRaw, minute] = timePart.split(":").map(Number);
  if (!month || !day || !year || hourRaw === void 0 || minute === void 0)
    return null;
  let hour = hourRaw;
  if (meridian.toUpperCase() === "PM" && hour < 12) hour += 12;
  if (meridian.toUpperCase() === "AM" && hour === 12) hour = 0;
  return new Date(year, month - 1, day, hour, minute);
}
const AnnouncementBar = ({
  copy,
  start,
  end,
  link,
  linkText
}) => {
  const [shouldShow, setShouldShow] = useState(false);
  useEffect(() => {
    const now = /* @__PURE__ */ new Date();
    const startDate = parseCustomDate(start);
    const endDate = end ? parseCustomDate(end) : null;
    if (startDate && now >= startDate && (!endDate || now <= endDate)) {
      setShouldShow(true);
    }
  }, [start, end]);
  if (!shouldShow) return null;
  return /* @__PURE__ */ jsx("div", { className: "bg-lightgrey pl-[35px] pr-[35px] sm:pl-[80px] sm:pr-[80px] md:pl-[35px] md:pr-[35px]", children: /* @__PURE__ */ jsxs(
    "div",
    {
      id: "announcement-bar",
      className: "flex flex-col md:flex-row md:gap-[20px] mx-auto py-[30px] text-center justify-center lg:max-w-[70.5rem] md:max-w-[920px] text-[17px] leading-[25px]",
      children: [
        /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: { __html: copy } }),
        link && linkText && /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("a", { href: link, className: "underline text-primarylinkblue", children: linkText }) })
      ]
    }
  ) });
};

const useVideoStore = create((set) => ({
  currentVideoId: null,
  setCurrentVideoId: (id) => set({ currentVideoId: id })
}));

const VideoPlayerBody = ({
  videoUrl = "https://player.vimeo.com/progressive_redirect/playback/1045005215/rendition/1080p/file.mp4?loc=external&signature=aab76518d4c1b73210f37b990644114d81f4f8d6a84d7bd97a95bfef8f5abbf1",
  posterImage = "https://tcnj.edu/custom/homepage/img/compressed/anthem/anthem-thumbnail.jpg",
  captionUrl = "https://tcnj.edu/custom/homepage/captions/anthem-video-captions2.vtt",
  indexNumber,
  videosLength
}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentVideoId, setCurrentVideoId } = useVideoStore();
  const thisVideoId = useRef(v4()).current;
  useEffect(() => {
    if (currentVideoId !== thisVideoId && isPlaying) {
      const video2 = videoRef.current;
      if (video2) {
        video2.pause();
        video2.controls = false;
        video2.setAttribute("poster", posterImage);
        setIsPlaying(false);
      }
    }
  }, [currentVideoId, isPlaying, thisVideoId]);
  const handlePlayClick = async () => {
    const video2 = videoRef.current;
    if (video2) {
      try {
        await video2.play();
        video2.controls = true;
        setIsPlaying(true);
        setCurrentVideoId(thisVideoId);
      } catch (err) {
        console.error("Autoplay/play failed:", err);
      }
    }
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `video-player-container relative w-full ${indexNumber === 0 ? `sm:col-span-2 lg:row-span-3 ` : ""}`,
      id: `video-number-${indexNumber}`,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: `relative w-full h-[500px] sm:h-auto sm:aspect-w-16 sm:aspect-h-9 bg-black overflow-hidden`,
          children: [
            /* @__PURE__ */ jsxs(
              "video",
              {
                ref: videoRef,
                className: `absolute inset-0 w-full h-full ${isPlaying ? "object-contain" : "object-cover"}`,
                controls: false,
                playsInline: true,
                preload: "auto",
                disablePictureInPicture: true,
                disableRemotePlayback: true,
                controlsList: "nodownload noplaybackrate",
                poster: posterImage,
                children: [
                  /* @__PURE__ */ jsx("source", { src: videoUrl, type: "video/mp4" }),
                  captionUrl && /* @__PURE__ */ jsx(
                    "track",
                    {
                      kind: "captions",
                      label: "English",
                      src: captionUrl,
                      srcLang: "en"
                    }
                  ),
                  "Your browser does not support the video tag."
                ]
              }
            ),
            !isPlaying && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: handlePlayClick,
                className: "absolute inset-0 z-10 flex items-center justify-center bg-black/30",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "../../video-play-button.svg",
                    alt: "Play",
                    className: `w-[100px] h-[100px] sm:w-[75px]  sm:h-[75px] md:w-[125px]  md:h-[125px] ${videosLength === 3 ? indexNumber && indexNumber > 0 ? "lg:w-[75px] lg:h-[75px]" : "" : ""}`
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
};

const GraduateHero = ({
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
  oldHeroName
}) => {
  const strippedTitle = oldHeroName ? oldHeroName : title.replace(/online/gi, "").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").toLowerCase();
  const mobilePosition = horizontalPositionMobile || 0;
  const tabletPosition = horizontalPositionTablet || 0;
  const desktopPosition = horizontalPositionDesktopHero || 0;
  return /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-hidden", children: heroImgDesktop && heroImgDesktop.sourceUrl && heroImgDesktop.sourceUrl !== "https://ceva6.tcnj.edu/wp-content/uploads/sites/9/2023/12/placement-desk.jpg" ? /* @__PURE__ */ jsxs("picture", { children: [
    heroImgMobileWebp && /* @__PURE__ */ jsx(
      "source",
      {
        media: "(max-width: 550px)",
        srcSet: heroImgMobileWebp.sourceUrl
      }
    ),
    heroImgMobile && /* @__PURE__ */ jsx(
      "source",
      {
        media: "(max-width: 550px)",
        srcSet: heroImgMobile.sourceUrl
      }
    ),
    heroImgTabletWebp && /* @__PURE__ */ jsx(
      "source",
      {
        media: "(max-width: 900px)",
        srcSet: heroImgTabletWebp.sourceUrl,
        type: "image/webp"
      }
    ),
    heroImgTablet && /* @__PURE__ */ jsx(
      "source",
      {
        media: "(max-width: 900px)",
        srcSet: heroImgTablet.sourceUrl
      }
    ),
    heroImgDesktopWebp && /* @__PURE__ */ jsx("source", { srcSet: heroImgDesktopWebp.sourceUrl, type: "image/webp" }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: heroImgDesktop?.sourceUrl,
        className: `relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
      standard-object-position-${desktopPosition} 
              mobile-object-position-${mobilePosition} 
              tablet-object-position-${tabletPosition}
  
    `,
        id: "hero-img",
        alt: title
      }
    )
  ] }) : /* @__PURE__ */ jsxs("picture", { children: [
    /* @__PURE__ */ jsx(
      "source",
      {
        media: "(max-width: 550px)",
        srcSet: `https://tcnj.edu/custom/graduate-programs/img/mobile/${strippedTitle}-MOBILE.webp`,
        type: "image/webp"
      }
    ),
    /* @__PURE__ */ jsx(
      "source",
      {
        media: "(max-width: 550px)",
        srcSet: `https://tcnj.edu/custom/graduate-programs/img/mobile/${strippedTitle}-MOBILE.jpg`
      }
    ),
    /* @__PURE__ */ jsx(
      "source",
      {
        media: "(max-width: 900px)",
        srcSet: `https://tcnj.edu/custom/graduate-programs/img/tablet/${strippedTitle}-TABLET.webp`,
        type: "image/webp"
      }
    ),
    /* @__PURE__ */ jsx(
      "source",
      {
        media: "(max-width: 900px)",
        srcSet: `https://tcnj.edu/custom/graduate-programs/img/tablet/${strippedTitle}-TABLET.jpg`
      }
    ),
    /* @__PURE__ */ jsx(
      "source",
      {
        srcSet: `https://tcnj.edu/custom/graduate-programs/img/desktop/${strippedTitle}-DESKTOP.webp`,
        type: "image/webp"
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: `https://tcnj.edu/custom/graduate-programs/img/desktop/${strippedTitle}-DESKTOP.jpg`,
        className: `relative z-30 w-[100%] h-[450px] sm:h-[600px] md:h-[500px] lg:h-[700px] object-cover pl-[35px] lg:pl-[100px] xl:pl-[200px]
          graduate-standard-object-position-${desktopPosition}
                  graduate-mobile-object-position-${mobilePosition}
                  graduate-tablet-object-position-${tabletPosition}

        `,
        id: "hero-img",
        alt: title
      }
    )
  ] }) });
};

const GradRelatedPrograms = ({
  learnMoreList
}) => {
  const [marginLeft, setMarginLeft] = useState(0);
  const containerRef = useRef(null);
  useEffect(() => {
    function updateMargin() {
      if (containerRef.current) {
        const computedStyle = window.getComputedStyle(containerRef.current);
        const ml = parseFloat(computedStyle.marginLeft);
        setMarginLeft(ml);
      }
    }
    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: containerRef,
        className: "md:max-w-[920px] mx-auto h-[1px]"
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        id: "learn-more-list",
        className: "sm:px-[45px] md:px-[20px] lgMd:px-0 lg:px-0",
        children: /* @__PURE__ */ jsxs(
          Swiper,
          {
            breakpoints: {
              250: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                slidesOffsetAfter: 70
              },
              550: { slidesPerView: 2, spaceBetween: 20, slidesOffsetAfter: 0 },
              900: {
                slidesPerView: 2.75,
                spaceBetween: 27,
                slidesOffsetBefore: marginLeft,
                slidesOffsetAfter: marginLeft
              },
              1281: { slidesPerView: 3, spaceBetween: 20 }
            },
            modules: [Navigation],
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 transform -translate-x-1/2 md:max-w-[920px] lg:max-w-[70.5rem] w-full", children: /* @__PURE__ */ jsx("h2", { className: "pl-[35px] pr-[35px] sm:pl-[0px] sm:pr-[0px]  font-alfaslab font-normal text-[23px] sm:text-[30px] leading-[28px] sm:leading-[40px] text-tcnjblue", children: "Related Programs" }) }),
              learnMoreList.map((content) => {
                const hasLink = content?.localLink?.id || content?.externalUrlOrRedirectLink?.pageTitleAndUrl?.url;
                if (!hasLink) return null;
                return /* @__PURE__ */ jsx(
                  SwiperSlide,
                  {
                    className: "border border-[#BFBFBF] w-auto",
                    id: content?.localLink?.id || content.externalUrlOrRedirectLink?.pageTitleAndUrl?.url,
                    children: /* @__PURE__ */ jsxs(
                      "a",
                      {
                        className: "program-rp-link-gtm p-[35px] sm:py-[45px] sm:px-[25px] md:px-[50px] min-h-[250px] block",
                        href: content?.localLink?.graduateProgram?.slug && `/graduate/${content?.localLink?.graduateProgram?.slug}` || content?.localLink?.program?.slug && `/${content?.localLink?.program?.slug}` || content?.externalUrlOrRedirectLink?.pageTitleAndUrl?.url,
                        children: [
                          /* @__PURE__ */ jsx("p", { className: "font-domine font-semibold text-[18px] leading-[28px] sm:leading-[21px] md:text-[21px] md:leading-[24px]", children: content?.localLink?.title || content?.externalUrlOrRedirectLink?.pageTitleAndUrl?.title }),
                          /* @__PURE__ */ jsx("hr", { className: "m-[25px] mr-0 ml-0 md:mt-[27px]" }),
                          content?.additionalLabel && /* @__PURE__ */ jsx("p", { className: "font-opensans text-[14px] leading-[20px]", children: content.additionalLabel }),
                          content?.localLink && !content?.additionalLabel && /* @__PURE__ */ jsx("p", { className: "font-opensans text-[14px] leading-[20px]", children: content?.localLink?.graduateProgram?.school?.[0] && `School of ${content?.localLink?.graduateProgram?.school?.[0]}` || `School of ${content?.localLink?.program?.school?.[0]}` })
                        ]
                      }
                    )
                  },
                  content?.localLink?.id || content.externalUrlOrRedirectLink?.pageTitleAndUrl?.url
                );
              }),
              /* @__PURE__ */ jsxs(
                "div",
                {
                  id: "swiper-navigation",
                  className: "lg:!right-0",
                  style: { right: marginLeft },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "swiper-button-next" }),
                    /* @__PURE__ */ jsx("div", { className: "swiper-button-prev" })
                  ]
                }
              )
            ]
          },
          marginLeft
        )
      }
    )
  ] });
};

const $$Astro = createAstro("https://programs.tcnj.edu");
async function getStaticPaths() {
  const data = await wpquery({
    query: `query GraduateProgramLising {
  graduatePrograms(first:120) {
    nodes {
      graduateProgram {
        school
        slug
        acceleratedSubtitle
        announcementBar {
          accouncementLink
          announcementEndDate
          announcementLinkText
          announcementStartDate
          announcementText
        }
        customCtaButtons {
          buttonLink {
            url
          }
          buttonText
        }
        degreeType
        repeaterDegrees {
          degreeName
        }
        departmentRepeater {
          deptTitle
          deptUrl
        }
   heroImgDesktop {
          sourceUrl
        }
        heroImgDesktopWebp{
          sourceUrl
        }
        horizontalPositionDesktopHero
        horizontalPositionTablet
        horizontalPositionMobile
        heroImgTablet{
          sourceUrl
        }
        heroImgTabletWebp{
          sourceUrl
        }
        heroImgMobile{
          sourceUrl
        }
    heroImgMobileWebp{
          sourceUrl
        }
        programAtAGlance
        programCoordinators
        programDetails {
          detailTitle
          detailContent
          popupContent
        }
        programHighlights
        lowerContent {
          title
          body
          abbreviatedNavTitle
          includeInNav
        }
        learnMoreList {
          localLink {
            ... on GraduateProgram {
              id
              title
              graduateProgram {
                slug
                school
              }
            }
            ... on Program {
              id
              title
              program {
                slug
                school
              }
            }
          }
      
          additionalLabel
          externalUrlOrRedirectLink {
            pageTitleAndUrl {
              title
              url
            }
          }
        }
        metaTitle
        metaDescription
        socialImage{
          sourceUrl
        }
        videos {
          captionUrl
          posterImage {
            sourceUrl
          }
          videoUrl
        }
        oldHeroName
      }
      title
    }
  }
}`
  });
  const paths = data.graduatePrograms.nodes.map(
    (program) => ({
      params: { slug: program.graduateProgram.slug },
      props: {
        slug: program.graduateProgram.slug,
        title: program.title,
        programAtAGlance: program.graduateProgram.programAtAGlance,
        programCoordinators: program.graduateProgram.programCoordinators,
        programDetails: program.graduateProgram.programDetails,
        programHighlights: program.graduateProgram.programHighlights,
        announcementBar: program.graduateProgram.announcementBar,
        customCtaButtons: program.graduateProgram.customCtaButtons,
        horizontalPositionDesktopHero: program.graduateProgram.horizontalPositionDesktopHero,
        horizontalPositionTablet: program.graduateProgram.horizontalPositionTablet,
        horizontalPositionMobile: program.graduateProgram.horizontalPositionMobile,
        degreeType: program.graduateProgram.degreeType,
        repeaterDegrees: program.graduateProgram.repeaterDegrees,
        school: program.graduateProgram.school,
        acceleratedSubtitle: program.graduateProgram.acceleratedSubtitle,
        department: program.graduateProgram.departmentRepeater,
        heroImgDesktop: program.graduateProgram.heroImgDesktop,
        heroImgDesktopWebp: program.graduateProgram.heroImgDesktopWebp,
        heroImgTablet: program.graduateProgram.heroImgTablet,
        heroImgTabletWebp: program.graduateProgram.heroImgTabletWebp,
        heroImgMobile: program.graduateProgram.heroImgMobile,
        heroImgMobileWebp: program.graduateProgram.heroImgMobileWebp,
        badge: program.graduateProgram.badge,
        careersTitle: program.graduateProgram.careersTitle,
        careers: program.graduateProgram.careers,
        programOfStudy: program.graduateProgram.programOfStudy,
        lowerContent: program.graduateProgram.lowerContent,
        quoteContentArea: program.graduateProgram.quoteContentArea,
        learnMoreList: program.graduateProgram.learnMoreList,
        metaTitle: program.graduateProgram.metaTitle,
        metaDescription: program.graduateProgram.metaDescription,
        socialImage: program.graduateProgram.socialImage,
        videos: program.graduateProgram.videos,
        oldHeroName: program.graduateProgram.oldHeroName
      }
    })
  );
  const { gradProgramsRedirects } = await wpquery({
    query: `query GradRedirectList {
      gradProgramsRedirects(first: 220) {
       nodes {
          graduateProgramRedirect {
            redirectUrl
            slug
          }
        }
      }
    }`
  });
  const redirectPaths = gradProgramsRedirects.nodes.map(
    (node) => ({
      params: { slug: node.graduateProgramRedirect.slug },
      redirect: node.graduateProgramRedirect.redirectUrl.startsWith("http") ? node.graduateProgramRedirect.redirectUrl : `https://${node.graduateProgramRedirect.redirectUrl}`
    })
  );
  return [...redirectPaths, ...paths];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const {
    slug,
    title,
    programAtAGlance,
    programCoordinators,
    programDetails,
    programHighlights,
    announcementBar,
    customCtaButtons,
    horizontalPositionDesktopHero,
    horizontalPositionTablet,
    horizontalPositionMobile,
    degreeType,
    repeaterDegrees,
    school,
    acceleratedSubtitle,
    department,
    heroImgDesktop,
    heroImgDesktopWebp,
    heroImgTablet,
    heroImgTabletWebp,
    heroImgMobile,
    heroImgMobileWebp,
    badge,
    careersTitle,
    careers,
    programOfStudy,
    lowerContent,
    quoteContentArea,
    learnMoreList,
    metaTitle,
    metaDescription,
    socialImage,
    videos,
    oldHeroName
  } = Astro2.props;
  const socialSourceUrl = socialImage?.sourceUrl || `https://tcnj.edu/custom/graduate-programs/img/facebook/${oldHeroName || slug}-FACEBOOK.jpg`;
  const { sourceUrl } = heroImgDesktop ?? {
    sourceUrl: ""
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title + " | TCNJ", "description": metaDescription, "metaTitle": title + " | TCNJ", "image": socialSourceUrl }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "NavigationBarGrad", NavigationBarGrad, { "additionalMenuItems": lowerContent, "customCtaButtons": customCtaButtons, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/NavigationBarGrad", "client:component-export": "default" })} ${maybeRenderHead()}<main class="font-domine text-darkgrey overflow-hidden"> <div class="bg-tcnjyellow w-auto"> <div class="pl-[35px]
      pr-[35px]
      lg:max-w-[70.5rem]
      md:max-w-[990px]
      pt-[31px]
      sm:pt-[47px]
      md:pt-[56px]
      m-auto
      lg:pl-0
      lg:pr-0"> <p class="text-[17px] leading-[26px] pb-[18px] font-domine
          sm:pb-[30px]
        sm:text-[17px]
        sm:leading-[19px]
        sm:px-[45px]
        md:text-[18px]
        md:leading-[21px]
        md:pb-[25px]
        md:px-0
        lg:pb-[26px]
        lg:text-[18px]
                lg:leading-[21px]"> <a href="https://graduate.tcnj.edu" class="yellow-bg-text">Graduate Home</a> / <a href="/graduate" class="yellow-bg-text">Explore Graduate Programs</a> / <span class="font-bold"> ${title} </span> </p> ${renderComponent($$result2, "AnimatedTitle", AnimatedTitle, { "title": title, "subtitle": acceleratedSubtitle, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/program-page/AnimatedTitle", "client:component-export": "default" })} </div> <div${addAttribute(`w-auto bg-tcnjyellow md:bg-yellowWhiteGradientMd lg:bg-yellowWhiteGradientLg
      ${acceleratedSubtitle ? "mt-[35px] sm:mt-[39px] md:mt-[55px]" : "mt-[42px] sm:mt-[40px] md:mt-[50px] "}`, "class")}> ${renderComponent($$result2, "GraduateHero", GraduateHero, { "oldHeroName": oldHeroName, "heroImgMobileWebp": heroImgMobileWebp, "heroImgMobile": heroImgMobile, "heroImgTabletWebp": heroImgTabletWebp, "heroImgTablet": heroImgTablet, "heroImgDesktopWebp": heroImgDesktopWebp, "heroImgDesktop": heroImgDesktop, "horizontalPositionDesktopHero": horizontalPositionDesktopHero, "horizontalPositionTablet": horizontalPositionTablet, "horizontalPositionMobile": horizontalPositionMobile, "title": title, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/GraduateHero", "client:component-export": "default" })} </div> </div> <div class="bg-white
    w-auto
    pt-[45px]
    pb-[43px]
    sm:pt-[35px]
    sm:pb-[35px]
    pl-[35px]
    pr-[35px]
    md:pt-[50px]
    md:pb-[50px]"> <div class="lg:max-w-[70.5rem] md:max-w-[920px] bg-white m-auto"> <div id="degree-school-department" class="flex
          
          items-start
          flex-col
          gap-[31px]
          sm:gap-[35px]
          sm:max-w-[685px]
          sm:m-auto
          sm:flex-row
          sm:flex-nowrap
        
          sm:justify-between
          md:max-w-none"> ${renderComponent($$result2, "TopOption", TopOption, { "heading": repeaterDegrees && repeaterDegrees.length > 1 ? "Degrees" : "Degree", "imgSrc": "ribbon" }, { "default": async ($$result3) => renderTemplate`${Array.isArray(repeaterDegrees) ? repeaterDegrees.map((degree, index) => renderTemplate`<span${addAttribute(`block ${index >= 1 ? "mt-[4px] lg:mt-[6px]" : ""}`, "class")}> ${degree.degreeName} </span>`) : null}` })} ${renderComponent($$result2, "TopOptionNew", TopOptionNew, { "client:load": true, "school": school, "heading": school && school.length > 1 ? "Schools" : "School", "imgSrc": "building", "techEdMarginCheck": slug === "technology-engineering-education" ? true : false, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/TopOptionNew", "client:component-export": "default" }, { "default": async ($$result3) => renderTemplate`${school}` })} <!-- <TopOptionNew client:load department={department} heading={department && department.length > 1 ? 'Departments' : "Department"} imgSrc="departments">
            {school}
          </TopOptionNew> --> ${department && renderTemplate`${renderComponent($$result2, "TopOption", TopOption, { "client:load": true, "heading": department && department.length > 1 ? "Departments" : "Department", "department": department, "imgSrc": "departments", "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/TopOption", "client:component-export": "default" })}`} </div> </div> </div> ${announcementBar.announcementStartDate && announcementBar.announcementText && renderTemplate`${renderComponent($$result2, "AnnouncementBar", AnnouncementBar, { "copy": announcementBar.announcementText, "start": announcementBar.announcementStartDate, "end": announcementBar.announcementEndDate, "link": announcementBar.accouncementLink, "linkText": announcementBar.announcementLinkText, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/AnnouncementBar", "client:component-export": "default" })}`} <div class="bg-tcnjyellow w-auto
    pl-[35px]
    pr-[35px]
    sm:pl-[80px]
    sm:pr-[80px]
    md:pl-[35px]
    md:pr-[35px]"> <div class="lg:max-w-[70.5rem] md:max-w-[920px] m-auto"> ${renderComponent($$result2, "AtAGlanceGrad", AtAGlanceGrad, { "programAtAGlance": programAtAGlance, "programCoordinators": programCoordinators, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/AtAGlanceGrad", "client:component-export": "default" })} ${renderComponent($$result2, "ProgramDetailsGrad", ProgramDetailsGrad, { "programDetails": programDetails, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/ProgramDetailsGrad", "client:component-export": "default" })} </div> </div> ${videos && videos.length > 0 && videos[0].videoUrl && renderTemplate`<div class="sm:px-[35px] bg-tcnjyellow "> <div${addAttribute(`w-full ${videos.length === 2 ? " gradient-yellow-white-25 sm:gradient-yellow-white-75  md:gradient-yellow-white-50 " : videos.length === 3 ? "gradient-yellow-white-50 sm:gradient-yellow-white-85  md:gradient-yellow-white-82" : "gradient-yellow-white-50"}`, "class")}> <div class="lg:max-w-[70.5rem] md:max-w-[920px] m-auto px-[35px] sm:px-[45px] lgMd:px-0 "> ${videos.length < 3 ? renderTemplate`<div class="flex flex-col gap-[25px] md:flex-row"> ${videos.map((video2, index) => renderTemplate`${renderComponent($$result2, "VideoPlayerBody", VideoPlayerBody, { "data-key": index, "videoUrl": video2.videoUrl, "posterImage": video2?.posterImage?.sourceUrl, "captionUrl": video2?.captionUrl, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/VideoPlayerBody", "client:component-export": "default" })}`)} </div>` : renderTemplate`<div${addAttribute(`flex flex-col sm:grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3 ${videos.length === 3 ? `lg:gap-x-[40px] lg:gap-y-[22px]` : ``}`, "class")}> ${videos.map((video2, index) => renderTemplate`${renderComponent($$result2, "VideoPlayerBody", VideoPlayerBody, { "data-key": index, "videoUrl": video2.videoUrl, "posterImage": video2.posterImage.sourceUrl, "captionUrl": video2.captionUrl, "indexNumber": index, "videosLength": videos.length, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/VideoPlayerBody", "client:component-export": "default" })}`)} </div>`} </div> </div> </div>`} <!-- <div class="bg-tcnjyellow w-auto"> --> <div class="sm:border-x-[35px] border-tcnjyellow bg-white w-full h-[75px] sm:h-[100px] md:h-0"></div> <!-- </div> --> <div id="programs-of-study-container" class="px-[35px] w-auto sm:bg-tcnjyellow"> <div class="m-auto
      bg-white
      relative
      pb-[75px]
      sm:pb-[93px]
      sm:px-[45px]
      md:pb-[120px]"> <div${addAttribute(`lg:max-w-[70.5rem] md:max-w-[920px] 
        m-auto
        bg-white
        pt-[0px]
        pb-[0] md:pt-[127px]`, "class")}> <div class="font-domine text-[19px] leading-[30px]" id="program-body-copy">${unescapeHTML(programHighlights || "")}</div> </div> </div> </div> <div class="px-[0] sm:px-[35px] w-auto sm:bg-tcnjyellow" id="lower-content-and-related-progras"> <div class="m-auto bg-white pb-[75px] sm:pb-[75px] md:pb-[150px]"> <div class="lg:max-w-[70.5rem] md:max-w-[920px] m-auto"> ${lowerContent && renderTemplate`${renderComponent($$result2, "LowerContent", $$LowerContent, { "lowerContent": lowerContent, "quote": quoteContentArea })}`} ${!lowerContent && renderTemplate`<div class="
          h-[0px]
          mt-[-7px]
          md:mt-[0px]
          md:h-[46px]
          lg:h-[33px]
          "></div>`} </div> <div class="lg:max-w-[70.5rem] lg:m-auto"> <!-- {
            learnMoreList && (
              <RelatedProgSlider learnMoreList={learnMoreList} client:idle />
            )
          } --> ${learnMoreList && renderTemplate`${renderComponent($$result2, "GradRelatedPrograms", GradRelatedPrograms, { "learnMoreList": learnMoreList, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/components/graduate-components/GradRelatedPrograms", "client:component-export": "default" })}`} </div> </div> </div> ${renderComponent($$result2, "NextStepFooter", NextStepFooter, { "customCtaButtons": customCtaButtons })} </main>` })}`;
}, "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/graduate/[slug].astro", void 0);

const $$file = "/Users/holstena/Documents/GitHub/Undergraduate-Astro/src/pages/graduate/[slug].astro";
const $$url = "/graduate/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
