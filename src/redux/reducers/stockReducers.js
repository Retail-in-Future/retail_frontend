/* eslint-disable no-unused-vars */
import lodash from 'lodash';
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    stockList: [],
});
export default handleActions({
    getStockList_SUCCESS: (state, action) => {
        const tempState = state.toJS();
        tempState.stockList = action.payload.data;
        return immutable.fromJS(tempState);
    }
}, initState);
