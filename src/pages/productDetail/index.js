import autoBind from 'autobind-decorator';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import Loading from 'src/components/loading';

import {
    getProductInfo,
    setProductPrice,
    appendStock
} from 'src/redux/actions/productActions';
import { showModal } from 'src/redux/actions/modalActions';
import AppendSingleStock from './components/appendSingleStock';
import AppendPrice from './components/appendPrice';
import styles from './index.scss';

const mapStateToProps = (state) => {
    const product = state.product.toJS();
    const { productInfo } = product;
    return {
        productInfo
    };
};

const mapDispatchToProps = {
    getProductInfo,
    setProductPrice,
    appendStock,
    showModal
};

@connect(mapStateToProps, mapDispatchToProps)
@Loading({ key: 'productInfo' })
class ProductDetail extends Component {
    static propTypes = {
        params: PropTypes.instanceOf(Object).isRequired,
        getProductInfo: PropTypes.func.isRequired,
        productInfo: PropTypes.instanceOf(Object).isRequired,
        showModal: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            modalContentName: ''
        };
    }

    componentDidMount() {
        const { params, getProductInfo } = this.props;
        getProductInfo(params);
    }

    @autoBind
    showModalCreator(modalContentName) {
        const { showModal } = this.props;
        return () => {
            this.setState({ modalContentName });
            showModal();
        };
    }

    render() {
        const { modalContentName } = this.state;
        const { productInfo } = this.props;
        return (
            <div className={styles.contentWrap}>
                <div className={styles.imageWrap}>
                    <img src={productInfo.productImage} className={styles.image} alt="商品图像" />
                </div>
                <ul className={styles.attributes}>
                    <li>
                        <span className={styles.label}>商品名称</span>
                        <span className={styles.value}>{productInfo.productName}</span>
                    </li>
                    <li>
                        <span className={styles.label}>SKU</span>
                        <span className={styles.value}>{productInfo.SKU}</span>
                    </li>
                    <li>
                        <span className={styles.label}>商品编号</span>
                        <span className={styles.value}>{productInfo.productCode}</span>
                    </li>
                    <li>
                        <span className={styles.label}>商品售价</span>
                        <span className={styles.value}>{productInfo.price}</span>
                        <Button
                            type="primary"
                            size="small"
                            onClick={this.showModalCreator('setPrice')}
                            disabled={productInfo.amount === 0}
                        >修改售价</Button>
                    </li>
                    <li>
                        <span className={styles.label}>已售数量</span>
                        <span className={styles.value}>{productInfo.stockOut}</span>
                    </li>
                    <li>
                        <span className={styles.label}>库存数量</span>
                        <span className={styles.value}>{productInfo.amount}</span>
                        <Button
                            type="primary"
                            size="small"
                            onClick={this.showModalCreator('appendStock')}
                        >添加库存</Button>
                    </li>
                </ul>
                {
                    modalContentName === 'appendStock'
                        ? <AppendSingleStock
                            params={this.props.params}
                            stock={this.props.productInfo.amount}
                        />
                        : null
                }
                {
                    modalContentName === 'setPrice'
                        ? <AppendPrice
                            params={this.props.params}
                            price={this.props.productInfo.price}
                        />
                        : null
                }
            </div>
        );
    }
}

export default ProductDetail;
