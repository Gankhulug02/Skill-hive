import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const FreelancerHeader = () => {
  return (
    <>
      <Box
        sx={{
          background: "#232C33",
          padding: "20px 0",
          height: { xs: "35vh", sm: "0" },
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", xl: "75%" },
            margin: "auto",
            lineHeight: "100px",
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#F0F2EF", marginBottom: "20px", fontSize: "14px" }}
          >
            Offers | Technology & Programming | Programming & Coding
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#f7f5fb", fontWeight: "500", marginBottom: "10px" }}
          >
            Get High Quality Programming & Coding Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#f7f5fb",
              fontSize: "14px",
              marginBottom: { xs: "10px", sm: "50px" },
            }}
          >
            Looking for Programming & Coding offers and services? PeoplePerHour
            has you covered.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FreelancerHeader;
