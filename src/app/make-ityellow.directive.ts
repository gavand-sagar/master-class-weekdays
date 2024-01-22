import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMakeItyellow]',
  standalone: true
})
export class MakeItyellowDirective {

  count: number = 0;

  @HostBinding("class")
  anything: string = ""

  @HostListener('click', ['$event'])
  myClick(e: Event) {
    console.log(e)
    this.anything = "active"
  }


  constructor(private el: ElementRef) {
    let nativeEl: HTMLElement = this.el.nativeElement as HTMLElement;
    nativeEl.style.backgroundColor = 'red';
  }

}
