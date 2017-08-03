/* eslint-disable no-console,no-debugger */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

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

@Form.create({
    mapPropsToFields: (props) => {
        const { categoryInfo } = props;
        return {
            productName: {
                value: categoryInfo.productName
            },
            productCode: {
                value: categoryInfo.productCode
            },
            SKU: {
                value: categoryInfo.SKU
            }
        };
    },
    onValuesChange: (props, values) => {
        props.setCategoryInfo(values);
    }
})
class CategoryForm extends React.Component {
    static propTypes = {
        form: PropTypes.instanceOf(Object).isRequired
    };

    render() {
        const { form, onValidate } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Form>
                <Form.Item
                    {...formItemLayout}
                    label="SKU"
                >
                    {getFieldDecorator('SKU')(
                        <Input disabled />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="商品名称"
                    hasFeedback
                >
                    {getFieldDecorator('productName', {
                        rules: [{
                            required: true,
                            message: '请输入商品名称'
                        }]
                    })(
                        <Input onBlur={() => onValidate(form)}/>
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="商品编号"
                    hasFeedback
                >
                    {getFieldDecorator('productCode', {
                        rules: [{
                            required: true,
                            message: '请输入商品编号'
                        }]
                    })(
                        <Input onBlur={() => onValidate(form)}/>
                    )}
                </Form.Item>
            </Form>
        );
    }
}

export default CategoryForm;
