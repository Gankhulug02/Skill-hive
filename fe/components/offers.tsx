import React, { useRef, useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, EffectCards } from "swiper";

// Mui
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import OfferCard from "./cards/offerCard";

export default function Offers({ data }: any) {
  const router = useRouter();

  return (
    <Box
      sx={{
        mt: 4,
        left: "0px",
        width: "100vw",
        py: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "95%", xl: "75%" },
          margin: "auto",
          borderRadius: "15px",
          boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
          overflow: "hidden",
          backgroundColor: "#F6F7FA",
          py: 5,
          px: 4,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", mb: 4 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "1.8rem",
                sm: "calc(1.7456vw + .8rem)",
                lg: "3rem",
              },
              fontWeight: "500",
            }}
          >
            Offers
          </Typography>
          <Typography sx={{ fontSize: "20px", color: "grey" }}>
            Search and contact bees directly with no oblication
          </Typography>
        </Box>
        <Box>
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
            className="mySwiper "
          >
            {data?.map((e: any, index: any) => (
              <SwiperSlide key={index}>
                <OfferCard data={e} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
