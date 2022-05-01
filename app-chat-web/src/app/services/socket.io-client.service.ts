import { Injectable } from '@angular/core';
import {Socket, io} from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketIoClientService {

  private SOCKET_URL = "http://localhost:8081";
  private ioClient : Socket<any, any>;

  constructor() {
    this.ioClient = io(this.SOCKET_URL);
  }

  emit<T>(event: string, data: T) {
    this.ioClient.emit(event, data);
  }
}
