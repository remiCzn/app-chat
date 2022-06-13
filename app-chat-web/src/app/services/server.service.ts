import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { GetServersApi } from 'app-chat-model';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  public currentServer: number = 1;

  constructor(private httpClient: HttpClientService) {}

  public getAllServers() {
    return this.httpClient
      .get('/server/all')
      .then((res: any | GetServersApi) => {
        return res.servers;
      });
  }
}
