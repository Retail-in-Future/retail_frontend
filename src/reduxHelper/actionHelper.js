import { createAction } from 'redux-actions';

// requestOption = {
//     url: 'http://www.baidu.com',
//     method: 'get'
// }
export const createApiAction = (actionName, requestOption) => {
    const payloadCreator = parameters => ({
        INFO_TYPE: 'API',
        INFO_OPTION: requestOption,
        INFO_DATA: parameters,
    });
    const metaCreator = parameters => parameters;
    return createAction(actionName, payloadCreator, metaCreator);
};

export const createNormalAction = (actionName) => {
    const payloadCreator = parameters => ({
        INFO_TYPE: 'NORMAL',
        INFO_DATA: parameters,
    });
    const metaCreator = parameters => parameters;
    return createAction(actionName, payloadCreator, metaCreator);
};
