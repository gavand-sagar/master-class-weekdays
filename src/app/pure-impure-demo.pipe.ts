import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureImpureDemo',
  standalone: true,
  pure:false
})
export class PureImpureDemoPipe implements PipeTransform {

  myInternalvalue:number = 0;

  constructor(){
    setInterval(()=>{
      this.myInternalvalue++;
    },1000)
  }

  transform(value: number): number {
    return this.myInternalvalue;
  }

}
