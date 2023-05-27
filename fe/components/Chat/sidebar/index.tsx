import React from "react";
import AllMessage from "./AllMessage";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Search from "./search";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: "35%",
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
          gap: "20px",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
            height: "20%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "20%",
            }}
          >
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "bold",
                color: "rgba(60,109,246)",
              }}
            >
              Messages
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "50%",
              py: 1,
            }}
          >
            <Search />
          </Box>
        </Box>
        {/* All Messages */}
        <Box sx={{ width: "100%", height: "80%" }}>
          <AllMessage />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
