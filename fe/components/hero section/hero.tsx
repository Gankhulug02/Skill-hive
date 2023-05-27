import React, { useState } from "react";
import ImgSlider from "./slider";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";

const Hero = () => {
  //   const [value2, setValue2] = useState();
  const [res, setRes] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: any) => {
    setSearchTerm(event.target.value);
  };
  return (
    <React.Fragment>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "50vh" }}
      >
        <div
          style={{
            zIndex: -1,
            position: "absolute",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src="/back44.webp"
            alt="sdas"
            fill={true}
            style={{ objectFit: "contain" }}
            quality={40}
          />
        </div>
        <Grid sx={{ maxWidth: "75vw" }}>
          <Typography variant="h4">
            Монголын анхны Фрийлансерийн цогц платформ
          </Typography>
        </Grid>

        <Grid
          sx={{ maxWidth: "75vw", marginTop: "2rem", marginBottom: "2rem" }}
        >
          <Typography variant="h5">
            Захиалагч болон фрийлансерууд орон зайнаас үл хамааран чанартай
            ажлыг гүйцэтгэх боломж.
          </Typography>
        </Grid>
        <Grid className="hidden md:block">
          <TextField
            id="search"
            type="search"
            value={searchTerm}
            onChange={handleChange}
            sx={{
              margin: "auto",
              maxWidth: "40vw",
              minWidth: "30vw",
              backgroundColor: "#ffffff",
              borderRadius: "7px",
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Hero;
