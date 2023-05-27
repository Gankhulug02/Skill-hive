import React, { useContext, useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { ProfileContext } from "@/context/profileContext";
import { ModalContext } from "@/context/modalContext";
import axios from "axios";
import { LoadingContext } from "@/context/loadingContext";
import { BASE_URL } from "@/variables";

const AddPortfolio = ({}: any) => {
  const { setIsLoading } = useContext(LoadingContext);
  const { profileData } = useContext(ProfileContext);
  const { toggleModal } = useContext(ModalContext);

  const [selectedImage, setSelectedImage] = useState<any>(null);

  const addPortfolio = async (portfolioUrl: any) => {
    console.log("portfolioUrl", portfolioUrl);
    try {
      const res = await axios.put(`${BASE_URL}/portfolio/${profileData._id}`, {
        data: portfolioUrl,
      });
      console.log(res);
      setIsLoading(false);
      setSelectedImage(null);
      toggleModal();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const uploadPortfolioImg = async (e: any) => {
    console.log("file", selectedImage);
    try {
      const res = await axios.post(`${BASE_URL}/upload`, {
        files: selectedImage,
      });
      console.log("res url", res.data.imgUrl.url);
      if (res.data.imgUrl.url) {
        addPortfolio(res.data.imgUrl.url);
      }
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        p: 5,
        pb: 3,
        backgroundColor: "white",
        zIndex: "1",
        borderRadius: "10px",
        "*": {
          transition: "all 0.2s",
        },
      }}
    >
      {selectedImage === null ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            width: "280px",
            height: "160px",
            borderRadius: "10px",
            border: "2px dashed rgba(200,200,200)",
            ":hover": {
              border: "2px dashed rgba(36,38,150)",
              ".cloudIcon": {
                color: " rgba(36,38,150)",
              },
            },
          }}
          component="label"
        >
          <CloudUploadIcon
            className="cloudIcon"
            sx={{ fontSize: "50px", color: "rgba(150,150,150)" }}
          />
          <Box>
            <Typography sx={{ fontSize: "13px" }}>
              Choose file to upload
            </Typography>
          </Box>
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
                setSelectedImage(fileReader.result);
              };
            }}
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: "280px",
            height: "160px",
            backgroundColor: "black",
            borderRadius: "10px",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <Image
            width={2000}
            height={1000}
            src={selectedImage}
            alt="selected"
            className="h-full w-full"
          />
        </Box>
      )}
      <Box
        sx={{ display: "flex", gap: "20px", fontSize: "20px", color: "white" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "rgba(36,38,150)",
            backgroundColor: "white",
            border: "1px solid rgba(36,38,150)",
            ":hover": {
              color: "white",
              backgroundColor: "rgba(36,38,150)",
            },
          }}
          onClick={() => {
            setIsLoading(true);
            uploadPortfolioImg(selectedImage);
          }}
        >
          <KeyboardBackspaceIcon sx={{ rotate: "90deg" }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "rgba(36,38,150)",
            backgroundColor: "white",
            border: "1px solid rgba(36,38,150)",
            ":hover": {
              color: "white",
              backgroundColor: "rgba(36,38,150)",
            },
          }}
          onClick={() => {
            setSelectedImage(null);
          }}
        >
          <DeleteIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default AddPortfolio;
