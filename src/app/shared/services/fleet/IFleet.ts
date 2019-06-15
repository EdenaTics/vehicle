import { Fleet } from 'src/app/models/fleet/Fleet';
import { Observable } from 'rxjs';

export interface IFleet {
  getMyFleets(): Observable<Array<Fleet>>;
}
