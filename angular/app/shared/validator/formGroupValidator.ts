import {FormControl, FormGroup, FormArray} from '@angular/forms';

export class FormGroupValidator{

    static validateGroup(formGroup: FormGroup){
        
        for(let key in formGroup.controls){
            //console.log(key)
            if(formGroup.controls.hasOwnProperty(key)){
                let control: FormControl = <FormControl>formGroup.controls[key];
                if(control.hasOwnProperty('controls')){
                    //Form Array Found
                    let groupArray: FormArray = <FormArray>formGroup.controls[key];
                    for(let k in groupArray.controls){
                        let arrControl: FormControl = <FormControl>groupArray.controls[k];
                        if(!arrControl.valid){
                            return {
                                validateGroup: false
                            }
                        }
                    }
                }else if(!control.valid){
                    return {
                        validateGroup: false
                    }
                }
            }
        }

        return {
            validateGroup: true
        }
    }

}
