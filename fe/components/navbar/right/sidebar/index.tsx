import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const Sidebar = () => {
  const [isSidebar, setIsSidbar] = useState<boolean>(false);
  const router = useRouter();
  return (
    <>
      <Box onClick={() => setIsSidbar(!isSidebar)}>
        <MenuIcon />
      </Box>
      <Box
        onClick={() => setIsSidbar(!isSidebar)}
        sx={{
          position: "fixed",
          top: "0",
          right: isSidebar ? "0px" : "-100%",
          width: "50%",
          height: "100vh",
          zIndex: "2",
          transition: "all 0.3s",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "white",
            borderLeft: "0.5px solid grey",
            gap: "20px",
            py: 2,
            px: 4,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              button: {
                color: "black",
                textTransform: "capitalize",
              },
            }}
          >
            <Button
              onClick={() => {
                router.push("/auth#login");
              }}
            >
              Log in
            </Button>
            <Button
              onClick={() => {
                router.push("/auth#signup");
              }}
            >
              Sign up
            </Button>
          </Box>
          <Button
            sx={{
              minWidth: "120px",
              color: "white",
              px: 2,
              background:
                "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
            }}
          >
            Post Offer
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
