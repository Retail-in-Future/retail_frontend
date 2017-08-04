import React from 'react';
import Step from './Step';

export default () => (
    <div>
        <Step step={1} instructions="将您挑选的商品置于结账平台上" />
        <Step step={2} instructions="浏览商品明细和价格，调整数量" />
        <Step step={3} instructions="微信、支付宝扫描二维码结账" />
        <Step step={4} instructions="支付成功，走出闸机" />
    </div>
);
