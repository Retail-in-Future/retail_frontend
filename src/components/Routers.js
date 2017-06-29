import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Frame from './Frame';
import Home from '../pages/home/';
import Category from '../pages/category/';
import Stock from '../pages/stock/';
import ProductList from '../pages/productList/';
import ProductDetail from '../pages/productDetail/';

const Routers = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Frame}>
            <Route path="home" component={Home}>
                <Route path="category" component={Category} />
                <Route path="stock" component={Stock} />
                <Route path="productList" component={ProductList} />
                <Route path="productDetail/:SKU" component={ProductDetail} />
            </Route>
        </Route>
    </Router>
);

export default Routers;
