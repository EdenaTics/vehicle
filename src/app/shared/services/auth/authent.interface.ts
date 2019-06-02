import { Token } from 'src/app/models/Token';
import { Observable } from 'rxjs';

export interface Authent {
     getToken(login: String, passsword: String): Observable<Token>;
}
