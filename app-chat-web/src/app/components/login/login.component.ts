import { Component, OnInit } from '@angular/core';
import {ApiDescriptor} from "app-chat-model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public password: string = '';
  public email: string = '';

  constructor() {
    const a : ApiDescriptor = new ApiDescriptor();
    a.version = "1.0.0";
    console.log(a.getVersion());
  }

  ngOnInit(): void {}
}
