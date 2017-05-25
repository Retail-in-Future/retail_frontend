/* eslint-disable no-console */
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    name: 'pengchuan',
});
export default handleActions({
    fetchTest: (state, action) => {
        console.log('this is fetchTest.');
        return state;
    },
    fetchTest_SUCCESS: (state, action) => {
        console.log('this is fetchTest_SUCCESS.');
        return state;
    },
    fetchTest_FAIL: (state, action) => {
        console.log('this is fetchTest_FAIL.');
        return state;
    },
}, initState);
