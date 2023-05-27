import React from "react";
import { Box, Typography } from "@mui/material";
import { BiMessageSquareDetail } from "@react-icons/all-files/bi/BiMessageSquareDetail";
import OneMessage from "./OneMessage";

const AllMessage = () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Box
      sx={{
        maxWidth: "100%",
        height: "90%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          gap: "10px",
          color: "grey",
          pb: 3,
        }}
      >
        <BiMessageSquareDetail />
        <Typography>All Message</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          gap: "20px",
          overflow: "scroll",
        }}
      >
        {arr.map((e, index) => (
          <OneMessage key={index} />
        ))}
      </Box>
    </Box>
  );
};

export default AllMessage;
