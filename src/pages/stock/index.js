import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';

import { getProductList } from 'src/redux/actions/productActions';
import columns from './components/columns';
import styles from './index.scss';

const mapStateToProps = (state) => {
    const product = state.product.toJS();
    return {
        product
    };
};

const mapDispatchToProps = {
    getProductList
};

@connect(mapStateToProps, mapDispatchToProps)
class Stock extends Component {
    static propTypes = {
        getProductList: PropTypes.func.isRequired,
        product: PropTypes.instanceOf(Object).isRequired
    };

    componentDidMount() {
        const { getProductList } = this.props;
        getProductList();
    }

    render() {
        const { product } = this.props;
        return (
            <div className={styles.contentWrap}>
                <Table
                    columns={columns}
                    dataSource={product.productList}
                    rowKey={item => item.sku}
                />
            </div>
        );
    }
}
export default Stock;
