/* eslint-disable import/prefer-default-export */
import { createNormalAction } from '../../reduxHelper/actionHelper';

export const showError = createNormalAction('showError');
export const hideError = createNormalAction('hideError');
