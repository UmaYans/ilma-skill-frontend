import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import style from "./layout.module.css";

const Layout = () => {
  return (
    <>
      <Header />
      <div className={style.div1}>
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
