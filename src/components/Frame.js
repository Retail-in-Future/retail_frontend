import React, {Component} from 'react'

import Devtools from './Devtools'

class Frame extends Component {
    render() {
        const children = this.props.children;
        return (
            <div>
                <h1>this is frame.</h1>
                <Devtools/>
                {children}
            </div>
        )
    }
}
export default Frame