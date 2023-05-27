import React, { useContext } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";
import { UserContext } from "@/context/userContext";

const Footer = () => {
  const footerMenu = [
    {
      title: "Product",
      item: ["About", "Team", "Careers"],
    },
    {
      title: "Support",
      item: ["How it works", "Trust & Safety", "Help Centre"],
    },
    {
      title: "Discover",
      item: ["Guides", "Stories", "News"],
    },
    {
      title: "Resources",
      item: ["Customer Stories", "Business Cost Calculator", "Startup Cities"],
    },
    {
      title: "Browse",
      item: [
        "Freelance Services",
        "Freelance Services By Country",
        "Freelance Skills",
      ],
    },
  ];
  const footerBottom = [
    "Terms",
    "Privacy",
    "Sitemap",
    "Company Details",
    "2023 People Per Hour Ltd",
  ];
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#152238",
        color: "white",
        paddingY: "30px",
      }}
    >
      <Box className="w-3/4 m-auto">
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginBottom: "40px",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              people
            </Typography>
            <Typography variant="h5" sx={{ color: "gray", fontWeight: "100" }}>
              per
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              hour
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "150px",
              fontWeight: "500",
              flexDirection: "row",
              marginBottom: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                  lg: "row",
                  sm: "row",
                },
                flexWrap: { sm: "wrap" },
                gap: {
                  xl: "150px",
                  lg: "100px",
                  md: "50px",
                  sm: "50px",
                  xs: "30px",
                },
              }}
            >
              {footerMenu.map((footerItem, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
                >
                  <Typography variant="h6">{footerItem.title}</Typography>
                  {footerItem.item.map((i, index) => (
                    <Typography
                      key={index}
                      sx={{
                        color: "gray",
                        fontSize: "15px",
                        "&:hover": { scale: "1.05", color: "white" },
                      }}
                    >
                      {i}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginBottom: "30px",
            }}
          >
            <SocialIcon
              network="instagram"
              bgColor="transparent"
              fgColor="gray"
              className="App-logo"
            />
            <SocialIcon
              network="facebook"
              bgColor="transparent"
              fgColor="gray"
              className="App-logo"
            />
            <SocialIcon
              network="youtube"
              bgColor="transparent"
              fgColor="gray"
              className="App-logo"
            />
            <SocialIcon
              network="twitter"
              bgColor="transparent"
              fgColor="gray"
              className="App-logo"
            />
          </Box>
          <hr className="border-gray-400 mb-10"></hr>
          <Box
            sx={{
              color: "gray",
              fontSize: "13px",
              display: "flex",
              gap: {
                lg: "40px",
                xl: "50px",
                md: "30px",
                sm: "25px",
                xs: "20px",
              },
              flexWrap: "wrap",
            }}
          >
            {footerBottom.map((i, index) => (
              <Typography
                key={index}
                sx={{ "&:hover": { scale: "1.05", color: "white" } }}
              >
                {i}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
