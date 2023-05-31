import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { BASE_URL } from "@/variables";
export const UserContext = createContext({});

const UserProvider = ({ children }: any) => {
  const router = useRouter();
  const [userData, setUserData] = useState<any>("");
  const [isLogged, setIsLogged] = useState<any>(false);

  const [signUpData, setSignUpData] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "freelancer",
  });
  const [logInData, setLoginData] = useState<any>({
    email: "",
    password: "",
  });

  const handleSignUpData = (e: any) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleLogInData = (e: any) => {
    setLoginData({ ...logInData, [e.target.name]: e.target.value });
  };

  const handleError = ({ err }: any) => {
    console.log(err);
  };

  const whatRole = (e: any) => {
    setSignUpData({ ...signUpData, role: e });
  };

  const editUser = async ({ editData }: any) => {
    try {
      const res = await axios.put(
        `${BASE_URL}/freelancer/${editData._id}`,
        editData
      );
      console.log(res);
    } catch (err) {
      handleError({ err });
    }
  };

  const signUp = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, signUpData);
      setLoginData({ email: signUpData.email });
      // alert("succesfully signed up");
      router.push("/auth#login");
      console.log(res);
    } catch (err: any) {
      handleError({ err });
    }
  };

  const logIn = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, logInData);
      setUserData(res.data.user);
      setIsLogged(true);
      localStorage.setItem("isLogged", "true");
      localStorage.setItem("userId", res.data.user._id);
      localStorage.setItem("userData", JSON.stringify(res.data.user));
      // alert("successfully logged in");
      console.log(res);
      router.push("/");
    } catch (err) {
      handleError({ err });
    }
  };

  useEffect(() => {
    const userDataString = localStorage.getItem("userData");
    if (userDataString) {
      const userDataObj = JSON.parse(userDataString);
      setUserData(userDataObj);
    }
    if (localStorage.getItem("isLogged") === "false") {
      setIsLogged(false);
    } else if (localStorage.getItem("isLogged") === "true") {
      setIsLogged(true);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        signUpData,
        setSignUpData,
        signUp,
        logIn,
        whatRole,
        logInData,
        setLoginData,
        editUser,
        handleLogInData,
        handleSignUpData,
        userData,
        setUserData,
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

//test
