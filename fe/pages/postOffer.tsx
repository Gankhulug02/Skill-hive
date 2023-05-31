import React, { useContext, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

import Main from "@/components/forPostOffer/main";
import OfferCard from "@/components/cards/offerCard";
import { UserContext } from "@/context/userContext";

const PostOffer = () => {
  const { userData }: any = useContext(UserContext);
  const [data, setData] = useState<any>({
    title: "your offer title",
    description: "your offer description",
    img: [],

    skills: ["categories"],
    budget: 0,
    Freelancer: { freelancer: { avatar: "" } },
  });

  useEffect(() => {
    setData({
      ...data,
      Freelancer: { freelancer: { avatar: userData?.freelancer?.avatar } },
    });
  }, [userData]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        gap: "40px",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "start", md: "center" },
        alignItems: { xs: "center", md: "start" },
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "rgba(239,240,241)",
        py: 2,
        px: 2,
        "* ::placeholder": {
          color: "rgba(200,200,200)",
        },
      }}
    >
      <Box
        sx={{
          position: { xs: "relative", md: "sticky" },
          top: "20px",
          height: "fit-content",
        }}
      >
        <OfferCard data={data} />
      </Box>
      <Main data={data} setData={setData} />
    </Box>
  );
};

export default PostOffer;
