/* eslint-disable import/prefer-default-export */
import React from 'react';

const linkRender = (text, item) => <a href={`/#/home/stock/productDetail/${item.sku}`}>{item.productName}</a>;

export default [{
    title: 'SKU',
    dataIndex: 'sku',
    key: 'sku',
    width: '25%'
}, {
    title: '商品名称',
    dataIndex: 'productName',
    key: 'productName',
    width: '25%',
    render: linkRender
}, {
    title: '商品编码',
    dataIndex: 'productCode',
    key: 'productCode',
    width: '20%'
}, {
    title: '库存',
    dataIndex: 'stock',
    key: 'stock',
    width: '10%'
}, {
    title: '已售',
    dataIndex: 'sold',
    key: 'sold',
    width: '10%'
}, {
    title: '售价',
    dataIndex: 'price',
    key: 'price',
    width: '10%'
}];
