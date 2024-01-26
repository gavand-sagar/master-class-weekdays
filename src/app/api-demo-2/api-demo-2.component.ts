import { Component } from '@angular/core';
import { Api2Service } from '../api2.service';

@Component({
  selector: 'app-api-demo-2',
  standalone: true,
  imports: [],
  providers: [Api2Service],
  templateUrl: './api-demo-2.component.html',
  styleUrl: './api-demo-2.component.css'
})
export class ApiDemo2Component {

  constructor(public service: Api2Service) {

  }
}
