import React from 'react';
import PropTypes from 'prop-types';

export default function Summary({ totalQuantity, totalPrice }) {
    return (
        <div>
            <p>total quantity: { totalQuantity }</p>
            <p>total price: { totalPrice }</p>
        </div>
    );
}

Summary.propTypes = {
    totalQuantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
};

