import { createApiAction, createNormalAction } from '../../reduxHelper/actionHelper';

export const setModalType = createNormalAction('setModalType');

export const setEditCategoryInfo = createNormalAction('setEditCategoryInfo');

export const getSKU = createApiAction('getSKU', {
    url: '/getSKU',
    method: 'post',
});

export const getCategories = createApiAction('getCategories', {
    url: '/getCategories',
    method: 'get',
});

export const appendCategory = createApiAction('appendCategory', {
    url: '/appendCategory',
    method: 'post',
});

export const deleteCategory = createApiAction('deleteCategory', {
    url: '/deleteCategory',
    method: 'post',
});

export const editCategory = createApiAction('editCategory', {
    url: '/editCategory',
    method: 'post',
});
