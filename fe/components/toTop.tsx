import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const ToTopBtn = () => {
  const [display, setDisplay] = useState("none");

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      if (scrollTop > 20) {
        setDisplay("flex");
      } else if (scrollTop < 19) {
        setDisplay("none");
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      onClick={scrollToTop}
      sx={{
        position: "fixed",
        left: "calc(100% - (50px + 20px))",
        bottom: "50px",
        display: { display },
        alignItems: "cetner",
        justifyContent: "center",
        width: "50px",
        aspectRatio: "1/1",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px rgb(2,2,2,0.2)",
        borderRadius: "10px",
      }}
    >
      <KeyboardArrowUpRoundedIcon sx={{ width: "100%", height: "100%" }} />
    </Box>
  );
};

export default ToTopBtn;
