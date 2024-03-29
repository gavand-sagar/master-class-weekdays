import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SagarComponent } from './sagar/sagar.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { MyformComponent } from './myform/myform.component';
import { MyReactiveFormComponent } from './my-reactive-form/my-reactive-form.component';
import { MakeItyellowDirective } from './make-ityellow.directive';
import { MytoggleDirective } from './mytoggle.directive';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    SagarComponent,
    UserDetailComponent,
    SimpleComponentComponent,
    MyformComponent,
    MyReactiveFormComponent,
    MakeItyellowDirective,
    MytoggleDirective,
    PipeDemoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';

  state: boolean = false;

  data: string[] = ["Home", "About", "Gallery"]

  changeState() {
    this.state = !this.state
  }

  changeInParent(valueFromChild: string) {
    this.title = valueFromChild
  }
}
