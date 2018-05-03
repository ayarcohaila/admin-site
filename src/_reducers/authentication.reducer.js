import { USER_CONSTANTS } from "../_constants";

const initialState = {
  loading: false,
  error: null,
  token: null
};

export function authentication(state = initialState, payload) {
  switch (payload.type) {
    case USER_CONSTANTS.LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case USER_CONSTANTS.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload.token
      };
    case USER_CONSTANTS.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error
      };
    case USER_CONSTANTS.LOGOUT:
      return {
        ...state,
        token: null
      };
    default:
  }

  return state;
}
