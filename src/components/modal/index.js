import autoBind from 'autobind-decorator';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import { hideModal } from 'src/redux/actions/modalActions';

const mapStateToProps = (state) => {
    const tempModal = state.modal.toJS();
    return {
        modal: tempModal,
    };
};

const mapDispatchToProps = {
    hideModal,
};

@connect(mapStateToProps, mapDispatchToProps)
class ModalComponent extends Component {
    static propTypes = {
        modal: PropTypes.instanceOf(Object),
        title: PropTypes.string,
        content: PropTypes.node,
        hideModal: PropTypes.func,
        confirmFunction: PropTypes.func,
    };

    static defaultProps = {
        modal: null,
        title: null,
        content: null,
        hideModal: null,
        confirmFunction: null,
    };

    @autoBind
    handleHideModal() {
        const { hideModal } = this.props;
        hideModal();
    }

    @autoBind
    handleConfirmCreator() {
        const { confirmFunction } = this.props;
        return () => {
            confirmFunction();
            this.handleHideModal();
        };
    }

    render() {
        const { title, content, modal } = this.props;
        const tempConfirmFunction = this.handleConfirmCreator();
        return (
            <Modal
                title={title}
                visible={modal.modalVisible}
                onOk={tempConfirmFunction}
                onCancel={this.handleHideModal}
            >
                {content}
            </Modal>
        );
    }

}

export default ModalComponent;
