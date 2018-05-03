import { authHeader } from "../_helpers";
const BASE_URL = "https://ci-ezadminapi.ezlandlordforms.com/";

export const userService = {
  login,
  logout,
  getAll
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      EmailAddress: email,
      Password: password,
      ShouldExpire: true
    })
  };

  return fetch(
    "https://ci-ezadminapi.ezlandlordforms.com/Sessions/Initialize",
    requestOptions
  )
    .then(response => ({
      ...response,
      jsonData: response.json()
    }))
    .then(response => {
      console.log(response);
      console.log(response.json());
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }

      console.log(response);
      return response.json();
    })
    .then(user => {
      // login successful if there's a jwt token in the response.
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader()
  };

  return fetch(
    "https://ci-ezadminapi.ezlandlordforms.com/Users/GetAll",
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}
