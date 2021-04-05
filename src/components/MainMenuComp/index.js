import React from "react";

import { useSelector, useDispatch } from "react-redux";
import UserInfoComp from "../UserInfoComp";
import MenuItem from "./MenuItem";

function MainMenuComp() {
  const roleMenuData = useSelector((state) => state.roleMenu.data);
  return (
    <div>
      <div>
        {roleMenuData.map((m) => (
          <MenuItem menuItem={m} />
        ))}
      </div>
      <UserInfoComp />
    </div>
  );
}

export default MainMenuComp;
