import React from 'react';
import './navbar.css'
import {Link} from "react-router-dom";
import {useLocation} from 'react-router-dom'

function Navbar({toggleMenu}) {
    const location = useLocation();

    const nav = [
        {id: 1, text: 'Home', href: "/"},
        {id: 2, text: 'Buyers', href: "/buyers"},
        {id: 3, text: 'Features', href: "/features"},
        {id: 4, text: 'Add Feature', href: "/features/new"},
    ]


    return (
        <>
            <div className="side-nav">
                <div className={'nav-links'}>
                    {nav.map((navItem) => (

                            <Link
                                key={navItem.id}
                                to={navItem.href}
                                className={'nav-item-link'}
                            >
                                <div
                                    className={location.pathname == navItem.href ? 'nav-items active' : 'nav-items'}
                                >
                                    {navItem.text}
                                </div>
                            </Link>

                        )
                    )}
                </div>
            </div>
            {toggleMenu && <div className="side-nav-small slide-in-top">
                <div className={'nav-links'}>
                    {nav.map((navItem) => (

                            <Link
                                key={navItem.id}
                                to={navItem.href}
                                className={'nav-item-link'}
                            >
                                <div
                                    className={location.pathname == navItem.href ? 'nav-items active' : 'nav-items'}
                                >
                                    {navItem.text}
                                </div>
                            </Link>

                        )
                    )}
                </div>
            </div>}
        </>
    );
}

export default Navbar;
