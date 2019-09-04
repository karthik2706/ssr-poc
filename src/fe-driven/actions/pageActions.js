import { setUpBody } from './bodyActions';
import { setUpPromotions } from './promotionActions';


/**
 * @description Do all page level actions here
 * @param {Function} dispatch redux dispatch
 * @param {Function} getState redux getState
 * @returns {void}
 */
const triggerPageActions = () => (dispatch, getState) => {

    dispatch(setUpBody());

    dispatch(setUpPromotions());

};

export default triggerPageActions;
