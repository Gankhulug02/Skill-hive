import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "@/context/userContext";
import { mainColor } from "@/utils/color";
import { Box } from "@mui/system";
import { Button, Input, Typography } from "@mui/material";

const SignUp = ({ inputStyle }: any) => {
  const router = useRouter();
  const { signUpData, signUp, whatRole, handleSignUpData }: any =
    useContext(UserContext);

  const checkSignUpData = () => {
    const isEmail = signUpData.email.includes("@gmail.com");
    if (
      !signUpData.email ||
      !signUpData.firstName ||
      !signUpData.lastName ||
      !signUpData.password ||
      !signUpData.repassword
    ) {
      alert("please fillin all fields");
    } else if (signUpData.password !== signUpData.repassword) {
      alert("password need to be same");
    } else if (isEmail) {
      signUp();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        backgroundColor: "white",
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "80%",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* header start */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Create an account
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "rgba(150,150,150)" }}>
            Describe yourself as clearly so that there are no mistakes.
          </Typography>
        </Box>
        {/* header end */}
        <Box>
          {/* info inputs start */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              div: {
                display: "flex",
                flexDirection: "column",
              },
            }}
          >
            <Box
              sx={{
                flexDirection: "row!important",
                gap: "5px",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "13px" }}>First name</Typography>
                <Input
                  disableUnderline
                  name="firstName"
                  onChange={handleSignUpData}
                  value={signUpData.firstName}
                  sx={inputStyle}
                />
              </Box>
              <Box>
                <Typography sx={{ fontSize: "13px" }}>Last name</Typography>
                <Input
                  disableUnderline
                  name="lastName"
                  onChange={handleSignUpData}
                  value={signUpData.lastName}
                  sx={inputStyle}
                />
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: "13px" }}>Email</Typography>
              <Input
                disableUnderline
                name="email"
                onChange={handleSignUpData}
                value={signUpData.email}
                sx={inputStyle}
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "13px" }}>Password</Typography>
              <Input
                disableUnderline
                name="password"
                type="password"
                onChange={handleSignUpData}
                value={signUpData.password}
                sx={inputStyle}
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "13px" }}>Repeat Password</Typography>
              <Input
                disableUnderline
                type="password"
                sx={inputStyle}
                name="repassword"
                onChange={handleSignUpData}
                value={signUpData.repassword}
              />
            </Box>
          </Box>
        </Box>
        {/* info inputs end */}
        <Button
          onClick={() => {
            checkSignUpData();
          }}
          sx={{
            background: mainColor,
            width: "100%",
            color: "white",
          }}
        >
          Create account
        </Button>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              "& p": {
                fontSize: "12px",
              },
            }}
          >
            <Typography sx={{ color: "rgba(150,150,150)" }}>
              Already have an account?
            </Typography>
            <Typography
              onClick={() => router.push("/auth#login")}
              sx={{ textDecoration: "underline" }}
            >
              Login
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
