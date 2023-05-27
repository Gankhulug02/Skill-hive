import React, { useEffect, useState, createContext } from "react";

import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "@/variables";
export const CategoryContext = createContext({});

const CategoryProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);
  const [subCat, setSubCat] = useState<any>([]);
  const [post, setPost] = React.useState("");

  const [categoriesData, setCategoriesData] = useState<any>();

  const getCategories = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/categories`);
      setCategoriesData(res.data.category);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        post,
        setPost,
        subCat,
        setSubCat,
        open,
        setOpen,
        categoriesData,
        setCategoriesData,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

//test
