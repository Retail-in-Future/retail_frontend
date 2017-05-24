import autoBind from 'autobind-decorator';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Button, Input } from 'antd';

import {
    getProductInfo,
    setProductPrice,
    appendStock,
} from 'src/redux/actions/productActions';
import { showModal } from 'src/redux/actions/modalActions';
import Modal from 'src/components/modal';
import styles from './productDetail.scss';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const mapStateToProps = (state) => {
    const product = state.product.toJS();
    const { productInfo } = product;
    return {
        productInfo,
    };
};

const mapDispatchToProps = {
    getProductInfo,
    setProductPrice,
    appendStock,
    showModal,
};

// const mapPropsToFields = (props) => {
//     const tempProductInfo = Object.assign({}, props.productInfo);
//     return lodash.forOwn(tempProductInfo, (value, key) => {
//         tempProductInfo[key] = {
//             value,
//         };
//     });
// };

@connect(mapStateToProps, mapDispatchToProps)
@Form.create()
class ProductDetail extends Component {
    static propTypes = {
        form: PropTypes.instanceOf(Object).isRequired,
        params: PropTypes.instanceOf(Object).isRequired,
        getProductInfo: PropTypes.func.isRequired,
        setProductPrice: PropTypes.func.isRequired,
        appendStock: PropTypes.func.isRequired,
        showModal: PropTypes.func.isRequired,
        productInfo: PropTypes.instanceOf(Object).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            modalContentName: 'setPrice',
        };
    }

    componentDidMount() {
        const { params, getProductInfo } = this.props;
        getProductInfo(params);
    }

    @autoBind
    setPriceModalRender() {
        const { form } = this.props;
        return {
            modalTitle: '修改售价',
            modalContent: (
                <Form>
                    <Form.Item
                        {...formItemLayout}
                        label="售价"
                        hasFeedback
                    >
                        {form.getFieldDecorator('price')(
                            <Input />,
                        )}
                    </Form.Item>
                </Form>
            ),
            modalConfirm: this.handleSetPriceConfirm,
        };
    }

    @autoBind
    appendStockModalRender() {
        const { form } = this.props;
        return {
            modalTitle: '添加库存',
            modalContent: (
                <Form>
                    <Form.Item
                        {...formItemLayout}
                        label="库存"
                        hasFeedback
                    >
                        {form.getFieldDecorator('stock')(
                            <Input />,
                        )}
                    </Form.Item>
                </Form>
            ),
            modalConfirm: this.handleAppendStockConfirm,
        };
    }

    @autoBind
    showModalCreator(modalContentName) {
        const { showModal } = this.props;
        return () => {
            this.setState({ modalContentName });
            showModal();
        };
    }

    @autoBind
    handleSetPriceConfirm() {
        const { setProductPrice, form } = this.props;
        const price = form.getFieldValue('price');
        setProductPrice({ price });
    }

    @autoBind
    handleAppendStockConfirm() {
        const { appendStock, form } = this.props;
        const stock = form.getFieldValue('stock');
        appendStock({ stock });
    }

    render() {
        let modalInfo;
        const { modalContentName } = this.state;
        const { productInfo } = this.props;
        if (modalContentName === 'setPrice') {
            modalInfo = this.setPriceModalRender();
        } else if (modalContentName === 'appendStock') {
            modalInfo = this.appendStockModalRender();
        }
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
                        >修改售价</Button>
                    </li>
                    <li>
                        <span className={styles.label}>已售数量</span>
                        <span className={styles.value}>{productInfo.sold}</span>
                    </li>
                    <li>
                        <span className={styles.label}>库存数量</span>
                        <span className={styles.value}>{productInfo.stock}</span>
                        <Button
                            type="primary"
                            size="small"
                            onClick={this.showModalCreator('appendStock')}
                        >添加库存</Button>
                    </li>
                </ul>
                <Modal
                    title={modalInfo.modalTitle}
                    content={modalInfo.modalContent}
                    confirmFunction={modalInfo.modalConfirm}
                />
            </div>
        );
    }
}

export default ProductDetail;
