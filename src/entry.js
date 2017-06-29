import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import 'antd/dist/antd.less';

import reducers from './redux/reducers/';
import sagas from './redux/sagas/';
import Routers from './components/Routers';
import devTools from './components/Devtools';
import './styles/eric-meyer-reset.css';

const sagaMiddleware = createSagaMiddleware();
const middleWares = compose(
    applyMiddleware(
        sagaMiddleware,
    ),
    devTools.instrument(),
);
const initialState = {};
const store = createStore(reducers, initialState, middleWares);
sagaMiddleware.run(sagas);
ReactDom.render(
    <Provider store={store}>
        <Routers />
    </Provider>,
    document.getElementById('root'),
);
