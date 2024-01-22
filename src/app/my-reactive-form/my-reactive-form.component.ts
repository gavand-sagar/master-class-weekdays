import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './my-reactive-form.component.html',
  styleUrl: './my-reactive-form.component.css'
})
export class MyReactiveFormComponent {

  private fb: FormBuilder;
  formObj: FormGroup;
  //how we will get this value in the constructor argument
  //magic of DI- Dependency injection
  constructor(fb: FormBuilder) {
    this.fb = fb;
    this.formObj = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      city: [""],
      dob: [""]
    });

    this.formObj.get("username")?.valueChanges
      .subscribe(x => {
          console.log("USERNAME CHANGED",x)
      });

      // Validation
      // Form to JSON Obj
      // Listen to Particular field change
      /// Async Validation //
  };

  submit() {
    console.log(this.formObj.value)
  }

}
