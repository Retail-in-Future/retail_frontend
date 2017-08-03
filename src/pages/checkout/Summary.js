import React from 'react';
import PropTypes from 'prop-types';

export default function Summary({ totalQuantity, totalPrice }) {
    return (
        <div>
            <p>数量 { totalQuantity }</p>
            <p>金额 { totalPrice }</p>
        </div>
    );
}

Summary.propTypes = {
    totalQuantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
};

