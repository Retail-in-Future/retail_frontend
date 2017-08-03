/* eslint-disable react/forbid-prop-types, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Table } from 'antd';

import _ from 'lodash';

import styles from './index.scss';
import Header from './Header';
import UserGuide from './UserGuide';

const columns = [
    {
        title: '商品',
        dataIndex: 'name',
        key: 'name'
    }, {
        title: '单价',
        dataIndex: 'price',
        key: 'price'
    }, {
        title: '数量',
        dataIndex: 'quantity',
        key: 'quantity'
    }
];

const Checkout = ({ products = [{ name: 'product', quantity: 1, price: 200.00 }] }) => (
    <Layout className={styles.wrap}>
        <Header title={_.isEmpty(products) ? '结账指引' : '商品清单'} />

        {
          _.isEmpty(products) ? <UserGuide /> :
          <Table dataSource={products} columns={columns} />
        }
    </Layout>
);

Checkout.propTypes = {
    products: PropTypes.array
};

export default Checkout;
