import React, { useRef, useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CatCard from "./cards/catCard";

const PopularCat = (): any => {
  const data = [
    {
      src: "https://images.unsplash.com/photo-1589820675999-b1fc94f318a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Content writing",
      slogan: "",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661678263122-e443e90f320c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "SEO",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Website Development",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1608377205656-a5a7ac5777d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Logo Design",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1638389747564-c7cc1c9f7a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
      title: "Voice Over",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Illustration & drawing",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Illustration & drawing",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Illustration & drawing",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Illustration & drawing",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Illustration & drawing",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Illustration & drawing",
      slogan: "",
    },
    {
      src: "https://images.unsplash.com/photo-1616627981347-315c73207041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      title: "Illustration & drawing",
      slogan: "",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10px",
        width: { xs: "95%", xl: "75%" },
        marginX: "auto",
        py: 4,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: {
              xs: "1.8rem",
              sm: "calc(1.7456vw + .8rem)",
              lg: "2rem",
            },
          }}
        >
          Most popular categories
        </Typography>
      </Box>
      <Box
        sx={
          {
            // width: "100%",
          }
        }
      >
        <Swiper
          slidesPerView={1}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            690: {
              slidesPerView: 3,
              // spaceBetween: 20,
            },
            900: {
              slidesPerView: 4,
              // spaceBetween: 20,
            },
            1200: {
              slidesPerView: 5,
              // spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper -0"
        >
          {data.map((e: any, index) => (
            <SwiperSlide key={index}>
              <CatCard data={e} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "150px",
          borderRadius: "5px",
          padding: "5px",
          "&:hover": {
            backgroundColor: "rgba(100,100,100,0.15)",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: "0.9rem",
            fontWeight: "600",
            color: "#1bc49c",
          }}
        >
          ALL CATEGORIES &rarr;
        </Typography>
      </Box>
    </Box>
  );
};

export default PopularCat;
