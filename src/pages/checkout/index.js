import React, { Component } from 'react';

import { Layout } from 'antd';

import axios from 'axios';
import _ from 'lodash';

import UserGuide from './UserGuide';
import ProductSummary from './ProductSummary';

const { Header, Content, Footer } = Layout;

export default class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            products: [],
            totalPrice: 0
        };
    }

    componentDidMount() {
        const queryCheckoutList = () => {
            axios.get('http://10.207.11.202:10007/device/0/checklist').then((response) => {
                this.setState({
                    products: response.data.itemList,
                    totalPrice: response.data.totalPrice
                });
            });
        };

        this.execute(queryCheckoutList).onEveryMilliseconds(500);
    }

    execute(func) {
        return {
            onEveryMilliseconds: (interval) => {
                this.executeEvery(func, interval);
            }
        };
    }

    executeEvery(func, milliseconds) {
        setTimeout(() => {
            func();
            this.executeEvery(func, milliseconds);
        }, milliseconds);
    }

    render() {
        const { totalPrice, products } = this.state;

        return (
            <Layout>
                <Header style={{ position: 'fixed', width: '100%', color: 'white' }}>
                    { _.isEmpty(products) ? '结账指引' : '商品清单' }
                </Header>
                <Content style={{ marginTop: 64, padding: '30px 36px 0 36px' }}>
                    { _.isEmpty(products) ?
                        <UserGuide /> :
                        <ProductSummary products={products} totalPrice={totalPrice} />
                    }
                </Content>
                <Footer />
            </Layout>
        );
    }
}

