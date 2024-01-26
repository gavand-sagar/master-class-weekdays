import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

interface MyType{
  fact: string,
  length: number
}

@Component({
  selector: 'app-api-demo',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './api-demo.component.html',
  styleUrl: './api-demo.component.css'
})
export class ApiDemoComponent {

  fact: string = "";

  categories: string[] = ["Apple", "banaa"];

  constructor(public http: HttpClient) {

  }

  loadCategories() {
    let url: string = "https://dummyjson.com/products/categories";

    this.http.get<string[]>(url)
      .subscribe(response => {
        this.categories = response
      })

  }

  handleClick() {
    this.http.get<MyType>("https://catfact.ninja/fact")
      .subscribe(response => {
        // here we will get the data in future

        this.fact = response.fact
      })
  }

}
