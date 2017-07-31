/* eslint-disable class-methods-use-this */
import autoBind from 'autobind-decorator';
import lodash from 'lodash';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';

import {
    getSKU,
    getCategories,
    appendCategory,
    updateCategory,
    deleteCategory
} from 'src/redux/actions/categoryActions';
import { showModal } from 'src/redux/actions/modalActions';
import Modal from 'src/components/modal/';
import CategoryForm from './components/categoryForm';
import { columnsCreator } from './components/categoryColumn';
import styles from './index.scss';

const mapStateToProps = (state) => {
    const category = state.category.toJS();
    return {
        category
    };
};

const mapDispatchToProps = {
    getSKU,
    showModal,
    getCategories,
    appendCategory,
    updateCategory,
    deleteCategory
};

@connect(mapStateToProps, mapDispatchToProps)
class Category extends Component {
    static propTypes = {
        getSKU: PropTypes.func.isRequired,
        getCategories: PropTypes.func.isRequired,
        category: PropTypes.instanceOf(Object).isRequired,
        showModal: PropTypes.func.isRequired,
        appendCategory: PropTypes.func.isRequired,
        updateCategory: PropTypes.func.isRequired,
        deleteCategory: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            formHasError: false,
            categoryInfo: {
                SKU: '',
                productName: '',
                productCode: ''
            }
        };
    }

    componentDidMount() {
        const { getSKU, getCategories } = this.props;
        getCategories();
        getSKU();
    }

    @autoBind
    setCategoryInfo(inputInfo) {
        const { categoryInfo } = this.state;
        const resultInfo = Object.assign({}, categoryInfo, inputInfo);
        this.setState({ categoryInfo: resultInfo });
    }

    @autoBind
    handleAppendCategory() {
        const nextState = lodash.cloneDeep(this.state);
        const { showModal, category } = this.props;
        nextState.categoryInfo = {
            productName: '',
            productCode: '',
            SKU: category.responseSKU
        };
        nextState.isEdit = true;
        this.setState(nextState);
        showModal();
    }

    @autoBind
    handleConfirmAppend() {
        if(!this.state.formHasError){
            const { updateCategory } = this.props;
            appendCategory(this.state.categoryInfo);
        }
        return !this.state.formHasError;
    }

    @autoBind
    handleConfirmEdit() {
        if(!this.state.formHasError){
            const { updateCategory } = this.props;
            updateCategory(this.state.categoryInfo);
        }      
        return this.state.formHasError;
    }

    @autoBind
    handleEditCategory(inputInfo) {
        const nextState = lodash.cloneDeep(this.state);
        const { showModal } = this.props;
        nextState.isEdit = true;
        nextState.categoryInfo = inputInfo;
        this.setState(nextState);
        showModal();
    }

    @autoBind
    handleDeleteCategory(inputInfo) {
        const { deleteCategory } = this.props;
        deleteCategory(inputInfo);
    }

    @autoBind
    onValidate(form) {
        form.validateFields((error) => {
            this.state.formHasError = error != null;
        });
    }

    render() {
        const { isEdit, categoryInfo } = this.state;
        const { category } = this.props;
        const columns = columnsCreator({
            delete: this.handleDeleteCategory,
            edit: this.handleEditCategory
        });
        return (
            <div className={styles.contentWrap}>
                <div className={styles.tableActions}>
                    <Button type="primary" onClick={this.handleAppendCategory}>添加品类</Button>
                </div>
                <Table columns={columns} dataSource={category.categories} />
                <Modal
                    title={isEdit ? '编辑品类' : '添加品类'}
                    confirmFunction={isEdit ? this.handleConfirmEdit : this.handleConfirmAppend}
                >
                    <CategoryForm
                        categoryInfo={categoryInfo}
                        onValidate={this.onValidate}
                        setCategoryInfo={this.setCategoryInfo}
                    />
                </Modal>
            </div>
        );
    }
}

export default Category;
