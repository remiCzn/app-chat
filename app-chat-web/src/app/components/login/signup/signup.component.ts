import { Component, Input } from '@angular/core';
import { LoginClientService } from '../login-client.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ModalService, ModalTypes } from '../../../services/modal.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login.component.css'],
})
export class SignupComponent {
  signInForm: FormGroup;

  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  cPasswordCtrl: FormControl;

  constructor(
    private client: LoginClientService,
    private fb: FormBuilder,
    private modal: ModalService
  ) {
    this.usernameCtrl = this.fb.control('', Validators.required);
    this.passwordCtrl = this.fb.control('', Validators.required);
    this.cPasswordCtrl = this.fb.control('', Validators.required);
    this.signInForm = this.fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl,
      cPassword: this.cPasswordCtrl,
    });
  }

  @Input() goToSignIn: () => void = () => {};

  async send() {
    const username = this.signInForm.controls['username'].value;
    const password = this.signInForm.controls['password'].value;
    const cpassword = this.signInForm.controls['cPassword'].value;
    if (password != cpassword) {
      return;
    }

    if (await this.client.register(username, password)) {
      this.modal.open('User created!', ModalTypes.VALID, () => {
        this.goToSignIn();
      });
    }
  }
}
