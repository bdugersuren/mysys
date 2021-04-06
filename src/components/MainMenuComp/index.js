import React from "react";
import {Link} from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import UserInfoComp from "../UserInfoComp";
import MenuItem from "./MenuItem";

function MainMenuComp() {
  const roleMenuData = useSelector((state) => state.roleMenu.data);

  return (
    <div>
      <ul>
        {roleMenuData.map(rootItems => {
          return(
            <li  key={rootItems.id}>
             <Link to={rootItems.path} >
             {rootItems.title} 
              </Link>
              {rootItems.children.length!==null&&<MenuItem childItem={rootItems.children}/>}
          </li>
        )})}
      </ul>
      <UserInfoComp />
    </div>
  );
}

export default MainMenuComp;
