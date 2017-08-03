/* eslint-disable react/forbid-prop-types, react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';

import _ from 'lodash';

import styles from './index.scss';
import Header from './Header';

const Checkout = ({ products = ['string'] }) => (
    <Layout className={styles.wrap}>
        <Header title={_.isEmpty(products) ? '结账指引' : '商品清单'} />
    </Layout>
);

Checkout.propTypes = {
    products: PropTypes.array
};

export default Checkout;
