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
import TextForm from "@/components/forFreelancerForm/textForm";

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

        {/* Profile Pic start */}
        <ProfilePic
          data={data}
          setData={setData}
          handleChange={handleChange}
          titleStyle={titleStyle}
          setIsLoading={setIsLoading}
          uploadImg={uploadImg}
        />
        <Portfolio
          data={data}
          setData={setData}
          handleChange={handleChange}
          titleStyle={titleStyle}
          setIsLoading={setIsLoading}
          uploadImg={uploadImg}
        />
        {/* Profile Pic end */}
        <TextForm
          handleChange={handleChange}
          textInputStyle={textInputStyle}
          titleStyle={titleStyle}
        />
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
