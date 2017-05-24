import autoBind from 'autobind-decorator';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';

import { testAction } from 'src/redux/actions/testActions';
import styles from './index.scss';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = {
    testAction,
};

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    static defaultProps = {
        children: null,
    };

    @autoBind
    static handleSelect(menuData) {
        return menuData;
    }

    render() {
        const { children } = this.props;
        const { Header, Content, Footer, Sider } = Layout;
        return (
            <Layout className={styles.wrap}>
                <Sider className={styles.sider}>
                    <div />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['category']} onSelect={this.handleSelect}>
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
                    <Header className={styles.header} />
                    <Content className={styles.content}>
                        {children}
                    </Content>
                    <Footer className={styles.footer} />
                </Layout>
            </Layout>
        );
    }
}
export default App;
