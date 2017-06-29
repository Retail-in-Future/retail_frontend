/* eslint-disable no-unused-vars */
import { createNormalAction, createApiAction, createSagaAction } from '../../reduxHelper/actionHelper';


const exportActions = {};
const appendAction = (typeCreator, actionName, options) => {
    exportActions[actionName] = typeCreator(actionName, options);
};

appendAction(createApiAction, 'getCategories', {
    url: '/getCategories',
    method: 'get'
});

appendAction(createApiAction, 'getSKU', {
    url: '/getSKU',
    method: 'get'
});

appendAction(createApiAction, 'appendCategory', {
    url: '/appendCategory',
    method: 'get'
});

appendAction(createApiAction, 'updateCategory', {
    url: '/updateCategory',
    method: 'get'
});

appendAction(createApiAction, 'deleteCategory', {
    url: '/deleteCategory',
    method: 'get'
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

