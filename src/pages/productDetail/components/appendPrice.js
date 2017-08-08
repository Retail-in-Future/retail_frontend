import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProductPrice } from 'src/redux/actions/productActions';
import { Form, Steps, Input, Icon } from 'antd';
import Modal from 'src/components/modal';
import styles from './appendStock.css';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
    }
};

const mapDispatchToProps = {
    updateProductPrice
};

@connect(null, mapDispatchToProps)
@Form.create()
class AppendPrice extends Component {
    static propTypes = {
        form: PropTypes.instanceOf(Object).isRequired,
        params: PropTypes.instanceOf(Object).isRequired,
        updateProductPrice: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = { currentStep: 1 };
    }

    handleOk = () => {
        if (this.state.currentStep === 1) {
            if (this.isValidationFailed()) return true;
            const price = this.props.form.getFieldValue('price');
            this.setState({ appendedPrice: price });

            this.setState({
                currentStep: 2
            });
            const newAppendedPrice = price;
            this.setState({ newAppendedPrice });

            return true;
        }

        return false;
    }

    afterClose = () => {
        this.setState({
            currentStep: 1
        });
        const price = parseFloat(this.state.newAppendedPrice);
        const stockInfo = {
            price,
            upc: this.props.params.sku
        };
        this.props.updateProductPrice(stockInfo);
    }

    isValidationFailed = () => {
        let isValidationFailed = false;
        this.props.form.validateFields((err) => {
            if (err) {
                isValidationFailed = true;
            }
        });
        return isValidationFailed;
    }

    priceValidationRule =(rule, value = '', callback) => {
        const inputValue = value.trim();
        const regexp = /^\d+(\.\d{1,2})?$/;
        if (regexp.test(inputValue)) {
            return callback();
        }

        return callback('请输入正确的价格');
    }

    render() {
        const { form } = this.props;
        let body;
        if (this.state.currentStep === 1) {
            body = (<Form>
                <Form.Item
                    {...formItemLayout}
                    label="价格"
                    hasFeedback
                >
                    {form.getFieldDecorator('price', {
                        rules: [{
                            required: true,
                            message: '请输入商品价格'
                        }, {
                            validator: this.priceValidationRule
                        }]
                    })(
                        <Input />,
                    )}
                </Form.Item>
            </Form>);
        } else if (this.state.currentStep === 2) {
            body = (<p>{this.state.newAppendedPrice}/{this.state.appendedPrice}</p>);
        }
        return (
            <Modal
                title="商品价格"
                confirmFunction={this.handleOk}
                afterCloseFunction={this.afterClose}
            >
                <div className={styles.stepsWrap}>
                    <Steps current={this.state.currentStep}>
                        <Steps.Step title="输入商品价格" icon={<Icon type="user" />} />
                        <Steps.Step title="开始修改售价" icon={<Icon type="smile-o" />} />
                    </Steps>
                </div>
                <div className={styles.formWrap}>{body}</div>
            </Modal>
        );
    }
}

export default AppendPrice;
