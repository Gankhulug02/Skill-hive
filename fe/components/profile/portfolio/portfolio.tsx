import Image from "next/image";
import React, { useContext, useState } from "react";
import PortfolioModal from "../../../modal/portfolio";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { ModalContext } from "@/context/modalContext";

const Portfolio = ({ profileData }: any) => {
  const { toggleModal } = useContext(ModalContext);
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography sx={{ fontSize: "25px", fontWeight: "500" }}>
            Portfolio
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {profileData?.freelancer?.portfolio.map((e: any, index: any) => (
              <Box
                key={index}
                onClick={() => {
                  setOpen(true);
                  setActive(index);
                }}
                sx={{
                  position: "relative",
                  width: "280px",
                  height: "160px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  ":hover": {
                    ".viewMore": {
                      display: "block",
                    },
                    img: {
                      filter: "brightness(50%)",
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    display: "none",
                    position: "absolute",
                    fontSize: "20px",
                    color: "white",
                    left: "50%",
                    top: "50%",
                    zIndex: "10",
                    transform: "translate(-50%,-50%)",
                  }}
                  className="viewMore"
                >
                  View
                </Typography>

                <Image
                  src={e}
                  width={1400}
                  height={1000}
                  alt="zurag"
                  className="h-full w-full object-cover"
                />
              </Box>
            ))}
            <Box
              onClick={() => toggleModal("AddPortfolio")}
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "280px",
                height: "160px",
                borderRadius: "10px",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                background: "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)",
                // border: "1px dashed black",
                ":hover": {
                  filter: "brightness(90%)",
                },
              }}
            >
              <AddIcon sx={{ color: "white" }} />
            </Box>
          </Box>
        </Box>
      </Box>
      <PortfolioModal
        open={open}
        handleClose={handleClose}
        data={profileData?.freelancer?.portfolio}
        active={active}
        setActive={setActive}
      />
    </>
  );
};

export default Portfolio;
