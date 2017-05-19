/* eslint-disable no-console */
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    categories: [{
        key: '1',
        productName: '华为自行车',
        SKU: '0000001',
        productCode: 'ASDFGHJKL',
    }, {
        key: '2',
        productName: '华为自行车',
        SKU: '0000002',
        productCode: 'ASDFGHJKL',
    }, {
        key: '3',
        productName: '华为自行车',
        SKU: '0000003',
        productCode: 'ASDFGHJKL',
    }],
});
export default handleActions({
    getCategories: (state, action) => {
        console.log('this is test:\n', action);
        return state;
    },
    getCategories_SUCCESS: (state, action) => {
        console.log('this is test_success:\n', action);
        return state;
    },
    getCategories_FAIL: (state, action) => {
        console.log('this is test_fail:\n', action);
        return state;
    },
}, initState);
