import React from 'react';
import PropTypes from 'prop-types';

import { Col, Row } from 'antd';

import styles from './TotalPrice.scss';

const TotalPrice = ({ totalQuantity, totalPrice }) => (
    <Row className={styles.container} type="flex" justify="center" align="middle">
        <Col className={styles.summaryPanel} span={12}>
            <div className={styles.sumLabel}>合计</div>
            <div className={styles.quantity}>数量：{ totalQuantity }</div>
            <div className={styles.totalPrice}>金额：￥{ totalPrice }</div>
        </Col>
        <Col span={12}>
            请将二维码对准扫描器
        </Col>
    </Row>
);

TotalPrice.propTypes = {
    totalQuantity: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
};

export default TotalPrice;
