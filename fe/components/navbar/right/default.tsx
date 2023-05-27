import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";

const Default = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
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
      {/* post offer button end */}
      {/* To Auth start */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
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
      {/*To Auth end */}
    </Box>
  );
};

export default Default;
