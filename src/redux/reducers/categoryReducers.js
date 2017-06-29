/* eslint-disable no-unused-vars */
import lodash from 'lodash';
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    categories: [],
    isEdit: false,
    appendCategoryInfo: {
        SKU: '',
        productName: 'pengchuan',
        productCode: ''
    },
    editCategoryInfo: {
        SKU: '',
        productName: '',
        productCode: ''
    }
});
export default handleActions({
    setCategoryInfo: (state, action) => {
        const isEdit = state.get('isEdit');
        const tempPath = isEdit ? 'editCategoryInfo' : 'appendCategoryInfo';
        return state.mergeIn([tempPath], action.payload.INFO_DATA);
    },
    getCategories_SUCCESS: (state, action) => {
        return state.set('categories', action.payload.data);
    },
    getSKU_SUCCESS: (state, action) => {
        return state.setIn(
            ['appendCategoryInfo', 'SKU'],
            action.payload.data.SKU
        );
    }
}, initState);
