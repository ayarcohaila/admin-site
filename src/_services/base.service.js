const BASE_URL = "https://ci-ezadminapi.ezlandlordforms.com";

export class BaseService {
  _call(url, method = "GET", body) {
    const requestOptions = {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    };

    return fetch(`${BASE_URL}/Sessions/Initialize`, requestOptions)
      .then(response => {
        return response.json().then(json => ({ json, response }));
      })
      .then(response => {
        if (!response.response.ok) {
          if (response.json) {
            throw new Error(response.json.Message || "Unknown Error");
          }

          throw new Error(response.response.statusText || "Unknown Status");
        }

        return response.json;
      });
  }
}
