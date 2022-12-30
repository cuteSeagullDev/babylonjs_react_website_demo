import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar (){
    const [isNav, toggleNav] = useState(false);
    const [isSubmenu1, toggleSubmenu1] = useState(false);

    const toggleNavHandler = () => {
        if (isSubmenu1){ toggleSubmenu1(!isSubmenu1) };
        toggleNav(!isNav);
    }

    const submenu1Handler = () => {
        toggleSubmenu1(!isSubmenu1);
    }

    return (
            <header>
                <div className="logo"><Link to="/">Logo</Link></div>

                <div className="menu-button" onClick={toggleNavHandler}>
                    {isNav ? 
                    <span>&#10005;</span> : 
                    <span>&#9776;</span>}
                </div>

                <nav className={isNav ? "navbar active" : "navbar"}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className={isSubmenu1 ? "submenu active" : "submenu"} onClick={submenu1Handler}>
                            <Link to="/Game">Game</Link>
                            <ul>
                                <li>Car</li>
                                <li>Ball</li>
                            </ul>
                        </li>
                        <li><Link to="/Store">Store</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>

    )
}





