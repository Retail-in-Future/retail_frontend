import React, {Component} from 'react'

import {Router, Route, hashHistory} from 'react-router'

import Frame from './Frame'
import App from '../pages/main/'

class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Frame}>
                    <Route path="main" component={App}/>
                </Route>
            </Router>
        )
    }
}
export default Routers