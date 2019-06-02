import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authent } from './authent.interface';
import { Token } from 'src/app/models/Token';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/commons/Constants';
import { User } from 'src/app/models/User';
import { LocalStorageAppService } from '../LocalStorageApp.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentService implements Authent {
  constructor(private http: HttpClient) {}

  getToken(login: string, password: string): Observable<Token> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', `Basic ${Constants.AUTORIZATION_BASIC}`);
    return this.http.post<Token>(
      `${Constants.URL_API}/oauth/token`,
      {
        grant_type: 'password',
        scope: Constants.SCOPE,
        username: login,
        password: password
      },
      { headers }
    );
  }

  getUserStorage(): User {
    return LocalStorageAppService.getUserLogged();
  }

  setUserStorage(user: User) {
    return LocalStorageAppService.setUserLogged(user);
  }

  getTokenStorage(): Token {
    return LocalStorageAppService.getToken();
  }

  setTokenStorage(token: Token) {
    return LocalStorageAppService.setToken(token);
  }
}
