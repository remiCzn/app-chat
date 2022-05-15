import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  private static URL_SERVER = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  get(endpoint: string) {
    return new Promise((resolve, reject) => {
      this.http.get(`${HttpClientService.URL_SERVER}${endpoint}`).subscribe({
        next: (res) => {
          resolve(res);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }

  post<T>(endpoint: string, body: T) {
    return new Promise((resolve, reject) => {
      this.http
        .post(`${HttpClientService.URL_SERVER}${endpoint}`, body)
        .subscribe({
          next: (res) => {
            console.log(res);
            resolve(res);
          },
          error: (err) => {
            console.error(err);
            reject(err);
          },
        });
    });
  }
}
