import { Component } from '@angular/core';
import { MyService, MyService2 } from './my-service.service';
@Component({
  selector: 'app-service-demo',
  standalone: true,
  imports: [],
  providers: [MyService, MyService2],
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css'
})
export class ServiceDemoComponent {

  // remove "new" keyword
  // service: MyService;
  // service2: MyService2;

  constructor(
    public service: MyService,
    public service2: MyService2
  ) {
    // this.service = serviceByMagic;
    // this.service2 = s2;
  }

  handleClick() {
    this.service.changeUsername();
    this.service2.changeEmail()
  }

}
