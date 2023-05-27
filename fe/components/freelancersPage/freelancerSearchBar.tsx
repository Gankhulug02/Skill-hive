import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { BsSearch } from "react-icons/bs";

const FreelancerSearchBar = ({ freelancers, setFreelancers }: any) => {
  const [isAppear, setIsAppear] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        width: {
          xs: "95vw",
          sm: "65vw",
          lg: "40vw",
        },
        margin: "auto",
      }}
    >
      <TextField
        sx={{
          width: "100%",
          height: "100%",
          "& .MuiOutlinedInput-root": {
            backgroundColor: "white",
            borderRadius: "10px",
            paddingLeft: "10px",
            boxShadow: "1px 5px 13px 5px rgba(0,0,0,0.1)",
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              border: "none",
            },

            "&.Mui-focused fieldset": {
              boxShadow: "1px 9px 20px 5px rgba(0,0,0,0.08)",
              borderColor: "white",
            },
          },
        }}
        onClick={() => {
          setIsAppear(true);
        }}
        onMouseLeave={() => {
          setIsAppear(false);
        }}
        type="text"
        placeholder={!isAppear ? "Search Offers" : ""}
        name="searchBar"
      />
      <Button
        sx={{
          backgroundColor: "#7EA2AA  !important",
          height: "100%",
          // height: { xs: "50px", md: "70px" },
          position: "absolute",
          right: "0",
          top: "0",
          borderRadius: "0 10px 10px 0",
        }}
      >
        <BsSearch size={20} color={"white"} />
      </Button>
    </Box>
  );
};

export default FreelancerSearchBar;
