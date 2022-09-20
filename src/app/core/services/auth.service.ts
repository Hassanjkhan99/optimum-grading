import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {main_url} from '../../../environments/environment';
import {Store} from '@ngxs/store';
import {LoginPayload} from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store) {
  }

  // public methods
  login(credentials: LoginPayload) {
    return this.http.post<any>(`${main_url}/api/token/`, credentials);
  }

  resetWithEmail(obj) {
    return this.http.post(`${main_url}/rest-auth/password/reset/`, obj);
  }

  resetPassword(obj){
    return this.http.post(`${main_url}/rest-auth/password/reset/confirm/`,obj)
  }
}
