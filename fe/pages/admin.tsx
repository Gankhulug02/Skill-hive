import { Steam as Chart } from "@/components/adminPage/chart/chart";
import TotalOffer from "@/components/adminPage/overview/totalOffer";
import TotalOrder from "@/components/adminPage/overview/totalOrder";
import TotalSales from "@/components/adminPage/overview/totalSales";
import TotalVisotors from "@/components/adminPage/overview/totalVisotors";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Admin = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        width: "100%",
        minHeight: "100vh",
        p: 3,
        backgroundColor: "rgba(249,250,251)",
      }}
    >
      {/* total start */}
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          ".container": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "250px",
            // backgroundColor: "rgba(203, 175, 250,0.6)",
            borderRadius: "25px",
            p: 4,
          },
        }}
      >
        <TotalSales />
        <TotalOffer />
        <TotalOrder />
        <TotalVisotors />
      </Box>
      {/* total end */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "500px",
          borderRadius: "20px",
          boxShadow: "0px 10px 20px 0px rgba(181,181,181,0.4)",
          p: 4,
        }}
      >
        <Typography sx={{ fontWeight: "500", fontSize: "25px" }}>
          Activity
        </Typography>
        <Box sx={{ width: "100%", height: "90%" }}>
          <Chart />
        </Box>
      </Box>
    </Box>
  );
};

export default Admin;
