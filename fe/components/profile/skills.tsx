import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { profile } from "console";
import React from "react";

const Skills = ({ profileData }: any) => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        borderRadius: "15px",
        boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
        overflow: "hidden",
        backgroundColor: "white",
        pl: { xs: 4, md: 10 },
        pr: { xs: 4, md: 5 },
        pt: { xs: 5, md: 5 },
        pb: { xs: 5, md: 8 },
      }}
    >
      <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
        Skills
      </Typography>
      <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {profileData?.freelancer.skills.map((i: any, index: number) => (
          <Button
            key={index}
            sx={{
              color: "black",
              textTransform: "capitalize",
              border: "1.5px solid #e8e8e8",
              borderRadius: "10px",
              ":hover": {
                background:
                  "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
                color: "white",
                border: "1.5px solid white",
              },
            }}
          >
            {i}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
