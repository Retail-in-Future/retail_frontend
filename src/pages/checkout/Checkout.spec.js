import React from 'react';
import { shallow } from 'enzyme';

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
    });
});

