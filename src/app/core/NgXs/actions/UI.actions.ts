import {LoginPayload} from '../../interfaces/auth'


export namespace AuthActions{

export class Login{
  static type = '[AuthState] Login'
  constructor(public payload: LoginPayload) {
  }
}

}
