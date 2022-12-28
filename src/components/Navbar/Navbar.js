import React, { useState } from "react";

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
                <div className="logo">Logo</div>

                <div className="menu-button" onClick={toggleNavHandler}>
                    {isNav ? 
                    <span>&#10005;</span> : 
                    <span>&#9776;</span>}
                </div>

                <nav className={isNav ? "navbar active" : "navbar"}>
                    <ul>
                        <li>Home</li>
                        <li className={isSubmenu1 ? "submenu active" : "submenu"} onClick={submenu1Handler}>
                            Store
                            <ul>
                                <li>Item1</li>
                                <li>Item2</li>
                            </ul>
                        </li>
                        <li>Game</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>

    )
}





