import React from "react";
import Loading from "./loading";
import NavBar from "./navbar/navbar";
import ToTopBtn from "./toTop";

const Layout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <ToTopBtn />
      <Loading />
    </>
  );
};

export default Layout;
