import { BASE_URL } from "@/variables";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Payment = () => {
  const [qrCodeImage, setQRCodeImage] = useState<any>("");
  const [price, setPrice] = useState<any>("reckYhciZ6W3xmaEm");
  const [name, setName] = useState<any>("appVDWXjxNSapAjZb");

  const qrGenerate = async () => {
    const response = await axios.get(
      `${BASE_URL}/qrcode?recId=${price}&baseId=${name}`
    );
    setQRCodeImage(response.data.qr);
  };

  // useEffect(() => {
  //   qrGenerate();
  // }, []);

  return (
    <Box
      onClick={() => console.log(qrCodeImage)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
        pt: 5,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Typography>Price</Typography>
        <TextField
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Typography>Name</Typography>
        <TextField
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>

      {qrCodeImage && (
        <>
          <Image src={qrCodeImage} alt="QR Code" width={500} height={500} />
        </>
      )}

      <Button
        onClick={() => {
          qrGenerate();
        }}
      >
        Generate Qr Code
      </Button>
    </Box>
  );
};

export default Payment;
