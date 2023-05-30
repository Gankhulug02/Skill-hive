import { LoadingContext } from "@/context/loadingContext";
import { UserContext } from "@/context/userContext";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Profile = () => {
  const router = useRouter();

  const [isMenu, setIsMenu] = useState<boolean>(false);

  const { userData, setUserData, isLogged, setIsLogged }: any =
    useContext(UserContext);

  const buttonData = ["Profile", "Payment", "Dashboard", "Chat", "Logout"];

  const menuRoute = (e: string) => {
    if (e === "Profile") {
      router.push(`/profile/${userData._id}`);
    } else if (e === "Dashboard") {
      router.push(`/admin`);
      console.log(userData);
    } else if (e === `Logout`) {
      localStorage.setItem("userId", "null");
      localStorage.setItem("userData", "null");
      localStorage.setItem("isLogged", "false");
      setIsLogged(false);
      setUserData(null);
    }
  };

  return (
    <Box sx={{ position: "relative", pr: 5 }}>
      <Box
        onClick={() => setIsMenu(!isMenu)}
        sx={{
          height: "100%",
          aspectRatio: "1/1",
          backgroundColor: "green",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image
          src={
            userData?.freelancer?.avatar ||
            "https://1fid.com/wp-content/uploads/2022/06/no-profile-picture-6-1024x1024.jpg"
          }
          alt=""
          width={50}
          height={50}
          className="h-full w-full object-cover"
        />
      </Box>
      {/* profile menu start*/}
      <Box
        sx={{
          display: isMenu ? "flex" : "none",
          flexDirection: "column",
          position: "absolute",
          top: "120%",
          left: "-80px",
          p: 2,
          gap: "10px",
          zIndex: "2",
          backgroundColor: "white",
          borderRadius: "5px",
          boxShadow: "0px 2px 5px 0px rgba(158,158,158,0.5)",
        }}
      >
        {buttonData.map((e: any) => (
          <Button
            onClick={() => menuRoute(e)}
            sx={{
              width: "100%!important",
              justifyContent: "start",
              color: "rgba(150,150,150)",
              flex: "none",
              textTransform: "capitalize",
            }}
          >
            {e}
          </Button>
        ))}
      </Box>
      {/* profile menu end*/}
    </Box>
  );
};

export default Profile;
