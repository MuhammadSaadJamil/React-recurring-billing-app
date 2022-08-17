import React from 'react';
import './header.css'
import {RiMenu3Line, RiCloseLine} from "react-icons/ri";
import Logo from '../../assets/logo/logo-2.png'

function Header({toggleMenu, setToggleMenu}) {
    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="Logo"/>
            </div>
            <div className="toggle-button">
                {toggleMenu
                    ? <RiCloseLine color="#007BFF" size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color="#007BFF" size={27} onClick={() => setToggleMenu(true)}/>
                }
            </div>
        </div>
    );
}

export default Header;