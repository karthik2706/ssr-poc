import fetch from "isomorphic-fetch";
import Constants from "../Constants";

import { isMobile } from "../Utility/device-helper";

// Actions
const FETCH_BODY_SUCCESS = "FETCH_BODY_SUCCESS";
const FETCH_BODY_FAILURE = "FETCH_BODY_FAILURE";
const CLEAR_BODY = "CLEAR_BODY";
const SET_DEVICE_DETAILS = "SET_DEVICE_DETAILS";

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_BODY_SUCCESS:
      const aemContentJson = action.payload;
      const aemContentRoot = aemContentJson[':items']['root'];
      const aemContentOrder = aemContentRoot[':itemsOrder'];  //gives the order of components
      const aemContentComponentData = aemContentRoot[':items']; //gives the content for components in order
      //imageandtextcarousel

      return { 
        ...state,
        body: {
          ...aemContentComponentData,
          componentOrder: aemContentOrder
        }
      };

    case SET_DEVICE_DETAILS:
      return {
        ...state,
        isMobile: action.payload.isMobile
      }
    case CLEAR_BODY:
      if (state.body) {
        delete state.body
      }
    default:
      return state;
  }
}

// Action Creators
const received = data => ({ type: FETCH_BODY_SUCCESS, payload: data });
const error = () => ({ type: FETCH_BODY_FAILURE });
export const clearBody = () => ({ type: CLEAR_BODY});

export const fetchBodyData = () => (dispatch, getState) => {
  return fetch(Constants.AEM_SERVER_HOST + Constants.BODY_PATH_URI)
    .then(response => response.json())
    .then(data => dispatch(received(data)))
    .catch(err => dispatch(error(err)));
};

export const detectDevice = () => (dispatch, getState) => {
  return dispatch({ type: SET_DEVICE_DETAILS, payload: {isMobile: isMobile()} });
};

if (typeof window !== "undefined" && window) {
  window.fetchBodyData = fetchBodyData;
}
