import { Injectable } from '@angular/core';
import { HttpClientService } from '../../services/http-client.service';
import { RegisterApi } from 'app-chat-model';
import { ModalService, ModalTypes } from '../../services/modal.service';

@Injectable({
  providedIn: 'root',
})
export class LoginClientService {
  constructor(private http: HttpClientService, private modal: ModalService) {}

  async register(username: string, password: string): Promise<boolean> {
    return this.http
      .post<RegisterApi>('/auth/register', {
        username: username,
        password: password,
      })
      .then((res) => {
        return true;
      })
      .catch((err) => {
        console.error(err.error.message);
        this.modal.open(err.error.message, ModalTypes.ERROR);
        return false;
      });
  }
}
