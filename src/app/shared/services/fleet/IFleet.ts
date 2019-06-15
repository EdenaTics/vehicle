import { Fleet } from 'src/app/models/fleet/Fleet';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/models/fleet/Vehicle';

export interface IFleet {
  getMyFleets(): Observable<Array<Fleet>>;
  getVehicleByFleet(idFleet: string): Observable<Array<Vehicle>>;
}
