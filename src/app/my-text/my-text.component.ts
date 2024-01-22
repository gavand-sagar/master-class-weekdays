import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-text',
  standalone: true,
  imports: [],
  templateUrl: './my-text.component.html',
  styleUrl: './my-text.component.css'
})
export class MyTextComponent {
  @Input()
  heading:string = "";
}
