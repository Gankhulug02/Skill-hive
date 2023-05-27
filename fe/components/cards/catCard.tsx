import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const CatCard = ({ data }: any) => {
  const router = useRouter();
  const e = data;
  return (
    <Box
      onClick={() => {
        router.push("/category/:id");
      }}
      sx={{
        display: "block",
        position: "relative",
        width: { xs: "240px" },
        aspectRatio: "3/4",
        objectFit: "cover",
        overflow: "hidden",
        borderRadius: "5px",
        mx: "auto",
      }}
    >
      <Image
        width={400}
        height={400}
        src={e.src}
        alt={e.src}
        className="h-full w-full brightness-75 "
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          position: "absolute",
          top: "1px",
          left: "0px",
          p: { xs: 1, sm: 3 },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#D0D0D0",
            fontSize: "12px",
          }}
        >
          Engage your community
        </Typography>
        <Typography variant="h6" sx={{ color: "#f5f5f5" }}>
          {e.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default CatCard;
