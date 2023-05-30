import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Auth = () => {
  const router = useRouter();
  return (
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
  );
};

export default Auth;
