/* eslint-disable no-console,no-unused-vars */
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    modalVisible: false,
});
export default handleActions({
    showModal: (state, action) => {
        const tempState = state.toJS();
        tempState.modalVisible = true;
        return immutable.fromJS(tempState);
    },
    hideModal: (state, action) => {
        const tempState = state.toJS();
        tempState.modalVisible = false;
        return immutable.fromJS(tempState);
    },
}, initState);
