import { Component, OnInit } from '@angular/core';
import { IFleet } from 'src/app/shared/services/fleet/IFleet';
import { Vehicle } from 'src/app/models/fleet/Vehicle';
import { MatTableDataSource } from '@angular/material';
import { FleetsService } from 'src/app/shared/services/fleet/Fleets.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {
  private fleetService: IFleet;
  displayedColumns = ['name', 'licensePlate', 'energy', 'device', 'loan', 'tags'];
  dataSource: MatTableDataSource<Vehicle>;

  constructor(private router: Router, private activateRoute: ActivatedRoute, fleetServices: FleetsService) {
    this.fleetService = fleetServices;
  }

  ngOnInit() {
    const params = this.activateRoute.snapshot.queryParams;
    this.getVehicles(params.idFleet);
  }

  setVehiclesDataTable(list: Array<Vehicle>) {
    this.dataSource = new MatTableDataSource(list);
  }

  getVehicles(idFleet: string) {
    this.fleetService.getVehicleByFleet(idFleet).subscribe(
      value => {
        console.log(value);
        this.setVehiclesDataTable(value);
      },
      error => {
        console.log(error);
      },
      () => {}
    );
  }
}
