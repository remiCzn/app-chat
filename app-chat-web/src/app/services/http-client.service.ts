import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  private static URL_SERVER = 'http://localhost:8080';

  get(endpoint : string) {
    this.http.get(`${HttpClientService.URL_SERVER}${endpoint}`).subscribe((res) => {
      console.log(res);
    }, (error) => {
      console.log(error);
    });
  }

  post<T>(endpoint: string, body: T) {
    this.http.post(`${HttpClientService.URL_SERVER}${endpoint}`, body).subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }
}
