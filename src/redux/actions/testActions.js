import { createApiAction } from '../../reduxHelper/actionHelper';

export const testAction = createApiAction('test', {
    url: '/test',
    method: 'get',
});

export const addCategory = createApiAction('addCategory', {
    url: '/baidu',
    method: 'post',
});
