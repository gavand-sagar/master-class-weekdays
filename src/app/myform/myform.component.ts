import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-myform',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './myform.component.html',
  styleUrl: './myform.component.css'
})
export class MyformComponent {

  userName: string = "";
  password: string = "";


  submit() {
    let obj = {
      username: this.userName,
      password: this.password
    }
    console.log(obj)
  }

}
