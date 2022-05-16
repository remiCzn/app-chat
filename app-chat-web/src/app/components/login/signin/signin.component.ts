import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginClientService } from '../login-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../login.component.css'],
})
export class SigninComponent implements OnInit {
  LoginForm: FormGroup;

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(
    private modal: ModalService,
    private fb: FormBuilder,
    private client: LoginClientService,
    private router: Router
  ) {
    this.usernameCtrl = this.fb.control('', Validators.required);
    this.passwordCtrl = this.fb.control('', Validators.required);
    this.LoginForm = this.fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl,
    });
  }

  @Input() goToSignUp: () => void = () => {};

  ngOnInit(): void {}

  async send() {
    const username = this.LoginForm.controls['username'].value;
    const password = this.LoginForm.controls['password'].value;
    const loggedIn = await this.client.login(username, password);
    console.log(loggedIn);
    if (loggedIn) {
      console.log('ok');
      this.router.navigate(['home']);
    }
  }
}
