import React, {Component} from 'react'

import {Router, Route, hashHistory} from 'react-router'

import Frame from './Frame'
import Demo from '../pages/demo/'

class Routers extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Frame}>
                    <Route path="demo" component={Demo}/>
                </Route>
            </Router>
        )
    }
}
export default Routers