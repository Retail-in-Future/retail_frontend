import { combineReducers } from 'redux';
import category from './categoryReducers';
import modal from './modalReducers';
import product from './productReducers';

export default combineReducers({
    category,
    modal,
    product
});
