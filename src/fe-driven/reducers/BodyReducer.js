import BC from '../constants/bodyConstants';
import { isMobile } from '../../shared/Utility/device-helper';

// This has to manipulated from window object
const initialState = {
};

/**
 * @param {Object} previousState previous state
 * @param {Object} action action
 * @returns {Object} updated state
 */
export default function bodyReducer(previousState = initialState, action) {
    switch (action.type) {
        case BC.SET_BODY: {
            const isMobileDevice = isMobile();
            return {
                ...previousState,
                ...action.payload,
                isMobile: isMobileDevice
            };
        }
        default:
            return previousState;
    }
}
