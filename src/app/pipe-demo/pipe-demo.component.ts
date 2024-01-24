import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NAIfZeroPipe } from '../naif-zero.pipe';
import { PureImpureDemoPipe } from '../pure-impure-demo.pipe';


class Person {
  username: string = "Amit"
  email: string = "amit@gmailc.om"
}

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule, NAIfZeroPipe, PureImpureDemoPipe],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {

  username: string = "Sagar"
  amount: number = 5356;

  date: Date = new Date();

  person: Person = new Person()

  getAmount(amount: number, prefix: string) {
    return prefix + amount.toString() + ".00"
  }

}
