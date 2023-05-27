import React from "react";
import { Box, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NorthIcon from "@mui/icons-material/North";

const TotalVisitors = () => {
  const br = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    aspectRatio: "1/1",
    borderRadius: "50%",
    flex: "none",
  };
  return (
    <Box sx={{ backgroundColor: "rgba(253,234,228)" }} className="container">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          color: "#fc845d",
        }}
      >
        <Box
          style={br}
          sx={{
            p: 1,
            backgroundColor: "rgba(252, 199, 182,0.8)",
          }}
        >
          <PeopleAltIcon />
        </Box>
        <Typography>-22%</Typography>
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
            40
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
            Total Visitors
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
                backgroundColor: "rgba(255, 156, 156,0.4)",
              }}
            >
              <NorthIcon
                sx={{
                  fontWeight: "bold",
                  fontSize: "15px",
                  transform: "rotate(-140deg)",
                  color: "red",
                  //   transform: "rotate(45deg)",
                  //   color: "#04ab00",
                }}
              />
            </Box>
            <Typography
              sx={{
                // color: "#04ab00"
                color: "red",
              }}
            >
              60%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TotalVisitors;
