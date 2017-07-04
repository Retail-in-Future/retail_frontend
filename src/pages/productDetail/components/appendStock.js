import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Steps, Input, Icon } from 'antd';

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

@Form.create()
class AppendStock extends Component {
    static propTypes = {
        form: PropTypes.instanceOf(Object).isRequired
    };

    render() {
        const { form } = this.props;
        return (
            <Modal
                visible
                title="商品上货"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                <div className={styles.stepsWrap}>
                    <Steps>
                        <Steps.Step status="process" title="输入上货数量" icon={<Icon type="user" />} />
                        <Steps.Step status="wait" title="开始上货" icon={<Icon type="smile-o" />} />
                    </Steps>
                </div>
                <div className={styles.formWrap}>
                    <Form>
                        <Form.Item
                            {...formItemLayout}
                            label="数量"
                            hasFeedback
                        >
                            {form.getFieldDecorator('price')(
                                <Input />,
                            )}
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        );
    }
}

export default AppendStock;
