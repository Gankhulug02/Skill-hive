import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import Auth from "./auth";
import Profile from "./profile";
import { UserContext } from "@/context/userContext";

const Default = () => {
  const { isLogged }: any = useContext(UserContext);
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        gap: "40px",
        width: "100%",
        button: {
          width: "fit-content",
          whiteSpace: "nowrap",
        },
      }}
    >
      {/* post offer button start */}
      <Button
        onClick={() => router.push("/postOffer")}
        sx={{
          minWidth: "120px",
          maxHeight: "40px",
          color: "white",
          px: 2,
          background:
            "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
        }}
      >
        Post Offer
      </Button>
      {/* post offer button end */}
      {isLogged ? <Profile /> : <Auth />}
    </Box>
  );
};

export default Default;
