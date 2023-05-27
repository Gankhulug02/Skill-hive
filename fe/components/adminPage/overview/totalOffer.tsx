import React from "react";
import { Box, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import NorthIcon from "@mui/icons-material/North";

const TotalOffer = () => {
  const br = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: "1/1",
    borderRadius: "50%",
    flex: "none",
  };
  return (
    <Box sx={{ backgroundColor: "rgba(240,231,247)" }} className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#9965fc",
        }}
      >
        <Box
          style={br}
          sx={{
            p: 1,
            backgroundColor: "rgba(215, 194, 255)",
          }}
        >
          <LocalOfferIcon />
        </Box>
        <Typography>+40%</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "50%",
        }}
      >
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
            20
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "rgba(150,150,150)" }}>
            Total Offer
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              "*": {
                fontSize: "15px",
              },
            }}
          >
            <Box
              style={br}
              sx={{
                p: 1,
                backgroundColor: "rgba(108,201,105,0.2)",
              }}
            >
              <NorthIcon
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  transform: "rotate(45deg)",
                  color: "#04ab00",
                }}
              />
            </Box>
            <Typography sx={{ color: "#04ab00" }}>60%</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TotalOffer;
