import autoBind from 'autobind-decorator';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';

import {
    getSKU,
    getCategories,
    setCategoryInfo
} from 'src/redux/actions/categoryActions';
import { showModal } from 'src/redux/actions/modalActions';
import Modal from 'src/components/modal/';
import CategoryForm from './components/categoryForm';
import CategoryRow from './components/categoryRow';
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
    setCategoryInfo
};

@connect(mapStateToProps, mapDispatchToProps)
class Category extends Component {
    static propTypes = {
        getSKU: PropTypes.func.isRequired,
        getCategories: PropTypes.func.isRequired,
        category: PropTypes.instanceOf(Object).isRequired,
        showModal: PropTypes.func.isRequired,
        setCategoryInfo: PropTypes.func.isRequired
    };

    componentDidMount() {
        const { getSKU, getCategories } = this.props;
        getCategories();
        getSKU();
    }

    @autoBind
    handleAppendCategory() {
        const { showModal } = this.props;
        showModal();
    }

    render() {
        const { category, setCategoryInfo } = this.props;
        const { categories } = category;
        return (
            <div className={styles.contentWrap}>
                <div className={styles.tableActions}>
                    <Button type="primary" onClick={this.handleAppendCategory}>添加品类</Button>
                </div>
                <Table columns={CategoryRow} dataSource={categories} />
                <Modal title="test">
                    <CategoryForm category={category} setCategoryInfo={setCategoryInfo} />
                </Modal>
            </div>
        );
    }
}

export default Category;
