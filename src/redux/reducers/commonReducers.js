/* eslint-disable no-unused-vars */
import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    errorTips: {
        visible: false,
        message: ''
    }
});
export default handleActions({
    showError: (state, action) => {
        return state.setIn(['errorTips', 'visible'], true)
            .setIn(['errorTips', 'message'], action.payload);
    },
    hideError: (state, action) => {
        return state.setIn(['errorTips', 'visible'], false)
            .setIn(['errorTips', 'message'], '');
    }
}, initState);
