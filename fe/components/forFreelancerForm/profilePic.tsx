import { BASE_URL } from "@/variables";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Image from "next/image";
import React from "react";

const ProfilePic = ({
  titleStyle,
  data,
  setData,
  handleChange,
  setIsLoading,
  uploadImg,
}: any) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography sx={titleStyle}>Profile Picture</Typography>
      {!data.avatar ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "400px",
            height: "150px",
            border: "2px dashed grey",
            borderRadius: "10px",
            ":hover": {
              "& p": { color: "rgba(100,100,150)" },
            },
          }}
          component="label"
        >
          <input
            type="file"
            hidden
            accept="image/*"
            onChange={(e) => {
              const file: any = e.target.files?.[0];
              const fileReader = new FileReader();
              fileReader.readAsDataURL(file);
              fileReader.onloadend = () => {
                handleChange({ key: "avatar", value: fileReader.result });
                setIsLoading(true);
                uploadImg({ img: fileReader.result, whatImg: "avatar" });
              };
            }}
          />
          <Typography sx={{ fontSize: "15px", color: "rgba(150,150,150)" }}>
            Drop file here or browse to add
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            position: "relative",
            maxWidth: "150px",
            minWidth: "150px",
            maxHeight: "150px",
            minHeight: "150px",
            borderRadius: "50%",
            overflow: "hidden",
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
            onClick={() => {
              handleChange({ key: "avatar", value: "" });
            }}
            sx={{
              position: "absolute",
              backgroundColor: "transparent",
              top: "0px",
              zIndex: "2",
              width: "100%",
              height: "100%",
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
              }}
            >
              Delete
            </Typography>
          </Box>
          <Image
            alt="avatar"
            src={data.avatar}
            width={1000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </Box>
      )}
    </Box>
  );
};

export default ProfilePic;
