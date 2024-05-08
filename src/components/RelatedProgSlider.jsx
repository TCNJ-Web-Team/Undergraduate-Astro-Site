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
    <div
      id="learn-more-list"
      className="
 
  sm:pl-[47px]
sm:pr-[47px] md:pl-[20px] md:pr-[20px] lg:pl-0 lg:pr-0"
    >
      <Swiper
        breakpoints={{
          // when window width is >= 320px
          250: {
            slidesPerView: 1.25,
            spaceBetween: 20,
            width: 350,
          },
          // when window width is >= 480px
          550: {
            slidesPerView: 2,
            spaceBetween: 20,
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
          Related programs
        </h2>
        {learnMoreListRender.map((content) => {
          return (
            <SwiperSlide
              className=" border border-[#BFBFBF] !last:mr-[35px]
          w-auto"
              id={content.title.replace(/\s+/g, "-").toLowerCase()}
              key={content.title.replace(/\s+/g, "-").toLowerCase()}
            >
              <a className="p-[35px] min-h-[237px] block" href={content.slug}>
                <p className="font-bitter font-semibold text-[18px] leading-[28px] ">
                  {content.title}
                </p>
                <hr className="m-[25px] mr-0 ml-0" />
                {content.schoolOrAdditionalLabel && (
                  <p className="font-opensans">
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
  );
}
