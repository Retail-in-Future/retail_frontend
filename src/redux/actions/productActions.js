import { createApiAction, createNormalAction } from '../../reduxHelper/actionHelper';

export const getProductInfo = createApiAction('getProductInfo', {
    url: '/getProductInfo',
    method: 'get',
});

export const setProductPrice = createApiAction('setProductPrice', {
    url: '/setProductPrice',
    method: 'post',
});

export const appendStock = createApiAction('appendStock', {
    url: '/appendStock',
    method: 'post',
});

