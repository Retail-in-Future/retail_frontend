/* eslint-disable no-unused-vars */
import { createNormalAction, createApiAction, createSagaAction } from '../../reduxHelper/actionHelper';


const exportActions = {};
const appendAction = (typeCreator, actionName, options) => {
    exportActions[actionName] = typeCreator(actionName, options);
};

appendAction(createApiAction, 'getProductList', {
    url: '/getProductList',
    method: 'get'
});

appendAction(createApiAction, 'getProductInfo', {
    url: 'http://54.255.220.116:10002/stocks/',
    method: 'get'
});

appendAction(createApiAction, 'setProductPrice', {
    url: '/setProductPrice',
    method: 'get'
});

appendAction(createApiAction, 'appendStock', {
    url: '/appendStock',
    method: 'get'
});

appendAction(createNormalAction, 'updateProductStock');

module.exports = exportActions;
