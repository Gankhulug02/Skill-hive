import React, { useState } from "react";

// Mui
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Rating from "@mui/material/Rating";

import Modal from "@mui/material/Modal";
import ReadMoreModal from "../../modal/ReadMoreModal";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const aboutMe = `My name is Samar Elshobky, from Egypt, Creative Senior Graphic
  Designer, 7 years of experience in Graphics and front-end developer.
  Aiming to continuously improve my skills, I had a Professional diploma
  in multimedia at the Arab Academy for Science and Technology,
  Conceptual thinker & possessing high work ethics and standards. I do ♥
  love my work and enjoy each new project and challenge as I get it. At
  this time I'm a freelancer dealing with clients all over the world & I
  can help you to make your next project awesome!`;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          width: { xs: "100%", md: "25%" },
          minheight: "450px",
          borderRadius: "15px",
          boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
          overflow: "hidden",
          backgroundColor: "white",
          px: 4,
          py: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "500", fontSize: "25px" }}>
            About me
          </Typography>
          <Typography
            onClick={handleOpen}
            sx={{
              fontWeight: "400",
              fontSize: "13px",
              color: "grey",
            }}
          >
            {aboutMe.substring(0, 190) + `  ...`}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: "500", fontSize: "25px" }}>
            Insights
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>
              Projects worked on
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "grey" }}>76</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>
              Buyers worked with
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "grey" }}>49</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              //   mt: 4,
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>Per Hour </Typography>
            <Typography sx={{ fontSize: "13px", color: "grey" }}>
              240$
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              //   mt: 4,
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>Last active </Typography>
            <Typography sx={{ fontSize: "13px", color: "grey" }}>
              Apr 19 2023
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>Response time </Typography>
            <Typography sx={{ fontSize: "13px", color: "grey" }}>
              Within in a day
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>Rating</Typography>
            <Typography sx={{ fontSize: "13px", color: "grey" }}>
              <Rating name="read-only" value={4} readOnly size="small" />
            </Typography>
          </Box>
        </Box>
      </Box>
      <ReadMoreModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        text={aboutMe}
      />
    </>
  );
};

export default SideBar;
