import React, { useState } from "react";
import { Box, Typography, Button, Modal, Drawer } from "@mui/material";
import SideBarFilter from "./sidebarfilter";
import OfferCard from "../cards/offerCard";
import FreelancerSearchBar from "./freelancerSearchBar";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Key } from "@mui/icons-material";

const FreelancersBody = ({ freelancers, setFreelancers }: any) => {
  const [isOpenSidebar, setOpenSidebar] = useState(false);
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

  const filterButton = [
    "SEO Analysis",
    "SEO Audit",
    "SEO Backlinks",
    "Google Ranking",
    "Youtube SEO",
    "SEO Keyword Research",
    "SEO Content",
    "Link Building",
    "Guest Posting",
  ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          margin: "auto",
          paddingTop: "90px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { xs: "-85%", sm: "-30%" },
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <FreelancerSearchBar
            freelancers={freelancers}
            setFreelancers={setFreelancers}
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "95%", xl: "75%" },
          margin: "auto",
          display: "flex",
          gap: "30px",
        }}
      >
        {isDesktop && (
          <Box sx={{ width: "20%" }}>
            <SideBarFilter
              freelancers={freelancers}
              setFreelancers={setFreelancers}
            />
          </Box>
        )}

        <Drawer
          anchor={isMobile ? "bottom" : "left"}
          open={isOpenSidebar}
          onClose={() => setOpenSidebar(false)}
        >
          <Box sx={{ height: { xs: "85vh" } }}>
            <SideBarFilter
              freelancers={freelancers}
              setFreelancers={setFreelancers}
            />
          </Box>
        </Drawer>

        <Box sx={{ width: "100%" }}>
          <Button
            sx={{
              display: { xl: "none" },
              padding: "10px 40px",
              color: "white",
              backgroundColor: "#7EA2AA  !important",
              marginRight: "20px",
              ":hover": {
                boxShadow: "1px 5px 13px 5px rgba(0,0,0,0.1)",
              },
            }}
            onClick={() => setOpenSidebar(true)}
          >
            Filter
          </Button>

          <select
            style={{
              width: "180px",
              padding: "10px 5px",
              border: "solid 1px black",
              borderRadius: "5px",
              marginBottom: "25px",
            }}
            id="filters"
            name="filter"
            form="filterForm"
          >
            <option value="Trending">Trending</option>
            <option value="Popularity">Popularity</option>
            <option value="Price:low to high">Price:low to high</option>
            <option value="Price:high to low">Price:high to low</option>
          </select>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "18px", marginBottom: "10px" }}
          >
            Related
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: "15px",
              marginBottom: "25px",

              overflowX: "scroll",
            }}
          >
            {filterButton.map((text, index) => (
              <Button
                key={index}
                onClick={() => {
                  // const negFreelncer = {
                  //   ner: "getJSDocOverrideTagNoCache",
                  //   tag: ["SEO Analysis", "SEO Audit"],
                  // };
                  const filtered = freelancers.filter((el: any) =>
                    el?.tags?.some((tag: string) => tag === text)
                  );
                }}
                sx={{
                  backgroundColor: "white !important",
                  padding: "5px 10px",
                  whiteSpace: "nowrap",
                  fontSize: "9px",
                  color: "#333333",
                  border: "solid 1px #a9a9a9",
                  borderRadius: "3px",
                  flex: "none",
                  ":hover": {
                    backgroundColor: "#989898 !important",
                  },
                }}
              >
                {text}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px",
              justifyContent: "center",
            }}
          >
            {filterButton.map((i, index) => (
              <OfferCard key={index} />
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default FreelancersBody;
