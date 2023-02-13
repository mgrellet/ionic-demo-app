import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService,
              private router: Router) { }

  form = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })

  ngOnInit() {
  }

  login(){
    if(this.form.valid){
      const { email, password} = this.form.getRawValue();
      const theEmail = email || '';
      const thePassword = password || '';
      this.auth.login(theEmail, thePassword)
        .then(user =>{
          this.router.navigate(["/home"]);
        })
        .catch(error => console.log(error));
    } else{
      this.form.markAllAsTouched();
    }
  }

}
