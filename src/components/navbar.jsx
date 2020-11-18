import React, { Component } from 'react';

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar
            <span className="badge badge-pill badge-secondary" style={{marginLeft:5}}>
                {totalCounters}
            </span>
        </a>
        </nav>
    )
};

 export default NavBar;