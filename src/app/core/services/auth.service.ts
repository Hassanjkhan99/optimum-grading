import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {main_url} from '../../../environments/environment';
import {Store} from '@ngxs/store';
import {
  LoginPayload,
  LoginResponse,
  RefreshTokenResponse,
  RegisterPayload,
  RegisterResponse,
} from '../interfaces/auth.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store) {}

  // public methods
  login(credentials: LoginPayload): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${main_url}/api/token/`, credentials);
  }

  resetWithEmail(obj: string) {
    return this.http.post(`${main_url}/rest-auth/password/reset/`, {
      email: obj,
    });
  }

  resetPassword(obj) {
    return this.http.post(`${main_url}/rest-auth/password/reset/confirm/`, obj);
  }

  refreshToken(refresh): Observable<RefreshTokenResponse> {
    return this.http.post<any>(`${main_url}/api/token/refresh/`, { refresh });
  }

  register(payload: RegisterPayload): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${main_url}/rest-auth/registration/`,
      payload
    );
  }
}
