import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AuthActions} from '../actions/auth.actions';
import {
  LoginResponse,
  RegisterResponseError,
} from '../../interfaces/auth.interface';
import {User} from '../../interfaces/user.interface';
import {AuthService} from '../../services/auth.service';
import {tap} from 'rxjs';
import {UIActions} from '../actions/UI.actions';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {untilDestroyed} from '@ngneat/until-destroy';
import Login = AuthActions.Login;
import Loading = UIActions.Loading;
import ForgetPassWithEmail = AuthActions.ForgetPassWithEmail;
import Register = AuthActions.Register;
import Logout = AuthActions.Logout;
import RefreshToken = AuthActions.RefreshToken;

export class AuthStateModel {
  user: User | undefined;
  access: string | undefined;
  refresh: string | undefined;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    access: null,
    refresh: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
})
@Injectable()
export class AuthState {
  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router,
    private toasterService: ToastrService
  ) {}

  @Selector()
  static getUser(state: AuthStateModel) {
    return state.user;
  }

  @Selector()
  static getAccess(state: AuthStateModel) {
    return state.access;
  }

  @Selector()
  static getRefresh(state: AuthStateModel) {
    return state.refresh;
  }

  @Selector()
  static isLoggedIn(state: AuthStateModel) {
    return state.isLoggedIn;
  }

  @Selector()
  static isRefreshing(state: AuthStateModel) {
    return state.isRefreshing;
  }

  @Action(AuthActions.Login)
  login(
    { getState, patchState }: StateContext<AuthStateModel>,
    { loginPayload }: Login
  ) {
    this.authService
      .login(loginPayload)
      .pipe(
        tap(
          (response: LoginResponse) => {
            // login successful if there's a jwt token in the response
            this.setAuthState(response, patchState, getState);
          },
          (error) => {
            console.log(error);
          }
        )
      )
      .subscribe();
  }

  @Action(AuthActions.SetAuthStateFromLocalstorage)
  setAuthStateFromLocalstorage({
    getState,
    patchState,
  }: StateContext<AuthStateModel>) {
    const state = JSON.parse(localStorage.getItem('currentUser'));

    if (state) {
      this.setAuthState(state, patchState, getState);
      this.store.dispatch(new RefreshToken());
    }
  }

  @Action(AuthActions.ForgetPassWithEmail)
  forgetPassWithEmail(
    { getState, patchState }: StateContext<AuthStateModel>,
    { email }: ForgetPassWithEmail
  ) {
    this.authService
      .resetWithEmail(email)
      .pipe(
        tap(
          (res) => {
            this.toasterService.success('Email Sent');
            this.router.navigateByUrl('auth/login');
          },
          (error) => {
            error = error.error;
            this.toasterService.error(error);
          }
        )
      )
      .subscribe();
  }

  @Action(AuthActions.Register)
  register(
    { getState, patchState }: StateContext<AuthStateModel>,
    { payload }: Register
  ) {
    this.store.dispatch(new Loading(true));
    this.authService
      .register(payload)
      .pipe(
        tap(
          (res) => {
            this.toasterService.success('Registration Successful');
            this.toasterService.info('Please login now');
            this.store.dispatch(new Loading(false));
            this.router.navigateByUrl('auth/login');
          },
          (error) => {
            error = error.error as RegisterResponseError;

            for (const errorKey in error) {
              const arr: string[] = error[errorKey];
              arr.forEach((msg) => {
                this.toasterService.error(msg);
              });
            }
            this.store.dispatch(new Loading(false));
          },
          () => {
            this.store.dispatch(new Loading(false));
          }
        )
      )
      .subscribe();
  }

  @Action(AuthActions.Logout)
  logout({ getState, patchState }: StateContext<AuthStateModel>) {
    this.store.dispatch(new Loading(true));
    localStorage.removeItem('currentUser');
    patchState({
      user: null,
      refresh: null,
      access: null,
      isLoggedIn: false,
    });
    this.store.dispatch(new Loading(false));
    this.router.navigateByUrl('/auth/login');
  }

  @Action(AuthActions.RefreshToken)
  refreshToken({ getState, patchState }: StateContext<AuthStateModel>) {
    patchState({
      isRefreshing: true,
    });
    this.authService
      .refreshToken(getState().refresh)
      .pipe(
        untilDestroyed(this),
        tap(
          (response) => {
            localStorage.removeItem('currentUser');
            let res: LoginResponse = {user: getState().user, ...response};
            this.setAuthState(res, patchState, getState);
            console.log(response.access);
            return response.access;
          },
          (err) => {
            this.toasterService.error('cannot refresh token');
            this.store.dispatch(new Logout());
            console.error(err);
          },
          () => {
            patchState({
              isRefreshing: false,
            });
          }
        )
      )
      .subscribe();
  }

  setAuthState(response: LoginResponse, patchState, getState) {
    if (response.access) {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      patchState({
        user: { ...response.user },
        refresh: response.refresh,
        access: response.access,
        isLoggedIn: true,
      });
      localStorage.setItem('currentUser', JSON.stringify(getState()));
    }
  }
}
