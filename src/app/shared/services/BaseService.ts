import { HttpHeaders } from '@angular/common/http';
import { Constants } from 'src/app/commons/Constants';

export class BaseService {

  protected headersBasic = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('Authorization', `Basic ${Constants.AUTORIZATION_BASIC}`);
}
