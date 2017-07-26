import { combineReducers } from 'redux';
import common from './commonReducers';
import modal from './modalReducers';
import product from './productReducers';
import category from './categoryReducers';
import stock from './stockReducers';

export default combineReducers({
    common,
    modal,
    product,
    category,
    stock
});
