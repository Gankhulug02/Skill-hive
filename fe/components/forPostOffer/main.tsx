import { Box, Button, Input, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Thumbnail from "./thumbnail";

const Main = ({ data, setData }: any) => {
  const router = useRouter();
  // style
  const titleStyle = {
    textTransform: "uppercase",
    fontSize: "15px",
    fontWeight: "500",
    color: "#002a6e",
  };
  const textInputStyle = {
    type: "text",
    style: {
      border: "1px solid grey",
      borderRadius: "5px",
      padding: "8px",
      width: "100%",
    },
  };

  // functions
  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
    console.log(e.target.name, e.target.value);
  };

  const postOffer = async () => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    try {
      if (!data.title || !data.description || !data.img[0] || !data.budget) {
        console.log(data);
      } else {
        const res = await axios.post("http://localhost:8000/services", {
          ...data,
          Freelancer: userId,
        });
        console.log(res);
        alert("succesfull");
        router.push(`/profile/${userId}`);
      }
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        width: { xs: "100%", md: "900px" },
        height: "100%",
        backgroundColor: "white",
        borderRadius: "20px",
        p: 4,
      }}
    >
      {/* Thumbnail start */}
      <Thumbnail
        data={data}
        setData={setData}
        titleStyle={titleStyle}
        handleChange={handleChange}
      />
      {/* Thumbnail end */}

      {/* title start */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>Title</Typography>
        <Input
          disableUnderline
          placeholder="Your offer title"
          type="text"
          name="title"
          sx={textInputStyle.style}
          onChange={handleChange}
        />
      </Box>
      {/* title end */}

      {/* detail start */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>Description</Typography>
        <textarea
          name="description"
          placeholder="Your offer description"
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            padding: "10px",
            minHeight: "250px",
            height: "fitContent",
          }}
          onChange={handleChange}
        />
      </Box>
      {/* detail end */}

      {/* price start */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>Price</Typography>
        <Input
          disableUnderline
          placeholder="Your offer title"
          type="number"
          name="budget"
          inputProps={{ min: 0 }}
          sx={textInputStyle.style}
          onChange={handleChange}
        />
      </Box>
      {/* price end */}

      {/* categories start */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>Categories</Typography>
        <Input
          disableUnderline
          placeholder="Example: React, Next.js, Web Designer..."
          type="text"
          name="categories"
          sx={textInputStyle.style}
          // onChange={handleChange}
          onChange={(e: any) => {
            setData({ ...data, skills: e.target.value.split(",") });
          }}
        />
      </Box>
      {/* categories end */}

      <Button
        onClick={() => postOffer()}
        sx={{
          width: "200px",
          background:
            "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
          color: "white",
        }}
      >
        Save
      </Button>
    </Box>
  );
};

export default Main;
