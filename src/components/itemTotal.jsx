import React from 'react';

const ItemTotal = ({ itemTotal }) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Individual item total:
            <span className="badge badge-pill badge-secondary" style={{marginLeft:5}}>
                {itemTotal}
            </span>
        </a>
        </nav>
    )
};

 export default ItemTotal;