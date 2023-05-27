import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

const OneMessage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "70px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
        }}
      >
        {/* // profile pic start */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20%",
          }}
        >
          <Box
            sx={{
              height: "100%",
              aspectRatio: "1/1",
              borderRadius: "50%",
              backgroundColor: "blue",
              overflow: "hidden",
            }}
          >
            <Image
              alt="img"
              width={2000}
              height={1000}
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
              className="h-full w-full object-cover"
            />
          </Box>
        </Box>
        {/* // profile pic end  */}
        {/* // ner tsag message tei heseg ehlel */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            gap: "5px",
            width: "75%",
            height: "100%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Amanda Smith
            </Typography>
            <Typography sx={{ fontSize: "16px", color: "grey" }}>
              09:26 PM
            </Typography>
          </Box>
          <Typography noWrap={true} sx={{ width: "70%", color: "grey" }}>
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </Typography>
        </Box>
        {/* // ner tsag message tei heseg tugsgul */}
      </Box>
    </Box>
  );
};

export default OneMessage;

{
  /* <Box
sx={{
  height: "100%",
  aspectRatio: "1/1",
  borderRadius: "50%",
  backgroundColor: "blue",
}}
></Box>
<Box
sx={{
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
}}
>
<Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    height: "50%",
  }}
>
  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
    Amanda Smith
  </Typography>
  <Typography sx={{ color: "grey", fontSize: "15px" }}>
    09:26 PM
  </Typography>
</Box>
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "50%",
  }}
>
  <Typography
    noWrap={true}
    sx={{
      display: "flex",
      flexWrap: "nowrap",
      maxWidth: "20%",
      fontSize: "15px",
      color: "grey",
      overflow: "hidden",
      backgroundColor: "green",
    }}
  >
    Helloas.djfnbjasfjsahflkjashdfljkshdflkjashflkajshdflkajsdhflkjashflkajshflkjhasdjkfhashdlkfjhaslkjdfas
  </Typography>
</Box>
</Box> */
}
