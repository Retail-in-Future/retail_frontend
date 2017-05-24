import { createApiAction, createNormalAction } from '../../reduxHelper/actionHelper';

export const fetchTest = createApiAction('fetchTest', {
    url: '/fetchTest',
    method: 'get',
});

export const fetchTest2 = createApiAction('fetchTest2', {
    url: '/fetchTest2',
    method: 'get',
});
