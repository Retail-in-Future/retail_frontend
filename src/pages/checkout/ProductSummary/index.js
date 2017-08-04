/* eslint-disable react/forbid-prop-types, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { Table } from 'antd';
import Summary from './TotalPrice/index';

const columns = [
    {
        title: '商品',
        dataIndex: 'name',
        key: 'name',
        width: 400
    }, {
        title: '单价',
        dataIndex: 'price',
        key: 'price',
        width: 100
    }, {
        title: '数量',
        dataIndex: 'quantity',
        key: 'quantity',
        width: 100
    }
];

const ProductSummary = ({ products, totalPrice }) => {
    // TODO: [Linesh][8/4/17] refactor, better architect data operations
    const productsWithQuantities = _.chain(products)
      .groupBy('upc')
      .map(group => ({
          ...group[0],
          quantity: group.length
      }))
      .value();
    const totalQuantity = products.length;

    return (
        <div>
            <Table
                dataSource={productsWithQuantities}
                columns={columns}
                pagination={false}
                scroll={{ y: 800 }}
            />
            <Summary totalQuantity={totalQuantity} totalPrice={totalPrice} />
        </div>
    );
};

ProductSummary.propTypes = {
    products: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default ProductSummary;
