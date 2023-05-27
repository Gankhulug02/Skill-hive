import { LoadingContext } from "@/context/loadingContext";
import { Box } from "@mui/system";
import React, { useContext } from "react";

const Loading = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  return (
    <Box
      sx={{
        display: isLoading ? "flex" : "none",
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        width: "100%",
        minHeight: "100vh",
        // backgroundColor: "rgba(50,50,50,0.5)",
        zIndex: "22222222222",
      }}
    >
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};

export default Loading;
