import autobind from 'autobind-decorator'
import React, {Component} from 'react'
import {connect} from 'react-redux'

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
        return (
            <h2 onClick={this.handleTest} className={styles.red}>this is demo and the color is red.</h2>
        )
    }
}
export default App;
