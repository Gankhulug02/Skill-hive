import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const Top = () => {
  return (
    <Box sx={{ display: "flex", maxWidth: "500px", height: "10%" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
        }}
      >
        {/* // profile pic start */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
          }}
        >
          <Box
            sx={{
              height: "90%",
              aspectRatio: "1/1",
              borderRadius: "50%",
              backgroundColor: "blue",
              overflow: "hidden",
            }}
          >
            <Image
              alt="img"
              width={2000}
              height={1000}
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              className="h-full w-full object-cover"
            />
          </Box>
        </Box>
        {/* // profile pic end  */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "30px", fontWeight: "500" }}>
              Amanda Smith
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Top;
