/* eslint-disable consistent-return,no-param-reassign,no-unused-vars */
import { all, call, put, select, take, takeEvery, fork } from 'redux-saga/effects';

import { fetchAction, isApiAction } from 'src/redux/sagas/sagaUtils';

function getSKU(action) {
    console.log('%cthis is a saga action,you can create a work flow at here.', 'color:#FFF;font-size:16px;text-shadow:0 0 3px #2070DC;');
}

export default function* sagas() {
    // filter api action
    yield takeEvery(action => isApiAction(action), fetchAction);
    // filter saga actions
    yield takeEvery('getSKU', getSKU);
}
