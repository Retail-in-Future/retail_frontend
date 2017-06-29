import { call, put } from 'redux-saga/effects';

import fetchHelper from 'src/reduxHelper/fetchHelper';

export function* fetchAction(action) {
    const nextAction = yield call(fetchHelper, action);
    yield put(nextAction);
    return nextAction;
}

export const isApiAction = value => value.payload.INFO_TYPE === 'API';

