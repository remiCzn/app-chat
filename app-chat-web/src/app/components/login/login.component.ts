import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {io, Socket} from "socket.io-client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public password: string = '';
  public email: string = '';

  private ioClient: Socket<any,any>;

  constructor() {
    this.ioClient = io("localhost:8081");
  }

  ngOnInit(): void {
    this.ioClient.on('connect', () => {
      console.log("okok");
    })

    this.ioClient.emit('login', {a: 'aa', b: 'bb'})

    axios.get("http://localhost:8080").then((res) => {
      console.log(res.data);
    })
  }

  send() {
    axios.post("http://localhost:8080/login", {
      login: "aaa",
      password: "bbb"
    }).then((res) => {
      console.log(res);
    })
  }
}
