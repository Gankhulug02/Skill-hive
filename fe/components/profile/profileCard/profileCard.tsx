import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

// mui
import { Box, Button, Typography } from "@mui/material";
import Popover from "@mui/material/Popover";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircleIcon from "@mui/icons-material/Circle";
import ReplyIcon from "@mui/icons-material/Reply";
import ProfileSettings from "./editProfile";

const ProfileCard = ({ profileData, toggleModal }: any) => {
  const router = useRouter();
  const [isSettings, setIsSettings] = useState<boolean>(false);
  const [toggleLike, setToggleLike] = useState(false);

  // Popover start
  const [popoverText, setPopOverText] = useState<String>("Copy Profile");
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setPopOverText("Copy Profile");
    setAnchorEl(event.currentTarget);
  };
  console.log("profile Data", profileData);
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // Popover end

  const toggleEditProfile = () => {
    setIsSettings(!isSettings);
  };

  const like = () => {
    setToggleLike(!toggleLike);
  };

  const handleCopyUrl = async () => {
    try {
      setPopOverText("Copied!");
      await navigator.clipboard.writeText(window.location.href);
    } catch (err: any) {
      setPopOverText(err);
    }
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },
        minHeight: "500px",
        borderRadius: "15px",
        boxShadow: "0px 5px 11px 1px rgba(109,128,135,0.22)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "200px",
          background: "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            left: { xs: "50%", sm: "80px" },
            transform: { xs: "translate(-50%, 0)", sm: "translate(0, 0)" },
            bottom: "-90px",
            width: "180px",
            aspectRatio: "1/1",
            borderRadius: "50%",
            backgroundColor: "white",
            overflow: "hidden",
            p: 1,
            zIndex: 2,
          }}
        >
          <Box
            onClick={() => toggleModal("ProfileImage")}
            sx={{
              posiition: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              backgroundColor: "white",
              overflow: "hidden",
              ":hover": {
                cursor: "pointer",
                img: {
                  filter: "brightness(50%)",
                },
                ".viewProfile": {
                  display: "block",
                },
              },
            }}
          >
            <Typography
              className="viewProfile"
              sx={{
                display: "none",
                fontWeight: "500",
                color: "white",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                zIndex: "2",
              }}
            >
              View Profile
            </Typography>
            <Image
              width={400}
              height={400}
              alt="zurag"
              src={profileData?.freelancer.avatar}
              className="h-full w-full object-cover"
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "55%",

          position: "relative",
          paddingTop: "100px",
          paddingBottom: { xs: "70px", lg: "100px" },
          px: { xs: 2, sm: 10 },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            right: "40px",
            top: "30px",
          }}
        >
          <MoreVertIcon
            onClick={toggleEditProfile}
            sx={{
              scale: "1.2",
              ":hover": {
                cursor: "pointer",
              },
            }}
          />
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "0px",
            }}
          >
            <Box sx={{ position: "absolute", right: "100%" }}>
              <ProfileSettings
                id={profileData?._id}
                toggleModal={toggleModal}
                isEditProfile={isSettings}
                SetIsEditProfile={setIsSettings}
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            gap: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            {/* <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              {profileData?.name?.[0]}
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              {profileData?.name?.[1]}
            </Typography> */}
            <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              {profileData?.name}
            </Typography>
            {toggleLike ? (
              <FavoriteIcon
                onClick={() => {
                  like();
                }}
                sx={{
                  color: "red",
                  ":hover": {
                    cursor: "pointer",
                  },
                }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={() => {
                  like();
                }}
                sx={{
                  ":hover": {
                    color: "red",
                    cursor: "pointer",
                  },
                }}
              />
            )}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image
              width={20}
              height={10}
              alt="asd"
              src="https://flagcdn.com/us.svg"
              className="w-[30px] h-[17px] rounded"
            />
            <Typography sx={{ color: "grey" }}>
              Los Angeles, United States
            </Typography>
            <Typography sx={{ color: "grey" }}>
              <CircleIcon
                sx={{
                  fontSize: "8px",
                  color: "#d3d3d3",
                  marginRight: "10px",
                }}
              />
              {profileData?.freelancer.job_title}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <Button
              onClick={() => {
                router.push("/chat/4");
              }}
              sx={{
                textTransform: "capitalize",
                backgroundColor: "white!important",
                color: "black",
                fontSize: "15px",
                border: "1.5px solid #d3d3d3",
                borderRadius: "10px",
                px: 2,
              }}
            >
              Message
            </Button>
            <Button
              onClick={handleCopyUrl}
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textTransform: "capitalize",
                background:
                  "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
                color: "white",
                fontSize: "15px",
                borderRadius: "10px",
                px: 2,
              }}
            >
              <ReplyIcon />
              Share Profile
            </Button>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography
                sx={{
                  fontSize: "10px",
                  p: 1,
                }}
              >
                {popoverText}
              </Typography>
            </Popover>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
