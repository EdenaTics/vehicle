import { Injectable } from '@angular/core';
import { IFleet } from './IFleet';
import { Observable } from 'rxjs';
import { Fleet } from 'src/app/models/fleet/Fleet';
import { Constants } from 'src/app/commons/Constants';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../BaseService';
import { Vehicle } from 'src/app/models/fleet/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class FleetsService extends BaseService implements IFleet {
  constructor(private http: HttpClient) {
    super();
  }

  getMyFleets(): Observable<Array<Fleet>> {
    return this.http.get<Array<Fleet>>(`${Constants.URL_API}/fleets/mine`);
  }

  getVehicleByFleet(idFleet: string): Observable<Array<Vehicle>> {
    return this.http.get<Array<Vehicle>>(`${Constants.URL_API}/fleets/${idFleet}/vehicles`);
  }
}
