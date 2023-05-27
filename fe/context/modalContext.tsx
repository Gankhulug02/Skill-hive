import AddPortfolio from "@/modal/addPortfolio";
import EditProfile from "@/modal/editProfile";
import ProfileImage from "@/modal/profileImageModal";
import React, { useState } from "react";
import { createContext } from "react";

export const ModalContext = createContext<any>({});

const ModalProvider = ({ children }: any) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [insideModal, setInsideModal] = useState<any>();
  const toggleModal = (e: any) => {
    if (e === "ProfileImage") {
      setInsideModal(<ProfileImage />);
    } else if (e === "EditProfile") {
      setInsideModal(<EditProfile />);
    } else if (e === "AddPortfolio") {
      setInsideModal(<AddPortfolio />);
    }
    setIsModal(!isModal);
  };
  return (
    <ModalContext.Provider
      value={{ isModal, setIsModal, toggleModal, insideModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
