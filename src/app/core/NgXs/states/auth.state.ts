import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {AuthActions} from '../actions/auth.actions';
import {LoginResponse, RegisterResponseError} from '../../interfaces/auth';
import {User} from '../../interfaces/user';
import {AuthService} from '../../services/auth.service';
import {tap} from 'rxjs';
import jwtDecode from 'jwt-decode';
import {UIActions} from '../actions/UI.actions';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import Login = AuthActions.Login;
import Loading = UIActions.Loading;
import ForgetPassWithEmail = AuthActions.ForgetPassWithEmail;
import Register = AuthActions.Register;

export class AuthStateModel {
  user: User | undefined;
  access: string | undefined;
  refresh: string | undefined;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    access: null,
    refresh: null,
  },
})
@Injectable()
export class AuthState {
  constructor(
    private authService: AuthService,
    private store: Store,
    private router: Router,
    private toasterService: ToastrService
  ) {
  }

  @Selector()
  static getUser(state: AuthStateModel) {
    return state.user;
  }

  @Action(AuthActions.Login)
  login(
    {getState, patchState}: StateContext<AuthStateModel>,
    {loginPayload}: Login
  ) {
    this.store.dispatch(new Loading(true));
    this.authService
      .login(loginPayload)
      .pipe(
        tap(
          (response: LoginResponse) => {
            // login successful if there's a jwt token in the response
            if (response.access) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              patchState({
                user: {...response.user},
                refresh: response.refresh,
                access: jwtDecode(response.access),
              });
              localStorage.setItem('currentUser', JSON.stringify(getState()));
            }
            this.store.dispatch(new Loading(false));
            this.router.navigateByUrl('/dashboard').then(() => {
              console.log('dash');
            });
          },
          (error) => {
            console.log(error);
            this.store.dispatch(new Loading(false));
          }
        )
      )
      .subscribe();
  }

  @Action(AuthActions.ForgetPassWithEmail)
  forgetPassWithEmail(
    {getState, patchState}: StateContext<AuthStateModel>,
    {email}: ForgetPassWithEmail
  ) {
    this.authService
      .resetWithEmail(email)
      .pipe(
        tap(
          (res) => {
            this.toasterService.success('Email Sent');
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
    {getState, patchState}: StateContext<AuthStateModel>,
    {payload}: Register
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
          }
        )
      )
      .subscribe();
  }
}
