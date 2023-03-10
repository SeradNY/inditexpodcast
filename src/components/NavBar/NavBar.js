import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = ({loading = false}) => {
    return (
        <div className="navbar">
            <Link to="/">Podcaster</Link>
            {loading && <div>
                <svg height="20" width="20" className="blinking">
                    <circle cx="10" cy="10" r="10" fill="#66EFEE" />
                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>}
        </div>
    );
};

export default NavBar;