/* eslint-disable no-console,consistent-return,no-param-reassign */
import { all, call, put, select, take, takeEvery, fork } from 'redux-saga/effects';

import fetchHelper from 'src/reduxHelper/fetchHelper';
import * as testActions from 'src/redux/actions/testActions';
import * as selectors from 'src/redux/selectors/';

function fetch(action) {
    const actionName = action.type;
    const actionMeta = action.meta;
    const { INFO_DATA, INFO_OPTION } = action.payload;
    return fetchHelper(INFO_OPTION, INFO_DATA)
        .then((response) => {
            // 状态码判断
            if (response.status === 200) {
                return response.json();
            }
        })
        .then((resolve) => {
            console.info('Promise resolve:\n', resolve);
            return resolve.result === 1
                ? {
                    type: `${actionName}_SUCCESS`,
                    payload: resolve,
                    meta: actionMeta,
                }
                : {
                    type: `${actionName}_FAIL`,
                    payload: resolve,
                    meta: actionMeta,
                };
        })
        .catch((error) => {
            console.warn('Promise catch:\n', error);
            return {
                type: 'SERVICE_ERROR',
                payload: error,
                meta: actionMeta,
            };
        });
}

function* fetchWrapper(action) {
    const nextAction = yield call(fetch, action);
    return yield put(nextAction);
}

function* fetchTest() {
    const action = yield takeEvery('fetchTest');
    const nextAction = yield call(fetchWrapper, action);
    if (nextAction.payload instanceof Error) {
        return;
    }
    yield put(testActions.fetchTest2(nextAction.payload));
}

function* fetchTest2() {
    // while (true) {
    const action = yield take('fetchTest2');
    yield call(fetchWrapper, action);
    // }
}

function* sagas() {
    yield all([
        fork(fetchTest),
        fork(fetchTest2),
    ]);
}

export default sagas;
