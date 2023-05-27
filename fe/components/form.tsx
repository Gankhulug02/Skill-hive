import React from "react";
import { Container, Typography, TextField } from "@mui/material";

const form = () => {
  return (
    <div>
      <Container>
        <Typography sx={{ borderBottom: "1px solid black" }}>
          Үйлчилгээ нэмэх
        </Typography>
        <Typography sx={{}}>1.Үйлчилгээний нэр</Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Typography sx={{}}>1.Үйлчилгээний дэлгэрэнгүй мэдээлэл</Typography>
      </Container>
    </div>
  );
};

export default form;
