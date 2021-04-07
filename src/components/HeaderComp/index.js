<<<<<<< HEAD
import React from 'react';
import MainMenuComp from '../MainMenuComp';
import mn from '../../fonts/flags/MN.svg';
=======
import React from "react";
import MainMenuComp from "../MainMenuComp";
>>>>>>> main

 
function HeaderComp() {
<<<<<<< HEAD
    return (
        <div>
            <MainMenuComp />
            HeaderComp
<img src={mn} style={{height:'25px'}} />
=======
  return (
    <div className="mainTopHeader">
      <div className="nav">
        <div className="logo">
          <div className="temp_logo"></div>
          
>>>>>>> main
        </div>
        <div className="menu">
          <div>Menu</div>
          <div>Contact</div>
          <div>About</div>
          <div>Settings</div>
          <div>More</div>
        </div>
        <div className="user">
          <div className="temp_logo2"></div>
          <div>Log out</div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
// testing
export default HeaderComp;