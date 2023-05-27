import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import InputAdornment from "@mui/material/InputAdornment";

import {
  Select,
  Typography,
  Container,
  TextField,
  SelectChangeEvent,
  Input,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { CategoryContext } from "@/context/categoryContext";
import { BASE_URL } from "@/variables";
import { red } from "@mui/material/colors";

export default function BasicSelect({}: any) {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [TImage, setTImage] = useState<any>(null);
  const [imgArr, setImgArr] = useState<any>([]);
  const [day, setDay] = React.useState("");
  const [value, setValue] = React.useState(100);
  const [data, setData] = useState<any>({
    category: "",
    subcategory: "",
    title: "",
    description: "",
    price: "",
    day: "",
    thumbnail: "",
    images: [],
  });
  const handleChange2 = (event: SelectChangeEvent) => {
    setDay(event.target.value);
  };
  const { categoriesData }: any = useContext(CategoryContext);
  const handledata = ({ key, value }: any) => {
    console.log(data);
    setData({ ...data, [key]: value });
  };

  const [cat, setCat] = useState(null) as any;
  const handleChange = (event: any) => {
    setCat(event.target.value);
  };

  return (
    <Container className=" mb-10 mt-5">
      <Box className="my-7 border-b-2">
        <Typography variant="h4">Post a project</Typography>
        <Typography variant="h6">
          Describe what you need, then receive custom proposals from
          freelancers.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" className="text-slate-500">
          Select a relevant category so that freelancers can find your project
        </Typography>
      </Box>
      <Box className="flex flex-wrap gap-10 my-7">
        <FormControl sx={{ width: "400px" }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Girls"
            value={cat}
            // onChange={handleChange}
            onChange={(e: any) => {
              handleChange(e);
              handledata({ key: "category", value: e.target.value.title });
            }}
          >
            {categoriesData?.map((e: any) => {
              return (
                <MenuItem key={e.title} value={e}>
                  {e.title}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ width: "400px" }}>
          <InputLabel id="demo-simple-select-label">Sub Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Girls"
            onChange={(e) => {
              handledata({ key: "subcategory", value: e.target.value });
            }}
          >
            {cat?.subCategory?.map((e: any) => {
              return (
                <MenuItem key={e.subtitle} value={e}>
                  {e.subtitle}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box className="my-7">
        <Typography>PROJECT TITLE</Typography>
        <TextField
          onChange={(e) => {
            handledata({ key: "title", value: e.target.value });
          }}
          id="outlined-basic"
          label="outlined"
          variant="outlined"
          fullWidth
        />
      </Box>
      <Box className="my-7" sx={{ height: "25%" }}>
        <label
          // for="message"
          className="block mb-2 text-sm  dark:text-black"
        >
          <Typography>PROJECT DESCRIPRION</Typography>
        </label>
        <textarea
          onChange={(e) => {
            handledata({ key: "description", value: e.target.value });
          }}
          id="message"
          // rows="4"
          className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border h-72 border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Be descriptive, projects with good descriptions are more popular with our freelancers"
        ></textarea>
      </Box>
      <Box className="flex flex-wrap gap-8 mb-5">
        <TextField
          label="Price"
          type="number"
          id="outlined-start-adornment"
          onChange={(e: any) => {
            (event: any, value: any) => setValue(value);
            handledata({ key: "price", value: e.target.value });
          }}
          sx={{ width: "25ch" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">₮</InputAdornment>,
          }}
        />
        <TextField
          label="Day"
          type="number"
          id="outlined-start-adornment"
          onChange={(e: any) => {
            handleChange2(e);
            handledata({ key: "day", value: e.target.value });
          }}
          sx={{ width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Days</InputAdornment>
            ),
          }}
        />
      </Box>
      <Typography>UPLOAD SAMPLES AND OTHER HELPFUL MATERIAL</Typography>

      <Box sx={{ height: "25%" }} className="">
        {data.thumbnail && (
          <Box className="">
            <Image
              className="rounded-xl border-2"
              src={data.thumbnail}
              alt="zurag2"
              width={300}
              height={200}
            ></Image>
          </Box>
        )}
        <Box className="gap-4 mt-6" color={red}>
          <Button variant="contained" component="label">
            Upload Image
            <Input
              style={{ display: "none" }}
              type="file"
              name="myImage"
              onChange={(e: any) => {
                const file: any = e.target.files?.[0];
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onloadend = () => {
                  console.log("D", fileReader.result);
                  setSelectedImage(fileReader.result);
                  handledata({ key: "thumbnail", value: fileReader.result });
                };
              }}
            />
          </Button>
          <Button
            className="ml-6"
            variant="contained"
            component="label"
            onClick={() => setData({ ...data, thumbnail: null })}
          >
            Remove
          </Button>
        </Box>
      </Box>
      <Box className="mt-2 ">
        <Typography>DETAIL IMAGES</Typography>
        <Box className="  w-full h-full content-center">
          <Box className="flex flex-wrap gap-4 ">
            {imgArr.map((e: any, index: any) => (
              <Image
                key={e}
                onClick={() => {
                  const filteredArr = imgArr.filter((i: any) => i !== e);
                  setImgArr(filteredArr);
                }}
                className="rounded-xl border-2"
                src={e}
                alt="zurag"
                width={300}
                height={200}
              ></Image>
            ))}
          </Box>
        </Box>
        <Box className="mt-4" color={red}>
          <Button variant="contained" component="label">
            Upload Image
            <Input
              style={{ display: "none" }}
              type="file"
              name="myImage"
              onChange={(e: any) => {
                const file: any = e.target.files?.[0];
                const fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                fileReader.onloadend = () => {
                  setImgArr([...imgArr, fileReader.result]);
                  setData({
                    ...data,
                    images: [...imgArr, fileReader.result],
                  });
                };
              }}
            />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export async function getServerSideProps() {
  const categoriesData = await fetch(`${BASE_URL}/categories`).then((res) =>
    res.json()
  );
  return {
    props: {
      categoriesData,
    },
  };
}
