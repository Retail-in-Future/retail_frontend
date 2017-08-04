import React, { Component } from 'react';

import { Layout } from 'antd';

import _ from 'lodash';

import UserGuide from './UserGuide';
import ProductSummary from './ProductSummary';

const { Header, Content } = Layout;

export default class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.executeEvery(() => {
            fetch('http://10.207.22.156:8080/endpoint-retail/').then().catch();
        });
    }

    executeEvery(func, milliseconds = 500) {
        setTimeout(() => {
            func();
            this.executeEvery(func, milliseconds);
        }, milliseconds);
    }

    render() {
        const { products } = this.state;

        return (
            <Layout>
                <Header style={{ position: 'fixed', width: '100%' }}>
                    { _.isEmpty(products) ? '结账指引' : '商品清单' }
                </Header>
                <Content style={{ marginTop: 64 }}>
                    { _.isEmpty(products) ?
                        <UserGuide /> :
                        <ProductSummary products={products} />
                    }
                </Content>
            </Layout>
        );
    }
}

