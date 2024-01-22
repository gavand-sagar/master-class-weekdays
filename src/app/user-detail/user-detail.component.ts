import { Component, Input } from '@angular/core';
import { MyTextComponent } from '../my-text/my-text.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MyTextComponent],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

 @Input()
 heading:string = "";

 @Input()
 body:string = "";


 getHeadingValue(){
  return this.heading.charAt(0);
 }

}
