/* eslint-disable react/forbid-prop-types, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

import _ from 'lodash';

import UserGuide from './UserGuide';
import ProductSummary from './ProductSummary';

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
    return (
        <Layout>
            <Header style={{ position: 'fixed', width: '100%' }}>
                { _.isEmpty(products) ? '结账指引' : '商品清单' }
            </Header>
            <Content style={{ marginTop: 64 }}>
                {
                    _.isEmpty(products) ?
                        <UserGuide /> :
                        <ProductSummary products={products} />
                }
            </Content>
        </Layout>
    );
};

Checkout.propTypes = {
    products: PropTypes.array
};

export default Checkout;
