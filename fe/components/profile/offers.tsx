import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import OfferCard from "../cards/offerCard";

const Offers = ({ offerData }: any) => {
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
        backgroundColor: "white",
        overflow: "hidden",
        pl: { xs: 4, md: 10 },
        pr: { xs: 4, md: 5 },
        pt: { xs: 5, md: 5 },
        pb: { xs: 5, md: 8 },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
          Offers
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            width: "100%",
            height: "100%",
          }}
        >
          {offerData?.map((e: any, index: any) => (
            <OfferCard key={index} data={e} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Offers;
