// Actions
const SET_SERVER_STATE = "SET_SERVER_STATE";
const CLEAR_SERVER_STATE = "CLEAR_SERVER_STATE";

// Reducer
export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_SERVER_STATE:
        return { ...state, server: action.payload };
    case CLEAR_SERVER_STATE:
        return { ...state, server: {} };
    default:
      return state;
  }
}

// Action Creators
const setServerState = data => ({ type: SET_SERVER_REQ_URL, payload: data });
const clearServerState = () => ({ type: CLEAR_SERVER_STATE });