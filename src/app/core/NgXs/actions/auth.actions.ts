import {LoginPayload, RegisterPayload} from '../../interfaces/auth.interface';

export namespace AuthActions {
  export class Login {
    static type = '[AuthState] Login';

    constructor(public loginPayload: LoginPayload) {}
  }

  export class ForgetPassWithEmail {
    static type = '[AuthState] ForgetPassWithEmail';

    constructor(public email: string) {}
  }

  export class Register {
    static type = '[AuthState] Register';

    constructor(public payload: RegisterPayload) {}
  }

  export class Logout {
    static type = '[AuthState] Logout';
  }

  export class RefreshToken {
    static type = '[AuthState] RefreshToken';
  }

  export class SetAuthStateFromLocalstorage {
    static type = '[AuthState] SetAuthStateFromLocalstorage';
  }
}
