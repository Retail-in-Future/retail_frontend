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
    url: 'http://localhost:10002/stocks/',
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

// appendAction(createApiAction, 'updateProductStock', {
//     url: 'http://localhost:10002/stocks/',
//     method: 'put',
//     parseUrl: true
// });

appendAction(createApiAction, 'updateProductPrice', {
    url: 'http://localhost:10002/stocks/price/',
    method: 'put'
});

appendAction(createApiAction, 'appendProduct', {
    url: 'http://localhost:10002/stocks/rfid/',
    method: 'post'
});


appendAction(createNormalAction, 'updateProductStock');
module.exports = exportActions;
