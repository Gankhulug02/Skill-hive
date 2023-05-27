import React, { useContext, useState } from "react";
import { BASE_URL } from "@/variables";
import Image from "next/image";
import axios from "axios";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { countries } from "@/data/data";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import { LoadingContext } from "@/context/loadingContext";

const FreelancerForm = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const [data, setData] = useState<any>({
    phone: "test",
    avatar: "",
    job_title: "test",
    skills: [],
    rating: 0,
    portfolio: [],
    hourly_rate: 0,
    about_me: "test",
    region: { country: { name: "Mongolia", shortcut: "mn" } },
  });
  const [flag, setFlag] = useState(`https://flagcdn.com/mn.svg`);
  const pStyle = { fontSize: "15px", color: "rgba(150,150,150)" };

  // style
  const titleStyle = {
    textTransform: "uppercase",
    fontSize: "15px",
    fontWeight: "500",
    color: "#002a6e",
  };
  const textInputStyle = {
    type: "text",
    style: {
      border: "1px solid grey",
      borderRadius: "5px",
      padding: "8px",
      width: "100%",
    },
  };

  // functions
  const handleChange = ({ key, value }: any) => {
    setData({ ...data, [key]: value });
    console.log(data);
  };

  const postFreelancer = async () => {
    try {
      const res = await axios.put(
        `${BASE_URL}/freelancer/6467197e6f53b99471382c55`,
        {
          name: `${data.firstName} ${data.lastName}`,
          freelancer: {
            avatar: data.avatar,
            job_title: data.job_title,
            phone: data.phone,
            skills: [data.skills],
            portfolio: data.portfolio,
            about_me: data.about_me,
            hourly_rate: data.hourly_rate,
            availability: true,
            region: data.region,
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImg = async ({ img, whatImg }: any) => {
    try {
      const res = await axios.post(`${BASE_URL}/upload`, {
        files: img,
      });
      if (whatImg === "avatar") {
        setData({ ...data, avatar: res.data.imgUrl.url });
      } else if (whatImg === "portfolio") {
        setData({
          ...data,
          portfolio: [...data.portfolio, res.data.imgUrl.url],
        });
      }
      console.log("res url", res.data.imgUrl.url);
      setIsLoading(false);
    } catch (err) {
      console.log("err", err);
      setIsLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "rgba(239,240,241)",
        py: 2,
        px: 2,
        "* ::placeholder": {
          color: "rgba(200,200,200)",
        },
        "input::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          width: { xs: "100%", md: "900px" },
          minHeight: "100%",
          backgroundColor: "white",
          borderRadius: "20px",

          p: 4,
        }}
      >
        {/* Header start*/}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
            Edit Your Profile
          </Typography>
          <Typography sx={pStyle}>
            Complete your profile and keep it updated to help us connect you
            with the right people.
          </Typography>
        </Box>
        {/* Header end*/}

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
            <input
              placeholder="First Name"
              type={textInputStyle.type}
              style={textInputStyle.style}
              onChange={(e) => {
                handleChange({ key: "firstName", value: e.target.value });
              }}
            />
            <input
              placeholder="Last Name"
              type={textInputStyle.type}
              style={textInputStyle.style}
              onChange={(e) => {
                handleChange({ key: "lastName", value: e.target.value });
              }}
            />
          </Box>
        </Box>
        {/* full name end */}

        {/* Profile Pic start */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={titleStyle}>Profile Picture</Typography>
          {!data.avatar ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "400px",
                height: "150px",
                border: "2px dashed grey",
                borderRadius: "10px",
                ":hover": {
                  "& p": { color: "rgba(100,100,150)" },
                },
              }}
              component="label"
            >
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => {
                  const file: any = e.target.files?.[0];
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(file);
                  fileReader.onloadend = () => {
                    handleChange({ key: "avatar", value: fileReader.result });
                    setIsLoading(true);
                    uploadImg({ img: fileReader.result, whatImg: "avatar" });
                  };
                }}
              />
              <Typography sx={{ fontSize: "15px", color: "rgba(150,150,150)" }}>
                Drop file here or browse to add
              </Typography>
            </Box>
          ) : (
            <Box
              sx={{
                position: "relative",
                maxWidth: "150px",
                minWidth: "150px",
                maxHeight: "150px",
                minHeight: "150px",
                borderRadius: "50%",
                overflow: "hidden",
                ":hover": {
                  "& img": {
                    filter: "brightness(50%)",
                  },
                  "& p": {
                    display: "block",
                  },
                },
              }}
            >
              <Box
                onClick={() => {
                  handleChange({ key: "avatar", value: "" });
                }}
                sx={{
                  position: "absolute",
                  backgroundColor: "transparent",
                  top: "0px",
                  zIndex: "2",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography
                  sx={{
                    display: "none",
                    position: "absolute",
                    top: "50%",
                    right: "50%",
                    transform: "translate(50%,-50%)",
                    color: "white",
                  }}
                >
                  Delete
                </Typography>
              </Box>
              <Image
                alt=""
                src={data.avatar}
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
            </Box>
          )}
        </Box>
        {/* Profile Pic end */}

        {/* Job Title start*/}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={titleStyle}>Job Title</Typography>
          <input
            placeholder="Example: Web designer; Copywriter; Virtual assistant..."
            type={textInputStyle.type}
            style={textInputStyle.style}
            onChange={(e) => {
              handleChange({ key: "title", value: e.target.value });
            }}
          />
        </Box>
        {/* Job Title end*/}

        {/*Ur Skills start*/}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={titleStyle}>Your Skills</Typography>
          <input
            placeholder="Type here to add..."
            type={textInputStyle.type}
            style={textInputStyle.style}
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

        {/* Portfolio start */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={titleStyle}>Portfolio</Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            {data.portfolio?.map((e: any, index: any) => (
              <Box
                onClick={() => {
                  const updatedData = { ...data };
                  updatedData.portfolio.splice(index, 1);
                  setData(updatedData);
                }}
                key={index}
                sx={{
                  position: "relative",
                  width: "280px",
                  height: "160px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                  ":hover": {
                    "& img": {
                      filter: "brightness(50%)",
                    },
                    "& p": {
                      display: "block",
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0",
                  }}
                >
                  <Typography
                    sx={{
                      display: "none",
                      position: "absolute",
                      top: "50%",
                      right: "50%",
                      transform: "translate(50%,-50%)",
                      color: "white",
                      zIndex: "2",
                    }}
                  >
                    Delete
                  </Typography>
                </Box>
                <Image
                  src={e}
                  width={1400}
                  height={1000}
                  alt="zurag"
                  className="h-full w-full object-cover"
                />
              </Box>
            ))}
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "280px",
                height: "160px",
                borderRadius: "10px",
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                background:
                  "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
                ":hover": {
                  filter: "brightness(90%)",
                },
              }}
              component="label"
            >
              <AddIcon sx={{ color: "white" }} />
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={(e) => {
                  const file: any = e.target.files?.[0];
                  const fileReader = new FileReader();
                  fileReader.readAsDataURL(file);
                  fileReader.onloadend = () => {
                    console.log("D", fileReader.result);
                    setData({
                      ...data,
                      portfolio: [...data.portfolio, fileReader.result],
                    });
                    setIsLoading(true);
                    uploadImg({ img: fileReader.result, whatImg: "portfolio" });
                  };
                }}
              />
            </Box>
          </Box>
        </Box>
        {/* Portfolio end */}

        {/* HourlyRate  start*/}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={titleStyle}>Hourly Rate</Typography>
          <TextField
            label="hourly rate"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </Box>
        {/* HourlyRate  end*/}

        {/* Country start*/}
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
        {/* Country  end*/}

        {/* Phonenumber start*/}
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography sx={titleStyle}>Phone Number</Typography>
          <input
            placeholder="Phone number"
            type="number"
            style={textInputStyle.style}
            onChange={(e: any) => {
              handleChange({ key: "phone", value: e.target.value });
            }}
          />
        </Box>
        {/* Phonenumber  end*/}
        <Button
          onClick={() => postFreelancer()}
          sx={{
            width: "200px",
            background:
              "linear-gradient(90deg, #FDC830  0%, #ff930f 100%)!important",
            color: "white",
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default FreelancerForm;
