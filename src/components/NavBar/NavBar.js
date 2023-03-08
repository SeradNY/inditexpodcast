import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => {
    return <div className="navbar"><Link to="/">Podcaster</Link></div>;
};

export default NavBar;