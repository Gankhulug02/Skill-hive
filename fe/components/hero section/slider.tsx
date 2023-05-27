import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  EffectCreative,
} from "swiper";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function ImgSlider() {
  //   const slimg= [
  //     {img:}
  // ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        cssMode={true}
        // effect={"creative"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="https://img.freepik.com/free-vector/back-back-concept-illustration_114360-5999.jpg?size=626&ext=jpg&ga=GA1.2.717425339.1682860137&semt=robertav1_2_sidr"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://assets.website-files.com/5d5e2ff58f10c53dcffd8683/5db1e0e7e74e34610bcb4951_sprinting.gif"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJlZWxhbmNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
