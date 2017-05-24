import autoBind from 'autobind-decorator';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Layout, Menu, Icon, Button } from 'antd';

import { fetchTest } from 'src/redux/actions/testActions';
import styles from './index.scss';

const mapStateToProps = state => ({
    state,
});

const mapDispatchToProps = {
    fetchTest,
};

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    static propTypes = {
        children: PropTypes.node,
        fetchTest: PropTypes.func.isRequired,
    };

    static defaultProps = {
        children: null,
    };

    @autoBind
    static handleSelect(menuData) {
        return menuData;
    }

    @autoBind
    handleTest() {
        const { fetchTest } = this.props;
        fetchTest({ name: 'pengchuan' });
    }

    render() {
        const { children } = this.props;
        const { Header, Content, Footer, Sider } = Layout;
        return (
            <Layout className={styles.wrap}>
                <Sider className={styles.sider}>
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
                        <Button type="primary" ghost onClick={this.handleTest}>haha</Button>
                        {children}
                    </Content>
                    <Footer className={styles.footer} />
                </Layout>
            </Layout>
        );
    }
}
export default App;
