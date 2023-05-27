import React, { useContext, useRef, useEffect } from "react";
import { ChatContext } from "@/context/chatContext";
import { Box } from "@mui/material";
import OneChat from "./oneChat";

const MainChat = () => {
  const { chatArr, grpChat, setChatArr }: any = useContext(ChatContext);
  console.log(grpChat.messages);

  const myDivRef = useRef(null);

  useEffect(() => {
    const div: any = myDivRef.current;
    div.scrollTop = div.scrollHeight;
  }, [chatArr]);

  return (
    <Box
      ref={myDivRef}
      sx={{
        width: "100%",
        minHeight: "75%",
        overflow: "scroll",
        background:
          "linear-gradient(90deg, hsla(159, 59%, 92%, 1) 0%, hsla(208, 100%, 95%, 1) 100%)",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "100%",
          p: 2,
        }}
      >
        {grpChat.messages.map((e: any, index: number) => (
          <OneChat key={index} message={e} />
        ))}
        {/* {chatArr.map((e: any) => (
          <OneChat message={e} />
        ))} */}
      </Box>
    </Box>
  );
};

export default MainChat;
