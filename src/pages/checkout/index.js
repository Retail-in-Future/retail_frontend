/* eslint-disable react/forbid-prop-types, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Table } from 'antd';

import _ from 'lodash';

import UserGuide from './UserGuide';
import Summary from './Summary';

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

const { Header, Content } = Layout;

const Checkout = ({ products = [
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 },
  { name: 'product', quantity: 1, price: 200.00 }
] }) => {
    const totalQuantity = _.chain(products).sumBy(product => product.quantity).value();
    const totalPrice = _.chain(products).sumBy(product => product.quantity * product.price).value();

    return (
        <Layout>
            <Header style={{ position: 'fixed', width: '100%' }}>
                { _.isEmpty(products) ? '结账指引' : '商品清单' }
            </Header>
            <Content style={{ marginTop: 64 }}>
                {
                    _.isEmpty(products) ?
                        <UserGuide /> :
                        <Table
                            dataSource={products}
                            columns={columns}
                            pagination={false}
                            scroll={{ y: 1000 }}
                        />
                }
            </Content>

            <Summary totalQuantity={totalQuantity} totalPrice={totalPrice} />
        </Layout>
    );
};

Checkout.propTypes = {
    products: PropTypes.array
};

export default Checkout;
