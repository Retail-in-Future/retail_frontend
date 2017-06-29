/* eslint-disable no-unused-vars */
import lodash from 'lodash';
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    categories: [],
    isEdit: false,
    responseSKU: ''
});
export default handleActions({
    getCategories_SUCCESS: (state, action) => {
        return state.set('categories', action.payload.data);
    },
    getSKU_SUCCESS: (state, action) => {
        return state.set('responseSKU', action.payload.data.SKU);
    }
}, initState);
