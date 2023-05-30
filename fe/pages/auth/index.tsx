import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/userContext";
import { Box } from "@mui/system";
import Image from "next/image";
import Login from "@/components/forAuthPage/login";
import SignUp from "@/components/forAuthPage/signUp";
import { useRouter } from "next/router";

export default function App() {
  const { whatRole, signUpData }: any = useContext(UserContext);
  const [toggleBoolean, setToggleBoolean] = useState<any>(true);
  const inputStyle = {
    boxShadow: "none",
    borderColor: "white",
    borderRadius: "5px",
    border: "1px solid rgba(220,220,220)",
    px: 1,
  };
  const router = useRouter();

  const fragment = router.asPath.split("#")[1];
  useEffect(() => {
    if (fragment === "login") {
      setToggleBoolean(true);
    } else if (fragment === "signup") {
      setToggleBoolean(false);
    }
  }, [fragment]);

  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "100px",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(249,250,251)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          backgroundColor: "black",
          width: { sm: "98%", md: "1000px" },
          height: "600px",
          borderRadius: "10px",
          boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
          overflow: "hidden",
        }}
      >
        <Login inputStyle={inputStyle} />
        <SignUp inputStyle={inputStyle} />
        {/* moving image start */}
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            right: toggleBoolean ? "0px" : "50%",
            width: "50%",
            height: "100%",
            backgroundColor: "white",
            transition: "all 1s",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3024&q=80"
            alt="zurag"
            width={2000}
            height={1000}
            className="h-full w-full object-cover"
          />
        </Box>
        {/* moving image end */}
      </Box>
    </Box>
  );
}
