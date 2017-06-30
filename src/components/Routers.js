import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Frame from './frame/';
import Home from '../pages/home/';
import Category from '../pages/category/';
import Stock from '../pages/stock/';
import ProductDetail from '../pages/productDetail/';

const Routers = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Frame}>
            <Route path="home" component={Home}>
                <Route path="category" component={Category} />
                <Route path="stock" component={Stock} />
                <Route path="stock/productDetail/:sku" component={ProductDetail} />
            </Route>
        </Route>
    </Router>
);

export default Routers;
