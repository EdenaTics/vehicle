import { Component, OnInit } from '@angular/core';
import { IFleet } from 'src/app/shared/services/fleet/IFleet';
import { FleetsService } from 'src/app/shared/services/fleet/Fleets.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Fleet } from 'src/app/models/fleet/Fleet';

@Component({
  selector: 'app-myfleets',
  templateUrl: './myfleets.component.html',
  styleUrls: ['./myfleets.component.scss']
})
export class MyFleetsComponent implements OnInit {
  private fleetService: IFleet;
  displayedColumns = ['id', 'name', 'company', 'active', 'role', 'jointAt'];
  dataSource: MatTableDataSource<Fleet>;

  constructor(private router: Router, fleetServices: FleetsService) {
    this.fleetService = fleetServices;
  }

  ngOnInit() {
    this.getMyFleets();
  }

  setFleetsDataTable(list: Array<Fleet>) {
    this.dataSource = new MatTableDataSource(list);
  }

  getMyFleets() {
    this.fleetService.getMyFleets().subscribe(
      value => {
        console.log(value);
        this.setFleetsDataTable(value);
      },
      error => {
        console.log(error);
      },
      () => {}
    );
  }
}
