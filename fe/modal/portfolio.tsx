import React, { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%",
    md: "80%",
  },
  height: {
    xs: "50%",
    md: "80%",
  },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "15px",
  color: "black",
  fontSize: "18px",
};

export default function PortfolioModal({
  open,
  handleClose,
  data,
  active,
  setActive,
}: any) {
  //   const itemWidth = (100 / data.length).toString() + "%";
  const next = useCallback(() => {
    if (active >= data.length - 1) {
      setActive(0);
    } else {
      setActive(active + 1);
    }
  }, [active]);

  const previous = useCallback(() => {
    if (active <= 0) {
      setActive(data.length - 1);
    } else {
      setActive(active - 1);
    }
  }, [active]);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowLeft") {
        previous();
      } else if (event.key === "ArrowRight") {
        next();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            p: { xs: 2, md: 6 },
            pt: 8,
          }}
        >
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "20px",
              right: "40px",
              color: "black",
              ":hover": {
                cursor: "pointer",
              },
            }}
          />
          <ArrowForwardIosIcon
            onClick={next}
            sx={{
              position: "absolute",
              top: "40%",
              right: "50px",
              color: "black",
              ":hover": {
                cursor: "pointer",
              },
            }}
          />
          <ArrowBackIosIcon
            onClick={previous}
            sx={{
              position: "absolute",
              top: "40%",
              left: "50px",
              color: "black",
              ":hover": {
                cursor: "pointer",
              },
            }}
          />
          <Box sx={{ width: "100%", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "black",
                width: "100%",
                height: { xs: "70%", md: "80%" },
              }}
            >
              <Image
                src={data?.[active]}
                alt={data?.[active]}
                width={2000}
                height={1000}
                style={{ objectFit: "contain", width: "auto", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "5px", md: "20px" },
                width: "100%",
                height: { xs: "30%", md: "20%" },
                overflowX: "scroll",
                py: 2,
              }}
            >
              {data?.map((e: any, index: any) => (
                <Box
                  key={index}
                  onClick={() => {
                    setActive(index);
                  }}
                  sx={{
                    width: { xs: "40%", md: "20%" },
                    flex: "none",
                  }}
                >
                  <Image
                    key={index}
                    src={e}
                    alt={e}
                    width={200}
                    height={200}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                      filter:
                        index === active
                          ? "brightness(100%)"
                          : "brightness(50%)",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
