import React from "react";
import Image from "next/image";
import { mainColor } from "@/utils/color";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

const Portfolio = ({
  data,
  setData,
  uploadImg,
  setIsLoading,
  titleStyle,
}: any) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography sx={titleStyle}>Portfolio</Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {data.portfolio?.map((e: any, index: any) => (
          <Box
            onClick={() => {
              const updatedData = { ...data };
              updatedData.portfolio.splice(index, 1);
              setData(updatedData);
            }}
            key={index}
            sx={{
              position: "relative",
              width: "280px",
              height: "160px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
              ":hover": {
                "& img": {
                  filter: "brightness(50%)",
                },
                "& p": {
                  display: "block",
                },
              },
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: "0",
              }}
            >
              <Typography
                sx={{
                  display: "none",
                  position: "absolute",
                  top: "50%",
                  right: "50%",
                  transform: "translate(50%,-50%)",
                  color: "white",
                  zIndex: "2",
                }}
              >
                Delete
              </Typography>
            </Box>
            <Image
              src={e}
              width={1400}
              height={1000}
              alt="zurag"
              className="h-full w-full object-cover"
            />
          </Box>
        ))}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "280px",
            height: "160px",
            borderRadius: "10px",
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            background: mainColor,
            ":hover": {
              filter: "brightness(90%)",
            },
          }}
          component="label"
        >
          <AddIcon sx={{ color: "white" }} />
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              const file: any = e.target.files?.[0];
              const fileReader = new FileReader();
              fileReader.readAsDataURL(file);
              fileReader.onloadend = () => {
                console.log("D", fileReader.result);
                setData({
                  ...data,
                  portfolio: [...data.portfolio, fileReader.result],
                });
                setIsLoading(true);
                uploadImg({ img: fileReader.result, whatImg: "portfolio" });
              };
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
