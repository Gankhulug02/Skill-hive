import React from "react";
import { Box } from "@mui/material";
import Default from "./default";
import Sidebar from "./sidebar";

const Right = () => {
  return (
    <>
      <Box sx={{ display: { xs: "none", sm: "block" }, width: "50%" }}>
        <Default />
      </Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "50%",
          justifyContent: "end",
        }}
      >
        <Sidebar />
      </Box>
    </>
  );
};

export default Right;
