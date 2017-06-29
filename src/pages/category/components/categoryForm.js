/* eslint-disable no-console,no-debugger */
import autoBind from 'autobind-decorator';
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
        const { category } = props;
        const { isEdit, appendCategoryInfo, editCategoryInfo } = category;
        const categoryInfo = isEdit ? editCategoryInfo : appendCategoryInfo;
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
    onFieldsChange: (props, fields) => {
        console.log(fields);
        props.setCategoryInfo({
            productName: fields.productName.value
        });
    }
})
class CategoryForm extends React.Component {
    static propTypes = {
        form: PropTypes.instanceOf(Object).isRequired,
        category: PropTypes.instanceOf(Object).isRequired,
        setCategoryInfo: PropTypes.func.isRequired
    };

    @autoBind
    handleBlur() {
        const { form, setCategoryInfo } = this.props;
        const tempData = form.getFieldsValue();
        setCategoryInfo(tempData);
    }

    render() {
        const { form } = this.props;
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
                        <Input />
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
                        }],
                        trigger: 'onBlur'
                    })(
                        <Input />
                    )}
                </Form.Item>
            </Form>
        );
    }
}

export default CategoryForm;
