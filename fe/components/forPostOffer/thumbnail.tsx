import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { mainColor } from "@/utils/color";
import axios from "axios";
import { BASE_URL } from "@/variables";
import { LoadingContext } from "@/context/loadingContext";

const Thumbnail = ({ titleStyle, handleChange, setData, data }: any) => {
  const { setIsLoading } = useContext(LoadingContext);
  const uploadImg = async ({ img, whatImg }: any) => {
    try {
      const res = await axios.post(`${BASE_URL}/upload`, {
        files: img,
      });

      const imgUrl = res.data.imgUrl.url;
      setData({ ...data, img: [imgUrl] });
      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Typography sx={titleStyle}>Thumbnail</Typography>
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
                img: [fileReader.result],
              });
              setIsLoading(true);
              uploadImg({ img: fileReader.result, whatImg: "portfolio" });
            };
          }}
        />
      </Box>
    </Box>
  );
};

export default Thumbnail;
