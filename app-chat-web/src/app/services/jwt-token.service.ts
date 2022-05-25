import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class JwtTokenService {
  private tokenKey = 'token';
  private expiryDateKey = 'expiryDate';

  constructor() {}

  setToken(token: string, expiryTime: number) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.expiryDateKey, expiryTime.toString());
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isTokenExpired(): boolean {
    const expiryDate: string | null = localStorage.getItem(this.expiryDateKey);
    if (expiryDate) {
      return parseInt(expiryDate) - new Date().getTime() < 5000;
    }
    return false;
  }

  logout() {
    localStorage.clear();
  }
}
