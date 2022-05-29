import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  constructor(private httpClient: HttpClientService) {}

  public getAllServers() {
    return this.httpClient.get('/server/all').then((res: any) => {
      return res.servers;
    });
  }
}
