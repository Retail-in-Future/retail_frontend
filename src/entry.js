import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import customMiddleWare from './reduxHelper/customMiddleWare';
import reducers from './redux/reducers/';
import Routers from './components/Routers';
import devTools from './components/Devtools';
import './styles/eric-meyer-reset.css';

const middleWares = compose(
    applyMiddleware(customMiddleWare),
    devTools.instrument(),
);
const initialState = {};
const store = createStore(reducers, initialState, middleWares);
ReactDom.render(
    <Provider store={store}>
        <Routers />
    </Provider>,
    document.getElementById('root'),
);
