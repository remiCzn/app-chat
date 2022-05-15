import { Component, Input, OnInit } from '@angular/core';
import { ModalService, ModalTypes } from '../../../services/modal.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../login.component.css'],
})
export class SigninComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private modal: ModalService) {}

  @Input() goToSignUp: () => void = () => {};

  ngOnInit(): void {}

  send() {
    this.modal.open("Can't Login", ModalTypes.ERROR, () => {
      console.log('okok');
    });
  }
}
