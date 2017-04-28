import autobind from 'autobind-decorator'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Layout, Menu, Icon, Table} from 'antd';

import {testAction} from 'src/redux/actions/testActions'
import styles from './index.scss'

const mapStateToProps = (state) => {
    return {
        state
    }
}
const mapDispatchToProps = {
    testAction
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
    @autobind
    handleTest() {
        const {testAction} = this.props
        testAction({name: 'pengchuan'});
    }

    render() {
        const {Header, Content, Footer, Sider} = Layout;
        const columns = [{
            title: 'SKU',
            dataIndex: 'SKU',
            key: 'SKU',
            width: '35%'
        }, {
            title: '商品名称',
            dataIndex: 'productName',
            key: 'productName',
            width: '35%'
        }, {
            title: '商品编码',
            dataIndex: 'productCode',
            key: 'productCode',
            width: '30%'
        }];
        const data = [{
            key: '1',
            productName: '华为自行车',
            SKU: '0000001',
            productCode: 'ASDFGHJKL'
        },{
            key: '2',
            productName: '华为自行车',
            SKU: '0000002',
            productCode: 'ASDFGHJKL'
        },{
            key: '3',
            productName: '华为自行车',
            SKU: '0000003',
            productCode: 'ASDFGHJKL'
        }];

        return (
            <Layout style={{height: '100vh'}}>
                <Sider style={{overflow: 'auto'}}>
                    <div/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="user"/>
                            <span className="nav-text">nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera"/>
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload"/>
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="bar-chart"/>
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Icon type="cloud-o"/>
                            <span className="nav-text">nav 5</span>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Icon type="appstore-o"/>
                            <span className="nav-text">nav 6</span>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Icon type="team"/>
                            <span className="nav-text">nav 7</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="shop"/>
                            <span className="nav-text">nav 8</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                            <Table columns={columns} dataSource={data}/>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}/>
                </Layout>
            </Layout>
        )
    }
}
export default App;
