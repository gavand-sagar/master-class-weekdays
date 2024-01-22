import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  standalone: true,
  imports: [],
  templateUrl: './simple-component.component.html',
  styleUrl: './simple-component.component.css'
})
export class SimpleComponentComponent {
  value: string = "Sagar";

  @Output()
  onValueChange: EventEmitter<string> = new EventEmitter();

  childMethod(){
    this.onValueChange.emit(this.value)
  }

}
