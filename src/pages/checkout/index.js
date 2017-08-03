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
        const socket = new WebSocket('ws://10.207.11.201:10007/checkout/to-be-decided');
        socket.onmessage = (event) => {
            this.setState({
                products: event.data
            });
        };
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

