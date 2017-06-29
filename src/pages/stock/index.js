/* eslint-disable no-unused-vars,react/no-unused-prop-types */
import autoBind from 'autobind-decorator';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Input } from 'antd';

import {
    setCategoryInfo
} from 'src/redux/actions/categoryActions';

const FormItem = Form.Item;
const CustomizedForm = Form.create({
    onFieldsChange(props, changedFields) {
        props.onChange({ productName: changedFields.productName.value });
    },
    mapPropsToFields(props) {
        console.log(props.fields);
        return {
            productName: {
                value: props.fields.productName.toUpperCase()
            }
        };
    }
})((props) => {
    const { getFieldDecorator } = props.form;
    return (
        <Form layout="inline">
            <FormItem label="productName">
                {getFieldDecorator('productName', {
                    rules: [{ required: true, message: 'productName is required!' }]
                })(<Input />)}
            </FormItem>
        </Form>
    );
});

const mapStateToProps = (state) => {
    const category = state.category.toJS();
    return {
        category
    };
};

const mapDispatchToProps = {
    setCategoryInfo
};

@connect(mapStateToProps, mapDispatchToProps)
class Demo extends React.Component {
    static propTypes = {
        category: PropTypes.instanceOf(Object).isRequired,
        setCategoryInfo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            productName: ''
        };
    }

    @autoBind
    handleFormChange(changedFields) {
        const { setCategoryInfo } = this.props;
        setCategoryInfo(changedFields);
    }

    // @autoBind
    // handleFormChange(changedFields) {
    //     this.setState(changedFields);
    // }

    render() {
        const fields = this.props.category.appendCategoryInfo;
        // const fields = this.state;
        return (
            <div>
                <CustomizedForm fields={fields} onChange={this.handleFormChange} />
                <pre className="language-bash">
                    {JSON.stringify(fields, null, 2)}
                </pre>
            </div>
        );
    }
}
export default Demo;
