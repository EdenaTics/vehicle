import { Injectable } from '@angular/core';
import { IFleet } from './IFleet';
import { Observable } from 'rxjs';
import { Fleet } from 'src/app/models/fleet/Fleet';
import { Constants } from 'src/app/commons/Constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FleetsService implements IFleet {

constructor(private http: HttpClient) { }

getFleets(): Observable<Array<Fleet>> {
    return this.http.get<Array<Fleet>>(`${Constants.URL_API}/fleets/mine`);
}

}
