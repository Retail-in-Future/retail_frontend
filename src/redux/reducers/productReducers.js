/* eslint-disable no-unused-vars */
import lodash from 'lodash';
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    productList: [],
    productInfo: {
        productName: '华为自行车',
        productCode: 'code_123456789',
        SKU: 'SKU_123456789',
        sold: 84,
        stock: 34,
        price: 20000
    }
});
export default handleActions({
    getProductList_SUCCESS: (state, action) => {
        const tempState = state.toJS();
        tempState.productList = action.payload.data;
        return immutable.fromJS(tempState);
    },
    getProductInfo_SUCCESS: (state, action) => {
        const tempState = state.toJS();
        tempState.productInfo = action.payload.data;
        return immutable.fromJS(tempState);
    },
    setProductPrice_SUCCESS: (state, action) => {
        const tempState = state.toJS();
        tempState.productInfo.price = action.meta.INFO_DATA.price;
        return immutable.fromJS(tempState);
    },
    appendStock_SUCCESS: (state, action) => {
        const tempState = state.toJS();
        tempState.productInfo.stock = action.meta.INFO_DATA.stock;
        return immutable.fromJS(tempState);
    }
}, initState);
