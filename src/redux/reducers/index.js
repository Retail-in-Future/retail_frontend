import { combineReducers } from 'redux';
import common from './commonReducers';
import modal from './modalReducers';
import product from './productReducers';
import category from './categoryReducers';

export default combineReducers({
    common,
    modal,
    product,
    category
});
