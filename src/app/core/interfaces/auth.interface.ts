import {User} from './user.interface';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  refresh: string;
  access: string;
  user: User;
}

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  club_name: string;
  username: string;
  email: string;
  type: string;
  password1: string;
  password2: string;
  agree: boolean;
}

export interface RegisterResponse {
  key: string;
  user: User;
}

export interface RegisterResponseError {
  email: string[];
  username: string[];
  password1: string[];
}

export interface RefreshTokenResponse {
  access: string;
  refresh: string;
}
