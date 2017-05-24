/* eslint-disable no-console */
import React from 'react';

import { Router, Route, hashHistory } from 'react-router';

import Frame from './Frame';
import Main from '../pages/main/';
import Category from '../pages/main/components/category';
import ProductDetail from '../pages/main/components/productDetail';

const handleChange = (...args) => {
    console.log(args);
};

const Routers = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Frame} onChange={handleChange}>
            <Route path="main" component={Main}>
                <Route path="category" component={Category} />
                <Route path="productDetail/:SKU" component={ProductDetail} />
            </Route>
        </Route>
    </Router>
);

export default Routers;
