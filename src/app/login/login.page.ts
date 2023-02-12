import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })

  ngOnInit() {
  }

  login(){
    if(this.form.valid){
      const { email, password} = this.form.getRawValue();
      console.log(email, password);
    } else{
      this.form.markAllAsTouched();
    }
  }

}
