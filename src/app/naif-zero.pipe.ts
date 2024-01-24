import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nAIfZero',
  standalone: true,
})
export class NAIfZeroPipe implements PipeTransform {

  transform(value: number, firstInput?: string): string {

    let str:string = "NA"
    if(firstInput){
      str = firstInput;
    }
    if (value == 0) {
      return str
    } else {
      return value.toString();
    }

  }

}
