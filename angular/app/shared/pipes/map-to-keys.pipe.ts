import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'mapToKeys'})
export class MapToKeysPipe implements PipeTransform{
    transform(value, args: string[]): any {
        let keys = [];
        //console.log(value)
        for (let key in value){
            //console.log(key)
            //console.log(value[key])
            keys.push({key: key, value: value[key]});
        }
        return keys;
    }
}