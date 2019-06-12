import { Fleet } from 'src/app/models/fleet/Fleet';
import { Observable } from 'rxjs';

export interface IFleet {
  getFleets(): Observable<Array<Fleet>>;
}
