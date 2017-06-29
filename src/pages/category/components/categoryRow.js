import React from 'react';
import { Popconfirm } from 'antd';

import styles from './categoryRow.scss';

const actionRender = categoryInfo => (
    <p>
        <a role="link" tabIndex="-1" onClick={() => console.log(categoryInfo)}>编辑</a>
        &nbsp;|&nbsp;
        <Popconfirm
            placement="topRight"
            okText="确定"
            cancelText="取消"
            title="确定删除本品类？"
            onConfirm={() => console.log(categoryInfo)}
        >
            <a role="link" tabIndex="-1">删除</a>
        </Popconfirm>
    </p>
);
export default [{
    title: 'SKU',
    dataIndex: 'SKU',
    key: 'SKU',
    width: '35%'
}, {
    title: '商品名称',
    dataIndex: 'productName',
    key: 'productName',
    width: '25%'
}, {
    title: '商品编码',
    dataIndex: 'productCode',
    key: 'productCode',
    width: '30%'
}, {
    title: '操作',
    dataIndex: '',
    key: 'action',
    width: '10%',
    className: styles.textCenter,
    render: actionRender
}];
