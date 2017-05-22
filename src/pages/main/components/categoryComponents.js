import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

import Modal from 'src/components/modal';

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

export const CategoryForm = ({ form }) => {
    const { getFieldDecorator } = form;
    return (
        <Form>
            <Form.Item
                {...formItemLayout}
                label="SKU"
            >
                {getFieldDecorator('SKU')(
                    <Input disabled />,
                )}
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                label="商品名称"
                hasFeedback
            >
                {getFieldDecorator('productName', {
                    rules: [{
                        required: true, message: '请输入商品名称',
                    }],
                })(
                    <Input />,
                )}
            </Form.Item>
            <Form.Item
                {...formItemLayout}
                label="商品编号"
                hasFeedback
            >
                {getFieldDecorator('productCode', {
                    rules: [{
                        required: true, message: '请输入商品编号',
                    }],
                })(
                    <Input />,
                )}
            </Form.Item>
        </Form>
    );
};

CategoryForm.propTypes = {
    form: PropTypes.instanceOf(Object).isRequired,
};

export const CategoryModal = ({ form, category, handleEditConfirm, handleAppendConfirm }) => {
    const modalContent = (
        <CategoryForm form={form} />
    );
    return category.isEdit
        ? <Modal title="编辑品类" content={modalContent} confirmFunction={handleEditConfirm} />
        : <Modal title="添加品类" content={modalContent} confirmFunction={handleAppendConfirm} />;
};
CategoryModal.propTypes = {
    form: PropTypes.instanceOf(Object).isRequired,
    category: PropTypes.instanceOf(Object).isRequired,
    handleEditConfirm: PropTypes.func.isRequired,
    handleAppendConfirm: PropTypes.func.isRequired,
};

