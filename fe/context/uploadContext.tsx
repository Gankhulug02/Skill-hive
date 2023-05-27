import React, { useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export const UploadContext = createContext({});

const UploadProvider = ({ children }: any) => {
  const uploadImage = () => {
    const res = axios.post("http://localhost:8000/upload", {});
    console.log(res);
  };
  return (
    <UploadContext.Provider value={{ uploadImage }}>
      {children}
    </UploadContext.Provider>
  );
};

export default UploadProvider;
