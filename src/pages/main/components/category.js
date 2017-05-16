import autobind from 'autobind-decorator';
import React, { Component } from 'react';
import { Button, Table, Modal, Form, Input } from 'antd';

import styles from './category.scss';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const columns = [{
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
  render: itemData => (
    <p>
      <a onClick={() => console.log(itemData)}>编辑</a>
                &nbsp;|&nbsp;
                <a onClick={() => console.log(itemData)}>删除</a>
    </p>
        ),
},
];
const data = [{
  key: '1',
  productName: '华为自行车',
  SKU: '0000001',
  productCode: 'ASDFGHJKL',
}, {
  key: '2',
  productName: '华为自行车',
  SKU: '0000002',
  productCode: 'ASDFGHJKL',
}, {
  key: '3',
  productName: '华为自行车',
  SKU: '0000003',
  productCode: 'ASDFGHJKL',
}];

@Form.create()
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

    @autobind
  handleShowModal() {
    this.setState({ modalVisible: true });
  }

    @autobind
  handleCancel() {
    this.setState({ modalVisible: false });
  }

  render() {
    const { modalVisible } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.contentWrap}>
        <div className={styles.tableActions}>
          <Button type="primary" onClick={this.handleShowModal}>添加品类</Button>
          <Modal
            title="添加品类" visible={modalVisible}
            onOk={this.handleCancel} onCancel={this.handleCancel}
          >
            <Form>
              <Form.Item
                {...formItemLayout}
                label="SKU"
              >
                <Input disabled value="this value created at database." />
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label="商品名称"
                hasFeedback
              >
                {getFieldDecorator('productName', {
                  rules: [{
                    required: true, message: '请输入商品名称',
                  }],
                })(
                  <Input />,
                                )}
              </Form.Item>
              <Form.Item
                {...formItemLayout}
                label="商品编号"
                hasFeedback
              >
                {getFieldDecorator('productCode', {
                  rules: [{
                    required: true, message: '请输入商品编号',
                  }],
                })(
                  <Input />,
                                )}
              </Form.Item>
            </Form>
          </Modal>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}

export default Category;
