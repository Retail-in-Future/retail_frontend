import { createAction } from 'redux-actions';

// requestOption = {
//     url: 'http://www.baidu.com',
//     method: 'get'
// }
const actionCreatorGenerator = INFO_TYPE => (actionName, requestOption) => {
    const payloadCreator = parameters => ({
        INFO_TYPE,
        INFO_OPTION: requestOption,
        INFO_DATA: parameters
    });
    const metaCreator = parameters => parameters;
    return createAction(actionName, payloadCreator, metaCreator);
};

export const createNormalAction = actionCreatorGenerator('NORMAL');

export const createApiAction = actionCreatorGenerator('API');

export const createSagaAction = actionCreatorGenerator('SAGA');
