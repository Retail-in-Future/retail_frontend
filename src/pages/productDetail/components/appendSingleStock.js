import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateProductStock, appendProduct } from 'src/redux/actions/productActions';
import { Button } from 'antd';
import Modal from 'src/components/modal';
import styles from '../index.scss';


const mapDispatchToProps = {
    updateProductStock,
    appendProduct
};

@connect(null, mapDispatchToProps)
class AppendSingleStock extends Component {
    static propTypes = {
        params: PropTypes.instanceOf(Object).isRequired,
        stock: PropTypes.number.isRequired,
        updateProductStock: PropTypes.func.isRequired,
        appendProduct: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.state = {
            currentStep: 1,
            iconLoading: false,
            serialNumber: '',
            appendedStock: 0
        };
    }

    handleOk = () => {
        return true;
    }

    generateSerialNumber = () => {
        const number = Math.floor(Math.random() * 90000000) + 100000;
        return number;
    }

    receiveServerEvent(sseUrl) {
        const source = new EventSource(sseUrl);
        source.onmessage = (event) => {
            if (this.state.iconLoading) {
                const status = (event.data.indexOf(`${this.state.serialNumber}`) < 0);
                if (!status) {
                    const appendedStock = this.state.appendedStock + 1;
                    this.setState({ appendedStock });
                }
                this.setState({ iconLoading: status });
            }
        };
    }

    afterClose = () => {
        this.setState({
            currentStep: 1
        });
        this.props.updateProductStock(this.state.appendedStock + this.props.stock);
        this.setState({ appendedStock: 0 });
    }

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
        const serialNumber = this.generateSerialNumber();
        console.log(serialNumber);
        const stockInfo = {
            serialNumber,
            upc: this.props.params.sku
        };
        this.props.appendProduct(stockInfo);
        this.setState({ serialNumber });
        const sseUrl = `http://localhost:10002/sse/stocks/${this.props.params.sku}/`;
        this.receiveServerEvent(sseUrl);
    }

    render() {
        return (
            <Modal
                title="商品上货"
                confirmFunction={this.handleOk}
                afterCloseFunction={this.afterClose}
            >
                <div className={styles.contentWrap}>
                <ul className={styles.attributes}>
                    <li>
                        <span className={styles.label}>已上货数量</span>
                        <span className={styles.value}>{this.state.appendedStock}</span>
                        <Button
                            type="primary"
                            icon="poweroff"
                            loading={this.state.iconLoading}
                            onClick={this.enterIconLoading}
                        >开始上货</Button>
                    </li>
                </ul>
                </div>
            </Modal>
        );
    }
}

export default AppendSingleStock;
