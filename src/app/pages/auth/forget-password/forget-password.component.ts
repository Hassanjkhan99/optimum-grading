import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SessionService } from '../state/session.service';

@Component({
  selector: 'kt-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(
    private SessionSer:SessionService,
    private ToasterSer:ToastrService,
    private ngxService: NgxUiLoaderService

  ) { }
  email:FormControl
  ngOnInit(): void {
    this.email=new FormControl('')
  }
  errMsg:any
  reset_pass(){
    let obj={
      email:this.email.value
    }
    // console.log("obj is",obj)
    this.ngxService.startBackground()

    this.SessionSer.reset_withemail(obj).subscribe(
      (res)=>{
        this.email.reset();
        this.ngxService.stopBackground()

        this.ToasterSer.success("Email Sent")
      },(error)=>{
        this.ngxService.stopBackground()
        error=error.error
        this.errMsg = error
        // console.log("Error is",this.errMsg)
        this.ToasterSer.error(this.errMsg)
        // Object.keys(error).forEach(prop => {
        //   const formControl = this.registerForm.get(prop);
        //   if (formControl) {
        //     // activate the error message
        //     console.log('Register comp Error',error)
        //     this.ToastSer.error(error[prop][0])
        //     formControl.setErrors({
        //       serverError: error[prop]
        //     });
        //   }
    
        // });
        // this.registerForm.markAllAsTouched()
        
    
      }
    )

  }

}
