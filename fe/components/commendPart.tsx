import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "next/image";

const CommendPart = () => {
  const commend = [
    {
      description:
        "We have built a network of trusted freelancers we can depend on when we need something done.",
      name: "Ana Rodriguez",
      company_name: "Santamaria Shirtmakers",
      imgURL:
        "https://i.pinimg.com/564x/79/8e/29/798e2977f8a77d6c2f6343e95ad76659.jpg",
    },
    {
      description:
        "The ease of communication and security provided make the process of outsourcing effortless.",
      name: "Bronte Aurell",
      company_name: "ScandiKitchen",
      imgURL:
        "https://i.pinimg.com/750x/fb/f3/54/fbf3540f9fb6e60591c5ecac6c5f09af.jpg",
    },
  ];
  return (
    <Box sx={{ width: { xs: "95%", xl: "75%" }, margin: "auto" }}>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: { xs: "20px", sm: "20px" },
        }}
      >
        {commend.map((i, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "100%" },
              backgroundColor: "#F0F8FF",
              borderRadius: "15px",
              padding: { xs: "1.5rem", md: "2.25rem" },
              fontWeight: "500",
              fontSize: "22px",
              boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: "20px" }}>
              {i.description}
            </Typography>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Image
                src={i.imgURL}
                alt={i.imgURL}
                width={400}
                height={400}
                className="w-28 h-28 rounded-full"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6">{i.name}</Typography>
                <Typography variant="h6" sx={{ color: "gray" }}>
                  {i.company_name}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CommendPart;
