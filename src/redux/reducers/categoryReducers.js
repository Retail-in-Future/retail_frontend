/* eslint-disable no-unused-vars */
import lodash from 'lodash';
import { handleActions } from 'redux-actions';
import immutable, { Map } from 'immutable';

const initState = new Map({
    categories: [],
    isEdit: false,
    responseSKU: ''
});
export const reducersMap = {
    getCategories_SUCCESS: (state, action) => {
        return state.set('categories', action.payload.data);
    },
    getSKU_SUCCESS: (state, action) => {
        return state.set('responseSKU', action.payload.data.SKU);
    }
};
export default handleActions(reducersMap, initState);
