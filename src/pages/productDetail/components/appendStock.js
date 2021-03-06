import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProductStock, appendProduct } from 'src/redux/actions/productActions';
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
    updateProductStock,
    appendProduct
};

@connect(null, mapDispatchToProps)
@Form.create()
class AppendStock extends Component {
    static propTypes = {
        form: PropTypes.instanceOf(Object).isRequired,
        params: PropTypes.instanceOf(Object).isRequired,
        stock: PropTypes.number.isRequired,
        updateProductStock: PropTypes.func.isRequired,
        appendProduct: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = { currentStep: 1 };
    }

    handleOk = () => {
        const stock = this.props.form.getFieldValue('stock');
        this.props.appendProduct(`${this.props.params.sku}/amount?amount=${stock}`);
        if (this.state.currentStep === 1) {
            if (this.isValidationFailed()) return false;
            this.setState({ appendedStock: stock });

            this.setState({
                currentStep: 2
            });

            const sseUrl = `http://localhost:10002/sse/stocks/${this.props.params.sku}/amount`;
            this.receiveServerEvent(sseUrl);

            return false;
        }

        return true;
    }

    receiveServerEvent(sseUrl) {
        const source = new EventSource(sseUrl);
        source.onmessage = (event) => {
            const newAppendedStock = event.data - this.props.stock;
            this.setState({ newAppendedStock });
        };
    }

    afterClose = () => {
        this.setState({
            currentStep: 1
        });
        this.props.updateProductStock(this.state.newAppendedStock + this.props.stock);
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

    stockValidationRule =(rule, value = '', callback) => {
        const inputValue = value.trim();
        if (!!inputValue && (Number.isInteger(parseInt(inputValue, 10)) && inputValue > 0)) {
            return callback();
        }

        return callback('请输入大于0的整数');
    }

    render() {
        const { form } = this.props;
        let body;
        if (this.state.currentStep === 1) {
            body = (<Form>
                <Form.Item
                    {...formItemLayout}
                    label="数量"
                    hasFeedback
                >
                    {form.getFieldDecorator('stock', {
                        rules: [{
                            validator: this.stockValidationRule
                        }]
                    })(
                        <Input />,
                    )}
                </Form.Item>
            </Form>);
        } else if (this.state.currentStep === 2) {
            body = (<p>{this.state.newAppendedStock}/{this.state.appendedStock}</p>);
        }
        return (
            <Modal
                title="商品上货"
                confirmFunction={this.handleOk}
                afterCloseFunction={this.afterClose}
            >
                <div className={styles.stepsWrap}>
                    <Steps current={this.state.currentStep}>
                        <Steps.Step title="输入上货数量" icon={<Icon type="user" />} />
                        <Steps.Step title="开始上货" icon={<Icon type="smile-o" />} />
                    </Steps>
                </div>
                <div className={styles.formWrap}>{body}</div>
            </Modal>
        );
    }
}

export default AppendStock;
