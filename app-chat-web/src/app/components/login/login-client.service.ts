import { Injectable } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { LoginApi, LoginApiResponse, RegisterApi } from 'app-chat-model';
import { ModalService, ModalTypes } from '../../services/modal.service';
import { JwtTokenService } from '../../services/jwt-token.service';

@Injectable({
  providedIn: 'root',
})
export class LoginClientService {
  constructor(
    private http: HttpClientService,
    private modal: ModalService,
    private jwtService: JwtTokenService
  ) {}

  async register(username: string, password: string): Promise<boolean> {
    return this.http
      .post<RegisterApi>('/auth/register', {
        username: username,
        password: password,
      })
      .then(() => {
        return true;
      })
      .catch((err) => {
        console.error(err.error.message);
        this.modal.open(err.error.message, ModalTypes.ERROR);
        return false;
      });
  }

  async login(username: any, password: any) {
    return this.http
      .post<LoginApi>('/auth/login', {
        username: username,
        password: password,
      })
      .then((res: LoginApiResponse) => {
        if (res.token !== undefined && res.expiryTime !== undefined) {
          this.jwtService.setToken(res.token, res.expiryTime);
        }
        return true;
      })
      .catch((err) => {
        console.error(err.error.message);
        this.modal.open(err.error.message, ModalTypes.ERROR);
        return false;
      });
  }
}
