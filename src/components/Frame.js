import React, {Component} from 'react'

import Devtools from './Devtools'

class Frame extends Component {
    render() {
        const children = this.props.children;
        return (
            <div>
                {children}
                <Devtools/>
            </div>
        )
    }
}
export default Frame