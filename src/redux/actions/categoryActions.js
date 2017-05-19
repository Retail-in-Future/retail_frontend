import { createApiAction } from '../../reduxHelper/actionHelper';

export const addCategory = createApiAction('addCategory', {
    url: '/baidu',
    method: 'post',
});

export const deleteCategory = createApiAction('deleteCategory', {
    url: '/baidu',
    method: 'post',
});
