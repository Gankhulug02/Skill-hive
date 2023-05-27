import React, { useContext } from "react";
import { Box } from "@mui/material";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";
import { ChatContext } from "@/context/chatContext";

const Search = () => {
  const { send, textValueB, setTextValueB }: any = useContext(ChatContext);

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      send({ own: false });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        width: "100%",
        height: "100%",
        borderRadius: "20px",
        backgroundColor: "rgba(246,246,246)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20%",
          height: "100%",
        }}
      >
        <BiSearch color="grey" fontSize="1.5rem" />
      </Box>
      <Box sx={{ width: "100%", height: "100%" }}>
        <input
          value={textValueB}
          onKeyPress={handleKeyPress}
          onChange={(e) => setTextValueB(e.target.value)}
          type="search"
          className="h-full w-full bg-transparent focus:outline-none placeholder-gray-400"
          placeholder="Search..."
        ></input>
      </Box>
    </Box>
  );
};

export default Search;
