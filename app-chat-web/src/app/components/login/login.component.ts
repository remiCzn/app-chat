import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../../services/http-client.service";
import {SocketIoClientService} from "../../services/socket.io-client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public password: string = '';
  public email: string = '';

  constructor(private httpClient: HttpClientService, private ioClient: SocketIoClientService) {
  }

  ngOnInit(): void {
    this.ioClient.emit('login', {a: 'aa', b: 'bb'})

    this.httpClient.get("/");
  }

  send() {
    this.httpClient.post<{login: string, password: string}>("/login", {login: "aaaaaa", password: "aaaaa"})

  }
}
