import { Box } from "@mui/system";
import Image from "next/image";
import React, { useContext, useState } from "react";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import ClearIcon from "@mui/icons-material/Clear";
import { ModalContext } from "@/context/modalContext";
import { ProfileContext } from "@/context/profileContext";

const ProfileImageModal = ({}: any) => {
  const [isFull, setIsFull] = useState<boolean>(false);
  const { toggleModal } = useContext(ModalContext);
  const { profileData } = useContext(ProfileContext);

  const fullScreenToggle = () => {
    setIsFull(!isFull);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: isFull ? "100%" : "60%",
        height: isFull ? "100%" : "90%",
        backgroundColor: "black",
        objectFit: "contain",
        zIndex: "1111",
      }}
    >
      <Image
        width={2000}
        height={1000}
        alt="image"
        className="h-full w-auto m-auto"
        src={profileData?.freelancer.avatar}
      />
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
        }}
      >
        <ClearIcon
          sx={{
            ":hover": { cursor: "pointer" },
          }}
          onClick={() => {
            toggleModal();
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          position: "absolute",
          right: "20px",
          top: "20px",
          color: "white",
        }}
      >
        {isFull ? (
          <FullscreenExitIcon
            sx={{
              ":hover": { cursor: "pointer" },
            }}
            onClick={fullScreenToggle}
          />
        ) : (
          <FullscreenIcon
            sx={{
              ":hover": { cursor: "pointer" },
            }}
            onClick={fullScreenToggle}
          />
        )}
      </Box>
    </Box>
  );
};

export default ProfileImageModal;
