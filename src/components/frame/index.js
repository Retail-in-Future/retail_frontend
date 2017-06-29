import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Alert } from 'antd';

import { hideError } from 'src/redux/actions/commonActions';
import Devtools from '../Devtools';
import styles from './index.scss';

const mapStateToProps = (state) => {
    const common = state.common.toJS();
    return {
        errorTips: common.errorTips
    };
};

const mapDispatchToProps = {
    hideError
};

@connect(mapStateToProps, mapDispatchToProps)
class Frame extends Component {
    static propTypes = {
        children: PropTypes.node,
        hideError: PropTypes.func.isRequired,
        errorTips: PropTypes.instanceOf(Object).isRequired
    };
    static defaultProps = {
        children: null
    };

    render() {
        const { children, errorTips, hideError } = this.props;
        const { visible } = errorTips;
        return (
            <div>
                <div className={styles.tipsWrap}>
                    {
                        visible
                            ? <Alert
                                message="出错了..."
                                description="这么多bug，一定是个假程序员写的..."
                                type="error"
                                showIcon
                                closable
                                onClose={hideError}
                            />
                            : null
                    }
                </div>
                {children}
                {
                    process.env.NODE_ENV === 'development'
                        ? <Devtools />
                        : null
                }
            </div>
        );
    }
}

export default Frame;
