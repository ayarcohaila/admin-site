import { notifications } from "../_helpers/notifications";
import { registerService } from "../_services";
import { USER_CONSTANTS } from "../_constants";

function registerRequest() {
  return { type: USER_CONSTANTS.REGISTER_REQUEST };
}
function registerSuccess(status) {
  return { type: USER_CONSTANTS.REGISTER_SUCCESS, status };
}
function registerFailure(error) {
  return { type: USER_CONSTANTS.REGISTER_FAILURE, error };
}

function register(id, firstName, lastName, email, password) {
  return dispatch => {
    dispatch(registerRequest());

    return registerService
      .register(id, firstName, lastName, email, password)
      .then(status => {
        return dispatch(registerSuccess(status));
      })
      .catch(error => {
        notifications.show(error.message, "error");
        return dispatch(registerFailure(error.message));
      });
  };
}

export const registerActions = {
  register,
  registerRequest,
  registerSuccess,
  registerFailure
};
