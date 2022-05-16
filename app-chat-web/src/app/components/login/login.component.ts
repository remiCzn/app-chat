import { Component, OnInit } from '@angular/core';
import { JwtTokenService } from '../../services/jwt-token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public password: string = '';
  public email: string = '';

  public mode: 'SignIn' | 'SignUp' = 'SignIn';

  constructor(private jwtService: JwtTokenService, private router: Router) {}

  ngOnInit(): void {
    if (this.jwtService.getToken() && !this.jwtService.isTokenExpired()) {
      this.router.navigate(['home']);
    }
  }

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
