import React from 'react';
import { shallow } from 'enzyme';

import { Table } from 'antd';

import ProductSummary from '.';
import Summary from './TotalPrice';


describe('ProductSummary component', () => {
    it('should render product summary table with correct column names when there is one product to check out', () => {
        const products = [
            { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 }
        ];
        const expectedColumnNames = [
            { title: '商品', dataIndex: 'name', key: 'name' },
            { title: '单价', dataIndex: 'price', key: 'price' },
            { title: '数量', dataIndex: 'quantity', key: 'quantity' }
        ];

        const component = shallow(<ProductSummary products={products} totalPrice={400.00} />);
        const table = component.find(Table);

        expect(table).toHaveLength(1);
        expect(table.props().columns).toMatchObject(expectedColumnNames);
    });

    it('should render product table with details when there are multiple products to check out', () => {
        const products = [
            { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
            { name: '茅台迎宾酒53度（酱香型）', price: 200.00, quantity: 2 }
        ];

        const component = shallow(<ProductSummary products={products} totalPrice={800.00} />);

        expect(component.find(Table).props().dataSource).toEqual(products);
    });

    it('should render total quantity and total price when there are multiple products to check out', () => {
        const products = [
            { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 },
            { name: '茅台迎宾酒53度（酱香型）', price: 200.00, quantity: 1 },
            { name: '飞天迎宾酒53度（酱香型）', price: 300.00, quantity: 1 }
        ];

        const component = shallow(<ProductSummary products={products} totalPrice={900.00} />);
        const summary = component.find(Summary);

        expect(summary).toHaveLength(1);
        expect(summary.props().totalQuantity).toBe(4);
        expect(summary.props().totalPrice).toBe(900.00);
    });
});
