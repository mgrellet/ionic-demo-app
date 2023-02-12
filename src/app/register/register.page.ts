import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  })

  ngOnInit() {
  }

  register(){
    if(this.form.valid){
      const { email, password, confirmPassword} = this.form.getRawValue();
      const theEmail = email || '';
      const thePassword = password || '';
      this.auth.register(theEmail, thePassword)
        .then(user =>{
          this.router.navigate(["/home"]);
        })
        .catch(error => console.log(error));
    } else{
      this.form.markAllAsTouched();
    }
  }

}
