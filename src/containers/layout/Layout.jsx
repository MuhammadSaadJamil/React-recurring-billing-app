import React from 'react';
import './layout.css'

function Layout(props) {
    return (
        <div>
            <div className="heading">
                <h1>{props.heading}</h1>
            </div>
            <div className="main-content">
                {props.children}
            </div>
        </div>
    );
}

export default Layout;