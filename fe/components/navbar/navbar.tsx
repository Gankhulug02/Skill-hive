import React from "react";
import { Box } from "@mui/system";
import Left from "./left";
import Right from "./right";
import { SearchInput } from "./left/searchInput";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "80px",
        borderBottom: "1px solid rgba(200, 200,200)",
        backgroundColor: "white",
        py: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Box
          sx={{
            display: "flex",
            width: { xs: "95%", xl: "80%" },
            marginX: "auto",
          }}
        >
          <Left />
          <Right />
        </Box>
        <Box
          sx={{ display: { xs: "block", md: "none" }, height: "35px", px: 2 }}
        >
          <SearchInput />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
