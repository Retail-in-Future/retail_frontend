/* eslint-disable consistent-return,no-param-reassign,no-unused-vars,camelcase */
import { all, call, put, select, take, takeEvery, fork, takeLatest } from 'redux-saga/effects';

import { fetchAction, isApiAction } from 'src/redux/sagas/sagaUtils';
import { getSKU, getCategories } from 'src/redux/actions/categoryActions';

function* appendCategory_SUCCESS() {
    yield put(getSKU());
    yield put(getCategories());
}

function* updateCategory_SUCCESS() {
    yield put(getCategories());
}

export default function* sagas() {
    // filter api action
    yield takeEvery(action => isApiAction(action), fetchAction);
    // filter saga actions
    yield takeEvery('appendCategory_SUCCESS', appendCategory_SUCCESS);
    yield takeEvery('updateCategory_SUCCESS', updateCategory_SUCCESS);
    yield takeEvery('deleteCategory_SUCCESS', updateCategory_SUCCESS);
}
