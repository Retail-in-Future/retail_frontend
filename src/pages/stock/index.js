import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'antd';

import { getStockList } from 'src/redux/actions/stockActions';
import columns from './components/columns';
import styles from './index.scss';

const mapStateToProps = (state) => {
    const stock = state.stock.toJS();
    return {
        stock
    };
};

const mapDispatchToProps = {
    getStockList
};

@connect(mapStateToProps, mapDispatchToProps)
class Stock extends Component {
    static propTypes = {
        getStockList: PropTypes.func.isRequired,
        stock: PropTypes.instanceOf(Object).isRequired
    };

    componentDidMount() {
        const { getStockList } = this.props;
        getStockList();
    }

    render() {
        const { stock } = this.props;
        return (
            <div className={styles.contentWrap}>
                <Table
                    columns={columns}
                    dataSource={stock.stockList}
                    rowKey={item => item.sku}
                />
            </div>
        );
    }
}
export default Stock;
