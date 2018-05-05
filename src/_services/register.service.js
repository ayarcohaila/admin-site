import { BaseService } from "./base.service";

export class RegisterService extends BaseService {
  register(id, firstName, lastName, email, password) {
    return this._call("Users/Create", "POST", {
      Id: id,
      FirstName: firstName,
      LastName: lastName,
      EmailAddress: email,
      Password: password
    });
  }
}

export const registerService = new RegisterService();
