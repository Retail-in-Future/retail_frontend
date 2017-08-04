import React from 'react';
import { shallow } from 'enzyme';

import UserGuide from '.';
import Step from './Step';

describe('UserGuide component', () => {
    it('should render 4 steps on a user guide', () => {
        const userGuide = shallow(<UserGuide />);
        const steps = userGuide.find(Step);

        expect(steps).toHaveLength(4);
        expect(steps.at(0).props().instructions).toBe('将您挑选的商品置于结账平台上');
        expect(steps.at(1).props().instructions).toBe('浏览商品明细和价格，调整数量');
        expect(steps.at(2).props().instructions).toBe('微信、支付宝扫描二维码结账');
        expect(steps.at(3).props().instructions).toBe('支付成功，走出闸机');
    });
});
