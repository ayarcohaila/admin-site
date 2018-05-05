import { BaseService } from "./base.service";

export class AuthService extends BaseService {
  login(email, password) {
    return this._call("Sessions/Initialize", "POST", {
      EmailAddress: email,
      password
    });
  }

  logout() {
    // TODO implement with API request
  }
}

export const authService = new AuthService();
