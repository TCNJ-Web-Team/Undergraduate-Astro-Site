import { useState, useRef, useEffect } from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { SwiperNavButtons } from "./SwiperNavButton";
import "../../styles/custom-swiper.scss";
// Interfaces for program types
// interface GraduateProgramDetails {
//   slug: string;
//   school: string;
// }

// interface ProgramDetails {
//   slug: string;
//   school: string;
// }

// interface GraduateProgramLink {
//   id: string;
//   title: string;
//   graduateProgram: GraduateProgramDetails[];
// }

// interface ProgramLink {
//   id: string;
//   title: string;
//   program: ProgramDetails[];
// }

// type LocalLink = GraduateProgramLink | ProgramLink;
interface LocalLink {
  id: string;
  title: string;
  program?: { slug?: string; school?: string };
  graduateProgram?: { slug?: string; school?: string };
}

// interface PageTitleAndUrl {
//   title: string;
//   url: string;
// }

interface LearnMoreItem {
  localLink: LocalLink;
  additionalLabel?: string;
  externalUrlOrRedirectLink?: {
    pageTitleAndUrl: { title: string; url: string };
  };
}

interface GradRelatedProgramsProps {
  learnMoreList: LearnMoreItem[];
}

const GradRelatedPrograms: React.FC<GradRelatedProgramsProps> = ({
  learnMoreList,
}) => {
  const [marginLeft, setMarginLeft] = useState(0);
  const containerRef = useRef(null);
  // console.log(learnMoreList);
  useEffect(() => {
    function updateMargin() {
      if (containerRef.current) {
        const computedStyle = window.getComputedStyle(containerRef.current);
        const ml = parseFloat(computedStyle.marginLeft);
        // console.log("Computed margin left:", ml); // Log the computed margin here
        setMarginLeft(ml);
      }
    }

    updateMargin();
    window.addEventListener("resize", updateMargin);
    return () => window.removeEventListener("resize", updateMargin);
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="md:max-w-[920px] mx-auto h-[1px]"
      ></div>
      <div
        id="learn-more-list"
        className="sm:px-[45px] md:px-[20px] lgMd:px-0 lg:px-0"
      >
        <Swiper
          key={marginLeft} // When marginLeft updates, Swiper will remount
          breakpoints={{
            250: {
              slidesPerView: 1.5,
              spaceBetween: 20,
              slidesOffsetAfter: 70,
            },
            550: { slidesPerView: 2, spaceBetween: 20, slidesOffsetAfter: 0 },
            900: {
              slidesPerView: 2.75,
              spaceBetween: 27,
              slidesOffsetBefore: marginLeft,
              slidesOffsetAfter: marginLeft,
            },
            1281: { slidesPerView: 3, spaceBetween: 20 },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:max-w-[920px] lg:max-w-[70.5rem] w-full">
            <h2 className="pl-[35px] pr-[35px] sm:pl-[0px] sm:pr-[0px]  font-alfaslab font-normal text-[23px] sm:text-[30px] leading-[28px] sm:leading-[40px] text-tcnjblue">
              Related Programs
            </h2>
          </div>
          {learnMoreList.map((content) => {
            // console.log(content.title);
            // console.log(content?.localLink?.graduateProgram);
            return (
              //   <div>Test</div>
              <SwiperSlide
                className="border border-[#BFBFBF] w-auto"
                id={
                  content?.localLink?.id ||
                  content.externalUrlOrRedirectLink?.pageTitleAndUrl?.url
                }
                key={
                  content?.localLink?.id ||
                  content.externalUrlOrRedirectLink?.pageTitleAndUrl?.url
                }
              >
                <a
                  className="program-rp-link-gtm p-[35px] sm:py-[45px] sm:px-[25px] md:px-[50px] min-h-[250px] block"
                  href={
                    (content?.localLink?.graduateProgram?.slug &&
                      `/graduate/${content?.localLink?.graduateProgram?.slug}`) ||
                    (content?.localLink?.program?.slug &&
                      `/${content?.localLink?.program?.slug}`) ||
                    content?.externalUrlOrRedirectLink?.pageTitleAndUrl?.url
                  }
                >
                  <p className="font-domine font-semibold text-[18px] leading-[28px] sm:leading-[21px] md:text-[21px] md:leading-[24px]">
                    {content?.localLink?.title ||
                      content?.externalUrlOrRedirectLink?.pageTitleAndUrl.title}
                  </p>
                  <hr className="m-[25px] mr-0 ml-0 md:mt-[27px]" />
                  {content?.additionalLabel && (
                    <p className="font-opensans text-[14px] leading-[20px]">
                      {content.additionalLabel}
                    </p>
                  )}
                  {content?.localLink && !content?.additionalLabel && (
                    <p className="font-opensans text-[14px] leading-[20px]">
                      {/* {content?.localLink?.graduateProgram?.map(
                        (schoolContent, index) => {
                          console.log(schoolContent);
                          return <span key={index}>{schoolContent}</span>;
                        }
                      )} */}
                      {(content?.localLink?.graduateProgram?.school?.[0] &&
                        `School of ${content?.localLink?.graduateProgram?.school?.[0]}`) ||
                        `School of ${content?.localLink?.program?.school?.[0]}`}
                    </p>
                  )}
                  {/* {content?.localLink?.program && (
                    <p className="font-opensans text-[14px] leading-[20px]">
                      {content?.localLink?.program?.school?.[0]}
                    </p>
                  )} */}

                  {/* {content.schoolOrAdditionalLabel && (
                    <p className="font-opensans text-[14px] leading-[20px]">
                      {content.schoolOrAdditionalLabel}
                    </p>
                  )} */}
                </a>
              </SwiperSlide>
            );
          })}
          <div
            id="swiper-navigation"
            className="lg:!right-0"
            style={{ right: marginLeft }}
          >
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default GradRelatedPrograms;
