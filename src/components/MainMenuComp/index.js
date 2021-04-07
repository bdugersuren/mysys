import React, {useState} from "react";
import {Link} from 'react-router-dom'
import {Keys, Menu, MenuBar, Separator} from 'react-app-menu';

import { useSelector, useDispatch } from "react-redux";
import UserInfoComp from "../UserInfoComp";
import MenuItem from "./MenuItem";


import {
  BiChevronRight,
  BiChevronDown,
  BiCheckboxChecked,
  BiCheckbox,
  BiCheckboxSquare,
  BiVerticalCenter,
  BiBookOpen,
  BiBook,
  BiBookReader,
  BiArrowFromTop,
} from "react-icons/bi";
import 'react-app-menu/dist/styles/react-app-menu.css'

function MainMenuComp() {
  let [showToolbar, setShowToolbar] = useState(true);
  let [showTooltip, setShowTooltip] = useState(false);

  const roleMenuData = useSelector((state) => state.roleMenu.data);


  const handleMenuSelect = (menuId)=> {
    switch (menuId) {
        case 'toolbar':
            return setShowToolbar(!showToolbar);
        case 'toolTips':
            return setShowTooltip(!showTooltip);
        default:
            console.log(`menu selected ${menuId}`)
    }
};

const onFolderSelect = () => {
    console.log('Folder selected');
};

  return (
    <div>

        <MenuBar onSelect={handleMenuSelect}>
            <Menu label='File' focusKey={"F"}>
                <Menu label='New'>
                    <Menu menuId='NewNotebook' label='Notebook' icon={<BiChevronRight/>}/>
                    <Menu menuId="NewNote" label='Note' icon={<BiChevronDown/>} hotKeys={Keys.ctrlAlt('N')}/>
                    <Separator/>
                    <Menu label="Folder" icon={<BiCheckboxChecked/>} hotKeys={Keys.ctrlAlt("F")}
                          onSelect={onFolderSelect}/>
                </Menu>
                <Menu label='Settings' icon={<BiCheckbox/>} hotKeys={Keys.altShift("S")}/>
            </Menu>
            <Menu label='Edit' focusKey='E'>
                <Menu menuId='search' label='Search' icon={<BiCheckboxSquare/>} hotKeys={Keys.ctrlShift('F')}/>
                <Menu menuId='undo' label='Undo' hotKeys={Keys.ctrl('Z')}/>
                <Menu menuId='rename' label='Rename' icon={<BiVerticalCenter/>} hotKeys={Keys.shift('F6')}/>
            </Menu>
            <Menu label='View' focusKey='V'>
                <Menu menuId='toolbar' label='Toolbars' checked={showToolbar} hotKeys={Keys.ctrlAlt("T")}/>
                <Menu menuId='statusBar' label='StatusBar'/>
                <Menu menuId='toolTips' label='Tooltips' checked={showTooltip} hotKeys={Keys.ctrlAltShift("T")}/>
            </Menu>
        </MenuBar>
   




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
