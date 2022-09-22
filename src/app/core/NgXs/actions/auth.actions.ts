import {LoginPayload, RegisterPayload} from '../../interfaces/auth';

export namespace AuthActions {
  export class Login {
    static type = '[AuthState] Login';

    constructor(public loginPayload: LoginPayload) {
    }
  }

  export class ForgetPassWithEmail {
    static type = '[AuthState] ForgetPassWithEmail';

    constructor(public email: string) {
    }
  }

  export class Register {
    static type = '[AuthState] Register';

    constructor(public payload: RegisterPayload) {
    }
  }
}
