import fetchHelper from './fetchHelper';

const isApiAction = value => value.payload.INFO_TYPE === 'API';

export default ({ dispatch }) => next => (action) => {
  if (!isApiAction(action)) {
    return next(action);
  }
  const actionName = action.type;
  const actionMeta = action.meta;
  const { INFO_DATA, INFO_OPTION } = action.payload;
  action.payload = fetchHelper(INFO_OPTION, INFO_DATA)
                .then((response) => {
                    // 状态码判断
                  if (response.status === 200) {
                    return response.json();
                  }
                  dispatch({
                    type: 'SERVICE_ERROR',
                    payload: actionMeta,
                    meta: actionMeta,
                  });
                })
                .then((resolve) => {
                  console.info('Promise resolve:\n', resolve);
                  dispatch({
                    type: `${actionName}_SUCCESS`,
                    payload: resolve,
                    meta: actionMeta,
                  });
                }, (reject) => {
                  console.info('Promise reject:\n', reject);
                  dispatch({
                    type: `${actionName}_FAIL`,
                    payload: reject,
                    meta: actionMeta,
                  });
                })
                .catch((error) => {
                  console.warn('Promise catch:\n', error);
                });
  return next(action);
};
