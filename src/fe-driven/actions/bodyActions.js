import BC from '../constants/bodyConstants';
import * as objectPath from 'object-path';

/**
 * @deprecated
 * @description get on product selected/focus
 * @param {number} index redux dispatch
 * @returns {void}
 */
export const setUpBody = () => (dispatch) => {
    const body = objectPath.get(window, 'kohls', {})
    const payload = { body };

    dispatch({
        type: BC.SET_BODY,
        payload
    });
};
