import { notifications } from "../_helpers/notifications";
import { authService } from "../_services";
import { USER_CONSTANTS } from "../_constants";

function loginRequest() {
  return { type: USER_CONSTANTS.LOGIN_REQUEST };
}
function loginSuccess(token) {
  return { type: USER_CONSTANTS.LOGIN_SUCCESS, token };
}
function loginFailure(error) {
  return { type: USER_CONSTANTS.LOGIN_FAILURE, error };
}

function login(email, password) {
  return dispatch => {
    dispatch(loginRequest());

    return authService
      .login(email, password)
      .then(token => {
        return dispatch(loginSuccess(token));
      })
      .catch(error => {
        notifications.show(error.message, "error");
        return dispatch(loginFailure(error.message));
      });
  };
}

function logout() {
  authService.logout();
  return { type: USER_CONSTANTS.LOGOUT };
}

export const authActions = {
  login,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout
};
