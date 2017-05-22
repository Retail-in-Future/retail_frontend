/* eslint-disable no-console,no-unused-vars */
import lodash from 'lodash';
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    categories: [],
    appendCategoryInfo: {
        SKU: '',
        productName: '',
        productCode: '',
    },
    editCategoryInfo: {
        SKU: '',
        productName: '',
        productCode: '',
    },
    isRequesting: false,
    needRequestSKU: true,
    isEdit: false,
});
export default handleActions({
    setModalType: (state, action) => {
        const fieldObject = action.payload.INFO_DATA;
        return state.mergeDeep(fieldObject);
    },
    setEditCategoryInfo: (state, action) => {
        const tempState = state.toJS();
        tempState.editCategoryInfo = action.payload.INFO_DATA;
        return immutable.fromJS(tempState);
    },
    getCategories_SUCCESS: (state, action) => {
        const tempState = state.toJS();
        tempState.categories = action.payload.data;
        return immutable.fromJS(tempState);
    },
    getSKU: (state, action) => {
        const tempState = state.toJS();
        tempState.isRequesting = true;
        const { appendCategoryInfo } = tempState;
        appendCategoryInfo.SKU = '';
        appendCategoryInfo.productName = '';
        appendCategoryInfo.productCode = '';
        return immutable.fromJS(tempState);
    },
    getSKU_SUCCESS: (state, action) => {
        const tempState = state.toJS();
        tempState.isRequesting = false;
        tempState.needRequestSKU = false;
        tempState.appendCategoryInfo.SKU = action.payload.data.SKU;
        return immutable.fromJS(tempState);
    },
    appendCategory_SUCCESS: (state, action) => {
        const tempState = state.toJS();
        tempState.isRequesting = false;
        tempState.needRequestSKU = true;
        return immutable.fromJS(tempState);
    },
    editCategory: (state, action) => state,
    editCategory_SUCCESS: (state, action) => state,
}, initState);
