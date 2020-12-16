import React from 'react';

const PriceTotal = ({ priceTotal }) => {
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Total price:
            <span className="badge badge-pill badge-secondary" style={{marginLeft:5}}>
                £{parseFloat(priceTotal).toFixed(2)}
            </span>
        </a>
        </nav>
    )
};

 export default PriceTotal;