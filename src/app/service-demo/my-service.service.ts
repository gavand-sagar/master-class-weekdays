import { Injectable } from "@angular/core";


@Injectable()
export class MyService2{
  email:string = "gavand.sagar.s@gmail.com";
  changeEmail(){
    this.email = "mitesh@gmail.com"
  }
}




@Injectable()
export class MyService {
  username: string = "Sagar";

  changeUsername(){
    this.username = "Mitesh"
  }
}






