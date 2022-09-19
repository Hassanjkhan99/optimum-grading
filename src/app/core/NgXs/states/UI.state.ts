import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";
import {AuthActions} from "../actions/auth.actions";
import {LoginPayload} from "../../interfaces/auth";
import Login = AuthActions.Login;

export class AuthStateModel{
  user: string;
  accessToken: string;
}

@State<AuthStateModel>({
  name:'auth',
  defaults: {
    user: '',
    accessToken: ''
  }
})

@Injectable()
export class AuthState{

  @Selector()
  static getUser(state: AuthStateModel){
    return state.user
  }

  @Action(AuthActions.Login)
  login({getState, patchState}: StateContext<AuthStateModel>, {payload}: Login){
      const state = getState();
  }

}
