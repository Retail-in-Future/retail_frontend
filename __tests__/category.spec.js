import immutable, { isImmutable, Map } from 'immutable';
import React from 'react';
import configStore from 'redux-mock-store';
import { mount, render, shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Provider } from 'react-redux';

import actions from 'src/redux/actions/categoryActions';
import { reducersMap } from 'src/redux/reducers/categoryReducers';

const middlewares = [];
const storeCreator = configStore(middlewares);

describe('Category actions.', () => {
    // tests for actions
    test('Action: getCategories.', () => {
        const result = {
            type: 'getCategories',
            payload: {
                INFO_TYPE: 'API',
                INFO_OPTION: { url: '/getCategories', method: 'get' },
                INFO_DATA: {
                    pageNumber: 2
                }
            },
            meta: {
                pageNumber: 2
            }
        };
        expect(actions.getCategories({ pageNumber: 2 })).toEqual(result);
    });

    test('Action: getSKU.', () => {
        const result = {
            type: 'getSKU',
            payload: {
                INFO_TYPE: 'API',
                INFO_OPTION: { url: '/getSKU', method: 'get' },
                INFO_DATA: undefined
            },
            meta: undefined
        };
        expect(actions.getSKU()).toEqual(result);
    });

    test('Action: appendCategory.', () => {
        const requestData = {
            productName: 'orange',
            productCode: 'code_001',
            sku: 'sku_id_001'
        };
        const result = {
            type: 'appendCategory',
            payload: {
                INFO_TYPE: 'API',
                INFO_OPTION: { url: '/appendCategory', method: 'get' },
                INFO_DATA: requestData
            },
            meta: requestData
        };
        expect(actions.appendCategory(requestData)).toEqual(result);
    });

    test('Action: updateCategory.', () => {
        const requestData = {
            productName: 'orange',
            productCode: 'code_001',
            sku: 'sku_id_001'
        };
        const result = {
            type: 'updateCategory',
            payload: {
                INFO_TYPE: 'API',
                INFO_OPTION: { url: '/updateCategory', method: 'get' },
                INFO_DATA: requestData
            },
            meta: requestData
        };
        expect(actions.updateCategory(requestData)).toEqual(result);
    });

    test('Action: deleteCategory.', () => {
        const requestData = {
            productName: 'orange',
            productCode: 'code_001',
            sku: 'sku_id_001'
        };
        const result = {
            type: 'deleteCategory',
            payload: {
                INFO_TYPE: 'API',
                INFO_OPTION: { url: '/deleteCategory', method: 'get' },
                INFO_DATA: requestData
            },
            meta: requestData
        };
        expect(actions.deleteCategory(requestData)).toEqual(result);
    });
});

// tests for reducers
describe('Category reducers.', () => {
    test('Reducer: getCategories_SUCCESS.', () => {
        const responseData = [{
            productName: 'orange',
            productCode: 'code_001',
            sku: 'sku_id_001'
        }];
        const responseAction = {
            payload: {
                result: 1,
                data: responseData
            }
        };
        const states = new Map({
            categories: []
        });
        const result = new Map({
            categories: responseData
        });
        expect(reducersMap.getCategories_SUCCESS(states, responseAction)).toEqual(result);
    });
});