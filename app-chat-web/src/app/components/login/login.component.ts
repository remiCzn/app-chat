import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public password: string = '';
  public email: string = '';

  public mode: 'SignIn' | 'SignUp' = 'SignIn';

  constructor() {}

  ngOnInit(): void {}

  send() {}

  goToSignUp() {
    this.mode = 'SignUp';
    console.log('&&');
  }

  goToSignIn() {
    this.mode = 'SignIn';
    console.log('aaa');
  }

  read() {
    console.log(this.mode);
  }
}
