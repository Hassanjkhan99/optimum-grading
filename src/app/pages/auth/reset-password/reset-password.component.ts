import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AuthService} from "../../../core/services/auth.service";
import {MatFormFieldModule} from "@angular/material/form-field";


@Component({
  selector: 'optimum-grading-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule
  ]
})
export class ResetPasswordComponent implements OnInit {
  uid:any
  token:any
  rest_pass:FormGroup
  // password:FormControl
  // confirmpassword:FormControl
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private ToasterService:ToastrService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.uid=params.get('uid')
      this.token=params.get('token')

      })
      this.rest_pass=new FormGroup({
        new_password1:new FormControl(''),
        new_password2:new FormControl(''),
        uid:new FormControl(this.uid),
        token:new FormControl(this.token)
      // this.password=new FormControl('')
      // this.confirmpassword=new FormControl('')



    })

  }
  errorMessage:any
  resetpass(){

    this.authService.resetPassword(this.rest_pass.value).subscribe(
      (res)=>{
        // console.log("Password Change Sucessfully")
        this.ToasterService.success("Password Change Sucessfully")
        this.rest_pass.reset();
        this.router.navigateByUrl('authentication/login')

      },(error)=>{
        error=error.error
        this.errorMessage = error
        // console.log("Error is",this.errMsg)
        Object.keys(error).forEach(prop => {
          const formControl = this.rest_pass.get(prop);
          if (formControl) {
            // activate the error message
            // console.log('reset password comp Error',error)
            this.ToasterService.error(error[prop][0])
            formControl.setErrors({
              serverError: error[prop]
            });
          }

        });
        this.rest_pass.markAllAsTouched()


      })
    // )

  }
}
