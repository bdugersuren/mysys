import React from 'react';
import MainMenuComp from '../MainMenuComp';
import mn from '../../fonts/flags/MN.svg';

function HeaderComp() {
    return (
        <div>
            <MainMenuComp />
            HeaderComp
<img src={mn} style={{height:'25px'}} />
        </div>
    )
}

export default HeaderComp;
