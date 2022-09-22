import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
  /**
   * Check matching password with confirm password
   * @param control AbstractControl
   */
  static MatchPassword(control: AbstractControl): void {
    const password = control.get('password1')?.value;
    const confirmPassword = control.get('password2')?.value;

    if (password !== confirmPassword) {
      control.get('password2')?.setErrors({ConfirmPassword: true});
    }
  }
}
