import React, { useState } from "react";
import { MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { countries } from "@/data/data";

const Country = ({ titleStyle, handleChange }: any) => {
  const [flag, setFlag] = useState(`https://flagcdn.com/mn.svg`);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Typography sx={titleStyle}>Country</Typography>
        <Image
          width={20}
          height={10}
          alt="asd"
          src={flag?.toLowerCase() || ""}
          className="w-[30px] h-[17px] rounded border-[grey] border-[0.1px]"
        />
      </Box>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="MN"
        helperText="Please select your country"
        onChange={(e: any) => {
          handleChange({ key: "region", value: e.target.value });
          setFlag(`https://flagcdn.com/${e.target.value?.shortcut}.svg`);
        }}
      >
        {countries?.map((option: any) => (
          <MenuItem key={option.country.shortcut} value={option.country}>
            {option.country.name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default Country;
