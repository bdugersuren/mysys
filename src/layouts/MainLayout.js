import React, { Component } from "react";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";

const MainLayout = (props) => {
  return (
    <div>
      <HeaderComp />

      {props.children}

      <FooterComp />
    </div>
  );
};
export default MainLayout;
