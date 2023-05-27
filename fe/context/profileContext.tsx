import React, { useState } from "react";
import { createContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { FreelancerInterface } from "@/interfaces/interfaces";

export const ProfileContext = createContext<any>({});

const ProfileProvider = ({ children }: any) => {
  const [profileData, setProfileData] = useState<FreelancerInterface>();
  const [portfolioData, setPortfolioData] = useState([
    "https://img.freepik.com/free-vector/hand-drawn-portfolio-template_52683-79647.jpg",
    "https://static.vecteezy.com/system/resources/previews/011/645/680/original/architecture-portfolio-and-interior-professional-portfolio-design-template-free-vector.jpg",
    "https://i.pinimg.com/originals/28/00/81/2800813905b51c032208e97f821c9620.jpg",
    "https://i0.wp.com/themes.svn.wordpress.org/elegant-portfolio/1.0.5/screenshot.png",
    "https://elements-cover-images-0.imgix.net/7f715f96-3abe-42e7-94d4-b0618295167a?auto=compress%2Cformat&fit=max&w=900&s=8abc9bb1739ccbfd05e5e56a93f2ad89",
    "https://blog.flipsnack.com/wp-content/uploads/2021/04/Cover-graphic-design-portfolio-tips.jpg",
  ]);
  return (
    <ProfileContext.Provider
      value={{ profileData, setProfileData, portfolioData, setPortfolioData }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

//test
