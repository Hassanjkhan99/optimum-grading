import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, finalize, map, Observable, of, switchMap} from "rxjs";
import {AuthModel} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  currentUserValue = ''
  isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor() { }

  // public methods
  login(email: string, password: string): Observable<boolean> {
    this.isLoadingSubject.next(true);
    return new BehaviorSubject(true);
  }
}
