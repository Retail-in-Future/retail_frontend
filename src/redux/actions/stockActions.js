/* eslint-disable no-unused-vars */
import { createNormalAction, createApiAction, createSagaAction } from '../../reduxHelper/actionHelper';


const exportActions = {};
const appendAction = (typeCreator, actionName, options) => {
    exportActions[actionName] = typeCreator(actionName, options);
};

appendAction(createApiAction, 'getStockList', {
    url: 'http://localhost:9001/stocks/',
    method: 'get'
});

module.exports = exportActions;

