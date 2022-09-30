import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Observable, tap, throwError} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {AuthState} from '../NgXs/states/auth.state';
import {AuthActions} from '../NgXs/actions/auth.actions';
import {main_url} from '../../../environments/environment';
import {ToastrService} from 'ngx-toastr';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {UIActions} from '../NgXs/actions/UI.actions';
import Logout = AuthActions.Logout;
import Loading = UIActions.Loading;

@UntilDestroy()
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  @Select(AuthState.getAccess) accessToken$: Observable<string>;
  @Select(AuthState.getRefresh) refreshToken$: Observable<string>;
  @Select(AuthState.isLoggedIn) isLoggedIn$: Observable<boolean>;
  @Select(AuthState.isRefreshing) isRefreshing$: Observable<boolean>;
  accessToken = '';
  refreshToken = '';
  isLoggedIn = false;
  isRefreshing = false;

  constructor(private store: Store, private toastrService: ToastrService) {
    this.accessToken$.pipe(untilDestroyed(this)).subscribe((token) => {
      this.accessToken = token;
    });
    this.refreshToken$.pipe(untilDestroyed(this)).subscribe((token) => {
      this.refreshToken = token;
    });
    this.isLoggedIn$.pipe(untilDestroyed(this)).subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
    this.isRefreshing$.pipe(untilDestroyed(this)).subscribe((refreshing) => {
      this.isRefreshing = refreshing;
    });
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.store.dispatch(new Loading(true));
    const isApiUrl = request.url.startsWith(main_url);
    //
    // console.log(localStorage.getItem('currentUser'));
    // console.log(this.isLoggedIn);
    // console.log({ isApiUrl });
    // console.log(request.url);
    // console.log(this.accessToken);
    if (
      this.isLoggedIn &&
      isApiUrl &&
      request.url != `${main_url}/api/token/refresh/` &&
      request.url != `${main_url}/api/token/`
    ) {
      request = this.addToken(request);
    }
    return next.handle(request).pipe(
      tap(
        () => {},
        (error: HttpErrorResponse) => {
          let errorMessage = '';
          let { status } = error;

          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = `Error Code: ${status}\nMessage: ${error.message}`;
          }

          if (status == 404) {
            this.toastrService.error(errorMessage);
          } else if (status == 0) {
            this.toastrService.warning(
              'There might be a problem. Please, try again.'
            );
          } else if (status == 500) {
            this.toastrService.warning('An unexpected error occurred.');
          } else if (
            error instanceof HttpErrorResponse &&
            (status === 401 || status === 403) &&
            request.url === `${main_url}/api/token/refresh/`
          ) {
            this.store.dispatch(new Logout());
            this.toastrService.warning(
              'Your session has expired due to inactivity. Please login again.'
            );
          } else if (error instanceof HttpErrorResponse && status === 403) {
            return this.handle403Error(request, next);
          } else if (status == 400 && 'non_field_errors' in error.error) {
            this.toastrService.warning(
              'Warning',
              error.error['non_field_errors']
            );
          } else if (status == 204) {
            this.toastrService.show('No Data Found');
          }

          return throwError(error);
        },
        () => {
          this.store.dispatch(new Loading(false));
        }
      )
    );
  }

  private handle403Error(request: HttpRequest<any>, next: HttpHandler) {
    this.store.dispatch(new AuthActions.RefreshToken()).subscribe({
      next: () => {
        request = this.addToken(request);
        return next.handle(request).subscribe();
      },
    });
  }

  private addToken(request: HttpRequest<any>) {
    console.log(this.accessToken);
    return request.clone({
      setHeaders: {
        Authorization: `Bearer  ${this.accessToken}`,
      },
    });
  }
}
