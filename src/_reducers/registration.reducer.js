import { USER_CONSTANTS } from "../_constants";

const initialState = {
  loading: false,
  status: null
};

export function registration(state = initialState, payload) {
  switch (payload.type) {
    case USER_CONSTANTS.REGISTER_REQUEST:
      return {
        ...state,
        status: null,
        loading: true
      };
    case USER_CONSTANTS.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        status: payload.status
      };
    case USER_CONSTANTS.REGISTER_FAILURE:
      return {
        ...state,
        loading: false,
        status: payload.error
      };
    default:
  }

  return state;
}
