import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private static URL_SERVER = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  get(endpoint: string) {
    this.http.get(`${HttpClientService.URL_SERVER}${endpoint}`).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  post<T>(endpoint: string, body: T) {
    this.http
      .post(`${HttpClientService.URL_SERVER}${endpoint}`, body)
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
