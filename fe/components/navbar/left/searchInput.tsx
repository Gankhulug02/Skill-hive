import React from "react";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "100%",
        backgroundColor: "rgba(235,235,235)",
        borderRadius: "40px",
      }}
    >
      <Box sx={{ width: "85%", height: "100%", px: 3 }}>
        <input
          type="search"
          className="h-full w-full bg-transparent focus:outline-none placeholder-gray-400"
          placeholder="Search offers"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "15%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <SearchIcon />
        </Box>
      </Box>
    </Box>
  );
};
