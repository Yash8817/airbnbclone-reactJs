import React from "react";
import logo from '../Images/pngwing.com.png'
function Navbar()
{
    return (
        <nav>
            <img src={logo} className="nav--logo" alt="" height='80px'/ >
        </nav>
    )
}

export default Navbar;