/* eslint-disable arrow-body-style */
import lodash from 'lodash';
import queryString from 'query-string';

const hostMain = 'http://localhost:9001';

const mixinUrl = (inputUrl, inputObject) => {
    if (!inputObject) {
        return inputUrl;
    }
    const hasMark = !!location.search;
    const parameters = queryString.stringify(inputObject);
    return `${inputUrl}${hasMark ? '&' : '?'}${parameters}`;
};

const mixinFetch = (requestOption, requestData) => {
    const tempOption = lodash.cloneDeep(requestOption);
    const { url } = tempOption;
    let tempUrl = `${hostMain}${url}`;
    switch (tempOption.method) {
        case 'get':
            tempUrl = mixinUrl(tempUrl, requestData);
            break;
        default:
            tempOption.body = JSON.stringify(requestData);
            break;
    }
    return fetch(tempUrl, tempOption);
};

export default (action) => {
    const actionName = action.type;
    const actionMeta = action.meta;
    const { INFO_DATA, INFO_OPTION } = action.payload;

    return mixinFetch(INFO_OPTION, INFO_DATA)
        .then((response) => {
            // 状态码判断
            if (response.status === 200) {
                return response.json();
            }
            throw (new Error('SERVICE_ERROR'));
        })
        .then((resolve) => {
            // 逻辑判断
            return resolve.result === 1
                ? {
                    type: `${actionName}_SUCCESS`,
                    payload: resolve,
                    meta: actionMeta
                }
                : {
                    type: `${actionName}_FAIL`,
                    payload: resolve,
                    meta: actionMeta
                };
        })
        .catch((error) => {
            console.warn('Promise catch:\n', error);
            return {
                type: 'showError',
                payload: error,
                meta: actionMeta
            };
        });
};
