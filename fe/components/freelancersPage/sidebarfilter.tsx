import React, { useState } from "react";
import { Box, Button, TextField, Typography, Switch } from "@mui/material";
import styles from "./sideBarFilter.module.css";
import { BsSearch, BsCurrencyDollar } from "react-icons/bs";

const SideBarFilter = ({ freelancers, setFreelancers }: any) => {
  const [isAppear, setIsAppear] = useState(false);
  const [isAppearMin, setIsAppearMin] = useState(false);
  const [isAppearMax, setIsAppearMax] = useState(false);
  return (
    <>
      <Box
        sx={{
          width: "100%",
          boxShadow: "",
          background: "white",
          borderRadius: "5px",
          padding: "15px",
          display: { lg: "flex" },

          minHeight: "100vh",
          maxHeight: "100vh",
          position: "sticky",
          top: "0",
        }}
      >
        <Box sx={{}}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "600", marginBottom: "20px" }}
          >
            Filters
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "20px" }}>
            Delivery Time
          </Typography>
          <form className={styles.form}>
            <label className={styles.fontWeight}>
              <input
                type="radio"
                name="deliveryTime"
                value={"within 1 day "}
                id="within1"
              />
              <span className={styles.labelSpan}>Within 1 day</span>
            </label>
            <label className={styles.fontWeight}>
              <input
                type="radio"
                name="deliveryTime"
                value={"within 2 days "}
                id="within2"
                onClick={() => {
                  const filtered = freelancers?.filter(
                    (e: any) => e?.deliveryTime === 2
                  );
                  setFreelancers(filtered);
                }}
              />
              <span className={styles.labelSpan}>Within 2 days</span>
            </label>
            <label className={styles.fontWeight}>
              <input
                type="radio"
                name="deliveryTime"
                value={"within 3 days "}
                id="within3"
              />
              <span className={styles.labelSpan}>Within 3 days</span>
            </label>
            <label className={styles.fontWeight}>
              <input
                type="radio"
                name="deliveryTime"
                value={"within 4 days "}
                id="within4"
              />
              <span className={styles.labelSpan}>Within 4 days</span>
            </label>
            <hr></hr>
          </form>
          <Typography variant="body1" sx={{ margin: "20px 0" }}>
            Freelancer Country
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <BsSearch
              style={{ position: "absolute", left: "20px", top: "20px" }}
            />
            <TextField
              sx={{
                width: "100%",

                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  marginBottom: "20px",
                  paddingLeft: "30px",
                  border: "solid 0.5px black",
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    boxShadow: "1px 5px 13px 5px rgba(0,0,0,0.1)",
                    border: "none",
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
              placeholder={!isAppear ? "Enter a country" : ""}
              name="searchBar"
            />
          </Box>

          <hr></hr>
          <Typography variant="body1" sx={{ margin: "20px 0" }}>
            Price
          </Typography>
          <form className={styles.form}>
            <label className={styles.fontWeight}>
              <input
                type="radio"
                name="price"
                value={"Under $20"}
                id="within1"
              />
              <span className={styles.labelSpan}>Under $20</span>
            </label>
            <label className={styles.fontWeight}>
              <input
                type="radio"
                name="price"
                value={"$20 to $50"}
                id="within2"
              />
              <span className={styles.labelSpan}>$20 to $50</span>
            </label>
            <label className={styles.fontWeight}>
              <input
                type="radio"
                name="price"
                value={"$50 to $100"}
                id="within3"
              />
              <span className={styles.labelSpan}>$50 to $100</span>
            </label>
            <label className={styles.fontWeight}>
              <input
                type="radio"
                name="price"
                value={"Over $100  "}
                id="within4"
              />
              <span className={styles.labelSpan}>Over $100</span>
            </label>
          </form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "15px",
              position: "relative",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "10px",
                border: "1px solid grey",
                ":hover": {
                  border: "1px solid black",
                },
              }}
            >
              <Typography>$</Typography>
              <TextField
                inputProps={{
                  style: {
                    padding: 0,
                  },
                }}
                sx={{
                  width: "80%",
                  ":hover": {
                    border: "none!important",
                  },
                  "& .MuiOutlinedInput-root": {
                    height: "100%!important",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                  },
                }}
                onClick={() => {
                  setIsAppearMin(true);
                }}
                onMouseLeave={() => {
                  setIsAppearMin(false);
                }}
                type="number"
                placeholder={!isAppearMin ? "min" : ""}
                name="searchBar"
                // onChange={(e)=>{
                //     // if(e.target.value < 1){

                //     }
                // }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: "10px",
                border: "1px solid grey",
                ":hover": {
                  border: "1px solid black",
                },
              }}
            >
              <Typography>$</Typography>
              <TextField
                inputProps={{
                  style: {
                    padding: 0,
                  },
                }}
                sx={{
                  width: "80%",
                  ":hover": {
                    border: "none!important",
                  },
                  "& .MuiOutlinedInput-root": {
                    height: "100%!important",
                    borderRadius: "10px",
                    border: "none",
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                  },
                }}
                onClick={() => {
                  setIsAppearMax(true);
                }}
                onMouseLeave={() => {
                  setIsAppearMax(false);
                }}
                type="number"
                placeholder={!isAppearMax ? "max" : ""}
                name="searchBar"
              />
            </Box>
            <Button
              sx={{
                height: "50px",
                backgroundColor: "#7EA2AA  !important",
                color: "white",
                padding: "15px",
                width: "100%",
                ":hover": {
                  boxShadow: "1px 5px 13px 5px rgba(0,0,0,0.1)",
                },
              }}
            >
              Set
            </Button>
          </Box>
          <hr></hr>
          <Typography
            variant="body1"
            sx={{ color: "white", margin: "20px 0 10px 0" }}
          >
            More Filters
          </Typography>
          <Switch sx={{ marginLeft: "-10px" }} />
        </Box>
      </Box>
    </>
  );
};

export default SideBarFilter;
