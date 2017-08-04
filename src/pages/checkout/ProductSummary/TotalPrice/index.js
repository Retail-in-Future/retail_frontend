import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = ({ totalQuantity, totalPrice }) => (
    <div>
        <p>数量 { totalQuantity }</p>
        <p>金额 { totalPrice }</p>
    </div>
);

TotalPrice.propTypes = {
    totalQuantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default TotalPrice;
