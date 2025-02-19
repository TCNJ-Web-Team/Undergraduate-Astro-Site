import React, { useRef } from "react";

import { A11y, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SwiperNavButtons } from "./SwiperNavButton";
import "../styles/custom-swiper.scss";

export default function RelatedProgSlider({ learnMoreList }) {
  const learnMoreListRender = learnMoreList;
  //   const swiperRef = useRef(null);

  //   const nextEl = useRef(null);
  //   const prevEl = useRef(null);

  //   const goNext = () => {
  //     console.log("go next");
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //       swiperRef.current.swiper.slideNext();
  //     }
  //   };

  //   const goPrev = () => {
  //     if (swiperRef.current && swiperRef.current.swiper) {
  //       swiperRef.current.swiper.slidePrev();
  //     }
  //   };

  return (
    <>
      <div className="md:max-w-[920px] mx-auto h-[1px]"></div>
      <div
        id="learn-more-list"
        className="
 
  sm:px-[45px] md:px-[20px] lgMd:px-0 lg:px-0"
      >
        <Swiper
          breakpoints={{
            // when window width is >= 320px
            250: {
              // slidesPerView: "auto",
              slidesPerView: 1.5,
              spaceBetween: 20,
              slidesOffsetAfter: 70,
              // freeMode: true,
              // width: 350,
              // setWrapperSize: true,
            },
            // when window width is >= 480px
            550: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesOffsetAfter: 0,
              // setWrapperSize: false,
              // width: "auto",
            },
            // when window width is >= 640px
            900: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Navigation]}
          // slidesPerView={3.5}
          spaceBetween={20}
          // onSlideChange={(swiper) => console.log(swiper)}
          // onSwiper={(swiper) => console.log(swiper)}
          // navigation
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // autoHeight={true}
        >
          <h2
            className="
        pl-[35px]
  pr-[35px]
  sm:pl-[0px]
  sm:pr-[0px]
        absolute top-0 left-0 font-alfaslab font-normal text-[30px] leading-[40px] text-tcnjblue"
          >
            Related Programs
          </h2>
          {learnMoreListRender.map((content) => {
            return (
              <SwiperSlide
                className=" border border-[#BFBFBF]
          w-auto"
                id={content.title.replace(/\s+/g, "-").toLowerCase()}
                key={content.title.replace(/\s+/g, "-").toLowerCase()}
              >
                <a
                  className="p-[35px] sm:py-[45px] sm:px-[25px] min-h-[250px] block"
                  href={content.slug}
                >
                  <p
                    className="font-domine font-semibold text-[18px] leading-[28px] sm:leading-[21px]
                md:text-[21px] md:leading-[24px]"
                  >
                    {content.title}
                  </p>
                  <hr className="m-[25px] mr-0 ml-0 md:mt-[27px]" />
                  {content.schoolOrAdditionalLabel && (
                    <p className="font-opensans text-[14px] leading-[20px] ">
                      {content.schoolOrAdditionalLabel}
                    </p>
                  )}
                </a>
                {/* <span slot="container-end">Container End</span> */}
              </SwiperSlide>
            );
          })}

          {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
          <div id="swiper-navigation">
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
          {/* <SwiperNavButtons /> */}
        </Swiper>
        {/* <div onClick={goPrev} ref={prevEl}>
        Previous
      </div>
      <div onClick={goNext} ref={nextEl}>
        Next
      </div> */}
      </div>
    </>
  );
}
