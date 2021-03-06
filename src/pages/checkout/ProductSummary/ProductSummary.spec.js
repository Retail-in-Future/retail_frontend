import React from 'react';
import { shallow } from 'enzyme';

import { Table } from 'antd';

import ProductSummary from '.';
import Summary from './TotalPrice';


describe('ProductSummary component', () => {
    describe('table columns', () => {
        it('should render product summary table with correct column names when there is one product to check out', () => {
            const products = [
                { name: '茅台王子酒53度（酱香型）', price: 200.00 }
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
    });

    describe('table content', () => {
        it('should render product table with details when there are multiple products to check out', () => {
            const products = [
                { name: '茅台王子酒53度（酱香型）', price: 200.00, upc: 'prince-wine' },
                { name: '茅台迎宾酒53度（酱香型）', price: 200.00, upc: 'visitors-wine' }
            ];
            const expected = [
                { name: '茅台王子酒53度（酱香型）', price: 200.00, upc: 'prince-wine', quantity: 1, key: 'prince-wine' },
                { name: '茅台迎宾酒53度（酱香型）', price: 200.00, upc: 'visitors-wine', quantity: 1, key: 'visitors-wine' }
            ];

            const component = shallow(<ProductSummary products={products} totalPrice={800.00} />);

            expect(component.find(Table).props().dataSource).toEqual(expected);
        });

        it('should render product table with the same products(those with same upc) grouped and quantity updated when there are multiple products', () => {
            const products = [
              { name: '茅台王子酒53度（酱香型）', price: 200.00, upc: 'prince-wine' },
              { name: '茅台王子酒53度（酱香型）', price: 200.00, upc: 'prince-wine' },
              { name: '茅台王子酒53度（酱香型）', price: 200.00, upc: 'prince-wine' },
              { name: '茅台迎宾酒53度（酱香型）', price: 300.00, upc: 'visitors-wine' }
            ];
            const expected = [
              { name: '茅台王子酒53度（酱香型）', price: 200.00, upc: 'prince-wine', quantity: 3, key: 'prince-wine' },
              { name: '茅台迎宾酒53度（酱香型）', price: 300.00, upc: 'visitors-wine', quantity: 1, key: 'visitors-wine' }
            ];

            const component = shallow(<ProductSummary products={products} totalPrice={900.00} />);

            expect(component.find(Table).props().dataSource).toEqual(expected);
        });
    });

    it('should render total quantity and total price when there are multiple products to check out', () => {
        const products = [
            { name: '茅台王子酒53度（酱香型）', price: 200.00 },
            { name: '茅台王子酒53度（酱香型）', price: 200.00 },
            { name: '茅台迎宾酒53度（酱香型）', price: 200.00 },
            { name: '飞天迎宾酒53度（酱香型）', price: 300.00 }
        ];

        const component = shallow(<ProductSummary products={products} totalPrice={900.00} />);
        const summary = component.find(Summary);

        expect(summary).toHaveLength(1);
        expect(summary.props().totalQuantity).toBe(4);
        expect(summary.props().totalPrice).toBe(900.00);
    });
});
