import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const OfferCard = ({ data }: any) => {
  const router = useRouter();

  return (
    <Box
      onClick={() => {
        router.push(`/offer/${data?._id}`);
      }}
      sx={{
        width: { xs: "270px", sm: "280px" },
        backgroundColor: "white",
        height: "400px",
        border: "0.1px solid black",
        borderRadius: "10px",
        overflow: "hidden",
        ":hover": {
          ".title": {
            textDecoration: "underline",
          },
        },
      }}
    >
      <Box
        sx={{ width: "100%", height: "50%", borderBottom: "0.1px solid black" }}
      >
        <Image
          width={250}
          height={200}
          src={data?.img[0]}
          alt="zurag"
          className="h-full w-full object-cover"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          py: 1,
          px: 2,
          paddingBottom: "20px",
          height: "50%",
        }}
      >
        <Typography
          sx={{
            width: "100%",
            height: "40%",
            fontSize: "18px",
            fontWeight: "500",
            // backgroundColor: "blue",
          }}
          className="title"
        >
          {data?.title.length >= 45
            ? data?.title.substring(0, 45) + "..."
            : data?.title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              overflow: "scroll",
            }}
          >
            {data?.skills.map((el: any, index: any) => (
              <Typography
                key={index}
                sx={{
                  padding: "4px",

                  paddingX: "12px",
                  borderRadius: "20px",
                  textAlign: "center",
                  fontSize: "0.8rem",
                  border: "0.9px solid grey",
                  color: "rgb(153,153,153)",
                  flex: "none",
                  ":hover": {
                    background:
                      "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
                    color: "white",
                    boxShadow: "0px 0px 20px 0px  rgba(253, 200, 48,0.5)",
                  },
                }}
              >
                {el}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "70%",
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  border: "0.1px solid black",
                  overflow: "hidden",
                }}
              >
                <Image
                  width={250}
                  height={200}
                  src={data?.Freelancer?.freelancer.avatar}
                  alt="zurag"
                  className="h-full w-full object-cover"
                />
              </Box>
              <Typography
                sx={{ fontSize: "0.8rem", color: "rgb(153,153,153)" }}
              >
                {data?.Freelancer?.name}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                width: "30%",
              }}
            >
              <Typography>${data?.budget}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OfferCard;
