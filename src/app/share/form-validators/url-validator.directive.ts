import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appUrlValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: UrlValidatorDirective, multi: true}]
})
export class UrlValidatorDirective  implements Validator {

  @Input('appUrlValidator') 
  appUrlValidatorTest: string;

 
  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    let isValid  =  true;
    if(control.value) {
      isValid = (control.value as string).indexOf('http://') === 0;
    }
    
    return (isValid)? null: ({ appUrlValidator: 'not start with http://'})
  }
  registerOnValidatorChange?(fn: () => void): void {
    console.log('registerOnValidatorChange')

    //throw new Error("Method not implemented.");
  }

}
