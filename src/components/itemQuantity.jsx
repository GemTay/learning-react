import React, { Component } from 'react';

const ItemQuantity = ({ itemQuantity }) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Number of items:
            <span className="badge badge-pill badge-secondary" style={{marginLeft:5}}>
                {itemQuantity}
            </span>
        </a>
        </nav>
    )
};

 export default ItemQuantity;