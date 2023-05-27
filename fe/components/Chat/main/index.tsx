import { Box } from "@mui/system";
import React from "react";
import Bottom from "./bottom";
import MainChat from "./mainChat/mainChat";
import Top from "./top";

const Main = () => {
  return (
    <Box
      sx={{
        width: "calc(65% - 15px)",
        height: "100%",
        padding: "25px",
        overflow: "hidden",
        borderRadius: "15px",
        backgroundColor: "white",
        boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        <Top />
        <MainChat />
        <Bottom />
      </Box>
    </Box>
  );
};

export default Main;
