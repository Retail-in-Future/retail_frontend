import React from 'react';
import { shallow } from 'enzyme';

import { Layout } from 'antd';

import Checkout from '.';
import UserGuide from './UserGuide';
import ProductSummary from './ProductSummary';

const { Header } = Layout;

describe.skip('Checkout component', () => {
    let component;

    beforeEach(() => {
        component = shallow(<Checkout />);
    });
    describe('Checkout header', () => {
        it('should render a Header component with title 结账指引 when no products are to be checked out', () => {
            component.setState({ products: [] });

            expect(component.find(Header)).toHaveLength(1);
            expect(component.find(Header).html()).toContain('结账指引');
        });

        it('should render a Header component with title 商品清单 when there are products to be checked out', () => {
            const products = [
                { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 }
            ];
            component.setState({ products });

            expect(component.find(Header)).toHaveLength(1);
            expect(component.find(Header).html()).toContain('商品清单');
        });
    });

    describe('Table component', () => {
        it('should render a user guide when no products to be checked out', () => {
            component.setState({ products: [] });

            expect(component.find(UserGuide)).toHaveLength(1);
        });

        it('should render a ProductSummary when there is(are) product(s) to be checked out', () => {
            const products = [
                { name: '茅台王子酒53度（酱香型）', price: 200.00, quantity: 2 }
            ];
            component.setState({ products });

            expect(component.find(ProductSummary)).toHaveLength(1);
        });
    });
});

