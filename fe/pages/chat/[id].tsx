import { Box } from "@mui/system";
import React from "react";
import Main from "@/components/Chat/main";
import SideBar from "@/components/Chat/sidebar";

const Chat = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
        width: "100%",
        height: "95vh",
        padding: "15px",
        marginTop: "-10px",
        paddingY: 3,
        backgroundColor: "rgba(235,248,252)",
      }}
    >
      <SideBar />
      <Main />
    </Box>
  );
};

export default Chat;
