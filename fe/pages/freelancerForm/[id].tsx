import React, { useContext, useState } from "react";
import { BASE_URL } from "@/variables";
import axios from "axios";
import {
  Box,
  Button,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingContext } from "@/context/loadingContext";
import { useRouter } from "next/router";
import ProfilePic from "@/components/forFreelancerForm/profilePic";
import Portfolio from "@/components/forFreelancerForm/portfolio";
import Country from "@/components/forFreelancerForm/country";

const FreelancerForm = () => {
  const router = useRouter();
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
  const pStyle = { fontSize: "15px", color: "rgba(150,150,150)" };
  console.log(router);
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

        {/* Profile Pic start */}
        <ProfilePic
          data={data}
          setData={setData}
          handleChange={handleChange}
          titleStyle={titleStyle}
          setIsLoading={setIsLoading}
          uploadImg={uploadImg}
        />
        {/* Profile Pic end */}

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

        <Portfolio
          data={data}
          setData={setData}
          handleChange={handleChange}
          titleStyle={titleStyle}
          setIsLoading={setIsLoading}
          uploadImg={uploadImg}
        />

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
