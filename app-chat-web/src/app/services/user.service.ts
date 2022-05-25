import { Injectable } from '@angular/core';
import { HttpClientService } from './http-client.service';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private username: string | undefined;

  constructor(
    private httpClient: HttpClientService,
    private jwtService: JwtTokenService
  ) {}

  async getUsername(): Promise<string> {
    if (this.username != undefined) {
      return this.username;
    }
    await this.updateProfile();
    return this.username || '';
  }

  private async updateProfile(): Promise<void> {
    const token = this.jwtService.getToken();
    if (token == null) {
      this.jwtService.logout();
      return;
    }
    await this.httpClient
      .post<{ token: string }>('/user', { token: token })
      .then((res: { username: string }) => {
        this.username = res.username;
      })
      .catch(() => {
        this.jwtService.logout();
      });
  }
}
