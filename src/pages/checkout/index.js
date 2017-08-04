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
            // fetch('http://10.207.22.156:8080/checklist', { mode: 'no-cors' }).then((data) => {
            //     console.log('-------- data --------');
            //     console.log(data.response);
            //     console.log(data.data);
            //     console.log(data.body);
            // });
        });
    }

    executeEvery(func, milliseconds = 500) {
        setTimeout(() => {
            func();
            this.executeEvery(func, milliseconds);
        }, milliseconds);
    }

    render() {
        const products = [
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
          { name: '茅台迎宾酒53度（酱香型）', price: 200.00, quantity: 1 },
          { name: '飞天迎宾酒53度（酱香型）', price: 300.00, quantity: 1 }
        ];

        return (
            <Layout>
                <Header style={{ position: 'fixed', width: '100%', color: 'white' }}>
                    { _.isEmpty(products) ? '结账指引' : '商品清单' }
                </Header>
                <Content style={{ marginTop: 64, padding: '30px 36px 0 36px' }}>
                    { _.isEmpty(products) ?
                        <UserGuide /> :
                        <ProductSummary products={products} />
                    }
                </Content>
            </Layout>
        );
    }
}

