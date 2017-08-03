import React from 'react';
import { shallow } from 'enzyme';

import { Table } from 'antd';

import Checkout from '.';
import Header from './Header';
import UserGuide from './UserGuide';

describe('Checkout component', () => {
    describe('Checkout header', () => {
        it('should render a Header component with title 结账指引 when no products are to be checked out', () => {
            const component = shallow(<Checkout products={[]} />);

            expect(component.find(Header)).toHaveLength(1);
            expect(component.find(Header).props().title).toBe('结账指引');
        });

        it('should render a Header component with title 商品清单 when there are products to be checked out', () => {
            const products = [
                { name: '茅台王子酒53度（酱香型）', unitPrice: 200.00, quantity: 2 }
            ];
            const component = shallow(<Checkout products={products} />);

            expect(component.find(Header)).toHaveLength(1);
            expect(component.find(Header).props().title).toBe('商品清单');
        });
    });

    describe('Table component', () => {
        it('should render a user guide when no products to be checked out', () => {
            const component = shallow(<Checkout products={[]} />);

            expect(component.find(UserGuide)).toHaveLength(1);
        });

        it('should render product summary table with correct column names when there is one product to check out', () => {
            const products = [
                { name: '茅台王子酒53度（酱香型）', unitPrice: 200.00, quantity: 2 }
            ];
            const expectedColumnNames = [{
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
            }];

            const component = shallow(<Checkout products={products} />);
            const table = component.find(Table);

            expect(table).toHaveLength(1);
            expect(table.props().columns).toEqual(expectedColumnNames);
        });

        it('should render product table with details when there are multiple products to check out', () => {
            const products = [
              { name: '茅台王子酒53度（酱香型）', unitPrice: 200.00, quantity: 2 },
              { name: '茅台迎宾酒53度（酱香型）', unitPrice: 200.00, quantity: 2 }
            ];

            const component = shallow(<Checkout products={products} />);

            expect(component.find(Table).props().dataSource).toEqual(products);
        });
    });
});

