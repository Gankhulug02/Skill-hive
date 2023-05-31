import React, { useContext } from "react";
import { UserContext } from "@/context/userContext";
import { Box } from "@mui/system";
import { Button, Checkbox, Input, Typography } from "@mui/material";
import { mainColor } from "@/utils/color";
import { useRouter } from "next/router";
const Login = ({ inputStyle }: any) => {
  const { logIn, logInData, handleLogInData }: any = useContext(UserContext);
  const router = useRouter();
  const checkLoginData = () => {
    if (!logInData.email || !logInData.password) {
      alert("fillin all field");
    } else {
      logIn();
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
            Hey, hello 👋
          </Typography>
          <Typography sx={{ fontSize: "12px", color: "rgba(150,150,150)" }}>
            Enter the information you entered while registering.
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
            <Box>
              <Typography sx={{ fontSize: "13px" }}>Email</Typography>
              <Input
                disableUnderline
                name="email"
                onChange={handleLogInData}
                value={logInData.email}
                sx={inputStyle}
              />
            </Box>
            <Box>
              <Typography sx={{ fontSize: "13px" }}>Password</Typography>
              <Input
                disableUnderline
                type="password"
                name="password"
                onChange={handleLogInData}
                value={logInData.password}
                sx={inputStyle}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox size="small" />
              <Typography sx={{ fontSize: "13px" }}>Remember me</Typography>
            </Box>
            <Typography sx={{ color: "rgba(100,100,255)", fontSize: "13px" }}>
              Forget password?
            </Typography>
          </Box>
        </Box>
        {/* info inputs end */}
        <Button
          onClick={() => checkLoginData()}
          sx={{
            background: mainColor,
            width: "100%",
            color: "white",
          }}
        >
          Login
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
              Don`t have an account?
            </Typography>
            <Typography
              onClick={() => router.push("/auth#signup")}
              sx={{ textDecoration: "underline" }}
            >
              Create an account
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
