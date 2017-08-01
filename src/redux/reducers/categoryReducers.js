/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import immutable, { Map } from 'immutable';

const initState = new Map({
    categories: [],
    isEdit: false,
    responseSKU: '',
    formHasError: false,
    formErrorMessages: ''
});
export const reducersMap = {
    getCategories_SUCCESS: (state, action) => {
        return state.set('categories', action.payload.data);
    },
    getSKU_SUCCESS: (state, action) => {
        return state.set('responseSKU', action.payload.data.SKU);
    },
    updateCategory_SUCCESS: (state, action) => {
        return state.set('formHasError', false);
    },
    updateCategory_FAIL: (state, action) => {
        return state.set('formHasError', true);
    },
    appendCategory_SUCCESS: (state, action) => {
        return state.set('formHasError', false);
    },
    appendCategory_FAIL: (state, action) => {
        return state.set('formHasError', true);
    },
    setCategoryFormValidate: (state, action) => {
        return state.set('formHasError', false);
    }
};
export default handleActions(reducersMap, initState);
