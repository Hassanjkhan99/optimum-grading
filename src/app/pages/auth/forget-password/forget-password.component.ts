import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Select, Store} from '@ngxs/store';
import {AuthActions} from '../../../core/NgXs/actions/auth.actions';
import {UIState} from '../../../core/NgXs/states/UI.state';
import {Observable} from 'rxjs';
import {AsyncPipe, CommonModule} from '@angular/common';
import ForgetPassWithEmail = AuthActions.ForgetPassWithEmail;

@Component({
  selector: 'optimum-grading-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, CommonModule],
})
export class ForgetPasswordComponent implements OnInit {
  errorMessage: string = '';
  email: FormControl = new FormControl('', [
    Validators.compose([
      Validators.required,
      Validators.email,
      Validators.minLength(8),
      Validators.maxLength(50), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
    ]),
  ]);
  @Select(UIState.isLoading) isLoading$: Observable<boolean>;

  constructor(private ToasterSer: ToastrService, private store: Store) {
  }

  ngOnInit(): void {
  }

  resetPass() {
    this.store.dispatch(new ForgetPassWithEmail(this.email.value));
  }
}
