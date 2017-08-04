/* eslint-disable react/forbid-prop-types, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import _ from 'lodash';

import { Table } from 'antd';
import Summary from '../Summary';

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

const ProductSummary = ({ products }) => {
    const totalQuantity = _.chain(products).sumBy(product => product.quantity).value();
    const totalPrice = _.chain(products).sumBy(product => product.quantity * product.price).value();

    return (
        <div>
            <Table
                dataSource={products}
                columns={columns}
                pagination={false}
                scroll={{ y: 800 }}
            />
            <Summary totalQuantity={totalQuantity} totalPrice={totalPrice} />
        </div>
    );
};

ProductSummary.propTypes = {
    products: PropTypes.array.isRequired
};

export default ProductSummary;
