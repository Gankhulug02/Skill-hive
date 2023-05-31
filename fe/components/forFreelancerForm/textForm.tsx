import { Input, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Country from "./country";

const TextForm = ({ handleChange, textInputStyle, titleStyle }: any) => {
  return (
    <>
      {/* full name start */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>Name</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "15px",
            width: "100%",
          }}
        >
          <Input
            disableUnderline
            placeholder="First Name"
            type={textInputStyle.type}
            sx={textInputStyle.style}
            onChange={(e) => {
              handleChange({ key: "firstName", value: e.target.value });
            }}
          />
          <Input
            disableUnderline
            placeholder="Last Name"
            type={textInputStyle.type}
            sx={textInputStyle.style}
            onChange={(e) => {
              handleChange({ key: "lastName", value: e.target.value });
            }}
          />
        </Box>
      </Box>
      {/* full name end */}
      {/* Job Title start*/}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>Job Title</Typography>
        <Input
          disableUnderline
          placeholder="Example: Web designer; Copywriter; Virtual assistant..."
          type={textInputStyle.type}
          sx={textInputStyle.style}
          onChange={(e) => {
            handleChange({ key: "title", value: e.target.value });
          }}
        />
      </Box>
      {/* Job Title end*/}

      {/*Ur Skills start*/}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>Your Skills</Typography>
        <Input
          disableUnderline
          placeholder="Type here to add..."
          type={textInputStyle.type}
          sx={textInputStyle.style}
          onChange={(e) => {
            handleChange({ key: "skills", value: e.target.value });
          }}
        />
      </Box>
      {/*About You start*/}

      {/*Ur Skills start*/}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>About Me</Typography>
        <textarea
          placeholder="Type here to add..."
          style={{
            border: "1px solid grey",
            borderRadius: "5px",
            padding: "10px",
            minHeight: "250px",
            height: "fitContent",
          }}
          onChange={(e) => {
            handleChange({ key: "aboutMe", value: e.target.value });
          }}
        />
      </Box>
      {/* About You end*/}

      {/* HourlyRate  start*/}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>Hourly Rate</Typography>
        <TextField
          label="hourly rate"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Box>
      {/* HourlyRate  end*/}

      {/* Country start*/}
      <Country titleStyle={titleStyle} handleChange={handleChange} />
      {/* Country  end*/}

      {/* Phonenumber start*/}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography sx={titleStyle}>Phone Number</Typography>
        <Input
          disableUnderline
          placeholder="Phone number"
          type="number"
          sx={textInputStyle.style}
          onChange={(e: any) => {
            handleChange({ key: "phone", value: e.target.value });
          }}
        />
      </Box>
      {/* Phonenumber  end*/}
    </>
  );
};

export default TextForm;
