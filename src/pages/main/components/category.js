import autoBind from 'autobind-decorator';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table, Form, Input } from 'antd';

import { showModal } from 'src/redux/actions/modalActions';
import { deleteCategory } from 'src/redux/actions/categoryActions';
import Modal from 'src/components/modal';
import styles from './category.scss';

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
    const tempCategory = state.category.toJS();
    return {
        category: tempCategory,
    };
};

const mapDispatchToProps = {
    showModal,
    deleteCategory,
};

@Form.create()
@connect(mapStateToProps, mapDispatchToProps)
class Category extends Component {
    static propTypes = {
        showModal: PropTypes.func.isRequired,
        deleteCategory: PropTypes.func.isRequired,
        form: PropTypes.instanceOf(Object).isRequired,
        category: PropTypes.instanceOf(Object).isRequired,
    };

    @autoBind
    createColumns() {
        const actionRender = itemData => (
            <p>
                <a role="link" tabIndex="-1" onClick={this.handleDeleteCreator(itemData)}>编辑</a>
                &nbsp;|&nbsp;
                <a role="link" tabIndex="-1" onClick={this.handleDeleteCreator(itemData)}>删除</a>
            </p>
        );
        return [{
            title: 'SKU',
            dataIndex: 'SKU',
            key: 'SKU',
            width: '35%',
        }, {
            title: '商品名称',
            dataIndex: 'productName',
            key: 'productName',
            width: '25%',
        }, {
            title: '商品编码',
            dataIndex: 'productCode',
            key: 'productCode',
            width: '30%',
        }, {
            title: '操作',
            dataIndex: '',
            key: 'action',
            width: '10%',
            className: styles.textCenter,
            render: actionRender,
        }];
    }

    @autoBind
    createModal() {
        const { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <Form>
                <Form.Item
                    {...formItemLayout}
                    label="SKU"
                >
                    <Input disabled value="this value created at database." />
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
    }

    @autoBind
    handleShowModal() {
        const { showModal } = this.props;
        showModal();
    }

    @autoBind
    handleDeleteCreator(itemData) {
        const { deleteCategory } = this.props;
        return () => {
            deleteCategory(itemData);
        };
    }

    @autoBind
    handleConfirm() {
        console.log(123);
    }

    render() {
        const columns = this.createColumns();
        const modalContent = this.createModal();
        const { category } = this.props;
        const { categories } = category;
        return (
            <div className={styles.contentWrap}>
                <div className={styles.tableActions}>
                    <Button type="primary" onClick={this.handleShowModal}>添加品类</Button>
                    <Modal title="添加品类" content={modalContent} confirmFunction={this.handleConfirm} />
                </div>
                <Table columns={columns} dataSource={categories} />
            </div>
        );
    }
}

export default Category;
