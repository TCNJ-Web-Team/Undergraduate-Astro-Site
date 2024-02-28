import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "swiper/components/navigation/navigation.scss";

export default function RelatedProgSlider({ learnMoreList }) {
  //   console.log(learnMoreList);
  const learnMoreListRender = learnMoreList;
  //   console.log(learnMoreListRender);
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
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        // slidesPerView={3.5}
        spaceBetween={20}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation

        // autoHeight={true}
      >
        {learnMoreListRender.map((content) => {
          return (
            <SwiperSlide
              className=" border border-[#BFBFBF]
          w-[280px]"
              id={content.title.replace(/\s+/g, "-").toLowerCase()}
              key={content.title.replace(/\s+/g, "-").toLowerCase()}
            >
              <a className="p-[35px] pb-[100px] block" href={content.slug}>
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
            </SwiperSlide>
          );
        })}
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
}
