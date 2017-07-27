/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Popconfirm } from 'antd';

import styles from './categoryColumn.scss';

export const columnsCreator = (handlers) => {
    const actionRender = categoryInfo => (
        <p>
            <a role="link" tabIndex="-1" onClick={() => handlers.edit(categoryInfo)}>编辑</a>
            &nbsp;|&nbsp;
            <Popconfirm
                placement="topRight"
                okText="确定"
                cancelText="取消"
                title="确定删除本品类？"
                onConfirm={() => handlers.delete(categoryInfo)}
            >
                <a role="link" tabIndex="-1">删除</a>
            </Popconfirm>
        </p>
    );

    return [{
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
};
