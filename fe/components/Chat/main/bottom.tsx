import React, { useContext, useState } from "react";
import { Box } from "@mui/material";
import { TiLocationArrowOutline } from "@react-icons/all-files/ti/TiLocationArrowOutline";
import { ChatContext } from "@/context/chatContext";

const Bottom = () => {
  const { chatArr, setChatArr, send, textValue, setTextValue }: any =
    useContext(ChatContext);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      send({ own: true });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: "10%",
        py: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "92%",
          height: "100%",
          backgroundColor: "rgba(246,246,246)",
          borderRadius: "10px",
        }}
      >
        <Box sx={{ width: "90%", height: "100%", px: 3 }}>
          <input
            value={textValue}
            onKeyPress={handleKeyPress}
            onChange={(e) => setTextValue(e.target.value)}
            type="search"
            className="h-full w-full bg-transparent focus:outline-none placeholder-gray-400"
            placeholder="Type a message"
          ></input>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "10%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "40%",
              aspectRatio: "1/1",
              borderRadius: "50%",
              ":hover": {
                backgroundColor: "#ebe6e6",
              },
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "100%",
          width: "7%",
          //   px: 2,
        }}
      >
        <Box
          onClick={() => {
            send({ own: true });
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            aspectRatio: "1/1",
            backgroundColor: "rgba(60,109,246)",
            borderRadius: "10px",
          }}
        >
          <TiLocationArrowOutline fontSize="2rem" color="white" />
        </Box>
      </Box>
    </Box>
  );
};

export default Bottom;
