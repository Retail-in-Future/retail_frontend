import lodash from 'lodash';
import autoBind from 'autobind-decorator';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table, Form, Popconfirm } from 'antd';

import {
    setModalType,
    getSKU,
    getCategories,
    deleteCategory,
    appendCategory,
    editCategory,
    setEditCategoryInfo,
} from 'src/redux/actions/categoryActions';
import { showModal } from 'src/redux/actions/modalActions';
import { CategoryModal } from './categoryComponents';
import styles from './category.scss';

const mapStateToProps = (state) => {
    const category = state.category.toJS();
    return {
        category,
    };
};

const mapDispatchToProps = {
    getSKU,
    showModal,
    editCategory,
    setModalType,
    getCategories,
    deleteCategory,
    appendCategory,
    setEditCategoryInfo,
};

const mapPropsToFields = (props) => {
    const {
        isEdit,
        editCategoryInfo,
        appendCategoryInfo,
    } = props.category;
    const tempCategoryInfo = isEdit ? editCategoryInfo : appendCategoryInfo;
    return lodash.forOwn(tempCategoryInfo, (value, key) => {
        tempCategoryInfo[key] = {
            value,
        };
    });
};

@connect(mapStateToProps, mapDispatchToProps)
@Form.create({ mapPropsToFields })
class Category extends Component {
    static propTypes = {
        showModal: PropTypes.func.isRequired,
        setModalType: PropTypes.func.isRequired,
        getSKU: PropTypes.func.isRequired,
        getCategories: PropTypes.func.isRequired,
        deleteCategory: PropTypes.func.isRequired,
        appendCategory: PropTypes.func.isRequired,
        editCategory: PropTypes.func.isRequired,
        form: PropTypes.instanceOf(Object).isRequired,
        category: PropTypes.instanceOf(Object).isRequired,
        setEditCategoryInfo: PropTypes.func.isRequired,
    };

    componentDidMount() {
        const { getSKU, getCategories } = this.props;
        getCategories();
        getSKU();
    }

    componentDidUpdate() {
        const { category, getSKU } = this.props;
        if (category.needRequestSKU && !category.isRequesting) {
            getSKU();
        }
    }

    @autoBind
    createColumns() {
        const actionRender = categoryInfo => (
            <p>
                <a role="link" tabIndex="-1" onClick={this.handleEditCreator(categoryInfo)}>编辑</a>
                &nbsp;|&nbsp;
                <Popconfirm
                    placement="topRight"
                    okText="确定"
                    cancelText="取消"
                    title="确定删除本品类？"
                    onConfirm={this.handleDeleteCreator(categoryInfo)}
                >
                    <a role="link" tabIndex="-1">删除</a>
                </Popconfirm>
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
    showModal() {
        const { showModal } = this.props;
        showModal();
    }

    @autoBind
    handleAppendCategory() {
        const { setModalType } = this.props;
        setModalType({ isEdit: false });
        this.showModal();
    }

    @autoBind
    handleEditCreator(categoryInfo) {
        const { setEditCategoryInfo } = this.props;
        const tempInfo = lodash.cloneDeep(categoryInfo);
        const { setModalType } = this.props;
        delete tempInfo.key;
        return () => {
            setModalType({ isEdit: true });
            setEditCategoryInfo(tempInfo);
            this.showModal();
        };
    }

    @autoBind
    handleDeleteCreator(categoryInfo) {
        const { deleteCategory } = this.props;
        return () => {
            deleteCategory(categoryInfo);
        };
    }

    @autoBind
    handleAppendConfirm() {
        const { form, appendCategory } = this.props;
        const formValues = form.getFieldsValue();
        const action = appendCategory(formValues);
        this.setState()
    }

    @autoBind
    handleEditConfirm() {
        const { form, editCategory } = this.props;
        const formValues = form.getFieldsValue();
        editCategory(formValues);
    }

    render() {
        const { form, category } = this.props;
        const { categories } = category;
        const columns = this.createColumns();
        return (
            <div className={styles.contentWrap}>
                <div className={styles.tableActions}>
                    <Button type="primary" onClick={this.handleAppendCategory}>添加品类</Button>
                    <CategoryModal
                        form={form}
                        category={category}
                        handleEditConfirm={this.handleEditConfirm}
                        handleAppendConfirm={this.handleAppendConfirm}
                    />
                </div>
                <Table columns={columns} dataSource={categories} />
            </div>
        );
    }
}

export default Category;
