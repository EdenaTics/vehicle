import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IAuthent } from './authent.interface';
import { Token } from 'src/app/models/Token';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/commons/Constants';
import { User } from 'src/app/models/User';
import { LocalStorageAppService } from '../LocalStorageApp.service';
import { BaseService } from '../BaseService';

@Injectable({
  providedIn: 'root'
})
export class AuthentService  extends BaseService implements IAuthent {
  constructor(private http: HttpClient) {
    super();
  }

  getToken(login: string, password: string): Observable<Token> {
    const httpParams = new HttpParams()
      .set('grant_type', 'password')
      .set('username', login)
      .set('password', password)
      .set('scope', Constants.SCOPE);
    const options = { params: httpParams, headers: this.headersBasic };
    return this.http.post<Token>(`${Constants.URL_API}/oauth/token`, null, options);
  }

  getCode(login: string, password: string): Observable<string> {
     const httpParams = new HttpParams()
      .set('response_type', 'code')
      .append('client_id', Constants.API_KEY)
      .append('scope', Constants.SCOPE);
    const options = { params: httpParams };
    return this.http.get<string>(`${Constants.URL_API}/oauth/authorize`, options);
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
