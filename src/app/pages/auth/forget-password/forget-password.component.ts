import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Store} from '@ngxs/store';
import {AuthActions} from '../../../core/NgXs/actions/auth.actions';
import ForgetPassWithEmail = AuthActions.ForgetPassWithEmail;

@Component({
  selector: 'optimum-grading-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class ForgetPasswordComponent implements OnInit {
  errorMessage: string = '';
  email: FormControl = new FormControl('');

  constructor(private ToasterSer: ToastrService, private store: Store) {
  }

  ngOnInit(): void {
  }

  resetPass() {
    this.store.dispatch(new ForgetPassWithEmail(this.email.value));
  }
}
