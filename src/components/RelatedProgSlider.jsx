import React, { useState, useRef, useEffect } from "react";

import { A11y, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperNavButtons } from "./SwiperNavButton";
import "../styles/custom-swiper.scss";

export default function RelatedProgSlider({ learnMoreList }) {
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
            // Define a mapping of titles to slugs
            const slugMapping = {
              "Accelerated Second-Degree Bachelor of Science in Nursing":
                "absn",
              "Elementary Education of the Deaf and Hard of Hearing":
                "/elementary-education-dhh",
              "Inclusive Education — Early Childhood Education (P–3)":
                "/inclusive-education-p-3",
              "Inclusive Education — Elementary Education (K–6)":
                "/inclusive-education-k-6",
              "Journalism and Professional Writing":
                "/journalism-professional-writing",
              "Kinesiology and Health Sciences": "/kinesiology-health-sciences",
              "Mathematics and Statistics": "/mathematics",
              "Photography and Video": "/photography-video",
              Robotics: "/robotics-engineering-science",
              "Spanish — World Languages and Linguistics": "/spanish-wll",
              "Spanish and ESL/Bilingual Education": "/spanish-esl",
              "Speech-Language Pathology and Audiology":
                "/speech-pathology-audiology",
              "Speech-Language Pathology": "/slp",
              "Teaching English as a Second Language": "/tesl",
              "Technology and Engineering Education":
                "/technology-engineering-education",
              "Women’s, Gender, and Sexuality Studies": "/wgss",
              "World Languages and Linguistics": "/world-languages-linguistics",
            };

            // Assign the slug based on mapping or generate from title if slug is "#"
            content.slug =
              slugMapping[content.title] ||
              (content.slug === "#"
                ? content.title.replace(/\s+/g, "-").toLowerCase()
                : content.slug);

            // console.log(content.title);
            return (
              <SwiperSlide
                className="border border-[#BFBFBF] w-auto"
                id={content.title.replace(/\s+/g, "-").toLowerCase()}
                key={content.title.replace(/\s+/g, "-").toLowerCase()}
              >
                <a
                  className="p-[35px] sm:py-[45px] sm:px-[25px] md:px-[50px] min-h-[250px] block"
                  href={content.slug}
                >
                  <p className="font-domine font-semibold text-[18px] leading-[28px] sm:leading-[21px] md:text-[21px] md:leading-[24px]">
                    {content.title}
                  </p>
                  <hr className="m-[25px] mr-0 ml-0 md:mt-[27px]" />
                  {content.schoolOrAdditionalLabel && (
                    <p className="font-opensans text-[14px] leading-[20px]">
                      {content.schoolOrAdditionalLabel}
                    </p>
                  )}
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
}
