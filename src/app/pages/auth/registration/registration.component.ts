import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {Observable} from 'rxjs';
import {Router, RouterLink, RouterLinkWithHref} from '@angular/router';
import {ConfirmPasswordValidator} from './confirm-password.validator';
import {AuthService} from '../../../core/services/auth.service';
import {Select, Store} from '@ngxs/store';
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgTemplateOutlet,
} from '@angular/common';
import {UntilDestroy} from '@ngneat/until-destroy';
import {UIState} from '../../../core/NgXs/states/UI.state';
import {MatDialog} from '@angular/material/dialog';
import {TermsDialogueComponent} from './terms-dialogue/terms-dialogue.component';
import {AuthActions} from '../../../core/NgXs/actions/auth.actions';
import Register = AuthActions.Register;

@UntilDestroy()
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
    imports: [
        ReactiveFormsModule,
        NgTemplateOutlet,
        NgClass,
        AsyncPipe,
        CommonModule,
        RouterLinkWithHref,
        RouterLink,
    ],
  standalone: true,
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  hasError: boolean;

  @Select(UIState.isLoading) isLoading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private matDialogue: MatDialog
  ) {
    this.store.subscribe((next) => {
      console.log(next);
    });
    // redirect to home if already logged in
    /* if (this.authService.currentUserValue) {
       this.router.navigate(['/']);
     }*/
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registrationForm.controls;
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registrationForm = this.fb.group(
      {
        first_name: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        last_name: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        club_name: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        email: [
          'qwe@qwe.qwe',
          Validators.compose([
            Validators.required,
            Validators.email,
            Validators.minLength(3),
            Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
          ]),
        ],
        username: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ]),
        ],
        password1: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(100),
          ]),
        ],
        password2: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(100),
          ]),
        ],

        agree: [false, Validators.compose([Validators.required])],
        type: ['Head'],
      },
      {
        validator: ConfirmPasswordValidator.MatchPassword,
      }
    );
  }

  submit() {
    this.store.dispatch(new Register(this.registrationForm.value));
  }

  openTerms() {
    this.matDialogue.open(TermsDialogueComponent, {
      width: '1000px',
      height: '94vh',
    });
  }
}
