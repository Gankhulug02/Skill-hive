import React from "react";
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

const FreelancerCard = ({ data }: any) => {
  const router = useRouter();
  return (
    <Box
      sx={{
        maxWidth: { xs: "280px", lg: "300px" },
        height: "450px",
        borderRadius: "10px",
        overflow: "hidden",
        mx: "auto",
        border: "1px solid #E5E5E5",
        backgroundColor: "white",
        px: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          height: "45%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            aspectRatio: "1/1",
            borderRadius: "50%",
            background:
              "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
            padding: "2.5px",
          }}
        >
          <Box
            sx={{
              width: "100px",
              aspectRatio: "1/1",
              borderRadius: "50%",
              overflow: "hidden",
            }}
          >
            <Image
              width={400}
              height={400}
              src={data.freelancer?.avatar}
              alt={data.name}
              className="w-full h-full object-cover "
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontSize: "20px" }}>{data.name}</Typography>
          <Typography sx={{ fontSize: "15px", color: "rgb(130,130,130)" }}>
            {data.job_title}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: "55%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "20%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "13px", color: "rgb(130,130,130)" }}>
              Projects
            </Typography>
            <Typography>
              {data.freelancer?.worked_projects.length + 1}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "13px", color: "rgb(130,130,130)" }}>
              Rating
            </Typography>
            <Typography>{data.freelancer?.rating}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "13px", color: "rgb(130,130,130)" }}>
              Per Hour
            </Typography>
            <Typography>{data.freelancer?.hourly_rate}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            height: "80%",
            pt: 2,
          }}
        >
          <Box>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "0.7rem",
                color: "rgb(130,130,130)",
              }}
            >
              {`Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Laudantium, veniam unde autem ea ipsum illo
          beatae`.substring(0, 120) + "..."}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                width: "220px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                overflow: "scroll",
              }}
            >
              {data.freelancer?.skills.map((el: any, index: any) => (
                <Typography
                  key={index}
                  sx={{
                    padding: "4px",
                    paddingX: "12px",
                    borderRadius: "20px",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    color: "rgb(153,153,153)",
                    border: "0.9px solid grey",
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
            <Button
              onClick={() => {
                router.push(`/profile/${data._id}`);
              }}
              sx={{
                width: "200px",
                textTransform: "capitalize",
                borderRadius: "40px",
                color: {
                  xs: "white",
                  md: "rgb(153,153,153)",
                },
                background: {
                  xs: "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
                  md: "white!important",
                },
                boxShadow: {
                  xs: "0px 0px 20px 0px  rgba(253, 200, 48,0.5)",
                  md: "none",
                },
                border: "0.9px solid rgb(153,153,153)",
                ":hover": {
                  color: "white",
                  background:
                    "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
                  boxShadow: "0px 0px 20px 0px  rgba(253, 200, 48,0.5)",
                },
              }}
            >
              View Profile
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FreelancerCard;
