import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
    visible: false
});
export default handleActions({
    showModal: (state) => {
        const tempState = state.toJS();
        tempState.visible = true;
        return immutable.fromJS(tempState);
    },
    hideModal: (state) => {
        const tempState = state.toJS();
        tempState.visible = false;
        return immutable.fromJS(tempState);
    }
}, initState);
