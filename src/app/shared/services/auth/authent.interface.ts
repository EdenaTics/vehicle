import { Token } from 'src/app/models/Token';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';

export interface IAuthent {
  getToken(login: String, passsword: String): Observable<Token>;
  getCode(login: String, passsword: String): Observable<String>;
  getUserStorage(): User;
  setUserStorage(user: User);
  getTokenStorage(): Token;
  setTokenStorage(token: Token);
}
