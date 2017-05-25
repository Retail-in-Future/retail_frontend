/* eslint-disable no-console,consistent-return,no-param-reassign */
import { all, call, put, select, take, takeEvery, fork } from 'redux-saga/effects';

import fetchAction from 'src/redux/sagas/sagaUtils';
import * as testActions from 'src/redux/actions/testActions';

function* fetchTest() {
    const action = yield takeEvery('fetchTest');
    const nextAction = yield call(fetchAction, action);
    if (nextAction.payload instanceof Error) {
        return;
    }
    yield put(testActions.fetchTest2(nextAction.payload));
}

function* fetchTest2() {
    const action = yield takeEvery('fetchTest2');
    yield call(fetchAction, action);
}

export default function* sagas() {
    yield all([
        fork(fetchTest),
        fork(fetchTest2),
    ]);
}
