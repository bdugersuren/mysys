import React from 'react'
import {Link} from 'react-router-dom'

function MenuItem({menuItem}) {
    return (
        
            <Link to={menuItem.path} >
                {menuItem.title}
            </Link>
        
    )
}

export default MenuItem;
