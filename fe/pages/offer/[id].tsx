import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Button } from "@mui/material";
import { BASE_URL } from "@/variables";
import axios from "axios";

const Offers = ({ data }: any) => {
  console.log(data.service);
  const serviceData = data.service;
  return (
    <Box
      sx={{
        backgroundColor: "rgba(249,250,251)",
        width: "100%",
        minHeight: "100vh",
        py: 2,
        px: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          minHeight: "100vh",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "70%",
            backgroundColor: "white",
            borderRadius: "20px",
            // p: 4,
            boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
          }}
        >
          <Box sx={{ p: 4 }}>
            <Typography sx={{ fontWeight: "500", fontSize: "35px" }}>
              {serviceData.title}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "5/3",
              objectFit: "cover",
              overflow: "hidden",
            }}
          >
            <Image
              src={serviceData.img}
              alt="s"
              width={2000}
              height={1000}
              className="h-full w-full"
            />
          </Box>
          <Box sx={{ p: 4 }}>
            <Typography sx={{ fontSize: "25px" }}>
              What you get with this Offer
            </Typography>
            <Typography>{serviceData.description}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "sticky",
            top: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            gap: "20px",
            width: "25%",
            height: "fit-content",
            p: 4,
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Typography sx={{ fontWeight: "500", fontSize: "30px" }}>
              {serviceData.budget}
            </Typography>
            <Box sx={{ display: "flex", gap: "20px", width: "100%" }}>
              <Button
                sx={{
                  width: "50%",
                  backgroundColor: "rgba(0,80,252)!important",
                  color: "white",
                  py: 2,
                }}
              >
                Buy Now
              </Button>
              <Button
                sx={{
                  width: "50%",
                  backgroundColor: "rgba(0,80,252)!important",
                  color: "white",
                }}
              >
                Contact
              </Button>
            </Box>
          </Box>
          <Box>views 45</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Offers;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.id;
  const { data } = await axios.get(`${BASE_URL}/services/${id}`);

  return {
    props: {
      data,
    },
  };
}
