/* eslint-disable no-console */
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    name: 'pengchuan',
});
export default handleActions({
    fetchTest: (state, action) => {
        debugger
        console.log('this is fetchTest.');
        return state;
    },
    fetchTest_SUCCESS: (state, action) => {
        debugger;
        console.log('this is fetchTest_SUCCESS.');
        return state;
    },
    fetchTest_FAIL: (state, action) => {
        debugger;
        console.log('this is fetchTest_FAIL.');
        return state;
    },
}, initState);
