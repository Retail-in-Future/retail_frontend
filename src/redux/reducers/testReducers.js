import { handleActions } from 'redux-actions';
import immutable from 'immutable';

const initState = immutable.fromJS({
  name: 'pengchuan',
});
export default handleActions({
  test: (state, action) => {
    console.log('this is test:\n', action);
    return state;
  },
  test_SUCCESS: (state, action) => {
    console.log('this is test_success:\n', action);
    return state;
  },
  test_FAIL: (state, action) => {
    console.log('this is test_fail:\n', action);
    return state;
  },
}, initState);
