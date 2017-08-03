import autoBind from 'autobind-decorator';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'antd';

import { hideModal } from 'src/redux/actions/modalActions';

const mapStateToProps = (state) => {
    const tempModal = state.modal.toJS();
    return {
        modal: tempModal
    };
};

const mapDispatchToProps = {
    hideModal
};

@connect(mapStateToProps, mapDispatchToProps)
class ModalComponent extends Component {
    static propTypes = {
        modal: PropTypes.instanceOf(Object),
        title: PropTypes.string,
        children: PropTypes.node,
        hideModal: PropTypes.func,
        confirmFunction: PropTypes.func,
        afterCloseFunction: PropTypes.func
    };

    static defaultProps = {
        modal: {},
        title: null,
        children: null,
        hideModal: null,
        confirmFunction: null,
        afterCloseFunction: () => {}
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
            confirmFunction && confirmFunction() && this.handleHideModal();
        };
    }

    render() {
        const { title, modal, children, afterCloseFunction } = this.props;
        const tempConfirmFunction = this.handleConfirmCreator();
        return (
            <Modal
                title={title}
                visible={modal.visible}
                onOk={tempConfirmFunction}
                onCancel={this.handleHideModal}
                afterClose={afterCloseFunction}
            >
                {children}
            </Modal>
        );
    }

}

export default ModalComponent;
