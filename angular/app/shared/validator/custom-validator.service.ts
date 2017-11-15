import {FormControl} from '@angular/forms';
//import any = jasmine.any;
import {Observable} from "rxjs/Observable";


interface ValidationResult{}

export class CustomValidator{

    static mailFormat(control: FormControl) {

        var EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    }
    
    static phoneFormat(control: FormControl){

        var PHONE_REGEXP =/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

        if (control.value != "" && (!PHONE_REGEXP.test(control.value))) {

            return { "invalidPhoneNumberFormat": true };
        }


       /* if(control.value.charAt(0) !=='+'){
            return null
        }else if(control.value.length <= 10 ||  control.value.length <= 11){
            return { "invalidPhoneNumberFormat": true };
        }else {
            return { "invalidPhoneNumberFormat": true };
        }
*/
        return null;
    }

    static urlFormat(control: FormControl){

        var URL_REGEXP = /(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if (control.value != "" && (control.value.length <= 5 || !URL_REGEXP.test(control.value))) {

            return { "invalidUrlFormat": true };
        }

        return null;
    }

}
