import PC from '../constants/promotionConstants';

// This has to manipulated from window object
const initialState = {};

/**
 * @param {Object} previousState previous state
 * @param {Object} action action
 * @returns {Object} updated state
 */
export default function PromotionReducer(previousState = initialState, action) {
    switch (action.type) {
        case PC.SET_PROMOTIONS: {
            return {
                ...previousState,
                ...action.payload
            };
        }
        case PC.PROMO_LEFT: {
            return {
              ...previousState,
              currentPromotion: previousState.promotions[action.payload - 1].id
            }
          }
          case PC.PROMO_ENTERED: {
            return {
              ...previousState,
              currentPromotion: previousState.promotions[action.payload].id
            }
          }
        default:
            return previousState;
    }
}
