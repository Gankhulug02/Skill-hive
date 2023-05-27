import React, { useContext } from "react";
import { Box } from "@mui/system";
import { ProfileContext } from "@/context/profileContext";

const Modal = ({ isModal, insideModal, toggleModal }: any) => {
  return (
    <Box
      sx={{
        display: isModal ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        zIndex: "1100",
        top: "0",
        left: "0",
        width: isModal ? "100%" : "1px",
        height: "100vh",
        transition: "all 2s",
      }}
    >
      <Box
        onClick={() => toggleModal()}
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></Box>
      {insideModal}
    </Box>
  );
};

export default Modal;
