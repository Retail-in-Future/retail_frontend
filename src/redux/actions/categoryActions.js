/* eslint-disable no-unused-vars */
import { createNormalAction, createApiAction, createSagaAction } from '../../reduxHelper/actionHelper';


const exportActions = {};
const appendAction = (typeCreator, actionName, options) => {
    exportActions[actionName] = typeCreator(actionName, options);
};

appendAction(createApiAction, 'getCategories', {
    url: 'http://localhost:9002/products/',
    method: 'get'
});

appendAction(createApiAction, 'getSKU', {
    url: 'http://localhost:9002/skus/',
    method: 'get'
});

appendAction(createApiAction, 'appendCategory', {
    url: 'http://localhost:9002/products/',
    method: 'post'
});

appendAction(createApiAction, 'updateCategory', {
    url: 'http://localhost:9002/products/',
    method: 'put'
});

appendAction(createApiAction, 'deleteCategory', {
    url: 'http://localhost:9002/products/',
    method: 'delete'
});

module.exports = exportActions;

// export const getSKU = createApiAction('getSKU', {
//     url: '/getSKU',
//     method: 'get',
// });
//
// export const getCategories = createSagaAction('getCategories', {
//     url: '/getCategories',
//     method: 'get',
// });
//
// export const appendCategory = createApiAction('appendCategory', {
//     url: '/appendCategory',
//     method: 'post',
// });

