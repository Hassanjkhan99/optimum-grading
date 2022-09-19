import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {Router, RouterLinkWithHref} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {UntilDestroy} from '@ngneat/until-destroy';
import {Store} from '@ngxs/store';
import {AuthActions} from '../../../core/NgXs/actions/auth.actions';
import Login = AuthActions.Login;

@UntilDestroy()
@Component({
  selector: 'optimum-grading-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLinkWithHref,
  ],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: [
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(50), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
      ]),
    ],
    password: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
    ],
  });
  hasError: boolean;
  returnUrl: string;
  isLoading: boolean;

  // private fields
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: Store
  ) {
    // redirect to home if already logged in
    if (this.store.snapshot().auth.user) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.store.subscribe((value) => {
      this.isLoading = value.UI.isLoading;
    });
  }

  submit() {
    this.hasError = false;
    this.store.dispatch(new Login(this.loginForm.value));
  }
}
