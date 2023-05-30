import React, { useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export const LoadingContext = createContext<any>({});

const LoadingProvider = ({ children }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refreshToggle, setRefreshToggle] = useState<boolean>(false);
  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading, refreshToggle, setRefreshToggle }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
