import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {AuthState} from '../NgXs/states/auth.state';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RedirectGuard {
  @Select(AuthState.isLoggedIn) isLoggedIn$: Observable<boolean>;
  isLoggedIn: boolean = false;

  constructor(private store: Store, private router: Router) {
    this.isLoggedIn$.subscribe((value) => {
      this.isLoggedIn = value;
    });
  }

  canActivate(): boolean {
    if (this.isLoggedIn) {
      // logged in so return true
      this.router.navigateByUrl('');
      return false;
    }

    return true;
  }
}
