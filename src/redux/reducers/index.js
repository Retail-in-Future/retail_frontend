import { combineReducers } from 'redux';
import test from './testReducers';
import category from './categoryReducers';
import modal from './modalReducers';

export default combineReducers({
    test,
    category,
    modal,
});
