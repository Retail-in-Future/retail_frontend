import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';

import styles from './index.scss';

const handleSelect = ({ key }) => {
    hashHistory.push(`/home/${key}`);
};

const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = {};

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
    static propTypes = {
        children: PropTypes.node,
        routes: PropTypes.instanceOf(Object)
    };

    static defaultProps = {
        children: null,
        routes: []
    };

    constructor(props) {
        super(props);
        const { routes } = this.props;
        this.state = {
            menuKey: routes[routes.length - 1].path
        };
    }

    render() {
        const { menuKey } = this.state;
        const { children } = this.props;
        const { Content, Footer, Sider } = Layout;
        return (
            <Layout className={styles.wrap}>
                <Sider className={styles.sider}>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={[menuKey]} onSelect={handleSelect}>
                        <Menu.Item key="category">
                            <Icon type="tags" />
                            <span className="nav-text">品类管理</span>
                        </Menu.Item>
                        <Menu.Item key="stock">
                            <Icon type="swap" />
                            <span className="nav-text">进销存管理</span>
                        </Menu.Item>
                        <Menu.Item key="passenger">
                            <Icon type="area-chart" />
                            <span className="nav-text">客流统计</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Content className={styles.content}>
                        {children}
                    </Content>
                    <Footer className={styles.footer} />
                </Layout>
            </Layout>
        );
    }
}
export default Home;
