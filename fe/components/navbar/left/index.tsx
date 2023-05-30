import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { SearchInput } from "./searchInput";

const Left = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "100px",
        width: "50%",
      }}
    >
      <Box
        onClick={() => router.push("/")}
        sx={{
          maxWidth: "250px",
          minWidth: "100px",
          height: "100%",
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <Image
          src="/logo-no-back.svg"
          alt=""
          height={150}
          width={300}
          className="h-full w-full"
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "50%",
          height: "100%",
        }}
      >
        <SearchInput />
      </Box>
    </Box>
  );
};

export default Left;
